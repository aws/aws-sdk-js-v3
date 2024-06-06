// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BillingconductorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BillingconductorClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteBillingGroupInput, DeleteBillingGroupOutput } from "../models/models_0";
import { de_DeleteBillingGroupCommand, se_DeleteBillingGroupCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteBillingGroupCommand}.
 */
export interface DeleteBillingGroupCommandInput extends DeleteBillingGroupInput {}
/**
 * @public
 *
 * The output of {@link DeleteBillingGroupCommand}.
 */
export interface DeleteBillingGroupCommandOutput extends DeleteBillingGroupOutput, __MetadataBearer {}

/**
 * <p>
 *       Deletes a billing group.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingconductorClient, DeleteBillingGroupCommand } from "@aws-sdk/client-billingconductor"; // ES Modules import
 * // const { BillingconductorClient, DeleteBillingGroupCommand } = require("@aws-sdk/client-billingconductor"); // CommonJS import
 * const client = new BillingconductorClient(config);
 * const input = { // DeleteBillingGroupInput
 *   Arn: "STRING_VALUE", // required
 * };
 * const command = new DeleteBillingGroupCommand(input);
 * const response = await client.send(command);
 * // { // DeleteBillingGroupOutput
 * //   Arn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteBillingGroupCommandInput - {@link DeleteBillingGroupCommandInput}
 * @returns {@link DeleteBillingGroupCommandOutput}
 * @see {@link DeleteBillingGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteBillingGroupCommandOutput} for command's `response` shape.
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
export class DeleteBillingGroupCommand extends $Command
  .classBuilder<
    DeleteBillingGroupCommandInput,
    DeleteBillingGroupCommandOutput,
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
  .s("AWSBillingConductor", "DeleteBillingGroup", {})
  .n("BillingconductorClient", "DeleteBillingGroupCommand")
  .f(void 0, void 0)
  .ser(se_DeleteBillingGroupCommand)
  .de(de_DeleteBillingGroupCommand)
  .build() {}
