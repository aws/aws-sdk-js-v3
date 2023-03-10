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

import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import {
  ListDevicePoolsRequest,
  ListDevicePoolsRequestFilterSensitiveLog,
  ListDevicePoolsResult,
  ListDevicePoolsResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListDevicePoolsCommand,
  serializeAws_json1_1ListDevicePoolsCommand,
} from "../protocols/Aws_json1_1";

/**
 * The input for {@link ListDevicePoolsCommand}.
 */
export interface ListDevicePoolsCommandInput extends ListDevicePoolsRequest {}
/**
 * The output of {@link ListDevicePoolsCommand}.
 */
export interface ListDevicePoolsCommandOutput extends ListDevicePoolsResult, __MetadataBearer {}

/**
 * <p>Gets information about device pools.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, ListDevicePoolsCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, ListDevicePoolsCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new ListDevicePoolsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDevicePoolsCommandInput} for command's `input` shape.
 * @see {@link ListDevicePoolsCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for DeviceFarmClient's `config` shape.
 *
 * @example To get information about device pools
 * ```javascript
 * // The following example returns information about the private device pools in a specific project.
 * const input = {
 *   "type": "PRIVATE",
 *   "arn": "arn:aws:devicefarm:us-west-2:123456789101:project:EXAMPLE-GUID-123-456"
 * };
 * const command = new ListDevicePoolsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "devicePools": [
 *     {
 *       "name": "Top Devices",
 *       "arn": "arn:aws:devicefarm:us-west-2::devicepool:082d10e5-d7d7-48a5-ba5c-12345EXAMPLE",
 *       "description": "Top devices",
 *       "rules": [
 *         {
 *           "value": "[\"arn:aws:devicefarm:us-west-2::device:123456789EXAMPLE\",\"arn:aws:devicefarm:us-west-2::device:123456789EXAMPLE\",\"arn:aws:devicefarm:us-west-2::device:123456789EXAMPLE\",\"arn:aws:devicefarm:us-west-2::device:123456789EXAMPLE\",\"arn:aws:devicefarm:us-west-2::device:123456789EXAMPLE\",\"arn:aws:devicefarm:us-west-2::device:123456789EXAMPLE\",\"arn:aws:devicefarm:us-west-2::device:123456789EXAMPLE\",\"arn:aws:devicefarm:us-west-2::device:123456789EXAMPLE\",\"arn:aws:devicefarm:us-west-2::device:123456789EXAMPLE\",\"arn:aws:devicefarm:us-west-2::device:123456789EXAMPLE\"]",
 *           "attribute": "ARN",
 *           "operator": "IN"
 *         }
 *       ]
 *     },
 *     {
 *       "name": "My Android Device Pool",
 *       "arn": "arn:aws:devicefarm:us-west-2:123456789101:devicepool:5e01a8c7-c861-4c0a-b1d5-5ec6e6c6dd23/bf96e75a-28f6-4e61-b6a7-12345EXAMPLE",
 *       "description": "Samsung Galaxy Android devices",
 *       "rules": [
 *         {
 *           "value": "[\"arn:aws:devicefarm:us-west-2::device:123456789EXAMPLE\",\"arn:aws:devicefarm:us-west-2::device:123456789EXAMPLE\",\"arn:aws:devicefarm:us-west-2::device:123456789EXAMPLE\"]",
 *           "attribute": "ARN",
 *           "operator": "IN"
 *         }
 *       ]
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-get-information-about-device-pools-1471635745170
 * ```
 *
 */
export class ListDevicePoolsCommand extends $Command<
  ListDevicePoolsCommandInput,
  ListDevicePoolsCommandOutput,
  DeviceFarmClientResolvedConfig
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

  constructor(readonly input: ListDevicePoolsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DeviceFarmClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDevicePoolsCommandInput, ListDevicePoolsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListDevicePoolsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "ListDevicePoolsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListDevicePoolsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListDevicePoolsResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListDevicePoolsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListDevicePoolsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListDevicePoolsCommandOutput> {
    return deserializeAws_json1_1ListDevicePoolsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
