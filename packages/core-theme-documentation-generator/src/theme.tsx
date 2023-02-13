import {
  DefaultTheme,
  DefaultThemeRenderContext,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  JSX,
  PageEvent,
  Reflection,
  ReflectionCategory,
  ReflectionKind,
  Options,
  ContainerReflection
} from "typedoc";

class SdkThemeContext extends DefaultThemeRenderContext {

  constructor (theme: DefaultTheme, options: Options) {
    super(theme, options)

    const oldToolbar = this.toolbar
    const oldHeader = this.header
    const oldFooter = this.footer

    this.toolbar = (props) => {
      const script = `
      // MENU CONTROLS
      (() => {
        const menu = document.querySelector('.menu')

        function toggleMenu () {
          const html = document.documentElement
          if (html.classList.contains('is-mobile')) {
            if (html.classList.contains('has-menu')) {
              html.classList.remove('has-menu')
            } else {
              html.classList.add('has-menu')
              document.querySelector('.col-menu a').focus()
            }
          }
        }

        menu.addEventListener('keyup', (e) => {
          if (e.key === 'Enter') {
            toggleMenu()
          }
        })

        document.addEventListener('keyup', (e) => {
          if (e.key === 'Escape') {
            document.documentElement.classList.remove('has-menu')
          }
        })

      })();

      // SEARCH LIVE REGION
      (() => {
        function debounce(fn) {
          let timeoutId;
          return function () {
        
            const invoke = () => {
              fn.call(null)
            }

            if (timeoutId) {
              clearTimeout(timeoutId)
            }
            timeoutId = setTimeout(() => {
              invoke()
            }, 300)
          }
        }

        const searchField = document.querySelector('#tsd-search-field')
        const liveRegion = document.querySelector('#search-live-region')
        const results = document.querySelector('.results')

        function handleResults () {
          let resultText = ''
          if (document.querySelector('.results .current')) {
            resultText = 'Selected ' + document.querySelector('.results .current').innerText
          }

          if (results.children.length === 0) {
            resultText = 'Enter text to search, use arrow keys to navigate results.'
          } else {
            resultText = results.children.length + " items found, use arrow keys to navigate results"
          }
          liveRegion.innerText = resultText
        }

        searchField.addEventListener('keydown', debounce(handleResults))
      })();
      `
      const style = `
        .skip-to-content-nav {
          position: absolute;
          height: 1px;
          width: 1px;
          overflow: hidden;
          top: .2em;
          left: .2em;
        }
        .skip-to-content-nav:active, .skip-to-content-nav:focus {
          z-index: 1000;
          background: var(--color-background);
          border: 1px solid var(--color-link);
          padding: .5em;
          height: fit-content;
          width: fit-content;
        }

        #search-live-region {
          z-index: -1;
          position: absolute;
          width: 1;
          height: 1;
        }
      `
      return <>
        <style>
            {style}
        </style>
        <a href="#jump-to-content" class="skip-to-content-nav">
          Jump to Content
        </a>
        { oldToolbar(props) }
        <div aria-live="polite" id="search-live-region">
          
        </div>
        <script>
          <JSX.Raw html={script} />
        </script>
      </>
    }

    this.header = (props: PageEvent<Reflection>) => {
      const style = `
      :root {
        /* Light */
        --light-color-background: #FFFFFF;
        --light-color-text: #232F3E;
        --light-color-link: #DF2A5D;

        /* Dark */
        --dark-color-background: #232F3E;
        --dark-color-text: #FFFFFF;
        --dark-color-link: #FF9900;
      }

      .tsd-filter-visibility {
        display: none;
      }

      .col-menu {
        width: 80vw
      }
    `

    return <>
        <style>
          { style }
        </style>
        { oldHeader(props) }
        <div id="jump-to-content" tabIndex={-1} />
      </>
    }

    this.footer = () => {
      const script = `
      (() => {
        // add alt text to mobile menu icons
        document.querySelector('.tsd-widget.tsd-toolbar-icon.menu svg').setAttribute('alt', 'toggle menu')
        document.querySelector('.tsd-widget.tsd-toolbar-icon.search svg').setAttribute('alt', 'open search')
      })();
      `
      return <>
      {oldFooter()}
      <script>
        <JSX.Raw html={script} />
      </script>
      </>
    }
  }

  override primaryNavigation = (props: PageEvent<Reflection>) => {
    const categories = [];
    try {
      const defaultGroup = this.options.getValue("defaultGroup") as string;
      const group = props.model?.["groups"]?.find((value) => value.title === defaultGroup) ?? {};
      categories.push(...(group.categories || []));
    } catch (err) {
      console.warn("No value was set for `defaultGroup` options");
      if (props.model.isProject()) {
        const category = new ReflectionCategory("Modules");
        category.children.push(...props.model.getChildrenByKind(ReflectionKind.SomeModule));
        categories.push(category);
      }
    }
    if (categories?.length) {
      const selected = props.model.isProject();

      return (
        <div>
          {categories.map((category: ReflectionCategory) => {
            return (
              <nav class="tsd-navigation" aria-label={category.title}>
                <details class="tsd-index-accordion" open={true}>
                  <summary class="tsd-accordion-summary">
                    <h3>
                      {this.icons.chevronDown()} {category.title}
                    </h3>
                  </summary>
                  <div class="tsd-accordion-details">
                    <ul>
                      {category.children.map((reflection) => {
                        let urlTo = this.urlTo(reflection)
                        if (urlTo && !urlTo.includes('.html')) {
                          urlTo += '/'
                        }
                        return (
                          <li class={selected ? "selected" : ""}>
                            <a href={urlTo}>
                              <wbr>{reflection.name}</wbr>
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </details>
              </nav>
            );
          })}
        </div>
      );
    } else {
      return;
    }
  };



}

export class SdkTheme extends DefaultTheme {
  private _contextCache?: SdkThemeContext;
  override getRenderContext() {
    if (!this._contextCache) {
      this._contextCache = new SdkThemeContext(this, this.application.options);
    }
    return this._contextCache;
  }
}
