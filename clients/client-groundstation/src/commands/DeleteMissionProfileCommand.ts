// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import { DeleteMissionProfileRequest, MissionProfileIdResponse } from "../models/models_0";
import { de_DeleteMissionProfileCommand, se_DeleteMissionProfileCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteMissionProfileCommand}.
 */
export interface DeleteMissionProfileCommandInput extends DeleteMissionProfileRequest {}
/**
 * @public
 *
 * The output of {@link DeleteMissionProfileCommand}.
 */
export interface DeleteMissionProfileCommandOutput extends MissionProfileIdResponse, __MetadataBearer {}

/**
 * <p>Deletes a mission profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, DeleteMissionProfileCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, DeleteMissionProfileCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * // import type { GroundStationClientConfig } from "@aws-sdk/client-groundstation";
 * const config = {}; // type is GroundStationClientConfig
 * const client = new GroundStationClient(config);
 * const input = { // DeleteMissionProfileRequest
 *   missionProfileId: "STRING_VALUE", // required
 * };
 * const command = new DeleteMissionProfileCommand(input);
 * const response = await client.send(command);
 * // { // MissionProfileIdResponse
 * //   missionProfileId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteMissionProfileCommandInput - {@link DeleteMissionProfileCommandInput}
 * @returns {@link DeleteMissionProfileCommandOutput}
 * @see {@link DeleteMissionProfileCommandInput} for command's `input` shape.
 * @see {@link DeleteMissionProfileCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class DeleteMissionProfileCommand extends $Command
  .classBuilder<
    DeleteMissionProfileCommandInput,
    DeleteMissionProfileCommandOutput,
    GroundStationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GroundStationClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GroundStation", "DeleteMissionProfile", {})
  .n("GroundStationClient", "DeleteMissionProfileCommand")
  .f(void 0, void 0)
  .ser(se_DeleteMissionProfileCommand)
  .de(de_DeleteMissionProfileCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteMissionProfileRequest;
      output: MissionProfileIdResponse;
    };
    sdk: {
      input: DeleteMissionProfileCommandInput;
      output: DeleteMissionProfileCommandOutput;
    };
  };
}
