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

import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { ListStepsInput, ListStepsOutput } from "../models/models_0";
import { de_ListStepsCommand, se_ListStepsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListStepsCommand}.
 */
export interface ListStepsCommandInput extends ListStepsInput {}
/**
 * @public
 *
 * The output of {@link ListStepsCommand}.
 */
export interface ListStepsCommandOutput extends ListStepsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Provides a list of steps for the cluster in reverse order unless you specify
 *             <code>stepIds</code> with the request or filter by <code>StepStates</code>. You can
 *          specify a maximum of 10 <code>stepIDs</code>. The CLI automatically
 *          paginates results to return a list greater than 50 steps. To return more than 50 steps
 *          using the CLI, specify a <code>Marker</code>, which is a pagination token
 *          that indicates the next set of steps to retrieve.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, ListStepsCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, ListStepsCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const input = { // ListStepsInput
 *   ClusterId: "STRING_VALUE", // required
 *   StepStates: [ // StepStateList
 *     "PENDING" || "CANCEL_PENDING" || "RUNNING" || "COMPLETED" || "CANCELLED" || "FAILED" || "INTERRUPTED",
 *   ],
 *   StepIds: [ // XmlStringList
 *     "STRING_VALUE",
 *   ],
 *   Marker: "STRING_VALUE",
 * };
 * const command = new ListStepsCommand(input);
 * const response = await client.send(command);
 * // { // ListStepsOutput
 * //   Steps: [ // StepSummaryList
 * //     { // StepSummary
 * //       Id: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Config: { // HadoopStepConfig
 * //         Jar: "STRING_VALUE",
 * //         Properties: { // StringMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         MainClass: "STRING_VALUE",
 * //         Args: [ // StringList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       ActionOnFailure: "TERMINATE_JOB_FLOW" || "TERMINATE_CLUSTER" || "CANCEL_AND_WAIT" || "CONTINUE",
 * //       Status: { // StepStatus
 * //         State: "PENDING" || "CANCEL_PENDING" || "RUNNING" || "COMPLETED" || "CANCELLED" || "FAILED" || "INTERRUPTED",
 * //         StateChangeReason: { // StepStateChangeReason
 * //           Code: "NONE",
 * //           Message: "STRING_VALUE",
 * //         },
 * //         FailureDetails: { // FailureDetails
 * //           Reason: "STRING_VALUE",
 * //           Message: "STRING_VALUE",
 * //           LogFile: "STRING_VALUE",
 * //         },
 * //         Timeline: { // StepTimeline
 * //           CreationDateTime: new Date("TIMESTAMP"),
 * //           StartDateTime: new Date("TIMESTAMP"),
 * //           EndDateTime: new Date("TIMESTAMP"),
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListStepsCommandInput - {@link ListStepsCommandInput}
 * @returns {@link ListStepsCommandOutput}
 * @see {@link ListStepsCommandInput} for command's `input` shape.
 * @see {@link ListStepsCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Amazon EMR
 *          service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception occurs when there is something wrong with user input.</p>
 *
 * @throws {@link EMRServiceException}
 * <p>Base exception class for all service exceptions from EMR service.</p>
 *
 */
export class ListStepsCommand extends $Command<ListStepsCommandInput, ListStepsCommandOutput, EMRClientResolvedConfig> {
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
  constructor(readonly input: ListStepsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EMRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListStepsCommandInput, ListStepsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListStepsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRClient";
    const commandName = "ListStepsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ElasticMapReduce",
        operation: "ListSteps",
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
  private serialize(input: ListStepsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListStepsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListStepsCommandOutput> {
    return de_ListStepsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
