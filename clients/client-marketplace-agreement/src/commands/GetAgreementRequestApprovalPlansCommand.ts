// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetAgreementRequestApprovalPlansInput, GetAgreementRequestApprovalPlansOutput } from "../models/models_0";
import { GetAgreementRequestApprovalPlans$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetAgreementRequestApprovalPlansCommand}.
 */
export interface GetAgreementRequestApprovalPlansCommandInput extends GetAgreementRequestApprovalPlansInput {}
/**
 * @public
 *
 * The output of {@link GetAgreementRequestApprovalPlansCommand}.
 */
export interface GetAgreementRequestApprovalPlansCommandOutput extends GetAgreementRequestApprovalPlansOutput, __MetadataBearer {}

/**
 * <p>Retrieves the approval plans that apply to an agreement request. Only the acceptor of the agreement request can call this operation. Each approval plan lists its approval levels and the approvers at each level. Pass the <code>planReference</code> of an approval plan to <code>StartAgreementApprovals</code> to start an agreement approval for it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceAgreementClient, GetAgreementRequestApprovalPlansCommand } from "@aws-sdk/client-marketplace-agreement"; // ES Modules import
 * // const { MarketplaceAgreementClient, GetAgreementRequestApprovalPlansCommand } = require("@aws-sdk/client-marketplace-agreement"); // CommonJS import
 * // import type { MarketplaceAgreementClientConfig } from "@aws-sdk/client-marketplace-agreement";
 * const config = {}; // type is MarketplaceAgreementClientConfig
 * const client = new MarketplaceAgreementClient(config);
 * const input = { // GetAgreementRequestApprovalPlansInput
 *   agreementRequestId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new GetAgreementRequestApprovalPlansCommand(input);
 * const response = await client.send(command);
 * // { // GetAgreementRequestApprovalPlansOutput
 * //   items: [ // AgreementApprovalPlans // required
 * //     { // AgreementApprovalPlan Union: only one key present
 * //       buyerAgreementApprovalPlan: { // BuyerAgreementApprovalPlan
 * //         planReference: "STRING_VALUE", // required
 * //         name: "STRING_VALUE",
 * //         levels: [ // BuyerAgreementApprovalPlanLevels // required
 * //           { // BuyerAgreementApprovalPlanLevel
 * //             name: "STRING_VALUE",
 * //             groups: [ // BuyerAgreementApprovalPlanGroups // required
 * //               { // BuyerAgreementApprovalPlanGroup
 * //                 approvalCriteria: { // BuyerAgreementApprovalCriteria
 * //                   requiredApprovalCount: Number("int"), // required
 * //                 },
 * //                 approvers: [ // BuyerApprovers // required
 * //                   { // Approver Union: only one key present
 * //                     emailApprover: { // EmailApprover
 * //                       emailAddress: "STRING_VALUE", // required
 * //                       name: "STRING_VALUE",
 * //                     },
 * //                     procurementToolApprover: { // ProcurementToolApprover
 * //                       name: "STRING_VALUE", // required
 * //                     },
 * //                     awsOrganizationAdminApprover: { // AwsOrganizationAdminApprover
 * //                       organizationId: "STRING_VALUE", // required
 * //                     },
 * //                   },
 * //                 ],
 * //               },
 * //             ],
 * //           },
 * //         ],
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetAgreementRequestApprovalPlansCommandInput - {@link GetAgreementRequestApprovalPlansCommandInput}
 * @returns {@link GetAgreementRequestApprovalPlansCommandOutput}
 * @see {@link GetAgreementRequestApprovalPlansCommandInput} for command's `input` shape.
 * @see {@link GetAgreementRequestApprovalPlansCommandOutput} for command's `response` shape.
 * @see {@link MarketplaceAgreementClientResolvedConfig | config} for MarketplaceAgreementClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service.</p>
 *
 * @throws {@link MarketplaceAgreementServiceException}
 * <p>Base exception class for all service exceptions from MarketplaceAgreement service.</p>
 *
 *
 * @example Get the approval plans of an agreement request
 * ```javascript
 * //
 * const input = {
 *   agreementRequestId: "ar-EXAMPLE4a539b123d4EXAMPLE78"
 * };
 * const command = new GetAgreementRequestApprovalPlansCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   items: [
 *     {
 *       buyerAgreementApprovalPlan: {
 *         levels: [
 *           {
 *             groups: [
 *               {
 *                 approvalCriteria: {
 *                   requiredApprovalCount: 1
 *                 },
 *                 approvers: [
 *                   {
 *                     awsOrganizationAdminApprover: {
 *                       organizationId: "o-exampleab12"
 *                     }
 *                   }
 *                 ]
 *               }
 *             ],
 *             name: "Budget owner review"
 *           }
 *         ],
 *         name: "Software purchases over 10000 USD",
 *         planReference: "aplan-EXAMPLE7g8h9i0j1k2l"
 *       }
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetAgreementRequestApprovalPlansCommand extends command<GetAgreementRequestApprovalPlansCommandInput, GetAgreementRequestApprovalPlansCommandOutput>(
  _ep0,
  _mw0,
  "GetAgreementRequestApprovalPlans",
  GetAgreementRequestApprovalPlans$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAgreementRequestApprovalPlansInput;
      output: GetAgreementRequestApprovalPlansOutput;
    };
    sdk: {
      input: GetAgreementRequestApprovalPlansCommandInput;
      output: GetAgreementRequestApprovalPlansCommandOutput;
    };
  };
}
