import { ResourceGroupsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResourceGroupsClient";
import { GetGroupConfigurationInput, GetGroupConfigurationOutput } from "../models/models_0";
import {
  deserializeAws_restJson1GetGroupConfigurationCommand,
  serializeAws_restJson1GetGroupConfigurationCommand,
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

export type GetGroupConfigurationCommandInput = GetGroupConfigurationInput;
export type GetGroupConfigurationCommandOutput = GetGroupConfigurationOutput & __MetadataBearer;

/**
 * <p>Returns the service configuration associated with the specified resource group. AWS
 *             Resource Groups supports configurations for the following resource group types:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <code>AWS::EC2::CapacityReservationPool</code> - Amazon EC2 capacity
 *                     reservation pools. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/capacity-reservations-using.html#create-cr-group">Working with capacity reservation groups</a> in the <i>EC2 Users
 *                         Guide</i>.</p>
 *             </li>
 *          </ul>
 */
export class GetGroupConfigurationCommand extends $Command<
  GetGroupConfigurationCommandInput,
  GetGroupConfigurationCommandOutput,
  ResourceGroupsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetGroupConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ResourceGroupsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetGroupConfigurationCommandInput, GetGroupConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ResourceGroupsClient";
    const commandName = "GetGroupConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetGroupConfigurationInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetGroupConfigurationOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetGroupConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetGroupConfigurationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetGroupConfigurationCommandOutput> {
    return deserializeAws_restJson1GetGroupConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
