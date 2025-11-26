// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListDevicesRequest, ListDevicesResponse } from "../models/models_0";
import { ListDevices } from "../schemas/schemas_0";
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
 * The input for {@link ListDevicesCommand}.
 */
export interface ListDevicesCommandInput extends ListDevicesRequest {}
/**
 * @public
 *
 * The output of {@link ListDevicesCommand}.
 */
export interface ListDevicesCommandOutput extends ListDevicesResponse, __MetadataBearer {}

/**
 * <p>Returns a list of thin client devices.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesThinClientClient, ListDevicesCommand } from "@aws-sdk/client-workspaces-thin-client"; // ES Modules import
 * // const { WorkSpacesThinClientClient, ListDevicesCommand } = require("@aws-sdk/client-workspaces-thin-client"); // CommonJS import
 * // import type { WorkSpacesThinClientClientConfig } from "@aws-sdk/client-workspaces-thin-client";
 * const config = {}; // type is WorkSpacesThinClientClientConfig
 * const client = new WorkSpacesThinClientClient(config);
 * const input = { // ListDevicesRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListDevicesCommand(input);
 * const response = await client.send(command);
 * // { // ListDevicesResponse
 * //   devices: [ // DeviceList
 * //     { // DeviceSummary
 * //       id: "STRING_VALUE",
 * //       serialNumber: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       model: "STRING_VALUE",
 * //       environmentId: "STRING_VALUE",
 * //       status: "REGISTERED" || "DEREGISTERING" || "DEREGISTERED" || "ARCHIVED",
 * //       currentSoftwareSetId: "STRING_VALUE",
 * //       desiredSoftwareSetId: "STRING_VALUE",
 * //       pendingSoftwareSetId: "STRING_VALUE",
 * //       softwareSetUpdateSchedule: "USE_MAINTENANCE_WINDOW" || "APPLY_IMMEDIATELY",
 * //       lastConnectedAt: new Date("TIMESTAMP"),
 * //       lastPostureAt: new Date("TIMESTAMP"),
 * //       createdAt: new Date("TIMESTAMP"),
 * //       updatedAt: new Date("TIMESTAMP"),
 * //       arn: "STRING_VALUE",
 * //       lastUserId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDevicesCommandInput - {@link ListDevicesCommandInput}
 * @returns {@link ListDevicesCommandOutput}
 * @see {@link ListDevicesCommandInput} for command's `input` shape.
 * @see {@link ListDevicesCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesThinClientClientResolvedConfig | config} for WorkSpacesThinClientClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The server encountered an internal error and is unable to complete the request.</p>
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
export class ListDevicesCommand extends $Command
  .classBuilder<
    ListDevicesCommandInput,
    ListDevicesCommandOutput,
    WorkSpacesThinClientClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesThinClientClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ThinClient", "ListDevices", {})
  .n("WorkSpacesThinClientClient", "ListDevicesCommand")
  .sc(ListDevices)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDevicesRequest;
      output: ListDevicesResponse;
    };
    sdk: {
      input: ListDevicesCommandInput;
      output: ListDevicesCommandOutput;
    };
  };
}
