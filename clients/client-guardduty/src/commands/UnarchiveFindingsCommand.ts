// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UnarchiveFindingsRequest, UnarchiveFindingsResponse } from "../models/models_1";
import { UnarchiveFindings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UnarchiveFindingsCommand}.
 */
export interface UnarchiveFindingsCommandInput extends UnarchiveFindingsRequest {}
/**
 * @public
 *
 * The output of {@link UnarchiveFindingsCommand}.
 */
export interface UnarchiveFindingsCommandOutput extends UnarchiveFindingsResponse, __MetadataBearer {}

/**
 * Unarchives GuardDuty findings specified by the `findingIds`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, UnarchiveFindingsCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, UnarchiveFindingsCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * // import type { GuardDutyClientConfig } from "@aws-sdk/client-guardduty";
 * const config = {}; // type is GuardDutyClientConfig
 * const client = new GuardDutyClient(config);
 * const input = { // UnarchiveFindingsRequest
 *   DetectorId: "STRING_VALUE", // required
 *   FindingIds: [ // FindingIds // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UnarchiveFindingsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UnarchiveFindingsCommandInput - {@link UnarchiveFindingsCommandInput}
 * @returns {@link UnarchiveFindingsCommandOutput}
 * @see {@link UnarchiveFindingsCommandInput} for command's `input` shape.
 * @see {@link UnarchiveFindingsCommandOutput} for command's `response` shape.
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
export class UnarchiveFindingsCommand extends command<UnarchiveFindingsCommandInput, UnarchiveFindingsCommandOutput>(
  _ep0,
  _mw0,
  "UnarchiveFindings",
  UnarchiveFindings$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UnarchiveFindingsRequest;
      output: {};
    };
    sdk: {
      input: UnarchiveFindingsCommandInput;
      output: UnarchiveFindingsCommandOutput;
    };
  };
}
