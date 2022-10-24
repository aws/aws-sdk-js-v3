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
  ListAssessmentTargetsRequest,
  ListAssessmentTargetsRequestFilterSensitiveLog,
  ListAssessmentTargetsResponse,
  ListAssessmentTargetsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListAssessmentTargetsCommand,
  serializeAws_json1_1ListAssessmentTargetsCommand,
} from "../protocols/Aws_json1_1";

export interface ListAssessmentTargetsCommandInput extends ListAssessmentTargetsRequest {}
export interface ListAssessmentTargetsCommandOutput extends ListAssessmentTargetsResponse, __MetadataBearer {}

/**
 * <p>Lists the ARNs of the assessment targets within this AWS account. For more
 *          information about assessment targets, see <a href="https://docs.aws.amazon.com/inspector/latest/userguide/inspector_applications.html">Amazon Inspector Assessment
 *             Targets</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, ListAssessmentTargetsCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, ListAssessmentTargetsCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const command = new ListAssessmentTargetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAssessmentTargetsCommandInput} for command's `input` shape.
 * @see {@link ListAssessmentTargetsCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for InspectorClient's `config` shape.
 *
 */
export class ListAssessmentTargetsCommand extends $Command<
  ListAssessmentTargetsCommandInput,
  ListAssessmentTargetsCommandOutput,
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

  constructor(readonly input: ListAssessmentTargetsCommandInput) {
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
  ): Handler<ListAssessmentTargetsCommandInput, ListAssessmentTargetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAssessmentTargetsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "InspectorClient";
    const commandName = "ListAssessmentTargetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAssessmentTargetsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListAssessmentTargetsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListAssessmentTargetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListAssessmentTargetsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAssessmentTargetsCommandOutput> {
    return deserializeAws_json1_1ListAssessmentTargetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
