// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListChatResponseConfigurationsRequest, ListChatResponseConfigurationsResponse } from "../models/models_0";
import { QBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QBusinessClient";
import { ListChatResponseConfigurations } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListChatResponseConfigurationsCommand}.
 */
export interface ListChatResponseConfigurationsCommandInput extends ListChatResponseConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link ListChatResponseConfigurationsCommand}.
 */
export interface ListChatResponseConfigurationsCommandOutput
  extends ListChatResponseConfigurationsResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves a list of all chat response configurations available in a specified Amazon Q Business application. This operation returns summary information about each configuration to help administrators manage and select appropriate response settings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QBusinessClient, ListChatResponseConfigurationsCommand } from "@aws-sdk/client-qbusiness"; // ES Modules import
 * // const { QBusinessClient, ListChatResponseConfigurationsCommand } = require("@aws-sdk/client-qbusiness"); // CommonJS import
 * // import type { QBusinessClientConfig } from "@aws-sdk/client-qbusiness";
 * const config = {}; // type is QBusinessClientConfig
 * const client = new QBusinessClient(config);
 * const input = { // ListChatResponseConfigurationsRequest
 *   applicationId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListChatResponseConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // ListChatResponseConfigurationsResponse
 * //   chatResponseConfigurations: [ // ChatResponseConfigurations
 * //     { // ChatResponseConfiguration
 * //       chatResponseConfigurationId: "STRING_VALUE", // required
 * //       chatResponseConfigurationArn: "STRING_VALUE", // required
 * //       displayName: "STRING_VALUE", // required
 * //       responseConfigurationSummary: "STRING_VALUE",
 * //       status: "CREATING" || "UPDATING" || "FAILED" || "ACTIVE", // required
 * //       createdAt: new Date("TIMESTAMP"),
 * //       updatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListChatResponseConfigurationsCommandInput - {@link ListChatResponseConfigurationsCommandInput}
 * @returns {@link ListChatResponseConfigurationsCommandOutput}
 * @see {@link ListChatResponseConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListChatResponseConfigurationsCommandOutput} for command's `response` shape.
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
export class ListChatResponseConfigurationsCommand extends $Command
  .classBuilder<
    ListChatResponseConfigurationsCommandInput,
    ListChatResponseConfigurationsCommandOutput,
    QBusinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QBusinessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ExpertQ", "ListChatResponseConfigurations", {})
  .n("QBusinessClient", "ListChatResponseConfigurationsCommand")
  .sc(ListChatResponseConfigurations)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListChatResponseConfigurationsRequest;
      output: ListChatResponseConfigurationsResponse;
    };
    sdk: {
      input: ListChatResponseConfigurationsCommandInput;
      output: ListChatResponseConfigurationsCommandOutput;
    };
  };
}
