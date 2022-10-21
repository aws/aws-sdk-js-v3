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
  UnmonitorInstancesRequest,
  UnmonitorInstancesRequestFilterSensitiveLog,
  UnmonitorInstancesResult,
  UnmonitorInstancesResultFilterSensitiveLog,
} from "../models/models_6";
import {
  deserializeAws_ec2UnmonitorInstancesCommand,
  serializeAws_ec2UnmonitorInstancesCommand,
} from "../protocols/Aws_ec2";

export interface UnmonitorInstancesCommandInput extends UnmonitorInstancesRequest {}
export interface UnmonitorInstancesCommandOutput extends UnmonitorInstancesResult, __MetadataBearer {}

/**
 * <p>Disables detailed monitoring for a running instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-cloudwatch.html">Monitoring
 *                 your instances and volumes</a> in the
 *             <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, UnmonitorInstancesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, UnmonitorInstancesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new UnmonitorInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UnmonitorInstancesCommandInput} for command's `input` shape.
 * @see {@link UnmonitorInstancesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class UnmonitorInstancesCommand extends $Command<
  UnmonitorInstancesCommandInput,
  UnmonitorInstancesCommandOutput,
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

  constructor(readonly input: UnmonitorInstancesCommandInput) {
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
  ): Handler<UnmonitorInstancesCommandInput, UnmonitorInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UnmonitorInstancesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "UnmonitorInstancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UnmonitorInstancesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UnmonitorInstancesResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UnmonitorInstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2UnmonitorInstancesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UnmonitorInstancesCommandOutput> {
    return deserializeAws_ec2UnmonitorInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
