// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep1, _mw0, command } from "../commandBuilder";
import type { ListRoute53HealthChecksRequest, ListRoute53HealthChecksResponse } from "../models/models_0";
import { ListRoute53HealthChecks$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListRoute53HealthChecksCommand}.
 */
export interface ListRoute53HealthChecksCommandInput extends ListRoute53HealthChecksRequest {}
/**
 * @public
 *
 * The output of {@link ListRoute53HealthChecksCommand}.
 */
export interface ListRoute53HealthChecksCommandOutput extends ListRoute53HealthChecksResponse, __MetadataBearer {}

/**
 * List the Amazon Route 53 health checks.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ARCRegionSwitchClient, ListRoute53HealthChecksCommand } from "@aws-sdk/client-arc-region-switch"; // ES Modules import
 * // const { ARCRegionSwitchClient, ListRoute53HealthChecksCommand } = require("@aws-sdk/client-arc-region-switch"); // CommonJS import
 * // import type { ARCRegionSwitchClientConfig } from "@aws-sdk/client-arc-region-switch";
 * const config = {}; // type is ARCRegionSwitchClientConfig
 * const client = new ARCRegionSwitchClient(config);
 * const input = { // ListRoute53HealthChecksRequest
 *   arn: "STRING_VALUE", // required
 *   hostedZoneId: "STRING_VALUE",
 *   recordName: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListRoute53HealthChecksCommand(input);
 * const response = await client.send(command);
 * // { // ListRoute53HealthChecksResponse
 * //   healthChecks: [ // Route53HealthCheckList
 * //     { // Route53HealthCheck
 * //       hostedZoneId: "STRING_VALUE", // required
 * //       recordName: "STRING_VALUE", // required
 * //       healthCheckId: "STRING_VALUE",
 * //       status: "healthy" || "unhealthy" || "unknown",
 * //       region: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRoute53HealthChecksCommandInput - {@link ListRoute53HealthChecksCommandInput}
 * @returns {@link ListRoute53HealthChecksCommandOutput}
 * @see {@link ListRoute53HealthChecksCommandInput} for command's `input` shape.
 * @see {@link ListRoute53HealthChecksCommandOutput} for command's `response` shape.
 * @see {@link ARCRegionSwitchClientResolvedConfig | config} for ARCRegionSwitchClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * HTTP Status Code: 403
 *
 * @throws {@link IllegalArgumentException} (client fault)
 *
 * The request processing has an invalid argument.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception, or failure.
 *
 * HTTP Status Code: 500
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * HTTP Status Code: 404
 *
 * @throws {@link ARCRegionSwitchServiceException}
 *
 * Base exception class for all service exceptions from ARCRegionSwitch service.
 *
 * @public
 */
export class ListRoute53HealthChecksCommand extends command<ListRoute53HealthChecksCommandInput, ListRoute53HealthChecksCommandOutput>(
  _ep1,
  _mw0,
  "ListRoute53HealthChecks",
  ListRoute53HealthChecks$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRoute53HealthChecksRequest;
      output: ListRoute53HealthChecksResponse;
    };
    sdk: {
      input: ListRoute53HealthChecksCommandInput;
      output: ListRoute53HealthChecksCommandOutput;
    };
  };
}
