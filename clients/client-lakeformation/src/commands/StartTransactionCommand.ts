// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import { StartTransactionRequest, StartTransactionResponse } from "../models/models_0";
import { de_StartTransactionCommand, se_StartTransactionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartTransactionCommand}.
 */
export interface StartTransactionCommandInput extends StartTransactionRequest {}
/**
 * @public
 *
 * The output of {@link StartTransactionCommand}.
 */
export interface StartTransactionCommandOutput extends StartTransactionResponse, __MetadataBearer {}

/**
 * <p>Starts a new transaction and returns its transaction ID. Transaction IDs are opaque objects that you can use to identify a transaction.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, StartTransactionCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, StartTransactionCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new LakeFormationClient(config);
 * const input = { // StartTransactionRequest
 *   TransactionType: "READ_AND_WRITE" || "READ_ONLY",
 * };
 * const command = new StartTransactionCommand(input);
 * const response = await client.send(command);
 * // { // StartTransactionResponse
 * //   TransactionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartTransactionCommandInput - {@link StartTransactionCommandInput}
 * @returns {@link StartTransactionCommandOutput}
 * @see {@link StartTransactionCommandInput} for command's `input` shape.
 * @see {@link StartTransactionCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link LakeFormationServiceException}
 * <p>Base exception class for all service exceptions from LakeFormation service.</p>
 *
 * @public
 */
export class StartTransactionCommand extends $Command
  .classBuilder<
    StartTransactionCommandInput,
    StartTransactionCommandOutput,
    LakeFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LakeFormationClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSLakeFormation", "StartTransaction", {})
  .n("LakeFormationClient", "StartTransactionCommand")
  .f(void 0, void 0)
  .ser(se_StartTransactionCommand)
  .de(de_StartTransactionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartTransactionRequest;
      output: StartTransactionResponse;
    };
    sdk: {
      input: StartTransactionCommandInput;
      output: StartTransactionCommandOutput;
    };
  };
}
