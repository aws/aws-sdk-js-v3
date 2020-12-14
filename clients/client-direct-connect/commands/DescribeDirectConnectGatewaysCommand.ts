import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { DescribeDirectConnectGatewaysRequest, DescribeDirectConnectGatewaysResult } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeDirectConnectGatewaysCommand,
  serializeAws_json1_1DescribeDirectConnectGatewaysCommand,
} from "../protocols/Aws_json1_1";
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

export type DescribeDirectConnectGatewaysCommandInput = DescribeDirectConnectGatewaysRequest;
export type DescribeDirectConnectGatewaysCommandOutput = DescribeDirectConnectGatewaysResult & __MetadataBearer;

/**
 * <p>Lists all your Direct Connect gateways or only the specified Direct Connect gateway. Deleted Direct Connect gateways are not returned.</p>
 */
export class DescribeDirectConnectGatewaysCommand extends $Command<
  DescribeDirectConnectGatewaysCommandInput,
  DescribeDirectConnectGatewaysCommandOutput,
  DirectConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeDirectConnectGatewaysCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DirectConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeDirectConnectGatewaysCommandInput, DescribeDirectConnectGatewaysCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectConnectClient";
    const commandName = "DescribeDirectConnectGatewaysCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeDirectConnectGatewaysRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeDirectConnectGatewaysResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeDirectConnectGatewaysCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeDirectConnectGatewaysCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeDirectConnectGatewaysCommandOutput> {
    return deserializeAws_json1_1DescribeDirectConnectGatewaysCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
