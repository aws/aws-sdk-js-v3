// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  MigrationHubRefactorSpacesClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MigrationHubRefactorSpacesClient";
import {
  CreateRouteRequest,
  CreateRouteRequestFilterSensitiveLog,
  CreateRouteResponse,
  CreateRouteResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_CreateRouteCommand, se_CreateRouteCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateRouteCommand}.
 */
export interface CreateRouteCommandInput extends CreateRouteRequest {}
/**
 * @public
 *
 * The output of {@link CreateRouteCommand}.
 */
export interface CreateRouteCommandOutput extends CreateRouteResponse, __MetadataBearer {}

/**
 * <p>Creates an Amazon Web Services Migration Hub Refactor Spaces route. The account owner of the service resource is always the
 *       environment owner, regardless of which account creates the route. Routes target a service in
 *       the application. If an application does not have any routes, then the first route must be
 *       created as a <code>DEFAULT</code>
 *             <code>RouteType</code>.</p>
 *          <p>When created, the default route defaults to an active state so state is not a required
 *       input. However, like all other state values the state of the default route can be updated
 *       after creation, but only when all other routes are also inactive. Conversely, no route can be
 *       active without the default route also being active.</p>
 *          <p>When you create a route, Refactor Spaces configures the Amazon API Gateway to send traffic
 *       to the target service as follows:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>URL Endpoints</b>
 *                </p>
 *                <p>If the service has a URL endpoint, and the endpoint resolves to a private IP address,
 *           Refactor Spaces routes traffic using the API Gateway VPC link. If a service endpoint
 *           resolves to a public IP address, Refactor Spaces routes traffic over the public internet.
 *           Services can have HTTP or HTTPS URL endpoints. For HTTPS URLs, publicly-signed
 *           certificates are supported. Private Certificate Authorities (CAs) are permitted only if
 *           the CA's domain is also publicly resolvable. </p>
 *                <p>Refactor Spaces automatically resolves the public Domain Name System (DNS) names that are
 *           set in <code>CreateService:UrlEndpoint </code>when you create a service. The DNS names
 *           resolve when the DNS time-to-live (TTL) expires, or every 60 seconds for TTLs less than 60
 *           seconds. This periodic DNS resolution ensures that the route configuration remains
 *           up-to-date. </p>
 *                <p/>
 *                <p>
 *                   <b>One-time health check</b>
 *                </p>
 *                <p>A one-time health check is performed on the service when either the route is updated
 *           from inactive to active, or when it is created with an active state. If the health check
 *           fails, the route transitions the route state to <code>FAILED</code>, an error code of
 *             <code>SERVICE_ENDPOINT_HEALTH_CHECK_FAILURE</code> is provided, and no traffic is sent
 *           to the service.</p>
 *                <p>For private URLs, a target group is created on the Network Load Balancer and the load
 *           balancer target group runs default target health checks. By default, the health check is
 *           run against the service endpoint URL. Optionally, the health check can be performed
 *           against a different protocol, port, and/or path using the <a href="https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/APIReference/API_CreateService.html#migrationhubrefactorspaces-CreateService-request-UrlEndpoint">CreateService:UrlEndpoint</a> parameter. All other health check settings for the
 *           load balancer use the default values described in the <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/target-group-health-checks.html">Health
 *             checks for your target groups</a> in the <i>Elastic Load Balancing
 *             guide</i>. The health check is considered successful if at least one target
 *           within the target group transitions to a healthy state.</p>
 *                <p/>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Lambda function endpoints</b>
 *                </p>
 *                <p>If the service has an Lambda function endpoint, then Refactor Spaces
 *           configures the Lambda function's resource policy to allow the application's
 *             API Gateway to invoke the function.</p>
 *                <p>The Lambda function state is checked. If the function is not active, the
 *           function configuration is updated so that Lambda resources are provisioned. If
 *           the Lambda state is <code>Failed</code>, then the route creation fails. For
 *           more information, see the <a href="https://docs.aws.amazon.com/lambda/latest/dg/API_GetFunctionConfiguration.html#SSS-GetFunctionConfiguration-response-State">GetFunctionConfiguration's State response parameter</a> in the <i>Lambda Developer Guide</i>.</p>
 *                <p>A check is performed to determine that a Lambda function with the specified ARN
 *           exists. If it does not exist, the health check fails. For public URLs, a connection is
 *           opened to the public endpoint. If the URL is not reachable, the health check fails.
 *         </p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Environments without a network bridge</b>
 *          </p>
 *          <p>When you create environments without a network bridge (<a href="https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/APIReference/API_CreateEnvironment.html#migrationhubrefactorspaces-CreateEnvironment-request-NetworkFabricType">CreateEnvironment:NetworkFabricType</a> is <code>NONE)</code> and you use your own
 *       networking infrastructure, you need to configure <a href="https://docs.aws.amazon.com/whitepapers/latest/aws-vpc-connectivity-options/amazon-vpc-to-amazon-vpc-connectivity-options.html">VPC to VPC connectivity</a> between your network and the application proxy VPC. Route
 *       creation from the application proxy to service endpoints will fail if your network is not
 *       configured to connect to the application proxy VPC. For more information, see <a href="https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/getting-started-create-role.html"> Create
 *         a route</a> in the <i>Refactor Spaces User Guide</i>.</p>
 *          <p/>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubRefactorSpacesClient, CreateRouteCommand } from "@aws-sdk/client-migration-hub-refactor-spaces"; // ES Modules import
 * // const { MigrationHubRefactorSpacesClient, CreateRouteCommand } = require("@aws-sdk/client-migration-hub-refactor-spaces"); // CommonJS import
 * const client = new MigrationHubRefactorSpacesClient(config);
 * const input = { // CreateRouteRequest
 *   EnvironmentIdentifier: "STRING_VALUE", // required
 *   ApplicationIdentifier: "STRING_VALUE", // required
 *   ServiceIdentifier: "STRING_VALUE", // required
 *   RouteType: "STRING_VALUE", // required
 *   DefaultRoute: { // DefaultRouteInput
 *     ActivationState: "STRING_VALUE",
 *   },
 *   UriPathRoute: { // UriPathRouteInput
 *     SourcePath: "STRING_VALUE", // required
 *     ActivationState: "STRING_VALUE", // required
 *     Methods: [ // HttpMethods
 *       "STRING_VALUE",
 *     ],
 *     IncludeChildPaths: true || false,
 *     AppendSourcePath: true || false,
 *   },
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new CreateRouteCommand(input);
 * const response = await client.send(command);
 * // { // CreateRouteResponse
 * //   RouteId: "STRING_VALUE",
 * //   Arn: "STRING_VALUE",
 * //   OwnerAccountId: "STRING_VALUE",
 * //   CreatedByAccountId: "STRING_VALUE",
 * //   RouteType: "STRING_VALUE",
 * //   ServiceId: "STRING_VALUE",
 * //   ApplicationId: "STRING_VALUE",
 * //   UriPathRoute: { // UriPathRouteInput
 * //     SourcePath: "STRING_VALUE", // required
 * //     ActivationState: "STRING_VALUE", // required
 * //     Methods: [ // HttpMethods
 * //       "STRING_VALUE",
 * //     ],
 * //     IncludeChildPaths: true || false,
 * //     AppendSourcePath: true || false,
 * //   },
 * //   State: "STRING_VALUE",
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   LastUpdatedTime: new Date("TIMESTAMP"),
 * //   CreatedTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param CreateRouteCommandInput - {@link CreateRouteCommandInput}
 * @returns {@link CreateRouteCommandOutput}
 * @see {@link CreateRouteCommandInput} for command's `input` shape.
 * @see {@link CreateRouteCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubRefactorSpacesClientResolvedConfig | config} for MigrationHubRefactorSpacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user does not have sufficient access to perform this action. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that does not exist. </p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would cause a service quota to be exceeded. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied because the request was throttled. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input does not satisfy the constraints specified by an Amazon Web Service.
 *     </p>
 *
 * @throws {@link MigrationHubRefactorSpacesServiceException}
 * <p>Base exception class for all service exceptions from MigrationHubRefactorSpaces service.</p>
 *
 * @public
 */
export class CreateRouteCommand extends $Command
  .classBuilder<
    CreateRouteCommandInput,
    CreateRouteCommandOutput,
    MigrationHubRefactorSpacesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: MigrationHubRefactorSpacesClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RefactorSpaces", "CreateRoute", {})
  .n("MigrationHubRefactorSpacesClient", "CreateRouteCommand")
  .f(CreateRouteRequestFilterSensitiveLog, CreateRouteResponseFilterSensitiveLog)
  .ser(se_CreateRouteCommand)
  .de(de_CreateRouteCommand)
  .build() {}
