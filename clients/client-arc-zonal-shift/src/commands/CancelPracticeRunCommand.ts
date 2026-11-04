// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CancelPracticeRunRequest, CancelPracticeRunResponse } from "../models/models_0";
import { CancelPracticeRun$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CancelPracticeRunCommand}.
 */
export interface CancelPracticeRunCommandInput extends CancelPracticeRunRequest {}
/**
 * @public
 *
 * The output of {@link CancelPracticeRunCommand}.
 */
export interface CancelPracticeRunCommandOutput extends CancelPracticeRunResponse, __MetadataBearer {}

/**
 * Cancel an in-progress practice run zonal shift in Amazon Application Recovery Controller.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ARCZonalShiftClient, CancelPracticeRunCommand } from "@aws-sdk/client-arc-zonal-shift"; // ES Modules import
 * // const { ARCZonalShiftClient, CancelPracticeRunCommand } = require("@aws-sdk/client-arc-zonal-shift"); // CommonJS import
 * // import type { ARCZonalShiftClientConfig } from "@aws-sdk/client-arc-zonal-shift";
 * const config = {}; // type is ARCZonalShiftClientConfig
 * const client = new ARCZonalShiftClient(config);
 * const input = { // CancelPracticeRunRequest
 *   zonalShiftId: "STRING_VALUE", // required
 * };
 * const command = new CancelPracticeRunCommand(input);
 * const response = await client.send(command);
 * // { // CancelPracticeRunResponse
 * //   zonalShiftId: "STRING_VALUE", // required
 * //   resourceIdentifier: "STRING_VALUE", // required
 * //   awayFrom: "STRING_VALUE", // required
 * //   expiryTime: new Date("TIMESTAMP"), // required
 * //   startTime: new Date("TIMESTAMP"), // required
 * //   status: "ACTIVE" || "EXPIRED" || "CANCELED", // required
 * //   comment: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CancelPracticeRunCommandInput - {@link CancelPracticeRunCommandInput}
 * @returns {@link CancelPracticeRunCommandOutput}
 * @see {@link CancelPracticeRunCommandInput} for command's `input` shape.
 * @see {@link CancelPracticeRunCommandOutput} for command's `response` shape.
 * @see {@link ARCZonalShiftClientResolvedConfig | config} for ARCZonalShiftClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request could not be processed because of conflict in the current state of the resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * There was an internal server error.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The input requested a resource that was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link ARCZonalShiftServiceException}
 *
 * Base exception class for all service exceptions from ARCZonalShift service.
 *
 * @public
 */
export class CancelPracticeRunCommand extends command<CancelPracticeRunCommandInput, CancelPracticeRunCommandOutput>(
  _ep0,
  _mw0,
  "CancelPracticeRun",
  CancelPracticeRun$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelPracticeRunRequest;
      output: CancelPracticeRunResponse;
    };
    sdk: {
      input: CancelPracticeRunCommandInput;
      output: CancelPracticeRunCommandOutput;
    };
  };
}
