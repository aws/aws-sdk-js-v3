import {
  ElasticLoadBalancingV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingV2Client";
import { SetIpAddressTypeInput, SetIpAddressTypeOutput } from "../models/models_0";
import {
  deserializeAws_querySetIpAddressTypeCommand,
  serializeAws_querySetIpAddressTypeCommand,
} from "../protocols/Aws_query";
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

export type SetIpAddressTypeCommandInput = SetIpAddressTypeInput;
export type SetIpAddressTypeCommandOutput = SetIpAddressTypeOutput & __MetadataBearer;

/**
 * <p>Sets the type of IP addresses used by the subnets of the specified Application Load
 *       Balancer or Network Load Balancer.</p>
 */
export class SetIpAddressTypeCommand extends $Command<
  SetIpAddressTypeCommandInput,
  SetIpAddressTypeCommandOutput,
  ElasticLoadBalancingV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SetIpAddressTypeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticLoadBalancingV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SetIpAddressTypeCommandInput, SetIpAddressTypeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticLoadBalancingV2Client";
    const commandName = "SetIpAddressTypeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SetIpAddressTypeInput.filterSensitiveLog,
      outputFilterSensitiveLog: SetIpAddressTypeOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SetIpAddressTypeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_querySetIpAddressTypeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SetIpAddressTypeCommandOutput> {
    return deserializeAws_querySetIpAddressTypeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
