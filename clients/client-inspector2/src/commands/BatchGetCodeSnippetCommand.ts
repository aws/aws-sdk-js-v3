// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { Inspector2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Inspector2Client";
import { BatchGetCodeSnippetRequest, BatchGetCodeSnippetResponse } from "../models/models_0";
import { de_BatchGetCodeSnippetCommand, se_BatchGetCodeSnippetCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
 * <p>Retrieves code snippets from findings that Amazon Inspector detected code vulnerabilities in.</p>
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
 */
export class BatchGetCodeSnippetCommand extends $Command<
  BatchGetCodeSnippetCommandInput,
  BatchGetCodeSnippetCommandOutput,
  Inspector2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: BatchGetCodeSnippetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Inspector2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchGetCodeSnippetCommandInput, BatchGetCodeSnippetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchGetCodeSnippetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Inspector2Client";
    const commandName = "BatchGetCodeSnippetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: BatchGetCodeSnippetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BatchGetCodeSnippetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchGetCodeSnippetCommandOutput> {
    return de_BatchGetCodeSnippetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
