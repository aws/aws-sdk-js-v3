// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListHostedZoneAssociationsInput, ListHostedZoneAssociationsOutput } from "../models/models_0";
import {
  Route53GlobalResolverClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53GlobalResolverClient";
import { ListHostedZoneAssociations } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListHostedZoneAssociationsCommand}.
 */
export interface ListHostedZoneAssociationsCommandInput extends ListHostedZoneAssociationsInput {}
/**
 * @public
 *
 * The output of {@link ListHostedZoneAssociationsCommand}.
 */
export interface ListHostedZoneAssociationsCommandOutput extends ListHostedZoneAssociationsOutput, __MetadataBearer {}

/**
 * <p>Lists all hosted zone associations for a Route 53 Global Resolver resource with pagination support.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53GlobalResolverClient, ListHostedZoneAssociationsCommand } from "@aws-sdk/client-route53globalresolver"; // ES Modules import
 * // const { Route53GlobalResolverClient, ListHostedZoneAssociationsCommand } = require("@aws-sdk/client-route53globalresolver"); // CommonJS import
 * // import type { Route53GlobalResolverClientConfig } from "@aws-sdk/client-route53globalresolver";
 * const config = {}; // type is Route53GlobalResolverClientConfig
 * const client = new Route53GlobalResolverClient(config);
 * const input = { // ListHostedZoneAssociationsInput
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   resourceArn: "STRING_VALUE", // required
 * };
 * const command = new ListHostedZoneAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // ListHostedZoneAssociationsOutput
 * //   nextToken: "STRING_VALUE",
 * //   hostedZoneAssociations: [ // HostedZoneAssociations // required
 * //     { // HostedZoneAssociationSummary
 * //       id: "STRING_VALUE", // required
 * //       resourceArn: "STRING_VALUE", // required
 * //       hostedZoneId: "STRING_VALUE", // required
 * //       hostedZoneName: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //       status: "CREATING" || "OPERATIONAL" || "DELETING", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListHostedZoneAssociationsCommandInput - {@link ListHostedZoneAssociationsCommandInput}
 * @returns {@link ListHostedZoneAssociationsCommandOutput}
 * @see {@link ListHostedZoneAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListHostedZoneAssociationsCommandOutput} for command's `response` shape.
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
export class ListHostedZoneAssociationsCommand extends $Command
  .classBuilder<
    ListHostedZoneAssociationsCommandInput,
    ListHostedZoneAssociationsCommandOutput,
    Route53GlobalResolverClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53GlobalResolverClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("EC2DNSGlobalResolverCustomerAPI", "ListHostedZoneAssociations", {})
  .n("Route53GlobalResolverClient", "ListHostedZoneAssociationsCommand")
  .sc(ListHostedZoneAssociations)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListHostedZoneAssociationsInput;
      output: ListHostedZoneAssociationsOutput;
    };
    sdk: {
      input: ListHostedZoneAssociationsCommandInput;
      output: ListHostedZoneAssociationsCommandOutput;
    };
  };
}
