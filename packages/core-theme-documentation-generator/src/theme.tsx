import {
  DefaultTheme,
  DefaultThemeRenderContext,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  JSX,
  PageEvent,
  Reflection,
  ReflectionCategory,
  ReflectionKind,
} from "typedoc";

class SdkThemeContext extends DefaultThemeRenderContext {
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
