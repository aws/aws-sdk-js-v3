// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetAccessSourceInput, GetAccessSourceOutput } from "../models/models_0";
import type {
  Route53GlobalResolverClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53GlobalResolverClient";
import { GetAccessSource } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAccessSourceCommand}.
 */
export interface GetAccessSourceCommandInput extends GetAccessSourceInput {}
/**
 * @public
 *
 * The output of {@link GetAccessSourceCommand}.
 */
export interface GetAccessSourceCommandOutput extends GetAccessSourceOutput, __MetadataBearer {}

/**
 * <p>Retrieves information about an access source.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53GlobalResolverClient, GetAccessSourceCommand } from "@aws-sdk/client-route53globalresolver"; // ES Modules import
 * // const { Route53GlobalResolverClient, GetAccessSourceCommand } = require("@aws-sdk/client-route53globalresolver"); // CommonJS import
 * // import type { Route53GlobalResolverClientConfig } from "@aws-sdk/client-route53globalresolver";
 * const config = {}; // type is Route53GlobalResolverClientConfig
 * const client = new Route53GlobalResolverClient(config);
 * const input = { // GetAccessSourceInput
 *   accessSourceId: "STRING_VALUE", // required
 * };
 * const command = new GetAccessSourceCommand(input);
 * const response = await client.send(command);
 * // { // GetAccessSourceOutput
 * //   arn: "STRING_VALUE", // required
 * //   cidr: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   id: "STRING_VALUE", // required
 * //   ipAddressType: "IPV4" || "IPV6", // required
 * //   name: "STRING_VALUE",
 * //   dnsViewId: "STRING_VALUE", // required
 * //   protocol: "DO53" || "DOH" || "DOT", // required
 * //   status: "CREATING" || "OPERATIONAL" || "UPDATING" || "DELETING", // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param GetAccessSourceCommandInput - {@link GetAccessSourceCommandInput}
 * @returns {@link GetAccessSourceCommandOutput}
 * @see {@link GetAccessSourceCommandInput} for command's `input` shape.
 * @see {@link GetAccessSourceCommandOutput} for command's `response` shape.
 * @see {@link Route53GlobalResolverClientResolvedConfig | config} for Route53GlobalResolverClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform this operation. Check your IAM permissions and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found. Verify the resource ID and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled due to too many requests. Wait a moment and try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input parameters are invalid. Check the parameter values and try again.</p>
 *
 * @throws {@link Route53GlobalResolverServiceException}
 * <p>Base exception class for all service exceptions from Route53GlobalResolver service.</p>
 *
 *
 * @public
 */
export class GetAccessSourceCommand extends $Command
  .classBuilder<
    GetAccessSourceCommandInput,
    GetAccessSourceCommandOutput,
    Route53GlobalResolverClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53GlobalResolverClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("EC2DNSGlobalResolverCustomerAPI", "GetAccessSource", {})
  .n("Route53GlobalResolverClient", "GetAccessSourceCommand")
  .sc(GetAccessSource)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAccessSourceInput;
      output: GetAccessSourceOutput;
    };
    sdk: {
      input: GetAccessSourceCommandInput;
      output: GetAccessSourceCommandOutput;
    };
  };
}
