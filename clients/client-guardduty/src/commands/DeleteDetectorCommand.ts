// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteDetectorRequest, DeleteDetectorResponse } from "../models/models_0";
import { DeleteDetector$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteDetectorCommand}.
 */
export interface DeleteDetectorCommandInput extends DeleteDetectorRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDetectorCommand}.
 */
export interface DeleteDetectorCommandOutput extends DeleteDetectorResponse, __MetadataBearer {}

/**
 * Deletes an Amazon GuardDuty detector that is specified by the detector ID.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, DeleteDetectorCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, DeleteDetectorCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * // import type { GuardDutyClientConfig } from "@aws-sdk/client-guardduty";
 * const config = {}; // type is GuardDutyClientConfig
 * const client = new GuardDutyClient(config);
 * const input = { // DeleteDetectorRequest
 *   DetectorId: "STRING_VALUE", // required
 * };
 * const command = new DeleteDetectorCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteDetectorCommandInput - {@link DeleteDetectorCommandInput}
 * @returns {@link DeleteDetectorCommandOutput}
 * @see {@link DeleteDetectorCommandInput} for command's `input` shape.
 * @see {@link DeleteDetectorCommandOutput} for command's `response` shape.
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
export class DeleteDetectorCommand extends command<DeleteDetectorCommandInput, DeleteDetectorCommandOutput>(
  _ep0,
  _mw0,
  "DeleteDetector",
  DeleteDetector$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDetectorRequest;
      output: {};
    };
    sdk: {
      input: DeleteDetectorCommandInput;
      output: DeleteDetectorCommandOutput;
    };
  };
}
