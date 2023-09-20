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

import { GetDimensionKeyDetailsRequest, GetDimensionKeyDetailsResponse } from "../models/models_0";
import { PIClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PIClient";
import { de_GetDimensionKeyDetailsCommand, se_GetDimensionKeyDetailsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetDimensionKeyDetailsCommand}.
 */
export interface GetDimensionKeyDetailsCommandInput extends GetDimensionKeyDetailsRequest {}
/**
 * @public
 *
 * The output of {@link GetDimensionKeyDetailsCommand}.
 */
export interface GetDimensionKeyDetailsCommandOutput extends GetDimensionKeyDetailsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Get the attributes of the specified dimension group for a DB instance or data source. For example, if you specify a SQL ID,
 *                 <code>GetDimensionKeyDetails</code> retrieves the full text of the dimension <code>db.sql.statement</code> associated with this ID.
 *             This operation is useful because <code>GetResourceMetrics</code> and <code>DescribeDimensionKeys</code> don't support retrieval of large
 *             SQL statement text.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PIClient, GetDimensionKeyDetailsCommand } from "@aws-sdk/client-pi"; // ES Modules import
 * // const { PIClient, GetDimensionKeyDetailsCommand } = require("@aws-sdk/client-pi"); // CommonJS import
 * const client = new PIClient(config);
 * const input = { // GetDimensionKeyDetailsRequest
 *   ServiceType: "RDS" || "DOCDB", // required
 *   Identifier: "STRING_VALUE", // required
 *   Group: "STRING_VALUE", // required
 *   GroupIdentifier: "STRING_VALUE", // required
 *   RequestedDimensions: [ // RequestedDimensionList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new GetDimensionKeyDetailsCommand(input);
 * const response = await client.send(command);
 * // { // GetDimensionKeyDetailsResponse
 * //   Dimensions: [ // DimensionKeyDetailList
 * //     { // DimensionKeyDetail
 * //       Value: "STRING_VALUE",
 * //       Dimension: "STRING_VALUE",
 * //       Status: "AVAILABLE" || "PROCESSING" || "UNAVAILABLE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetDimensionKeyDetailsCommandInput - {@link GetDimensionKeyDetailsCommandInput}
 * @returns {@link GetDimensionKeyDetailsCommandOutput}
 * @see {@link GetDimensionKeyDetailsCommandInput} for command's `input` shape.
 * @see {@link GetDimensionKeyDetailsCommandOutput} for command's `response` shape.
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
export class GetDimensionKeyDetailsCommand extends $Command<
  GetDimensionKeyDetailsCommandInput,
  GetDimensionKeyDetailsCommandOutput,
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
  constructor(readonly input: GetDimensionKeyDetailsCommandInput) {
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
  ): Handler<GetDimensionKeyDetailsCommandInput, GetDimensionKeyDetailsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetDimensionKeyDetailsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PIClient";
    const commandName = "GetDimensionKeyDetailsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "PerformanceInsightsv20180227",
        operation: "GetDimensionKeyDetails",
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
  private serialize(input: GetDimensionKeyDetailsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetDimensionKeyDetailsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDimensionKeyDetailsCommandOutput> {
    return de_GetDimensionKeyDetailsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
