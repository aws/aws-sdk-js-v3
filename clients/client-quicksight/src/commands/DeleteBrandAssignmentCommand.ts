// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteBrandAssignmentRequest, DeleteBrandAssignmentResponse } from "../models/models_4";
import { de_DeleteBrandAssignmentCommand, se_DeleteBrandAssignmentCommand } from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteBrandAssignmentCommand}.
 */
export interface DeleteBrandAssignmentCommandInput extends DeleteBrandAssignmentRequest {}
/**
 * @public
 *
 * The output of {@link DeleteBrandAssignmentCommand}.
 */
export interface DeleteBrandAssignmentCommandOutput extends DeleteBrandAssignmentResponse, __MetadataBearer {}

/**
 * <p>Deletes a brand assignment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DeleteBrandAssignmentCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DeleteBrandAssignmentCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // DeleteBrandAssignmentRequest
 *   AwsAccountId: "STRING_VALUE", // required
 * };
 * const command = new DeleteBrandAssignmentCommand(input);
 * const response = await client.send(command);
 * // { // DeleteBrandAssignmentResponse
 * //   RequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteBrandAssignmentCommandInput - {@link DeleteBrandAssignmentCommandInput}
 * @returns {@link DeleteBrandAssignmentCommandOutput}
 * @see {@link DeleteBrandAssignmentCommandInput} for command's `input` shape.
 * @see {@link DeleteBrandAssignmentCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon Quick Sight service, that your policies have the
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
export class DeleteBrandAssignmentCommand extends $Command
  .classBuilder<
    DeleteBrandAssignmentCommandInput,
    DeleteBrandAssignmentCommandOutput,
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
  .s("QuickSight_20180401", "DeleteBrandAssignment", {})
  .n("QuickSightClient", "DeleteBrandAssignmentCommand")
  .f(void 0, void 0)
  .ser(se_DeleteBrandAssignmentCommand)
  .de(de_DeleteBrandAssignmentCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteBrandAssignmentRequest;
      output: DeleteBrandAssignmentResponse;
    };
    sdk: {
      input: DeleteBrandAssignmentCommandInput;
      output: DeleteBrandAssignmentCommandOutput;
    };
  };
}
