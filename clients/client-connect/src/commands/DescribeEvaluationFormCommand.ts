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

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { DescribeEvaluationFormRequest } from "../models/models_0";
import { DescribeEvaluationFormResponse } from "../models/models_2";
import { de_DescribeEvaluationFormCommand, se_DescribeEvaluationFormCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeEvaluationFormCommand}.
 */
export interface DescribeEvaluationFormCommandInput extends DescribeEvaluationFormRequest {}
/**
 * @public
 *
 * The output of {@link DescribeEvaluationFormCommand}.
 */
export interface DescribeEvaluationFormCommandOutput extends DescribeEvaluationFormResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes an evaluation form in the specified Amazon Connect instance. If the version
 *    property is not provided, the latest version of the evaluation form is described.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DescribeEvaluationFormCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DescribeEvaluationFormCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // DescribeEvaluationFormRequest
 *   InstanceId: "STRING_VALUE", // required
 *   EvaluationFormId: "STRING_VALUE", // required
 *   EvaluationFormVersion: Number("int"),
 * };
 * const command = new DescribeEvaluationFormCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEvaluationFormResponse
 * //   EvaluationForm: { // EvaluationForm
 * //     EvaluationFormId: "STRING_VALUE", // required
 * //     EvaluationFormVersion: Number("int"), // required
 * //     Locked: true || false, // required
 * //     EvaluationFormArn: "STRING_VALUE", // required
 * //     Title: "STRING_VALUE", // required
 * //     Description: "STRING_VALUE",
 * //     Status: "DRAFT" || "ACTIVE", // required
 * //     Items: [ // EvaluationFormItemsList // required
 * //       { // EvaluationFormItem Union: only one key present
 * //         Section: { // EvaluationFormSection
 * //           Title: "STRING_VALUE", // required
 * //           RefId: "STRING_VALUE", // required
 * //           Instructions: "STRING_VALUE",
 * //           Items: [ // required
 * //             {//  Union: only one key present
 * //               Section: {
 * //                 Title: "STRING_VALUE", // required
 * //                 RefId: "STRING_VALUE", // required
 * //                 Instructions: "STRING_VALUE",
 * //                 Items: "<EvaluationFormItemsList>", // required
 * //                 Weight: Number("double"),
 * //               },
 * //               Question: { // EvaluationFormQuestion
 * //                 Title: "STRING_VALUE", // required
 * //                 Instructions: "STRING_VALUE",
 * //                 RefId: "STRING_VALUE", // required
 * //                 NotApplicableEnabled: true || false,
 * //                 QuestionType: "TEXT" || "SINGLESELECT" || "NUMERIC", // required
 * //                 QuestionTypeProperties: { // EvaluationFormQuestionTypeProperties Union: only one key present
 * //                   Numeric: { // EvaluationFormNumericQuestionProperties
 * //                     MinValue: Number("int"), // required
 * //                     MaxValue: Number("int"), // required
 * //                     Options: [ // EvaluationFormNumericQuestionOptionList
 * //                       { // EvaluationFormNumericQuestionOption
 * //                         MinValue: Number("int"), // required
 * //                         MaxValue: Number("int"), // required
 * //                         Score: Number("int"),
 * //                         AutomaticFail: true || false,
 * //                       },
 * //                     ],
 * //                     Automation: { // EvaluationFormNumericQuestionAutomation Union: only one key present
 * //                       PropertyValue: { // NumericQuestionPropertyValueAutomation
 * //                         Label: "OVERALL_CUSTOMER_SENTIMENT_SCORE" || "OVERALL_AGENT_SENTIMENT_SCORE" || "NON_TALK_TIME" || "NON_TALK_TIME_PERCENTAGE" || "NUMBER_OF_INTERRUPTIONS" || "CONTACT_DURATION" || "AGENT_INTERACTION_DURATION" || "CUSTOMER_HOLD_TIME", // required
 * //                       },
 * //                     },
 * //                   },
 * //                   SingleSelect: { // EvaluationFormSingleSelectQuestionProperties
 * //                     Options: [ // EvaluationFormSingleSelectQuestionOptionList // required
 * //                       { // EvaluationFormSingleSelectQuestionOption
 * //                         RefId: "STRING_VALUE", // required
 * //                         Text: "STRING_VALUE", // required
 * //                         Score: Number("int"),
 * //                         AutomaticFail: true || false,
 * //                       },
 * //                     ],
 * //                     DisplayAs: "DROPDOWN" || "RADIO",
 * //                     Automation: { // EvaluationFormSingleSelectQuestionAutomation
 * //                       Options: [ // EvaluationFormSingleSelectQuestionAutomationOptionList // required
 * //                         { // EvaluationFormSingleSelectQuestionAutomationOption Union: only one key present
 * //                           RuleCategory: { // SingleSelectQuestionRuleCategoryAutomation
 * //                             Category: "STRING_VALUE", // required
 * //                             Condition: "PRESENT" || "NOT_PRESENT", // required
 * //                             OptionRefId: "STRING_VALUE", // required
 * //                           },
 * //                         },
 * //                       ],
 * //                       DefaultOptionRefId: "STRING_VALUE",
 * //                     },
 * //                   },
 * //                 },
 * //                 Weight: Number("double"),
 * //               },
 * //             },
 * //           ],
 * //           Weight: Number("double"),
 * //         },
 * //         Question: {
 * //           Title: "STRING_VALUE", // required
 * //           Instructions: "STRING_VALUE",
 * //           RefId: "STRING_VALUE", // required
 * //           NotApplicableEnabled: true || false,
 * //           QuestionType: "TEXT" || "SINGLESELECT" || "NUMERIC", // required
 * //           QuestionTypeProperties: {//  Union: only one key present
 * //             Numeric: {
 * //               MinValue: Number("int"), // required
 * //               MaxValue: Number("int"), // required
 * //               Options: [
 * //                 {
 * //                   MinValue: Number("int"), // required
 * //                   MaxValue: Number("int"), // required
 * //                   Score: Number("int"),
 * //                   AutomaticFail: true || false,
 * //                 },
 * //               ],
 * //               Automation: {//  Union: only one key present
 * //                 PropertyValue: {
 * //                   Label: "OVERALL_CUSTOMER_SENTIMENT_SCORE" || "OVERALL_AGENT_SENTIMENT_SCORE" || "NON_TALK_TIME" || "NON_TALK_TIME_PERCENTAGE" || "NUMBER_OF_INTERRUPTIONS" || "CONTACT_DURATION" || "AGENT_INTERACTION_DURATION" || "CUSTOMER_HOLD_TIME", // required
 * //                 },
 * //               },
 * //             },
 * //             SingleSelect: {
 * //               Options: [ // required
 * //                 {
 * //                   RefId: "STRING_VALUE", // required
 * //                   Text: "STRING_VALUE", // required
 * //                   Score: Number("int"),
 * //                   AutomaticFail: true || false,
 * //                 },
 * //               ],
 * //               DisplayAs: "DROPDOWN" || "RADIO",
 * //               Automation: {
 * //                 Options: [ // required
 * //                   {//  Union: only one key present
 * //                     RuleCategory: {
 * //                       Category: "STRING_VALUE", // required
 * //                       Condition: "PRESENT" || "NOT_PRESENT", // required
 * //                       OptionRefId: "STRING_VALUE", // required
 * //                     },
 * //                   },
 * //                 ],
 * //                 DefaultOptionRefId: "STRING_VALUE",
 * //               },
 * //             },
 * //           },
 * //           Weight: Number("double"),
 * //         },
 * //       },
 * //     ],
 * //     ScoringStrategy: { // EvaluationFormScoringStrategy
 * //       Mode: "QUESTION_ONLY" || "SECTION_ONLY", // required
 * //       Status: "ENABLED" || "DISABLED", // required
 * //     },
 * //     CreatedTime: new Date("TIMESTAMP"), // required
 * //     CreatedBy: "STRING_VALUE", // required
 * //     LastModifiedTime: new Date("TIMESTAMP"), // required
 * //     LastModifiedBy: "STRING_VALUE", // required
 * //     Tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeEvaluationFormCommandInput - {@link DescribeEvaluationFormCommandInput}
 * @returns {@link DescribeEvaluationFormCommandOutput}
 * @see {@link DescribeEvaluationFormCommandInput} for command's `input` shape.
 * @see {@link DescribeEvaluationFormCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 */
export class DescribeEvaluationFormCommand extends $Command<
  DescribeEvaluationFormCommandInput,
  DescribeEvaluationFormCommandOutput,
  ConnectClientResolvedConfig
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
  constructor(readonly input: DescribeEvaluationFormCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeEvaluationFormCommandInput, DescribeEvaluationFormCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeEvaluationFormCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "DescribeEvaluationFormCommand";
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
  private serialize(input: DescribeEvaluationFormCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeEvaluationFormCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeEvaluationFormCommandOutput> {
    return de_DescribeEvaluationFormCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
