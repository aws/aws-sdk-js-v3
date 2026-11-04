// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetDeviceRequest, GetDeviceResponse } from "../models/models_0";
import { GetDevice$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetDeviceCommand}.
 */
export interface GetDeviceCommandInput extends GetDeviceRequest {}
/**
 * @public
 *
 * The output of {@link GetDeviceCommand}.
 */
export interface GetDeviceCommandOutput extends GetDeviceResponse, __MetadataBearer {}

/**
 * Returns information for a thin client device.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesThinClientClient, GetDeviceCommand } from "@aws-sdk/client-workspaces-thin-client"; // ES Modules import
 * // const { WorkSpacesThinClientClient, GetDeviceCommand } = require("@aws-sdk/client-workspaces-thin-client"); // CommonJS import
 * // import type { WorkSpacesThinClientClientConfig } from "@aws-sdk/client-workspaces-thin-client";
 * const config = {}; // type is WorkSpacesThinClientClientConfig
 * const client = new WorkSpacesThinClientClient(config);
 * const input = { // GetDeviceRequest
 *   id: "STRING_VALUE", // required
 * };
 * const command = new GetDeviceCommand(input);
 * const response = await client.send(command);
 * // { // GetDeviceResponse
 * //   device: { // Device
 * //     id: "STRING_VALUE",
 * //     serialNumber: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     model: "STRING_VALUE",
 * //     environmentId: "STRING_VALUE",
 * //     status: "REGISTERED" || "DEREGISTERING" || "DEREGISTERED" || "ARCHIVED",
 * //     currentSoftwareSetId: "STRING_VALUE",
 * //     currentSoftwareSetVersion: "STRING_VALUE",
 * //     desiredSoftwareSetId: "STRING_VALUE",
 * //     pendingSoftwareSetId: "STRING_VALUE",
 * //     pendingSoftwareSetVersion: "STRING_VALUE",
 * //     softwareSetUpdateSchedule: "USE_MAINTENANCE_WINDOW" || "APPLY_IMMEDIATELY",
 * //     softwareSetComplianceStatus: "NONE" || "COMPLIANT" || "NOT_COMPLIANT",
 * //     softwareSetUpdateStatus: "AVAILABLE" || "IN_PROGRESS" || "UP_TO_DATE",
 * //     lastConnectedAt: new Date("TIMESTAMP"),
 * //     lastPostureAt: new Date("TIMESTAMP"),
 * //     createdAt: new Date("TIMESTAMP"),
 * //     updatedAt: new Date("TIMESTAMP"),
 * //     arn: "STRING_VALUE",
 * //     kmsKeyArn: "STRING_VALUE",
 * //     lastUserId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDeviceCommandInput - {@link GetDeviceCommandInput}
 * @returns {@link GetDeviceCommandOutput}
 * @see {@link GetDeviceCommandInput} for command's `input` shape.
 * @see {@link GetDeviceCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesThinClientClientResolvedConfig | config} for WorkSpacesThinClientClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The server encountered an internal error and is unable to complete the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource specified in the request was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the specified constraints.
 *
 * @throws {@link WorkSpacesThinClientServiceException}
 *
 * Base exception class for all service exceptions from WorkSpacesThinClient service.
 *
 * @public
 */
export class GetDeviceCommand extends command<GetDeviceCommandInput, GetDeviceCommandOutput>(
  _ep0,
  _mw0,
  "GetDevice",
  GetDevice$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDeviceRequest;
      output: GetDeviceResponse;
    };
    sdk: {
      input: GetDeviceCommandInput;
      output: GetDeviceCommandOutput;
    };
  };
}
