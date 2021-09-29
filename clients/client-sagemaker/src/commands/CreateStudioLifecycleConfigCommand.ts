import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { CreateStudioLifecycleConfigRequest, CreateStudioLifecycleConfigResponse } from "../models/models_1";
import {
  deserializeAws_json1_1CreateStudioLifecycleConfigCommand,
  serializeAws_json1_1CreateStudioLifecycleConfigCommand,
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

export interface CreateStudioLifecycleConfigCommandInput extends CreateStudioLifecycleConfigRequest {}
export interface CreateStudioLifecycleConfigCommandOutput
  extends CreateStudioLifecycleConfigResponse,
    __MetadataBearer {}

/**
 * <p>Creates a new Studio Lifecycle Configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateStudioLifecycleConfigCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateStudioLifecycleConfigCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new CreateStudioLifecycleConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateStudioLifecycleConfigCommandInput} for command's `input` shape.
 * @see {@link CreateStudioLifecycleConfigCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateStudioLifecycleConfigCommand extends $Command<
  CreateStudioLifecycleConfigCommandInput,
  CreateStudioLifecycleConfigCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateStudioLifecycleConfigCommandInput) {
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
  ): Handler<CreateStudioLifecycleConfigCommandInput, CreateStudioLifecycleConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "CreateStudioLifecycleConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateStudioLifecycleConfigRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateStudioLifecycleConfigResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateStudioLifecycleConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateStudioLifecycleConfigCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateStudioLifecycleConfigCommandOutput> {
    return deserializeAws_json1_1CreateStudioLifecycleConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
