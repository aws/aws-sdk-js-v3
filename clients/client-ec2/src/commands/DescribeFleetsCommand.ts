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
  DescribeFleetsRequest,
  DescribeFleetsRequestFilterSensitiveLog,
  DescribeFleetsResult,
  DescribeFleetsResultFilterSensitiveLog,
} from "../models/models_3";
import { deserializeAws_ec2DescribeFleetsCommand, serializeAws_ec2DescribeFleetsCommand } from "../protocols/Aws_ec2";

export interface DescribeFleetsCommandInput extends DescribeFleetsRequest {}
export interface DescribeFleetsCommandOutput extends DescribeFleetsResult, __MetadataBearer {}

/**
 * <p>Describes the specified EC2 Fleets or all of your EC2 Fleets.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/manage-ec2-fleet.html#monitor-ec2-fleet">Monitor your EC2 Fleet</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeFleetsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeFleetsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeFleetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFleetsCommandInput} for command's `input` shape.
 * @see {@link DescribeFleetsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class DescribeFleetsCommand extends $Command<
  DescribeFleetsCommandInput,
  DescribeFleetsCommandOutput,
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

  constructor(readonly input: DescribeFleetsCommandInput) {
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
  ): Handler<DescribeFleetsCommandInput, DescribeFleetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeFleetsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeFleetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeFleetsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeFleetsResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeFleetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeFleetsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeFleetsCommandOutput> {
    return deserializeAws_ec2DescribeFleetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
