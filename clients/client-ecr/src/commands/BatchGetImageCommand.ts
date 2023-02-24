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

import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import {
  BatchGetImageRequest,
  BatchGetImageRequestFilterSensitiveLog,
  BatchGetImageResponse,
  BatchGetImageResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1BatchGetImageCommand,
  serializeAws_json1_1BatchGetImageCommand,
} from "../protocols/Aws_json1_1";

export interface BatchGetImageCommandInput extends BatchGetImageRequest {}
export interface BatchGetImageCommandOutput extends BatchGetImageResponse, __MetadataBearer {}

/**
 * <p>Gets detailed information for an image. Images are specified with either an
 *                 <code>imageTag</code> or <code>imageDigest</code>.</p>
 *         <p>When an image is pulled, the BatchGetImage API is called once to retrieve the image
 *             manifest.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, BatchGetImageCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, BatchGetImageCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const command = new BatchGetImageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchGetImageCommandInput} for command's `input` shape.
 * @see {@link BatchGetImageCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for ECRClient's `config` shape.
 *
 */
export class BatchGetImageCommand extends $Command<
  BatchGetImageCommandInput,
  BatchGetImageCommandOutput,
  ECRClientResolvedConfig
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

  constructor(readonly input: BatchGetImageCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchGetImageCommandInput, BatchGetImageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, BatchGetImageCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECRClient";
    const commandName = "BatchGetImageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchGetImageRequestFilterSensitiveLog,
      outputFilterSensitiveLog: BatchGetImageResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchGetImageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1BatchGetImageCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchGetImageCommandOutput> {
    return deserializeAws_json1_1BatchGetImageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
