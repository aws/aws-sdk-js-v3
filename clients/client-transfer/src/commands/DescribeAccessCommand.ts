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

import { DescribeAccessRequest, DescribeAccessResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeAccessCommand,
  serializeAws_json1_1DescribeAccessCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";

/**
 * @public
 *
 * The input for {@link DescribeAccessCommand}.
 */
export interface DescribeAccessCommandInput extends DescribeAccessRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAccessCommand}.
 */
export interface DescribeAccessCommandOutput extends DescribeAccessResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes the access that is assigned to the specific file transfer protocol-enabled
 *       server, as identified by its <code>ServerId</code> property and its
 *       <code>ExternalId</code>.</p>
 *          <p>The response from this call returns the properties of the access that is associated with
 *       the <code>ServerId</code> value that was specified.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, DescribeAccessCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, DescribeAccessCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * const client = new TransferClient(config);
 * const input = {
 *   ServerId: "STRING_VALUE", // required
 *   ExternalId: "STRING_VALUE", // required
 * };
 * const command = new DescribeAccessCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeAccessCommandInput - {@link DescribeAccessCommandInput}
 * @returns {@link DescribeAccessCommandOutput}
 * @see {@link DescribeAccessCommandInput} for command's `input` shape.
 * @see {@link DescribeAccessCommandOutput} for command's `response` shape.
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
export class DescribeAccessCommand extends $Command<
  DescribeAccessCommandInput,
  DescribeAccessCommandOutput,
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
  constructor(readonly input: DescribeAccessCommandInput) {
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
  ): Handler<DescribeAccessCommandInput, DescribeAccessCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAccessCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TransferClient";
    const commandName = "DescribeAccessCommand";
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
  private serialize(input: DescribeAccessCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeAccessCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAccessCommandOutput> {
    return deserializeAws_json1_1DescribeAccessCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
