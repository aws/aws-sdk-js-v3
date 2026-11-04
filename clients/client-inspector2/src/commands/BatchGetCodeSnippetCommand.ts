// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BatchGetCodeSnippetRequest, BatchGetCodeSnippetResponse } from "../models/models_0";
import { BatchGetCodeSnippet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Retrieves code snippets from findings that Amazon Inspector detected code vulnerabilities in.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, BatchGetCodeSnippetCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, BatchGetCodeSnippetCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * // import type { Inspector2ClientConfig } from "@aws-sdk/client-inspector2";
 * const config = {}; // type is Inspector2ClientConfig
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
 *
 * You do not have sufficient access to perform this action.
 *
 * For `Enable`, you receive this error if you attempt to use a feature in an unsupported Amazon Web Services Region.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed due to an internal failure of the Amazon Inspector service.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The limit on the number of requests per second was exceeded.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request has failed validation due to missing required fields or having invalid inputs.
 *
 * @throws {@link Inspector2ServiceException}
 *
 * Base exception class for all service exceptions from Inspector2 service.
 *
 * @public
 */
export class BatchGetCodeSnippetCommand extends command<BatchGetCodeSnippetCommandInput, BatchGetCodeSnippetCommandOutput>(
  _ep0,
  _mw0,
  "BatchGetCodeSnippet",
  BatchGetCodeSnippet$
) {
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
