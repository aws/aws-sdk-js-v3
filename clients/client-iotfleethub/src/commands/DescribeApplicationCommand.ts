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

import { IoTFleetHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTFleetHubClient";
import {
  DescribeApplicationRequest,
  DescribeApplicationRequestFilterSensitiveLog,
  DescribeApplicationResponse,
  DescribeApplicationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DescribeApplicationCommand,
  serializeAws_restJson1DescribeApplicationCommand,
} from "../protocols/Aws_restJson1";

export interface DescribeApplicationCommandInput extends DescribeApplicationRequest {}
export interface DescribeApplicationCommandOutput extends DescribeApplicationResponse, __MetadataBearer {}

/**
 * <p>Gets information about a Fleet Hub for AWS IoT Device Management web application.</p>
 *          <note>
 *             <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetHubClient, DescribeApplicationCommand } from "@aws-sdk/client-iotfleethub"; // ES Modules import
 * // const { IoTFleetHubClient, DescribeApplicationCommand } = require("@aws-sdk/client-iotfleethub"); // CommonJS import
 * const client = new IoTFleetHubClient(config);
 * const command = new DescribeApplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeApplicationCommandInput} for command's `input` shape.
 * @see {@link DescribeApplicationCommandOutput} for command's `response` shape.
 * @see {@link IoTFleetHubClientResolvedConfig | config} for IoTFleetHubClient's `config` shape.
 *
 */
export class DescribeApplicationCommand extends $Command<
  DescribeApplicationCommandInput,
  DescribeApplicationCommandOutput,
  IoTFleetHubClientResolvedConfig
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

  constructor(readonly input: DescribeApplicationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTFleetHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeApplicationCommandInput, DescribeApplicationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeApplicationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTFleetHubClient";
    const commandName = "DescribeApplicationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeApplicationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeApplicationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeApplicationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeApplicationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeApplicationCommandOutput> {
    return deserializeAws_restJson1DescribeApplicationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
