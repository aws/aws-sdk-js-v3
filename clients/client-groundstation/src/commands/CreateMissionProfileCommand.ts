// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import { CreateMissionProfileRequest, MissionProfileIdResponse } from "../models/models_0";
import { de_CreateMissionProfileCommand, se_CreateMissionProfileCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateMissionProfileCommand}.
 */
export interface CreateMissionProfileCommandInput extends CreateMissionProfileRequest {}
/**
 * @public
 *
 * The output of {@link CreateMissionProfileCommand}.
 */
export interface CreateMissionProfileCommandOutput extends MissionProfileIdResponse, __MetadataBearer {}

/**
 * <p>Creates a mission profile.</p> <p> <code>dataflowEdges</code> is a list of lists of strings. Each lower level list of strings has two elements: a <i>from</i> ARN and a <i>to</i> ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, CreateMissionProfileCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, CreateMissionProfileCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * // import type { GroundStationClientConfig } from "@aws-sdk/client-groundstation";
 * const config = {}; // type is GroundStationClientConfig
 * const client = new GroundStationClient(config);
 * const input = { // CreateMissionProfileRequest
 *   name: "STRING_VALUE", // required
 *   contactPrePassDurationSeconds: Number("int"),
 *   contactPostPassDurationSeconds: Number("int"),
 *   minimumViableContactDurationSeconds: Number("int"), // required
 *   dataflowEdges: [ // DataflowEdgeList // required
 *     [ // DataflowEdge
 *       "STRING_VALUE",
 *     ],
 *   ],
 *   trackingConfigArn: "STRING_VALUE", // required
 *   tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   streamsKmsKey: { // KmsKey Union: only one key present
 *     kmsKeyArn: "STRING_VALUE",
 *     kmsAliasArn: "STRING_VALUE",
 *     kmsAliasName: "STRING_VALUE",
 *   },
 *   streamsKmsRole: "STRING_VALUE",
 * };
 * const command = new CreateMissionProfileCommand(input);
 * const response = await client.send(command);
 * // { // MissionProfileIdResponse
 * //   missionProfileId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateMissionProfileCommandInput - {@link CreateMissionProfileCommandInput}
 * @returns {@link CreateMissionProfileCommandOutput}
 * @see {@link CreateMissionProfileCommandInput} for command's `input` shape.
 * @see {@link CreateMissionProfileCommandOutput} for command's `response` shape.
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
export class CreateMissionProfileCommand extends $Command
  .classBuilder<
    CreateMissionProfileCommandInput,
    CreateMissionProfileCommandOutput,
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
  .s("GroundStation", "CreateMissionProfile", {})
  .n("GroundStationClient", "CreateMissionProfileCommand")
  .f(void 0, void 0)
  .ser(se_CreateMissionProfileCommand)
  .de(de_CreateMissionProfileCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateMissionProfileRequest;
      output: MissionProfileIdResponse;
    };
    sdk: {
      input: CreateMissionProfileCommandInput;
      output: CreateMissionProfileCommandOutput;
    };
  };
}
