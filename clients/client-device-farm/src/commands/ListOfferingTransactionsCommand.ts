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
  ListOfferingTransactionsRequest,
  ListOfferingTransactionsRequestFilterSensitiveLog,
  ListOfferingTransactionsResult,
  ListOfferingTransactionsResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListOfferingTransactionsCommand,
  serializeAws_json1_1ListOfferingTransactionsCommand,
} from "../protocols/Aws_json1_1";

export interface ListOfferingTransactionsCommandInput extends ListOfferingTransactionsRequest {}
export interface ListOfferingTransactionsCommandOutput extends ListOfferingTransactionsResult, __MetadataBearer {}

/**
 * <p>Returns a list of all historical purchases, renewals, and system renewal transactions for an AWS
 *             account. The list is paginated and ordered by a descending timestamp (most recent transactions are first).
 *             The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. If
 *             you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, ListOfferingTransactionsCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, ListOfferingTransactionsCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new ListOfferingTransactionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListOfferingTransactionsCommandInput} for command's `input` shape.
 * @see {@link ListOfferingTransactionsCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for DeviceFarmClient's `config` shape.
 *
 */
export class ListOfferingTransactionsCommand extends $Command<
  ListOfferingTransactionsCommandInput,
  ListOfferingTransactionsCommandOutput,
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

  constructor(readonly input: ListOfferingTransactionsCommandInput) {
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
  ): Handler<ListOfferingTransactionsCommandInput, ListOfferingTransactionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListOfferingTransactionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "ListOfferingTransactionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListOfferingTransactionsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListOfferingTransactionsResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListOfferingTransactionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListOfferingTransactionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListOfferingTransactionsCommandOutput> {
    return deserializeAws_json1_1ListOfferingTransactionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
