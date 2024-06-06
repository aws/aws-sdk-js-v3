// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteConfiguredTableAssociationInput, DeleteConfiguredTableAssociationOutput } from "../models/models_0";
import {
  de_DeleteConfiguredTableAssociationCommand,
  se_DeleteConfiguredTableAssociationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteConfiguredTableAssociationCommand}.
 */
export interface DeleteConfiguredTableAssociationCommandInput extends DeleteConfiguredTableAssociationInput {}
/**
 * @public
 *
 * The output of {@link DeleteConfiguredTableAssociationCommand}.
 */
export interface DeleteConfiguredTableAssociationCommandOutput
  extends DeleteConfiguredTableAssociationOutput,
    __MetadataBearer {}

/**
 * <p>Deletes a configured table association.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, DeleteConfiguredTableAssociationCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, DeleteConfiguredTableAssociationCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * const client = new CleanRoomsClient(config);
 * const input = { // DeleteConfiguredTableAssociationInput
 *   configuredTableAssociationIdentifier: "STRING_VALUE", // required
 *   membershipIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteConfiguredTableAssociationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteConfiguredTableAssociationCommandInput - {@link DeleteConfiguredTableAssociationCommandInput}
 * @returns {@link DeleteConfiguredTableAssociationCommandOutput}
 * @see {@link DeleteConfiguredTableAssociationCommandInput} for command's `input` shape.
 * @see {@link DeleteConfiguredTableAssociationCommandOutput} for command's `response` shape.
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
 * @public
 */
export class DeleteConfiguredTableAssociationCommand extends $Command
  .classBuilder<
    DeleteConfiguredTableAssociationCommandInput,
    DeleteConfiguredTableAssociationCommandOutput,
    CleanRoomsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSBastionControlPlaneServiceLambda", "DeleteConfiguredTableAssociation", {})
  .n("CleanRoomsClient", "DeleteConfiguredTableAssociationCommand")
  .f(void 0, void 0)
  .ser(se_DeleteConfiguredTableAssociationCommand)
  .de(de_DeleteConfiguredTableAssociationCommand)
  .build() {}
