// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import { MissionProfileIdResponse, UpdateMissionProfileRequest } from "../models/models_0";
import { de_UpdateMissionProfileCommand, se_UpdateMissionProfileCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateMissionProfileCommand}.
 */
export interface UpdateMissionProfileCommandInput extends UpdateMissionProfileRequest {}
/**
 * @public
 *
 * The output of {@link UpdateMissionProfileCommand}.
 */
export interface UpdateMissionProfileCommandOutput extends MissionProfileIdResponse, __MetadataBearer {}

/**
 * <p>Updates a mission profile.</p>
 *          <p>Updating a mission profile will not update the execution parameters
 *          for existing future contacts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, UpdateMissionProfileCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, UpdateMissionProfileCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * const client = new GroundStationClient(config);
 * const input = { // UpdateMissionProfileRequest
 *   missionProfileId: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   contactPrePassDurationSeconds: Number("int"),
 *   contactPostPassDurationSeconds: Number("int"),
 *   minimumViableContactDurationSeconds: Number("int"),
 *   dataflowEdges: [ // DataflowEdgeList
 *     [ // DataflowEdge
 *       "STRING_VALUE",
 *     ],
 *   ],
 *   trackingConfigArn: "STRING_VALUE",
 *   streamsKmsKey: { // KmsKey Union: only one key present
 *     kmsKeyArn: "STRING_VALUE",
 *     kmsAliasArn: "STRING_VALUE",
 *     kmsAliasName: "STRING_VALUE",
 *   },
 *   streamsKmsRole: "STRING_VALUE",
 * };
 * const command = new UpdateMissionProfileCommand(input);
 * const response = await client.send(command);
 * // { // MissionProfileIdResponse
 * //   missionProfileId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateMissionProfileCommandInput - {@link UpdateMissionProfileCommandInput}
 * @returns {@link UpdateMissionProfileCommandOutput}
 * @see {@link UpdateMissionProfileCommandInput} for command's `input` shape.
 * @see {@link UpdateMissionProfileCommandOutput} for command's `response` shape.
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
export class UpdateMissionProfileCommand extends $Command
  .classBuilder<
    UpdateMissionProfileCommandInput,
    UpdateMissionProfileCommandOutput,
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
  .s("GroundStation", "UpdateMissionProfile", {})
  .n("GroundStationClient", "UpdateMissionProfileCommand")
  .f(void 0, void 0)
  .ser(se_UpdateMissionProfileCommand)
  .de(de_UpdateMissionProfileCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateMissionProfileRequest;
      output: MissionProfileIdResponse;
    };
    sdk: {
      input: UpdateMissionProfileCommandInput;
      output: UpdateMissionProfileCommandOutput;
    };
  };
}
