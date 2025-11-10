// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteQueryDefinitionRequest, DeleteQueryDefinitionResponse } from "../models/models_0";
import { DeleteQueryDefinition } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteQueryDefinitionCommand}.
 */
export interface DeleteQueryDefinitionCommandInput extends DeleteQueryDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteQueryDefinitionCommand}.
 */
export interface DeleteQueryDefinitionCommandOutput extends DeleteQueryDefinitionResponse, __MetadataBearer {}

/**
 * <p>Deletes a saved CloudWatch Logs Insights query definition. A query definition contains
 *       details about a saved CloudWatch Logs Insights query.</p>
 *          <p>Each <code>DeleteQueryDefinition</code> operation can delete one query definition.</p>
 *          <p>You must have the <code>logs:DeleteQueryDefinition</code> permission to be able to perform
 *       this operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, DeleteQueryDefinitionCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, DeleteQueryDefinitionCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // DeleteQueryDefinitionRequest
 *   queryDefinitionId: "STRING_VALUE", // required
 * };
 * const command = new DeleteQueryDefinitionCommand(input);
 * const response = await client.send(command);
 * // { // DeleteQueryDefinitionResponse
 * //   success: true || false,
 * // };
 *
 * ```
 *
 * @param DeleteQueryDefinitionCommandInput - {@link DeleteQueryDefinitionCommandInput}
 * @returns {@link DeleteQueryDefinitionCommandOutput}
 * @see {@link DeleteQueryDefinitionCommandInput} for command's `input` shape.
 * @see {@link DeleteQueryDefinitionCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter is specified incorrectly.</p>
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
export class DeleteQueryDefinitionCommand extends $Command
  .classBuilder<
    DeleteQueryDefinitionCommandInput,
    DeleteQueryDefinitionCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchLogsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Logs_20140328", "DeleteQueryDefinition", {})
  .n("CloudWatchLogsClient", "DeleteQueryDefinitionCommand")
  .sc(DeleteQueryDefinition)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteQueryDefinitionRequest;
      output: DeleteQueryDefinitionResponse;
    };
    sdk: {
      input: DeleteQueryDefinitionCommandInput;
      output: DeleteQueryDefinitionCommandOutput;
    };
  };
}
