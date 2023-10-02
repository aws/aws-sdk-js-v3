// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  BlobPayloadInputTypes,
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";
import { Uint8ArrayBlobAdapter } from "@smithy/util-stream";

import { BedrockRuntimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockRuntimeClient";
import {
  InvokeModelRequest,
  InvokeModelRequestFilterSensitiveLog,
  InvokeModelResponse,
  InvokeModelResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_InvokeModelCommand, se_InvokeModelCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 */
export type InvokeModelCommandInputType = Omit<InvokeModelRequest, "body"> & {
  body: BlobPayloadInputTypes;
};

/**
 * @public
 *
 * The input for {@link InvokeModelCommand}.
 */
export interface InvokeModelCommandInput extends InvokeModelCommandInputType {}
/**
 * @public
 */
export type InvokeModelCommandOutputType = Omit<InvokeModelResponse, "body"> & {
  body: Uint8ArrayBlobAdapter;
};

/**
 * @public
 *
 * The output of {@link InvokeModelCommand}.
 */
export interface InvokeModelCommandOutput extends InvokeModelCommandOutputType, __MetadataBearer {}

/**
 * @public
 * <p>Invokes the specified Bedrock model to run inference using the input provided in the request body.
 *          You use InvokeModel to run inference for text models, image models, and embedding models.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/api-methods-run.html">Run inference</a> in the Bedrock User Guide.</p>
 *          <p>For example requests, see Examples (after the Errors section).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockRuntimeClient, InvokeModelCommand } from "@aws-sdk/client-bedrock-runtime"; // ES Modules import
 * // const { BedrockRuntimeClient, InvokeModelCommand } = require("@aws-sdk/client-bedrock-runtime"); // CommonJS import
 * const client = new BedrockRuntimeClient(config);
 * const input = { // InvokeModelRequest
 *   body: "BLOB_VALUE", // required
 *   contentType: "STRING_VALUE",
 *   accept: "STRING_VALUE",
 *   modelId: "STRING_VALUE", // required
 * };
 * const command = new InvokeModelCommand(input);
 * const response = await client.send(command);
 * // { // InvokeModelResponse
 * //   body: "BLOB_VALUE", // required
 * //   contentType: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param InvokeModelCommandInput - {@link InvokeModelCommandInput}
 * @returns {@link InvokeModelCommandOutput}
 * @see {@link InvokeModelCommandInput} for command's `input` shape.
 * @see {@link InvokeModelCommandOutput} for command's `response` shape.
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
export class InvokeModelCommand extends $Command<
  InvokeModelCommandInput,
  InvokeModelCommandOutput,
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
  constructor(readonly input: InvokeModelCommandInput) {
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
  ): Handler<InvokeModelCommandInput, InvokeModelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, InvokeModelCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BedrockRuntimeClient";
    const commandName = "InvokeModelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: InvokeModelRequestFilterSensitiveLog,
      outputFilterSensitiveLog: InvokeModelResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonBedrockFrontendService",
        operation: "InvokeModel",
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
  private serialize(input: InvokeModelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_InvokeModelCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<InvokeModelCommandOutput> {
    return de_InvokeModelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
