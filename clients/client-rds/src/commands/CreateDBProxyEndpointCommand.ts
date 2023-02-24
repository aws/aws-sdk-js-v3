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
  CreateDBProxyEndpointRequest,
  CreateDBProxyEndpointRequestFilterSensitiveLog,
  CreateDBProxyEndpointResponse,
  CreateDBProxyEndpointResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryCreateDBProxyEndpointCommand,
  serializeAws_queryCreateDBProxyEndpointCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

export interface CreateDBProxyEndpointCommandInput extends CreateDBProxyEndpointRequest {}
export interface CreateDBProxyEndpointCommandOutput extends CreateDBProxyEndpointResponse, __MetadataBearer {}

/**
 * <p>Creates a <code>DBProxyEndpoint</code>. Only applies to proxies that are associated with Aurora DB clusters.
 *         You can use DB proxy endpoints to specify read/write or read-only access to the DB cluster. You can also use
 *         DB proxy endpoints to access a DB proxy through a different VPC than the proxy's default VPC.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, CreateDBProxyEndpointCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, CreateDBProxyEndpointCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new CreateDBProxyEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDBProxyEndpointCommandInput} for command's `input` shape.
 * @see {@link CreateDBProxyEndpointCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 */
export class CreateDBProxyEndpointCommand extends $Command<
  CreateDBProxyEndpointCommandInput,
  CreateDBProxyEndpointCommandOutput,
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

  constructor(readonly input: CreateDBProxyEndpointCommandInput) {
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
  ): Handler<CreateDBProxyEndpointCommandInput, CreateDBProxyEndpointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateDBProxyEndpointCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "CreateDBProxyEndpointCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDBProxyEndpointRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateDBProxyEndpointResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateDBProxyEndpointCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreateDBProxyEndpointCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDBProxyEndpointCommandOutput> {
    return deserializeAws_queryCreateDBProxyEndpointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
