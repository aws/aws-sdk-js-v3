import {
  DefaultTheme,
  DefaultThemeRenderContext,
  JSX, // eslint-disable-line @typescript-eslint/no-unused-vars
  PageEvent,
  Reflection,
  ReflectionCategory,
} from "typedoc";

class SdkThemeContext extends DefaultThemeRenderContext {
  override primaryNavigation = (props: PageEvent<Reflection>) => {
    const defaultGroup = this.options.getValue("defaultGroup") as string;
    const { categories } = props.model?.["groups"]?.find((value) => value.title === defaultGroup) ?? {};
    if (categories?.length) {
      const selected = props.model.isProject();

      return (
        <div>
          {categories.map((category: ReflectionCategory) => {
            return (
              <nav class="tsd-navigation">
                <details class="tsd-index-accordion" open={true}>
                  <summary class="tsd-accordion-summary">
                    <h3>
                      {this.icons.chevronDown()} {category.title}
                    </h3>
                  </summary>
                  <div class="tsd-accordion-details">
                    <ul>
                      {category.children.map((reflection) => {
                        return (
                          <li class={selected ? "selected" : ""}>
                            <a href={this.urlTo(reflection)}>
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
