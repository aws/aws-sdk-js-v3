// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StopQueryExecutionInput, StopQueryExecutionOutput } from "../models/models_0";
import { StopQueryExecution } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopQueryExecutionCommand}.
 */
export interface StopQueryExecutionCommandInput extends StopQueryExecutionInput {}
/**
 * @public
 *
 * The output of {@link StopQueryExecutionCommand}.
 */
export interface StopQueryExecutionCommandOutput extends StopQueryExecutionOutput, __MetadataBearer {}

/**
 * <p>Stops a query execution. Requires you to have access to the workgroup in which the
 *             query ran.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, StopQueryExecutionCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, StopQueryExecutionCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * // import type { AthenaClientConfig } from "@aws-sdk/client-athena";
 * const config = {}; // type is AthenaClientConfig
 * const client = new AthenaClient(config);
 * const input = { // StopQueryExecutionInput
 *   QueryExecutionId: "STRING_VALUE", // required
 * };
 * const command = new StopQueryExecutionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopQueryExecutionCommandInput - {@link StopQueryExecutionCommandInput}
 * @returns {@link StopQueryExecutionCommandOutput}
 * @see {@link StopQueryExecutionCommandInput} for command's `input` shape.
 * @see {@link StopQueryExecutionCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for AthenaClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Indicates a platform issue, which may be due to a transient condition or
 *             outage.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that something is wrong with the input to the request. For example, a
 *             required parameter may be missing or out of range.</p>
 *
 * @throws {@link AthenaServiceException}
 * <p>Base exception class for all service exceptions from Athena service.</p>
 *
 *
 * @public
 */
export class StopQueryExecutionCommand extends $Command
  .classBuilder<
    StopQueryExecutionCommandInput,
    StopQueryExecutionCommandOutput,
    AthenaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AthenaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonAthena", "StopQueryExecution", {})
  .n("AthenaClient", "StopQueryExecutionCommand")
  .sc(StopQueryExecution)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopQueryExecutionInput;
      output: {};
    };
    sdk: {
      input: StopQueryExecutionCommandInput;
      output: StopQueryExecutionCommandOutput;
    };
  };
}
