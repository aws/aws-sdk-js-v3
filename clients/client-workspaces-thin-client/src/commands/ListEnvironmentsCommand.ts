// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListEnvironmentsRequest,
  ListEnvironmentsResponse,
  ListEnvironmentsResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_ListEnvironmentsCommand, se_ListEnvironmentsCommand } from "../protocols/Aws_restJson1";
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
 * The input for {@link ListEnvironmentsCommand}.
 */
export interface ListEnvironmentsCommandInput extends ListEnvironmentsRequest {}
/**
 * @public
 *
 * The output of {@link ListEnvironmentsCommand}.
 */
export interface ListEnvironmentsCommandOutput extends ListEnvironmentsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of environments.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesThinClientClient, ListEnvironmentsCommand } from "@aws-sdk/client-workspaces-thin-client"; // ES Modules import
 * // const { WorkSpacesThinClientClient, ListEnvironmentsCommand } = require("@aws-sdk/client-workspaces-thin-client"); // CommonJS import
 * const client = new WorkSpacesThinClientClient(config);
 * const input = { // ListEnvironmentsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListEnvironmentsCommand(input);
 * const response = await client.send(command);
 * // { // ListEnvironmentsResponse
 * //   environments: [ // EnvironmentList
 * //     { // EnvironmentSummary
 * //       id: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       desktopArn: "STRING_VALUE",
 * //       desktopEndpoint: "STRING_VALUE",
 * //       desktopType: "workspaces" || "appstream" || "workspaces-web",
 * //       activationCode: "STRING_VALUE",
 * //       softwareSetUpdateSchedule: "USE_MAINTENANCE_WINDOW" || "APPLY_IMMEDIATELY",
 * //       maintenanceWindow: { // MaintenanceWindow
 * //         type: "SYSTEM" || "CUSTOM", // required
 * //         startTimeHour: Number("int"),
 * //         startTimeMinute: Number("int"),
 * //         endTimeHour: Number("int"),
 * //         endTimeMinute: Number("int"),
 * //         daysOfTheWeek: [ // DayOfWeekList
 * //           "MONDAY" || "TUESDAY" || "WEDNESDAY" || "THURSDAY" || "FRIDAY" || "SATURDAY" || "SUNDAY",
 * //         ],
 * //         applyTimeOf: "UTC" || "DEVICE",
 * //       },
 * //       softwareSetUpdateMode: "USE_LATEST" || "USE_DESIRED",
 * //       desiredSoftwareSetId: "STRING_VALUE",
 * //       pendingSoftwareSetId: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       updatedAt: new Date("TIMESTAMP"),
 * //       arn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEnvironmentsCommandInput - {@link ListEnvironmentsCommandInput}
 * @returns {@link ListEnvironmentsCommandOutput}
 * @see {@link ListEnvironmentsCommandInput} for command's `input` shape.
 * @see {@link ListEnvironmentsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class ListEnvironmentsCommand extends $Command
  .classBuilder<
    ListEnvironmentsCommandInput,
    ListEnvironmentsCommandOutput,
    WorkSpacesThinClientClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesThinClientClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ThinClient", "ListEnvironments", {})
  .n("WorkSpacesThinClientClient", "ListEnvironmentsCommand")
  .f(void 0, ListEnvironmentsResponseFilterSensitiveLog)
  .ser(se_ListEnvironmentsCommand)
  .de(de_ListEnvironmentsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEnvironmentsRequest;
      output: ListEnvironmentsResponse;
    };
    sdk: {
      input: ListEnvironmentsCommandInput;
      output: ListEnvironmentsCommandOutput;
    };
  };
}
