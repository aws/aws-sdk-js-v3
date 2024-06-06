// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AccessAnalyzerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccessAnalyzerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  CheckAccessNotGrantedRequest,
  CheckAccessNotGrantedRequestFilterSensitiveLog,
  CheckAccessNotGrantedResponse,
} from "../models/models_0";
import { de_CheckAccessNotGrantedCommand, se_CheckAccessNotGrantedCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CheckAccessNotGrantedCommand}.
 */
export interface CheckAccessNotGrantedCommandInput extends CheckAccessNotGrantedRequest {}
/**
 * @public
 *
 * The output of {@link CheckAccessNotGrantedCommand}.
 */
export interface CheckAccessNotGrantedCommandOutput extends CheckAccessNotGrantedResponse, __MetadataBearer {}

/**
 * <p>Checks whether the specified access isn't allowed by a policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, CheckAccessNotGrantedCommand } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, CheckAccessNotGrantedCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * const client = new AccessAnalyzerClient(config);
 * const input = { // CheckAccessNotGrantedRequest
 *   policyDocument: "STRING_VALUE", // required
 *   access: [ // AccessList // required
 *     { // Access
 *       actions: [ // ActionsList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   policyType: "STRING_VALUE", // required
 * };
 * const command = new CheckAccessNotGrantedCommand(input);
 * const response = await client.send(command);
 * // { // CheckAccessNotGrantedResponse
 * //   result: "STRING_VALUE",
 * //   message: "STRING_VALUE",
 * //   reasons: [ // ReasonSummaryList
 * //     { // ReasonSummary
 * //       description: "STRING_VALUE",
 * //       statementIndex: Number("int"),
 * //       statementId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param CheckAccessNotGrantedCommandInput - {@link CheckAccessNotGrantedCommandInput}
 * @returns {@link CheckAccessNotGrantedCommandOutput}
 * @see {@link CheckAccessNotGrantedCommandInput} for command's `input` shape.
 * @see {@link CheckAccessNotGrantedCommandOutput} for command's `response` shape.
 * @see {@link AccessAnalyzerClientResolvedConfig | config} for AccessAnalyzerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Throttling limit exceeded error.</p>
 *
 * @throws {@link UnprocessableEntityException} (client fault)
 *  <p>The specified entity could not be processed.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validation exception error.</p>
 *
 * @throws {@link AccessAnalyzerServiceException}
 * <p>Base exception class for all service exceptions from AccessAnalyzer service.</p>
 *
 * @public
 */
export class CheckAccessNotGrantedCommand extends $Command
  .classBuilder<
    CheckAccessNotGrantedCommandInput,
    CheckAccessNotGrantedCommandOutput,
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
  .s("AccessAnalyzer", "CheckAccessNotGranted", {})
  .n("AccessAnalyzerClient", "CheckAccessNotGrantedCommand")
  .f(CheckAccessNotGrantedRequestFilterSensitiveLog, void 0)
  .ser(se_CheckAccessNotGrantedCommand)
  .de(de_CheckAccessNotGrantedCommand)
  .build() {}
