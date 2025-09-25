// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  BatchGetConfigurationPolicyAssociationsRequest,
  BatchGetConfigurationPolicyAssociationsResponse,
} from "../models/models_2";
import { BatchGetConfigurationPolicyAssociations } from "../schemas/schemas_7_Policy";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchGetConfigurationPolicyAssociationsCommand}.
 */
export interface BatchGetConfigurationPolicyAssociationsCommandInput
  extends BatchGetConfigurationPolicyAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetConfigurationPolicyAssociationsCommand}.
 */
export interface BatchGetConfigurationPolicyAssociationsCommandOutput
  extends BatchGetConfigurationPolicyAssociationsResponse,
    __MetadataBearer {}

/**
 * <p>
 *             Returns associations between an Security Hub configuration and a batch of target accounts, organizational units, or the root.
 *             Only the Security Hub delegated administrator can invoke this operation from the home Region. A configuration
 *             can refer to a configuration policy or to a self-managed configuration.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, BatchGetConfigurationPolicyAssociationsCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, BatchGetConfigurationPolicyAssociationsCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
 * const client = new SecurityHubClient(config);
 * const input = { // BatchGetConfigurationPolicyAssociationsRequest
 *   ConfigurationPolicyAssociationIdentifiers: [ // ConfigurationPolicyAssociationsList // required
 *     { // ConfigurationPolicyAssociation
 *       Target: { // Target Union: only one key present
 *         AccountId: "STRING_VALUE",
 *         OrganizationalUnitId: "STRING_VALUE",
 *         RootId: "STRING_VALUE",
 *       },
 *     },
 *   ],
 * };
 * const command = new BatchGetConfigurationPolicyAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetConfigurationPolicyAssociationsResponse
 * //   ConfigurationPolicyAssociations: [ // ConfigurationPolicyAssociationList
 * //     { // ConfigurationPolicyAssociationSummary
 * //       ConfigurationPolicyId: "STRING_VALUE",
 * //       TargetId: "STRING_VALUE",
 * //       TargetType: "ACCOUNT" || "ORGANIZATIONAL_UNIT" || "ROOT",
 * //       AssociationType: "INHERITED" || "APPLIED",
 * //       UpdatedAt: new Date("TIMESTAMP"),
 * //       AssociationStatus: "PENDING" || "SUCCESS" || "FAILED",
 * //       AssociationStatusMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * //   UnprocessedConfigurationPolicyAssociations: [ // UnprocessedConfigurationPolicyAssociationList
 * //     { // UnprocessedConfigurationPolicyAssociation
 * //       ConfigurationPolicyAssociationIdentifiers: { // ConfigurationPolicyAssociation
 * //         Target: { // Target Union: only one key present
 * //           AccountId: "STRING_VALUE",
 * //           OrganizationalUnitId: "STRING_VALUE",
 * //           RootId: "STRING_VALUE",
 * //         },
 * //       },
 * //       ErrorCode: "STRING_VALUE",
 * //       ErrorReason: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetConfigurationPolicyAssociationsCommandInput - {@link BatchGetConfigurationPolicyAssociationsCommandInput}
 * @returns {@link BatchGetConfigurationPolicyAssociationsCommandOutput}
 * @see {@link BatchGetConfigurationPolicyAssociationsCommandInput} for command's `input` shape.
 * @see {@link BatchGetConfigurationPolicyAssociationsCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was rejected because we can't find the specified resource.</p>
 *
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 *
 * @example To get configuration associations for a batch of targets
 * ```javascript
 * // This operation provides details about configuration associations for a batch of target accounts, organizational units, or the root.
 * const input = {
 *   ConfigurationPolicyAssociationIdentifiers: [
 *     {
 *       Target: {
 *         AccountId: "111122223333"
 *       }
 *     },
 *     {
 *       Target: {
 *         RootId: "r-f6g7h8i9j0example"
 *       }
 *     }
 *   ]
 * };
 * const command = new BatchGetConfigurationPolicyAssociationsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ConfigurationPolicyAssociations: [
 *     {
 *       AssociationStatus: "SUCCESS",
 *       AssociationStatusMessage: "This field is only populated for a failed association",
 *       AssociationType: "INHERITED",
 *       ConfigurationPolicyId: "a1b2c3d4-5678-90ab-cdef-EXAMPLE11111",
 *       TargetId: "111122223333",
 *       TargetType: "ACCOUNT",
 *       UpdatedAt: "2023-01-11T06:17:17.154Z"
 *     }
 *   ],
 *   UnprocessedConfigurationPolicyAssociations: [
 *     {
 *       ConfigurationPolicyAssociationIdentifiers: {
 *         Target: {
 *           RootId: "r-f6g7h8i9j0example"
 *         }
 *       },
 *       ErrorCode: "400",
 *       ErrorReason: "You do not have sufficient access to perform this action."
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class BatchGetConfigurationPolicyAssociationsCommand extends $Command
  .classBuilder<
    BatchGetConfigurationPolicyAssociationsCommandInput,
    BatchGetConfigurationPolicyAssociationsCommandOutput,
    SecurityHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityHubClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityHubAPIService", "BatchGetConfigurationPolicyAssociations", {})
  .n("SecurityHubClient", "BatchGetConfigurationPolicyAssociationsCommand")
  .sc(BatchGetConfigurationPolicyAssociations)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetConfigurationPolicyAssociationsRequest;
      output: BatchGetConfigurationPolicyAssociationsResponse;
    };
    sdk: {
      input: BatchGetConfigurationPolicyAssociationsCommandInput;
      output: BatchGetConfigurationPolicyAssociationsCommandOutput;
    };
  };
}
