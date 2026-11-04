// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  BatchDisassociateResourcesFromCustomLineItemInput,
  BatchDisassociateResourcesFromCustomLineItemOutput,
} from "../models/models_0";
import { BatchDisassociateResourcesFromCustomLineItem$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link BatchDisassociateResourcesFromCustomLineItemCommand}.
 */
export interface BatchDisassociateResourcesFromCustomLineItemCommandInput extends BatchDisassociateResourcesFromCustomLineItemInput {}
/**
 * @public
 *
 * The output of {@link BatchDisassociateResourcesFromCustomLineItemCommand}.
 */
export interface BatchDisassociateResourcesFromCustomLineItemCommandOutput extends BatchDisassociateResourcesFromCustomLineItemOutput, __MetadataBearer {}

/**
 * Disassociates a batch of resources from a percentage custom line item.
 *
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
 * //         Reason: "INVALID_ARN" || "SERVICE_LIMIT_EXCEEDED" || "ILLEGAL_CUSTOMLINEITEM" || "INTERNAL_SERVER_EXCEPTION" || "INVALID_BILLING_PERIOD_RANGE",
 * //       },
 * //     },
 * //   ],
 * //   FailedDisassociatedResources: [
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
 * @param BatchDisassociateResourcesFromCustomLineItemCommandInput - {@link BatchDisassociateResourcesFromCustomLineItemCommandInput}
 * @returns {@link BatchDisassociateResourcesFromCustomLineItemCommandOutput}
 * @see {@link BatchDisassociateResourcesFromCustomLineItemCommandInput} for command's `input` shape.
 * @see {@link BatchDisassociateResourcesFromCustomLineItemCommandOutput} for command's `response` shape.
 * @see {@link BillingconductorClientResolvedConfig | config} for BillingconductorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * You can cause an inconsistent state by updating or deleting a resource.
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
export class BatchDisassociateResourcesFromCustomLineItemCommand extends command<BatchDisassociateResourcesFromCustomLineItemCommandInput, BatchDisassociateResourcesFromCustomLineItemCommandOutput>(
  _ep0,
  _mw0,
  "BatchDisassociateResourcesFromCustomLineItem",
  BatchDisassociateResourcesFromCustomLineItem$
) {
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
