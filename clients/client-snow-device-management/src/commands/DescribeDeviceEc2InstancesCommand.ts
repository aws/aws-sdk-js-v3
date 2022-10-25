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

import {
  DescribeDeviceEc2Input,
  DescribeDeviceEc2InputFilterSensitiveLog,
  DescribeDeviceEc2Output,
  DescribeDeviceEc2OutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DescribeDeviceEc2InstancesCommand,
  serializeAws_restJson1DescribeDeviceEc2InstancesCommand,
} from "../protocols/Aws_restJson1";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SnowDeviceManagementClientResolvedConfig,
} from "../SnowDeviceManagementClient";

export interface DescribeDeviceEc2InstancesCommandInput extends DescribeDeviceEc2Input {}
export interface DescribeDeviceEc2InstancesCommandOutput extends DescribeDeviceEc2Output, __MetadataBearer {}

/**
 * <p>Checks the current state of the Amazon EC2 instances. The output is similar to
 *         <code>describeDevice</code>, but the results are sourced from the device cache in the
 *       Amazon Web Services Cloud and include a subset of the available fields. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowDeviceManagementClient, DescribeDeviceEc2InstancesCommand } from "@aws-sdk/client-snow-device-management"; // ES Modules import
 * // const { SnowDeviceManagementClient, DescribeDeviceEc2InstancesCommand } = require("@aws-sdk/client-snow-device-management"); // CommonJS import
 * const client = new SnowDeviceManagementClient(config);
 * const command = new DescribeDeviceEc2InstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDeviceEc2InstancesCommandInput} for command's `input` shape.
 * @see {@link DescribeDeviceEc2InstancesCommandOutput} for command's `response` shape.
 * @see {@link SnowDeviceManagementClientResolvedConfig | config} for SnowDeviceManagementClient's `config` shape.
 *
 */
export class DescribeDeviceEc2InstancesCommand extends $Command<
  DescribeDeviceEc2InstancesCommandInput,
  DescribeDeviceEc2InstancesCommandOutput,
  SnowDeviceManagementClientResolvedConfig
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

  constructor(readonly input: DescribeDeviceEc2InstancesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SnowDeviceManagementClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeDeviceEc2InstancesCommandInput, DescribeDeviceEc2InstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeDeviceEc2InstancesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SnowDeviceManagementClient";
    const commandName = "DescribeDeviceEc2InstancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeDeviceEc2InputFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeDeviceEc2OutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeDeviceEc2InstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeDeviceEc2InstancesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeDeviceEc2InstancesCommandOutput> {
    return deserializeAws_restJson1DescribeDeviceEc2InstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
