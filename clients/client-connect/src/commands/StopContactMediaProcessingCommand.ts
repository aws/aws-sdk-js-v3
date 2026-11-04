// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StopContactMediaProcessingRequest, StopContactMediaProcessingResponse } from "../models/models_3";
import { StopContactMediaProcessing$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StopContactMediaProcessingCommand}.
 */
export interface StopContactMediaProcessingCommandInput extends StopContactMediaProcessingRequest {}
/**
 * @public
 *
 * The output of {@link StopContactMediaProcessingCommand}.
 */
export interface StopContactMediaProcessingCommandOutput extends StopContactMediaProcessingResponse, __MetadataBearer {}

/**
 * Stops in-flight message processing for an ongoing chat session.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, StopContactMediaProcessingCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, StopContactMediaProcessingCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // StopContactMediaProcessingRequest
 *   InstanceId: "STRING_VALUE",
 *   ContactId: "STRING_VALUE",
 * };
 * const command = new StopContactMediaProcessingCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopContactMediaProcessingCommandInput - {@link StopContactMediaProcessingCommandInput}
 * @returns {@link StopContactMediaProcessingCommandOutput}
 * @see {@link StopContactMediaProcessingCommandInput} for command's `input` shape.
 * @see {@link StopContactMediaProcessingCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient permissions to perform this action.
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
 * @throws {@link LimitExceededException} (client fault)
 *
 * The allowed limit for the resource has been exceeded.
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
export class StopContactMediaProcessingCommand extends command<StopContactMediaProcessingCommandInput, StopContactMediaProcessingCommandOutput>(
  _ep0,
  _mw0,
  "StopContactMediaProcessing",
  StopContactMediaProcessing$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopContactMediaProcessingRequest;
      output: {};
    };
    sdk: {
      input: StopContactMediaProcessingCommandInput;
      output: StopContactMediaProcessingCommandOutput;
    };
  };
}
