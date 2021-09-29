import { AppConfigClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppConfigClient";
import { HostedConfigurationVersions, ListHostedConfigurationVersionsRequest } from "../models/models_0";
import {
  deserializeAws_restJson1ListHostedConfigurationVersionsCommand,
  serializeAws_restJson1ListHostedConfigurationVersionsCommand,
} from "../protocols/Aws_restJson1";
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

export interface ListHostedConfigurationVersionsCommandInput extends ListHostedConfigurationVersionsRequest {}
export interface ListHostedConfigurationVersionsCommandOutput extends HostedConfigurationVersions, __MetadataBearer {}

/**
 * <p>View a list of configurations stored in the AppConfig configuration store by
 *          version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, ListHostedConfigurationVersionsCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, ListHostedConfigurationVersionsCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * const client = new AppConfigClient(config);
 * const command = new ListHostedConfigurationVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListHostedConfigurationVersionsCommandInput} for command's `input` shape.
 * @see {@link ListHostedConfigurationVersionsCommandOutput} for command's `response` shape.
 * @see {@link AppConfigClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListHostedConfigurationVersionsCommand extends $Command<
  ListHostedConfigurationVersionsCommandInput,
  ListHostedConfigurationVersionsCommandOutput,
  AppConfigClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListHostedConfigurationVersionsCommandInput) {
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
  ): Handler<ListHostedConfigurationVersionsCommandInput, ListHostedConfigurationVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppConfigClient";
    const commandName = "ListHostedConfigurationVersionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListHostedConfigurationVersionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: HostedConfigurationVersions.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListHostedConfigurationVersionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListHostedConfigurationVersionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListHostedConfigurationVersionsCommandOutput> {
    return deserializeAws_restJson1ListHostedConfigurationVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
