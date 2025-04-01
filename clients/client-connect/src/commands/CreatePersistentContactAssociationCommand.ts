// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreatePersistentContactAssociationRequest,
  CreatePersistentContactAssociationResponse,
} from "../models/models_0";
import {
  de_CreatePersistentContactAssociationCommand,
  se_CreatePersistentContactAssociationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreatePersistentContactAssociationCommand}.
 */
export interface CreatePersistentContactAssociationCommandInput extends CreatePersistentContactAssociationRequest {}
/**
 * @public
 *
 * The output of {@link CreatePersistentContactAssociationCommand}.
 */
export interface CreatePersistentContactAssociationCommandOutput
  extends CreatePersistentContactAssociationResponse,
    __MetadataBearer {}

/**
 * <p>Enables rehydration of chats for the lifespan of a contact. For more information about chat
 *    rehydration, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/chat-persistence.html">Enable persistent chat</a> in the
 *      <i>Amazon Connect Administrator Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, CreatePersistentContactAssociationCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, CreatePersistentContactAssociationCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // CreatePersistentContactAssociationRequest
 *   InstanceId: "STRING_VALUE", // required
 *   InitialContactId: "STRING_VALUE", // required
 *   RehydrationType: "ENTIRE_PAST_SESSION" || "FROM_SEGMENT", // required
 *   SourceContactId: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new CreatePersistentContactAssociationCommand(input);
 * const response = await client.send(command);
 * // { // CreatePersistentContactAssociationResponse
 * //   ContinuedFromContactId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreatePersistentContactAssociationCommandInput - {@link CreatePersistentContactAssociationCommandInput}
 * @returns {@link CreatePersistentContactAssociationCommandOutput}
 * @see {@link CreatePersistentContactAssociationCommandInput} for command's `input` shape.
 * @see {@link CreatePersistentContactAssociationCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class CreatePersistentContactAssociationCommand extends $Command
  .classBuilder<
    CreatePersistentContactAssociationCommandInput,
    CreatePersistentContactAssociationCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectService", "CreatePersistentContactAssociation", {})
  .n("ConnectClient", "CreatePersistentContactAssociationCommand")
  .f(void 0, void 0)
  .ser(se_CreatePersistentContactAssociationCommand)
  .de(de_CreatePersistentContactAssociationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePersistentContactAssociationRequest;
      output: CreatePersistentContactAssociationResponse;
    };
    sdk: {
      input: CreatePersistentContactAssociationCommandInput;
      output: CreatePersistentContactAssociationCommandOutput;
    };
  };
}
