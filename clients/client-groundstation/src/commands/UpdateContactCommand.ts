// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import type { UpdateContactRequest, UpdateContactResponse } from "../models/models_0";
import { UpdateContact$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateContactCommand}.
 */
export interface UpdateContactCommandInput extends UpdateContactRequest {}
/**
 * @public
 *
 * The output of {@link UpdateContactCommand}.
 */
export interface UpdateContactCommandOutput extends UpdateContactResponse, __MetadataBearer {}

/**
 * <p>Updates a specific contact.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, UpdateContactCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, UpdateContactCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * // import type { GroundStationClientConfig } from "@aws-sdk/client-groundstation";
 * const config = {}; // type is GroundStationClientConfig
 * const client = new GroundStationClient(config);
 * const input = { // UpdateContactRequest
 *   contactId: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   trackingOverrides: { // TrackingOverrides
 *     programTrackSettings: { // ProgramTrackSettings Union: only one key present
 *       azEl: { // AzElProgramTrackSettings
 *         ephemerisId: "STRING_VALUE", // required
 *       },
 *       oem: { // OemProgramTrackSettings
 *         ephemerisId: "STRING_VALUE", // required
 *       },
 *       tle: { // TleProgramTrackSettings
 *         ephemerisId: "STRING_VALUE", // required
 *       },
 *     },
 *   },
 *   satelliteArn: "STRING_VALUE",
 * };
 * const command = new UpdateContactCommand(input);
 * const response = await client.send(command);
 * // { // UpdateContactResponse
 * //   contactId: "STRING_VALUE",
 * //   versionId: Number("int"),
 * // };
 *
 * ```
 *
 * @param UpdateContactCommandInput - {@link UpdateContactCommandInput}
 * @returns {@link UpdateContactCommandOutput}
 * @see {@link UpdateContactCommandInput} for command's `input` shape.
 * @see {@link UpdateContactCommandOutput} for command's `response` shape.
 * @see {@link GroundStationClientResolvedConfig | config} for GroundStationClient's `config` shape.
 *
 * @throws {@link DependencyException} (server fault)
 *  <p>Dependency encountered an error.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>Account limits for this resource have been exceeded.</p>
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
export class UpdateContactCommand extends $Command
  .classBuilder<
    UpdateContactCommandInput,
    UpdateContactCommandOutput,
    GroundStationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GroundStationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GroundStation", "UpdateContact", {})
  .n("GroundStationClient", "UpdateContactCommand")
  .sc(UpdateContact$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateContactRequest;
      output: UpdateContactResponse;
    };
    sdk: {
      input: UpdateContactCommandInput;
      output: UpdateContactCommandOutput;
    };
  };
}
