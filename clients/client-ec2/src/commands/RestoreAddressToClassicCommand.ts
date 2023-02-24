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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  RestoreAddressToClassicRequest,
  RestoreAddressToClassicRequestFilterSensitiveLog,
  RestoreAddressToClassicResult,
  RestoreAddressToClassicResultFilterSensitiveLog,
} from "../models/models_6";
import {
  deserializeAws_ec2RestoreAddressToClassicCommand,
  serializeAws_ec2RestoreAddressToClassicCommand,
} from "../protocols/Aws_ec2";

export interface RestoreAddressToClassicCommandInput extends RestoreAddressToClassicRequest {}
export interface RestoreAddressToClassicCommandOutput extends RestoreAddressToClassicResult, __MetadataBearer {}

/**
 * <p>Restores an Elastic IP address that was previously moved to the EC2-VPC platform back to the EC2-Classic platform. You cannot move an Elastic IP address that was originally allocated for use in EC2-VPC. The Elastic IP address must not be associated with an instance or network interface.</p>
 *          <note>
 *             <p>We are retiring EC2-Classic. We recommend that you migrate from EC2-Classic to a VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, RestoreAddressToClassicCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, RestoreAddressToClassicCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new RestoreAddressToClassicCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RestoreAddressToClassicCommandInput} for command's `input` shape.
 * @see {@link RestoreAddressToClassicCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class RestoreAddressToClassicCommand extends $Command<
  RestoreAddressToClassicCommandInput,
  RestoreAddressToClassicCommandOutput,
  EC2ClientResolvedConfig
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

  constructor(readonly input: RestoreAddressToClassicCommandInput) {
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
  ): Handler<RestoreAddressToClassicCommandInput, RestoreAddressToClassicCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RestoreAddressToClassicCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "RestoreAddressToClassicCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RestoreAddressToClassicRequestFilterSensitiveLog,
      outputFilterSensitiveLog: RestoreAddressToClassicResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RestoreAddressToClassicCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2RestoreAddressToClassicCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RestoreAddressToClassicCommandOutput> {
    return deserializeAws_ec2RestoreAddressToClassicCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
