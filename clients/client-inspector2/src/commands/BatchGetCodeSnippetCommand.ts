// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { Inspector2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Inspector2Client";
import { BatchGetCodeSnippetRequest, BatchGetCodeSnippetResponse } from "../models/models_0";
import { de_BatchGetCodeSnippetCommand, se_BatchGetCodeSnippetCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchGetCodeSnippetCommand}.
 */
export interface BatchGetCodeSnippetCommandInput extends BatchGetCodeSnippetRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetCodeSnippetCommand}.
 */
export interface BatchGetCodeSnippetCommandOutput extends BatchGetCodeSnippetResponse, __MetadataBearer {}

/**
 * <p>Retrieves code snippets from findings that Amazon Inspector detected code vulnerabilities
 *          in.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, BatchGetCodeSnippetCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, BatchGetCodeSnippetCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * const client = new Inspector2Client(config);
 * const input = { // BatchGetCodeSnippetRequest
 *   findingArns: [ // FindingArns // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetCodeSnippetCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetCodeSnippetResponse
 * //   codeSnippetResults: [ // CodeSnippetResultList
 * //     { // CodeSnippetResult
 * //       findingArn: "STRING_VALUE",
 * //       startLine: Number("int"),
 * //       endLine: Number("int"),
 * //       codeSnippet: [ // CodeLineList
 * //         { // CodeLine
 * //           content: "STRING_VALUE", // required
 * //           lineNumber: Number("int"), // required
 * //         },
 * //       ],
 * //       suggestedFixes: [ // SuggestedFixes
 * //         { // SuggestedFix
 * //           description: "STRING_VALUE",
 * //           code: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   errors: [ // CodeSnippetErrorList
 * //     { // CodeSnippetError
 * //       findingArn: "STRING_VALUE", // required
 * //       errorCode: "STRING_VALUE", // required
 * //       errorMessage: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetCodeSnippetCommandInput - {@link BatchGetCodeSnippetCommandInput}
 * @returns {@link BatchGetCodeSnippetCommandOutput}
 * @see {@link BatchGetCodeSnippetCommandInput} for command's `input` shape.
 * @see {@link BatchGetCodeSnippetCommandOutput} for command's `response` shape.
 * @see {@link Inspector2ClientResolvedConfig | config} for Inspector2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *          <p> For <code>Enable</code>, you receive this error if you attempt to use a feature in an
 *          unsupported Amazon Web Services Region. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal failure of the Amazon Inspector service.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation due to missing required fields or having invalid
 *          inputs.</p>
 *
 * @throws {@link Inspector2ServiceException}
 * <p>Base exception class for all service exceptions from Inspector2 service.</p>
 *
 *
 * @public
 */
export class BatchGetCodeSnippetCommand extends $Command
  .classBuilder<
    BatchGetCodeSnippetCommandInput,
    BatchGetCodeSnippetCommandOutput,
    Inspector2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Inspector2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Inspector2", "BatchGetCodeSnippet", {})
  .n("Inspector2Client", "BatchGetCodeSnippetCommand")
  .f(void 0, void 0)
  .ser(se_BatchGetCodeSnippetCommand)
  .de(de_BatchGetCodeSnippetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetCodeSnippetRequest;
      output: BatchGetCodeSnippetResponse;
    };
    sdk: {
      input: BatchGetCodeSnippetCommandInput;
      output: BatchGetCodeSnippetCommandOutput;
    };
  };
}
