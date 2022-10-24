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

import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import {
  ListAssessmentRunAgentsRequest,
  ListAssessmentRunAgentsRequestFilterSensitiveLog,
  ListAssessmentRunAgentsResponse,
  ListAssessmentRunAgentsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListAssessmentRunAgentsCommand,
  serializeAws_json1_1ListAssessmentRunAgentsCommand,
} from "../protocols/Aws_json1_1";

export interface ListAssessmentRunAgentsCommandInput extends ListAssessmentRunAgentsRequest {}
export interface ListAssessmentRunAgentsCommandOutput extends ListAssessmentRunAgentsResponse, __MetadataBearer {}

/**
 * <p>Lists the agents of the assessment runs that are specified by the ARNs of the
 *          assessment runs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, ListAssessmentRunAgentsCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, ListAssessmentRunAgentsCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const command = new ListAssessmentRunAgentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAssessmentRunAgentsCommandInput} for command's `input` shape.
 * @see {@link ListAssessmentRunAgentsCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for InspectorClient's `config` shape.
 *
 */
export class ListAssessmentRunAgentsCommand extends $Command<
  ListAssessmentRunAgentsCommandInput,
  ListAssessmentRunAgentsCommandOutput,
  InspectorClientResolvedConfig
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

  constructor(readonly input: ListAssessmentRunAgentsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: InspectorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAssessmentRunAgentsCommandInput, ListAssessmentRunAgentsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAssessmentRunAgentsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "InspectorClient";
    const commandName = "ListAssessmentRunAgentsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAssessmentRunAgentsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListAssessmentRunAgentsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListAssessmentRunAgentsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListAssessmentRunAgentsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAssessmentRunAgentsCommandOutput> {
    return deserializeAws_json1_1ListAssessmentRunAgentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
