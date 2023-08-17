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

import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { DescribeRouteCalculatorRequest, DescribeRouteCalculatorResponse } from "../models/models_0";
import { de_DescribeRouteCalculatorCommand, se_DescribeRouteCalculatorCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeRouteCalculatorCommand}.
 */
export interface DescribeRouteCalculatorCommandInput extends DescribeRouteCalculatorRequest {}
/**
 * @public
 *
 * The output of {@link DescribeRouteCalculatorCommand}.
 */
export interface DescribeRouteCalculatorCommandOutput extends DescribeRouteCalculatorResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the route calculator resource details.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, DescribeRouteCalculatorCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, DescribeRouteCalculatorCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const input = { // DescribeRouteCalculatorRequest
 *   CalculatorName: "STRING_VALUE", // required
 * };
 * const command = new DescribeRouteCalculatorCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRouteCalculatorResponse
 * //   CalculatorName: "STRING_VALUE", // required
 * //   CalculatorArn: "STRING_VALUE", // required
 * //   PricingPlan: "STRING_VALUE",
 * //   Description: "STRING_VALUE", // required
 * //   CreateTime: new Date("TIMESTAMP"), // required
 * //   UpdateTime: new Date("TIMESTAMP"), // required
 * //   DataSource: "STRING_VALUE", // required
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeRouteCalculatorCommandInput - {@link DescribeRouteCalculatorCommandInput}
 * @returns {@link DescribeRouteCalculatorCommandOutput}
 * @see {@link DescribeRouteCalculatorCommandInput} for command's `input` shape.
 * @see {@link DescribeRouteCalculatorCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because of insufficient access or permissions. Check with an
 *       administrator to verify your permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed to process because of an unknown server error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource that you've entered was not found in your AWS account.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because of request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to meet the constraints specified by the AWS service. </p>
 *
 * @throws {@link LocationServiceException}
 * <p>Base exception class for all service exceptions from Location service.</p>
 *
 */
export class DescribeRouteCalculatorCommand extends $Command<
  DescribeRouteCalculatorCommandInput,
  DescribeRouteCalculatorCommandOutput,
  LocationClientResolvedConfig
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
  constructor(readonly input: DescribeRouteCalculatorCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LocationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeRouteCalculatorCommandInput, DescribeRouteCalculatorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeRouteCalculatorCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LocationClient";
    const commandName = "DescribeRouteCalculatorCommand";
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
  private serialize(input: DescribeRouteCalculatorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeRouteCalculatorCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeRouteCalculatorCommandOutput> {
    return de_DescribeRouteCalculatorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
