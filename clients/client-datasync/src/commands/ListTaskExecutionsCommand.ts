// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListTaskExecutionsRequest, ListTaskExecutionsResponse } from "../models/models_0";
import { de_ListTaskExecutionsCommand, se_ListTaskExecutionsCommand } from "../protocols/Aws_json1_1";

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
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("FmrsService", "ListTaskExecutions", {})
  .n("DataSyncClient", "ListTaskExecutionsCommand")
  .f(void 0, void 0)
  .ser(se_ListTaskExecutionsCommand)
  .de(de_ListTaskExecutionsCommand)
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
