// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  ListAssociatedRoute53HealthChecksRequest,
  ListAssociatedRoute53HealthChecksResponse,
} from "../models/models_0";
import type {
  Route53RecoveryControlConfigClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53RecoveryControlConfigClient";
import { ListAssociatedRoute53HealthChecks$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAssociatedRoute53HealthChecksCommand}.
 */
export interface ListAssociatedRoute53HealthChecksCommandInput extends ListAssociatedRoute53HealthChecksRequest {}
/**
 * @public
 *
 * The output of {@link ListAssociatedRoute53HealthChecksCommand}.
 */
export interface ListAssociatedRoute53HealthChecksCommandOutput extends ListAssociatedRoute53HealthChecksResponse, __MetadataBearer {}

/**
 * <p>Returns an array of all Amazon Route 53 health checks associated with a specific routing control.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53RecoveryControlConfigClient, ListAssociatedRoute53HealthChecksCommand } from "@aws-sdk/client-route53-recovery-control-config"; // ES Modules import
 * // const { Route53RecoveryControlConfigClient, ListAssociatedRoute53HealthChecksCommand } = require("@aws-sdk/client-route53-recovery-control-config"); // CommonJS import
 * // import type { Route53RecoveryControlConfigClientConfig } from "@aws-sdk/client-route53-recovery-control-config";
 * const config = {}; // type is Route53RecoveryControlConfigClientConfig
 * const client = new Route53RecoveryControlConfigClient(config);
 * const input = { // ListAssociatedRoute53HealthChecksRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   RoutingControlArn: "STRING_VALUE", // required
 * };
 * const command = new ListAssociatedRoute53HealthChecksCommand(input);
 * const response = await client.send(command);
 * // { // ListAssociatedRoute53HealthChecksResponse
 * //   HealthCheckIds: [ // __listOf__stringMax36PatternS
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAssociatedRoute53HealthChecksCommandInput - {@link ListAssociatedRoute53HealthChecksCommandInput}
 * @returns {@link ListAssociatedRoute53HealthChecksCommandOutput}
 * @see {@link ListAssociatedRoute53HealthChecksCommandInput} for command's `input` shape.
 * @see {@link ListAssociatedRoute53HealthChecksCommandOutput} for command's `response` shape.
 * @see {@link Route53RecoveryControlConfigClientResolvedConfig | config} for Route53RecoveryControlConfigClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>500 response - InternalServiceError. Temporary service error. Retry the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>404 response - MalformedQueryString. The query string contains a syntax error or resource not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>400 response - Multiple causes. For example, you might have a malformed query string and input parameter might be out of range, or you might have used parameters together incorrectly.</p>
 *
 * @throws {@link Route53RecoveryControlConfigServiceException}
 * <p>Base exception class for all service exceptions from Route53RecoveryControlConfig service.</p>
 *
 *
 * @public
 */
export class ListAssociatedRoute53HealthChecksCommand extends $Command
  .classBuilder<
    ListAssociatedRoute53HealthChecksCommandInput,
    ListAssociatedRoute53HealthChecksCommandOutput,
    Route53RecoveryControlConfigClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53RecoveryControlConfigClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Route53RecoveryControlConfig", "ListAssociatedRoute53HealthChecks", {})
  .n("Route53RecoveryControlConfigClient", "ListAssociatedRoute53HealthChecksCommand")
  .sc(ListAssociatedRoute53HealthChecks$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAssociatedRoute53HealthChecksRequest;
      output: ListAssociatedRoute53HealthChecksResponse;
    };
    sdk: {
      input: ListAssociatedRoute53HealthChecksCommandInput;
      output: ListAssociatedRoute53HealthChecksCommandOutput;
    };
  };
}
