// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  UpdateParticipantAuthenticationRequest,
  UpdateParticipantAuthenticationResponse,
} from "../models/models_3";
import { UpdateParticipantAuthentication$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateParticipantAuthenticationCommand}.
 */
export interface UpdateParticipantAuthenticationCommandInput extends UpdateParticipantAuthenticationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateParticipantAuthenticationCommand}.
 */
export interface UpdateParticipantAuthenticationCommandOutput extends UpdateParticipantAuthenticationResponse, __MetadataBearer {}

/**
 * Instructs Connect Customer to resume the authentication process. The subsequent actions depend on the request body contents:
 *
 * - **If a code is provided**: Connect retrieves the identity information from Amazon Cognito and imports it into Connect Customer Profiles.
 * - **If an error is provided**: The error branch of the Authenticate Customer block is executed.
 *
 * > **Note:** The API returns a success response to acknowledge the request. However, the interaction and exchange of identity information occur asynchronously after the response is returned.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateParticipantAuthenticationCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateParticipantAuthenticationCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // UpdateParticipantAuthenticationRequest
 *   State: "STRING_VALUE", // required
 *   InstanceId: "STRING_VALUE", // required
 *   Code: "STRING_VALUE",
 *   Error: "STRING_VALUE",
 *   ErrorDescription: "STRING_VALUE",
 * };
 * const command = new UpdateParticipantAuthenticationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateParticipantAuthenticationCommandInput - {@link UpdateParticipantAuthenticationCommandInput}
 * @returns {@link UpdateParticipantAuthenticationCommandOutput}
 * @see {@link UpdateParticipantAuthenticationCommandInput} for command's `input` shape.
 * @see {@link UpdateParticipantAuthenticationCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient permissions to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Operation cannot be performed at this time as there is a conflict with another operation or contact state.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * Request processing failed because of an error or failure with the service.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more of the specified parameters are not valid.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The throttling limit has been exceeded.
 *
 * @throws {@link ConnectServiceException}
 *
 * Base exception class for all service exceptions from Connect service.
 *
 * @public
 */
export class UpdateParticipantAuthenticationCommand extends command<UpdateParticipantAuthenticationCommandInput, UpdateParticipantAuthenticationCommandOutput>(
  _ep0,
  _mw0,
  "UpdateParticipantAuthentication",
  UpdateParticipantAuthentication$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateParticipantAuthenticationRequest;
      output: {};
    };
    sdk: {
      input: UpdateParticipantAuthenticationCommandInput;
      output: UpdateParticipantAuthenticationCommandOutput;
    };
  };
}
