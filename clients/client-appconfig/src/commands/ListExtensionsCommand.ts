// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { Extensions, ListExtensionsRequest } from "../models/models_0";
import { ListExtensions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListExtensionsCommand}.
 */
export interface ListExtensionsCommandInput extends ListExtensionsRequest {}
/**
 * @public
 *
 * The output of {@link ListExtensionsCommand}.
 */
export interface ListExtensionsCommandOutput extends Extensions, __MetadataBearer {}

/**
 * Lists all custom and Amazon Web Services authored AppConfig extensions in the account. For more information about extensions, see [Extending workflows](https://docs.aws.amazon.com/appconfig/latest/userguide/working-with-appconfig-extensions.html) in the *AppConfig User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, ListExtensionsCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, ListExtensionsCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * // import type { AppConfigClientConfig } from "@aws-sdk/client-appconfig";
 * const config = {}; // type is AppConfigClientConfig
 * const client = new AppConfigClient(config);
 * const input = { // ListExtensionsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Name: "STRING_VALUE",
 * };
 * const command = new ListExtensionsCommand(input);
 * const response = await client.send(command);
 * // { // Extensions
 * //   Items: [ // ExtensionSummaries
 * //     { // ExtensionSummary
 * //       Id: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       VersionNumber: Number("int"),
 * //       Arn: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListExtensionsCommandInput - {@link ListExtensionsCommandInput}
 * @returns {@link ListExtensionsCommandOutput}
 * @see {@link ListExtensionsCommandInput} for command's `input` shape.
 * @see {@link ListExtensionsCommandOutput} for command's `response` shape.
 * @see {@link AppConfigClientResolvedConfig | config} for AppConfigClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * There was an internal failure in the AppConfig service.
 *
 * @throws {@link AppConfigServiceException}
 *
 * Base exception class for all service exceptions from AppConfig service.
 *
 * @public
 */
export class ListExtensionsCommand extends command<ListExtensionsCommandInput, ListExtensionsCommandOutput>(
  _ep0,
  _mw0,
  "ListExtensions",
  ListExtensions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListExtensionsRequest;
      output: Extensions;
    };
    sdk: {
      input: ListExtensionsCommandInput;
      output: ListExtensionsCommandOutput;
    };
  };
}
