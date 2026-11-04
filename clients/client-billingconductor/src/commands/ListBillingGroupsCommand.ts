// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListBillingGroupsInput, ListBillingGroupsOutput } from "../models/models_0";
import { ListBillingGroups$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListBillingGroupsCommand}.
 */
export interface ListBillingGroupsCommandInput extends ListBillingGroupsInput {}
/**
 * @public
 *
 * The output of {@link ListBillingGroupsCommand}.
 */
export interface ListBillingGroupsCommandOutput extends ListBillingGroupsOutput, __MetadataBearer {}

/**
 * A paginated call to retrieve a list of billing groups for the given billing period. If you don't provide a billing group, the current billing period is used.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingconductorClient, ListBillingGroupsCommand } from "@aws-sdk/client-billingconductor"; // ES Modules import
 * // const { BillingconductorClient, ListBillingGroupsCommand } = require("@aws-sdk/client-billingconductor"); // CommonJS import
 * // import type { BillingconductorClientConfig } from "@aws-sdk/client-billingconductor";
 * const config = {}; // type is BillingconductorClientConfig
 * const client = new BillingconductorClient(config);
 * const input = { // ListBillingGroupsInput
 *   BillingPeriod: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Filters: { // ListBillingGroupsFilter
 *     Arns: [ // BillingGroupArnList
 *       "STRING_VALUE",
 *     ],
 *     PricingPlan: "STRING_VALUE",
 *     Statuses: [ // BillingGroupStatusList
 *       "ACTIVE" || "PRIMARY_ACCOUNT_MISSING" || "PENDING",
 *     ],
 *     AutoAssociate: true || false,
 *     PrimaryAccountIds: [ // PrimaryAccountIdList
 *       "STRING_VALUE",
 *     ],
 *     BillingGroupTypes: [ // BillingGroupTypeList
 *       "STANDARD" || "TRANSFER_BILLING",
 *     ],
 *     Names: [ // StringSearches
 *       { // StringSearch
 *         SearchOption: "STARTS_WITH", // required
 *         SearchValue: "STRING_VALUE", // required
 *       },
 *     ],
 *     ResponsibilityTransferArns: [ // ResponsibilityTransferArnsList
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new ListBillingGroupsCommand(input);
 * const response = await client.send(command);
 * // { // ListBillingGroupsOutput
 * //   BillingGroups: [ // BillingGroupList
 * //     { // BillingGroupListElement
 * //       Name: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       PrimaryAccountId: "STRING_VALUE",
 * //       ComputationPreference: { // ComputationPreference
 * //         PricingPlanArn: "STRING_VALUE", // required
 * //       },
 * //       Size: Number("long"),
 * //       CreationTime: Number("long"),
 * //       LastModifiedTime: Number("long"),
 * //       Status: "ACTIVE" || "PRIMARY_ACCOUNT_MISSING" || "PENDING",
 * //       StatusReason: "STRING_VALUE",
 * //       AccountGrouping: { // ListBillingGroupAccountGrouping
 * //         AutoAssociate: true || false,
 * //         ResponsibilityTransferArn: "STRING_VALUE",
 * //       },
 * //       BillingGroupType: "STANDARD" || "TRANSFER_BILLING",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListBillingGroupsCommandInput - {@link ListBillingGroupsCommandInput}
 * @returns {@link ListBillingGroupsCommandOutput}
 * @see {@link ListBillingGroupsCommandInput} for command's `input` shape.
 * @see {@link ListBillingGroupsCommandOutput} for command's `response` shape.
 * @see {@link BillingconductorClientResolvedConfig | config} for BillingconductorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred while processing a request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request references a resource that doesn't exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input doesn't match with the constraints specified by Amazon Web Services services.
 *
 * @throws {@link BillingconductorServiceException}
 *
 * Base exception class for all service exceptions from Billingconductor service.
 *
 * @public
 */
export class ListBillingGroupsCommand extends command<ListBillingGroupsCommandInput, ListBillingGroupsCommandOutput>(
  _ep0,
  _mw0,
  "ListBillingGroups",
  ListBillingGroups$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListBillingGroupsInput;
      output: ListBillingGroupsOutput;
    };
    sdk: {
      input: ListBillingGroupsCommandInput;
      output: ListBillingGroupsCommandOutput;
    };
  };
}
