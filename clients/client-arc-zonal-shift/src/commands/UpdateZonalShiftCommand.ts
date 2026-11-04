// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateZonalShiftRequest, ZonalShift } from "../models/models_0";
import { UpdateZonalShift$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateZonalShiftCommand}.
 */
export interface UpdateZonalShiftCommandInput extends UpdateZonalShiftRequest {}
/**
 * @public
 *
 * The output of {@link UpdateZonalShiftCommand}.
 */
export interface UpdateZonalShiftCommandOutput extends ZonalShift, __MetadataBearer {}

/**
 * Update an active zonal shift in Amazon Application Recovery Controller in your Amazon Web Services account. You can update a zonal shift to set a new expiration, or edit or replace the comment for the zonal shift.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ARCZonalShiftClient, UpdateZonalShiftCommand } from "@aws-sdk/client-arc-zonal-shift"; // ES Modules import
 * // const { ARCZonalShiftClient, UpdateZonalShiftCommand } = require("@aws-sdk/client-arc-zonal-shift"); // CommonJS import
 * // import type { ARCZonalShiftClientConfig } from "@aws-sdk/client-arc-zonal-shift";
 * const config = {}; // type is ARCZonalShiftClientConfig
 * const client = new ARCZonalShiftClient(config);
 * const input = { // UpdateZonalShiftRequest
 *   zonalShiftId: "STRING_VALUE", // required
 *   comment: "STRING_VALUE",
 *   expiresIn: "STRING_VALUE",
 * };
 * const command = new UpdateZonalShiftCommand(input);
 * const response = await client.send(command);
 * // { // ZonalShift
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
 * @param UpdateZonalShiftCommandInput - {@link UpdateZonalShiftCommandInput}
 * @returns {@link UpdateZonalShiftCommandOutput}
 * @see {@link UpdateZonalShiftCommandInput} for command's `input` shape.
 * @see {@link UpdateZonalShiftCommandOutput} for command's `response` shape.
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
export class UpdateZonalShiftCommand extends command<UpdateZonalShiftCommandInput, UpdateZonalShiftCommandOutput>(
  _ep0,
  _mw0,
  "UpdateZonalShift",
  UpdateZonalShift$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateZonalShiftRequest;
      output: ZonalShift;
    };
    sdk: {
      input: UpdateZonalShiftCommandInput;
      output: UpdateZonalShiftCommandOutput;
    };
  };
}
