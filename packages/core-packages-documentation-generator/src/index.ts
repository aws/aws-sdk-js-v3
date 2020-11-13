import { PluginHost } from "typedoc/dist/lib/utils";

import { SdkIndexLinkClientPlugin } from "./sdk-index-link-client";

/**
 *
 * @param pluginHost An instance of PluginHost.
 */
module.exports = function load(pluginHost: PluginHost) {
  const application = pluginHost.owner;
  // Core packages doc generator plugins
  // @ts-ignore
  application.options.addDeclaration({ name: "clientsDocPath" });
  application.renderer.addComponent("SdkIndexLinkClientPlugin", SdkIndexLinkClientPlugin as any);
};
