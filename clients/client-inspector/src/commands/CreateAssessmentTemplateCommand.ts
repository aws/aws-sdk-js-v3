// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { CreateAssessmentTemplateRequest, CreateAssessmentTemplateResponse } from "../models/models_0";
import { de_CreateAssessmentTemplateCommand, se_CreateAssessmentTemplateCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateAssessmentTemplateCommand}.
 */
export interface CreateAssessmentTemplateCommandInput extends CreateAssessmentTemplateRequest {}
/**
 * @public
 *
 * The output of {@link CreateAssessmentTemplateCommand}.
 */
export interface CreateAssessmentTemplateCommandOutput extends CreateAssessmentTemplateResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates an assessment template for the assessment target that is specified by the ARN
 *          of the assessment target. If the <a href="https://docs.aws.amazon.com/inspector/latest/userguide/inspector_slr.html">service-linked role</a> isn’t already registered, this action also creates and
 *          registers a service-linked role to grant Amazon Inspector access to AWS Services needed to
 *          perform security assessments.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, CreateAssessmentTemplateCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, CreateAssessmentTemplateCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const input = { // CreateAssessmentTemplateRequest
 *   assessmentTargetArn: "STRING_VALUE", // required
 *   assessmentTemplateName: "STRING_VALUE", // required
 *   durationInSeconds: Number("int"), // required
 *   rulesPackageArns: [ // AssessmentTemplateRulesPackageArnList // required
 *     "STRING_VALUE",
 *   ],
 *   userAttributesForFindings: [ // UserAttributeList
 *     { // Attribute
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateAssessmentTemplateCommand(input);
 * const response = await client.send(command);
 * // { // CreateAssessmentTemplateResponse
 * //   assessmentTemplateArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateAssessmentTemplateCommandInput - {@link CreateAssessmentTemplateCommandInput}
 * @returns {@link CreateAssessmentTemplateCommandOutput}
 * @see {@link CreateAssessmentTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateAssessmentTemplateCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for InspectorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have required permissions to access the requested resource.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *          input parameter.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current
 *          AWS account limits. The error code describes the limit exceeded.</p>
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced an entity that does not exist. The
 *          error code describes the entity.</p>
 *
 * @throws {@link ServiceTemporarilyUnavailableException} (server fault)
 *  <p>The serice is temporary unavailable.</p>
 *
 * @throws {@link InspectorServiceException}
 * <p>Base exception class for all service exceptions from Inspector service.</p>
 *
 * @example Create assessment template
 * ```javascript
 * // Creates an assessment template for the assessment target that is specified by the ARN of the assessment target.
 * const input = {
 *   "assessmentTargetArn": "arn:aws:inspector:us-west-2:123456789012:target/0-nvgVhaxX",
 *   "assessmentTemplateName": "ExampleAssessmentTemplate",
 *   "durationInSeconds": 180,
 *   "rulesPackageArns": [
 *     "arn:aws:inspector:us-west-2:758058086616:rulespackage/0-11B9DBXp"
 *   ],
 *   "userAttributesForFindings": [
 *     {
 *       "key": "Example",
 *       "value": "example"
 *     }
 *   ]
 * };
 * const command = new CreateAssessmentTemplateCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "assessmentTemplateArn": "arn:aws:inspector:us-west-2:123456789012:target/0-nvgVhaxX/template/0-it5r2S4T"
 * }
 * *\/
 * // example id: create-assessment-template-1481064046719
 * ```
 *
 */
export class CreateAssessmentTemplateCommand extends $Command<
  CreateAssessmentTemplateCommandInput,
  CreateAssessmentTemplateCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: CreateAssessmentTemplateCommandInput) {
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
  ): Handler<CreateAssessmentTemplateCommandInput, CreateAssessmentTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateAssessmentTemplateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "InspectorClient";
    const commandName = "CreateAssessmentTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: CreateAssessmentTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateAssessmentTemplateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateAssessmentTemplateCommandOutput> {
    return de_CreateAssessmentTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
