// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteTaskRequest, DeleteTaskResponse } from "../models/models_0";
import { de_DeleteTaskCommand, se_DeleteTaskCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteTaskCommand}.
 */
export interface DeleteTaskCommandInput extends DeleteTaskRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTaskCommand}.
 */
export interface DeleteTaskCommandOutput extends DeleteTaskResponse, __MetadataBearer {}

/**
 * <p>Deletes a transfer task resource from DataSync.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, DeleteTaskCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, DeleteTaskCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * // import type { DataSyncClientConfig } from "@aws-sdk/client-datasync";
 * const config = {}; // type is DataSyncClientConfig
 * const client = new DataSyncClient(config);
 * const input = { // DeleteTaskRequest
 *   TaskArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteTaskCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteTaskCommandInput - {@link DeleteTaskCommandInput}
 * @returns {@link DeleteTaskCommandOutput}
 * @see {@link DeleteTaskCommandInput} for command's `input` shape.
 * @see {@link DeleteTaskCommandOutput} for command's `response` shape.
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
export class DeleteTaskCommand extends $Command
  .classBuilder<
    DeleteTaskCommandInput,
    DeleteTaskCommandOutput,
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
  .s("FmrsService", "DeleteTask", {})
  .n("DataSyncClient", "DeleteTaskCommand")
  .f(void 0, void 0)
  .ser(se_DeleteTaskCommand)
  .de(de_DeleteTaskCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTaskRequest;
      output: {};
    };
    sdk: {
      input: DeleteTaskCommandInput;
      output: DeleteTaskCommandOutput;
    };
  };
}
