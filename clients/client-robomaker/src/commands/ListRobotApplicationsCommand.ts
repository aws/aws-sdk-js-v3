// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListRobotApplicationsRequest, ListRobotApplicationsResponse } from "../models/models_0";
import { de_ListRobotApplicationsCommand, se_ListRobotApplicationsCommand } from "../protocols/Aws_restJson1";
import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRobotApplicationsCommand}.
 */
export interface ListRobotApplicationsCommandInput extends ListRobotApplicationsRequest {}
/**
 * @public
 *
 * The output of {@link ListRobotApplicationsCommand}.
 */
export interface ListRobotApplicationsCommandOutput extends ListRobotApplicationsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of robot application. You can optionally provide filters to retrieve
 *          specific robot applications.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, ListRobotApplicationsCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, ListRobotApplicationsCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const input = { // ListRobotApplicationsRequest
 *   versionQualifier: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   filters: [ // Filters
 *     { // Filter
 *       name: "STRING_VALUE",
 *       values: [ // FilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new ListRobotApplicationsCommand(input);
 * const response = await client.send(command);
 * // { // ListRobotApplicationsResponse
 * //   robotApplicationSummaries: [ // RobotApplicationSummaries
 * //     { // RobotApplicationSummary
 * //       name: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       version: "STRING_VALUE",
 * //       lastUpdatedAt: new Date("TIMESTAMP"),
 * //       robotSoftwareSuite: { // RobotSoftwareSuite
 * //         name: "ROS" || "ROS2" || "General",
 * //         version: "Kinetic" || "Melodic" || "Dashing" || "Foxy",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRobotApplicationsCommandInput - {@link ListRobotApplicationsCommandInput}
 * @returns {@link ListRobotApplicationsCommandOutput}
 * @see {@link ListRobotApplicationsCommandInput} for command's `input` shape.
 * @see {@link ListRobotApplicationsCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for RoboMakerClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>AWS RoboMaker experienced a service issue. Try your call again.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter specified in a request is not valid, is unsupported, or cannot be used. The
 *          returned message provides an explanation of the error value.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>AWS RoboMaker is temporarily unable to process the request. Try your call again.</p>
 *
 * @throws {@link RoboMakerServiceException}
 * <p>Base exception class for all service exceptions from RoboMaker service.</p>
 *
 * @public
 */
export class ListRobotApplicationsCommand extends $Command
  .classBuilder<
    ListRobotApplicationsCommandInput,
    ListRobotApplicationsCommandOutput,
    RoboMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: RoboMakerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("robomaker", "ListRobotApplications", {})
  .n("RoboMakerClient", "ListRobotApplicationsCommand")
  .f(void 0, void 0)
  .ser(se_ListRobotApplicationsCommand)
  .de(de_ListRobotApplicationsCommand)
  .build() {}
