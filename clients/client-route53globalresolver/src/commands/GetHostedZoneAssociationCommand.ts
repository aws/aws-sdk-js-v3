// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetHostedZoneAssociationInput, GetHostedZoneAssociationOutput } from "../models/models_0";
import type {
  Route53GlobalResolverClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53GlobalResolverClient";
import { GetHostedZoneAssociation } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetHostedZoneAssociationCommand}.
 */
export interface GetHostedZoneAssociationCommandInput extends GetHostedZoneAssociationInput {}
/**
 * @public
 *
 * The output of {@link GetHostedZoneAssociationCommand}.
 */
export interface GetHostedZoneAssociationCommandOutput extends GetHostedZoneAssociationOutput, __MetadataBearer {}

/**
 * <p>Retrieves information about a hosted zone association.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53GlobalResolverClient, GetHostedZoneAssociationCommand } from "@aws-sdk/client-route53globalresolver"; // ES Modules import
 * // const { Route53GlobalResolverClient, GetHostedZoneAssociationCommand } = require("@aws-sdk/client-route53globalresolver"); // CommonJS import
 * // import type { Route53GlobalResolverClientConfig } from "@aws-sdk/client-route53globalresolver";
 * const config = {}; // type is Route53GlobalResolverClientConfig
 * const client = new Route53GlobalResolverClient(config);
 * const input = { // GetHostedZoneAssociationInput
 *   hostedZoneAssociationId: "STRING_VALUE", // required
 * };
 * const command = new GetHostedZoneAssociationCommand(input);
 * const response = await client.send(command);
 * // { // GetHostedZoneAssociationOutput
 * //   id: "STRING_VALUE", // required
 * //   resourceArn: "STRING_VALUE", // required
 * //   hostedZoneId: "STRING_VALUE", // required
 * //   hostedZoneName: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * //   status: "CREATING" || "OPERATIONAL" || "DELETING", // required
 * // };
 *
 * ```
 *
 * @param GetHostedZoneAssociationCommandInput - {@link GetHostedZoneAssociationCommandInput}
 * @returns {@link GetHostedZoneAssociationCommandOutput}
 * @see {@link GetHostedZoneAssociationCommandInput} for command's `input` shape.
 * @see {@link GetHostedZoneAssociationCommandOutput} for command's `response` shape.
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
export class GetHostedZoneAssociationCommand extends $Command
  .classBuilder<
    GetHostedZoneAssociationCommandInput,
    GetHostedZoneAssociationCommandOutput,
    Route53GlobalResolverClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53GlobalResolverClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("EC2DNSGlobalResolverCustomerAPI", "GetHostedZoneAssociation", {})
  .n("Route53GlobalResolverClient", "GetHostedZoneAssociationCommand")
  .sc(GetHostedZoneAssociation)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetHostedZoneAssociationInput;
      output: GetHostedZoneAssociationOutput;
    };
    sdk: {
      input: GetHostedZoneAssociationCommandInput;
      output: GetHostedZoneAssociationCommandOutput;
    };
  };
}
