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
  ListStepsInput,
  ListStepsInputFilterSensitiveLog,
  ListStepsOutput,
  ListStepsOutputFilterSensitiveLog,
} from "../models/models_0";
import { deserializeAws_json1_1ListStepsCommand, serializeAws_json1_1ListStepsCommand } from "../protocols/Aws_json1_1";

export interface ListStepsCommandInput extends ListStepsInput {}
export interface ListStepsCommandOutput extends ListStepsOutput, __MetadataBearer {}

/**
 * <p>Provides a list of steps for the cluster in reverse order unless you specify
 *             <code>stepIds</code> with the request or filter by <code>StepStates</code>. You can
 *          specify a maximum of 10 <code>stepIDs</code>. The CLI automatically
 *          paginates results to return a list greater than 50 steps. To return more than 50 steps
 *          using the CLI, specify a <code>Marker</code>, which is a pagination token
 *          that indicates the next set of steps to retrieve.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, ListStepsCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, ListStepsCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new ListStepsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListStepsCommandInput} for command's `input` shape.
 * @see {@link ListStepsCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 */
export class ListStepsCommand extends $Command<ListStepsCommandInput, ListStepsCommandOutput, EMRClientResolvedConfig> {
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

  constructor(readonly input: ListStepsCommandInput) {
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
  ): Handler<ListStepsCommandInput, ListStepsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListStepsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRClient";
    const commandName = "ListStepsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListStepsInputFilterSensitiveLog,
      outputFilterSensitiveLog: ListStepsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListStepsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListStepsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListStepsCommandOutput> {
    return deserializeAws_json1_1ListStepsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
