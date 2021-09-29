import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";
import { GetServiceInstanceInput, GetServiceInstanceOutput } from "../models/models_0";
import {
  deserializeAws_json1_0GetServiceInstanceCommand,
  serializeAws_json1_0GetServiceInstanceCommand,
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

export interface GetServiceInstanceCommandInput extends GetServiceInstanceInput {}
export interface GetServiceInstanceCommandOutput extends GetServiceInstanceOutput, __MetadataBearer {}

/**
 * <p>Get detail data for a service instance. A service instance is an instantiation of service template, which is running in a specific
 *             environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, GetServiceInstanceCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, GetServiceInstanceCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * const client = new ProtonClient(config);
 * const command = new GetServiceInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetServiceInstanceCommandInput} for command's `input` shape.
 * @see {@link GetServiceInstanceCommandOutput} for command's `response` shape.
 * @see {@link ProtonClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetServiceInstanceCommand extends $Command<
  GetServiceInstanceCommandInput,
  GetServiceInstanceCommandOutput,
  ProtonClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetServiceInstanceCommandInput) {
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
  ): Handler<GetServiceInstanceCommandInput, GetServiceInstanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ProtonClient";
    const commandName = "GetServiceInstanceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetServiceInstanceInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetServiceInstanceOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetServiceInstanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0GetServiceInstanceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetServiceInstanceCommandOutput> {
    return deserializeAws_json1_0GetServiceInstanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
