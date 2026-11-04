// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListResourcesAssociatedToCustomLineItemInput,
  ListResourcesAssociatedToCustomLineItemOutput,
} from "../models/models_0";
import { ListResourcesAssociatedToCustomLineItem$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListResourcesAssociatedToCustomLineItemCommand}.
 */
export interface ListResourcesAssociatedToCustomLineItemCommandInput extends ListResourcesAssociatedToCustomLineItemInput {}
/**
 * @public
 *
 * The output of {@link ListResourcesAssociatedToCustomLineItemCommand}.
 */
export interface ListResourcesAssociatedToCustomLineItemCommandOutput extends ListResourcesAssociatedToCustomLineItemOutput, __MetadataBearer {}

/**
 * List the resources that are associated to a custom line item.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingconductorClient, ListResourcesAssociatedToCustomLineItemCommand } from "@aws-sdk/client-billingconductor"; // ES Modules import
 * // const { BillingconductorClient, ListResourcesAssociatedToCustomLineItemCommand } = require("@aws-sdk/client-billingconductor"); // CommonJS import
 * // import type { BillingconductorClientConfig } from "@aws-sdk/client-billingconductor";
 * const config = {}; // type is BillingconductorClientConfig
 * const client = new BillingconductorClient(config);
 * const input = { // ListResourcesAssociatedToCustomLineItemInput
 *   BillingPeriod: "STRING_VALUE",
 *   Arn: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Filters: { // ListResourcesAssociatedToCustomLineItemFilter
 *     Relationship: "PARENT" || "CHILD",
 *   },
 * };
 * const command = new ListResourcesAssociatedToCustomLineItemCommand(input);
 * const response = await client.send(command);
 * // { // ListResourcesAssociatedToCustomLineItemOutput
 * //   Arn: "STRING_VALUE",
 * //   AssociatedResources: [ // ListResourcesAssociatedToCustomLineItemResponseList
 * //     { // ListResourcesAssociatedToCustomLineItemResponseElement
 * //       Arn: "STRING_VALUE",
 * //       Relationship: "PARENT" || "CHILD",
 * //       EndBillingPeriod: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListResourcesAssociatedToCustomLineItemCommandInput - {@link ListResourcesAssociatedToCustomLineItemCommandInput}
 * @returns {@link ListResourcesAssociatedToCustomLineItemCommandOutput}
 * @see {@link ListResourcesAssociatedToCustomLineItemCommandInput} for command's `input` shape.
 * @see {@link ListResourcesAssociatedToCustomLineItemCommandOutput} for command's `response` shape.
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
export class ListResourcesAssociatedToCustomLineItemCommand extends command<ListResourcesAssociatedToCustomLineItemCommandInput, ListResourcesAssociatedToCustomLineItemCommandOutput>(
  _ep0,
  _mw0,
  "ListResourcesAssociatedToCustomLineItem",
  ListResourcesAssociatedToCustomLineItem$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListResourcesAssociatedToCustomLineItemInput;
      output: ListResourcesAssociatedToCustomLineItemOutput;
    };
    sdk: {
      input: ListResourcesAssociatedToCustomLineItemCommandInput;
      output: ListResourcesAssociatedToCustomLineItemCommandOutput;
    };
  };
}
