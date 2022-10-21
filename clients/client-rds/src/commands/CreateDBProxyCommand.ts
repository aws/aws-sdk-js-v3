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
  CreateDBProxyRequest,
  CreateDBProxyRequestFilterSensitiveLog,
  CreateDBProxyResponse,
  CreateDBProxyResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryCreateDBProxyCommand,
  serializeAws_queryCreateDBProxyCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

export interface CreateDBProxyCommandInput extends CreateDBProxyRequest {}
export interface CreateDBProxyCommandOutput extends CreateDBProxyResponse, __MetadataBearer {}

/**
 * <p>Creates a new DB proxy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, CreateDBProxyCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, CreateDBProxyCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new CreateDBProxyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDBProxyCommandInput} for command's `input` shape.
 * @see {@link CreateDBProxyCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 */
export class CreateDBProxyCommand extends $Command<
  CreateDBProxyCommandInput,
  CreateDBProxyCommandOutput,
  RDSClientResolvedConfig
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

  constructor(readonly input: CreateDBProxyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateDBProxyCommandInput, CreateDBProxyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateDBProxyCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "CreateDBProxyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDBProxyRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateDBProxyResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateDBProxyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreateDBProxyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDBProxyCommandOutput> {
    return deserializeAws_queryCreateDBProxyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
