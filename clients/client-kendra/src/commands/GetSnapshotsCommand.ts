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

import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient";
import { GetSnapshotsRequest, GetSnapshotsResponse } from "../models/models_0";
import { de_GetSnapshotsCommand, se_GetSnapshotsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetSnapshotsCommand}.
 */
export interface GetSnapshotsCommandInput extends GetSnapshotsRequest {}
/**
 * @public
 *
 * The output of {@link GetSnapshotsCommand}.
 */
export interface GetSnapshotsCommandOutput extends GetSnapshotsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves search metrics data. The data provides a snapshot of how your users interact
 *             with your search application and how effective the application is.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, GetSnapshotsCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, GetSnapshotsCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const input = { // GetSnapshotsRequest
 *   IndexId: "STRING_VALUE", // required
 *   Interval: "THIS_MONTH" || "THIS_WEEK" || "ONE_WEEK_AGO" || "TWO_WEEKS_AGO" || "ONE_MONTH_AGO" || "TWO_MONTHS_AGO", // required
 *   MetricType: "QUERIES_BY_COUNT" || "QUERIES_BY_ZERO_CLICK_RATE" || "QUERIES_BY_ZERO_RESULT_RATE" || "DOCS_BY_CLICK_COUNT" || "AGG_QUERY_DOC_METRICS" || "TREND_QUERY_DOC_METRICS", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new GetSnapshotsCommand(input);
 * const response = await client.send(command);
 * // { // GetSnapshotsResponse
 * //   SnapShotTimeFilter: { // TimeRange
 * //     StartTime: new Date("TIMESTAMP"),
 * //     EndTime: new Date("TIMESTAMP"),
 * //   },
 * //   SnapshotsDataHeader: [ // SnapshotsDataHeaderFields
 * //     "STRING_VALUE",
 * //   ],
 * //   SnapshotsData: [ // SnapshotsDataRecords
 * //     [ // SnapshotsDataRecord
 * //       "STRING_VALUE",
 * //     ],
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetSnapshotsCommandInput - {@link GetSnapshotsCommandInput}
 * @returns {@link GetSnapshotsCommandOutput}
 * @see {@link GetSnapshotsCommandInput} for command's `input` shape.
 * @see {@link GetSnapshotsCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for KendraClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action. Please ensure you have the
 *             required permission policies and user accounts and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An issue occurred with the internal server used for your Amazon Kendra service.
 *             Please wait a few minutes and try again, or contact <a href="http://aws.amazon.com/contact-us/">Support</a> for help.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The input to the request is not valid. Please provide the correct input and try
 *             again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource you want to use doesn’t exist. Please check you have provided the correct
 *             resource and try again.</p>
 *
 * @throws {@link KendraServiceException}
 * <p>Base exception class for all service exceptions from Kendra service.</p>
 *
 */
export class GetSnapshotsCommand extends $Command<
  GetSnapshotsCommandInput,
  GetSnapshotsCommandOutput,
  KendraClientResolvedConfig
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
  constructor(readonly input: GetSnapshotsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KendraClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSnapshotsCommandInput, GetSnapshotsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetSnapshotsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KendraClient";
    const commandName = "GetSnapshotsCommand";
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
  private serialize(input: GetSnapshotsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetSnapshotsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSnapshotsCommandOutput> {
    return de_GetSnapshotsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
