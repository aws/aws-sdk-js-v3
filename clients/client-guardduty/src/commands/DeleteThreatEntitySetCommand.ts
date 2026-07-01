// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteThreatEntitySetRequest, DeleteThreatEntitySetResponse } from "../models/models_0";
import { DeleteThreatEntitySet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteThreatEntitySetCommand}.
 */
export interface DeleteThreatEntitySetCommandInput extends DeleteThreatEntitySetRequest {}
/**
 * @public
 *
 * The output of {@link DeleteThreatEntitySetCommand}.
 */
export interface DeleteThreatEntitySetCommandOutput extends DeleteThreatEntitySetResponse, __MetadataBearer {}

/**
 * <p>Deletes the threat entity set that is associated with the specified <code>threatEntitySetId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, DeleteThreatEntitySetCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, DeleteThreatEntitySetCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * // import type { GuardDutyClientConfig } from "@aws-sdk/client-guardduty";
 * const config = {}; // type is GuardDutyClientConfig
 * const client = new GuardDutyClient(config);
 * const input = { // DeleteThreatEntitySetRequest
 *   DetectorId: "STRING_VALUE", // required
 *   ThreatEntitySetId: "STRING_VALUE", // required
 * };
 * const command = new DeleteThreatEntitySetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteThreatEntitySetCommandInput - {@link DeleteThreatEntitySetCommandInput}
 * @returns {@link DeleteThreatEntitySetCommandOutput}
 * @see {@link DeleteThreatEntitySetCommandInput} for command's `input` shape.
 * @see {@link DeleteThreatEntitySetCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for GuardDutyClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>A bad request exception object.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>An internal server error exception object.</p>
 *
 * @throws {@link GuardDutyServiceException}
 * <p>Base exception class for all service exceptions from GuardDuty service.</p>
 *
 *
 * @public
 */
export class DeleteThreatEntitySetCommand extends command<DeleteThreatEntitySetCommandInput, DeleteThreatEntitySetCommandOutput>(
  _ep0,
  _mw0,
  "DeleteThreatEntitySet",
  DeleteThreatEntitySet$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteThreatEntitySetRequest;
      output: {};
    };
    sdk: {
      input: DeleteThreatEntitySetCommandInput;
      output: DeleteThreatEntitySetCommandOutput;
    };
  };
}
