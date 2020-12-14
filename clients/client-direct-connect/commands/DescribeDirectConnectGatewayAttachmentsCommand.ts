import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import {
  DescribeDirectConnectGatewayAttachmentsRequest,
  DescribeDirectConnectGatewayAttachmentsResult,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeDirectConnectGatewayAttachmentsCommand,
  serializeAws_json1_1DescribeDirectConnectGatewayAttachmentsCommand,
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

export type DescribeDirectConnectGatewayAttachmentsCommandInput = DescribeDirectConnectGatewayAttachmentsRequest;
export type DescribeDirectConnectGatewayAttachmentsCommandOutput = DescribeDirectConnectGatewayAttachmentsResult &
  __MetadataBearer;

/**
 * <p>Lists the attachments between your Direct Connect gateways and virtual interfaces. You must specify
 *       a Direct Connect gateway, a virtual interface, or both. If you specify a Direct Connect gateway, the response contains
 *       all virtual interfaces attached to the Direct Connect gateway. If you specify a virtual interface, the
 *       response contains all Direct Connect gateways attached to the virtual interface. If you specify both,
 *       the response contains the attachment between the Direct Connect gateway and the virtual interface.</p>
 */
export class DescribeDirectConnectGatewayAttachmentsCommand extends $Command<
  DescribeDirectConnectGatewayAttachmentsCommandInput,
  DescribeDirectConnectGatewayAttachmentsCommandOutput,
  DirectConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeDirectConnectGatewayAttachmentsCommandInput) {
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
  ): Handler<
    DescribeDirectConnectGatewayAttachmentsCommandInput,
    DescribeDirectConnectGatewayAttachmentsCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectConnectClient";
    const commandName = "DescribeDirectConnectGatewayAttachmentsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeDirectConnectGatewayAttachmentsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeDirectConnectGatewayAttachmentsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeDirectConnectGatewayAttachmentsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeDirectConnectGatewayAttachmentsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeDirectConnectGatewayAttachmentsCommandOutput> {
    return deserializeAws_json1_1DescribeDirectConnectGatewayAttachmentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
