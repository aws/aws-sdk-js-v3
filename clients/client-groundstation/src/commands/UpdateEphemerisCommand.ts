// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import { EphemerisIdResponse, UpdateEphemerisRequest } from "../models/models_0";
import { de_UpdateEphemerisCommand, se_UpdateEphemerisCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Updates an existing ephemeris</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, UpdateEphemerisCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, UpdateEphemerisCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
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
 *  <p>Dependency encountered an error.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource was not found.</p>
 *
 * @throws {@link GroundStationServiceException}
 * <p>Base exception class for all service exceptions from GroundStation service.</p>
 *
 * @public
 */
export class UpdateEphemerisCommand extends $Command
  .classBuilder<
    UpdateEphemerisCommandInput,
    UpdateEphemerisCommandOutput,
    GroundStationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: GroundStationClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GroundStation", "UpdateEphemeris", {})
  .n("GroundStationClient", "UpdateEphemerisCommand")
  .f(void 0, void 0)
  .ser(se_UpdateEphemerisCommand)
  .de(de_UpdateEphemerisCommand)
  .build() {}
