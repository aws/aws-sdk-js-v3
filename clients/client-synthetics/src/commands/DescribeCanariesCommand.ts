import { ServiceInputTypes, ServiceOutputTypes, SyntheticsClientResolvedConfig } from "../SyntheticsClient";
import { DescribeCanariesRequest, DescribeCanariesResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeCanariesCommand,
  serializeAws_restJson1DescribeCanariesCommand,
} from "../protocols/Aws_restJson1";
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

export interface DescribeCanariesCommandInput extends DescribeCanariesRequest {}
export interface DescribeCanariesCommandOutput extends DescribeCanariesResponse, __MetadataBearer {}

/**
 * <p>This operation returns a list of the canaries in your account, along with full details
 *       about each canary.</p>
 *         <p>This operation does not have resource-level authorization, so if a user is able to use
 *             <code>DescribeCanaries</code>, the user can see all of the canaries in the account. A
 *          deny policy can only be used to restrict access to all canaries. It cannot be used on
 *          specific resources. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SyntheticsClient, DescribeCanariesCommand } from "@aws-sdk/client-synthetics"; // ES Modules import
 * // const { SyntheticsClient, DescribeCanariesCommand } = require("@aws-sdk/client-synthetics"); // CommonJS import
 * const client = new SyntheticsClient(config);
 * const command = new DescribeCanariesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCanariesCommandInput} for command's `input` shape.
 * @see {@link DescribeCanariesCommandOutput} for command's `response` shape.
 * @see {@link SyntheticsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeCanariesCommand extends $Command<
  DescribeCanariesCommandInput,
  DescribeCanariesCommandOutput,
  SyntheticsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeCanariesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SyntheticsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeCanariesCommandInput, DescribeCanariesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SyntheticsClient";
    const commandName = "DescribeCanariesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeCanariesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeCanariesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeCanariesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeCanariesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeCanariesCommandOutput> {
    return deserializeAws_restJson1DescribeCanariesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
