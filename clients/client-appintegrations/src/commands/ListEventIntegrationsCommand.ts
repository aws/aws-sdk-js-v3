// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppIntegrationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppIntegrationsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListEventIntegrationsRequest, ListEventIntegrationsResponse } from "../models/models_0";
import { de_ListEventIntegrationsCommand, se_ListEventIntegrationsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListEventIntegrationsCommand}.
 */
export interface ListEventIntegrationsCommandInput extends ListEventIntegrationsRequest {}
/**
 * @public
 *
 * The output of {@link ListEventIntegrationsCommand}.
 */
export interface ListEventIntegrationsCommandOutput extends ListEventIntegrationsResponse, __MetadataBearer {}

/**
 * <p>Returns a paginated list of event integrations in the account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppIntegrationsClient, ListEventIntegrationsCommand } from "@aws-sdk/client-appintegrations"; // ES Modules import
 * // const { AppIntegrationsClient, ListEventIntegrationsCommand } = require("@aws-sdk/client-appintegrations"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new AppIntegrationsClient(config);
 * const input = { // ListEventIntegrationsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListEventIntegrationsCommand(input);
 * const response = await client.send(command);
 * // { // ListEventIntegrationsResponse
 * //   EventIntegrations: [ // EventIntegrationsList
 * //     { // EventIntegration
 * //       EventIntegrationArn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       EventFilter: { // EventFilter
 * //         Source: "STRING_VALUE", // required
 * //       },
 * //       EventBridgeBus: "STRING_VALUE",
 * //       Tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEventIntegrationsCommandInput - {@link ListEventIntegrationsCommandInput}
 * @returns {@link ListEventIntegrationsCommandOutput}
 * @see {@link ListEventIntegrationsCommandInput} for command's `input` shape.
 * @see {@link ListEventIntegrationsCommandOutput} for command's `response` shape.
 * @see {@link AppIntegrationsClientResolvedConfig | config} for AppIntegrationsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>Request processing failed due to an error or failure with the service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link AppIntegrationsServiceException}
 * <p>Base exception class for all service exceptions from AppIntegrations service.</p>
 *
 * @public
 */
export class ListEventIntegrationsCommand extends $Command
  .classBuilder<
    ListEventIntegrationsCommandInput,
    ListEventIntegrationsCommandOutput,
    AppIntegrationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppIntegrationsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonAppIntegrationService", "ListEventIntegrations", {})
  .n("AppIntegrationsClient", "ListEventIntegrationsCommand")
  .f(void 0, void 0)
  .ser(se_ListEventIntegrationsCommand)
  .de(de_ListEventIntegrationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEventIntegrationsRequest;
      output: ListEventIntegrationsResponse;
    };
    sdk: {
      input: ListEventIntegrationsCommandInput;
      output: ListEventIntegrationsCommandOutput;
    };
  };
}
