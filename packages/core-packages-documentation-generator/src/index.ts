import { ParameterType, PluginHost } from "typedoc/dist/lib/utils";

import { SdkIndexLinkClientPlugin } from "./sdk-index-link-client";

/**
 * @param pluginHost An instance of PluginHost.
 */
module.exports = function load(pluginHost: PluginHost) {
  const application = pluginHost.owner;

  // Core packages doc generator plugins.
  application.options.addDeclaration({
    name: "clientDocs",
    help:
      'The path pattern denotes the location of individual service client doc. "{{CLIENT}}" will be replaced with the ' +
      "client name. For example: `path/{{CLIENT}}/docs` will target s3 docs at `path/client-s3/docs`",
    defaultValue: "clients/{{CLIENT}}/docs",
    type: ParameterType.String,
  });
  application.renderer.addComponent("SdkIndexLinkClientPlugin", new SdkIndexLinkClientPlugin(application.renderer));
};
