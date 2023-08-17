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

import { ListAvailableResourceDimensionsRequest, ListAvailableResourceDimensionsResponse } from "../models/models_0";
import { PIClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PIClient";
import {
  de_ListAvailableResourceDimensionsCommand,
  se_ListAvailableResourceDimensionsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListAvailableResourceDimensionsCommand}.
 */
export interface ListAvailableResourceDimensionsCommandInput extends ListAvailableResourceDimensionsRequest {}
/**
 * @public
 *
 * The output of {@link ListAvailableResourceDimensionsCommand}.
 */
export interface ListAvailableResourceDimensionsCommandOutput
  extends ListAvailableResourceDimensionsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Retrieve the dimensions that can be queried for each specified metric type on a specified DB instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PIClient, ListAvailableResourceDimensionsCommand } from "@aws-sdk/client-pi"; // ES Modules import
 * // const { PIClient, ListAvailableResourceDimensionsCommand } = require("@aws-sdk/client-pi"); // CommonJS import
 * const client = new PIClient(config);
 * const input = { // ListAvailableResourceDimensionsRequest
 *   ServiceType: "RDS" || "DOCDB", // required
 *   Identifier: "STRING_VALUE", // required
 *   Metrics: [ // DimensionsMetricList // required
 *     "STRING_VALUE",
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListAvailableResourceDimensionsCommand(input);
 * const response = await client.send(command);
 * // { // ListAvailableResourceDimensionsResponse
 * //   MetricDimensions: [ // MetricDimensionsList
 * //     { // MetricDimensionGroups
 * //       Metric: "STRING_VALUE",
 * //       Groups: [ // DimensionGroupDetailList
 * //         { // DimensionGroupDetail
 * //           Group: "STRING_VALUE",
 * //           Dimensions: [ // DimensionDetailList
 * //             { // DimensionDetail
 * //               Identifier: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAvailableResourceDimensionsCommandInput - {@link ListAvailableResourceDimensionsCommandInput}
 * @returns {@link ListAvailableResourceDimensionsCommandOutput}
 * @see {@link ListAvailableResourceDimensionsCommandInput} for command's `input` shape.
 * @see {@link ListAvailableResourceDimensionsCommandOutput} for command's `response` shape.
 * @see {@link PIClientResolvedConfig | config} for PIClient's `config` shape.
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>The request failed due to an unknown error.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>One of the arguments provided is invalid for this request.</p>
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *  <p>The user is not authorized to perform this request.</p>
 *
 * @throws {@link PIServiceException}
 * <p>Base exception class for all service exceptions from PI service.</p>
 *
 */
export class ListAvailableResourceDimensionsCommand extends $Command<
  ListAvailableResourceDimensionsCommandInput,
  ListAvailableResourceDimensionsCommandOutput,
  PIClientResolvedConfig
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
  constructor(readonly input: ListAvailableResourceDimensionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PIClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAvailableResourceDimensionsCommandInput, ListAvailableResourceDimensionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAvailableResourceDimensionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PIClient";
    const commandName = "ListAvailableResourceDimensionsCommand";
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
  private serialize(
    input: ListAvailableResourceDimensionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListAvailableResourceDimensionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListAvailableResourceDimensionsCommandOutput> {
    return de_ListAvailableResourceDimensionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
