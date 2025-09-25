// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListIntegrationAssociationsRequest, ListIntegrationAssociationsResponse } from "../models/models_2";
import { ListIntegrationAssociations } from "../schemas/schemas_11_Integration";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListIntegrationAssociationsCommand}.
 */
export interface ListIntegrationAssociationsCommandInput extends ListIntegrationAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link ListIntegrationAssociationsCommand}.
 */
export interface ListIntegrationAssociationsCommandOutput
  extends ListIntegrationAssociationsResponse,
    __MetadataBearer {}

/**
 * <p>Provides summary information about the Amazon Web Services resource associations for the
 *    specified Amazon Connect instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListIntegrationAssociationsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListIntegrationAssociationsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // ListIntegrationAssociationsRequest
 *   InstanceId: "STRING_VALUE", // required
 *   IntegrationType: "EVENT" || "VOICE_ID" || "PINPOINT_APP" || "WISDOM_ASSISTANT" || "WISDOM_KNOWLEDGE_BASE" || "WISDOM_QUICK_RESPONSES" || "Q_MESSAGE_TEMPLATES" || "CASES_DOMAIN" || "APPLICATION" || "FILE_SCANNER" || "SES_IDENTITY" || "ANALYTICS_CONNECTOR" || "CALL_TRANSFER_CONNECTOR" || "COGNITO_USER_POOL",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   IntegrationArn: "STRING_VALUE",
 * };
 * const command = new ListIntegrationAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // ListIntegrationAssociationsResponse
 * //   IntegrationAssociationSummaryList: [ // IntegrationAssociationSummaryList
 * //     { // IntegrationAssociationSummary
 * //       IntegrationAssociationId: "STRING_VALUE",
 * //       IntegrationAssociationArn: "STRING_VALUE",
 * //       InstanceId: "STRING_VALUE",
 * //       IntegrationType: "EVENT" || "VOICE_ID" || "PINPOINT_APP" || "WISDOM_ASSISTANT" || "WISDOM_KNOWLEDGE_BASE" || "WISDOM_QUICK_RESPONSES" || "Q_MESSAGE_TEMPLATES" || "CASES_DOMAIN" || "APPLICATION" || "FILE_SCANNER" || "SES_IDENTITY" || "ANALYTICS_CONNECTOR" || "CALL_TRANSFER_CONNECTOR" || "COGNITO_USER_POOL",
 * //       IntegrationArn: "STRING_VALUE",
 * //       SourceApplicationUrl: "STRING_VALUE",
 * //       SourceApplicationName: "STRING_VALUE",
 * //       SourceType: "SALESFORCE" || "ZENDESK" || "CASES",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListIntegrationAssociationsCommandInput - {@link ListIntegrationAssociationsCommandInput}
 * @returns {@link ListIntegrationAssociationsCommandOutput}
 * @see {@link ListIntegrationAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListIntegrationAssociationsCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class ListIntegrationAssociationsCommand extends $Command
  .classBuilder<
    ListIntegrationAssociationsCommandInput,
    ListIntegrationAssociationsCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "ListIntegrationAssociations", {})
  .n("ConnectClient", "ListIntegrationAssociationsCommand")
  .sc(ListIntegrationAssociations)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListIntegrationAssociationsRequest;
      output: ListIntegrationAssociationsResponse;
    };
    sdk: {
      input: ListIntegrationAssociationsCommandInput;
      output: ListIntegrationAssociationsCommandOutput;
    };
  };
}
