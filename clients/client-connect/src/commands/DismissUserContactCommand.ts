// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DismissUserContactRequest, DismissUserContactResponse } from "../models/models_1";
import { DismissUserContact$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DismissUserContactCommand}.
 */
export interface DismissUserContactCommandInput extends DismissUserContactRequest {}
/**
 * @public
 *
 * The output of {@link DismissUserContactCommand}.
 */
export interface DismissUserContactCommandOutput extends DismissUserContactResponse, __MetadataBearer {}

/**
 * Dismisses contacts from an agent’s CCP and returns the agent to an available state, which allows the agent to receive a new routed contact. Contacts can only be dismissed if they are in a `MISSED`, `ERROR`, `ENDED`, or `REJECTED` state in the [Agent Event Stream](https://docs.aws.amazon.com/connect/latest/adminguide/about-contact-states.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DismissUserContactCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DismissUserContactCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // DismissUserContactRequest
 *   UserId: "STRING_VALUE", // required
 *   InstanceId: "STRING_VALUE", // required
 *   ContactId: "STRING_VALUE", // required
 * };
 * const command = new DismissUserContactCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DismissUserContactCommandInput - {@link DismissUserContactCommandInput}
 * @returns {@link DismissUserContactCommandOutput}
 * @see {@link DismissUserContactCommandInput} for command's `input` shape.
 * @see {@link DismissUserContactCommandOutput} for command's `response` shape.
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
export class DismissUserContactCommand extends command<DismissUserContactCommandInput, DismissUserContactCommandOutput>(
  _ep0,
  _mw0,
  "DismissUserContact",
  DismissUserContact$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DismissUserContactRequest;
      output: {};
    };
    sdk: {
      input: DismissUserContactCommandInput;
      output: DismissUserContactCommandOutput;
    };
  };
}
