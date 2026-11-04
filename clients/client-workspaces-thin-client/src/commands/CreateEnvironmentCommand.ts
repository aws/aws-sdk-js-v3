// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateEnvironmentRequest, CreateEnvironmentResponse } from "../models/models_0";
import { CreateEnvironment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateEnvironmentCommand}.
 */
export interface CreateEnvironmentCommandInput extends CreateEnvironmentRequest {}
/**
 * @public
 *
 * The output of {@link CreateEnvironmentCommand}.
 */
export interface CreateEnvironmentCommandOutput extends CreateEnvironmentResponse, __MetadataBearer {}

/**
 * Creates an environment for your thin client devices.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesThinClientClient, CreateEnvironmentCommand } from "@aws-sdk/client-workspaces-thin-client"; // ES Modules import
 * // const { WorkSpacesThinClientClient, CreateEnvironmentCommand } = require("@aws-sdk/client-workspaces-thin-client"); // CommonJS import
 * // import type { WorkSpacesThinClientClientConfig } from "@aws-sdk/client-workspaces-thin-client";
 * const config = {}; // type is WorkSpacesThinClientClientConfig
 * const client = new WorkSpacesThinClientClient(config);
 * const input = { // CreateEnvironmentRequest
 *   name: "STRING_VALUE",
 *   desktopArn: "STRING_VALUE", // required
 *   desktopEndpoint: "STRING_VALUE",
 *   softwareSetUpdateSchedule: "USE_MAINTENANCE_WINDOW" || "APPLY_IMMEDIATELY",
 *   maintenanceWindow: { // MaintenanceWindow
 *     type: "SYSTEM" || "CUSTOM", // required
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
 *   kmsKeyArn: "STRING_VALUE",
 *   clientToken: "STRING_VALUE",
 *   tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   deviceCreationTags: { // DeviceCreationTagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateEnvironmentCommand(input);
 * const response = await client.send(command);
 * // { // CreateEnvironmentResponse
 * //   environment: { // EnvironmentSummary
 * //     id: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     desktopArn: "STRING_VALUE",
 * //     desktopEndpoint: "STRING_VALUE",
 * //     desktopType: "workspaces" || "appstream" || "workspaces-web",
 * //     activationCode: "STRING_VALUE",
 * //     softwareSetUpdateSchedule: "USE_MAINTENANCE_WINDOW" || "APPLY_IMMEDIATELY",
 * //     maintenanceWindow: { // MaintenanceWindow
 * //       type: "SYSTEM" || "CUSTOM", // required
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
 * @param CreateEnvironmentCommandInput - {@link CreateEnvironmentCommandInput}
 * @returns {@link CreateEnvironmentCommandOutput}
 * @see {@link CreateEnvironmentCommandInput} for command's `input` shape.
 * @see {@link CreateEnvironmentCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesThinClientClientResolvedConfig | config} for WorkSpacesThinClientClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The requested operation would cause a conflict with the current state of a service resource associated with the request. Resolve the conflict before retrying this request.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The server encountered an internal error and is unable to complete the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource specified in the request was not found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * Your request exceeds a service quota.
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
export class CreateEnvironmentCommand extends command<CreateEnvironmentCommandInput, CreateEnvironmentCommandOutput>(
  _ep0,
  _mw0,
  "CreateEnvironment",
  CreateEnvironment$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateEnvironmentRequest;
      output: CreateEnvironmentResponse;
    };
    sdk: {
      input: CreateEnvironmentCommandInput;
      output: CreateEnvironmentCommandOutput;
    };
  };
}
