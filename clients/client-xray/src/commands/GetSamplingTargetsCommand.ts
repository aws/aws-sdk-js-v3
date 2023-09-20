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

import { GetSamplingTargetsRequest, GetSamplingTargetsResult } from "../models/models_0";
import { de_GetSamplingTargetsCommand, se_GetSamplingTargetsCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, XRayClientResolvedConfig } from "../XRayClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetSamplingTargetsCommand}.
 */
export interface GetSamplingTargetsCommandInput extends GetSamplingTargetsRequest {}
/**
 * @public
 *
 * The output of {@link GetSamplingTargetsCommand}.
 */
export interface GetSamplingTargetsCommandOutput extends GetSamplingTargetsResult, __MetadataBearer {}

/**
 * @public
 * <p>Requests a sampling quota for rules that the service is using to sample requests.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, GetSamplingTargetsCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, GetSamplingTargetsCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * const client = new XRayClient(config);
 * const input = { // GetSamplingTargetsRequest
 *   SamplingStatisticsDocuments: [ // SamplingStatisticsDocumentList // required
 *     { // SamplingStatisticsDocument
 *       RuleName: "STRING_VALUE", // required
 *       ClientID: "STRING_VALUE", // required
 *       Timestamp: new Date("TIMESTAMP"), // required
 *       RequestCount: Number("int"), // required
 *       SampledCount: Number("int"), // required
 *       BorrowCount: Number("int"),
 *     },
 *   ],
 * };
 * const command = new GetSamplingTargetsCommand(input);
 * const response = await client.send(command);
 * // { // GetSamplingTargetsResult
 * //   SamplingTargetDocuments: [ // SamplingTargetDocumentList
 * //     { // SamplingTargetDocument
 * //       RuleName: "STRING_VALUE",
 * //       FixedRate: Number("double"),
 * //       ReservoirQuota: Number("int"),
 * //       ReservoirQuotaTTL: new Date("TIMESTAMP"),
 * //       Interval: Number("int"),
 * //     },
 * //   ],
 * //   LastRuleModification: new Date("TIMESTAMP"),
 * //   UnprocessedStatistics: [ // UnprocessedStatisticsList
 * //     { // UnprocessedStatistics
 * //       RuleName: "STRING_VALUE",
 * //       ErrorCode: "STRING_VALUE",
 * //       Message: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetSamplingTargetsCommandInput - {@link GetSamplingTargetsCommandInput}
 * @returns {@link GetSamplingTargetsCommandOutput}
 * @see {@link GetSamplingTargetsCommandInput} for command's `input` shape.
 * @see {@link GetSamplingTargetsCommandOutput} for command's `response` shape.
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
export class GetSamplingTargetsCommand extends $Command<
  GetSamplingTargetsCommandInput,
  GetSamplingTargetsCommandOutput,
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
  constructor(readonly input: GetSamplingTargetsCommandInput) {
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
  ): Handler<GetSamplingTargetsCommandInput, GetSamplingTargetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetSamplingTargetsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "XRayClient";
    const commandName = "GetSamplingTargetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSXRay",
        operation: "GetSamplingTargets",
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
  private serialize(input: GetSamplingTargetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetSamplingTargetsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSamplingTargetsCommandOutput> {
    return de_GetSamplingTargetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
