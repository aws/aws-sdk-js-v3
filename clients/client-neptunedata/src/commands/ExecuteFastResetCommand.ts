// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ExecuteFastResetInput, ExecuteFastResetOutput } from "../models/models_0";
import { NeptunedataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptunedataClient";
import { de_ExecuteFastResetCommand, se_ExecuteFastResetCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ExecuteFastResetCommand}.
 */
export interface ExecuteFastResetCommandInput extends ExecuteFastResetInput {}
/**
 * @public
 *
 * The output of {@link ExecuteFastResetCommand}.
 */
export interface ExecuteFastResetCommandOutput extends ExecuteFastResetOutput, __MetadataBearer {}

/**
 * <p>The fast reset REST API lets you reset a Neptune graph quicky and easily, removing all of its data.</p> <p>Neptune fast reset is a two-step process. First you call <code>ExecuteFastReset</code> with <code>action</code> set to <code>initiateDatabaseReset</code>. This returns a UUID token which you then include when calling <code>ExecuteFastReset</code> again with <code>action</code> set to <code>performDatabaseReset</code>. See <a href="https://docs.aws.amazon.com/neptune/latest/userguide/manage-console-fast-reset.html">Empty an Amazon Neptune DB cluster using the fast reset API</a>.</p> <p>When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the <a href="https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#resetdatabase">neptune-db:ResetDatabase</a> IAM action in that cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptunedataClient, ExecuteFastResetCommand } from "@aws-sdk/client-neptunedata"; // ES Modules import
 * // const { NeptunedataClient, ExecuteFastResetCommand } = require("@aws-sdk/client-neptunedata"); // CommonJS import
 * const client = new NeptunedataClient(config);
 * const input = { // ExecuteFastResetInput
 *   action: "initiateDatabaseReset" || "performDatabaseReset", // required
 *   token: "STRING_VALUE",
 * };
 * const command = new ExecuteFastResetCommand(input);
 * const response = await client.send(command);
 * // { // ExecuteFastResetOutput
 * //   status: "STRING_VALUE", // required
 * //   payload: { // FastResetToken
 * //     token: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param ExecuteFastResetCommandInput - {@link ExecuteFastResetCommandInput}
 * @returns {@link ExecuteFastResetCommandOutput}
 * @see {@link ExecuteFastResetCommandInput} for command's `input` shape.
 * @see {@link ExecuteFastResetCommandOutput} for command's `response` shape.
 * @see {@link NeptunedataClientResolvedConfig | config} for NeptunedataClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Raised in case of an authentication or authorization failure.</p>
 *
 * @throws {@link ClientTimeoutException} (client fault)
 *  <p>Raised when a request timed out in the client.</p>
 *
 * @throws {@link ConstraintViolationException} (client fault)
 *  <p>Raised when a value in a request field did not satisfy required constraints.</p>
 *
 * @throws {@link IllegalArgumentException} (client fault)
 *  <p>Raised when an argument in a request is not supported.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>Raised when an argument in a request has an invalid value.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Raised when a parameter value is not valid.</p>
 *
 * @throws {@link MethodNotAllowedException} (client fault)
 *  <p>Raised when the HTTP method used by a request is not supported by the endpoint being used.</p>
 *
 * @throws {@link MissingParameterException} (client fault)
 *  <p>Raised when a required parameter is missing.</p>
 *
 * @throws {@link PreconditionsFailedException} (client fault)
 *  <p>Raised when a precondition for processing a request is not satisfied.</p>
 *
 * @throws {@link ReadOnlyViolationException} (client fault)
 *  <p>Raised when a request attempts to write to a read-only resource.</p>
 *
 * @throws {@link ServerShutdownException} (server fault)
 *  <p>Raised when the server shuts down while processing a request.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Raised when the number of requests being processed exceeds the limit.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>Raised when a request attempts to initiate an operation that is not supported.</p>
 *
 * @throws {@link NeptunedataServiceException}
 * <p>Base exception class for all service exceptions from Neptunedata service.</p>
 *
 *
 * @public
 */
export class ExecuteFastResetCommand extends $Command
  .classBuilder<
    ExecuteFastResetCommandInput,
    ExecuteFastResetCommandOutput,
    NeptunedataClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NeptunedataClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonNeptuneDataplane", "ExecuteFastReset", {})
  .n("NeptunedataClient", "ExecuteFastResetCommand")
  .f(void 0, void 0)
  .ser(se_ExecuteFastResetCommand)
  .de(de_ExecuteFastResetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ExecuteFastResetInput;
      output: ExecuteFastResetOutput;
    };
    sdk: {
      input: ExecuteFastResetCommandInput;
      output: ExecuteFastResetCommandOutput;
    };
  };
}
