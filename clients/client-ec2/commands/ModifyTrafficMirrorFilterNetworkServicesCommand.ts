import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  ModifyTrafficMirrorFilterNetworkServicesRequest,
  ModifyTrafficMirrorFilterNetworkServicesResult,
} from "../models/models_4";
import {
  deserializeAws_ec2ModifyTrafficMirrorFilterNetworkServicesCommand,
  serializeAws_ec2ModifyTrafficMirrorFilterNetworkServicesCommand,
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

export type ModifyTrafficMirrorFilterNetworkServicesCommandInput = ModifyTrafficMirrorFilterNetworkServicesRequest;
export type ModifyTrafficMirrorFilterNetworkServicesCommandOutput = ModifyTrafficMirrorFilterNetworkServicesResult &
  __MetadataBearer;

/**
 * <p>Allows or restricts mirroring network services.</p>
 *          <p> By default, Amazon DNS network services are not eligible for Traffic Mirror. Use <code>AddNetworkServices</code> to add network services to a Traffic Mirror filter. When a network service is added to the Traffic Mirror filter, all traffic related to that network service will be mirrored.
 *          When you no longer want to mirror network services, use <code>RemoveNetworkServices</code> to remove the network services from the Traffic Mirror filter.
 *       </p>
 *          <p>For information about filter rule properties, see
 *          <a href="https://docs.aws.amazon.com/vpc/latest/mirroring/traffic-mirroring-considerations.html">Network Services</a> in the <i>Traffic Mirroring User Guide </i>.</p>
 */
export class ModifyTrafficMirrorFilterNetworkServicesCommand extends $Command<
  ModifyTrafficMirrorFilterNetworkServicesCommandInput,
  ModifyTrafficMirrorFilterNetworkServicesCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifyTrafficMirrorFilterNetworkServicesCommandInput) {
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
  ): Handler<
    ModifyTrafficMirrorFilterNetworkServicesCommandInput,
    ModifyTrafficMirrorFilterNetworkServicesCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyTrafficMirrorFilterNetworkServicesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyTrafficMirrorFilterNetworkServicesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ModifyTrafficMirrorFilterNetworkServicesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ModifyTrafficMirrorFilterNetworkServicesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2ModifyTrafficMirrorFilterNetworkServicesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyTrafficMirrorFilterNetworkServicesCommandOutput> {
    return deserializeAws_ec2ModifyTrafficMirrorFilterNetworkServicesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
