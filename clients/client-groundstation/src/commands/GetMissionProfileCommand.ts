// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetMissionProfileRequest, GetMissionProfileResponse } from "../models/models_0";
import { GetMissionProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Returns a mission profile.
 *
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
 * //   telemetrySinkConfigArn: "STRING_VALUE",
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
export class GetMissionProfileCommand extends command<GetMissionProfileCommandInput, GetMissionProfileCommandOutput>(
  _ep0,
  _mw0,
  "GetMissionProfile",
  GetMissionProfile$
) {
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
