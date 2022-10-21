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
  CreateAssessmentTargetRequest,
  CreateAssessmentTargetRequestFilterSensitiveLog,
  CreateAssessmentTargetResponse,
  CreateAssessmentTargetResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateAssessmentTargetCommand,
  serializeAws_json1_1CreateAssessmentTargetCommand,
} from "../protocols/Aws_json1_1";

export interface CreateAssessmentTargetCommandInput extends CreateAssessmentTargetRequest {}
export interface CreateAssessmentTargetCommandOutput extends CreateAssessmentTargetResponse, __MetadataBearer {}

/**
 * <p>Creates a new assessment target using the ARN of the resource group that is generated
 *          by <a>CreateResourceGroup</a>. If resourceGroupArn is not specified, all EC2
 *          instances in the current AWS account and region are included in the assessment target. If
 *          the <a href="https://docs.aws.amazon.com/inspector/latest/userguide/inspector_slr.html">service-linked role</a> isn’t already registered, this action also creates and
 *          registers a service-linked role to grant Amazon Inspector access to AWS Services needed to
 *          perform security assessments. You can create up to 50 assessment targets per AWS account.
 *          You can run up to 500 concurrent agents per AWS account. For more information, see <a href="https://docs.aws.amazon.com/inspector/latest/userguide/inspector_applications.html">
 *             Amazon Inspector Assessment Targets</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, CreateAssessmentTargetCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, CreateAssessmentTargetCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const command = new CreateAssessmentTargetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAssessmentTargetCommandInput} for command's `input` shape.
 * @see {@link CreateAssessmentTargetCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for InspectorClient's `config` shape.
 *
 */
export class CreateAssessmentTargetCommand extends $Command<
  CreateAssessmentTargetCommandInput,
  CreateAssessmentTargetCommandOutput,
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

  constructor(readonly input: CreateAssessmentTargetCommandInput) {
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
  ): Handler<CreateAssessmentTargetCommandInput, CreateAssessmentTargetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateAssessmentTargetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "InspectorClient";
    const commandName = "CreateAssessmentTargetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateAssessmentTargetRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateAssessmentTargetResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateAssessmentTargetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateAssessmentTargetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateAssessmentTargetCommandOutput> {
    return deserializeAws_json1_1CreateAssessmentTargetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
