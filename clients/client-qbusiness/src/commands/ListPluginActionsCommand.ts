// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListPluginActionsRequest, ListPluginActionsResponse } from "../models/models_1";
import { QBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QBusinessClient";
import { ListPluginActions } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPluginActionsCommand}.
 */
export interface ListPluginActionsCommandInput extends ListPluginActionsRequest {}
/**
 * @public
 *
 * The output of {@link ListPluginActionsCommand}.
 */
export interface ListPluginActionsCommandOutput extends ListPluginActionsResponse, __MetadataBearer {}

/**
 * <p>Lists configured Amazon Q Business actions for a specific plugin in an Amazon Q Business application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QBusinessClient, ListPluginActionsCommand } from "@aws-sdk/client-qbusiness"; // ES Modules import
 * // const { QBusinessClient, ListPluginActionsCommand } = require("@aws-sdk/client-qbusiness"); // CommonJS import
 * // import type { QBusinessClientConfig } from "@aws-sdk/client-qbusiness";
 * const config = {}; // type is QBusinessClientConfig
 * const client = new QBusinessClient(config);
 * const input = { // ListPluginActionsRequest
 *   applicationId: "STRING_VALUE", // required
 *   pluginId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListPluginActionsCommand(input);
 * const response = await client.send(command);
 * // { // ListPluginActionsResponse
 * //   nextToken: "STRING_VALUE",
 * //   items: [ // Actions
 * //     { // ActionSummary
 * //       actionIdentifier: "STRING_VALUE",
 * //       displayName: "STRING_VALUE",
 * //       instructionExample: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListPluginActionsCommandInput - {@link ListPluginActionsCommandInput}
 * @returns {@link ListPluginActionsCommandOutput}
 * @see {@link ListPluginActionsCommandInput} for command's `input` shape.
 * @see {@link ListPluginActionsCommandOutput} for command's `response` shape.
 * @see {@link QBusinessClientResolvedConfig | config} for QBusinessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You don't have access to perform this action. Make sure you have the required permission policies and user accounts and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An issue occurred with the internal server used for your Amazon Q Business service. Wait some minutes and try again, or contact <a href="http://aws.amazon.com/contact-us/">Support</a> for help.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The application or plugin resource you want to use doesn’t exist. Make sure you have provided the correct resource and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to throttling. Reduce the number of requests and try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input doesn't meet the constraints set by the Amazon Q Business service. Provide the correct input and try again.</p>
 *
 * @throws {@link QBusinessServiceException}
 * <p>Base exception class for all service exceptions from QBusiness service.</p>
 *
 *
 * @public
 */
export class ListPluginActionsCommand extends $Command
  .classBuilder<
    ListPluginActionsCommandInput,
    ListPluginActionsCommandOutput,
    QBusinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QBusinessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ExpertQ", "ListPluginActions", {})
  .n("QBusinessClient", "ListPluginActionsCommand")
  .sc(ListPluginActions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPluginActionsRequest;
      output: ListPluginActionsResponse;
    };
    sdk: {
      input: ListPluginActionsCommandInput;
      output: ListPluginActionsCommandOutput;
    };
  };
}
