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

import { GetRDFGraphSummaryInput, GetRDFGraphSummaryOutput } from "../models/models_0";
import { NeptunedataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptunedataClient";
import { de_GetRDFGraphSummaryCommand, se_GetRDFGraphSummaryCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetRDFGraphSummaryCommand}.
 */
export interface GetRDFGraphSummaryCommandInput extends GetRDFGraphSummaryInput {}
/**
 * @public
 *
 * The output of {@link GetRDFGraphSummaryCommand}.
 */
export interface GetRDFGraphSummaryCommandOutput extends GetRDFGraphSummaryOutput, __MetadataBearer {}

/**
 * @public
 * <p>Gets a graph summary for an RDF graph.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptunedataClient, GetRDFGraphSummaryCommand } from "@aws-sdk/client-neptunedata"; // ES Modules import
 * // const { NeptunedataClient, GetRDFGraphSummaryCommand } = require("@aws-sdk/client-neptunedata"); // CommonJS import
 * const client = new NeptunedataClient(config);
 * const input = { // GetRDFGraphSummaryInput
 *   mode: "basic" || "detailed",
 * };
 * const command = new GetRDFGraphSummaryCommand(input);
 * const response = await client.send(command);
 * // { // GetRDFGraphSummaryOutput
 * //   statusCode: Number("int"),
 * //   payload: { // RDFGraphSummaryValueMap
 * //     version: "STRING_VALUE",
 * //     lastStatisticsComputationTime: new Date("TIMESTAMP"),
 * //     graphSummary: { // RDFGraphSummary
 * //       numDistinctSubjects: Number("long"),
 * //       numDistinctPredicates: Number("long"),
 * //       numQuads: Number("long"),
 * //       numClasses: Number("long"),
 * //       classes: [ // Classes
 * //         "STRING_VALUE",
 * //       ],
 * //       predicates: [ // LongValuedMapList
 * //         { // LongValuedMap
 * //           "<keys>": Number("long"),
 * //         },
 * //       ],
 * //       subjectStructures: [ // SubjectStructures
 * //         { // SubjectStructure
 * //           count: Number("long"),
 * //           predicates: [ // Predicates
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
 * @param GetRDFGraphSummaryCommandInput - {@link GetRDFGraphSummaryCommandInput}
 * @returns {@link GetRDFGraphSummaryCommandOutput}
 * @see {@link GetRDFGraphSummaryCommandInput} for command's `input` shape.
 * @see {@link GetRDFGraphSummaryCommandOutput} for command's `response` shape.
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
export class GetRDFGraphSummaryCommand extends $Command<
  GetRDFGraphSummaryCommandInput,
  GetRDFGraphSummaryCommandOutput,
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
  constructor(readonly input: GetRDFGraphSummaryCommandInput) {
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
  ): Handler<GetRDFGraphSummaryCommandInput, GetRDFGraphSummaryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetRDFGraphSummaryCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NeptunedataClient";
    const commandName = "GetRDFGraphSummaryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonNeptuneDataplane",
        operation: "GetRDFGraphSummary",
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
  private serialize(input: GetRDFGraphSummaryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetRDFGraphSummaryCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetRDFGraphSummaryCommandOutput> {
    return de_GetRDFGraphSummaryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
