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
  GetRegisterAccountStatusRequest,
  GetRegisterAccountStatusRequestFilterSensitiveLog,
  GetRegisterAccountStatusResponse,
  GetRegisterAccountStatusResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0GetRegisterAccountStatusCommand,
  serializeAws_json1_0GetRegisterAccountStatusCommand,
} from "../protocols/Aws_json1_0";

export interface GetRegisterAccountStatusCommandInput extends GetRegisterAccountStatusRequest {}
export interface GetRegisterAccountStatusCommandOutput extends GetRegisterAccountStatusResponse, __MetadataBearer {}

/**
 * <p> Retrieves information about the status of registering your Amazon Web Services account, IAM, and
 *             Amazon Timestream resources so that Amazon Web Services IoT FleetWise can transfer your vehicle data to the Amazon Web Services
 *             Cloud. </p>
 *         <p>For more information, including step-by-step procedures, see <a href="https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/setting-up.html">Setting up Amazon Web Services IoT FleetWise</a>. </p>
 *         <note>
 *             <p>This API operation doesn't require input parameters.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, GetRegisterAccountStatusCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, GetRegisterAccountStatusCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * const client = new IoTFleetWiseClient(config);
 * const command = new GetRegisterAccountStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRegisterAccountStatusCommandInput} for command's `input` shape.
 * @see {@link GetRegisterAccountStatusCommandOutput} for command's `response` shape.
 * @see {@link IoTFleetWiseClientResolvedConfig | config} for IoTFleetWiseClient's `config` shape.
 *
 */
export class GetRegisterAccountStatusCommand extends $Command<
  GetRegisterAccountStatusCommandInput,
  GetRegisterAccountStatusCommandOutput,
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

  constructor(readonly input: GetRegisterAccountStatusCommandInput) {
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
  ): Handler<GetRegisterAccountStatusCommandInput, GetRegisterAccountStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetRegisterAccountStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTFleetWiseClient";
    const commandName = "GetRegisterAccountStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetRegisterAccountStatusRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetRegisterAccountStatusResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetRegisterAccountStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0GetRegisterAccountStatusCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetRegisterAccountStatusCommandOutput> {
    return deserializeAws_json1_0GetRegisterAccountStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
