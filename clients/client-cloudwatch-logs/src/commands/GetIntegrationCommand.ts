// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetIntegrationRequest, GetIntegrationResponse } from "../models/models_0";
import { de_GetIntegrationCommand, se_GetIntegrationCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetIntegrationCommand}.
 */
export interface GetIntegrationCommandInput extends GetIntegrationRequest {}
/**
 * @public
 *
 * The output of {@link GetIntegrationCommand}.
 */
export interface GetIntegrationCommandOutput extends GetIntegrationResponse, __MetadataBearer {}

/**
 * <p>Returns information about one integration between CloudWatch Logs and OpenSearch Service. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, GetIntegrationCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, GetIntegrationCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const input = { // GetIntegrationRequest
 *   integrationName: "STRING_VALUE", // required
 * };
 * const command = new GetIntegrationCommand(input);
 * const response = await client.send(command);
 * // { // GetIntegrationResponse
 * //   integrationName: "STRING_VALUE",
 * //   integrationType: "OPENSEARCH",
 * //   integrationStatus: "PROVISIONING" || "ACTIVE" || "FAILED",
 * //   integrationDetails: { // IntegrationDetails Union: only one key present
 * //     openSearchIntegrationDetails: { // OpenSearchIntegrationDetails
 * //       dataSource: { // OpenSearchDataSource
 * //         dataSourceName: "STRING_VALUE",
 * //         status: { // OpenSearchResourceStatus
 * //           status: "ACTIVE" || "NOT_FOUND" || "ERROR",
 * //           statusMessage: "STRING_VALUE",
 * //         },
 * //       },
 * //       application: { // OpenSearchApplication
 * //         applicationEndpoint: "STRING_VALUE",
 * //         applicationArn: "STRING_VALUE",
 * //         applicationId: "STRING_VALUE",
 * //         status: {
 * //           status: "ACTIVE" || "NOT_FOUND" || "ERROR",
 * //           statusMessage: "STRING_VALUE",
 * //         },
 * //       },
 * //       collection: { // OpenSearchCollection
 * //         collectionEndpoint: "STRING_VALUE",
 * //         collectionArn: "STRING_VALUE",
 * //         status: {
 * //           status: "ACTIVE" || "NOT_FOUND" || "ERROR",
 * //           statusMessage: "STRING_VALUE",
 * //         },
 * //       },
 * //       workspace: { // OpenSearchWorkspace
 * //         workspaceId: "STRING_VALUE",
 * //         status: {
 * //           status: "ACTIVE" || "NOT_FOUND" || "ERROR",
 * //           statusMessage: "STRING_VALUE",
 * //         },
 * //       },
 * //       encryptionPolicy: { // OpenSearchEncryptionPolicy
 * //         policyName: "STRING_VALUE",
 * //         status: {
 * //           status: "ACTIVE" || "NOT_FOUND" || "ERROR",
 * //           statusMessage: "STRING_VALUE",
 * //         },
 * //       },
 * //       networkPolicy: { // OpenSearchNetworkPolicy
 * //         policyName: "STRING_VALUE",
 * //         status: "<OpenSearchResourceStatus>",
 * //       },
 * //       accessPolicy: { // OpenSearchDataAccessPolicy
 * //         policyName: "STRING_VALUE",
 * //         status: "<OpenSearchResourceStatus>",
 * //       },
 * //       lifecyclePolicy: { // OpenSearchLifecyclePolicy
 * //         policyName: "STRING_VALUE",
 * //         status: "<OpenSearchResourceStatus>",
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetIntegrationCommandInput - {@link GetIntegrationCommandInput}
 * @returns {@link GetIntegrationCommandOutput}
 * @see {@link GetIntegrationCommandInput} for command's `input` shape.
 * @see {@link GetIntegrationCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter is specified incorrectly.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service cannot complete the request.</p>
 *
 * @throws {@link CloudWatchLogsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchLogs service.</p>
 *
 * @public
 */
export class GetIntegrationCommand extends $Command
  .classBuilder<
    GetIntegrationCommandInput,
    GetIntegrationCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchLogsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Logs_20140328", "GetIntegration", {})
  .n("CloudWatchLogsClient", "GetIntegrationCommand")
  .f(void 0, void 0)
  .ser(se_GetIntegrationCommand)
  .de(de_GetIntegrationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetIntegrationRequest;
      output: GetIntegrationResponse;
    };
    sdk: {
      input: GetIntegrationCommandInput;
      output: GetIntegrationCommandOutput;
    };
  };
}
