// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteAccessSourceInput, DeleteAccessSourceOutput } from "../models/models_0";
import type {
  Route53GlobalResolverClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53GlobalResolverClient";
import { DeleteAccessSource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAccessSourceCommand}.
 */
export interface DeleteAccessSourceCommandInput extends DeleteAccessSourceInput {}
/**
 * @public
 *
 * The output of {@link DeleteAccessSourceCommand}.
 */
export interface DeleteAccessSourceCommandOutput extends DeleteAccessSourceOutput, __MetadataBearer {}

/**
 * <p>Deletes an access source. This operation cannot be undone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53GlobalResolverClient, DeleteAccessSourceCommand } from "@aws-sdk/client-route53globalresolver"; // ES Modules import
 * // const { Route53GlobalResolverClient, DeleteAccessSourceCommand } = require("@aws-sdk/client-route53globalresolver"); // CommonJS import
 * // import type { Route53GlobalResolverClientConfig } from "@aws-sdk/client-route53globalresolver";
 * const config = {}; // type is Route53GlobalResolverClientConfig
 * const client = new Route53GlobalResolverClient(config);
 * const input = { // DeleteAccessSourceInput
 *   accessSourceId: "STRING_VALUE", // required
 * };
 * const command = new DeleteAccessSourceCommand(input);
 * const response = await client.send(command);
 * // { // DeleteAccessSourceOutput
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
 * @param DeleteAccessSourceCommandInput - {@link DeleteAccessSourceCommandInput}
 * @returns {@link DeleteAccessSourceCommandOutput}
 * @see {@link DeleteAccessSourceCommandInput} for command's `input` shape.
 * @see {@link DeleteAccessSourceCommandOutput} for command's `response` shape.
 * @see {@link Route53GlobalResolverClientResolvedConfig | config} for Route53GlobalResolverClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform this operation. Check your IAM permissions and try again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with the current state of the resource. This can occur when trying to modify a resource that is not in a valid state for the requested operation.</p>
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
export class DeleteAccessSourceCommand extends $Command
  .classBuilder<
    DeleteAccessSourceCommandInput,
    DeleteAccessSourceCommandOutput,
    Route53GlobalResolverClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53GlobalResolverClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("EC2DNSGlobalResolverCustomerAPI", "DeleteAccessSource", {})
  .n("Route53GlobalResolverClient", "DeleteAccessSourceCommand")
  .sc(DeleteAccessSource$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAccessSourceInput;
      output: DeleteAccessSourceOutput;
    };
    sdk: {
      input: DeleteAccessSourceCommandInput;
      output: DeleteAccessSourceCommandOutput;
    };
  };
}
