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
  ModifyTrafficMirrorFilterNetworkServicesRequest,
  ModifyTrafficMirrorFilterNetworkServicesRequestFilterSensitiveLog,
  ModifyTrafficMirrorFilterNetworkServicesResult,
  ModifyTrafficMirrorFilterNetworkServicesResultFilterSensitiveLog,
} from "../models/models_6";
import {
  deserializeAws_ec2ModifyTrafficMirrorFilterNetworkServicesCommand,
  serializeAws_ec2ModifyTrafficMirrorFilterNetworkServicesCommand,
} from "../protocols/Aws_ec2";

export interface ModifyTrafficMirrorFilterNetworkServicesCommandInput
  extends ModifyTrafficMirrorFilterNetworkServicesRequest {}
export interface ModifyTrafficMirrorFilterNetworkServicesCommandOutput
  extends ModifyTrafficMirrorFilterNetworkServicesResult,
    __MetadataBearer {}

/**
 * <p>Allows or restricts mirroring network services.</p>
 *          <p> By default, Amazon DNS network services are not eligible for Traffic Mirror. Use <code>AddNetworkServices</code> to add network services to a Traffic Mirror filter. When a network service is added to the Traffic Mirror filter, all traffic related to that network service will be mirrored.
 *          When you no longer want to mirror network services, use <code>RemoveNetworkServices</code> to remove the network services from the Traffic Mirror filter.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyTrafficMirrorFilterNetworkServicesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyTrafficMirrorFilterNetworkServicesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyTrafficMirrorFilterNetworkServicesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyTrafficMirrorFilterNetworkServicesCommandInput} for command's `input` shape.
 * @see {@link ModifyTrafficMirrorFilterNetworkServicesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class ModifyTrafficMirrorFilterNetworkServicesCommand extends $Command<
  ModifyTrafficMirrorFilterNetworkServicesCommandInput,
  ModifyTrafficMirrorFilterNetworkServicesCommandOutput,
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
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        ModifyTrafficMirrorFilterNetworkServicesCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyTrafficMirrorFilterNetworkServicesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyTrafficMirrorFilterNetworkServicesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ModifyTrafficMirrorFilterNetworkServicesResultFilterSensitiveLog,
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
