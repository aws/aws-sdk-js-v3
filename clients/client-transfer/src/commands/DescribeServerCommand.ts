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

import { DescribeServerRequest, DescribeServerResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeServerCommand,
  serializeAws_json1_1DescribeServerCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";

/**
 * @public
 *
 * The input for {@link DescribeServerCommand}.
 */
export interface DescribeServerCommandInput extends DescribeServerRequest {}
/**
 * @public
 *
 * The output of {@link DescribeServerCommand}.
 */
export interface DescribeServerCommandOutput extends DescribeServerResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes a file transfer protocol-enabled server that you specify by passing the
 *         <code>ServerId</code> parameter.</p>
 *          <p>The response contains a description of a server's properties. When you set
 *         <code>EndpointType</code> to VPC, the response will contain the
 *       <code>EndpointDetails</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, DescribeServerCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, DescribeServerCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * const client = new TransferClient(config);
 * const command = new DescribeServerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeServerCommandInput - {@link DescribeServerCommandInput}
 * @returns {@link DescribeServerCommandOutput}
 * @see {@link DescribeServerCommandInput} for command's `input` shape.
 * @see {@link DescribeServerCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for TransferClient's `config` shape.
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>This exception is thrown when an error occurs in the Amazon Web ServicesTransfer Family service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception is thrown when the client submits a malformed request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when a resource is not found by the Amazon Web ServicesTransfer Family
 *       service.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request has failed because the Amazon Web ServicesTransfer Family service is not available.</p>
 *
 *
 */
export class DescribeServerCommand extends $Command<
  DescribeServerCommandInput,
  DescribeServerCommandOutput,
  TransferClientResolvedConfig
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

  /**
   * @public
   */
  constructor(readonly input: DescribeServerCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TransferClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeServerCommandInput, DescribeServerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeServerCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TransferClient";
    const commandName = "DescribeServerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: DescribeServerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeServerCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeServerCommandOutput> {
    return deserializeAws_json1_1DescribeServerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
