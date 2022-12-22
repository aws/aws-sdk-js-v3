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

import { IotDeviceAdvisorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IotDeviceAdvisorClient";
import {
  GetSuiteRunRequest,
  GetSuiteRunRequestFilterSensitiveLog,
  GetSuiteRunResponse,
  GetSuiteRunResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetSuiteRunCommand,
  serializeAws_restJson1GetSuiteRunCommand,
} from "../protocols/Aws_restJson1";

export interface GetSuiteRunCommandInput extends GetSuiteRunRequest {}
export interface GetSuiteRunCommandOutput extends GetSuiteRunResponse, __MetadataBearer {}

/**
 * <p>Gets information about a Device Advisor test suite run.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetSuiteRun</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IotDeviceAdvisorClient, GetSuiteRunCommand } from "@aws-sdk/client-iotdeviceadvisor"; // ES Modules import
 * // const { IotDeviceAdvisorClient, GetSuiteRunCommand } = require("@aws-sdk/client-iotdeviceadvisor"); // CommonJS import
 * const client = new IotDeviceAdvisorClient(config);
 * const command = new GetSuiteRunCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSuiteRunCommandInput} for command's `input` shape.
 * @see {@link GetSuiteRunCommandOutput} for command's `response` shape.
 * @see {@link IotDeviceAdvisorClientResolvedConfig | config} for IotDeviceAdvisorClient's `config` shape.
 *
 */
export class GetSuiteRunCommand extends $Command<
  GetSuiteRunCommandInput,
  GetSuiteRunCommandOutput,
  IotDeviceAdvisorClientResolvedConfig
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

  constructor(readonly input: GetSuiteRunCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IotDeviceAdvisorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSuiteRunCommandInput, GetSuiteRunCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetSuiteRunCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IotDeviceAdvisorClient";
    const commandName = "GetSuiteRunCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetSuiteRunRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetSuiteRunResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetSuiteRunCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetSuiteRunCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSuiteRunCommandOutput> {
    return deserializeAws_restJson1GetSuiteRunCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
