// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { MissionProfileIdResponse, UpdateMissionProfileRequest } from "../models/models_0";
import { UpdateMissionProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Updates a mission profile.
 *
 * Updating a mission profile will not update the execution parameters for existing future contacts.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, UpdateMissionProfileCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, UpdateMissionProfileCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * // import type { GroundStationClientConfig } from "@aws-sdk/client-groundstation";
 * const config = {}; // type is GroundStationClientConfig
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
 *   telemetrySinkConfigArn: "STRING_VALUE",
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
export class UpdateMissionProfileCommand extends command<UpdateMissionProfileCommandInput, UpdateMissionProfileCommandOutput>(
  _ep0,
  _mw0,
  "UpdateMissionProfile",
  UpdateMissionProfile$
) {
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
