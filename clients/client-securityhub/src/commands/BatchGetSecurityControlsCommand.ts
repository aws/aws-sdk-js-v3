// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { BatchGetSecurityControlsRequest, BatchGetSecurityControlsResponse } from "../models/models_2";
import { de_BatchGetSecurityControlsCommand, se_BatchGetSecurityControlsCommand } from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchGetSecurityControlsCommand}.
 */
export interface BatchGetSecurityControlsCommandInput extends BatchGetSecurityControlsRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetSecurityControlsCommand}.
 */
export interface BatchGetSecurityControlsCommandOutput extends BatchGetSecurityControlsResponse, __MetadataBearer {}

/**
 * <p>
 *          Provides details about a batch of security controls for the current Amazon Web Services account and Amazon Web Services Region.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, BatchGetSecurityControlsCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, BatchGetSecurityControlsCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SecurityHubClient(config);
 * const input = { // BatchGetSecurityControlsRequest
 *   SecurityControlIds: [ // StringList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetSecurityControlsCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetSecurityControlsResponse
 * //   SecurityControls: [ // SecurityControls // required
 * //     { // SecurityControl
 * //       SecurityControlId: "STRING_VALUE", // required
 * //       SecurityControlArn: "STRING_VALUE", // required
 * //       Title: "STRING_VALUE", // required
 * //       Description: "STRING_VALUE", // required
 * //       RemediationUrl: "STRING_VALUE", // required
 * //       SeverityRating: "LOW" || "MEDIUM" || "HIGH" || "CRITICAL", // required
 * //       SecurityControlStatus: "ENABLED" || "DISABLED", // required
 * //       UpdateStatus: "READY" || "UPDATING",
 * //       Parameters: { // Parameters
 * //         "<keys>": { // ParameterConfiguration
 * //           ValueType: "DEFAULT" || "CUSTOM", // required
 * //           Value: { // ParameterValue Union: only one key present
 * //             Integer: Number("int"),
 * //             IntegerList: [ // IntegerList
 * //               Number("int"),
 * //             ],
 * //             Double: Number("double"),
 * //             String: "STRING_VALUE",
 * //             StringList: [ // StringList
 * //               "STRING_VALUE",
 * //             ],
 * //             Boolean: true || false,
 * //             Enum: "STRING_VALUE",
 * //             EnumList: [
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         },
 * //       },
 * //       LastUpdateReason: "STRING_VALUE",
 * //     },
 * //   ],
 * //   UnprocessedIds: [ // UnprocessedSecurityControls
 * //     { // UnprocessedSecurityControl
 * //       SecurityControlId: "STRING_VALUE", // required
 * //       ErrorCode: "INVALID_INPUT" || "ACCESS_DENIED" || "NOT_FOUND" || "LIMIT_EXCEEDED", // required
 * //       ErrorReason: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetSecurityControlsCommandInput - {@link BatchGetSecurityControlsCommandInput}
 * @returns {@link BatchGetSecurityControlsCommandOutput}
 * @see {@link BatchGetSecurityControlsCommandInput} for command's `input` shape.
 * @see {@link BatchGetSecurityControlsCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InvalidAccessException} (client fault)
 *  <p>The account doesn't have permission to perform this action.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because you supplied an invalid or out-of-range value for an
 *          input parameter.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current Amazon Web Services
 *          account or throttling limits. The error code describes the limit exceeded.</p>
 *
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 * @public
 * @example To get security control details
 * ```javascript
 * // The following example gets details for the specified controls in the current AWS account and AWS Region.
 * const input = {
 *   "SecurityControlIds": [
 *     "ACM.1",
 *     "APIGateway.1"
 *   ]
 * };
 * const command = new BatchGetSecurityControlsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "SecurityControls": [
 *     {
 *       "Description": "This AWS control checks whether ACM Certificates in your account are marked for expiration within a specified time period. Certificates provided by ACM are automatically renewed. ACM does not automatically renew certificates that you import.",
 *       "LastUpdateReason": "Stayed with default value",
 *       "Parameters": {
 *         "daysToExpiration": {
 *           "Value": {
 *             "Integer": 30
 *           },
 *           "ValueType": "DEFAULT"
 *         }
 *       },
 *       "RemediationUrl": "https://docs.aws.amazon.com/console/securityhub/ACM.1/remediation",
 *       "SecurityControlArn": "arn:aws:securityhub:us-west-2:123456789012:security-control/ACM.1",
 *       "SecurityControlId": "ACM.1",
 *       "SecurityControlStatus": "ENABLED",
 *       "SeverityRating": "MEDIUM",
 *       "Title": "Imported and ACM-issued certificates should be renewed after a specified time period",
 *       "UpdateStatus": "UPDATING"
 *     },
 *     {
 *       "Description": "This control checks whether all stages of Amazon API Gateway REST and WebSocket APIs have logging enabled. The control fails if logging is not enabled for all methods of a stage or if loggingLevel is neither ERROR nor INFO.",
 *       "LastUpdateReason": "Updated control parameters to comply with internal requirements",
 *       "Parameters": {
 *         "loggingLevel": {
 *           "Value": {
 *             "Enum": "ERROR"
 *           },
 *           "ValueType": "CUSTOM"
 *         }
 *       },
 *       "RemediationUrl": "https://docs.aws.amazon.com/console/securityhub/APIGateway.1/remediation",
 *       "SecurityControlArn": "arn:aws:securityhub:us-west-2:123456789012:security-control/APIGateway.1",
 *       "SecurityControlId": "APIGateway.1",
 *       "SecurityControlStatus": "ENABLED",
 *       "SeverityRating": "MEDIUM",
 *       "Title": "API Gateway REST and WebSocket API execution logging should be enabled",
 *       "UpdateStatus": "UPDATING"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-get-security-control-details--1683234478355
 * ```
 *
 */
export class BatchGetSecurityControlsCommand extends $Command
  .classBuilder<
    BatchGetSecurityControlsCommandInput,
    BatchGetSecurityControlsCommandOutput,
    SecurityHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityHubClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SecurityHubAPIService", "BatchGetSecurityControls", {})
  .n("SecurityHubClient", "BatchGetSecurityControlsCommand")
  .f(void 0, void 0)
  .ser(se_BatchGetSecurityControlsCommand)
  .de(de_BatchGetSecurityControlsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetSecurityControlsRequest;
      output: BatchGetSecurityControlsResponse;
    };
    sdk: {
      input: BatchGetSecurityControlsCommandInput;
      output: BatchGetSecurityControlsCommandOutput;
    };
  };
}
