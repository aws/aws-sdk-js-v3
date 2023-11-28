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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import {
  BedrockAgentRuntimeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BedrockAgentRuntimeClient";
import {
  RetrieveAndGenerateRequest,
  RetrieveAndGenerateRequestFilterSensitiveLog,
  RetrieveAndGenerateResponse,
  RetrieveAndGenerateResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_RetrieveAndGenerateCommand, se_RetrieveAndGenerateCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RetrieveAndGenerateCommand}.
 */
export interface RetrieveAndGenerateCommandInput extends RetrieveAndGenerateRequest {}
/**
 * @public
 *
 * The output of {@link RetrieveAndGenerateCommand}.
 */
export interface RetrieveAndGenerateCommandOutput extends RetrieveAndGenerateResponse, __MetadataBearer {}

/**
 * @public
 * RetrieveAndGenerate API
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentRuntimeClient, RetrieveAndGenerateCommand } from "@aws-sdk/client-bedrock-agent-runtime"; // ES Modules import
 * // const { BedrockAgentRuntimeClient, RetrieveAndGenerateCommand } = require("@aws-sdk/client-bedrock-agent-runtime"); // CommonJS import
 * const client = new BedrockAgentRuntimeClient(config);
 * const input = { // RetrieveAndGenerateRequest
 *   sessionId: "STRING_VALUE",
 *   input: { // RetrieveAndGenerateInput
 *     text: "STRING_VALUE", // required
 *   },
 *   retrieveAndGenerateConfiguration: { // RetrieveAndGenerateConfiguration
 *     type: "KNOWLEDGE_BASE", // required
 *     knowledgeBaseConfiguration: { // KnowledgeBaseRetrieveAndGenerateConfiguration
 *       knowledgeBaseId: "STRING_VALUE", // required
 *       modelArn: "STRING_VALUE", // required
 *     },
 *   },
 *   sessionConfiguration: { // RetrieveAndGenerateSessionConfiguration
 *     kmsKeyArn: "STRING_VALUE", // required
 *   },
 * };
 * const command = new RetrieveAndGenerateCommand(input);
 * const response = await client.send(command);
 * // { // RetrieveAndGenerateResponse
 * //   sessionId: "STRING_VALUE", // required
 * //   output: { // RetrieveAndGenerateOutput
 * //     text: "STRING_VALUE", // required
 * //   },
 * //   citations: [ // Citations
 * //     { // Citation
 * //       generatedResponsePart: { // GeneratedResponsePart
 * //         textResponsePart: { // TextResponsePart
 * //           text: "STRING_VALUE",
 * //           span: { // Span
 * //             start: Number("int"),
 * //             end: Number("int"),
 * //           },
 * //         },
 * //       },
 * //       retrievedReferences: [ // RetrievedReferences
 * //         { // RetrievedReference
 * //           content: { // RetrievalResultContent
 * //             text: "STRING_VALUE", // required
 * //           },
 * //           location: { // RetrievalResultLocation
 * //             type: "S3", // required
 * //             s3Location: { // RetrievalResultS3Location
 * //               uri: "STRING_VALUE",
 * //             },
 * //           },
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param RetrieveAndGenerateCommandInput - {@link RetrieveAndGenerateCommandInput}
 * @returns {@link RetrieveAndGenerateCommandOutput}
 * @see {@link RetrieveAndGenerateCommandInput} for command's `input` shape.
 * @see {@link RetrieveAndGenerateCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentRuntimeClientResolvedConfig | config} for BedrockAgentRuntimeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  This exception is thrown when a request is denied per access permissions
 *
 * @throws {@link BadGatewayException} (server fault)
 *  This exception is thrown when a request fails due to dependency like Lambda, Bedrock, STS resource
 *
 * @throws {@link ConflictException} (client fault)
 *  This exception is thrown when there is a conflict performing an operation
 *
 * @throws {@link DependencyFailedException} (client fault)
 *  This exception is thrown when a request fails due to dependency like Lambda, Bedrock, STS resource due to a customer fault (i.e. bad configuration)
 *
 * @throws {@link InternalServerException} (server fault)
 *  This exception is thrown if there was an unexpected error during processing of request
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  This exception is thrown when a resource referenced by the operation does not exist
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  This exception is thrown when a request is made beyond the service quota
 *
 * @throws {@link ThrottlingException} (client fault)
 *  This exception is thrown when the number of requests exceeds the limit
 *
 * @throws {@link ValidationException} (client fault)
 *  This exception is thrown when the request's input validation fails
 *
 * @throws {@link BedrockAgentRuntimeServiceException}
 * <p>Base exception class for all service exceptions from BedrockAgentRuntime service.</p>
 *
 */
export class RetrieveAndGenerateCommand extends $Command<
  RetrieveAndGenerateCommandInput,
  RetrieveAndGenerateCommandOutput,
  BedrockAgentRuntimeClientResolvedConfig
> {
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
  constructor(readonly input: RetrieveAndGenerateCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BedrockAgentRuntimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RetrieveAndGenerateCommandInput, RetrieveAndGenerateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RetrieveAndGenerateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BedrockAgentRuntimeClient";
    const commandName = "RetrieveAndGenerateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RetrieveAndGenerateRequestFilterSensitiveLog,
      outputFilterSensitiveLog: RetrieveAndGenerateResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonBedrockAgentRunTimeService",
        operation: "RetrieveAndGenerate",
      },
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
  private serialize(input: RetrieveAndGenerateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_RetrieveAndGenerateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RetrieveAndGenerateCommandOutput> {
    return de_RetrieveAndGenerateCommand(output, context);
  }
}
