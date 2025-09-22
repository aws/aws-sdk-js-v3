// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import { GetMissionProfileRequest, GetMissionProfileResponse } from "../models/models_0";
import { GetMissionProfile } from "../schemas/schemas_1_Config";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetMissionProfileCommand}.
 */
export interface GetMissionProfileCommandInput extends GetMissionProfileRequest {}
/**
 * @public
 *
 * The output of {@link GetMissionProfileCommand}.
 */
export interface GetMissionProfileCommandOutput extends GetMissionProfileResponse, __MetadataBearer {}

/**
 * <p>Returns a mission profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, GetMissionProfileCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, GetMissionProfileCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * // import type { GroundStationClientConfig } from "@aws-sdk/client-groundstation";
 * const config = {}; // type is GroundStationClientConfig
 * const client = new GroundStationClient(config);
 * const input = { // GetMissionProfileRequest
 *   missionProfileId: "STRING_VALUE", // required
 * };
 * const command = new GetMissionProfileCommand(input);
 * const response = await client.send(command);
 * // { // GetMissionProfileResponse
 * //   missionProfileId: "STRING_VALUE",
 * //   missionProfileArn: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   region: "STRING_VALUE",
 * //   contactPrePassDurationSeconds: Number("int"),
 * //   contactPostPassDurationSeconds: Number("int"),
 * //   minimumViableContactDurationSeconds: Number("int"),
 * //   dataflowEdges: [ // DataflowEdgeList
 * //     [ // DataflowEdge
 * //       "STRING_VALUE",
 * //     ],
 * //   ],
 * //   trackingConfigArn: "STRING_VALUE",
 * //   tags: { // TagsMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   streamsKmsKey: { // KmsKey Union: only one key present
 * //     kmsKeyArn: "STRING_VALUE",
 * //     kmsAliasArn: "STRING_VALUE",
 * //     kmsAliasName: "STRING_VALUE",
 * //   },
 * //   streamsKmsRole: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetMissionProfileCommandInput - {@link GetMissionProfileCommandInput}
 * @returns {@link GetMissionProfileCommandOutput}
 * @see {@link GetMissionProfileCommandInput} for command's `input` shape.
 * @see {@link GetMissionProfileCommandOutput} for command's `response` shape.
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
export class GetMissionProfileCommand extends $Command
  .classBuilder<
    GetMissionProfileCommandInput,
    GetMissionProfileCommandOutput,
    GroundStationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GroundStationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GroundStation", "GetMissionProfile", {})
  .n("GroundStationClient", "GetMissionProfileCommand")
  .sc(GetMissionProfile)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMissionProfileRequest;
      output: GetMissionProfileResponse;
    };
    sdk: {
      input: GetMissionProfileCommandInput;
      output: GetMissionProfileCommandOutput;
    };
  };
}
