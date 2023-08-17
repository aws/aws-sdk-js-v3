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

import { GetSamplingStatisticSummariesRequest, GetSamplingStatisticSummariesResult } from "../models/models_0";
import {
  de_GetSamplingStatisticSummariesCommand,
  se_GetSamplingStatisticSummariesCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, XRayClientResolvedConfig } from "../XRayClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetSamplingStatisticSummariesCommand}.
 */
export interface GetSamplingStatisticSummariesCommandInput extends GetSamplingStatisticSummariesRequest {}
/**
 * @public
 *
 * The output of {@link GetSamplingStatisticSummariesCommand}.
 */
export interface GetSamplingStatisticSummariesCommandOutput
  extends GetSamplingStatisticSummariesResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Retrieves information about recent sampling results for all sampling rules.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, GetSamplingStatisticSummariesCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, GetSamplingStatisticSummariesCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * const client = new XRayClient(config);
 * const input = { // GetSamplingStatisticSummariesRequest
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetSamplingStatisticSummariesCommand(input);
 * const response = await client.send(command);
 * // { // GetSamplingStatisticSummariesResult
 * //   SamplingStatisticSummaries: [ // SamplingStatisticSummaryList
 * //     { // SamplingStatisticSummary
 * //       RuleName: "STRING_VALUE",
 * //       Timestamp: new Date("TIMESTAMP"),
 * //       RequestCount: Number("int"),
 * //       BorrowCount: Number("int"),
 * //       SampledCount: Number("int"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetSamplingStatisticSummariesCommandInput - {@link GetSamplingStatisticSummariesCommandInput}
 * @returns {@link GetSamplingStatisticSummariesCommandOutput}
 * @see {@link GetSamplingStatisticSummariesCommandInput} for command's `input` shape.
 * @see {@link GetSamplingStatisticSummariesCommandOutput} for command's `response` shape.
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
export class GetSamplingStatisticSummariesCommand extends $Command<
  GetSamplingStatisticSummariesCommandInput,
  GetSamplingStatisticSummariesCommandOutput,
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
  constructor(readonly input: GetSamplingStatisticSummariesCommandInput) {
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
  ): Handler<GetSamplingStatisticSummariesCommandInput, GetSamplingStatisticSummariesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetSamplingStatisticSummariesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "XRayClient";
    const commandName = "GetSamplingStatisticSummariesCommand";
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
  private serialize(input: GetSamplingStatisticSummariesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetSamplingStatisticSummariesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetSamplingStatisticSummariesCommandOutput> {
    return de_GetSamplingStatisticSummariesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
