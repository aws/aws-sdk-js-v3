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

import { GetSparqlStreamInput, GetSparqlStreamOutput } from "../models/models_0";
import { NeptunedataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptunedataClient";
import { de_GetSparqlStreamCommand, se_GetSparqlStreamCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetSparqlStreamCommand}.
 */
export interface GetSparqlStreamCommandInput extends GetSparqlStreamInput {}
/**
 * @public
 *
 * The output of {@link GetSparqlStreamCommand}.
 */
export interface GetSparqlStreamCommandOutput extends GetSparqlStreamOutput, __MetadataBearer {}

/**
 * @public
 * <p>Gets a stream for an RDF graph.</p>
 *          <p>With the Neptune Streams feature, you can generate a complete
 *       sequence of change-log entries that record every change made to your
 *       graph data as it happens. <code>GetSparqlStream</code> lets
 *       you collect these change-log entries for an RDF graph.</p>
 *          <p>The Neptune streams feature needs to be enabled on your Neptune
 *       DBcluster. To enable streams, set the <a href="https://docs.aws.amazon.com/neptune/latest/userguide/parameters.html#parameters-db-cluster-parameters-neptune_streams">neptune_streams</a>
 *       DB cluster parameter to <code>1</code>.</p>
 *          <p>See <a href="https://docs.aws.amazon.com/neptune/latest/userguide/streams.html">Capturing
 *     graph changes in real time using Neptune streams</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptunedataClient, GetSparqlStreamCommand } from "@aws-sdk/client-neptunedata"; // ES Modules import
 * // const { NeptunedataClient, GetSparqlStreamCommand } = require("@aws-sdk/client-neptunedata"); // CommonJS import
 * const client = new NeptunedataClient(config);
 * const input = { // GetSparqlStreamInput
 *   limit: Number("long"),
 *   iteratorType: "AT_SEQUENCE_NUMBER" || "AFTER_SEQUENCE_NUMBER" || "TRIM_HORIZON" || "LATEST",
 *   commitNum: Number("long"),
 *   opNum: Number("long"),
 *   encoding: "gzip",
 * };
 * const command = new GetSparqlStreamCommand(input);
 * const response = await client.send(command);
 * // { // GetSparqlStreamOutput
 * //   lastEventId: { // StringValuedMap // required
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   lastTrxTimestampInMillis: Number("long"), // required
 * //   format: "STRING_VALUE", // required
 * //   records: [ // SparqlRecordsList // required
 * //     { // SparqlRecord
 * //       commitTimestampInMillis: Number("long"), // required
 * //       eventId: { // required
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       data: { // SparqlData
 * //         stmt: "STRING_VALUE", // required
 * //       },
 * //       op: "STRING_VALUE", // required
 * //       isLastOp: true || false,
 * //     },
 * //   ],
 * //   totalRecords: Number("int"), // required
 * // };
 *
 * ```
 *
 * @param GetSparqlStreamCommandInput - {@link GetSparqlStreamCommandInput}
 * @returns {@link GetSparqlStreamCommandOutput}
 * @see {@link GetSparqlStreamCommandInput} for command's `input` shape.
 * @see {@link GetSparqlStreamCommandOutput} for command's `response` shape.
 * @see {@link NeptunedataClientResolvedConfig | config} for NeptunedataClient's `config` shape.
 *
 * @throws {@link ClientTimeoutException} (client fault)
 *  <p>Raised when a request timed out in the client.</p>
 *
 * @throws {@link ConstraintViolationException} (client fault)
 *  <p>Raised when a value in a request field did not satisfy required constraints.</p>
 *
 * @throws {@link ExpiredStreamException} (client fault)
 *  <p>Raised when a request attempts to access an stream that has expired.</p>
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
 * @throws {@link MemoryLimitExceededException} (server fault)
 *  <p>Raised when a request fails because of insufficient memory resources. The
 *       request can be retried.</p>
 *
 * @throws {@link PreconditionsFailedException} (client fault)
 *  <p>Raised when a precondition for processing a request is not satisfied.</p>
 *
 * @throws {@link StreamRecordsNotFoundException} (client fault)
 *  <p>Raised when stream records requested by a query cannot be found.</p>
 *
 * @throws {@link ThrottlingException} (server fault)
 *  <p>Raised when the rate of requests exceeds the maximum throughput. Requests can
 *       be retried after encountering this exception.</p>
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
export class GetSparqlStreamCommand extends $Command<
  GetSparqlStreamCommandInput,
  GetSparqlStreamCommandOutput,
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
  constructor(readonly input: GetSparqlStreamCommandInput) {
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
  ): Handler<GetSparqlStreamCommandInput, GetSparqlStreamCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetSparqlStreamCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NeptunedataClient";
    const commandName = "GetSparqlStreamCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonNeptuneDataplane",
        operation: "GetSparqlStream",
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
  private serialize(input: GetSparqlStreamCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetSparqlStreamCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSparqlStreamCommandOutput> {
    return de_GetSparqlStreamCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
