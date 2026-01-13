// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTTwinMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTTwinMakerClient";
import type { ListSyncJobsRequest, ListSyncJobsResponse } from "../models/models_0";
import { ListSyncJobs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSyncJobsCommand}.
 */
export interface ListSyncJobsCommandInput extends ListSyncJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListSyncJobsCommand}.
 */
export interface ListSyncJobsCommandOutput extends ListSyncJobsResponse, __MetadataBearer {}

/**
 * <p>List all SyncJobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTTwinMakerClient, ListSyncJobsCommand } from "@aws-sdk/client-iottwinmaker"; // ES Modules import
 * // const { IoTTwinMakerClient, ListSyncJobsCommand } = require("@aws-sdk/client-iottwinmaker"); // CommonJS import
 * // import type { IoTTwinMakerClientConfig } from "@aws-sdk/client-iottwinmaker";
 * const config = {}; // type is IoTTwinMakerClientConfig
 * const client = new IoTTwinMakerClient(config);
 * const input = { // ListSyncJobsRequest
 *   workspaceId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListSyncJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListSyncJobsResponse
 * //   syncJobSummaries: [ // SyncJobSummaries
 * //     { // SyncJobSummary
 * //       arn: "STRING_VALUE",
 * //       workspaceId: "STRING_VALUE",
 * //       syncSource: "STRING_VALUE",
 * //       status: { // SyncJobStatus
 * //         state: "STRING_VALUE",
 * //         error: { // ErrorDetails
 * //           code: "STRING_VALUE",
 * //           message: "STRING_VALUE",
 * //         },
 * //       },
 * //       creationDateTime: new Date("TIMESTAMP"),
 * //       updateDateTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSyncJobsCommandInput - {@link ListSyncJobsCommandInput}
 * @returns {@link ListSyncJobsCommandOutput}
 * @see {@link ListSyncJobsCommandInput} for command's `input` shape.
 * @see {@link ListSyncJobsCommandOutput} for command's `response` shape.
 * @see {@link IoTTwinMakerClientResolvedConfig | config} for IoTTwinMakerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The service quota was exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Failed</p>
 *
 * @throws {@link IoTTwinMakerServiceException}
 * <p>Base exception class for all service exceptions from IoTTwinMaker service.</p>
 *
 *
 * @public
 */
export class ListSyncJobsCommand extends $Command
  .classBuilder<
    ListSyncJobsCommandInput,
    ListSyncJobsCommandOutput,
    IoTTwinMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTTwinMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIoTTwinMaker", "ListSyncJobs", {})
  .n("IoTTwinMakerClient", "ListSyncJobsCommand")
  .sc(ListSyncJobs$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSyncJobsRequest;
      output: ListSyncJobsResponse;
    };
    sdk: {
      input: ListSyncJobsCommandInput;
      output: ListSyncJobsCommandOutput;
    };
  };
}
