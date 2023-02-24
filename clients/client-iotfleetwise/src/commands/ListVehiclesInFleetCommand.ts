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

import { IoTFleetWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTFleetWiseClient";
import {
  ListVehiclesInFleetRequest,
  ListVehiclesInFleetRequestFilterSensitiveLog,
  ListVehiclesInFleetResponse,
  ListVehiclesInFleetResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0ListVehiclesInFleetCommand,
  serializeAws_json1_0ListVehiclesInFleetCommand,
} from "../protocols/Aws_json1_0";

export interface ListVehiclesInFleetCommandInput extends ListVehiclesInFleetRequest {}
export interface ListVehiclesInFleetCommandOutput extends ListVehiclesInFleetResponse, __MetadataBearer {}

/**
 * <p> Retrieves a list of summaries of all vehicles associated with a fleet. </p>
 *         <note>
 *             <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the request to return more results.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, ListVehiclesInFleetCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, ListVehiclesInFleetCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * const client = new IoTFleetWiseClient(config);
 * const command = new ListVehiclesInFleetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListVehiclesInFleetCommandInput} for command's `input` shape.
 * @see {@link ListVehiclesInFleetCommandOutput} for command's `response` shape.
 * @see {@link IoTFleetWiseClientResolvedConfig | config} for IoTFleetWiseClient's `config` shape.
 *
 */
export class ListVehiclesInFleetCommand extends $Command<
  ListVehiclesInFleetCommandInput,
  ListVehiclesInFleetCommandOutput,
  IoTFleetWiseClientResolvedConfig
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

  constructor(readonly input: ListVehiclesInFleetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTFleetWiseClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListVehiclesInFleetCommandInput, ListVehiclesInFleetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListVehiclesInFleetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTFleetWiseClient";
    const commandName = "ListVehiclesInFleetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListVehiclesInFleetRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListVehiclesInFleetResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListVehiclesInFleetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0ListVehiclesInFleetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListVehiclesInFleetCommandOutput> {
    return deserializeAws_json1_0ListVehiclesInFleetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
