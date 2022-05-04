// smithy-typescript generated code
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  MigrationHubRefactorSpacesClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MigrationHubRefactorSpacesClient";
import { CreateRouteRequest, CreateRouteResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateRouteCommand,
  serializeAws_restJson1CreateRouteCommand,
} from "../protocols/Aws_restJson1";

export interface CreateRouteCommandInput extends CreateRouteRequest {}
export interface CreateRouteCommandOutput extends CreateRouteResponse, __MetadataBearer {}

/**
 * <p>Creates an Amazon Web Services Migration Hub Refactor Spaces route. The account owner of the service resource is always the
 *       environment owner, regardless of which account creates the route. Routes target a service in
 *       the application. If an application does not have any routes, then the first route must be
 *       created as a <code>DEFAULT</code>
 *             <code>RouteType</code>.</p>
 *          <p>When you create a route, Refactor Spaces configures the Amazon API Gateway to send traffic
 *       to the target service as follows:</p>
 *          <ul>
 *             <li>
 *                <p>If the service has a URL endpoint, and the endpoint resolves to a private IP address,
 *           Refactor Spaces routes traffic using the API Gateway VPC link. </p>
 *             </li>
 *             <li>
 *                <p>If the service has a URL endpoint, and the endpoint resolves to a public IP address,
 *           Refactor Spaces routes traffic over the public internet.</p>
 *             </li>
 *             <li>
 *                <p>If the service has an Lambda function endpoint, then Refactor Spaces
 *           configures the Lambda function's resource policy to allow the application's
 *             API Gateway to invoke the function.</p>
 *             </li>
 *          </ul>
 *          <p>A one-time health check is performed on the service when the route is created. If the
 *       health check fails, the route transitions to <code>FAILED</code>, and no traffic is sent to
 *       the service.</p>
 *          <p>For Lambda functions, the Lambda function state is checked. If the
 *       function is not active, the function configuration is updated so that Lambda
 *       resources are provisioned. If the Lambda state is <code>Failed</code>, then the
 *       route creation fails. For more information, see the <a href="https://docs.aws.amazon.com/lambda/latest/dg/API_GetFunctionConfiguration.html#SSS-GetFunctionConfiguration-response-State">GetFunctionConfiguration's State response parameter</a> in the <i>Lambda Developer Guide</i>.</p>
 *          <p>For public URLs, a connection is opened to the public endpoint. If the URL is not
 *       reachable, the health check fails. For private URLs, a target group is created and the target
 *       group health check is run.</p>
 *          <p>The <code>HealthCheckProtocol</code>, <code>HealthCheckPort</code>, and
 *         <code>HealthCheckPath</code> are the same protocol, port, and path specified in the URL or
 *       health URL, if used. All other settings use the default values, as described in <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/target-group-health-checks.html">Health checks
 *         for your target groups</a>. The health check is considered successful if at least one
 *       target within the target group transitions to a healthy state.</p>
 *          <p>Services can have HTTP or HTTPS URL endpoints. For HTTPS URLs, publicly-signed
 *       certificates are supported. Private Certificate Authorities (CAs) are permitted only if the
 *       CA's domain is publicly resolvable.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubRefactorSpacesClient, CreateRouteCommand } from "@aws-sdk/client-migration-hub-refactor-spaces"; // ES Modules import
 * // const { MigrationHubRefactorSpacesClient, CreateRouteCommand } = require("@aws-sdk/client-migration-hub-refactor-spaces"); // CommonJS import
 * const client = new MigrationHubRefactorSpacesClient(config);
 * const command = new CreateRouteCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateRouteCommandInput} for command's `input` shape.
 * @see {@link CreateRouteCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubRefactorSpacesClientResolvedConfig | config} for MigrationHubRefactorSpacesClient's `config` shape.
 *
 */
export class CreateRouteCommand extends $Command<
  CreateRouteCommandInput,
  CreateRouteCommandOutput,
  MigrationHubRefactorSpacesClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateRouteCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MigrationHubRefactorSpacesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateRouteCommandInput, CreateRouteCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MigrationHubRefactorSpacesClient";
    const commandName = "CreateRouteCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateRouteRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateRouteResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateRouteCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateRouteCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateRouteCommandOutput> {
    return deserializeAws_restJson1CreateRouteCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
