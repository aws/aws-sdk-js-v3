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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { DescribeAssessmentTemplatesRequest, DescribeAssessmentTemplatesResponse } from "../models/models_0";
import { de_DescribeAssessmentTemplatesCommand, se_DescribeAssessmentTemplatesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeAssessmentTemplatesCommand}.
 */
export interface DescribeAssessmentTemplatesCommandInput extends DescribeAssessmentTemplatesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAssessmentTemplatesCommand}.
 */
export interface DescribeAssessmentTemplatesCommandOutput
  extends DescribeAssessmentTemplatesResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Describes the assessment templates that are specified by the ARNs of the assessment
 *          templates.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, DescribeAssessmentTemplatesCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, DescribeAssessmentTemplatesCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const input = { // DescribeAssessmentTemplatesRequest
 *   assessmentTemplateArns: [ // BatchDescribeArnList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeAssessmentTemplatesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAssessmentTemplatesResponse
 * //   assessmentTemplates: [ // AssessmentTemplateList // required
 * //     { // AssessmentTemplate
 * //       arn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       assessmentTargetArn: "STRING_VALUE", // required
 * //       durationInSeconds: Number("int"), // required
 * //       rulesPackageArns: [ // AssessmentTemplateRulesPackageArnList // required
 * //         "STRING_VALUE",
 * //       ],
 * //       userAttributesForFindings: [ // UserAttributeList // required
 * //         { // Attribute
 * //           key: "STRING_VALUE", // required
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       lastAssessmentRunArn: "STRING_VALUE",
 * //       assessmentRunCount: Number("int"), // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   failedItems: { // FailedItems // required
 * //     "<keys>": { // FailedItemDetails
 * //       failureCode: "INVALID_ARN" || "DUPLICATE_ARN" || "ITEM_DOES_NOT_EXIST" || "ACCESS_DENIED" || "LIMIT_EXCEEDED" || "INTERNAL_ERROR", // required
 * //       retryable: true || false, // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeAssessmentTemplatesCommandInput - {@link DescribeAssessmentTemplatesCommandInput}
 * @returns {@link DescribeAssessmentTemplatesCommandOutput}
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
 * @throws {@link InspectorServiceException}
 * <p>Base exception class for all service exceptions from Inspector service.</p>
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "InspectorService",
        operation: "DescribeAssessmentTemplates",
      },
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
  private serialize(input: DescribeAssessmentTemplatesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeAssessmentTemplatesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeAssessmentTemplatesCommandOutput> {
    return de_DescribeAssessmentTemplatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
