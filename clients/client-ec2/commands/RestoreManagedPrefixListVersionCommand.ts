import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { RestoreManagedPrefixListVersionRequest, RestoreManagedPrefixListVersionResult } from "../models/models_5";
import {
  deserializeAws_ec2RestoreManagedPrefixListVersionCommand,
  serializeAws_ec2RestoreManagedPrefixListVersionCommand,
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

export interface RestoreManagedPrefixListVersionCommandInput extends RestoreManagedPrefixListVersionRequest {}
export interface RestoreManagedPrefixListVersionCommandOutput
  extends RestoreManagedPrefixListVersionResult,
    __MetadataBearer {}

/**
 * <p>Restores the entries from a previous version of a managed prefix list to a new version of the prefix list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, RestoreManagedPrefixListVersionCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, RestoreManagedPrefixListVersionCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new RestoreManagedPrefixListVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RestoreManagedPrefixListVersionCommandInput} for command's `input` shape.
 * @see {@link RestoreManagedPrefixListVersionCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class RestoreManagedPrefixListVersionCommand extends $Command<
  RestoreManagedPrefixListVersionCommandInput,
  RestoreManagedPrefixListVersionCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RestoreManagedPrefixListVersionCommandInput) {
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
  ): Handler<RestoreManagedPrefixListVersionCommandInput, RestoreManagedPrefixListVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "RestoreManagedPrefixListVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RestoreManagedPrefixListVersionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RestoreManagedPrefixListVersionResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: RestoreManagedPrefixListVersionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2RestoreManagedPrefixListVersionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RestoreManagedPrefixListVersionCommandOutput> {
    return deserializeAws_ec2RestoreManagedPrefixListVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
