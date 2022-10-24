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
import { DeleteAssessmentTemplateRequest, DeleteAssessmentTemplateRequestFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteAssessmentTemplateCommand,
  serializeAws_json1_1DeleteAssessmentTemplateCommand,
} from "../protocols/Aws_json1_1";

export interface DeleteAssessmentTemplateCommandInput extends DeleteAssessmentTemplateRequest {}
export interface DeleteAssessmentTemplateCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the assessment template that is specified by the ARN of the assessment
 *          template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, DeleteAssessmentTemplateCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, DeleteAssessmentTemplateCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const command = new DeleteAssessmentTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAssessmentTemplateCommandInput} for command's `input` shape.
 * @see {@link DeleteAssessmentTemplateCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for InspectorClient's `config` shape.
 *
 */
export class DeleteAssessmentTemplateCommand extends $Command<
  DeleteAssessmentTemplateCommandInput,
  DeleteAssessmentTemplateCommandOutput,
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

  constructor(readonly input: DeleteAssessmentTemplateCommandInput) {
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
  ): Handler<DeleteAssessmentTemplateCommandInput, DeleteAssessmentTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteAssessmentTemplateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "InspectorClient";
    const commandName = "DeleteAssessmentTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteAssessmentTemplateRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteAssessmentTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteAssessmentTemplateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteAssessmentTemplateCommandOutput> {
    return deserializeAws_json1_1DeleteAssessmentTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
