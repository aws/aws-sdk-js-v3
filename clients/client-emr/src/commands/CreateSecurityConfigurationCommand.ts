import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { CreateSecurityConfigurationInput, CreateSecurityConfigurationOutput } from "../models/models_0";
import {
  deserializeAws_json1_1CreateSecurityConfigurationCommand,
  serializeAws_json1_1CreateSecurityConfigurationCommand,
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

export interface CreateSecurityConfigurationCommandInput extends CreateSecurityConfigurationInput {}
export interface CreateSecurityConfigurationCommandOutput extends CreateSecurityConfigurationOutput, __MetadataBearer {}

/**
 * <p>Creates a security configuration, which is stored in the service and can be specified
 *          when a cluster is created.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, CreateSecurityConfigurationCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, CreateSecurityConfigurationCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new CreateSecurityConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSecurityConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateSecurityConfigurationCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateSecurityConfigurationCommand extends $Command<
  CreateSecurityConfigurationCommandInput,
  CreateSecurityConfigurationCommandOutput,
  EMRClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateSecurityConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EMRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateSecurityConfigurationCommandInput, CreateSecurityConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRClient";
    const commandName = "CreateSecurityConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateSecurityConfigurationInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateSecurityConfigurationOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateSecurityConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateSecurityConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateSecurityConfigurationCommandOutput> {
    return deserializeAws_json1_1CreateSecurityConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
