// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BillingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BillingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateBillingViewRequest,
  UpdateBillingViewRequestFilterSensitiveLog,
  UpdateBillingViewResponse,
} from "../models/models_0";
import { de_UpdateBillingViewCommand, se_UpdateBillingViewCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateBillingViewCommand}.
 */
export interface UpdateBillingViewCommandInput extends UpdateBillingViewRequest {}
/**
 * @public
 *
 * The output of {@link UpdateBillingViewCommand}.
 */
export interface UpdateBillingViewCommandOutput extends UpdateBillingViewResponse, __MetadataBearer {}

/**
 * <p>An API to update the attributes of the billing view.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingClient, UpdateBillingViewCommand } from "@aws-sdk/client-billing"; // ES Modules import
 * // const { BillingClient, UpdateBillingViewCommand } = require("@aws-sdk/client-billing"); // CommonJS import
 * const client = new BillingClient(config);
 * const input = { // UpdateBillingViewRequest
 *   arn: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   dataFilterExpression: { // Expression
 *     dimensions: { // DimensionValues
 *       key: "LINKED_ACCOUNT", // required
 *       values: [ // Values // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *     tags: { // TagValues
 *       key: "STRING_VALUE", // required
 *       values: [ // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 * };
 * const command = new UpdateBillingViewCommand(input);
 * const response = await client.send(command);
 * // { // UpdateBillingViewResponse
 * //   arn: "STRING_VALUE", // required
 * //   updatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param UpdateBillingViewCommandInput - {@link UpdateBillingViewCommandInput}
 * @returns {@link UpdateBillingViewCommandOutput}
 * @see {@link UpdateBillingViewCommandInput} for command's `input` shape.
 * @see {@link UpdateBillingViewCommandOutput} for command's `response` shape.
 * @see {@link BillingClientResolvedConfig | config} for BillingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>
 *       The requested operation would cause a conflict with the current state of a service resource associated with the request. Resolve the conflict before retrying this request.
 *     </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing failed because of an unknown error, exception, or failure.
 *       </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>
 *       The specified ARN in the request doesn't exist.
 *     </p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>
 *       You've reached the limit of resources you can create, or exceeded the size of an individual resource.
 *     </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.
 *       </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *       </p>
 *
 * @throws {@link BillingServiceException}
 * <p>Base exception class for all service exceptions from Billing service.</p>
 *
 *
 * @example Invoke UpdateBillingView
 * ```javascript
 * //
 * const input = {
 *   arn: "arn:aws:billing::123456789101:billingview/custom-46f47cb2-a11d-43f3-983d-470b5708a899",
 *   dataFilterExpression: {
 *     dimensions: {
 *       key: "LINKED_ACCOUNT",
 *       values: [
 *         "000000000000"
 *       ]
 *     }
 *   },
 *   description: "Custom Billing View Example -- updated description",
 *   name: "Example Custom Billing View"
 * };
 * const command = new UpdateBillingViewCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   arn: "arn:aws:billing::123456789101:billingview/custom-46f47cb2-a11d-43f3-983d-470b5708a899",
 *   updatedAt: 1719792001
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateBillingViewCommand extends $Command
  .classBuilder<
    UpdateBillingViewCommandInput,
    UpdateBillingViewCommandOutput,
    BillingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BillingClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSBilling", "UpdateBillingView", {})
  .n("BillingClient", "UpdateBillingViewCommand")
  .f(UpdateBillingViewRequestFilterSensitiveLog, void 0)
  .ser(se_UpdateBillingViewCommand)
  .de(de_UpdateBillingViewCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateBillingViewRequest;
      output: UpdateBillingViewResponse;
    };
    sdk: {
      input: UpdateBillingViewCommandInput;
      output: UpdateBillingViewCommandOutput;
    };
  };
}
