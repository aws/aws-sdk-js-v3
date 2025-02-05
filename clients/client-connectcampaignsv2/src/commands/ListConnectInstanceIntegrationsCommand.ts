// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ConnectCampaignsV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ConnectCampaignsV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListConnectInstanceIntegrationsRequest, ListConnectInstanceIntegrationsResponse } from "../models/models_0";
import {
  de_ListConnectInstanceIntegrationsCommand,
  se_ListConnectInstanceIntegrationsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListConnectInstanceIntegrationsCommand}.
 */
export interface ListConnectInstanceIntegrationsCommandInput extends ListConnectInstanceIntegrationsRequest {}
/**
 * @public
 *
 * The output of {@link ListConnectInstanceIntegrationsCommand}.
 */
export interface ListConnectInstanceIntegrationsCommandOutput
  extends ListConnectInstanceIntegrationsResponse,
    __MetadataBearer {}

/**
 * Provides summary information about the integration under the specified Connect instance.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCampaignsV2Client, ListConnectInstanceIntegrationsCommand } from "@aws-sdk/client-connectcampaignsv2"; // ES Modules import
 * // const { ConnectCampaignsV2Client, ListConnectInstanceIntegrationsCommand } = require("@aws-sdk/client-connectcampaignsv2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ConnectCampaignsV2Client(config);
 * const input = { // ListConnectInstanceIntegrationsRequest
 *   connectInstanceId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListConnectInstanceIntegrationsCommand(input);
 * const response = await client.send(command);
 * // { // ListConnectInstanceIntegrationsResponse
 * //   nextToken: "STRING_VALUE",
 * //   integrationSummaryList: [ // IntegrationSummaryList
 * //     { // IntegrationSummary Union: only one key present
 * //       customerProfiles: { // CustomerProfilesIntegrationSummary
 * //         domainArn: "STRING_VALUE", // required
 * //         objectTypeNames: { // ObjectTypeNamesMap // required
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //       qConnect: { // QConnectIntegrationSummary
 * //         knowledgeBaseArn: "STRING_VALUE", // required
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListConnectInstanceIntegrationsCommandInput - {@link ListConnectInstanceIntegrationsCommandInput}
 * @returns {@link ListConnectInstanceIntegrationsCommandOutput}
 * @see {@link ListConnectInstanceIntegrationsCommandInput} for command's `input` shape.
 * @see {@link ListConnectInstanceIntegrationsCommandOutput} for command's `response` shape.
 * @see {@link ConnectCampaignsV2ClientResolvedConfig | config} for ConnectCampaignsV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *  Request processing failed because of an error or failure with the service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The specified resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *  The input fails to satisfy the constraints specified by an AWS service.
 *
 * @throws {@link ConnectCampaignsV2ServiceException}
 * <p>Base exception class for all service exceptions from ConnectCampaignsV2 service.</p>
 *
 * @public
 */
export class ListConnectInstanceIntegrationsCommand extends $Command
  .classBuilder<
    ListConnectInstanceIntegrationsCommandInput,
    ListConnectInstanceIntegrationsCommandOutput,
    ConnectCampaignsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectCampaignsV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectCampaignServiceV2", "ListConnectInstanceIntegrations", {})
  .n("ConnectCampaignsV2Client", "ListConnectInstanceIntegrationsCommand")
  .f(void 0, void 0)
  .ser(se_ListConnectInstanceIntegrationsCommand)
  .de(de_ListConnectInstanceIntegrationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListConnectInstanceIntegrationsRequest;
      output: ListConnectInstanceIntegrationsResponse;
    };
    sdk: {
      input: ListConnectInstanceIntegrationsCommandInput;
      output: ListConnectInstanceIntegrationsCommandOutput;
    };
  };
}
