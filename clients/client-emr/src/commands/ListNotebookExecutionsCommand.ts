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

import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import {
  ListNotebookExecutionsInput,
  ListNotebookExecutionsInputFilterSensitiveLog,
  ListNotebookExecutionsOutput,
  ListNotebookExecutionsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListNotebookExecutionsCommand,
  serializeAws_json1_1ListNotebookExecutionsCommand,
} from "../protocols/Aws_json1_1";

export interface ListNotebookExecutionsCommandInput extends ListNotebookExecutionsInput {}
export interface ListNotebookExecutionsCommandOutput extends ListNotebookExecutionsOutput, __MetadataBearer {}

/**
 * <p>Provides summaries of all notebook executions. You can filter the list based on multiple
 *          criteria such as status, time range, and editor id. Returns a maximum of 50 notebook
 *          executions and a marker to track the paging of a longer notebook execution list across
 *          multiple <code>ListNotebookExecution</code> calls.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, ListNotebookExecutionsCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, ListNotebookExecutionsCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new ListNotebookExecutionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListNotebookExecutionsCommandInput} for command's `input` shape.
 * @see {@link ListNotebookExecutionsCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 */
export class ListNotebookExecutionsCommand extends $Command<
  ListNotebookExecutionsCommandInput,
  ListNotebookExecutionsCommandOutput,
  EMRClientResolvedConfig
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

  constructor(readonly input: ListNotebookExecutionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EMRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListNotebookExecutionsCommandInput, ListNotebookExecutionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListNotebookExecutionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRClient";
    const commandName = "ListNotebookExecutionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListNotebookExecutionsInputFilterSensitiveLog,
      outputFilterSensitiveLog: ListNotebookExecutionsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListNotebookExecutionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListNotebookExecutionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListNotebookExecutionsCommandOutput> {
    return deserializeAws_json1_1ListNotebookExecutionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
