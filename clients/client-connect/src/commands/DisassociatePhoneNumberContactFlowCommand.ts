// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisassociatePhoneNumberContactFlowRequest } from "../models/models_1";
import { DisassociatePhoneNumberContactFlow$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisassociatePhoneNumberContactFlowCommand}.
 */
export interface DisassociatePhoneNumberContactFlowCommandInput extends DisassociatePhoneNumberContactFlowRequest {}
/**
 * @public
 *
 * The output of {@link DisassociatePhoneNumberContactFlowCommand}.
 */
export interface DisassociatePhoneNumberContactFlowCommandOutput extends __MetadataBearer {}

/**
 * Removes the flow association from a phone number claimed to your Connect Customer instance.
 *
 * > **Important:** If the number is claimed to a traffic distribution group, and you are calling this API using an instance in the Amazon Web Services Region where the traffic distribution group was created, you can use either a full phone number ARN or UUID value for the `PhoneNumberId` URI request parameter. However, if the number is claimed to a traffic distribution group and you are calling this API using an instance in the alternate Amazon Web Services Region associated with the traffic distribution group, you must provide a full phone number ARN. If a UUID is provided in this scenario, you will receive a `ResourceNotFoundException`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DisassociatePhoneNumberContactFlowCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DisassociatePhoneNumberContactFlowCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // DisassociatePhoneNumberContactFlowRequest
 *   PhoneNumberId: "STRING_VALUE", // required
 *   InstanceId: "STRING_VALUE", // required
 * };
 * const command = new DisassociatePhoneNumberContactFlowCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociatePhoneNumberContactFlowCommandInput - {@link DisassociatePhoneNumberContactFlowCommandInput}
 * @returns {@link DisassociatePhoneNumberContactFlowCommandOutput}
 * @see {@link DisassociatePhoneNumberContactFlowCommandInput} for command's `input` shape.
 * @see {@link DisassociatePhoneNumberContactFlowCommandOutput} for command's `response` shape.
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
export class DisassociatePhoneNumberContactFlowCommand extends command<DisassociatePhoneNumberContactFlowCommandInput, DisassociatePhoneNumberContactFlowCommandOutput>(
  _ep0,
  _mw0,
  "DisassociatePhoneNumberContactFlow",
  DisassociatePhoneNumberContactFlow$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociatePhoneNumberContactFlowRequest;
      output: {};
    };
    sdk: {
      input: DisassociatePhoneNumberContactFlowCommandInput;
      output: DisassociatePhoneNumberContactFlowCommandOutput;
    };
  };
}
