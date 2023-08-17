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

import { GetHealthCheckLastFailureReasonRequest, GetHealthCheckLastFailureReasonResponse } from "../models/models_0";
import {
  de_GetHealthCheckLastFailureReasonCommand,
  se_GetHealthCheckLastFailureReasonCommand,
} from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetHealthCheckLastFailureReasonCommand}.
 */
export interface GetHealthCheckLastFailureReasonCommandInput extends GetHealthCheckLastFailureReasonRequest {}
/**
 * @public
 *
 * The output of {@link GetHealthCheckLastFailureReasonCommand}.
 */
export interface GetHealthCheckLastFailureReasonCommandOutput
  extends GetHealthCheckLastFailureReasonResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Gets the reason that a specified health check failed most recently.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, GetHealthCheckLastFailureReasonCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, GetHealthCheckLastFailureReasonCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const input = { // GetHealthCheckLastFailureReasonRequest
 *   HealthCheckId: "STRING_VALUE", // required
 * };
 * const command = new GetHealthCheckLastFailureReasonCommand(input);
 * const response = await client.send(command);
 * // { // GetHealthCheckLastFailureReasonResponse
 * //   HealthCheckObservations: [ // HealthCheckObservations // required
 * //     { // HealthCheckObservation
 * //       Region: "us-east-1" || "us-west-1" || "us-west-2" || "eu-west-1" || "ap-southeast-1" || "ap-southeast-2" || "ap-northeast-1" || "sa-east-1",
 * //       IPAddress: "STRING_VALUE",
 * //       StatusReport: { // StatusReport
 * //         Status: "STRING_VALUE",
 * //         CheckedTime: new Date("TIMESTAMP"),
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetHealthCheckLastFailureReasonCommandInput - {@link GetHealthCheckLastFailureReasonCommandInput}
 * @returns {@link GetHealthCheckLastFailureReasonCommandOutput}
 * @see {@link GetHealthCheckLastFailureReasonCommandInput} for command's `input` shape.
 * @see {@link GetHealthCheckLastFailureReasonCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link NoSuchHealthCheck} (client fault)
 *  <p>No health check exists with the specified ID.</p>
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 */
export class GetHealthCheckLastFailureReasonCommand extends $Command<
  GetHealthCheckLastFailureReasonCommandInput,
  GetHealthCheckLastFailureReasonCommandOutput,
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
  constructor(readonly input: GetHealthCheckLastFailureReasonCommandInput) {
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
  ): Handler<GetHealthCheckLastFailureReasonCommandInput, GetHealthCheckLastFailureReasonCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetHealthCheckLastFailureReasonCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "GetHealthCheckLastFailureReasonCommand";
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
    input: GetHealthCheckLastFailureReasonCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetHealthCheckLastFailureReasonCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetHealthCheckLastFailureReasonCommandOutput> {
    return de_GetHealthCheckLastFailureReasonCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
