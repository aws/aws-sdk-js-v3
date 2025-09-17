// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { CancelStatementRequest, CancelStatementResponse } from "../models/models_1";
import { de_CancelStatementCommand, se_CancelStatementCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CancelStatementCommand}.
 */
export interface CancelStatementCommandInput extends CancelStatementRequest {}
/**
 * @public
 *
 * The output of {@link CancelStatementCommand}.
 */
export interface CancelStatementCommandOutput extends CancelStatementResponse, __MetadataBearer {}

/**
 * <p>Cancels the statement.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CancelStatementCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, CancelStatementCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // CancelStatementRequest
 *   SessionId: "STRING_VALUE", // required
 *   Id: Number("int"), // required
 *   RequestOrigin: "STRING_VALUE",
 * };
 * const command = new CancelStatementCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CancelStatementCommandInput - {@link CancelStatementCommandInput}
 * @returns {@link CancelStatementCommandOutput}
 * @see {@link CancelStatementCommandInput} for command's `input` shape.
 * @see {@link CancelStatementCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class CancelStatementCommand extends $Command
  .classBuilder<
    CancelStatementCommandInput,
    CancelStatementCommandOutput,
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
  .s("AWSGlue", "CancelStatement", {})
  .n("GlueClient", "CancelStatementCommand")
  .f(void 0, void 0)
  .ser(se_CancelStatementCommand)
  .de(de_CancelStatementCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelStatementRequest;
      output: {};
    };
    sdk: {
      input: CancelStatementCommandInput;
      output: CancelStatementCommandOutput;
    };
  };
}
