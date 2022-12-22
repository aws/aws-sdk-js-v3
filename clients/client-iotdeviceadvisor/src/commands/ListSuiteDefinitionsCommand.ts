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
  ListSuiteDefinitionsRequest,
  ListSuiteDefinitionsRequestFilterSensitiveLog,
  ListSuiteDefinitionsResponse,
  ListSuiteDefinitionsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListSuiteDefinitionsCommand,
  serializeAws_restJson1ListSuiteDefinitionsCommand,
} from "../protocols/Aws_restJson1";

export interface ListSuiteDefinitionsCommandInput extends ListSuiteDefinitionsRequest {}
export interface ListSuiteDefinitionsCommandOutput extends ListSuiteDefinitionsResponse, __MetadataBearer {}

/**
 * <p>Lists the Device Advisor test suites you have created.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListSuiteDefinitions</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IotDeviceAdvisorClient, ListSuiteDefinitionsCommand } from "@aws-sdk/client-iotdeviceadvisor"; // ES Modules import
 * // const { IotDeviceAdvisorClient, ListSuiteDefinitionsCommand } = require("@aws-sdk/client-iotdeviceadvisor"); // CommonJS import
 * const client = new IotDeviceAdvisorClient(config);
 * const command = new ListSuiteDefinitionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSuiteDefinitionsCommandInput} for command's `input` shape.
 * @see {@link ListSuiteDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link IotDeviceAdvisorClientResolvedConfig | config} for IotDeviceAdvisorClient's `config` shape.
 *
 */
export class ListSuiteDefinitionsCommand extends $Command<
  ListSuiteDefinitionsCommandInput,
  ListSuiteDefinitionsCommandOutput,
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

  constructor(readonly input: ListSuiteDefinitionsCommandInput) {
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
  ): Handler<ListSuiteDefinitionsCommandInput, ListSuiteDefinitionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListSuiteDefinitionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IotDeviceAdvisorClient";
    const commandName = "ListSuiteDefinitionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListSuiteDefinitionsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListSuiteDefinitionsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListSuiteDefinitionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListSuiteDefinitionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSuiteDefinitionsCommandOutput> {
    return deserializeAws_restJson1ListSuiteDefinitionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
