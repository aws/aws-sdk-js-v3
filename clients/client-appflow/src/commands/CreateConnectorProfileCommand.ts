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

import { AppflowClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppflowClient";
import {
  CreateConnectorProfileRequest,
  CreateConnectorProfileRequestFilterSensitiveLog,
  CreateConnectorProfileResponse,
  CreateConnectorProfileResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateConnectorProfileCommand,
  serializeAws_restJson1CreateConnectorProfileCommand,
} from "../protocols/Aws_restJson1";

export interface CreateConnectorProfileCommandInput extends CreateConnectorProfileRequest {}
export interface CreateConnectorProfileCommandOutput extends CreateConnectorProfileResponse, __MetadataBearer {}

/**
 * <p> Creates a new connector profile associated with your Amazon Web Services account. There
 *       is a soft quota of 100 connector profiles per Amazon Web Services account. If you need more
 *       connector profiles than this quota allows, you can submit a request to the Amazon AppFlow team through the Amazon AppFlow support channel. In each connector profile that you
 *       create, you can provide the credentials and properties for only one connector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppflowClient, CreateConnectorProfileCommand } from "@aws-sdk/client-appflow"; // ES Modules import
 * // const { AppflowClient, CreateConnectorProfileCommand } = require("@aws-sdk/client-appflow"); // CommonJS import
 * const client = new AppflowClient(config);
 * const command = new CreateConnectorProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateConnectorProfileCommandInput} for command's `input` shape.
 * @see {@link CreateConnectorProfileCommandOutput} for command's `response` shape.
 * @see {@link AppflowClientResolvedConfig | config} for AppflowClient's `config` shape.
 *
 */
export class CreateConnectorProfileCommand extends $Command<
  CreateConnectorProfileCommandInput,
  CreateConnectorProfileCommandOutput,
  AppflowClientResolvedConfig
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

  constructor(readonly input: CreateConnectorProfileCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppflowClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateConnectorProfileCommandInput, CreateConnectorProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateConnectorProfileCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppflowClient";
    const commandName = "CreateConnectorProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateConnectorProfileRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateConnectorProfileResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateConnectorProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateConnectorProfileCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateConnectorProfileCommandOutput> {
    return deserializeAws_restJson1CreateConnectorProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
