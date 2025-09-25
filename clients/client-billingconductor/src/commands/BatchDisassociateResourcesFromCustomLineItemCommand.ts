// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BillingconductorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BillingconductorClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  BatchDisassociateResourcesFromCustomLineItemInput,
  BatchDisassociateResourcesFromCustomLineItemOutput,
} from "../models/models_0";
import { BatchDisassociateResourcesFromCustomLineItem } from "../schemas/schemas_2_CustomLine";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchDisassociateResourcesFromCustomLineItemCommand}.
 */
export interface BatchDisassociateResourcesFromCustomLineItemCommandInput
  extends BatchDisassociateResourcesFromCustomLineItemInput {}
/**
 * @public
 *
 * The output of {@link BatchDisassociateResourcesFromCustomLineItemCommand}.
 */
export interface BatchDisassociateResourcesFromCustomLineItemCommandOutput
  extends BatchDisassociateResourcesFromCustomLineItemOutput,
    __MetadataBearer {}

/**
 * <p>
 *       Disassociates a batch of resources from a percentage custom line item.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingconductorClient, BatchDisassociateResourcesFromCustomLineItemCommand } from "@aws-sdk/client-billingconductor"; // ES Modules import
 * // const { BillingconductorClient, BatchDisassociateResourcesFromCustomLineItemCommand } = require("@aws-sdk/client-billingconductor"); // CommonJS import
 * // import type { BillingconductorClientConfig } from "@aws-sdk/client-billingconductor";
 * const config = {}; // type is BillingconductorClientConfig
 * const client = new BillingconductorClient(config);
 * const input = { // BatchDisassociateResourcesFromCustomLineItemInput
 *   TargetArn: "STRING_VALUE", // required
 *   ResourceArns: [ // CustomLineItemBatchDisassociationsList // required
 *     "STRING_VALUE",
 *   ],
 *   BillingPeriodRange: { // CustomLineItemBillingPeriodRange
 *     InclusiveStartBillingPeriod: "STRING_VALUE", // required
 *     ExclusiveEndBillingPeriod: "STRING_VALUE",
 *   },
 * };
 * const command = new BatchDisassociateResourcesFromCustomLineItemCommand(input);
 * const response = await client.send(command);
 * // { // BatchDisassociateResourcesFromCustomLineItemOutput
 * //   SuccessfullyDisassociatedResources: [ // DisassociateResourcesResponseList
 * //     { // DisassociateResourceResponseElement
 * //       Arn: "STRING_VALUE",
 * //       Error: { // AssociateResourceError
 * //         Message: "STRING_VALUE",
 * //         Reason: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   FailedDisassociatedResources: [
 * //     {
 * //       Arn: "STRING_VALUE",
 * //       Error: {
 * //         Message: "STRING_VALUE",
 * //         Reason: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchDisassociateResourcesFromCustomLineItemCommandInput - {@link BatchDisassociateResourcesFromCustomLineItemCommandInput}
 * @returns {@link BatchDisassociateResourcesFromCustomLineItemCommandOutput}
 * @see {@link BatchDisassociateResourcesFromCustomLineItemCommandInput} for command's `input` shape.
 * @see {@link BatchDisassociateResourcesFromCustomLineItemCommandOutput} for command's `response` shape.
 * @see {@link BillingconductorClientResolvedConfig | config} for BillingconductorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.
 *     </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>You can cause an inconsistent state by updating or deleting a resource.
 *     </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing a request.
 *     </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that doesn't exist.
 *     </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.
 *     </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input doesn't match with the constraints specified by Amazon Web Services.</p>
 *
 * @throws {@link BillingconductorServiceException}
 * <p>Base exception class for all service exceptions from Billingconductor service.</p>
 *
 *
 * @public
 */
export class BatchDisassociateResourcesFromCustomLineItemCommand extends $Command
  .classBuilder<
    BatchDisassociateResourcesFromCustomLineItemCommandInput,
    BatchDisassociateResourcesFromCustomLineItemCommandOutput,
    BillingconductorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BillingconductorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBillingConductor", "BatchDisassociateResourcesFromCustomLineItem", {})
  .n("BillingconductorClient", "BatchDisassociateResourcesFromCustomLineItemCommand")
  .sc(BatchDisassociateResourcesFromCustomLineItem)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchDisassociateResourcesFromCustomLineItemInput;
      output: BatchDisassociateResourcesFromCustomLineItemOutput;
    };
    sdk: {
      input: BatchDisassociateResourcesFromCustomLineItemCommandInput;
      output: BatchDisassociateResourcesFromCustomLineItemCommandOutput;
    };
  };
}
