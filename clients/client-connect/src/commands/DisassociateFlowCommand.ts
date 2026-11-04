// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisassociateFlowRequest, DisassociateFlowResponse } from "../models/models_1";
import { DisassociateFlow$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisassociateFlowCommand}.
 */
export interface DisassociateFlowCommandInput extends DisassociateFlowRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateFlowCommand}.
 */
export interface DisassociateFlowCommandOutput extends DisassociateFlowResponse, __MetadataBearer {}

/**
 * Disassociates a connect resource from a flow.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DisassociateFlowCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DisassociateFlowCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // DisassociateFlowRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ResourceId: "STRING_VALUE", // required
 *   ResourceType: "SMS_PHONE_NUMBER" || "INBOUND_EMAIL" || "OUTBOUND_EMAIL" || "ANALYTICS_CONNECTOR" || "WHATSAPP_MESSAGING_PHONE_NUMBER", // required
 * };
 * const command = new DisassociateFlowCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateFlowCommandInput - {@link DisassociateFlowCommandInput}
 * @returns {@link DisassociateFlowCommandOutput}
 * @see {@link DisassociateFlowCommandInput} for command's `input` shape.
 * @see {@link DisassociateFlowCommandOutput} for command's `response` shape.
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
export class DisassociateFlowCommand extends command<DisassociateFlowCommandInput, DisassociateFlowCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateFlow",
  DisassociateFlow$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateFlowRequest;
      output: {};
    };
    sdk: {
      input: DisassociateFlowCommandInput;
      output: DisassociateFlowCommandOutput;
    };
  };
}
