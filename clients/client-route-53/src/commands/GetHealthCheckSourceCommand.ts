// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw2, command } from "../commandBuilder";
import type { GetHealthCheckSourceRequest, GetHealthCheckSourceResponse } from "../models/models_0";
import { GetHealthCheckSource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetHealthCheckSourceCommand}.
 */
export interface GetHealthCheckSourceCommandInput extends GetHealthCheckSourceRequest {}
/**
 * @public
 *
 * The output of {@link GetHealthCheckSourceCommand}.
 */
export interface GetHealthCheckSourceCommandOutput extends GetHealthCheckSourceResponse, __MetadataBearer {}

/**
 * <p>Gets information about a specified health check source, including its status and the virtual private cloud (VPC), subnets, and security groups that it uses.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, GetHealthCheckSourceCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, GetHealthCheckSourceCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * // import type { Route53ClientConfig } from "@aws-sdk/client-route-53";
 * const config = {}; // type is Route53ClientConfig
 * const client = new Route53Client(config);
 * const input = { // GetHealthCheckSourceRequest
 *   HealthCheckSourceId: "STRING_VALUE", // required
 * };
 * const command = new GetHealthCheckSourceCommand(input);
 * const response = await client.send(command);
 * // { // GetHealthCheckSourceResponse
 * //   HealthCheckSource: { // HealthCheckSource
 * //     HealthCheckSourceId: "STRING_VALUE", // required
 * //     HealthCheckSourceStatus: "CREATE_PENDING" || "CREATE_IN_PROGRESS" || "CREATE_COMPLETED" || "CREATE_FAILED" || "DELETE_PENDING" || "DELETE_IN_PROGRESS" || "DELETE_COMPLETED" || "DELETE_FAILED", // required
 * //     HealthCheckSourceConfig: { // HealthCheckSourceConfig
 * //       VpcId: "STRING_VALUE", // required
 * //       SubnetConfigurationList: [ // SubnetConfigurationList // required
 * //         { // SubnetConfiguration
 * //           SubnetId: "STRING_VALUE", // required
 * //           AvailabilityZoneId: "STRING_VALUE", // required
 * //           SecurityGroupIdList: [ // SecurityGroupIdList // required
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //     StatusReasonCode: "INSUFFICIENT_SUBNET_IPS" || "EC2_LIMIT_EXCEEDED" || "INVALID_SUBNET" || "INVALID_SECURITY_GROUP" || "INVALID_CONFIGURATION" || "SLR_MISSING_OR_NOT_ASSUMABLE" || "INTERNAL_ERROR",
 * //     StatusReason: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetHealthCheckSourceCommandInput - {@link GetHealthCheckSourceCommandInput}
 * @returns {@link GetHealthCheckSourceCommandOutput}
 * @see {@link GetHealthCheckSourceCommandInput} for command's `input` shape.
 * @see {@link GetHealthCheckSourceCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link NoSuchHealthCheckSource} (client fault)
 *  <p>No health check source exists with the specified ID. Verify that the ID is correct and that the health check source hasn't been deleted.</p>
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 *
 * @public
 */
export class GetHealthCheckSourceCommand extends command<GetHealthCheckSourceCommandInput, GetHealthCheckSourceCommandOutput>(
  _ep0,
  _mw2,
  "GetHealthCheckSource",
  GetHealthCheckSource$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetHealthCheckSourceRequest;
      output: GetHealthCheckSourceResponse;
    };
    sdk: {
      input: GetHealthCheckSourceCommandInput;
      output: GetHealthCheckSourceCommandOutput;
    };
  };
}
