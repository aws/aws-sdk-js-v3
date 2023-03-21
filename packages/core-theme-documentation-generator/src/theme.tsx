import {
  ContainerReflection,
  DefaultTheme,
  DefaultThemeRenderContext,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  JSX,
  Options,
  PageEvent,
  Reflection,
  ReflectionCategory,
  ReflectionKind,
} from "typedoc";

class SdkThemeContext extends DefaultThemeRenderContext {
  constructor(theme: DefaultTheme, options: Options) {
    super(theme, options);

    const oldToolbar = this.toolbar;
    const oldHeader = this.header;
    const oldFooter = this.footer;

    this.toolbar = (props) => {
      const script = `
      // REDIRECT BROKEN CLIENT INDEX PAGES
      (() => {
        if (window.location.href.includes('clients/client') && /clients\\\/client-[^\\\/]+\\\//.test(window.location.href) === false) {
          window.location.href = window.location.href + '/'
        }
      })();

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

      // SEARCH LIVE REGION & RESULTS KEYBOARD NAVIGATION WITH ARROW KEYS
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

          if (document.querySelector('.results .current')) {
            resultText = document.querySelector('.results .current').innerText + ' is currently selected, type to search and use arrow keys to navigate results'
          } else if (results.children.length === 0) {
            resultText = 'Enter text to search, use arrow keys to navigate results.'
          } else {
            resultText = results.children.length + " items found, use arrow keys to navigate results"
          }
          liveRegion.innerText = resultText
        }

        searchField.addEventListener('keydown', debounce(handleResults));

        // ADD ARIA-TAGS TO SHIELDS/BADGES

        function waitForElm(selector) {
          return new Promise(resolve => {
              if (document.querySelector(selector)) {
                  return resolve(document.querySelector(selector));
              }
      
              const observer = new MutationObserver(mutations => {
                  if (document.querySelector(selector)) {
                      resolve(document.querySelector(selector));
                      observer.disconnect();
                  }
              });
      
              observer.observe(document.body, {
                  childList: true,
                  subtree: true
              });
          });
      }

      // wait for container to exist
      waitForElm('.container-main')
        .then(elm => {
          if (document.querySelectorAll('img[alt~="NPM"]').length > 0) {
            const versionEl = document.querySelector('img[alt="NPM version"]')
            const downloadsEl = document.querySelector('img[alt="NPM downloads"]')
  
            const sdkName = versionEl.src.match(/\\@aws-sdk\\/client-[^\\/]+/)[0]

            // fetch sdk version
            fetch("https://registry.npmjs.org/" + encodeURIComponent(sdkName) + "/latest")
              .then(res => {
                return res.json()
              })
              .then(({ version }) => {
                versionEl.alt += ' ' + version
              })
              .catch(err => {
                console.error(err)
              })

            // fetch sdk downloads for the last month
            fetch("https://api.npmjs.org/downloads/point/last-month/" + encodeURIComponent(sdkName))
              .then(res => {
                return res.json()
              })
              .then(({ downloads }) => {
                downloadsEl.alt += ' ' + downloads.toString() + ' per month'
              })
              .catch(err => {
                console.error(err)
              })
          }
        })
      })();
      `;
      const style = `
        .tsd-tag.ts-flagProtected {
          display: none;
        }

        details.tsd-index-content {
          border-color: var(--color-accent);
          border-width: 1px 0;
          border-style: solid;
        }

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
      `;
      return (
        <>
          <style>{style}</style>
          <a href="#jump-to-content" class="skip-to-content-nav">
            Jump to Content
          </a>
          {oldToolbar(props)}
          <div aria-live="polite" id="search-live-region"></div>
          <script>
            <JSX.Raw html={script} />
          </script>
        </>
      );
    };

    this.header = (props: PageEvent<Reflection>) => {
      const style = `
      :root {
        /* Light */
        --light-color-background: #FFFFFF;
        --light-color-text: #232F3E;
        --light-color-link: #DF2A5D;
      
        --light-color-ts: #DF2A5D;
        --light-color-ts-interface: #006643;
        --light-color-ts-enum: #7c5aed;
        --light-color-ts-class: #005B9E;
        --light-color-ts-function: #572be7;
        --light-color-ts-namespace: #9F1195;
        --light-color-ts-private: #595959;
        --light-color-ts-variable: #1A34FF;
      
        /* Dark */
        --dark-color-background: #232F3E;
        --dark-color-text: #FFFFFF;
        --dark-color-link: #FF9900;
      
        --dark-color-ts: #9ffcea;
        --dark-color-ts-interface: #38ef7d;
        --dark-color-ts-enum: #ffad97;
        --dark-color-ts-class: #7ce8f4;
        --dark-color-ts-function: #D4BAFF; 
        --dark-color-ts-namespace: #FF99DD;
        --dark-color-ts-private: #e2e2e2;
        --dark-color-ts-variable: #90BEFF;
      }

      .tsd-filter-visibility {
        display: none;
      }

      .col-menu {
        width: 80vw
      }

      footer {

      }
    `;

      return (
        <>
          <style>{style}</style>
          {oldHeader(props)}
          <div id="jump-to-content" tabIndex={-1} />
        </>
      );
    };

    this.footer = () => {
      const script = `
      (() => {
        // add alt text to mobile menu icons
        document.querySelector('.tsd-widget.tsd-toolbar-icon.menu svg').setAttribute('alt', 'toggle menu')
        document.querySelector('.tsd-widget.tsd-toolbar-icon.search svg').setAttribute('alt', 'open search')
      })();

      // Add footer to every page
      !(function () {
        var guideName = document.createElement("meta");
        (guideName.name = "guide-name"), (guideName.content = "API Reference");
      
        var serviceName = document.createElement("meta");
        (serviceName.name = "service-name"), (serviceName.content = "AWS SDK for JavaScript v3");
      
        document.head.appendChild(guideName);
        document.head.appendChild(serviceName);
      
        var zone = document.createElement("div");
        zone.className += "container";
        zone.id = "awsdocs-legal-zone-copyright";
        zone.style.padding = "2rem";
      
        var footer = document.getElementsByTagName("footer");
        if (footer && footer.length >= 1) {
          footer[footer.length - 1].appendChild(zone);
        } else {
          document.body.appendChild(zone);
        }
      
        var boot = document.createElement("script");
        boot.src = "/assets/js/awsdocs-boot.js";
        boot.type = "text/javascript";
        document.head.appendChild(boot);
      })();
      `;
      return (
        <>
          {oldFooter()}
          <footer />
          <script>
            <JSX.Raw html={script} />
          </script>
          <script type="text/javascript" src="https://a0.awsstatic.com/s_code/js/3.0/awshome_s_code.js"></script>
        </>
      );
    };
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
                        if (reflection.name.includes("documentation-generator")) return "";
                        let urlTo = this.urlTo(reflection);
                        if (urlTo && !urlTo.includes(".html") && !urlTo.endsWith("/")) {
                          urlTo += "/";
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
