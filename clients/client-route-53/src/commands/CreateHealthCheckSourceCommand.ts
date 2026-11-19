// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw2, command } from "../commandBuilder";
import type { CreateHealthCheckSourceRequest, CreateHealthCheckSourceResponse } from "../models/models_0";
import { CreateHealthCheckSource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateHealthCheckSourceCommand}.
 */
export interface CreateHealthCheckSourceCommandInput extends CreateHealthCheckSourceRequest {}
/**
 * @public
 *
 * The output of {@link CreateHealthCheckSourceCommand}.
 */
export interface CreateHealthCheckSourceCommandOutput extends CreateHealthCheckSourceResponse, __MetadataBearer {}

/**
 * <p>Creates a health check source, which defines the virtual private cloud (VPC), subnets, and security groups from which Route 53 sends private endpoint health check requests. To use this operation, you must have the <code>route53:CreateHealthCheckSource</code> permission. You must also have permission to create a service-linked role.</p>
 *          <p>Specify a VPC, one subnet in each Availability Zone that Route 53 uses for private endpoint health checks in the Amazon Web Services Region, and one or more security groups for each subnet. The security groups must allow outbound traffic to the endpoints that you want to check.</p>
 *          <p>Route 53 creates a health check source asynchronously, and the initial <code>HealthCheckSourceStatus</code> is <code>CREATE_PENDING</code>. Call <code>GetHealthCheckSource</code> until the status is <code>CREATE_COMPLETED</code> before you create health checks that use the source. You can't change the configuration of a health check source after you create it.</p>
 *          <p>If AWS Identity and Access Management (IAM) is still deleting the Route 53 service-linked role for your account, the request fails with <code>InvalidInput</code>. Retry after the deletion completes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, CreateHealthCheckSourceCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, CreateHealthCheckSourceCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * // import type { Route53ClientConfig } from "@aws-sdk/client-route-53";
 * const config = {}; // type is Route53ClientConfig
 * const client = new Route53Client(config);
 * const input = { // CreateHealthCheckSourceRequest
 *   CallerReference: "STRING_VALUE",
 *   HealthCheckSourceConfig: { // HealthCheckSourceConfig
 *     VpcId: "STRING_VALUE", // required
 *     SubnetConfigurationList: [ // SubnetConfigurationList // required
 *       { // SubnetConfiguration
 *         SubnetId: "STRING_VALUE", // required
 *         AvailabilityZoneId: "STRING_VALUE", // required
 *         SecurityGroupIdList: [ // SecurityGroupIdList // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *     ],
 *   },
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateHealthCheckSourceCommand(input);
 * const response = await client.send(command);
 * // { // CreateHealthCheckSourceResponse
 * //   HealthCheckSourceId: "STRING_VALUE", // required
 * //   HealthCheckSourceStatus: "CREATE_PENDING" || "CREATE_IN_PROGRESS" || "CREATE_COMPLETED" || "CREATE_FAILED" || "DELETE_PENDING" || "DELETE_IN_PROGRESS" || "DELETE_COMPLETED" || "DELETE_FAILED", // required
 * //   Location: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateHealthCheckSourceCommandInput - {@link CreateHealthCheckSourceCommandInput}
 * @returns {@link CreateHealthCheckSourceCommandOutput}
 * @see {@link CreateHealthCheckSourceCommandInput} for command's `input` shape.
 * @see {@link CreateHealthCheckSourceCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link HealthCheckSourceAlreadyExists} (client fault)
 *  <p>The health check source that you're attempting to create already exists. Route 53 returns this error when you submit a request that has the same value for <code>CallerReference</code> as an existing health check source and one or more values that differ from the existing health check source. To create another health check source, specify a new value for <code>CallerReference</code>. To find the existing health check source, call <code>ListHealthCheckSources</code>.</p>
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link InvalidVPCId} (client fault)
 *  <p>The VPC ID that you specified either isn't a valid ID or the current account is not
 * 			authorized to access this VPC.</p>
 *
 * @throws {@link TooManyHealthCheckSources} (client fault)
 *  <p>You can't create this health check source because the current account has reached its maximum number of health check sources. The maximum includes every health check source that hasn't reached <code>DELETE_COMPLETED</code> status, including a health check source with a status of <code>CREATE_FAILED</code>.</p>
 *          <p>For information about default limits, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DNSLimitations.html">Limits</a> in the <i>Amazon Route 53 Developer Guide</i>.</p>
 *          <p>For information about how to get the current limit for an account, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetAccountLimit.html">GetAccountLimit</a>. To request a higher limit, <a href="http://aws.amazon.com/route53-request">create a case</a> with the Amazon Web Services Support Center.</p>
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 *
 * @public
 */
export class CreateHealthCheckSourceCommand extends command<CreateHealthCheckSourceCommandInput, CreateHealthCheckSourceCommandOutput>(
  _ep0,
  _mw2,
  "CreateHealthCheckSource",
  CreateHealthCheckSource$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateHealthCheckSourceRequest;
      output: CreateHealthCheckSourceResponse;
    };
    sdk: {
      input: CreateHealthCheckSourceCommandInput;
      output: CreateHealthCheckSourceCommandOutput;
    };
  };
}
