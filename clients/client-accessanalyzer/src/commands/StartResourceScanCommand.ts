// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AccessAnalyzerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccessAnalyzerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StartResourceScanRequest } from "../models/models_0";
import { de_StartResourceScanCommand, se_StartResourceScanCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartResourceScanCommand}.
 */
export interface StartResourceScanCommandInput extends StartResourceScanRequest {}
/**
 * @public
 *
 * The output of {@link StartResourceScanCommand}.
 */
export interface StartResourceScanCommandOutput extends __MetadataBearer {}

/**
 * <p>Immediately starts a scan of the policies applied to the specified resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, StartResourceScanCommand } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, StartResourceScanCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * const client = new AccessAnalyzerClient(config);
 * const input = { // StartResourceScanRequest
 *   analyzerArn: "STRING_VALUE", // required
 *   resourceArn: "STRING_VALUE", // required
 *   resourceOwnerAccount: "STRING_VALUE",
 * };
 * const command = new StartResourceScanCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StartResourceScanCommandInput - {@link StartResourceScanCommandInput}
 * @returns {@link StartResourceScanCommandOutput}
 * @see {@link StartResourceScanCommandInput} for command's `input` shape.
 * @see {@link StartResourceScanCommandOutput} for command's `response` shape.
 * @see {@link AccessAnalyzerClientResolvedConfig | config} for AccessAnalyzerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Throttling limit exceeded error.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validation exception error.</p>
 *
 * @throws {@link AccessAnalyzerServiceException}
 * <p>Base exception class for all service exceptions from AccessAnalyzer service.</p>
 *
 * @public
 */
export class StartResourceScanCommand extends $Command
  .classBuilder<
    StartResourceScanCommandInput,
    StartResourceScanCommandOutput,
    AccessAnalyzerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: AccessAnalyzerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AccessAnalyzer", "StartResourceScan", {})
  .n("AccessAnalyzerClient", "StartResourceScanCommand")
  .f(void 0, void 0)
  .ser(se_StartResourceScanCommand)
  .de(de_StartResourceScanCommand)
  .build() {}
