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

import {
  DescribeAppAssessmentRequest,
  DescribeAppAssessmentResponse,
  DescribeAppAssessmentResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_DescribeAppAssessmentCommand, se_DescribeAppAssessmentCommand } from "../protocols/Aws_restJson1";
import { ResiliencehubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResiliencehubClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeAppAssessmentCommand}.
 */
export interface DescribeAppAssessmentCommandInput extends DescribeAppAssessmentRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAppAssessmentCommand}.
 */
export interface DescribeAppAssessmentCommandOutput extends DescribeAppAssessmentResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes an assessment for an Resilience Hub application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResiliencehubClient, DescribeAppAssessmentCommand } from "@aws-sdk/client-resiliencehub"; // ES Modules import
 * // const { ResiliencehubClient, DescribeAppAssessmentCommand } = require("@aws-sdk/client-resiliencehub"); // CommonJS import
 * const client = new ResiliencehubClient(config);
 * const input = { // DescribeAppAssessmentRequest
 *   assessmentArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeAppAssessmentCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAppAssessmentResponse
 * //   assessment: { // AppAssessment
 * //     appArn: "STRING_VALUE",
 * //     appVersion: "STRING_VALUE",
 * //     invoker: "STRING_VALUE", // required
 * //     cost: { // Cost
 * //       amount: Number("double"), // required
 * //       currency: "STRING_VALUE", // required
 * //       frequency: "STRING_VALUE", // required
 * //     },
 * //     resiliencyScore: { // ResiliencyScore
 * //       score: Number("double"), // required
 * //       disruptionScore: { // DisruptionResiliencyScore // required
 * //         "<keys>": Number("double"),
 * //       },
 * //     },
 * //     compliance: { // AssessmentCompliance
 * //       "<keys>": { // DisruptionCompliance
 * //         achievableRtoInSecs: Number("int"),
 * //         currentRtoInSecs: Number("int"),
 * //         rtoReferenceId: "STRING_VALUE",
 * //         rtoDescription: "STRING_VALUE",
 * //         currentRpoInSecs: Number("int"),
 * //         rpoReferenceId: "STRING_VALUE",
 * //         rpoDescription: "STRING_VALUE",
 * //         complianceStatus: "STRING_VALUE", // required
 * //         achievableRpoInSecs: Number("int"),
 * //         message: "STRING_VALUE",
 * //       },
 * //     },
 * //     complianceStatus: "STRING_VALUE",
 * //     assessmentStatus: "STRING_VALUE", // required
 * //     startTime: new Date("TIMESTAMP"),
 * //     endTime: new Date("TIMESTAMP"),
 * //     message: "STRING_VALUE",
 * //     assessmentName: "STRING_VALUE",
 * //     assessmentArn: "STRING_VALUE", // required
 * //     policy: { // ResiliencyPolicy
 * //       policyArn: "STRING_VALUE",
 * //       policyName: "STRING_VALUE",
 * //       policyDescription: "STRING_VALUE",
 * //       dataLocationConstraint: "STRING_VALUE",
 * //       tier: "STRING_VALUE",
 * //       estimatedCostTier: "STRING_VALUE",
 * //       policy: { // DisruptionPolicy
 * //         "<keys>": { // FailurePolicy
 * //           rtoInSecs: Number("int"), // required
 * //           rpoInSecs: Number("int"), // required
 * //         },
 * //       },
 * //       creationTime: new Date("TIMESTAMP"),
 * //       tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //     tags: {
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     resourceErrorsDetails: { // ResourceErrorsDetails
 * //       resourceErrors: [ // ResourceErrorList
 * //         { // ResourceError
 * //           logicalResourceId: "STRING_VALUE",
 * //           physicalResourceId: "STRING_VALUE",
 * //           reason: "STRING_VALUE",
 * //         },
 * //       ],
 * //       hasMoreErrors: true || false,
 * //     },
 * //     versionName: "STRING_VALUE",
 * //     driftStatus: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeAppAssessmentCommandInput - {@link DescribeAppAssessmentCommandInput}
 * @returns {@link DescribeAppAssessmentCommandOutput}
 * @see {@link DescribeAppAssessmentCommandInput} for command's `input` shape.
 * @see {@link DescribeAppAssessmentCommandOutput} for command's `response` shape.
 * @see {@link ResiliencehubClientResolvedConfig | config} for ResiliencehubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permissions to perform the requested operation. The user or role that is
 *       making the request must have at least one IAM permissions policy attached that grants the
 *       required permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Resilience Hub
 *       service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception occurs when the specified resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>This exception occurs when you have exceeded the limit on the number of requests per second.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>This exception occurs when a request is not valid.</p>
 *
 * @throws {@link ResiliencehubServiceException}
 * <p>Base exception class for all service exceptions from Resiliencehub service.</p>
 *
 */
export class DescribeAppAssessmentCommand extends $Command<
  DescribeAppAssessmentCommandInput,
  DescribeAppAssessmentCommandOutput,
  ResiliencehubClientResolvedConfig
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
  constructor(readonly input: DescribeAppAssessmentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ResiliencehubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAppAssessmentCommandInput, DescribeAppAssessmentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAppAssessmentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ResiliencehubClient";
    const commandName = "DescribeAppAssessmentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: DescribeAppAssessmentResponseFilterSensitiveLog,
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
  private serialize(input: DescribeAppAssessmentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeAppAssessmentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAppAssessmentCommandOutput> {
    return de_DescribeAppAssessmentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
