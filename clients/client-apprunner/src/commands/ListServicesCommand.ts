import { AppRunnerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppRunnerClient";
import { ListServicesRequest, ListServicesResponse } from "../models/models_0";
import {
  deserializeAws_json1_0ListServicesCommand,
  serializeAws_json1_0ListServicesCommand,
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

export interface ListServicesCommandInput extends ListServicesRequest {}
export interface ListServicesCommandOutput extends ListServicesResponse, __MetadataBearer {}

/**
 * <p>Returns a list of running AWS App Runner services in your AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppRunnerClient, ListServicesCommand } from "@aws-sdk/client-apprunner"; // ES Modules import
 * // const { AppRunnerClient, ListServicesCommand } = require("@aws-sdk/client-apprunner"); // CommonJS import
 * const client = new AppRunnerClient(config);
 * const command = new ListServicesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListServicesCommandInput} for command's `input` shape.
 * @see {@link ListServicesCommandOutput} for command's `response` shape.
 * @see {@link AppRunnerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListServicesCommand extends $Command<
  ListServicesCommandInput,
  ListServicesCommandOutput,
  AppRunnerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListServicesCommandInput) {
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
  ): Handler<ListServicesCommandInput, ListServicesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppRunnerClient";
    const commandName = "ListServicesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListServicesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListServicesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListServicesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0ListServicesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListServicesCommandOutput> {
    return deserializeAws_json1_0ListServicesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
