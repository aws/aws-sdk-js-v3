// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw2, command } from "../commandBuilder";
import type { ListHealthCheckSourcesRequest, ListHealthCheckSourcesResponse } from "../models/models_0";
import { ListHealthCheckSources$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListHealthCheckSourcesCommand}.
 */
export interface ListHealthCheckSourcesCommandInput extends ListHealthCheckSourcesRequest {}
/**
 * @public
 *
 * The output of {@link ListHealthCheckSourcesCommand}.
 */
export interface ListHealthCheckSourcesCommandOutput extends ListHealthCheckSourcesResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of the health check sources that are associated with the current Amazon Web Services account.</p>
 *          <p>Results are paginated. To get more results, specify the <code>NextToken</code> value from the previous response for <code>NextToken</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, ListHealthCheckSourcesCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, ListHealthCheckSourcesCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * // import type { Route53ClientConfig } from "@aws-sdk/client-route-53";
 * const config = {}; // type is Route53ClientConfig
 * const client = new Route53Client(config);
 * const input = { // ListHealthCheckSourcesRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListHealthCheckSourcesCommand(input);
 * const response = await client.send(command);
 * // { // ListHealthCheckSourcesResponse
 * //   HealthCheckSources: [ // HealthCheckSources // required
 * //     { // HealthCheckSource
 * //       HealthCheckSourceId: "STRING_VALUE", // required
 * //       HealthCheckSourceStatus: "CREATE_PENDING" || "CREATE_IN_PROGRESS" || "CREATE_COMPLETED" || "CREATE_FAILED" || "DELETE_PENDING" || "DELETE_IN_PROGRESS" || "DELETE_COMPLETED" || "DELETE_FAILED", // required
 * //       HealthCheckSourceConfig: { // HealthCheckSourceConfig
 * //         VpcId: "STRING_VALUE", // required
 * //         SubnetConfigurationList: [ // SubnetConfigurationList // required
 * //           { // SubnetConfiguration
 * //             SubnetId: "STRING_VALUE", // required
 * //             AvailabilityZoneId: "STRING_VALUE", // required
 * //             SecurityGroupIdList: [ // SecurityGroupIdList // required
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         ],
 * //       },
 * //       StatusReasonCode: "INSUFFICIENT_SUBNET_IPS" || "EC2_LIMIT_EXCEEDED" || "INVALID_SUBNET" || "INVALID_SECURITY_GROUP" || "INVALID_CONFIGURATION" || "SLR_MISSING_OR_NOT_ASSUMABLE" || "INTERNAL_ERROR",
 * //       StatusReason: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListHealthCheckSourcesCommandInput - {@link ListHealthCheckSourcesCommandInput}
 * @returns {@link ListHealthCheckSourcesCommandOutput}
 * @see {@link ListHealthCheckSourcesCommandInput} for command's `input` shape.
 * @see {@link ListHealthCheckSourcesCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 *
 * @public
 */
export class ListHealthCheckSourcesCommand extends command<ListHealthCheckSourcesCommandInput, ListHealthCheckSourcesCommandOutput>(
  _ep0,
  _mw2,
  "ListHealthCheckSources",
  ListHealthCheckSources$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListHealthCheckSourcesRequest;
      output: ListHealthCheckSourcesResponse;
    };
    sdk: {
      input: ListHealthCheckSourcesCommandInput;
      output: ListHealthCheckSourcesCommandOutput;
    };
  };
}
