// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateCollaborationInput, UpdateCollaborationOutput } from "../models/models_0";
import { de_UpdateCollaborationCommand, se_UpdateCollaborationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateCollaborationCommand}.
 */
export interface UpdateCollaborationCommandInput extends UpdateCollaborationInput {}
/**
 * @public
 *
 * The output of {@link UpdateCollaborationCommand}.
 */
export interface UpdateCollaborationCommandOutput extends UpdateCollaborationOutput, __MetadataBearer {}

/**
 * <p>Updates collaboration metadata and can only be called by the collaboration owner.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, UpdateCollaborationCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, UpdateCollaborationCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * const client = new CleanRoomsClient(config);
 * const input = { // UpdateCollaborationInput
 *   collaborationIdentifier: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   description: "STRING_VALUE",
 * };
 * const command = new UpdateCollaborationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateCollaborationOutput
 * //   collaboration: { // Collaboration
 * //     id: "STRING_VALUE", // required
 * //     arn: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     description: "STRING_VALUE",
 * //     creatorAccountId: "STRING_VALUE", // required
 * //     creatorDisplayName: "STRING_VALUE", // required
 * //     createTime: new Date("TIMESTAMP"), // required
 * //     updateTime: new Date("TIMESTAMP"), // required
 * //     memberStatus: "STRING_VALUE", // required
 * //     membershipId: "STRING_VALUE",
 * //     membershipArn: "STRING_VALUE",
 * //     dataEncryptionMetadata: { // DataEncryptionMetadata
 * //       allowCleartext: true || false, // required
 * //       allowDuplicates: true || false, // required
 * //       allowJoinsOnColumnsWithDifferentNames: true || false, // required
 * //       preserveNulls: true || false, // required
 * //     },
 * //     queryLogStatus: "ENABLED" || "DISABLED", // required
 * //     analyticsEngine: "SPARK" || "CLEAN_ROOMS_SQL",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateCollaborationCommandInput - {@link UpdateCollaborationCommandInput}
 * @returns {@link UpdateCollaborationCommandOutput}
 * @see {@link UpdateCollaborationCommandInput} for command's `input` shape.
 * @see {@link UpdateCollaborationCommandOutput} for command's `response` shape.
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
export class UpdateCollaborationCommand extends $Command
  .classBuilder<
    UpdateCollaborationCommandInput,
    UpdateCollaborationCommandOutput,
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
  .s("AWSBastionControlPlaneServiceLambda", "UpdateCollaboration", {})
  .n("CleanRoomsClient", "UpdateCollaborationCommand")
  .f(void 0, void 0)
  .ser(se_UpdateCollaborationCommand)
  .de(de_UpdateCollaborationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateCollaborationInput;
      output: UpdateCollaborationOutput;
    };
    sdk: {
      input: UpdateCollaborationCommandInput;
      output: UpdateCollaborationCommandOutput;
    };
  };
}
