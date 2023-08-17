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

import { BatchGetTracesRequest, BatchGetTracesResult } from "../models/models_0";
import { de_BatchGetTracesCommand, se_BatchGetTracesCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, XRayClientResolvedConfig } from "../XRayClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchGetTracesCommand}.
 */
export interface BatchGetTracesCommandInput extends BatchGetTracesRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetTracesCommand}.
 */
export interface BatchGetTracesCommandOutput extends BatchGetTracesResult, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves a list of traces specified by ID. Each trace is a collection of segment
 *       documents that originates from a single request. Use <code>GetTraceSummaries</code> to get a
 *       list of trace IDs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, BatchGetTracesCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, BatchGetTracesCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * const client = new XRayClient(config);
 * const input = { // BatchGetTracesRequest
 *   TraceIds: [ // TraceIdList // required
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new BatchGetTracesCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetTracesResult
 * //   Traces: [ // TraceList
 * //     { // Trace
 * //       Id: "STRING_VALUE",
 * //       Duration: Number("double"),
 * //       LimitExceeded: true || false,
 * //       Segments: [ // SegmentList
 * //         { // Segment
 * //           Id: "STRING_VALUE",
 * //           Document: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   UnprocessedTraceIds: [ // UnprocessedTraceIdList
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param BatchGetTracesCommandInput - {@link BatchGetTracesCommandInput}
 * @returns {@link BatchGetTracesCommandOutput}
 * @see {@link BatchGetTracesCommandInput} for command's `input` shape.
 * @see {@link BatchGetTracesCommandOutput} for command's `response` shape.
 * @see {@link XRayClientResolvedConfig | config} for XRayClient's `config` shape.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is missing required parameters or has invalid parameters.</p>
 *
 * @throws {@link ThrottledException} (client fault)
 *  <p>The request exceeds the maximum number of requests per second.</p>
 *
 * @throws {@link XRayServiceException}
 * <p>Base exception class for all service exceptions from XRay service.</p>
 *
 */
export class BatchGetTracesCommand extends $Command<
  BatchGetTracesCommandInput,
  BatchGetTracesCommandOutput,
  XRayClientResolvedConfig
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
  constructor(readonly input: BatchGetTracesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: XRayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchGetTracesCommandInput, BatchGetTracesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchGetTracesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "XRayClient";
    const commandName = "BatchGetTracesCommand";
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
  private serialize(input: BatchGetTracesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BatchGetTracesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchGetTracesCommandOutput> {
    return de_BatchGetTracesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
