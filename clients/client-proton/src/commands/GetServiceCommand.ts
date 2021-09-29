import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";
import { GetServiceInput, GetServiceOutput } from "../models/models_0";
import {
  deserializeAws_json1_0GetServiceCommand,
  serializeAws_json1_0GetServiceCommand,
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

export interface GetServiceCommandInput extends GetServiceInput {}
export interface GetServiceCommandOutput extends GetServiceOutput, __MetadataBearer {}

/**
 * <p>Get detail data for a service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, GetServiceCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, GetServiceCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * const client = new ProtonClient(config);
 * const command = new GetServiceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetServiceCommandInput} for command's `input` shape.
 * @see {@link GetServiceCommandOutput} for command's `response` shape.
 * @see {@link ProtonClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetServiceCommand extends $Command<
  GetServiceCommandInput,
  GetServiceCommandOutput,
  ProtonClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetServiceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ProtonClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetServiceCommandInput, GetServiceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ProtonClient";
    const commandName = "GetServiceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetServiceInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetServiceOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetServiceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0GetServiceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetServiceCommandOutput> {
    return deserializeAws_json1_0GetServiceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
