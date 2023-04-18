import { Application, Context, Converter, ParameterType } from "typedoc";

import { SdkIndexLinkClientPlugin } from "./sdk-index-link-client";

/**
 * @internal
 */
export function load(app: Application) {
  // Core packages doc generator plugins.
  app.options.addDeclaration({
    name: "clientDocs",
    help:
      'The path pattern denotes the location of individual service client doc. "{{CLIENT}}" will be replaced with the ' +
      "client name. For example: `path/{{CLIENT}}/docs` will target service docs at `path/service/docs`",
    defaultValue: "docs/clients/{{CLIENT}}/docs",
    type: ParameterType.String,
  });
  app.options.addDeclaration({
    name: "defaultGroup",
    help: "Default group to place categories as children",
    defaultValue: "Modules",
    type: ParameterType.String,
  });

  new SdkIndexLinkClientPlugin(app.options, app.logger, app.renderer);
}
