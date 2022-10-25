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

import { AmpClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmpClient";
import {
  DeleteAlertManagerDefinitionRequest,
  DeleteAlertManagerDefinitionRequestFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DeleteAlertManagerDefinitionCommand,
  serializeAws_restJson1DeleteAlertManagerDefinitionCommand,
} from "../protocols/Aws_restJson1";

export interface DeleteAlertManagerDefinitionCommandInput extends DeleteAlertManagerDefinitionRequest {}
export interface DeleteAlertManagerDefinitionCommandOutput extends __MetadataBearer {}

/**
 * Deletes an alert manager definition.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmpClient, DeleteAlertManagerDefinitionCommand } from "@aws-sdk/client-amp"; // ES Modules import
 * // const { AmpClient, DeleteAlertManagerDefinitionCommand } = require("@aws-sdk/client-amp"); // CommonJS import
 * const client = new AmpClient(config);
 * const command = new DeleteAlertManagerDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAlertManagerDefinitionCommandInput} for command's `input` shape.
 * @see {@link DeleteAlertManagerDefinitionCommandOutput} for command's `response` shape.
 * @see {@link AmpClientResolvedConfig | config} for AmpClient's `config` shape.
 *
 */
export class DeleteAlertManagerDefinitionCommand extends $Command<
  DeleteAlertManagerDefinitionCommandInput,
  DeleteAlertManagerDefinitionCommandOutput,
  AmpClientResolvedConfig
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

  constructor(readonly input: DeleteAlertManagerDefinitionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AmpClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteAlertManagerDefinitionCommandInput, DeleteAlertManagerDefinitionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteAlertManagerDefinitionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AmpClient";
    const commandName = "DeleteAlertManagerDefinitionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteAlertManagerDefinitionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteAlertManagerDefinitionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteAlertManagerDefinitionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteAlertManagerDefinitionCommandOutput> {
    return deserializeAws_restJson1DeleteAlertManagerDefinitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
