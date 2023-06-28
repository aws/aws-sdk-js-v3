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

import { GetInsightImpactGraphRequest, GetInsightImpactGraphResult } from "../models/models_0";
import { de_GetInsightImpactGraphCommand, se_GetInsightImpactGraphCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, XRayClientResolvedConfig } from "../XRayClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetInsightImpactGraphCommand}.
 */
export interface GetInsightImpactGraphCommandInput extends GetInsightImpactGraphRequest {}
/**
 * @public
 *
 * The output of {@link GetInsightImpactGraphCommand}.
 */
export interface GetInsightImpactGraphCommandOutput extends GetInsightImpactGraphResult, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves a service graph structure filtered by the specified insight. The service graph is limited to only
 *          structural information. For a complete service graph, use this API with the GetServiceGraph API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, GetInsightImpactGraphCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, GetInsightImpactGraphCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * const client = new XRayClient(config);
 * const input = { // GetInsightImpactGraphRequest
 *   InsightId: "STRING_VALUE", // required
 *   StartTime: new Date("TIMESTAMP"), // required
 *   EndTime: new Date("TIMESTAMP"), // required
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetInsightImpactGraphCommand(input);
 * const response = await client.send(command);
 * // { // GetInsightImpactGraphResult
 * //   InsightId: "STRING_VALUE",
 * //   StartTime: new Date("TIMESTAMP"),
 * //   EndTime: new Date("TIMESTAMP"),
 * //   ServiceGraphStartTime: new Date("TIMESTAMP"),
 * //   ServiceGraphEndTime: new Date("TIMESTAMP"),
 * //   Services: [ // InsightImpactGraphServiceList
 * //     { // InsightImpactGraphService
 * //       ReferenceId: Number("int"),
 * //       Type: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Names: [ // ServiceNames
 * //         "STRING_VALUE",
 * //       ],
 * //       AccountId: "STRING_VALUE",
 * //       Edges: [ // InsightImpactGraphEdgeList
 * //         { // InsightImpactGraphEdge
 * //           ReferenceId: Number("int"),
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetInsightImpactGraphCommandInput - {@link GetInsightImpactGraphCommandInput}
 * @returns {@link GetInsightImpactGraphCommandOutput}
 * @see {@link GetInsightImpactGraphCommandInput} for command's `input` shape.
 * @see {@link GetInsightImpactGraphCommandOutput} for command's `response` shape.
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
export class GetInsightImpactGraphCommand extends $Command<
  GetInsightImpactGraphCommandInput,
  GetInsightImpactGraphCommandOutput,
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
  constructor(readonly input: GetInsightImpactGraphCommandInput) {
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
  ): Handler<GetInsightImpactGraphCommandInput, GetInsightImpactGraphCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetInsightImpactGraphCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "XRayClient";
    const commandName = "GetInsightImpactGraphCommand";
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
  private serialize(input: GetInsightImpactGraphCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetInsightImpactGraphCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetInsightImpactGraphCommandOutput> {
    return de_GetInsightImpactGraphCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
