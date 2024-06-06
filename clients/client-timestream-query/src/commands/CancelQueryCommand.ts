// smithy-typescript generated code
import { getEndpointDiscoveryPlugin } from "@aws-sdk/middleware-endpoint-discovery";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CancelQueryRequest, CancelQueryResponse } from "../models/models_0";
import { de_CancelQueryCommand, se_CancelQueryCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, TimestreamQueryClientResolvedConfig } from "../TimestreamQueryClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CancelQueryCommand}.
 */
export interface CancelQueryCommandInput extends CancelQueryRequest {}
/**
 * @public
 *
 * The output of {@link CancelQueryCommand}.
 */
export interface CancelQueryCommandOutput extends CancelQueryResponse, __MetadataBearer {}

/**
 * <p> Cancels a query that has been issued. Cancellation is provided only if the query has
 *             not completed running before the cancellation request was issued. Because cancellation
 *             is an idempotent operation, subsequent cancellation requests will return a
 *                 <code>CancellationMessage</code>, indicating that the query has already been
 *             canceled. See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.cancel-query.html">code
 *                 sample</a> for details. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TimestreamQueryClient, CancelQueryCommand } from "@aws-sdk/client-timestream-query"; // ES Modules import
 * // const { TimestreamQueryClient, CancelQueryCommand } = require("@aws-sdk/client-timestream-query"); // CommonJS import
 * const client = new TimestreamQueryClient(config);
 * const input = { // CancelQueryRequest
 *   QueryId: "STRING_VALUE", // required
 * };
 * const command = new CancelQueryCommand(input);
 * const response = await client.send(command);
 * // { // CancelQueryResponse
 * //   CancellationMessage: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CancelQueryCommandInput - {@link CancelQueryCommandInput}
 * @returns {@link CancelQueryCommandOutput}
 * @see {@link CancelQueryCommandInput} for command's `input` shape.
 * @see {@link CancelQueryCommandOutput} for command's `response` shape.
 * @see {@link TimestreamQueryClientResolvedConfig | config} for TimestreamQueryClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You are not authorized to perform this action. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>
 *             The service was unable to fully process this request because of an internal
 *             server error. </p>
 *
 * @throws {@link InvalidEndpointException} (client fault)
 *  <p>The requested endpoint was not valid.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> Invalid or malformed request. </p>
 *
 * @throws {@link TimestreamQueryServiceException}
 * <p>Base exception class for all service exceptions from TimestreamQuery service.</p>
 *
 * @public
 */
export class CancelQueryCommand extends $Command
  .classBuilder<
    CancelQueryCommandInput,
    CancelQueryCommandOutput,
    TimestreamQueryClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: TimestreamQueryClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getEndpointDiscoveryPlugin(config, { clientStack: cs, isDiscoveredEndpointRequired: true, options: o }),
    ];
  })
  .s("Timestream_20181101", "CancelQuery", {})
  .n("TimestreamQueryClient", "CancelQueryCommand")
  .f(void 0, void 0)
  .ser(se_CancelQueryCommand)
  .de(de_CancelQueryCommand)
  .build() {}
