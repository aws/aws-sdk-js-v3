// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteMissionProfileRequest, MissionProfileIdResponse } from "../models/models_0";
import { DeleteMissionProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deletes a mission profile.
 *
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
export class DeleteMissionProfileCommand extends command<DeleteMissionProfileCommandInput, DeleteMissionProfileCommandOutput>(
  _ep0,
  _mw0,
  "DeleteMissionProfile",
  DeleteMissionProfile$
) {
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
