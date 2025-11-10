// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListDomainVerificationsRequest, ListDomainVerificationsResponse } from "../models/models_0";
import { ListDomainVerifications } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, VPCLatticeClientResolvedConfig } from "../VPCLatticeClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDomainVerificationsCommand}.
 */
export interface ListDomainVerificationsCommandInput extends ListDomainVerificationsRequest {}
/**
 * @public
 *
 * The output of {@link ListDomainVerificationsCommand}.
 */
export interface ListDomainVerificationsCommandOutput extends ListDomainVerificationsResponse, __MetadataBearer {}

/**
 * <p> Lists the domain verifications. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VPCLatticeClient, ListDomainVerificationsCommand } from "@aws-sdk/client-vpc-lattice"; // ES Modules import
 * // const { VPCLatticeClient, ListDomainVerificationsCommand } = require("@aws-sdk/client-vpc-lattice"); // CommonJS import
 * // import type { VPCLatticeClientConfig } from "@aws-sdk/client-vpc-lattice";
 * const config = {}; // type is VPCLatticeClientConfig
 * const client = new VPCLatticeClient(config);
 * const input = { // ListDomainVerificationsRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListDomainVerificationsCommand(input);
 * const response = await client.send(command);
 * // { // ListDomainVerificationsResponse
 * //   items: [ // DomainVerificationList // required
 * //     { // DomainVerificationSummary
 * //       id: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       domainName: "STRING_VALUE", // required
 * //       status: "STRING_VALUE", // required
 * //       txtMethodConfig: { // TxtMethodConfig
 * //         value: "STRING_VALUE", // required
 * //         name: "STRING_VALUE", // required
 * //       },
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       lastVerifiedTime: new Date("TIMESTAMP"),
 * //       tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDomainVerificationsCommandInput - {@link ListDomainVerificationsCommandInput}
 * @returns {@link ListDomainVerificationsCommandOutput}
 * @see {@link ListDomainVerificationsCommandInput} for command's `input` shape.
 * @see {@link ListDomainVerificationsCommandOutput} for command's `response` shape.
 * @see {@link VPCLatticeClientResolvedConfig | config} for VPCLatticeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input does not satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link VPCLatticeServiceException}
 * <p>Base exception class for all service exceptions from VPCLattice service.</p>
 *
 *
 * @public
 */
export class ListDomainVerificationsCommand extends $Command
  .classBuilder<
    ListDomainVerificationsCommandInput,
    ListDomainVerificationsCommandOutput,
    VPCLatticeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: VPCLatticeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MercuryControlPlane", "ListDomainVerifications", {})
  .n("VPCLatticeClient", "ListDomainVerificationsCommand")
  .sc(ListDomainVerifications)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDomainVerificationsRequest;
      output: ListDomainVerificationsResponse;
    };
    sdk: {
      input: ListDomainVerificationsCommandInput;
      output: ListDomainVerificationsCommandOutput;
    };
  };
}
