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
  ModifyAvailabilityZoneGroupRequest,
  ModifyAvailabilityZoneGroupRequestFilterSensitiveLog,
  ModifyAvailabilityZoneGroupResult,
  ModifyAvailabilityZoneGroupResultFilterSensitiveLog,
} from "../models/models_5";
import {
  deserializeAws_ec2ModifyAvailabilityZoneGroupCommand,
  serializeAws_ec2ModifyAvailabilityZoneGroupCommand,
} from "../protocols/Aws_ec2";

export interface ModifyAvailabilityZoneGroupCommandInput extends ModifyAvailabilityZoneGroupRequest {}
export interface ModifyAvailabilityZoneGroupCommandOutput extends ModifyAvailabilityZoneGroupResult, __MetadataBearer {}

/**
 * <p>Changes the opt-in status of the Local Zone and Wavelength Zone group for your
 *       account.</p>
 *          <p>Use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeAvailabilityZones.html">
 *   		DescribeAvailabilityZones</a> to view the value for <code>GroupName</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyAvailabilityZoneGroupCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyAvailabilityZoneGroupCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyAvailabilityZoneGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyAvailabilityZoneGroupCommandInput} for command's `input` shape.
 * @see {@link ModifyAvailabilityZoneGroupCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class ModifyAvailabilityZoneGroupCommand extends $Command<
  ModifyAvailabilityZoneGroupCommandInput,
  ModifyAvailabilityZoneGroupCommandOutput,
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

  constructor(readonly input: ModifyAvailabilityZoneGroupCommandInput) {
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
  ): Handler<ModifyAvailabilityZoneGroupCommandInput, ModifyAvailabilityZoneGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyAvailabilityZoneGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyAvailabilityZoneGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyAvailabilityZoneGroupRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ModifyAvailabilityZoneGroupResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyAvailabilityZoneGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2ModifyAvailabilityZoneGroupCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyAvailabilityZoneGroupCommandOutput> {
    return deserializeAws_ec2ModifyAvailabilityZoneGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
