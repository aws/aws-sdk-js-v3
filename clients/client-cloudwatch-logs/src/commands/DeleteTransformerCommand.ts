// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteTransformerRequest } from "../models/models_0";
import { de_DeleteTransformerCommand, se_DeleteTransformerCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteTransformerCommand}.
 */
export interface DeleteTransformerCommandInput extends DeleteTransformerRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTransformerCommand}.
 */
export interface DeleteTransformerCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the log transformer for the specified log group. As soon as you do this, the
 *       transformation of incoming log events according to that transformer stops. If this account has
 *       an account-level transformer that applies to this log group, the log group begins using that
 *       account-level transformer when this log-group level transformer is deleted.</p>
 *          <p>After you delete a transformer, be sure to edit any metric filters or subscription filters
 *       that relied on the transformed versions of the log events.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, DeleteTransformerCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, DeleteTransformerCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // DeleteTransformerRequest
 *   logGroupIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteTransformerCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteTransformerCommandInput - {@link DeleteTransformerCommandInput}
 * @returns {@link DeleteTransformerCommandOutput}
 * @see {@link DeleteTransformerCommandInput} for command's `input` shape.
 * @see {@link DeleteTransformerCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link InvalidOperationException} (client fault)
 *  <p>The operation is not valid on the specified resource.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter is specified incorrectly.</p>
 *
 * @throws {@link OperationAbortedException} (client fault)
 *  <p>Multiple concurrent requests to update the same resource were in conflict.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service cannot complete the request.</p>
 *
 * @throws {@link CloudWatchLogsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchLogs service.</p>
 *
 *
 * @public
 */
export class DeleteTransformerCommand extends $Command
  .classBuilder<
    DeleteTransformerCommandInput,
    DeleteTransformerCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchLogsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Logs_20140328", "DeleteTransformer", {})
  .n("CloudWatchLogsClient", "DeleteTransformerCommand")
  .f(void 0, void 0)
  .ser(se_DeleteTransformerCommand)
  .de(de_DeleteTransformerCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTransformerRequest;
      output: {};
    };
    sdk: {
      input: DeleteTransformerCommandInput;
      output: DeleteTransformerCommandOutput;
    };
  };
}
