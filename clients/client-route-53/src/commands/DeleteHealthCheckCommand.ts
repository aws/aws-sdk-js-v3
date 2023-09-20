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

import { DeleteHealthCheckRequest, DeleteHealthCheckResponse } from "../models/models_0";
import { de_DeleteHealthCheckCommand, se_DeleteHealthCheckCommand } from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteHealthCheckCommand}.
 */
export interface DeleteHealthCheckCommandInput extends DeleteHealthCheckRequest {}
/**
 * @public
 *
 * The output of {@link DeleteHealthCheckCommand}.
 */
export interface DeleteHealthCheckCommandOutput extends DeleteHealthCheckResponse, __MetadataBearer {}

/**
 * @public
 * <p>Deletes a health check.</p>
 *          <important>
 *             <p>Amazon Route 53 does not prevent you from deleting a health check even if the
 * 				health check is associated with one or more resource record sets. If you delete a
 * 				health check and you don't update the associated resource record sets, the future
 * 				status of the health check can't be predicted and may change. This will affect the
 * 				routing of DNS queries for your DNS failover configuration. For more information,
 * 				see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/health-checks-creating-deleting.html#health-checks-deleting.html">Replacing and Deleting Health Checks</a> in the <i>Amazon Route 53
 * 					Developer Guide</i>.</p>
 *          </important>
 *          <p>If you're using Cloud Map and you configured Cloud Map to create a Route 53
 * 			health check when you register an instance, you can't use the Route 53
 * 				<code>DeleteHealthCheck</code> command to delete the health check. The health check
 * 			is deleted automatically when you deregister the instance; there can be a delay of
 * 			several hours before the health check is deleted from Route 53. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, DeleteHealthCheckCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, DeleteHealthCheckCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const input = { // DeleteHealthCheckRequest
 *   HealthCheckId: "STRING_VALUE", // required
 * };
 * const command = new DeleteHealthCheckCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteHealthCheckCommandInput - {@link DeleteHealthCheckCommandInput}
 * @returns {@link DeleteHealthCheckCommandOutput}
 * @see {@link DeleteHealthCheckCommandInput} for command's `input` shape.
 * @see {@link DeleteHealthCheckCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link HealthCheckInUse} (client fault)
 *  <p>This error code is not in use.</p>
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
export class DeleteHealthCheckCommand extends $Command<
  DeleteHealthCheckCommandInput,
  DeleteHealthCheckCommandOutput,
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
  constructor(readonly input: DeleteHealthCheckCommandInput) {
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
  ): Handler<DeleteHealthCheckCommandInput, DeleteHealthCheckCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteHealthCheckCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "DeleteHealthCheckCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSDnsV20130401",
        operation: "DeleteHealthCheck",
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
  private serialize(input: DeleteHealthCheckCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteHealthCheckCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteHealthCheckCommandOutput> {
    return de_DeleteHealthCheckCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
