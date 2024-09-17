// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteIdNamespaceAssociationInput, DeleteIdNamespaceAssociationOutput } from "../models/models_0";
import {
  de_DeleteIdNamespaceAssociationCommand,
  se_DeleteIdNamespaceAssociationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteIdNamespaceAssociationCommand}.
 */
export interface DeleteIdNamespaceAssociationCommandInput extends DeleteIdNamespaceAssociationInput {}
/**
 * @public
 *
 * The output of {@link DeleteIdNamespaceAssociationCommand}.
 */
export interface DeleteIdNamespaceAssociationCommandOutput
  extends DeleteIdNamespaceAssociationOutput,
    __MetadataBearer {}

/**
 * <p>Deletes an ID namespace association.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, DeleteIdNamespaceAssociationCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, DeleteIdNamespaceAssociationCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * const client = new CleanRoomsClient(config);
 * const input = { // DeleteIdNamespaceAssociationInput
 *   idNamespaceAssociationIdentifier: "STRING_VALUE", // required
 *   membershipIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteIdNamespaceAssociationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteIdNamespaceAssociationCommandInput - {@link DeleteIdNamespaceAssociationCommandInput}
 * @returns {@link DeleteIdNamespaceAssociationCommandOutput}
 * @see {@link DeleteIdNamespaceAssociationCommandInput} for command's `input` shape.
 * @see {@link DeleteIdNamespaceAssociationCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsClientResolvedConfig | config} for CleanRoomsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Caller does not have sufficient access to perform this action.</p>
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
export class DeleteIdNamespaceAssociationCommand extends $Command
  .classBuilder<
    DeleteIdNamespaceAssociationCommandInput,
    DeleteIdNamespaceAssociationCommandOutput,
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
  .s("AWSBastionControlPlaneServiceLambda", "DeleteIdNamespaceAssociation", {})
  .n("CleanRoomsClient", "DeleteIdNamespaceAssociationCommand")
  .f(void 0, void 0)
  .ser(se_DeleteIdNamespaceAssociationCommand)
  .de(de_DeleteIdNamespaceAssociationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteIdNamespaceAssociationInput;
      output: {};
    };
    sdk: {
      input: DeleteIdNamespaceAssociationCommandInput;
      output: DeleteIdNamespaceAssociationCommandOutput;
    };
  };
}
