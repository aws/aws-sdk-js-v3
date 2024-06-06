// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  BatchGetStandardsControlAssociationsRequest,
  BatchGetStandardsControlAssociationsResponse,
} from "../models/models_2";
import {
  de_BatchGetStandardsControlAssociationsCommand,
  se_BatchGetStandardsControlAssociationsCommand,
} from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchGetStandardsControlAssociationsCommand}.
 */
export interface BatchGetStandardsControlAssociationsCommandInput extends BatchGetStandardsControlAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetStandardsControlAssociationsCommand}.
 */
export interface BatchGetStandardsControlAssociationsCommandOutput
  extends BatchGetStandardsControlAssociationsResponse,
    __MetadataBearer {}

/**
 * <p>
 *          For a batch of security controls and standards, identifies whether each control is currently enabled or disabled in a standard.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, BatchGetStandardsControlAssociationsCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, BatchGetStandardsControlAssociationsCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const input = { // BatchGetStandardsControlAssociationsRequest
 *   StandardsControlAssociationIds: [ // StandardsControlAssociationIds // required
 *     { // StandardsControlAssociationId
 *       SecurityControlId: "STRING_VALUE", // required
 *       StandardsArn: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new BatchGetStandardsControlAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetStandardsControlAssociationsResponse
 * //   StandardsControlAssociationDetails: [ // StandardsControlAssociationDetails // required
 * //     { // StandardsControlAssociationDetail
 * //       StandardsArn: "STRING_VALUE", // required
 * //       SecurityControlId: "STRING_VALUE", // required
 * //       SecurityControlArn: "STRING_VALUE", // required
 * //       AssociationStatus: "ENABLED" || "DISABLED", // required
 * //       RelatedRequirements: [ // RelatedRequirementsList
 * //         "STRING_VALUE",
 * //       ],
 * //       UpdatedAt: new Date("TIMESTAMP"),
 * //       UpdatedReason: "STRING_VALUE",
 * //       StandardsControlTitle: "STRING_VALUE",
 * //       StandardsControlDescription: "STRING_VALUE",
 * //       StandardsControlArns: [ // StandardsControlArnList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   UnprocessedAssociations: [ // UnprocessedStandardsControlAssociations
 * //     { // UnprocessedStandardsControlAssociation
 * //       StandardsControlAssociationId: { // StandardsControlAssociationId
 * //         SecurityControlId: "STRING_VALUE", // required
 * //         StandardsArn: "STRING_VALUE", // required
 * //       },
 * //       ErrorCode: "INVALID_INPUT" || "ACCESS_DENIED" || "NOT_FOUND" || "LIMIT_EXCEEDED", // required
 * //       ErrorReason: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetStandardsControlAssociationsCommandInput - {@link BatchGetStandardsControlAssociationsCommandInput}
 * @returns {@link BatchGetStandardsControlAssociationsCommandOutput}
 * @see {@link BatchGetStandardsControlAssociationsCommandInput} for command's `input` shape.
 * @see {@link BatchGetStandardsControlAssociationsCommandOutput} for command's `response` shape.
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
 * @example To get enablement status of a batch of controls
 * ```javascript
 * // The following example retrieves the enablement status of the specified controls in the specified standards.
 * const input = {
 *   "StandardsControlAssociationIds": [
 *     {
 *       "SecurityControlId": "CloudTrail.1",
 *       "StandardsArn": "arn:aws:securityhub:::ruleset/cis-aws-foundations-benchmark/v/1.2.0"
 *     },
 *     {
 *       "SecurityControlId": "CloudWatch.12",
 *       "StandardsArn": "arn:aws:securityhub:::ruleset/cis-aws-foundations-benchmark/v/1.2.0"
 *     }
 *   ]
 * };
 * const command = new BatchGetStandardsControlAssociationsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "StandardsControlAssociationDetails": [
 *     {
 *       "AssociationStatus": "ENABLED",
 *       "RelatedRequirements": [
 *         "CIS AWS Foundations 2.1"
 *       ],
 *       "SecurityControlArn": "arn:aws:securityhub:us-west-2:110479873537:security-control/CloudTrail.1",
 *       "SecurityControlId": "CloudTrail.1",
 *       "StandardsArn": "arn:aws:securityhub:::ruleset/cis-aws-foundations-benchmark/v/1.2.0",
 *       "StandardsControlDescription": "AWS CloudTrail is a web service that records AWS API calls for your account and delivers log files to you. The recorded information includes the identity of the API caller, the time of the API call, the source IP address of the API caller, the request parameters, and the response elements returned by the AWS service.",
 *       "StandardsControlTitle": "Ensure CloudTrail is enabled in all regions",
 *       "UpdatedAt": "2022-01-13T18:52:29.539000+00:00"
 *     },
 *     {
 *       "AssociationStatus": "ENABLED",
 *       "RelatedRequirements": [
 *         "CIS AWS Foundations 3.12"
 *       ],
 *       "SecurityControlArn": "arn:aws:securityhub:us-west-2:110479873537:security-control/CloudWatch.12",
 *       "SecurityControlId": "CloudWatch.12",
 *       "StandardsArn": "arn:aws:securityhub:::ruleset/cis-aws-foundations-benchmark/v/1.2.0",
 *       "StandardsControlDescription": "Real-time monitoring of API calls can be achieved by directing CloudTrail Logs to CloudWatch Logs and establishing corresponding metric filters and alarms. Network gateways are required to send/receive traffic to a destination outside of a VPC. It is recommended that a metric filter and alarm be established for changes to network gateways.",
 *       "StandardsControlTitle": "Ensure a log metric filter and alarm exist for changes to network gateways",
 *       "UpdatedAt": "2022-01-13T18:52:29.686000+00:00"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-get-enablement-status-of-a-batch-of-controls-1683301618357
 * ```
 *
 */
export class BatchGetStandardsControlAssociationsCommand extends $Command
  .classBuilder<
    BatchGetStandardsControlAssociationsCommandInput,
    BatchGetStandardsControlAssociationsCommandOutput,
    SecurityHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SecurityHubClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SecurityHubAPIService", "BatchGetStandardsControlAssociations", {})
  .n("SecurityHubClient", "BatchGetStandardsControlAssociationsCommand")
  .f(void 0, void 0)
  .ser(se_BatchGetStandardsControlAssociationsCommand)
  .de(de_BatchGetStandardsControlAssociationsCommand)
  .build() {}
