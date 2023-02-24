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
  PurchaseScheduledInstancesRequest,
  PurchaseScheduledInstancesRequestFilterSensitiveLog,
  PurchaseScheduledInstancesResult,
  PurchaseScheduledInstancesResultFilterSensitiveLog,
} from "../models/models_6";
import {
  deserializeAws_ec2PurchaseScheduledInstancesCommand,
  serializeAws_ec2PurchaseScheduledInstancesCommand,
} from "../protocols/Aws_ec2";

export interface PurchaseScheduledInstancesCommandInput extends PurchaseScheduledInstancesRequest {}
export interface PurchaseScheduledInstancesCommandOutput extends PurchaseScheduledInstancesResult, __MetadataBearer {}

/**
 * <note>
 *             <p>You can no longer purchase Scheduled Instances.</p>
 *          </note>
 *          <p>Purchases the Scheduled Instances with the specified schedule.</p>
 *          <p>Scheduled Instances enable you to purchase Amazon EC2 compute capacity by the hour for a one-year term.
 *          Before you can purchase a Scheduled Instance, you must call <a>DescribeScheduledInstanceAvailability</a>
 *          to check for available schedules and obtain a purchase token. After you purchase a Scheduled Instance,
 *          you must call <a>RunScheduledInstances</a> during each scheduled time period.</p>
 *          <p>After you purchase a Scheduled Instance, you can't cancel, modify, or resell your purchase.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, PurchaseScheduledInstancesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, PurchaseScheduledInstancesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new PurchaseScheduledInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PurchaseScheduledInstancesCommandInput} for command's `input` shape.
 * @see {@link PurchaseScheduledInstancesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class PurchaseScheduledInstancesCommand extends $Command<
  PurchaseScheduledInstancesCommandInput,
  PurchaseScheduledInstancesCommandOutput,
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

  constructor(readonly input: PurchaseScheduledInstancesCommandInput) {
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
  ): Handler<PurchaseScheduledInstancesCommandInput, PurchaseScheduledInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PurchaseScheduledInstancesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "PurchaseScheduledInstancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PurchaseScheduledInstancesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PurchaseScheduledInstancesResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PurchaseScheduledInstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2PurchaseScheduledInstancesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PurchaseScheduledInstancesCommandOutput> {
    return deserializeAws_ec2PurchaseScheduledInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
