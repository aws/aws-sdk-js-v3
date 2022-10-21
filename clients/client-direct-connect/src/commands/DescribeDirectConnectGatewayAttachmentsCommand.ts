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

import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import {
  DescribeDirectConnectGatewayAttachmentsRequest,
  DescribeDirectConnectGatewayAttachmentsRequestFilterSensitiveLog,
  DescribeDirectConnectGatewayAttachmentsResult,
  DescribeDirectConnectGatewayAttachmentsResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeDirectConnectGatewayAttachmentsCommand,
  serializeAws_json1_1DescribeDirectConnectGatewayAttachmentsCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeDirectConnectGatewayAttachmentsCommandInput
  extends DescribeDirectConnectGatewayAttachmentsRequest {}
export interface DescribeDirectConnectGatewayAttachmentsCommandOutput
  extends DescribeDirectConnectGatewayAttachmentsResult,
    __MetadataBearer {}

/**
 * <p>Lists the attachments between your Direct Connect gateways and virtual interfaces. You must specify
 *       a Direct Connect gateway, a virtual interface, or both. If you specify a Direct Connect gateway, the response contains
 *       all virtual interfaces attached to the Direct Connect gateway. If you specify a virtual interface, the
 *       response contains all Direct Connect gateways attached to the virtual interface. If you specify both,
 *       the response contains the attachment between the Direct Connect gateway and the virtual interface.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, DescribeDirectConnectGatewayAttachmentsCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, DescribeDirectConnectGatewayAttachmentsCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new DescribeDirectConnectGatewayAttachmentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDirectConnectGatewayAttachmentsCommandInput} for command's `input` shape.
 * @see {@link DescribeDirectConnectGatewayAttachmentsCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for DirectConnectClient's `config` shape.
 *
 */
export class DescribeDirectConnectGatewayAttachmentsCommand extends $Command<
  DescribeDirectConnectGatewayAttachmentsCommandInput,
  DescribeDirectConnectGatewayAttachmentsCommandOutput,
  DirectConnectClientResolvedConfig
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
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DescribeDirectConnectGatewayAttachmentsCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectConnectClient";
    const commandName = "DescribeDirectConnectGatewayAttachmentsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeDirectConnectGatewayAttachmentsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeDirectConnectGatewayAttachmentsResultFilterSensitiveLog,
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
