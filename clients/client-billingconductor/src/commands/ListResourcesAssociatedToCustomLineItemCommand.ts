// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BillingconductorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BillingconductorClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListResourcesAssociatedToCustomLineItemInput,
  ListResourcesAssociatedToCustomLineItemOutput,
} from "../models/models_0";
import {
  de_ListResourcesAssociatedToCustomLineItemCommand,
  se_ListResourcesAssociatedToCustomLineItemCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListResourcesAssociatedToCustomLineItemCommand}.
 */
export interface ListResourcesAssociatedToCustomLineItemCommandInput
  extends ListResourcesAssociatedToCustomLineItemInput {}
/**
 * @public
 *
 * The output of {@link ListResourcesAssociatedToCustomLineItemCommand}.
 */
export interface ListResourcesAssociatedToCustomLineItemCommandOutput
  extends ListResourcesAssociatedToCustomLineItemOutput,
    __MetadataBearer {}

/**
 * <p>
 *       List the resources that are associated to a custom line item.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingconductorClient, ListResourcesAssociatedToCustomLineItemCommand } from "@aws-sdk/client-billingconductor"; // ES Modules import
 * // const { BillingconductorClient, ListResourcesAssociatedToCustomLineItemCommand } = require("@aws-sdk/client-billingconductor"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new BillingconductorClient(config);
 * const input = { // ListResourcesAssociatedToCustomLineItemInput
 *   BillingPeriod: "STRING_VALUE",
 *   Arn: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Filters: { // ListResourcesAssociatedToCustomLineItemFilter
 *     Relationship: "STRING_VALUE",
 *   },
 * };
 * const command = new ListResourcesAssociatedToCustomLineItemCommand(input);
 * const response = await client.send(command);
 * // { // ListResourcesAssociatedToCustomLineItemOutput
 * //   Arn: "STRING_VALUE",
 * //   AssociatedResources: [ // ListResourcesAssociatedToCustomLineItemResponseList
 * //     { // ListResourcesAssociatedToCustomLineItemResponseElement
 * //       Arn: "STRING_VALUE",
 * //       Relationship: "STRING_VALUE",
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
 *  <p>You do not have sufficient access to perform this action.
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
 * @public
 */
export class ListResourcesAssociatedToCustomLineItemCommand extends $Command
  .classBuilder<
    ListResourcesAssociatedToCustomLineItemCommandInput,
    ListResourcesAssociatedToCustomLineItemCommandOutput,
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
  .s("AWSBillingConductor", "ListResourcesAssociatedToCustomLineItem", {})
  .n("BillingconductorClient", "ListResourcesAssociatedToCustomLineItemCommand")
  .f(void 0, void 0)
  .ser(se_ListResourcesAssociatedToCustomLineItemCommand)
  .de(de_ListResourcesAssociatedToCustomLineItemCommand)
  .build() {
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
