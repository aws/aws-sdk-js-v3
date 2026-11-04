// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutUserStatusRequest, PutUserStatusResponse } from "../models/models_3";
import { PutUserStatus$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutUserStatusCommand}.
 */
export interface PutUserStatusCommandInput extends PutUserStatusRequest {}
/**
 * @public
 *
 * The output of {@link PutUserStatusCommand}.
 */
export interface PutUserStatusCommandOutput extends PutUserStatusResponse, __MetadataBearer {}

/**
 * Changes the current status of a user or agent in Connect Customer. If the agent is currently handling a contact, this sets the agent's next status.
 *
 * For more information, see [Agent status](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-agent-status.html) and [Set your next status](https://docs.aws.amazon.com/connect/latest/adminguide/set-next-status.html) in the *Connect Customer Administrator Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, PutUserStatusCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, PutUserStatusCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // PutUserStatusRequest
 *   UserId: "STRING_VALUE", // required
 *   InstanceId: "STRING_VALUE", // required
 *   AgentStatusId: "STRING_VALUE", // required
 * };
 * const command = new PutUserStatusCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutUserStatusCommandInput - {@link PutUserStatusCommandInput}
 * @returns {@link PutUserStatusCommandOutput}
 * @see {@link PutUserStatusCommandInput} for command's `input` shape.
 * @see {@link PutUserStatusCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
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
export class PutUserStatusCommand extends command<PutUserStatusCommandInput, PutUserStatusCommandOutput>(
  _ep0,
  _mw0,
  "PutUserStatus",
  PutUserStatus$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutUserStatusRequest;
      output: {};
    };
    sdk: {
      input: PutUserStatusCommandInput;
      output: PutUserStatusCommandOutput;
    };
  };
}
