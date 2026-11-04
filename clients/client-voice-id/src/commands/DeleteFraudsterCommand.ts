// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteFraudsterRequest } from "../models/models_0";
import { DeleteFraudster$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteFraudsterCommand}.
 */
export interface DeleteFraudsterCommandInput extends DeleteFraudsterRequest {}
/**
 * @public
 *
 * The output of {@link DeleteFraudsterCommand}.
 */
export interface DeleteFraudsterCommandOutput extends __MetadataBearer {}

/**
 * Deletes the specified fraudster from Voice ID. This action disassociates the fraudster from any watchlists it is a part of.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VoiceIDClient, DeleteFraudsterCommand } from "@aws-sdk/client-voice-id"; // ES Modules import
 * // const { VoiceIDClient, DeleteFraudsterCommand } = require("@aws-sdk/client-voice-id"); // CommonJS import
 * // import type { VoiceIDClientConfig } from "@aws-sdk/client-voice-id";
 * const config = {}; // type is VoiceIDClientConfig
 * const client = new VoiceIDClient(config);
 * const input = { // DeleteFraudsterRequest
 *   DomainId: "STRING_VALUE", // required
 *   FraudsterId: "STRING_VALUE", // required
 * };
 * const command = new DeleteFraudsterCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteFraudsterCommandInput - {@link DeleteFraudsterCommandInput}
 * @returns {@link DeleteFraudsterCommandOutput}
 * @see {@link DeleteFraudsterCommandInput} for command's `input` shape.
 * @see {@link DeleteFraudsterCommandOutput} for command's `response` shape.
 * @see {@link VoiceIDClientResolvedConfig | config} for VoiceIDClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient permissions to perform this action. Check the error message and try again.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request failed due to a conflict. Check the `ConflictType` and error message for more details.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request failed due to an unknown error on the server side.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource cannot be found. Check the `ResourceType` and error message for more details.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling. Please slow down your request rate. Refer to [Amazon Connect Voice ID Service API throttling quotas](https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html##voiceid-api-quotas) and try your request again.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request failed one or more validations; check the error message for more details.
 *
 * @throws {@link VoiceIDServiceException}
 *
 * Base exception class for all service exceptions from VoiceID service.
 *
 * @public
 */
export class DeleteFraudsterCommand extends command<DeleteFraudsterCommandInput, DeleteFraudsterCommandOutput>(
  _ep0,
  _mw0,
  "DeleteFraudster",
  DeleteFraudster$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteFraudsterRequest;
      output: {};
    };
    sdk: {
      input: DeleteFraudsterCommandInput;
      output: DeleteFraudsterCommandOutput;
    };
  };
}
