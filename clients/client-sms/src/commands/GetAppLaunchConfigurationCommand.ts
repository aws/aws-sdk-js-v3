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

import {
  GetAppLaunchConfigurationRequest,
  GetAppLaunchConfigurationRequestFilterSensitiveLog,
  GetAppLaunchConfigurationResponse,
  GetAppLaunchConfigurationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetAppLaunchConfigurationCommand,
  serializeAws_json1_1GetAppLaunchConfigurationCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SMSClientResolvedConfig } from "../SMSClient";

export interface GetAppLaunchConfigurationCommandInput extends GetAppLaunchConfigurationRequest {}
export interface GetAppLaunchConfigurationCommandOutput extends GetAppLaunchConfigurationResponse, __MetadataBearer {}

/**
 * <p>Retrieves the application launch configuration associated with the specified application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, GetAppLaunchConfigurationCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, GetAppLaunchConfigurationCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const command = new GetAppLaunchConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAppLaunchConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetAppLaunchConfigurationCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for SMSClient's `config` shape.
 *
 */
export class GetAppLaunchConfigurationCommand extends $Command<
  GetAppLaunchConfigurationCommandInput,
  GetAppLaunchConfigurationCommandOutput,
  SMSClientResolvedConfig
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

  constructor(readonly input: GetAppLaunchConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetAppLaunchConfigurationCommandInput, GetAppLaunchConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetAppLaunchConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SMSClient";
    const commandName = "GetAppLaunchConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetAppLaunchConfigurationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetAppLaunchConfigurationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetAppLaunchConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetAppLaunchConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetAppLaunchConfigurationCommandOutput> {
    return deserializeAws_json1_1GetAppLaunchConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
