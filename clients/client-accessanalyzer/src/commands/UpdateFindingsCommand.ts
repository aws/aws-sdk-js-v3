// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AccessAnalyzerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccessAnalyzerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateFindingsRequest } from "../models/models_0";
import { de_UpdateFindingsCommand, se_UpdateFindingsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateFindingsCommand}.
 */
export interface UpdateFindingsCommandInput extends UpdateFindingsRequest {}
/**
 * @public
 *
 * The output of {@link UpdateFindingsCommand}.
 */
export interface UpdateFindingsCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates the status for the specified findings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, UpdateFindingsCommand } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, UpdateFindingsCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * // import type { AccessAnalyzerClientConfig } from "@aws-sdk/client-accessanalyzer";
 * const config = {}; // type is AccessAnalyzerClientConfig
 * const client = new AccessAnalyzerClient(config);
 * const input = { // UpdateFindingsRequest
 *   analyzerArn: "STRING_VALUE", // required
 *   status: "STRING_VALUE", // required
 *   ids: [ // FindingIdList
 *     "STRING_VALUE",
 *   ],
 *   resourceArn: "STRING_VALUE",
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new UpdateFindingsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateFindingsCommandInput - {@link UpdateFindingsCommandInput}
 * @returns {@link UpdateFindingsCommandOutput}
 * @see {@link UpdateFindingsCommandInput} for command's `input` shape.
 * @see {@link UpdateFindingsCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class UpdateFindingsCommand extends $Command
  .classBuilder<
    UpdateFindingsCommandInput,
    UpdateFindingsCommandOutput,
    AccessAnalyzerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AccessAnalyzerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AccessAnalyzer", "UpdateFindings", {})
  .n("AccessAnalyzerClient", "UpdateFindingsCommand")
  .f(void 0, void 0)
  .ser(se_UpdateFindingsCommand)
  .de(de_UpdateFindingsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateFindingsRequest;
      output: {};
    };
    sdk: {
      input: UpdateFindingsCommandInput;
      output: UpdateFindingsCommandOutput;
    };
  };
}
