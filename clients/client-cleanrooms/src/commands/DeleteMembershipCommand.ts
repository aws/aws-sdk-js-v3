// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteMembershipInput, DeleteMembershipOutput } from "../models/models_0";
import { DeleteMembership } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteMembershipCommand}.
 */
export interface DeleteMembershipCommandInput extends DeleteMembershipInput {}
/**
 * @public
 *
 * The output of {@link DeleteMembershipCommand}.
 */
export interface DeleteMembershipCommandOutput extends DeleteMembershipOutput, __MetadataBearer {}

/**
 * <p>Deletes a specified membership. All resources under a membership must be deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, DeleteMembershipCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, DeleteMembershipCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * // import type { CleanRoomsClientConfig } from "@aws-sdk/client-cleanrooms";
 * const config = {}; // type is CleanRoomsClientConfig
 * const client = new CleanRoomsClient(config);
 * const input = { // DeleteMembershipInput
 *   membershipIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteMembershipCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteMembershipCommandInput - {@link DeleteMembershipCommandInput}
 * @returns {@link DeleteMembershipCommandOutput}
 * @see {@link DeleteMembershipCommandInput} for command's `input` shape.
 * @see {@link DeleteMembershipCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsClientResolvedConfig | config} for CleanRoomsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Caller does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
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
 *
 * @public
 */
export class DeleteMembershipCommand extends $Command
  .classBuilder<
    DeleteMembershipCommandInput,
    DeleteMembershipCommandOutput,
    CleanRoomsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBastionControlPlaneServiceLambda", "DeleteMembership", {})
  .n("CleanRoomsClient", "DeleteMembershipCommand")
  .sc(DeleteMembership)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteMembershipInput;
      output: {};
    };
    sdk: {
      input: DeleteMembershipCommandInput;
      output: DeleteMembershipCommandOutput;
    };
  };
}
