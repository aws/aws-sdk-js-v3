// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BillingconductorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BillingconductorClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteCustomLineItemInput, DeleteCustomLineItemOutput } from "../models/models_0";
import { de_DeleteCustomLineItemCommand, se_DeleteCustomLineItemCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteCustomLineItemCommand}.
 */
export interface DeleteCustomLineItemCommandInput extends DeleteCustomLineItemInput {}
/**
 * @public
 *
 * The output of {@link DeleteCustomLineItemCommand}.
 */
export interface DeleteCustomLineItemCommandOutput extends DeleteCustomLineItemOutput, __MetadataBearer {}

/**
 * <p>
 *       Deletes the custom line item identified by the given ARN in the current, or previous billing period.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingconductorClient, DeleteCustomLineItemCommand } from "@aws-sdk/client-billingconductor"; // ES Modules import
 * // const { BillingconductorClient, DeleteCustomLineItemCommand } = require("@aws-sdk/client-billingconductor"); // CommonJS import
 * const client = new BillingconductorClient(config);
 * const input = { // DeleteCustomLineItemInput
 *   Arn: "STRING_VALUE", // required
 *   BillingPeriodRange: { // CustomLineItemBillingPeriodRange
 *     InclusiveStartBillingPeriod: "STRING_VALUE", // required
 *     ExclusiveEndBillingPeriod: "STRING_VALUE",
 *   },
 * };
 * const command = new DeleteCustomLineItemCommand(input);
 * const response = await client.send(command);
 * // { // DeleteCustomLineItemOutput
 * //   Arn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteCustomLineItemCommandInput - {@link DeleteCustomLineItemCommandInput}
 * @returns {@link DeleteCustomLineItemCommandOutput}
 * @see {@link DeleteCustomLineItemCommandInput} for command's `input` shape.
 * @see {@link DeleteCustomLineItemCommandOutput} for command's `response` shape.
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
export class DeleteCustomLineItemCommand extends $Command
  .classBuilder<
    DeleteCustomLineItemCommandInput,
    DeleteCustomLineItemCommandOutput,
    BillingconductorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: BillingconductorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSBillingConductor", "DeleteCustomLineItem", {})
  .n("BillingconductorClient", "DeleteCustomLineItemCommand")
  .f(void 0, void 0)
  .ser(se_DeleteCustomLineItemCommand)
  .de(de_DeleteCustomLineItemCommand)
  .build() {}
