// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteCollaborationInput, DeleteCollaborationOutput } from "../models/models_0";
import { de_DeleteCollaborationCommand, se_DeleteCollaborationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteCollaborationCommand}.
 */
export interface DeleteCollaborationCommandInput extends DeleteCollaborationInput {}
/**
 * @public
 *
 * The output of {@link DeleteCollaborationCommand}.
 */
export interface DeleteCollaborationCommandOutput extends DeleteCollaborationOutput, __MetadataBearer {}

/**
 * <p>Deletes a collaboration. It can only be called by the collaboration owner.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, DeleteCollaborationCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, DeleteCollaborationCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CleanRoomsClient(config);
 * const input = { // DeleteCollaborationInput
 *   collaborationIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteCollaborationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteCollaborationCommandInput - {@link DeleteCollaborationCommandInput}
 * @returns {@link DeleteCollaborationCommandOutput}
 * @see {@link DeleteCollaborationCommandInput} for command's `input` shape.
 * @see {@link DeleteCollaborationCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsClientResolvedConfig | config} for CleanRoomsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Caller does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the specified constraints.</p>
 *
 * @throws {@link CleanRoomsServiceException}
 * <p>Base exception class for all service exceptions from CleanRooms service.</p>
 *
 * @public
 */
export class DeleteCollaborationCommand extends $Command
  .classBuilder<
    DeleteCollaborationCommandInput,
    DeleteCollaborationCommandOutput,
    CleanRoomsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSBastionControlPlaneServiceLambda", "DeleteCollaboration", {})
  .n("CleanRoomsClient", "DeleteCollaborationCommand")
  .f(void 0, void 0)
  .ser(se_DeleteCollaborationCommand)
  .de(de_DeleteCollaborationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCollaborationInput;
      output: {};
    };
    sdk: {
      input: DeleteCollaborationCommandInput;
      output: DeleteCollaborationCommandOutput;
    };
  };
}
