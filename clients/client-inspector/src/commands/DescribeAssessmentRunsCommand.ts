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
import { DescribeAssessmentRunsRequest, DescribeAssessmentRunsResponse } from "../models/models_0";
import { de_DescribeAssessmentRunsCommand, se_DescribeAssessmentRunsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeAssessmentRunsCommand}.
 */
export interface DescribeAssessmentRunsCommandInput extends DescribeAssessmentRunsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAssessmentRunsCommand}.
 */
export interface DescribeAssessmentRunsCommandOutput extends DescribeAssessmentRunsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes the assessment runs that are specified by the ARNs of the assessment
 *          runs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, DescribeAssessmentRunsCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, DescribeAssessmentRunsCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const input = { // DescribeAssessmentRunsRequest
 *   assessmentRunArns: [ // BatchDescribeArnList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeAssessmentRunsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAssessmentRunsResponse
 * //   assessmentRuns: [ // AssessmentRunList // required
 * //     { // AssessmentRun
 * //       arn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       assessmentTemplateArn: "STRING_VALUE", // required
 * //       state: "CREATED" || "START_DATA_COLLECTION_PENDING" || "START_DATA_COLLECTION_IN_PROGRESS" || "COLLECTING_DATA" || "STOP_DATA_COLLECTION_PENDING" || "DATA_COLLECTED" || "START_EVALUATING_RULES_PENDING" || "EVALUATING_RULES" || "FAILED" || "ERROR" || "COMPLETED" || "COMPLETED_WITH_ERRORS" || "CANCELED", // required
 * //       durationInSeconds: Number("int"), // required
 * //       rulesPackageArns: [ // AssessmentRulesPackageArnList // required
 * //         "STRING_VALUE",
 * //       ],
 * //       userAttributesForFindings: [ // UserAttributeList // required
 * //         { // Attribute
 * //           key: "STRING_VALUE", // required
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       startedAt: new Date("TIMESTAMP"),
 * //       completedAt: new Date("TIMESTAMP"),
 * //       stateChangedAt: new Date("TIMESTAMP"), // required
 * //       dataCollected: true || false, // required
 * //       stateChanges: [ // AssessmentRunStateChangeList // required
 * //         { // AssessmentRunStateChange
 * //           stateChangedAt: new Date("TIMESTAMP"), // required
 * //           state: "CREATED" || "START_DATA_COLLECTION_PENDING" || "START_DATA_COLLECTION_IN_PROGRESS" || "COLLECTING_DATA" || "STOP_DATA_COLLECTION_PENDING" || "DATA_COLLECTED" || "START_EVALUATING_RULES_PENDING" || "EVALUATING_RULES" || "FAILED" || "ERROR" || "COMPLETED" || "COMPLETED_WITH_ERRORS" || "CANCELED", // required
 * //         },
 * //       ],
 * //       notifications: [ // AssessmentRunNotificationList // required
 * //         { // AssessmentRunNotification
 * //           date: new Date("TIMESTAMP"), // required
 * //           event: "ASSESSMENT_RUN_STARTED" || "ASSESSMENT_RUN_COMPLETED" || "ASSESSMENT_RUN_STATE_CHANGED" || "FINDING_REPORTED" || "OTHER", // required
 * //           message: "STRING_VALUE",
 * //           error: true || false, // required
 * //           snsTopicArn: "STRING_VALUE",
 * //           snsPublishStatusCode: "SUCCESS" || "TOPIC_DOES_NOT_EXIST" || "ACCESS_DENIED" || "INTERNAL_ERROR",
 * //         },
 * //       ],
 * //       findingCounts: { // AssessmentRunFindingCounts // required
 * //         "<keys>": Number("int"),
 * //       },
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
 * @param DescribeAssessmentRunsCommandInput - {@link DescribeAssessmentRunsCommandInput}
 * @returns {@link DescribeAssessmentRunsCommandOutput}
 * @see {@link DescribeAssessmentRunsCommandInput} for command's `input` shape.
 * @see {@link DescribeAssessmentRunsCommandOutput} for command's `response` shape.
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
 * @example Describte assessment runs
 * ```javascript
 * // Describes the assessment runs that are specified by the ARNs of the assessment runs.
 * const input = {
 *   "assessmentRunArns": [
 *     "arn:aws:inspector:us-west-2:123456789012:target/0-0kFIPusq/template/0-4r1V2mAw/run/0-MKkpXXPE"
 *   ]
 * };
 * const command = new DescribeAssessmentRunsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "assessmentRuns": [
 *     {
 *       "name": "Run 1 for ExampleAssessmentTemplate",
 *       "arn": "arn:aws:inspector:us-west-2:123456789012:target/0-0kFIPusq/template/0-4r1V2mAw/run/0-MKkpXXPE",
 *       "assessmentTemplateArn": "arn:aws:inspector:us-west-2:123456789012:target/0-0kFIPusq/template/0-4r1V2mAw",
 *       "completedAt": "1458680301.4",
 *       "createdAt": "1458680170.035",
 *       "dataCollected": true,
 *       "durationInSeconds": 3600,
 *       "findingCounts": {
 *         "High": 14,
 *         "Informational": 0,
 *         "Low": 0,
 *         "Medium": 2,
 *         "Undefined": 0
 *       },
 *       "notifications": [],
 *       "rulesPackageArns": [
 *         "arn:aws:inspector:us-west-2:758058086616:rulespackage/0-X1KXtawP"
 *       ],
 *       "startedAt": "1458680170.161",
 *       "state": "COMPLETED",
 *       "stateChangedAt": "1458680301.4",
 *       "stateChanges": [
 *         {
 *           "state": "CREATED",
 *           "stateChangedAt": "1458680170.035"
 *         },
 *         {
 *           "state": "START_DATA_COLLECTION_PENDING",
 *           "stateChangedAt": "1458680170.065"
 *         },
 *         {
 *           "state": "START_DATA_COLLECTION_IN_PROGRESS",
 *           "stateChangedAt": "1458680170.096"
 *         },
 *         {
 *           "state": "COLLECTING_DATA",
 *           "stateChangedAt": "1458680170.161"
 *         },
 *         {
 *           "state": "STOP_DATA_COLLECTION_PENDING",
 *           "stateChangedAt": "1458680239.883"
 *         },
 *         {
 *           "state": "DATA_COLLECTED",
 *           "stateChangedAt": "1458680299.847"
 *         },
 *         {
 *           "state": "EVALUATING_RULES",
 *           "stateChangedAt": "1458680300.099"
 *         },
 *         {
 *           "state": "COMPLETED",
 *           "stateChangedAt": "1458680301.4"
 *         }
 *       ],
 *       "userAttributesForFindings": []
 *     }
 *   ],
 *   "failedItems": {}
 * }
 * *\/
 * // example id: describte-assessment-runs-1481064424352
 * ```
 *
 */
export class DescribeAssessmentRunsCommand extends $Command<
  DescribeAssessmentRunsCommandInput,
  DescribeAssessmentRunsCommandOutput,
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
  constructor(readonly input: DescribeAssessmentRunsCommandInput) {
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
  ): Handler<DescribeAssessmentRunsCommandInput, DescribeAssessmentRunsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAssessmentRunsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "InspectorClient";
    const commandName = "DescribeAssessmentRunsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "InspectorService",
        operation: "DescribeAssessmentRuns",
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
  private serialize(input: DescribeAssessmentRunsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeAssessmentRunsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAssessmentRunsCommandOutput> {
    return de_DescribeAssessmentRunsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
