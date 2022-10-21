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
  CancelReservedInstancesListingRequest,
  CancelReservedInstancesListingRequestFilterSensitiveLog,
  CancelReservedInstancesListingResult,
  CancelReservedInstancesListingResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_ec2CancelReservedInstancesListingCommand,
  serializeAws_ec2CancelReservedInstancesListingCommand,
} from "../protocols/Aws_ec2";

export interface CancelReservedInstancesListingCommandInput extends CancelReservedInstancesListingRequest {}
export interface CancelReservedInstancesListingCommandOutput
  extends CancelReservedInstancesListingResult,
    __MetadataBearer {}

/**
 * <p>Cancels the specified Reserved Instance listing in the Reserved Instance Marketplace.</p>
 *          <p>For more information, see
 *         <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-market-general.html">Reserved Instance Marketplace</a>
 *         in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CancelReservedInstancesListingCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CancelReservedInstancesListingCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CancelReservedInstancesListingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelReservedInstancesListingCommandInput} for command's `input` shape.
 * @see {@link CancelReservedInstancesListingCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class CancelReservedInstancesListingCommand extends $Command<
  CancelReservedInstancesListingCommandInput,
  CancelReservedInstancesListingCommandOutput,
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

  constructor(readonly input: CancelReservedInstancesListingCommandInput) {
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
  ): Handler<CancelReservedInstancesListingCommandInput, CancelReservedInstancesListingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CancelReservedInstancesListingCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CancelReservedInstancesListingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CancelReservedInstancesListingRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CancelReservedInstancesListingResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CancelReservedInstancesListingCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2CancelReservedInstancesListingCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CancelReservedInstancesListingCommandOutput> {
    return deserializeAws_ec2CancelReservedInstancesListingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
