// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateEnvironmentRequest,
  UpdateEnvironmentRequestFilterSensitiveLog,
  UpdateEnvironmentResponse,
  UpdateEnvironmentResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_UpdateEnvironmentCommand, se_UpdateEnvironmentCommand } from "../protocols/Aws_restJson1";
import {
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
 * The input for {@link UpdateEnvironmentCommand}.
 */
export interface UpdateEnvironmentCommandInput extends UpdateEnvironmentRequest {}
/**
 * @public
 *
 * The output of {@link UpdateEnvironmentCommand}.
 */
export interface UpdateEnvironmentCommandOutput extends UpdateEnvironmentResponse, __MetadataBearer {}

/**
 * <p>Updates an environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesThinClientClient, UpdateEnvironmentCommand } from "@aws-sdk/client-workspaces-thin-client"; // ES Modules import
 * // const { WorkSpacesThinClientClient, UpdateEnvironmentCommand } = require("@aws-sdk/client-workspaces-thin-client"); // CommonJS import
 * const client = new WorkSpacesThinClientClient(config);
 * const input = { // UpdateEnvironmentRequest
 *   id: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   desktopArn: "STRING_VALUE",
 *   desktopEndpoint: "STRING_VALUE",
 *   softwareSetUpdateSchedule: "USE_MAINTENANCE_WINDOW" || "APPLY_IMMEDIATELY",
 *   maintenanceWindow: { // MaintenanceWindow
 *     type: "SYSTEM" || "CUSTOM",
 *     startTimeHour: Number("int"),
 *     startTimeMinute: Number("int"),
 *     endTimeHour: Number("int"),
 *     endTimeMinute: Number("int"),
 *     daysOfTheWeek: [ // DayOfWeekList
 *       "MONDAY" || "TUESDAY" || "WEDNESDAY" || "THURSDAY" || "FRIDAY" || "SATURDAY" || "SUNDAY",
 *     ],
 *     applyTimeOf: "UTC" || "DEVICE",
 *   },
 *   softwareSetUpdateMode: "USE_LATEST" || "USE_DESIRED",
 *   desiredSoftwareSetId: "STRING_VALUE",
 * };
 * const command = new UpdateEnvironmentCommand(input);
 * const response = await client.send(command);
 * // { // UpdateEnvironmentResponse
 * //   environment: { // EnvironmentSummary
 * //     id: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     desktopArn: "STRING_VALUE",
 * //     desktopEndpoint: "STRING_VALUE",
 * //     desktopType: "workspaces" || "appstream" || "workspaces-web",
 * //     activationCode: "STRING_VALUE",
 * //     softwareSetUpdateSchedule: "USE_MAINTENANCE_WINDOW" || "APPLY_IMMEDIATELY",
 * //     maintenanceWindow: { // MaintenanceWindow
 * //       type: "SYSTEM" || "CUSTOM",
 * //       startTimeHour: Number("int"),
 * //       startTimeMinute: Number("int"),
 * //       endTimeHour: Number("int"),
 * //       endTimeMinute: Number("int"),
 * //       daysOfTheWeek: [ // DayOfWeekList
 * //         "MONDAY" || "TUESDAY" || "WEDNESDAY" || "THURSDAY" || "FRIDAY" || "SATURDAY" || "SUNDAY",
 * //       ],
 * //       applyTimeOf: "UTC" || "DEVICE",
 * //     },
 * //     softwareSetUpdateMode: "USE_LATEST" || "USE_DESIRED",
 * //     desiredSoftwareSetId: "STRING_VALUE",
 * //     pendingSoftwareSetId: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     updatedAt: new Date("TIMESTAMP"),
 * //     arn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateEnvironmentCommandInput - {@link UpdateEnvironmentCommandInput}
 * @returns {@link UpdateEnvironmentCommandOutput}
 * @see {@link UpdateEnvironmentCommandInput} for command's `input` shape.
 * @see {@link UpdateEnvironmentCommandOutput} for command's `response` shape.
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
 * @public
 */
export class UpdateEnvironmentCommand extends $Command
  .classBuilder<
    UpdateEnvironmentCommandInput,
    UpdateEnvironmentCommandOutput,
    WorkSpacesThinClientClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesThinClientClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ThinClient", "UpdateEnvironment", {})
  .n("WorkSpacesThinClientClient", "UpdateEnvironmentCommand")
  .f(UpdateEnvironmentRequestFilterSensitiveLog, UpdateEnvironmentResponseFilterSensitiveLog)
  .ser(se_UpdateEnvironmentCommand)
  .de(de_UpdateEnvironmentCommand)
  .build() {}
