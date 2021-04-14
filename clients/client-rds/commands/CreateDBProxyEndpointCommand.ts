import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { CreateDBProxyEndpointRequest, CreateDBProxyEndpointResponse } from "../models/models_0";
import {
  deserializeAws_queryCreateDBProxyEndpointCommand,
  serializeAws_queryCreateDBProxyEndpointCommand,
} from "../protocols/Aws_query";
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

export type CreateDBProxyEndpointCommandInput = CreateDBProxyEndpointRequest;
export type CreateDBProxyEndpointCommandOutput = CreateDBProxyEndpointResponse & __MetadataBearer;

/**
 * <p>
 *         Creates a <code>DBProxyEndpoint</code>. Only applies to proxies that are associated with Aurora DB clusters.
 *         You can use DB proxy endpoints to specify read/write or read-only access to the DB cluster. You can also use
 *         DB proxy endpoints to access a DB proxy through a different VPC than the proxy's default VPC.
 *       </p>
 */
export class CreateDBProxyEndpointCommand extends $Command<
  CreateDBProxyEndpointCommandInput,
  CreateDBProxyEndpointCommandOutput,
  RDSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "CreateDBProxyEndpointCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDBProxyEndpointRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateDBProxyEndpointResponse.filterSensitiveLog,
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
