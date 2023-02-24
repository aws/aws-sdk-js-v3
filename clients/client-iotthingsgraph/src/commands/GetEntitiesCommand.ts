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

import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import {
  GetEntitiesRequest,
  GetEntitiesRequestFilterSensitiveLog,
  GetEntitiesResponse,
  GetEntitiesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetEntitiesCommand,
  serializeAws_json1_1GetEntitiesCommand,
} from "../protocols/Aws_json1_1";

export interface GetEntitiesCommandInput extends GetEntitiesRequest {}
export interface GetEntitiesCommandOutput extends GetEntitiesResponse, __MetadataBearer {}

/**
 * @deprecated
 *
 * <p>Gets definitions of the specified entities. Uses the latest version of the user's namespace by default. This API returns the
 *       following TDM entities.</p>
 *          <ul>
 *             <li>
 *                <p>Properties</p>
 *             </li>
 *             <li>
 *                <p>States</p>
 *             </li>
 *             <li>
 *                <p>Events</p>
 *             </li>
 *             <li>
 *                <p>Actions</p>
 *             </li>
 *             <li>
 *                <p>Capabilities</p>
 *             </li>
 *             <li>
 *                <p>Mappings</p>
 *             </li>
 *             <li>
 *                <p>Devices</p>
 *             </li>
 *             <li>
 *                <p>Device Models</p>
 *             </li>
 *             <li>
 *                <p>Services</p>
 *             </li>
 *          </ul>
 *          <p>This action doesn't return definitions for systems, flows, and deployments.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, GetEntitiesCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, GetEntitiesCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * const client = new IoTThingsGraphClient(config);
 * const command = new GetEntitiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetEntitiesCommandInput} for command's `input` shape.
 * @see {@link GetEntitiesCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for IoTThingsGraphClient's `config` shape.
 *
 */
export class GetEntitiesCommand extends $Command<
  GetEntitiesCommandInput,
  GetEntitiesCommandOutput,
  IoTThingsGraphClientResolvedConfig
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

  constructor(readonly input: GetEntitiesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTThingsGraphClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetEntitiesCommandInput, GetEntitiesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetEntitiesCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTThingsGraphClient";
    const commandName = "GetEntitiesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetEntitiesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetEntitiesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetEntitiesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetEntitiesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetEntitiesCommandOutput> {
    return deserializeAws_json1_1GetEntitiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
