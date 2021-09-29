import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteEgressOnlyInternetGatewayRequest, DeleteEgressOnlyInternetGatewayResult } from "../models/models_2";
import {
  deserializeAws_ec2DeleteEgressOnlyInternetGatewayCommand,
  serializeAws_ec2DeleteEgressOnlyInternetGatewayCommand,
} from "../protocols/Aws_ec2";
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

export interface DeleteEgressOnlyInternetGatewayCommandInput extends DeleteEgressOnlyInternetGatewayRequest {}
export interface DeleteEgressOnlyInternetGatewayCommandOutput
  extends DeleteEgressOnlyInternetGatewayResult,
    __MetadataBearer {}

/**
 * <p>Deletes an egress-only internet gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteEgressOnlyInternetGatewayCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteEgressOnlyInternetGatewayCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteEgressOnlyInternetGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteEgressOnlyInternetGatewayCommandInput} for command's `input` shape.
 * @see {@link DeleteEgressOnlyInternetGatewayCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteEgressOnlyInternetGatewayCommand extends $Command<
  DeleteEgressOnlyInternetGatewayCommandInput,
  DeleteEgressOnlyInternetGatewayCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteEgressOnlyInternetGatewayCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteEgressOnlyInternetGatewayCommandInput, DeleteEgressOnlyInternetGatewayCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeleteEgressOnlyInternetGatewayCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteEgressOnlyInternetGatewayRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteEgressOnlyInternetGatewayResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteEgressOnlyInternetGatewayCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2DeleteEgressOnlyInternetGatewayCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteEgressOnlyInternetGatewayCommandOutput> {
    return deserializeAws_ec2DeleteEgressOnlyInternetGatewayCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
