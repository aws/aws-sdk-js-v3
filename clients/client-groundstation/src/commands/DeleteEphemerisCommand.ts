// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import type { DeleteEphemerisRequest, EphemerisIdResponse } from "../models/models_0";
import { DeleteEphemeris } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteEphemerisCommand}.
 */
export interface DeleteEphemerisCommandInput extends DeleteEphemerisRequest {}
/**
 * @public
 *
 * The output of {@link DeleteEphemerisCommand}.
 */
export interface DeleteEphemerisCommandOutput extends EphemerisIdResponse, __MetadataBearer {}

/**
 * <p>Delete an ephemeris.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, DeleteEphemerisCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, DeleteEphemerisCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * // import type { GroundStationClientConfig } from "@aws-sdk/client-groundstation";
 * const config = {}; // type is GroundStationClientConfig
 * const client = new GroundStationClient(config);
 * const input = { // DeleteEphemerisRequest
 *   ephemerisId: "STRING_VALUE", // required
 * };
 * const command = new DeleteEphemerisCommand(input);
 * const response = await client.send(command);
 * // { // EphemerisIdResponse
 * //   ephemerisId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteEphemerisCommandInput - {@link DeleteEphemerisCommandInput}
 * @returns {@link DeleteEphemerisCommandOutput}
 * @see {@link DeleteEphemerisCommandInput} for command's `input` shape.
 * @see {@link DeleteEphemerisCommandOutput} for command's `response` shape.
 * @see {@link GroundStationClientResolvedConfig | config} for GroundStationClient's `config` shape.
 *
 * @throws {@link DependencyException} (server fault)
 *  <p>Dependency encountered an error.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The specified resource is in use by non-terminal state contacts and cannot be modified or deleted.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource was not found.</p>
 *
 * @throws {@link GroundStationServiceException}
 * <p>Base exception class for all service exceptions from GroundStation service.</p>
 *
 *
 * @public
 */
export class DeleteEphemerisCommand extends $Command
  .classBuilder<
    DeleteEphemerisCommandInput,
    DeleteEphemerisCommandOutput,
    GroundStationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GroundStationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GroundStation", "DeleteEphemeris", {})
  .n("GroundStationClient", "DeleteEphemerisCommand")
  .sc(DeleteEphemeris)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteEphemerisRequest;
      output: EphemerisIdResponse;
    };
    sdk: {
      input: DeleteEphemerisCommandInput;
      output: DeleteEphemerisCommandOutput;
    };
  };
}
