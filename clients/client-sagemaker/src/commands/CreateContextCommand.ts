import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { CreateContextRequest, CreateContextResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateContextCommand,
  serializeAws_json1_1CreateContextCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface CreateContextCommandInput extends CreateContextRequest {}
export interface CreateContextCommandOutput extends CreateContextResponse, __MetadataBearer {}

/**
 * <p>Creates a <i>context</i>. A context is a lineage tracking entity that
 *         represents a logical grouping of other tracking or experiment entities. Some examples are
 *         an endpoint and a model package. For more information, see
 *         <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/lineage-tracking.html">Amazon SageMaker
 *           ML Lineage Tracking</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateContextCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateContextCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new CreateContextCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateContextCommandInput} for command's `input` shape.
 * @see {@link CreateContextCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateContextCommand extends $Command<
  CreateContextCommandInput,
  CreateContextCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateContextCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateContextCommandInput, CreateContextCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "CreateContextCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateContextRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateContextResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateContextCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateContextCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateContextCommandOutput> {
    return deserializeAws_json1_1CreateContextCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
