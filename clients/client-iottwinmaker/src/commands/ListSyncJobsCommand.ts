// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTTwinMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTTwinMakerClient";
import { ListSyncJobsRequest, ListSyncJobsResponse } from "../models/models_0";
import { de_ListSyncJobsCommand, se_ListSyncJobsCommand } from "../protocols/Aws_restJson1";

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
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: IoTTwinMakerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIoTTwinMaker", "ListSyncJobs", {})
  .n("IoTTwinMakerClient", "ListSyncJobsCommand")
  .f(void 0, void 0)
  .ser(se_ListSyncJobsCommand)
  .de(de_ListSyncJobsCommand)
  .build() {}
