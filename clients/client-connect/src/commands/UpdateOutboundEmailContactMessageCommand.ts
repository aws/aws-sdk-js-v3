// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  UpdateOutboundEmailContactMessageRequest,
  UpdateOutboundEmailContactMessageResponse,
} from "../models/models_3";
import { UpdateOutboundEmailContactMessage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateOutboundEmailContactMessageCommand}.
 */
export interface UpdateOutboundEmailContactMessageCommandInput extends UpdateOutboundEmailContactMessageRequest {}
/**
 * @public
 *
 * The output of {@link UpdateOutboundEmailContactMessageCommand}.
 */
export interface UpdateOutboundEmailContactMessageCommandOutput extends UpdateOutboundEmailContactMessageResponse, __MetadataBearer {}

/**
 * <p>Updates the draft outbound email message for a contact. Use this operation to save changes to an in-progress
 *    outbound email reply before you send it. This operation applies only to contacts with an <code>OUTBOUND</code> or
 *    <code>AGENT_REPLY</code> initiation method; it isn't supported for flow-initiated emails.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateOutboundEmailContactMessageCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateOutboundEmailContactMessageCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // UpdateOutboundEmailContactMessageRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ContactId: "STRING_VALUE", // required
 *   EmailMessage: { // UpdateOutboundEmailContent
 *     MessageSourceType: "RAW", // required
 *     RawMessage: { // UpdateOutboundRawMessage
 *       Body: "STRING_VALUE", // required
 *       ContentType: "STRING_VALUE", // required
 *     },
 *   },
 * };
 * const command = new UpdateOutboundEmailContactMessageCommand(input);
 * const response = await client.send(command);
 * // { // UpdateOutboundEmailContactMessageResponse
 * //   ContactId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateOutboundEmailContactMessageCommandInput - {@link UpdateOutboundEmailContactMessageCommandInput}
 * @returns {@link UpdateOutboundEmailContactMessageCommandOutput}
 * @see {@link UpdateOutboundEmailContactMessageCommandInput} for command's `input` shape.
 * @see {@link UpdateOutboundEmailContactMessageCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceConflictException} (client fault)
 *  <p>A resource already has that name.</p>
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
export class UpdateOutboundEmailContactMessageCommand extends command<UpdateOutboundEmailContactMessageCommandInput, UpdateOutboundEmailContactMessageCommandOutput>(
  _ep0,
  _mw0,
  "UpdateOutboundEmailContactMessage",
  UpdateOutboundEmailContactMessage$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateOutboundEmailContactMessageRequest;
      output: UpdateOutboundEmailContactMessageResponse;
    };
    sdk: {
      input: UpdateOutboundEmailContactMessageCommandInput;
      output: UpdateOutboundEmailContactMessageCommandOutput;
    };
  };
}
