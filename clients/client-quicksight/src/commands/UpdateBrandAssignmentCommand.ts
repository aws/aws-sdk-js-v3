// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateBrandAssignmentRequest, UpdateBrandAssignmentResponse } from "../models/models_5";
import { de_UpdateBrandAssignmentCommand, se_UpdateBrandAssignmentCommand } from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateBrandAssignmentCommand}.
 */
export interface UpdateBrandAssignmentCommandInput extends UpdateBrandAssignmentRequest {}
/**
 * @public
 *
 * The output of {@link UpdateBrandAssignmentCommand}.
 */
export interface UpdateBrandAssignmentCommandOutput extends UpdateBrandAssignmentResponse, __MetadataBearer {}

/**
 * <p>Updates a brand assignment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateBrandAssignmentCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateBrandAssignmentCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const input = { // UpdateBrandAssignmentRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   BrandArn: "STRING_VALUE", // required
 * };
 * const command = new UpdateBrandAssignmentCommand(input);
 * const response = await client.send(command);
 * // { // UpdateBrandAssignmentResponse
 * //   RequestId: "STRING_VALUE",
 * //   BrandArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateBrandAssignmentCommandInput - {@link UpdateBrandAssignmentCommandInput}
 * @returns {@link UpdateBrandAssignmentCommandOutput}
 * @see {@link UpdateBrandAssignmentCommandInput} for command's `input` shape.
 * @see {@link UpdateBrandAssignmentCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon QuickSight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal service exception.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>You don't have this feature activated for your account. To fix this issue, contact Amazon Web Services support.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 *
 * @public
 */
export class UpdateBrandAssignmentCommand extends $Command
  .classBuilder<
    UpdateBrandAssignmentCommandInput,
    UpdateBrandAssignmentCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("QuickSight_20180401", "UpdateBrandAssignment", {})
  .n("QuickSightClient", "UpdateBrandAssignmentCommand")
  .f(void 0, void 0)
  .ser(se_UpdateBrandAssignmentCommand)
  .de(de_UpdateBrandAssignmentCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateBrandAssignmentRequest;
      output: UpdateBrandAssignmentResponse;
    };
    sdk: {
      input: UpdateBrandAssignmentCommandInput;
      output: UpdateBrandAssignmentCommandOutput;
    };
  };
}
