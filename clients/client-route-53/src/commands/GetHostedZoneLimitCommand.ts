// smithy-typescript generated code
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
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

import { GetHostedZoneLimitRequest, GetHostedZoneLimitResponse } from "../models/models_0";
import { de_GetHostedZoneLimitCommand, se_GetHostedZoneLimitCommand } from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetHostedZoneLimitCommand}.
 */
export interface GetHostedZoneLimitCommandInput extends GetHostedZoneLimitRequest {}
/**
 * @public
 *
 * The output of {@link GetHostedZoneLimitCommand}.
 */
export interface GetHostedZoneLimitCommandOutput extends GetHostedZoneLimitResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets the specified limit for a specified hosted zone, for example, the maximum number
 * 			of records that you can create in the hosted zone. </p>
 *          <p>For the default limit, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DNSLimitations.html">Limits</a> in the
 * 				<i>Amazon Route 53 Developer Guide</i>. To request a higher limit,
 * 				<a href="https://console.aws.amazon.com/support/home#/case/create?issueType=service-limit-increase&limitType=service-code-route53">open a case</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, GetHostedZoneLimitCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, GetHostedZoneLimitCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const input = { // GetHostedZoneLimitRequest
 *   Type: "MAX_RRSETS_BY_ZONE" || "MAX_VPCS_ASSOCIATED_BY_ZONE", // required
 *   HostedZoneId: "STRING_VALUE", // required
 * };
 * const command = new GetHostedZoneLimitCommand(input);
 * const response = await client.send(command);
 * // { // GetHostedZoneLimitResponse
 * //   Limit: { // HostedZoneLimit
 * //     Type: "MAX_RRSETS_BY_ZONE" || "MAX_VPCS_ASSOCIATED_BY_ZONE", // required
 * //     Value: Number("long"), // required
 * //   },
 * //   Count: Number("long"), // required
 * // };
 *
 * ```
 *
 * @param GetHostedZoneLimitCommandInput - {@link GetHostedZoneLimitCommandInput}
 * @returns {@link GetHostedZoneLimitCommandOutput}
 * @see {@link GetHostedZoneLimitCommandInput} for command's `input` shape.
 * @see {@link GetHostedZoneLimitCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link HostedZoneNotPrivate} (client fault)
 *  <p>The specified hosted zone is a public hosted zone, not a private hosted zone.</p>
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link NoSuchHostedZone} (client fault)
 *  <p>No hosted zone exists with the ID that you specified.</p>
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 */
export class GetHostedZoneLimitCommand extends $Command<
  GetHostedZoneLimitCommandInput,
  GetHostedZoneLimitCommandOutput,
  Route53ClientResolvedConfig
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
  constructor(readonly input: GetHostedZoneLimitCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetHostedZoneLimitCommandInput, GetHostedZoneLimitCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetHostedZoneLimitCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getIdNormalizerPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "GetHostedZoneLimitCommand";
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
  private serialize(input: GetHostedZoneLimitCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetHostedZoneLimitCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetHostedZoneLimitCommandOutput> {
    return de_GetHostedZoneLimitCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
