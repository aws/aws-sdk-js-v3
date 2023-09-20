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

import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { GetUsagePlanRequest, UsagePlan } from "../models/models_0";
import { de_GetUsagePlanCommand, se_GetUsagePlanCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetUsagePlanCommand}.
 */
export interface GetUsagePlanCommandInput extends GetUsagePlanRequest {}
/**
 * @public
 *
 * The output of {@link GetUsagePlanCommand}.
 */
export interface GetUsagePlanCommandOutput extends UsagePlan, __MetadataBearer {}

/**
 * @public
 * <p>Gets a usage plan of a given plan identifier.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetUsagePlanCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetUsagePlanCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const input = { // GetUsagePlanRequest
 *   usagePlanId: "STRING_VALUE", // required
 * };
 * const command = new GetUsagePlanCommand(input);
 * const response = await client.send(command);
 * // { // UsagePlan
 * //   id: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   apiStages: [ // ListOfApiStage
 * //     { // ApiStage
 * //       apiId: "STRING_VALUE",
 * //       stage: "STRING_VALUE",
 * //       throttle: { // MapOfApiStageThrottleSettings
 * //         "<keys>": { // ThrottleSettings
 * //           burstLimit: Number("int"),
 * //           rateLimit: Number("double"),
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   throttle: {
 * //     burstLimit: Number("int"),
 * //     rateLimit: Number("double"),
 * //   },
 * //   quota: { // QuotaSettings
 * //     limit: Number("int"),
 * //     offset: Number("int"),
 * //     period: "DAY" || "WEEK" || "MONTH",
 * //   },
 * //   productCode: "STRING_VALUE",
 * //   tags: { // MapOfStringToString
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetUsagePlanCommandInput - {@link GetUsagePlanCommandInput}
 * @returns {@link GetUsagePlanCommandOutput}
 * @see {@link GetUsagePlanCommandInput} for command's `input` shape.
 * @see {@link GetUsagePlanCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for APIGatewayClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The requested resource is not found. Make sure that the request URI is correct.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request has reached its throttling limit. Retry after the specified time period.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The request is denied because the caller has insufficient permissions.</p>
 *
 * @throws {@link APIGatewayServiceException}
 * <p>Base exception class for all service exceptions from APIGateway service.</p>
 *
 */
export class GetUsagePlanCommand extends $Command<
  GetUsagePlanCommandInput,
  GetUsagePlanCommandOutput,
  APIGatewayClientResolvedConfig
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
  constructor(readonly input: GetUsagePlanCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: APIGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetUsagePlanCommandInput, GetUsagePlanCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetUsagePlanCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "APIGatewayClient";
    const commandName = "GetUsagePlanCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "BackplaneControlService",
        operation: "GetUsagePlan",
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
  private serialize(input: GetUsagePlanCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetUsagePlanCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetUsagePlanCommandOutput> {
    return de_GetUsagePlanCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
