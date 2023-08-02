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

import { ListAppAssessmentsRequest, ListAppAssessmentsResponse } from "../models/models_0";
import { de_ListAppAssessmentsCommand, se_ListAppAssessmentsCommand } from "../protocols/Aws_restJson1";
import { ResiliencehubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResiliencehubClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListAppAssessmentsCommand}.
 */
export interface ListAppAssessmentsCommandInput extends ListAppAssessmentsRequest {}
/**
 * @public
 *
 * The output of {@link ListAppAssessmentsCommand}.
 */
export interface ListAppAssessmentsCommandOutput extends ListAppAssessmentsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the assessments for an Resilience Hub application. You can use request parameters to
 *       refine the results for the response object.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResiliencehubClient, ListAppAssessmentsCommand } from "@aws-sdk/client-resiliencehub"; // ES Modules import
 * // const { ResiliencehubClient, ListAppAssessmentsCommand } = require("@aws-sdk/client-resiliencehub"); // CommonJS import
 * const client = new ResiliencehubClient(config);
 * const input = { // ListAppAssessmentsRequest
 *   appArn: "STRING_VALUE",
 *   assessmentName: "STRING_VALUE",
 *   assessmentStatus: [ // AssessmentStatusList
 *     "STRING_VALUE",
 *   ],
 *   complianceStatus: "STRING_VALUE",
 *   invoker: "STRING_VALUE",
 *   reverseOrder: true || false,
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAppAssessmentsCommand(input);
 * const response = await client.send(command);
 * // { // ListAppAssessmentsResponse
 * //   nextToken: "STRING_VALUE",
 * //   assessmentSummaries: [ // AppAssessmentSummaryList // required
 * //     { // AppAssessmentSummary
 * //       appArn: "STRING_VALUE",
 * //       appVersion: "STRING_VALUE",
 * //       assessmentStatus: "STRING_VALUE", // required
 * //       invoker: "STRING_VALUE",
 * //       startTime: new Date("TIMESTAMP"),
 * //       endTime: new Date("TIMESTAMP"),
 * //       message: "STRING_VALUE",
 * //       assessmentName: "STRING_VALUE",
 * //       assessmentArn: "STRING_VALUE", // required
 * //       complianceStatus: "STRING_VALUE",
 * //       cost: { // Cost
 * //         amount: Number("double"), // required
 * //         currency: "STRING_VALUE", // required
 * //         frequency: "STRING_VALUE", // required
 * //       },
 * //       resiliencyScore: Number("double"),
 * //       versionName: "STRING_VALUE",
 * //       driftStatus: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListAppAssessmentsCommandInput - {@link ListAppAssessmentsCommandInput}
 * @returns {@link ListAppAssessmentsCommandOutput}
 * @see {@link ListAppAssessmentsCommandInput} for command's `input` shape.
 * @see {@link ListAppAssessmentsCommandOutput} for command's `response` shape.
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
export class ListAppAssessmentsCommand extends $Command<
  ListAppAssessmentsCommandInput,
  ListAppAssessmentsCommandOutput,
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
  constructor(readonly input: ListAppAssessmentsCommandInput) {
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
  ): Handler<ListAppAssessmentsCommandInput, ListAppAssessmentsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAppAssessmentsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ResiliencehubClient";
    const commandName = "ListAppAssessmentsCommand";
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
  private serialize(input: ListAppAssessmentsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListAppAssessmentsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAppAssessmentsCommandOutput> {
    return de_ListAppAssessmentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
