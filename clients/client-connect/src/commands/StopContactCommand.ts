// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StopContactRequest, StopContactResponse } from "../models/models_3";
import { StopContact$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StopContactCommand}.
 */
export interface StopContactCommandInput extends StopContactRequest {}
/**
 * @public
 *
 * The output of {@link StopContactCommand}.
 */
export interface StopContactCommandOutput extends StopContactResponse, __MetadataBearer {}

/**
 * Ends the specified contact. Use this API to stop queued callbacks. It does not work for voice contacts that use the following initiation methods:
 *
 * - DISCONNECT
 * - TRANSFER
 * - QUEUE_TRANSFER
 * - EXTERNAL_OUTBOUND
 * - MONITOR
 *
 * Chat and task contacts can be terminated in any state, regardless of initiation method.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, StopContactCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, StopContactCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // StopContactRequest
 *   ContactId: "STRING_VALUE", // required
 *   InstanceId: "STRING_VALUE", // required
 *   DisconnectReason: { // DisconnectReason
 *     Code: "STRING_VALUE",
 *   },
 * };
 * const command = new StopContactCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopContactCommandInput - {@link StopContactCommandInput}
 * @returns {@link StopContactCommandOutput}
 * @see {@link StopContactCommandInput} for command's `input` shape.
 * @see {@link StopContactCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link ContactNotFoundException} (client fault)
 *
 * The contact with the specified ID does not exist.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * Request processing failed because of an error or failure with the service.
 *
 * @throws {@link InvalidActiveRegionException} (client fault)
 *
 * This exception occurs when an API request is made to a non-active region in an Amazon Connect instance configured with Amazon Connect Global Resiliency. For example, if the active region is US West (Oregon) and a request is made to US East (N. Virginia), the exception will be returned.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more of the specified parameters are not valid.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ConnectServiceException}
 *
 * Base exception class for all service exceptions from Connect service.
 *
 * @public
 */
export class StopContactCommand extends command<StopContactCommandInput, StopContactCommandOutput>(
  _ep0,
  _mw0,
  "StopContact",
  StopContact$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopContactRequest;
      output: {};
    };
    sdk: {
      input: StopContactCommandInput;
      output: StopContactCommandOutput;
    };
  };
}
