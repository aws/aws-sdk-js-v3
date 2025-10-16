// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BillingconductorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BillingconductorClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListBillingGroupsInput,
  ListBillingGroupsOutput,
  ListBillingGroupsOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_ListBillingGroupsCommand, se_ListBillingGroupsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>A paginated call to retrieve a list of billing groups for the given billing period. If you don't provide a billing group, the current billing period is used.</p>
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
 *       "ACTIVE" || "PRIMARY_ACCOUNT_MISSING",
 *     ],
 *     AutoAssociate: true || false,
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
 * //       Status: "ACTIVE" || "PRIMARY_ACCOUNT_MISSING",
 * //       StatusReason: "STRING_VALUE",
 * //       AccountGrouping: { // ListBillingGroupAccountGrouping
 * //         AutoAssociate: true || false,
 * //       },
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
 *  <p>You do not have sufficient access to perform this action. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing a request. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that doesn't exist. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input doesn't match with the constraints specified by Amazon Web Services services.</p>
 *
 * @throws {@link BillingconductorServiceException}
 * <p>Base exception class for all service exceptions from Billingconductor service.</p>
 *
 *
 * @public
 */
export class ListBillingGroupsCommand extends $Command
  .classBuilder<
    ListBillingGroupsCommandInput,
    ListBillingGroupsCommandOutput,
    BillingconductorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BillingconductorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSBillingConductor", "ListBillingGroups", {})
  .n("BillingconductorClient", "ListBillingGroupsCommand")
  .f(void 0, ListBillingGroupsOutputFilterSensitiveLog)
  .ser(se_ListBillingGroupsCommand)
  .de(de_ListBillingGroupsCommand)
  .build() {
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
