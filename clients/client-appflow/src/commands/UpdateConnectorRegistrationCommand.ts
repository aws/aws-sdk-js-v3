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
  UpdateConnectorRegistrationRequest,
  UpdateConnectorRegistrationRequestFilterSensitiveLog,
  UpdateConnectorRegistrationResponse,
  UpdateConnectorRegistrationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1UpdateConnectorRegistrationCommand,
  serializeAws_restJson1UpdateConnectorRegistrationCommand,
} from "../protocols/Aws_restJson1";

export interface UpdateConnectorRegistrationCommandInput extends UpdateConnectorRegistrationRequest {}
export interface UpdateConnectorRegistrationCommandOutput
  extends UpdateConnectorRegistrationResponse,
    __MetadataBearer {}

/**
 * <p>Updates a custom connector that you've previously registered. This operation updates the
 *       connector with one of the following:</p>
 *          <ul>
 *             <li>
 *                <p>The latest version of the AWS Lambda function that's assigned to the connector</p>
 *             </li>
 *             <li>
 *                <p>A new AWS Lambda function that you specify</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppflowClient, UpdateConnectorRegistrationCommand } from "@aws-sdk/client-appflow"; // ES Modules import
 * // const { AppflowClient, UpdateConnectorRegistrationCommand } = require("@aws-sdk/client-appflow"); // CommonJS import
 * const client = new AppflowClient(config);
 * const command = new UpdateConnectorRegistrationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateConnectorRegistrationCommandInput} for command's `input` shape.
 * @see {@link UpdateConnectorRegistrationCommandOutput} for command's `response` shape.
 * @see {@link AppflowClientResolvedConfig | config} for AppflowClient's `config` shape.
 *
 */
export class UpdateConnectorRegistrationCommand extends $Command<
  UpdateConnectorRegistrationCommandInput,
  UpdateConnectorRegistrationCommandOutput,
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

  constructor(readonly input: UpdateConnectorRegistrationCommandInput) {
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
  ): Handler<UpdateConnectorRegistrationCommandInput, UpdateConnectorRegistrationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateConnectorRegistrationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppflowClient";
    const commandName = "UpdateConnectorRegistrationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateConnectorRegistrationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateConnectorRegistrationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateConnectorRegistrationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateConnectorRegistrationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateConnectorRegistrationCommandOutput> {
    return deserializeAws_restJson1UpdateConnectorRegistrationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
