// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListResourceConfigurationsRequest, ListResourceConfigurationsResponse } from "../models/models_0";
import { de_ListResourceConfigurationsCommand, se_ListResourceConfigurationsCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, VPCLatticeClientResolvedConfig } from "../VPCLatticeClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListResourceConfigurationsCommand}.
 */
export interface ListResourceConfigurationsCommandInput extends ListResourceConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link ListResourceConfigurationsCommand}.
 */
export interface ListResourceConfigurationsCommandOutput extends ListResourceConfigurationsResponse, __MetadataBearer {}

/**
 * <p>Lists the resource configurations owned by or shared with this account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VPCLatticeClient, ListResourceConfigurationsCommand } from "@aws-sdk/client-vpc-lattice"; // ES Modules import
 * // const { VPCLatticeClient, ListResourceConfigurationsCommand } = require("@aws-sdk/client-vpc-lattice"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new VPCLatticeClient(config);
 * const input = { // ListResourceConfigurationsRequest
 *   resourceGatewayIdentifier: "STRING_VALUE",
 *   resourceConfigurationGroupIdentifier: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListResourceConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // ListResourceConfigurationsResponse
 * //   items: [ // ResourceConfigurationSummaryList
 * //     { // ResourceConfigurationSummary
 * //       id: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       resourceGatewayId: "STRING_VALUE",
 * //       resourceConfigurationGroupId: "STRING_VALUE",
 * //       type: "STRING_VALUE",
 * //       status: "STRING_VALUE",
 * //       amazonManaged: true || false,
 * //       createdAt: new Date("TIMESTAMP"),
 * //       lastUpdatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListResourceConfigurationsCommandInput - {@link ListResourceConfigurationsCommandInput}
 * @returns {@link ListResourceConfigurationsCommandOutput}
 * @see {@link ListResourceConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListResourceConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link VPCLatticeClientResolvedConfig | config} for VPCLatticeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing the request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input does not satisfy the constraints specified by an Amazon Web Services
 *    service.</p>
 *
 * @throws {@link VPCLatticeServiceException}
 * <p>Base exception class for all service exceptions from VPCLattice service.</p>
 *
 * @public
 */
export class ListResourceConfigurationsCommand extends $Command
  .classBuilder<
    ListResourceConfigurationsCommandInput,
    ListResourceConfigurationsCommandOutput,
    VPCLatticeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: VPCLatticeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MercuryControlPlane", "ListResourceConfigurations", {})
  .n("VPCLatticeClient", "ListResourceConfigurationsCommand")
  .f(void 0, void 0)
  .ser(se_ListResourceConfigurationsCommand)
  .de(de_ListResourceConfigurationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListResourceConfigurationsRequest;
      output: ListResourceConfigurationsResponse;
    };
    sdk: {
      input: ListResourceConfigurationsCommandInput;
      output: ListResourceConfigurationsCommandOutput;
    };
  };
}
