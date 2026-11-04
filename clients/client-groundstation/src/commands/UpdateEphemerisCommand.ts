// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { EphemerisIdResponse, UpdateEphemerisRequest } from "../models/models_0";
import { UpdateEphemeris$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateEphemerisCommand}.
 */
export interface UpdateEphemerisCommandInput extends UpdateEphemerisRequest {}
/**
 * @public
 *
 * The output of {@link UpdateEphemerisCommand}.
 */
export interface UpdateEphemerisCommandOutput extends EphemerisIdResponse, __MetadataBearer {}

/**
 * Update an existing ephemeris.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, UpdateEphemerisCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, UpdateEphemerisCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * // import type { GroundStationClientConfig } from "@aws-sdk/client-groundstation";
 * const config = {}; // type is GroundStationClientConfig
 * const client = new GroundStationClient(config);
 * const input = { // UpdateEphemerisRequest
 *   ephemerisId: "STRING_VALUE", // required
 *   enabled: true || false, // required
 *   name: "STRING_VALUE",
 *   priority: Number("int"),
 * };
 * const command = new UpdateEphemerisCommand(input);
 * const response = await client.send(command);
 * // { // EphemerisIdResponse
 * //   ephemerisId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateEphemerisCommandInput - {@link UpdateEphemerisCommandInput}
 * @returns {@link UpdateEphemerisCommandOutput}
 * @see {@link UpdateEphemerisCommandInput} for command's `input` shape.
 * @see {@link UpdateEphemerisCommandOutput} for command's `response` shape.
 * @see {@link GroundStationClientResolvedConfig | config} for GroundStationClient's `config` shape.
 *
 * @throws {@link DependencyException} (server fault)
 *
 * Dependency encountered an error.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more parameters are not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Resource was not found.
 *
 * @throws {@link GroundStationServiceException}
 *
 * Base exception class for all service exceptions from GroundStation service.
 *
 * @public
 */
export class UpdateEphemerisCommand extends command<UpdateEphemerisCommandInput, UpdateEphemerisCommandOutput>(
  _ep0,
  _mw0,
  "UpdateEphemeris",
  UpdateEphemeris$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateEphemerisRequest;
      output: EphemerisIdResponse;
    };
    sdk: {
      input: UpdateEphemerisCommandInput;
      output: UpdateEphemerisCommandOutput;
    };
  };
}
