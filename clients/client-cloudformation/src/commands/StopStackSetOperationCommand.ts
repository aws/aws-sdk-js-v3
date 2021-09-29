import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { StopStackSetOperationInput, StopStackSetOperationOutput } from "../models/models_0";
import {
  deserializeAws_queryStopStackSetOperationCommand,
  serializeAws_queryStopStackSetOperationCommand,
} from "../protocols/Aws_query";
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

export interface StopStackSetOperationCommandInput extends StopStackSetOperationInput {}
export interface StopStackSetOperationCommandOutput extends StopStackSetOperationOutput, __MetadataBearer {}

/**
 * <p>Stops an in-progress operation on a stack set and its associated stack instances. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, StopStackSetOperationCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, StopStackSetOperationCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new StopStackSetOperationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopStackSetOperationCommandInput} for command's `input` shape.
 * @see {@link StopStackSetOperationCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class StopStackSetOperationCommand extends $Command<
  StopStackSetOperationCommandInput,
  StopStackSetOperationCommandOutput,
  CloudFormationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StopStackSetOperationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StopStackSetOperationCommandInput, StopStackSetOperationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "StopStackSetOperationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopStackSetOperationInput.filterSensitiveLog,
      outputFilterSensitiveLog: StopStackSetOperationOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StopStackSetOperationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryStopStackSetOperationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopStackSetOperationCommandOutput> {
    return deserializeAws_queryStopStackSetOperationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
