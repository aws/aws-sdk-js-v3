// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  DeleteConfiguredAudienceModelAssociationInput,
  DeleteConfiguredAudienceModelAssociationOutput,
} from "../models/models_0";
import { DeleteConfiguredAudienceModelAssociation } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteConfiguredAudienceModelAssociationCommand}.
 */
export interface DeleteConfiguredAudienceModelAssociationCommandInput
  extends DeleteConfiguredAudienceModelAssociationInput {}
/**
 * @public
 *
 * The output of {@link DeleteConfiguredAudienceModelAssociationCommand}.
 */
export interface DeleteConfiguredAudienceModelAssociationCommandOutput
  extends DeleteConfiguredAudienceModelAssociationOutput,
    __MetadataBearer {}

/**
 * <p>Provides the information necessary to delete a configured audience model association.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, DeleteConfiguredAudienceModelAssociationCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, DeleteConfiguredAudienceModelAssociationCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * // import type { CleanRoomsClientConfig } from "@aws-sdk/client-cleanrooms";
 * const config = {}; // type is CleanRoomsClientConfig
 * const client = new CleanRoomsClient(config);
 * const input = { // DeleteConfiguredAudienceModelAssociationInput
 *   configuredAudienceModelAssociationIdentifier: "STRING_VALUE", // required
 *   membershipIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteConfiguredAudienceModelAssociationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteConfiguredAudienceModelAssociationCommandInput - {@link DeleteConfiguredAudienceModelAssociationCommandInput}
 * @returns {@link DeleteConfiguredAudienceModelAssociationCommandOutput}
 * @see {@link DeleteConfiguredAudienceModelAssociationCommandInput} for command's `input` shape.
 * @see {@link DeleteConfiguredAudienceModelAssociationCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class DeleteConfiguredAudienceModelAssociationCommand extends $Command
  .classBuilder<
    DeleteConfiguredAudienceModelAssociationCommandInput,
    DeleteConfiguredAudienceModelAssociationCommandOutput,
    CleanRoomsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBastionControlPlaneServiceLambda", "DeleteConfiguredAudienceModelAssociation", {})
  .n("CleanRoomsClient", "DeleteConfiguredAudienceModelAssociationCommand")
  .sc(DeleteConfiguredAudienceModelAssociation)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteConfiguredAudienceModelAssociationInput;
      output: {};
    };
    sdk: {
      input: DeleteConfiguredAudienceModelAssociationCommandInput;
      output: DeleteConfiguredAudienceModelAssociationCommandOutput;
    };
  };
}
