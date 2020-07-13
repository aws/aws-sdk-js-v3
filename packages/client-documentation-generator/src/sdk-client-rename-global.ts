import { Component, RendererComponent } from "typedoc/dist/lib/output/components";
import { RendererEvent } from "typedoc/dist/lib/output/events";
import { NavigationPlugin } from "typedoc/dist/lib/output/plugins";

@Component({ name: "SdkClientRenameGlobal" })
export class SdkClientRenameGlobalPlugin extends RendererComponent {
  private navigationPlugin: NavigationPlugin;
  initialize() {
    this.navigationPlugin = <any>this.owner.application.renderer.getComponent("navigation");
    this.listenTo(this.owner, {
      [RendererEvent.BEGIN]: this.onRenderedBegin,
    });
  }

  onRenderedBegin() {
    const navigationItem = this.navigationPlugin.navigation;
    if (!navigationItem) {
      return;
    }

    navigationItem.children.forEach((item) => {
      if (item.isGlobals && item.title === "Globals") {
        item.title = "Public Exports";
      }
    });
  }
}
