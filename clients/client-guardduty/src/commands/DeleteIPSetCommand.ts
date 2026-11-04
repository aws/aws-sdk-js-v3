// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteIPSetRequest, DeleteIPSetResponse } from "../models/models_0";
import { DeleteIPSet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteIPSetCommand}.
 */
export interface DeleteIPSetCommandInput extends DeleteIPSetRequest {}
/**
 * @public
 *
 * The output of {@link DeleteIPSetCommand}.
 */
export interface DeleteIPSetCommandOutput extends DeleteIPSetResponse, __MetadataBearer {}

/**
 * Deletes the IPSet specified by the `ipSetId`. IPSets are called trusted IP lists in the console user interface.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, DeleteIPSetCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, DeleteIPSetCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * // import type { GuardDutyClientConfig } from "@aws-sdk/client-guardduty";
 * const config = {}; // type is GuardDutyClientConfig
 * const client = new GuardDutyClient(config);
 * const input = { // DeleteIPSetRequest
 *   DetectorId: "STRING_VALUE", // required
 *   IpSetId: "STRING_VALUE", // required
 * };
 * const command = new DeleteIPSetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteIPSetCommandInput - {@link DeleteIPSetCommandInput}
 * @returns {@link DeleteIPSetCommandOutput}
 * @see {@link DeleteIPSetCommandInput} for command's `input` shape.
 * @see {@link DeleteIPSetCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for GuardDutyClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * A bad request exception object.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *
 * An internal server error exception object.
 *
 * @throws {@link GuardDutyServiceException}
 *
 * Base exception class for all service exceptions from GuardDuty service.
 *
 * @public
 */
export class DeleteIPSetCommand extends command<DeleteIPSetCommandInput, DeleteIPSetCommandOutput>(
  _ep0,
  _mw0,
  "DeleteIPSet",
  DeleteIPSet$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteIPSetRequest;
      output: {};
    };
    sdk: {
      input: DeleteIPSetCommandInput;
      output: DeleteIPSetCommandOutput;
    };
  };
}
