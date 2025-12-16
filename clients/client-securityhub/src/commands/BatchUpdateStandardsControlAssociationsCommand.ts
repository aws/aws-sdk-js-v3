// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  BatchUpdateStandardsControlAssociationsRequest,
  BatchUpdateStandardsControlAssociationsResponse,
} from "../models/models_2";
import { BatchUpdateStandardsControlAssociations$ } from "../schemas/schemas_0";
import type { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchUpdateStandardsControlAssociationsCommand}.
 */
export interface BatchUpdateStandardsControlAssociationsCommandInput
  extends BatchUpdateStandardsControlAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link BatchUpdateStandardsControlAssociationsCommand}.
 */
export interface BatchUpdateStandardsControlAssociationsCommandOutput
  extends BatchUpdateStandardsControlAssociationsResponse,
    __MetadataBearer {}

/**
 * <p>
 *          For a batch of security controls and standards, this operation updates the enablement status of a control in a standard.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, BatchUpdateStandardsControlAssociationsCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, BatchUpdateStandardsControlAssociationsCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
 * const client = new SecurityHubClient(config);
 * const input = { // BatchUpdateStandardsControlAssociationsRequest
 *   StandardsControlAssociationUpdates: [ // StandardsControlAssociationUpdates // required
 *     { // StandardsControlAssociationUpdate
 *       StandardsArn: "STRING_VALUE", // required
 *       SecurityControlId: "STRING_VALUE", // required
 *       AssociationStatus: "ENABLED" || "DISABLED", // required
 *       UpdatedReason: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new BatchUpdateStandardsControlAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // BatchUpdateStandardsControlAssociationsResponse
 * //   UnprocessedAssociationUpdates: [ // UnprocessedStandardsControlAssociationUpdates
 * //     { // UnprocessedStandardsControlAssociationUpdate
 * //       StandardsControlAssociationUpdate: { // StandardsControlAssociationUpdate
 * //         StandardsArn: "STRING_VALUE", // required
 * //         SecurityControlId: "STRING_VALUE", // required
 * //         AssociationStatus: "ENABLED" || "DISABLED", // required
 * //         UpdatedReason: "STRING_VALUE",
 * //       },
 * //       ErrorCode: "INVALID_INPUT" || "ACCESS_DENIED" || "NOT_FOUND" || "RESOURCE_NOT_FOUND" || "LIMIT_EXCEEDED", // required
 * //       ErrorReason: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchUpdateStandardsControlAssociationsCommandInput - {@link BatchUpdateStandardsControlAssociationsCommandInput}
 * @returns {@link BatchUpdateStandardsControlAssociationsCommandOutput}
 * @see {@link BatchUpdateStandardsControlAssociationsCommandInput} for command's `input` shape.
 * @see {@link BatchUpdateStandardsControlAssociationsCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action specified in the request.</p>
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
 *
 * @example To update enablement status of a batch of controls
 * ```javascript
 * // The following example disables CloudWatch.12 in CIS AWS Foundations Benchmark v1.2.0. The example returns an error for CloudTrail.1 because an invalid standard ARN is provided.
 * const input = {
 *   StandardsControlAssociationUpdates: [
 *     {
 *       AssociationStatus: "DISABLED",
 *       SecurityControlId: "CloudTrail.1",
 *       StandardsArn: "arn:aws:securityhub:::ruleset/sample-standard/v/1.1.0",
 *       UpdatedReason: "Not relevant to environment"
 *     },
 *     {
 *       AssociationStatus: "DISABLED",
 *       SecurityControlId: "CloudWatch.12",
 *       StandardsArn: "arn:aws:securityhub:::ruleset/cis-aws-foundations-benchmark/v/1.2.0",
 *       UpdatedReason: "Not relevant to environment"
 *     }
 *   ]
 * };
 * const command = new BatchUpdateStandardsControlAssociationsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   UnprocessedAssociationUpdates: [
 *     {
 *       ErrorCode: "INVALID_INPUT",
 *       ErrorReason: "Invalid Standards Arn: 'arn:aws:securityhub:::ruleset/sample-standard/v/1.1.0'",
 *       StandardsControlAssociationUpdate: {
 *         AssociationStatus: "DISABLED",
 *         SecurityControlId: "CloudTrail.1",
 *         StandardsArn: "arn:aws:securityhub:::ruleset/sample-standard/v/1.1.0",
 *         UpdatedReason: "Test Reason"
 *       }
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class BatchUpdateStandardsControlAssociationsCommand extends $Command
  .classBuilder<
    BatchUpdateStandardsControlAssociationsCommandInput,
    BatchUpdateStandardsControlAssociationsCommandOutput,
    SecurityHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityHubClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityHubAPIService", "BatchUpdateStandardsControlAssociations", {})
  .n("SecurityHubClient", "BatchUpdateStandardsControlAssociationsCommand")
  .sc(BatchUpdateStandardsControlAssociations$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchUpdateStandardsControlAssociationsRequest;
      output: BatchUpdateStandardsControlAssociationsResponse;
    };
    sdk: {
      input: BatchUpdateStandardsControlAssociationsCommandInput;
      output: BatchUpdateStandardsControlAssociationsCommandOutput;
    };
  };
}
