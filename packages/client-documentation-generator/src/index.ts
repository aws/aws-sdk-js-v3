import { PluginHost } from "typedoc/dist/lib/utils";

import { SdkClientCommentUpdatePlugin } from "./sdk-client-comment-update";
import { SdkClientNavigationUpdatePlugin } from "./sdk-client-navigation-update";
import { SdkClientTocPlugin } from "./sdk-client-toc-plugin";

/**
 *
 * @param pluginHost An instance of PluginHost.
 */
module.exports = function load(pluginHost: PluginHost) {
  const application = pluginHost.owner;

  application.renderer.addComponent("SdkClientTocPlugin", SdkClientTocPlugin as any);
  application.converter.addComponent("SdkClientCommentUpdatePlugin", SdkClientCommentUpdatePlugin as any);
  application.converter.addComponent("SdkClientNavigationUpdatePlugin", SdkClientNavigationUpdatePlugin as any);
};
