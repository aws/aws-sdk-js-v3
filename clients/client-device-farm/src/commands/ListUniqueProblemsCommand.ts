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
  ListUniqueProblemsRequest,
  ListUniqueProblemsRequestFilterSensitiveLog,
  ListUniqueProblemsResult,
  ListUniqueProblemsResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListUniqueProblemsCommand,
  serializeAws_json1_1ListUniqueProblemsCommand,
} from "../protocols/Aws_json1_1";

export interface ListUniqueProblemsCommandInput extends ListUniqueProblemsRequest {}
export interface ListUniqueProblemsCommandOutput extends ListUniqueProblemsResult, __MetadataBearer {}

/**
 * <p>Gets information about unique problems, such as exceptions or crashes.</p>
 *         <p>Unique problems are defined as a single instance of an error across a run, job, or suite. For example,
 *             if a call in your application consistently raises an exception (<code>OutOfBoundsException in
 *                 MyActivity.java:386</code>), <code>ListUniqueProblems</code> returns a single entry instead of many
 *             individual entries for that exception.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, ListUniqueProblemsCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, ListUniqueProblemsCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new ListUniqueProblemsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListUniqueProblemsCommandInput} for command's `input` shape.
 * @see {@link ListUniqueProblemsCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for DeviceFarmClient's `config` shape.
 *
 */
export class ListUniqueProblemsCommand extends $Command<
  ListUniqueProblemsCommandInput,
  ListUniqueProblemsCommandOutput,
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

  constructor(readonly input: ListUniqueProblemsCommandInput) {
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
  ): Handler<ListUniqueProblemsCommandInput, ListUniqueProblemsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListUniqueProblemsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "ListUniqueProblemsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListUniqueProblemsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListUniqueProblemsResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListUniqueProblemsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListUniqueProblemsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListUniqueProblemsCommandOutput> {
    return deserializeAws_json1_1ListUniqueProblemsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
