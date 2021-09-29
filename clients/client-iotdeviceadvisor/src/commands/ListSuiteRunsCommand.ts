import { IotDeviceAdvisorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IotDeviceAdvisorClient";
import { ListSuiteRunsRequest, ListSuiteRunsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListSuiteRunsCommand,
  serializeAws_restJson1ListSuiteRunsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface ListSuiteRunsCommandInput extends ListSuiteRunsRequest {}
export interface ListSuiteRunsCommandOutput extends ListSuiteRunsResponse, __MetadataBearer {}

/**
 * <p>Lists the runs of the specified Device Advisor test suite.
 *             You can list all runs of the test suite, or the runs of a specific version of the test suite.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IotDeviceAdvisorClient, ListSuiteRunsCommand } from "@aws-sdk/client-iotdeviceadvisor"; // ES Modules import
 * // const { IotDeviceAdvisorClient, ListSuiteRunsCommand } = require("@aws-sdk/client-iotdeviceadvisor"); // CommonJS import
 * const client = new IotDeviceAdvisorClient(config);
 * const command = new ListSuiteRunsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSuiteRunsCommandInput} for command's `input` shape.
 * @see {@link ListSuiteRunsCommandOutput} for command's `response` shape.
 * @see {@link IotDeviceAdvisorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListSuiteRunsCommand extends $Command<
  ListSuiteRunsCommandInput,
  ListSuiteRunsCommandOutput,
  IotDeviceAdvisorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListSuiteRunsCommandInput) {
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
  ): Handler<ListSuiteRunsCommandInput, ListSuiteRunsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IotDeviceAdvisorClient";
    const commandName = "ListSuiteRunsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListSuiteRunsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListSuiteRunsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListSuiteRunsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListSuiteRunsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSuiteRunsCommandOutput> {
    return deserializeAws_restJson1ListSuiteRunsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
