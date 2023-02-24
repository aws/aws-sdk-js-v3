// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { ECRPUBLICClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRPUBLICClient";
import {
  InitiateLayerUploadRequest,
  InitiateLayerUploadRequestFilterSensitiveLog,
  InitiateLayerUploadResponse,
  InitiateLayerUploadResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1InitiateLayerUploadCommand,
  serializeAws_json1_1InitiateLayerUploadCommand,
} from "../protocols/Aws_json1_1";

export interface InitiateLayerUploadCommandInput extends InitiateLayerUploadRequest {}
export interface InitiateLayerUploadCommandOutput extends InitiateLayerUploadResponse, __MetadataBearer {}

/**
 * <p>Notifies Amazon ECR that you intend to upload an image layer.</p>
 *          <p>When an image is pushed, the InitiateLayerUpload API is called once for each image layer
 *          that hasn't already been uploaded. Whether an image layer uploads is determined by the
 *          BatchCheckLayerAvailability API action.</p>
 *          <note>
 *             <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRPUBLICClient, InitiateLayerUploadCommand } from "@aws-sdk/client-ecr-public"; // ES Modules import
 * // const { ECRPUBLICClient, InitiateLayerUploadCommand } = require("@aws-sdk/client-ecr-public"); // CommonJS import
 * const client = new ECRPUBLICClient(config);
 * const command = new InitiateLayerUploadCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link InitiateLayerUploadCommandInput} for command's `input` shape.
 * @see {@link InitiateLayerUploadCommandOutput} for command's `response` shape.
 * @see {@link ECRPUBLICClientResolvedConfig | config} for ECRPUBLICClient's `config` shape.
 *
 */
export class InitiateLayerUploadCommand extends $Command<
  InitiateLayerUploadCommandInput,
  InitiateLayerUploadCommandOutput,
  ECRPUBLICClientResolvedConfig
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

  constructor(readonly input: InitiateLayerUploadCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECRPUBLICClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<InitiateLayerUploadCommandInput, InitiateLayerUploadCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, InitiateLayerUploadCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECRPUBLICClient";
    const commandName = "InitiateLayerUploadCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: InitiateLayerUploadRequestFilterSensitiveLog,
      outputFilterSensitiveLog: InitiateLayerUploadResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: InitiateLayerUploadCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1InitiateLayerUploadCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<InitiateLayerUploadCommandOutput> {
    return deserializeAws_json1_1InitiateLayerUploadCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
