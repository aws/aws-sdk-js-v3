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

import { GetPropertygraphSummaryInput, GetPropertygraphSummaryOutput } from "../models/models_0";
import { NeptunedataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptunedataClient";
import { de_GetPropertygraphSummaryCommand, se_GetPropertygraphSummaryCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetPropertygraphSummaryCommand}.
 */
export interface GetPropertygraphSummaryCommandInput extends GetPropertygraphSummaryInput {}
/**
 * @public
 *
 * The output of {@link GetPropertygraphSummaryCommand}.
 */
export interface GetPropertygraphSummaryCommandOutput extends GetPropertygraphSummaryOutput, __MetadataBearer {}

/**
 * @public
 * <p>Gets a graph summary for a property graph.</p>
 *          <p>When invoking this operation in a Neptune cluster that has IAM
 *       authentication enabled, the IAM user or role making the request must
 *       have a policy attached that allows the <a href="https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#getgraphsummary">neptune-db:GetGraphSummary</a>
 *       IAM action in that cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptunedataClient, GetPropertygraphSummaryCommand } from "@aws-sdk/client-neptunedata"; // ES Modules import
 * // const { NeptunedataClient, GetPropertygraphSummaryCommand } = require("@aws-sdk/client-neptunedata"); // CommonJS import
 * const client = new NeptunedataClient(config);
 * const input = { // GetPropertygraphSummaryInput
 *   mode: "basic" || "detailed",
 * };
 * const command = new GetPropertygraphSummaryCommand(input);
 * const response = await client.send(command);
 * // { // GetPropertygraphSummaryOutput
 * //   statusCode: Number("int"),
 * //   payload: { // PropertygraphSummaryValueMap
 * //     version: "STRING_VALUE",
 * //     lastStatisticsComputationTime: new Date("TIMESTAMP"),
 * //     graphSummary: { // PropertygraphSummary
 * //       numNodes: Number("long"),
 * //       numEdges: Number("long"),
 * //       numNodeLabels: Number("long"),
 * //       numEdgeLabels: Number("long"),
 * //       nodeLabels: [ // NodeLabels
 * //         "STRING_VALUE",
 * //       ],
 * //       edgeLabels: [ // EdgeLabels
 * //         "STRING_VALUE",
 * //       ],
 * //       numNodeProperties: Number("long"),
 * //       numEdgeProperties: Number("long"),
 * //       nodeProperties: [ // LongValuedMapList
 * //         { // LongValuedMap
 * //           "<keys>": Number("long"),
 * //         },
 * //       ],
 * //       edgeProperties: [
 * //         {
 * //           "<keys>": Number("long"),
 * //         },
 * //       ],
 * //       totalNodePropertyValues: Number("long"),
 * //       totalEdgePropertyValues: Number("long"),
 * //       nodeStructures: [ // NodeStructures
 * //         { // NodeStructure
 * //           count: Number("long"),
 * //           nodeProperties: [ // NodeProperties
 * //             "STRING_VALUE",
 * //           ],
 * //           distinctOutgoingEdgeLabels: [ // OutgoingEdgeLabels
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //       edgeStructures: [ // EdgeStructures
 * //         { // EdgeStructure
 * //           count: Number("long"),
 * //           edgeProperties: [ // EdgeProperties
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetPropertygraphSummaryCommandInput - {@link GetPropertygraphSummaryCommandInput}
 * @returns {@link GetPropertygraphSummaryCommandOutput}
 * @see {@link GetPropertygraphSummaryCommandInput} for command's `input` shape.
 * @see {@link GetPropertygraphSummaryCommandOutput} for command's `response` shape.
 * @see {@link NeptunedataClientResolvedConfig | config} for NeptunedataClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Raised in case of an authentication or authorization failure.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Raised when a request is submitted that cannot be processed.</p>
 *
 * @throws {@link ClientTimeoutException} (client fault)
 *  <p>Raised when a request timed out in the client.</p>
 *
 * @throws {@link ConstraintViolationException} (client fault)
 *  <p>Raised when a value in a request field did not satisfy required constraints.</p>
 *
 * @throws {@link IllegalArgumentException} (client fault)
 *  <p>Raised when an argument in a request is not supported.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>Raised when an argument in a request has an invalid value.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Raised when a parameter value is not valid.</p>
 *
 * @throws {@link MissingParameterException} (client fault)
 *  <p>Raised when a required parameter is missing.</p>
 *
 * @throws {@link PreconditionsFailedException} (client fault)
 *  <p>Raised when a precondition for processing a request is not satisfied.</p>
 *
 * @throws {@link ReadOnlyViolationException} (client fault)
 *  <p>Raised when a request attempts to write to a read-only resource.</p>
 *
 * @throws {@link StatisticsNotAvailableException} (client fault)
 *  <p>Raised when statistics needed to satisfy a request are not available.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Raised when the number of requests being processed exceeds the limit.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>Raised when a request attempts to initiate an operation that is not supported.</p>
 *
 * @throws {@link NeptunedataServiceException}
 * <p>Base exception class for all service exceptions from Neptunedata service.</p>
 *
 */
export class GetPropertygraphSummaryCommand extends $Command<
  GetPropertygraphSummaryCommandInput,
  GetPropertygraphSummaryCommandOutput,
  NeptunedataClientResolvedConfig
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
  constructor(readonly input: GetPropertygraphSummaryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NeptunedataClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetPropertygraphSummaryCommandInput, GetPropertygraphSummaryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetPropertygraphSummaryCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NeptunedataClient";
    const commandName = "GetPropertygraphSummaryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonNeptuneDataplane",
        operation: "GetPropertygraphSummary",
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
  private serialize(input: GetPropertygraphSummaryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetPropertygraphSummaryCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetPropertygraphSummaryCommandOutput> {
    return de_GetPropertygraphSummaryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
