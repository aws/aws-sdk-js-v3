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
  CreateConfigurationSetTrackingOptionsRequest,
  CreateConfigurationSetTrackingOptionsRequestFilterSensitiveLog,
  CreateConfigurationSetTrackingOptionsResponse,
  CreateConfigurationSetTrackingOptionsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryCreateConfigurationSetTrackingOptionsCommand,
  serializeAws_queryCreateConfigurationSetTrackingOptionsCommand,
} from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";

export interface CreateConfigurationSetTrackingOptionsCommandInput
  extends CreateConfigurationSetTrackingOptionsRequest {}
export interface CreateConfigurationSetTrackingOptionsCommandOutput
  extends CreateConfigurationSetTrackingOptionsResponse,
    __MetadataBearer {}

/**
 * <p>Creates an association between a configuration set and a custom domain for open and
 *             click event tracking. </p>
 *         <p>By default, images and links used for tracking open and click events are hosted on
 *             domains operated by Amazon SES. You can configure a subdomain of your own to handle these
 *             events. For information about using custom domains, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/configure-custom-open-click-domains.html">Amazon SES Developer Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, CreateConfigurationSetTrackingOptionsCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, CreateConfigurationSetTrackingOptionsCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const command = new CreateConfigurationSetTrackingOptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateConfigurationSetTrackingOptionsCommandInput} for command's `input` shape.
 * @see {@link CreateConfigurationSetTrackingOptionsCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 */
export class CreateConfigurationSetTrackingOptionsCommand extends $Command<
  CreateConfigurationSetTrackingOptionsCommandInput,
  CreateConfigurationSetTrackingOptionsCommandOutput,
  SESClientResolvedConfig
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

  constructor(readonly input: CreateConfigurationSetTrackingOptionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateConfigurationSetTrackingOptionsCommandInput, CreateConfigurationSetTrackingOptionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateConfigurationSetTrackingOptionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "CreateConfigurationSetTrackingOptionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateConfigurationSetTrackingOptionsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateConfigurationSetTrackingOptionsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateConfigurationSetTrackingOptionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryCreateConfigurationSetTrackingOptionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateConfigurationSetTrackingOptionsCommandOutput> {
    return deserializeAws_queryCreateConfigurationSetTrackingOptionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
