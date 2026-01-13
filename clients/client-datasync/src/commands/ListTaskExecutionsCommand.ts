// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListTaskExecutionsRequest, ListTaskExecutionsResponse } from "../models/models_0";
import { ListTaskExecutions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTaskExecutionsCommand}.
 */
export interface ListTaskExecutionsCommandInput extends ListTaskExecutionsRequest {}
/**
 * @public
 *
 * The output of {@link ListTaskExecutionsCommand}.
 */
export interface ListTaskExecutionsCommandOutput extends ListTaskExecutionsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of executions for an DataSync transfer task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, ListTaskExecutionsCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, ListTaskExecutionsCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * // import type { DataSyncClientConfig } from "@aws-sdk/client-datasync";
 * const config = {}; // type is DataSyncClientConfig
 * const client = new DataSyncClient(config);
 * const input = { // ListTaskExecutionsRequest
 *   TaskArn: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListTaskExecutionsCommand(input);
 * const response = await client.send(command);
 * // { // ListTaskExecutionsResponse
 * //   TaskExecutions: [ // TaskExecutionList
 * //     { // TaskExecutionListEntry
 * //       TaskExecutionArn: "STRING_VALUE",
 * //       Status: "QUEUED" || "CANCELLING" || "LAUNCHING" || "PREPARING" || "TRANSFERRING" || "VERIFYING" || "SUCCESS" || "ERROR",
 * //       TaskMode: "BASIC" || "ENHANCED",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTaskExecutionsCommandInput - {@link ListTaskExecutionsCommandInput}
 * @returns {@link ListTaskExecutionsCommandOutput}
 * @see {@link ListTaskExecutionsCommandInput} for command's `input` shape.
 * @see {@link ListTaskExecutionsCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for DataSyncClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception is thrown when an error occurs in the DataSync
 *       service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception is thrown when the client submits a malformed request.</p>
 *
 * @throws {@link DataSyncServiceException}
 * <p>Base exception class for all service exceptions from DataSync service.</p>
 *
 *
 * @public
 */
export class ListTaskExecutionsCommand extends $Command
  .classBuilder<
    ListTaskExecutionsCommandInput,
    ListTaskExecutionsCommandOutput,
    DataSyncClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataSyncClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("FmrsService", "ListTaskExecutions", {})
  .n("DataSyncClient", "ListTaskExecutionsCommand")
  .sc(ListTaskExecutions$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTaskExecutionsRequest;
      output: ListTaskExecutionsResponse;
    };
    sdk: {
      input: ListTaskExecutionsCommandInput;
      output: ListTaskExecutionsCommandOutput;
    };
  };
}
