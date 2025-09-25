// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeCatalystClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCatalystClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListEventLogsRequest, ListEventLogsResponse } from "../models/models_0";
import { ListEventLogs } from "../schemas/schemas_2_List";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListEventLogsCommand}.
 */
export interface ListEventLogsCommandInput extends ListEventLogsRequest {}
/**
 * @public
 *
 * The output of {@link ListEventLogsCommand}.
 */
export interface ListEventLogsCommandOutput extends ListEventLogsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of events that occurred during a specific time in a space. You can
 *       use these events to audit user and system activity in a space. For more information, see
 *         <a href="https://docs.aws.amazon.com/codecatalyst/latest/userguide/ipa-monitoring.html">Monitoring</a> in the <i>Amazon CodeCatalyst User Guide</i>.</p>
 *          <note>
 *             <p>ListEventLogs guarantees events for the last 30 days in a given space. You can also
 *         view and retrieve a list of management events over the last 90 days for Amazon CodeCatalyst in the
 *           CloudTrail console by viewing Event history, or by creating a trail to create
 *         and maintain a record of events that extends past 90 days. For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/view-cloudtrail-events.html">Working with CloudTrail Event History</a> and <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-getting-started.html">Working with
 *           CloudTrail trails</a>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCatalystClient, ListEventLogsCommand } from "@aws-sdk/client-codecatalyst"; // ES Modules import
 * // const { CodeCatalystClient, ListEventLogsCommand } = require("@aws-sdk/client-codecatalyst"); // CommonJS import
 * // import type { CodeCatalystClientConfig } from "@aws-sdk/client-codecatalyst";
 * const config = {}; // type is CodeCatalystClientConfig
 * const client = new CodeCatalystClient(config);
 * const input = { // ListEventLogsRequest
 *   spaceName: "STRING_VALUE", // required
 *   startTime: new Date("TIMESTAMP"), // required
 *   endTime: new Date("TIMESTAMP"), // required
 *   eventName: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListEventLogsCommand(input);
 * const response = await client.send(command);
 * // { // ListEventLogsResponse
 * //   nextToken: "STRING_VALUE",
 * //   items: [ // EventLogEntries // required
 * //     { // EventLogEntry
 * //       id: "STRING_VALUE", // required
 * //       eventName: "STRING_VALUE", // required
 * //       eventType: "STRING_VALUE", // required
 * //       eventCategory: "STRING_VALUE", // required
 * //       eventSource: "STRING_VALUE", // required
 * //       eventTime: new Date("TIMESTAMP"), // required
 * //       operationType: "STRING_VALUE", // required
 * //       userIdentity: { // UserIdentity
 * //         userType: "STRING_VALUE", // required
 * //         principalId: "STRING_VALUE", // required
 * //         userName: "STRING_VALUE",
 * //         awsAccountId: "STRING_VALUE",
 * //       },
 * //       projectInformation: { // ProjectInformation
 * //         name: "STRING_VALUE",
 * //         projectId: "STRING_VALUE",
 * //       },
 * //       requestId: "STRING_VALUE",
 * //       requestPayload: { // EventPayload
 * //         contentType: "STRING_VALUE",
 * //         data: "STRING_VALUE",
 * //       },
 * //       responsePayload: {
 * //         contentType: "STRING_VALUE",
 * //         data: "STRING_VALUE",
 * //       },
 * //       errorCode: "STRING_VALUE",
 * //       sourceIpAddress: "STRING_VALUE",
 * //       userAgent: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListEventLogsCommandInput - {@link ListEventLogsCommandInput}
 * @returns {@link ListEventLogsCommandOutput}
 * @see {@link ListEventLogsCommandInput} for command's `input` shape.
 * @see {@link ListEventLogsCommandOutput} for command's `response` shape.
 * @see {@link CodeCatalystClientResolvedConfig | config} for CodeCatalystClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because you don't have sufficient access to perform this action. Verify that you are a member of a role that allows this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request was denied because the requested operation would cause a conflict with the current state of a service resource associated with the request.
 *        Another user might have updated the resource. Reload, make sure you have the latest data, and then try again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was denied because the specified resource was not found. Verify that the spelling is correct and that you have access to the resource.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request was denied because one or more resources has reached its limits for the tier the space belongs to. Either reduce
 *       the number of resources, or change the tier if applicable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request was denied because an input failed to satisfy the constraints specified by the service. Check the spelling and input requirements, and then try again.</p>
 *
 * @throws {@link CodeCatalystServiceException}
 * <p>Base exception class for all service exceptions from CodeCatalyst service.</p>
 *
 *
 * @public
 */
export class ListEventLogsCommand extends $Command
  .classBuilder<
    ListEventLogsCommandInput,
    ListEventLogsCommandOutput,
    CodeCatalystClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeCatalystClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeCatalyst", "ListEventLogs", {})
  .n("CodeCatalystClient", "ListEventLogsCommand")
  .sc(ListEventLogs)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEventLogsRequest;
      output: ListEventLogsResponse;
    };
    sdk: {
      input: ListEventLogsCommandInput;
      output: ListEventLogsCommandOutput;
    };
  };
}
