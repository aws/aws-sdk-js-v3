// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetStatementRequest, GetStatementResponse } from "../models/models_2";
import { de_GetStatementCommand, se_GetStatementCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetStatementCommand}.
 */
export interface GetStatementCommandInput extends GetStatementRequest {}
/**
 * @public
 *
 * The output of {@link GetStatementCommand}.
 */
export interface GetStatementCommandOutput extends GetStatementResponse, __MetadataBearer {}

/**
 * <p>Retrieves the statement.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetStatementCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetStatementCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new GlueClient(config);
 * const input = { // GetStatementRequest
 *   SessionId: "STRING_VALUE", // required
 *   Id: Number("int"), // required
 *   RequestOrigin: "STRING_VALUE",
 * };
 * const command = new GetStatementCommand(input);
 * const response = await client.send(command);
 * // { // GetStatementResponse
 * //   Statement: { // Statement
 * //     Id: Number("int"),
 * //     Code: "STRING_VALUE",
 * //     State: "WAITING" || "RUNNING" || "AVAILABLE" || "CANCELLING" || "CANCELLED" || "ERROR",
 * //     Output: { // StatementOutput
 * //       Data: { // StatementOutputData
 * //         TextPlain: "STRING_VALUE",
 * //       },
 * //       ExecutionCount: Number("int"),
 * //       Status: "WAITING" || "RUNNING" || "AVAILABLE" || "CANCELLING" || "CANCELLED" || "ERROR",
 * //       ErrorName: "STRING_VALUE",
 * //       ErrorValue: "STRING_VALUE",
 * //       Traceback: [ // OrchestrationStringList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     Progress: Number("double"),
 * //     StartedOn: Number("long"),
 * //     CompletedOn: Number("long"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetStatementCommandInput - {@link GetStatementCommandInput}
 * @returns {@link GetStatementCommandOutput}
 * @see {@link GetStatementCommandInput} for command's `input` shape.
 * @see {@link GetStatementCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link IllegalSessionStateException} (client fault)
 *  <p>The session is in an invalid state to perform a requested operation.</p>
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
 * @public
 */
export class GetStatementCommand extends $Command
  .classBuilder<
    GetStatementCommandInput,
    GetStatementCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGlue", "GetStatement", {})
  .n("GlueClient", "GetStatementCommand")
  .f(void 0, void 0)
  .ser(se_GetStatementCommand)
  .de(de_GetStatementCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetStatementRequest;
      output: GetStatementResponse;
    };
    sdk: {
      input: GetStatementCommandInput;
      output: GetStatementCommandOutput;
    };
  };
}
