// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateMeetingDialOutRequest, CreateMeetingDialOutResponse } from "../models/models_0";
import { CreateMeetingDialOut$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Uses the join token and call metadata in a meeting request (From number, To number, and so forth) to initiate an outbound call to a public
 *     switched telephone network (PSTN) and join them into a Chime meeting. Also ensures that the From number belongs to the customer.</p>
 *          <p>To play welcome audio or implement an interactive voice response (IVR), use the
 * <code>CreateSipMediaApplicationCall</code> action with the corresponding SIP media application ID.</p>
 *          <important>
 *             <p>
 *                <b>This API is not available in a dedicated namespace.</b>
 *             </p>
 *          </important>
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
 *  <p>You don't have permissions to perform the requested operation.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>The request exceeds the resource limit.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottledClientException} (client fault)
 *  <p>The client exceeded its request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client is not currently authorized to make the request.</p>
 *
 * @throws {@link ChimeServiceException}
 * <p>Base exception class for all service exceptions from Chime service.</p>
 *
 *
 * @public
 */
export class CreateMeetingDialOutCommand extends $Command
  .classBuilder<
    CreateMeetingDialOutCommandInput,
    CreateMeetingDialOutCommandOutput,
    ChimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("UCBuzzConsoleService", "CreateMeetingDialOut", {})
  .n("ChimeClient", "CreateMeetingDialOutCommand")
  .sc(CreateMeetingDialOut$)
  .build() {
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
