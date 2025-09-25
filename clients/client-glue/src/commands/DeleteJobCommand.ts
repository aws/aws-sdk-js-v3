// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { DeleteJobRequest, DeleteJobResponse } from "../models/models_1";
import { DeleteJob } from "../schemas/schemas_23_DeleteJob";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteJobCommand}.
 */
export interface DeleteJobCommandInput extends DeleteJobRequest {}
/**
 * @public
 *
 * The output of {@link DeleteJobCommand}.
 */
export interface DeleteJobCommandOutput extends DeleteJobResponse, __MetadataBearer {}

/**
 * <p>Deletes a specified job definition. If the job definition
 *       is not found, no exception is thrown.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DeleteJobCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DeleteJobCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // DeleteJobRequest
 *   JobName: "STRING_VALUE", // required
 * };
 * const command = new DeleteJobCommand(input);
 * const response = await client.send(command);
 * // { // DeleteJobResponse
 * //   JobName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteJobCommandInput - {@link DeleteJobCommandInput}
 * @returns {@link DeleteJobCommandOutput}
 * @see {@link DeleteJobCommandInput} for command's `input` shape.
 * @see {@link DeleteJobCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class DeleteJobCommand extends $Command
  .classBuilder<
    DeleteJobCommandInput,
    DeleteJobCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "DeleteJob", {})
  .n("GlueClient", "DeleteJobCommand")
  .sc(DeleteJob)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteJobRequest;
      output: DeleteJobResponse;
    };
    sdk: {
      input: DeleteJobCommandInput;
      output: DeleteJobCommandOutput;
    };
  };
}
