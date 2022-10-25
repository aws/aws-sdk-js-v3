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

import { AppConfigClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppConfigClient";
import {
  DeleteHostedConfigurationVersionRequest,
  DeleteHostedConfigurationVersionRequestFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DeleteHostedConfigurationVersionCommand,
  serializeAws_restJson1DeleteHostedConfigurationVersionCommand,
} from "../protocols/Aws_restJson1";

export interface DeleteHostedConfigurationVersionCommandInput extends DeleteHostedConfigurationVersionRequest {}
export interface DeleteHostedConfigurationVersionCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a version of a configuration from the AppConfig hosted configuration
 *          store.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, DeleteHostedConfigurationVersionCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, DeleteHostedConfigurationVersionCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * const client = new AppConfigClient(config);
 * const command = new DeleteHostedConfigurationVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteHostedConfigurationVersionCommandInput} for command's `input` shape.
 * @see {@link DeleteHostedConfigurationVersionCommandOutput} for command's `response` shape.
 * @see {@link AppConfigClientResolvedConfig | config} for AppConfigClient's `config` shape.
 *
 */
export class DeleteHostedConfigurationVersionCommand extends $Command<
  DeleteHostedConfigurationVersionCommandInput,
  DeleteHostedConfigurationVersionCommandOutput,
  AppConfigClientResolvedConfig
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

  constructor(readonly input: DeleteHostedConfigurationVersionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppConfigClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteHostedConfigurationVersionCommandInput, DeleteHostedConfigurationVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteHostedConfigurationVersionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppConfigClient";
    const commandName = "DeleteHostedConfigurationVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteHostedConfigurationVersionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteHostedConfigurationVersionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteHostedConfigurationVersionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteHostedConfigurationVersionCommandOutput> {
    return deserializeAws_restJson1DeleteHostedConfigurationVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
