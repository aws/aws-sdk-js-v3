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
  CreateTrafficMirrorFilterRequest,
  CreateTrafficMirrorFilterRequestFilterSensitiveLog,
  CreateTrafficMirrorFilterResult,
  CreateTrafficMirrorFilterResultFilterSensitiveLog,
} from "../models/models_2";
import {
  deserializeAws_ec2CreateTrafficMirrorFilterCommand,
  serializeAws_ec2CreateTrafficMirrorFilterCommand,
} from "../protocols/Aws_ec2";

export interface CreateTrafficMirrorFilterCommandInput extends CreateTrafficMirrorFilterRequest {}
export interface CreateTrafficMirrorFilterCommandOutput extends CreateTrafficMirrorFilterResult, __MetadataBearer {}

/**
 * <p>Creates a Traffic Mirror filter.</p>
 *          <p>A Traffic Mirror filter is a set of rules that defines the traffic to mirror.</p>
 *          <p>By default, no traffic is mirrored. To mirror traffic, use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTrafficMirrorFilterRule.htm">CreateTrafficMirrorFilterRule</a> to add Traffic Mirror rules to the filter. The rules you
 *          add define what traffic gets mirrored. You can also use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyTrafficMirrorFilterNetworkServices.html">ModifyTrafficMirrorFilterNetworkServices</a> to mirror supported network services.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateTrafficMirrorFilterCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateTrafficMirrorFilterCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateTrafficMirrorFilterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTrafficMirrorFilterCommandInput} for command's `input` shape.
 * @see {@link CreateTrafficMirrorFilterCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class CreateTrafficMirrorFilterCommand extends $Command<
  CreateTrafficMirrorFilterCommandInput,
  CreateTrafficMirrorFilterCommandOutput,
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

  constructor(readonly input: CreateTrafficMirrorFilterCommandInput) {
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
  ): Handler<CreateTrafficMirrorFilterCommandInput, CreateTrafficMirrorFilterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateTrafficMirrorFilterCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateTrafficMirrorFilterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateTrafficMirrorFilterRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateTrafficMirrorFilterResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateTrafficMirrorFilterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2CreateTrafficMirrorFilterCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateTrafficMirrorFilterCommandOutput> {
    return deserializeAws_ec2CreateTrafficMirrorFilterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
