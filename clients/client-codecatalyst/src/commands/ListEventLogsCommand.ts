// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListEventLogsRequest, ListEventLogsResponse } from "../models/models_0";
import { ListEventLogs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Retrieves a list of events that occurred during a specific time in a space. You can use these events to audit user and system activity in a space. For more information, see [Monitoring](https://docs.aws.amazon.com/codecatalyst/latest/userguide/ipa-monitoring.html) in the *Amazon CodeCatalyst User Guide*.
 *
 * > **Note:** ListEventLogs guarantees events for the last 30 days in a given space. You can also view and retrieve a list of management events over the last 90 days for Amazon CodeCatalyst in the CloudTrail console by viewing Event history, or by creating a trail to create and maintain a record of events that extends past 90 days. For more information, see [Working with CloudTrail Event History](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/view-cloudtrail-events.html) and [Working with CloudTrail trails](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-getting-started.html).
 *
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
 *
 * The request was denied because you don't have sufficient access to perform this action. Verify that you are a member of a role that allows this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request was denied because the requested operation would cause a conflict with the current state of a service resource associated with the request. Another user might have updated the resource. Reload, make sure you have the latest data, and then try again.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request was denied because the specified resource was not found. Verify that the spelling is correct and that you have access to the resource.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request was denied because one or more resources has reached its limits for the tier the space belongs to. Either reduce the number of resources, or change the tier if applicable.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request was denied because an input failed to satisfy the constraints specified by the service. Check the spelling and input requirements, and then try again.
 *
 * @throws {@link CodeCatalystServiceException}
 *
 * Base exception class for all service exceptions from CodeCatalyst service.
 *
 * @public
 */
export class ListEventLogsCommand extends command<ListEventLogsCommandInput, ListEventLogsCommandOutput>(
  _ep0,
  _mw0,
  "ListEventLogs",
  ListEventLogs$
) {
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
