// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateMeetingDialOutRequest, CreateMeetingDialOutResponse } from "../models/models_0";
import { CreateMeetingDialOut$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateMeetingDialOutCommand}.
 */
export interface CreateMeetingDialOutCommandInput extends CreateMeetingDialOutRequest {}
/**
 * @public
 *
 * The output of {@link CreateMeetingDialOutCommand}.
 */
export interface CreateMeetingDialOutCommandOutput extends CreateMeetingDialOutResponse, __MetadataBearer {}

/**
 * Uses the join token and call metadata in a meeting request (From number, To number, and so forth) to initiate an outbound call to a public switched telephone network (PSTN) and join them into a Chime meeting. Also ensures that the From number belongs to the customer.
 *
 * To play welcome audio or implement an interactive voice response (IVR), use the `CreateSipMediaApplicationCall` action with the corresponding SIP media application ID.
 *
 * > **Important:** **This API is not available in a dedicated namespace.**
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, CreateMeetingDialOutCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, CreateMeetingDialOutCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * // import type { ChimeClientConfig } from "@aws-sdk/client-chime";
 * const config = {}; // type is ChimeClientConfig
 * const client = new ChimeClient(config);
 * const input = { // CreateMeetingDialOutRequest
 *   MeetingId: "STRING_VALUE", // required
 *   FromPhoneNumber: "STRING_VALUE", // required
 *   ToPhoneNumber: "STRING_VALUE", // required
 *   JoinToken: "STRING_VALUE", // required
 * };
 * const command = new CreateMeetingDialOutCommand(input);
 * const response = await client.send(command);
 * // { // CreateMeetingDialOutResponse
 * //   TransactionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateMeetingDialOutCommandInput - {@link CreateMeetingDialOutCommandInput}
 * @returns {@link CreateMeetingDialOutCommandOutput}
 * @see {@link CreateMeetingDialOutCommandInput} for command's `input` shape.
 * @see {@link CreateMeetingDialOutCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have permissions to perform the requested operation.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The input parameters don't match the service's restrictions.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * The client is permanently forbidden from making the request.
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *
 * The request exceeds the resource limit.
 *
 * @throws {@link ServiceFailureException} (server fault)
 *
 * The service encountered an unexpected error.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is currently unavailable.
 *
 * @throws {@link ThrottledClientException} (client fault)
 *
 * The client exceeded its request rate limit.
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *
 * The client is not currently authorized to make the request.
 *
 * @throws {@link ChimeServiceException}
 *
 * Base exception class for all service exceptions from Chime service.
 *
 * @public
 */
export class CreateMeetingDialOutCommand extends command<CreateMeetingDialOutCommandInput, CreateMeetingDialOutCommandOutput>(
  _ep0,
  _mw0,
  "CreateMeetingDialOut",
  CreateMeetingDialOut$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateMeetingDialOutRequest;
      output: CreateMeetingDialOutResponse;
    };
    sdk: {
      input: CreateMeetingDialOutCommandInput;
      output: CreateMeetingDialOutCommandOutput;
    };
  };
}
