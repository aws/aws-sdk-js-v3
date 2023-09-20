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

import { ListReviewPolicyResultsForHITRequest, ListReviewPolicyResultsForHITResponse } from "../models/models_0";
import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import {
  de_ListReviewPolicyResultsForHITCommand,
  se_ListReviewPolicyResultsForHITCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListReviewPolicyResultsForHITCommand}.
 */
export interface ListReviewPolicyResultsForHITCommandInput extends ListReviewPolicyResultsForHITRequest {}
/**
 * @public
 *
 * The output of {@link ListReviewPolicyResultsForHITCommand}.
 */
export interface ListReviewPolicyResultsForHITCommandOutput
  extends ListReviewPolicyResultsForHITResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>
 *             The <code>ListReviewPolicyResultsForHIT</code> operation retrieves the computed results
 *             and the actions taken in the course of executing your Review Policies for a given HIT.
 *             For information about how to specify Review Policies when you call CreateHIT,
 *             see Review Policies. The ListReviewPolicyResultsForHIT operation can return results for both
 *             Assignment-level and HIT-level review results.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, ListReviewPolicyResultsForHITCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, ListReviewPolicyResultsForHITCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const input = { // ListReviewPolicyResultsForHITRequest
 *   HITId: "STRING_VALUE", // required
 *   PolicyLevels: [ // ReviewPolicyLevelList
 *     "Assignment" || "HIT",
 *   ],
 *   RetrieveActions: true || false,
 *   RetrieveResults: true || false,
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListReviewPolicyResultsForHITCommand(input);
 * const response = await client.send(command);
 * // { // ListReviewPolicyResultsForHITResponse
 * //   HITId: "STRING_VALUE",
 * //   AssignmentReviewPolicy: { // ReviewPolicy
 * //     PolicyName: "STRING_VALUE", // required
 * //     Parameters: [ // PolicyParameterList
 * //       { // PolicyParameter
 * //         Key: "STRING_VALUE",
 * //         Values: [ // StringList
 * //           "STRING_VALUE",
 * //         ],
 * //         MapEntries: [ // ParameterMapEntryList
 * //           { // ParameterMapEntry
 * //             Key: "STRING_VALUE",
 * //             Values: [
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //   },
 * //   HITReviewPolicy: {
 * //     PolicyName: "STRING_VALUE", // required
 * //     Parameters: [
 * //       {
 * //         Key: "STRING_VALUE",
 * //         Values: [
 * //           "STRING_VALUE",
 * //         ],
 * //         MapEntries: [
 * //           {
 * //             Key: "STRING_VALUE",
 * //             Values: [
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //   },
 * //   AssignmentReviewReport: { // ReviewReport
 * //     ReviewResults: [ // ReviewResultDetailList
 * //       { // ReviewResultDetail
 * //         ActionId: "STRING_VALUE",
 * //         SubjectId: "STRING_VALUE",
 * //         SubjectType: "STRING_VALUE",
 * //         QuestionId: "STRING_VALUE",
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     ReviewActions: [ // ReviewActionDetailList
 * //       { // ReviewActionDetail
 * //         ActionId: "STRING_VALUE",
 * //         ActionName: "STRING_VALUE",
 * //         TargetId: "STRING_VALUE",
 * //         TargetType: "STRING_VALUE",
 * //         Status: "Intended" || "Succeeded" || "Failed" || "Cancelled",
 * //         CompleteTime: new Date("TIMESTAMP"),
 * //         Result: "STRING_VALUE",
 * //         ErrorCode: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * //   HITReviewReport: {
 * //     ReviewResults: [
 * //       {
 * //         ActionId: "STRING_VALUE",
 * //         SubjectId: "STRING_VALUE",
 * //         SubjectType: "STRING_VALUE",
 * //         QuestionId: "STRING_VALUE",
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     ReviewActions: [
 * //       {
 * //         ActionId: "STRING_VALUE",
 * //         ActionName: "STRING_VALUE",
 * //         TargetId: "STRING_VALUE",
 * //         TargetType: "STRING_VALUE",
 * //         Status: "Intended" || "Succeeded" || "Failed" || "Cancelled",
 * //         CompleteTime: new Date("TIMESTAMP"),
 * //         Result: "STRING_VALUE",
 * //         ErrorCode: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListReviewPolicyResultsForHITCommandInput - {@link ListReviewPolicyResultsForHITCommandInput}
 * @returns {@link ListReviewPolicyResultsForHITCommandOutput}
 * @see {@link ListReviewPolicyResultsForHITCommandInput} for command's `input` shape.
 * @see {@link ListReviewPolicyResultsForHITCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for MTurkClient's `config` shape.
 *
 * @throws {@link RequestError} (client fault)
 *  <p>Your request is invalid.</p>
 *
 * @throws {@link ServiceFault} (server fault)
 *  <p>Amazon Mechanical Turk is temporarily unable to process your request. Try your call again.</p>
 *
 * @throws {@link MTurkServiceException}
 * <p>Base exception class for all service exceptions from MTurk service.</p>
 *
 */
export class ListReviewPolicyResultsForHITCommand extends $Command<
  ListReviewPolicyResultsForHITCommandInput,
  ListReviewPolicyResultsForHITCommandOutput,
  MTurkClientResolvedConfig
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
  constructor(readonly input: ListReviewPolicyResultsForHITCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MTurkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListReviewPolicyResultsForHITCommandInput, ListReviewPolicyResultsForHITCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListReviewPolicyResultsForHITCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MTurkClient";
    const commandName = "ListReviewPolicyResultsForHITCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "MTurkRequesterServiceV20170117",
        operation: "ListReviewPolicyResultsForHIT",
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
  private serialize(input: ListReviewPolicyResultsForHITCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListReviewPolicyResultsForHITCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListReviewPolicyResultsForHITCommandOutput> {
    return de_ListReviewPolicyResultsForHITCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
