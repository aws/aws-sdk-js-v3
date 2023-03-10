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
  DescribeAssessmentTemplatesRequest,
  DescribeAssessmentTemplatesRequestFilterSensitiveLog,
  DescribeAssessmentTemplatesResponse,
  DescribeAssessmentTemplatesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeAssessmentTemplatesCommand,
  serializeAws_json1_1DescribeAssessmentTemplatesCommand,
} from "../protocols/Aws_json1_1";

/**
 * The input for {@link DescribeAssessmentTemplatesCommand}.
 */
export interface DescribeAssessmentTemplatesCommandInput extends DescribeAssessmentTemplatesRequest {}
/**
 * The output of {@link DescribeAssessmentTemplatesCommand}.
 */
export interface DescribeAssessmentTemplatesCommandOutput
  extends DescribeAssessmentTemplatesResponse,
    __MetadataBearer {}

/**
 * <p>Describes the assessment templates that are specified by the ARNs of the assessment
 *          templates.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, DescribeAssessmentTemplatesCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, DescribeAssessmentTemplatesCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const command = new DescribeAssessmentTemplatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAssessmentTemplatesCommandInput} for command's `input` shape.
 * @see {@link DescribeAssessmentTemplatesCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for InspectorClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *          input parameter.</p>
 *
 *
 * @example Describte assessment templates
 * ```javascript
 * // Describes the assessment templates that are specified by the ARNs of the assessment templates.
 * const input = {
 *   "assessmentTemplateArns": [
 *     "arn:aws:inspector:us-west-2:123456789012:target/0-0kFIPusq/template/0-4r1V2mAw"
 *   ]
 * };
 * const command = new DescribeAssessmentTemplatesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "assessmentTemplates": [
 *     {
 *       "name": "ExampleAssessmentTemplate",
 *       "arn": "arn:aws:inspector:us-west-2:123456789012:target/0-0kFIPusq/template/0-4r1V2mAw",
 *       "assessmentRunCount": 0,
 *       "assessmentTargetArn": "arn:aws:inspector:us-west-2:123456789012:target/0-0kFIPusq",
 *       "createdAt": "1458074191.844",
 *       "durationInSeconds": 3600,
 *       "rulesPackageArns": [
 *         "arn:aws:inspector:us-west-2:758058086616:rulespackage/0-X1KXtawP"
 *       ],
 *       "userAttributesForFindings": []
 *     }
 *   ],
 *   "failedItems": {}
 * }
 * *\/
 * // example id: describte-assessment-templates-1481064606829
 * ```
 *
 */
export class DescribeAssessmentTemplatesCommand extends $Command<
  DescribeAssessmentTemplatesCommandInput,
  DescribeAssessmentTemplatesCommandOutput,
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

  constructor(readonly input: DescribeAssessmentTemplatesCommandInput) {
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
  ): Handler<DescribeAssessmentTemplatesCommandInput, DescribeAssessmentTemplatesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAssessmentTemplatesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "InspectorClient";
    const commandName = "DescribeAssessmentTemplatesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeAssessmentTemplatesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeAssessmentTemplatesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeAssessmentTemplatesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeAssessmentTemplatesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeAssessmentTemplatesCommandOutput> {
    return deserializeAws_json1_1DescribeAssessmentTemplatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
