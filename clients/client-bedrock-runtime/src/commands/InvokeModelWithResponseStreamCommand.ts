// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  BlobPayloadInputTypes,
  EventStreamSerdeContext as __EventStreamSerdeContext,
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { BedrockRuntimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockRuntimeClient";
import {
  InvokeModelWithResponseStreamRequest,
  InvokeModelWithResponseStreamRequestFilterSensitiveLog,
  InvokeModelWithResponseStreamResponse,
  InvokeModelWithResponseStreamResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  de_InvokeModelWithResponseStreamCommand,
  se_InvokeModelWithResponseStreamCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 */
export type InvokeModelWithResponseStreamCommandInputType = Omit<InvokeModelWithResponseStreamRequest, "body"> & {
  body: BlobPayloadInputTypes;
};

/**
 * @public
 *
 * The input for {@link InvokeModelWithResponseStreamCommand}.
 */
export interface InvokeModelWithResponseStreamCommandInput extends InvokeModelWithResponseStreamCommandInputType {}
/**
 * @public
 *
 * The output of {@link InvokeModelWithResponseStreamCommand}.
 */
export interface InvokeModelWithResponseStreamCommandOutput
  extends InvokeModelWithResponseStreamResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Invoke the specified Bedrock model to run inference using the input provided.
 *       Return the response in a stream.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/api-methods-run.html">Run inference</a> in the Bedrock User Guide.</p>
 *          <p>For an example request and response, see Examples (after the Errors section).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockRuntimeClient, InvokeModelWithResponseStreamCommand } from "@aws-sdk/client-bedrock-runtime"; // ES Modules import
 * // const { BedrockRuntimeClient, InvokeModelWithResponseStreamCommand } = require("@aws-sdk/client-bedrock-runtime"); // CommonJS import
 * const client = new BedrockRuntimeClient(config);
 * const input = { // InvokeModelWithResponseStreamRequest
 *   body: "BLOB_VALUE", // required
 *   contentType: "STRING_VALUE",
 *   accept: "STRING_VALUE",
 *   modelId: "STRING_VALUE", // required
 * };
 * const command = new InvokeModelWithResponseStreamCommand(input);
 * const response = await client.send(command);
 * // { // InvokeModelWithResponseStreamResponse
 * //   body: { // ResponseStream Union: only one key present
 * //     chunk: { // PayloadPart
 * //       bytes: "BLOB_VALUE",
 * //     },
 * //     internalServerException: { // InternalServerException
 * //       message: "STRING_VALUE",
 * //     },
 * //     modelStreamErrorException: { // ModelStreamErrorException
 * //       message: "STRING_VALUE",
 * //       originalStatusCode: Number("int"),
 * //       originalMessage: "STRING_VALUE",
 * //     },
 * //     validationException: { // ValidationException
 * //       message: "STRING_VALUE",
 * //     },
 * //     throttlingException: { // ThrottlingException
 * //       message: "STRING_VALUE",
 * //     },
 * //     modelTimeoutException: { // ModelTimeoutException
 * //       message: "STRING_VALUE",
 * //     },
 * //   },
 * //   contentType: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param InvokeModelWithResponseStreamCommandInput - {@link InvokeModelWithResponseStreamCommandInput}
 * @returns {@link InvokeModelWithResponseStreamCommandOutput}
 * @see {@link InvokeModelWithResponseStreamCommandInput} for command's `input` shape.
 * @see {@link InvokeModelWithResponseStreamCommandOutput} for command's `response` shape.
 * @see {@link BedrockRuntimeClientResolvedConfig | config} for BedrockRuntimeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because of missing access permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ModelErrorException} (client fault)
 *  <p>The request failed due to an error while processing the model.</p>
 *
 * @throws {@link ModelNotReadyException} (client fault)
 *  <p>The model specified in the request is not ready to serve inference requests.</p>
 *
 * @throws {@link ModelStreamErrorException} (client fault)
 *  <p>An error occurred while streaming the response.</p>
 *
 * @throws {@link ModelTimeoutException} (client fault)
 *  <p>The request took too long to process. Processing time exceeded the model timeout length.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource ARN was not found. Check the ARN and try your request again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The number of requests exceeds the service quota. Resubmit your request later.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Input validation failed. Check your request parameters and retry the request.</p>
 *
 * @throws {@link BedrockRuntimeServiceException}
 * <p>Base exception class for all service exceptions from BedrockRuntime service.</p>
 *
 */
export class InvokeModelWithResponseStreamCommand extends $Command<
  InvokeModelWithResponseStreamCommandInput,
  InvokeModelWithResponseStreamCommandOutput,
  BedrockRuntimeClientResolvedConfig
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
  constructor(readonly input: InvokeModelWithResponseStreamCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BedrockRuntimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<InvokeModelWithResponseStreamCommandInput, InvokeModelWithResponseStreamCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, InvokeModelWithResponseStreamCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BedrockRuntimeClient";
    const commandName = "InvokeModelWithResponseStreamCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: InvokeModelWithResponseStreamRequestFilterSensitiveLog,
      outputFilterSensitiveLog: InvokeModelWithResponseStreamResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonBedrockFrontendService",
        operation: "InvokeModelWithResponseStream",
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
  private serialize(input: InvokeModelWithResponseStreamCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_InvokeModelWithResponseStreamCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext & __EventStreamSerdeContext
  ): Promise<InvokeModelWithResponseStreamCommandOutput> {
    return de_InvokeModelWithResponseStreamCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
