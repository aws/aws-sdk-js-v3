// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateDeviceRequest, UpdateDeviceResponse } from "../models/models_0";
import { UpdateDevice$ } from "../schemas/schemas_0";
import type {
  ServiceInputTypes,
  ServiceOutputTypes,
  WorkSpacesThinClientClientResolvedConfig,
} from "../WorkSpacesThinClientClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDeviceCommand}.
 */
export interface UpdateDeviceCommandInput extends UpdateDeviceRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDeviceCommand}.
 */
export interface UpdateDeviceCommandOutput extends UpdateDeviceResponse, __MetadataBearer {}

/**
 * <p>Updates a thin client device.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesThinClientClient, UpdateDeviceCommand } from "@aws-sdk/client-workspaces-thin-client"; // ES Modules import
 * // const { WorkSpacesThinClientClient, UpdateDeviceCommand } = require("@aws-sdk/client-workspaces-thin-client"); // CommonJS import
 * // import type { WorkSpacesThinClientClientConfig } from "@aws-sdk/client-workspaces-thin-client";
 * const config = {}; // type is WorkSpacesThinClientClientConfig
 * const client = new WorkSpacesThinClientClient(config);
 * const input = { // UpdateDeviceRequest
 *   id: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   desiredSoftwareSetId: "STRING_VALUE",
 *   softwareSetUpdateSchedule: "USE_MAINTENANCE_WINDOW" || "APPLY_IMMEDIATELY",
 * };
 * const command = new UpdateDeviceCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDeviceResponse
 * //   device: { // DeviceSummary
 * //     id: "STRING_VALUE",
 * //     serialNumber: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     model: "STRING_VALUE",
 * //     environmentId: "STRING_VALUE",
 * //     status: "REGISTERED" || "DEREGISTERING" || "DEREGISTERED" || "ARCHIVED",
 * //     currentSoftwareSetId: "STRING_VALUE",
 * //     desiredSoftwareSetId: "STRING_VALUE",
 * //     pendingSoftwareSetId: "STRING_VALUE",
 * //     softwareSetUpdateSchedule: "USE_MAINTENANCE_WINDOW" || "APPLY_IMMEDIATELY",
 * //     lastConnectedAt: new Date("TIMESTAMP"),
 * //     lastPostureAt: new Date("TIMESTAMP"),
 * //     createdAt: new Date("TIMESTAMP"),
 * //     updatedAt: new Date("TIMESTAMP"),
 * //     arn: "STRING_VALUE",
 * //     lastUserId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateDeviceCommandInput - {@link UpdateDeviceCommandInput}
 * @returns {@link UpdateDeviceCommandOutput}
 * @see {@link UpdateDeviceCommandInput} for command's `input` shape.
 * @see {@link UpdateDeviceCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesThinClientClientResolvedConfig | config} for WorkSpacesThinClientClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The server encountered an internal error and is unable to complete the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the specified constraints.</p>
 *
 * @throws {@link WorkSpacesThinClientServiceException}
 * <p>Base exception class for all service exceptions from WorkSpacesThinClient service.</p>
 *
 *
 * @public
 */
export class UpdateDeviceCommand extends $Command
  .classBuilder<
    UpdateDeviceCommandInput,
    UpdateDeviceCommandOutput,
    WorkSpacesThinClientClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesThinClientClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ThinClient", "UpdateDevice", {})
  .n("WorkSpacesThinClientClient", "UpdateDeviceCommand")
  .sc(UpdateDevice$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDeviceRequest;
      output: UpdateDeviceResponse;
    };
    sdk: {
      input: UpdateDeviceCommandInput;
      output: UpdateDeviceCommandOutput;
    };
  };
}
