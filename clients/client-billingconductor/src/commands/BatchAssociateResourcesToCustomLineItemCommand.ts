// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  BillingconductorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BillingconductorClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  BatchAssociateResourcesToCustomLineItemInput,
  BatchAssociateResourcesToCustomLineItemOutput,
} from "../models/models_0";
import { BatchAssociateResourcesToCustomLineItem } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchAssociateResourcesToCustomLineItemCommand}.
 */
export interface BatchAssociateResourcesToCustomLineItemCommandInput
  extends BatchAssociateResourcesToCustomLineItemInput {}
/**
 * @public
 *
 * The output of {@link BatchAssociateResourcesToCustomLineItemCommand}.
 */
export interface BatchAssociateResourcesToCustomLineItemCommandOutput
  extends BatchAssociateResourcesToCustomLineItemOutput,
    __MetadataBearer {}

/**
 * <p> Associates a batch of resources to a percentage custom line item. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingconductorClient, BatchAssociateResourcesToCustomLineItemCommand } from "@aws-sdk/client-billingconductor"; // ES Modules import
 * // const { BillingconductorClient, BatchAssociateResourcesToCustomLineItemCommand } = require("@aws-sdk/client-billingconductor"); // CommonJS import
 * // import type { BillingconductorClientConfig } from "@aws-sdk/client-billingconductor";
 * const config = {}; // type is BillingconductorClientConfig
 * const client = new BillingconductorClient(config);
 * const input = { // BatchAssociateResourcesToCustomLineItemInput
 *   TargetArn: "STRING_VALUE", // required
 *   ResourceArns: [ // CustomLineItemBatchAssociationsList // required
 *     "STRING_VALUE",
 *   ],
 *   BillingPeriodRange: { // CustomLineItemBillingPeriodRange
 *     InclusiveStartBillingPeriod: "STRING_VALUE", // required
 *     ExclusiveEndBillingPeriod: "STRING_VALUE",
 *   },
 * };
 * const command = new BatchAssociateResourcesToCustomLineItemCommand(input);
 * const response = await client.send(command);
 * // { // BatchAssociateResourcesToCustomLineItemOutput
 * //   SuccessfullyAssociatedResources: [ // AssociateResourcesResponseList
 * //     { // AssociateResourceResponseElement
 * //       Arn: "STRING_VALUE",
 * //       Error: { // AssociateResourceError
 * //         Message: "STRING_VALUE",
 * //         Reason: "INVALID_ARN" || "SERVICE_LIMIT_EXCEEDED" || "ILLEGAL_CUSTOMLINEITEM" || "INTERNAL_SERVER_EXCEPTION" || "INVALID_BILLING_PERIOD_RANGE",
 * //       },
 * //     },
 * //   ],
 * //   FailedAssociatedResources: [
 * //     {
 * //       Arn: "STRING_VALUE",
 * //       Error: {
 * //         Message: "STRING_VALUE",
 * //         Reason: "INVALID_ARN" || "SERVICE_LIMIT_EXCEEDED" || "ILLEGAL_CUSTOMLINEITEM" || "INTERNAL_SERVER_EXCEPTION" || "INVALID_BILLING_PERIOD_RANGE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchAssociateResourcesToCustomLineItemCommandInput - {@link BatchAssociateResourcesToCustomLineItemCommandInput}
 * @returns {@link BatchAssociateResourcesToCustomLineItemCommandOutput}
 * @see {@link BatchAssociateResourcesToCustomLineItemCommandInput} for command's `input` shape.
 * @see {@link BatchAssociateResourcesToCustomLineItemCommandOutput} for command's `response` shape.
 * @see {@link BillingconductorClientResolvedConfig | config} for BillingconductorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>You can cause an inconsistent state by updating or deleting a resource. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing a request. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that doesn't exist. </p>
 *
 * @throws {@link ServiceLimitExceededException} (client fault)
 *  <p>The request would cause a service limit to exceed. </p>
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
export class BatchAssociateResourcesToCustomLineItemCommand extends $Command
  .classBuilder<
    BatchAssociateResourcesToCustomLineItemCommandInput,
    BatchAssociateResourcesToCustomLineItemCommandOutput,
    BillingconductorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BillingconductorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBillingConductor", "BatchAssociateResourcesToCustomLineItem", {})
  .n("BillingconductorClient", "BatchAssociateResourcesToCustomLineItemCommand")
  .sc(BatchAssociateResourcesToCustomLineItem)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchAssociateResourcesToCustomLineItemInput;
      output: BatchAssociateResourcesToCustomLineItemOutput;
    };
    sdk: {
      input: BatchAssociateResourcesToCustomLineItemCommandInput;
      output: BatchAssociateResourcesToCustomLineItemCommandOutput;
    };
  };
}
