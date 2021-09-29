import { AppRunnerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppRunnerClient";
import { ListAutoScalingConfigurationsRequest, ListAutoScalingConfigurationsResponse } from "../models/models_0";
import {
  deserializeAws_json1_0ListAutoScalingConfigurationsCommand,
  serializeAws_json1_0ListAutoScalingConfigurationsCommand,
} from "../protocols/Aws_json1_0";
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

export interface ListAutoScalingConfigurationsCommandInput extends ListAutoScalingConfigurationsRequest {}
export interface ListAutoScalingConfigurationsCommandOutput
  extends ListAutoScalingConfigurationsResponse,
    __MetadataBearer {}

/**
 * <p>Returns a list of AWS App Runner automatic scaling configurations in your AWS account. You can query the revisions for a specific configuration name or
 *       the revisions for all configurations in your account. You can optionally query only the latest revision of each requested name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppRunnerClient, ListAutoScalingConfigurationsCommand } from "@aws-sdk/client-apprunner"; // ES Modules import
 * // const { AppRunnerClient, ListAutoScalingConfigurationsCommand } = require("@aws-sdk/client-apprunner"); // CommonJS import
 * const client = new AppRunnerClient(config);
 * const command = new ListAutoScalingConfigurationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAutoScalingConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListAutoScalingConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link AppRunnerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListAutoScalingConfigurationsCommand extends $Command<
  ListAutoScalingConfigurationsCommandInput,
  ListAutoScalingConfigurationsCommandOutput,
  AppRunnerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListAutoScalingConfigurationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppRunnerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAutoScalingConfigurationsCommandInput, ListAutoScalingConfigurationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppRunnerClient";
    const commandName = "ListAutoScalingConfigurationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAutoScalingConfigurationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListAutoScalingConfigurationsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListAutoScalingConfigurationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0ListAutoScalingConfigurationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListAutoScalingConfigurationsCommandOutput> {
    return deserializeAws_json1_0ListAutoScalingConfigurationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
