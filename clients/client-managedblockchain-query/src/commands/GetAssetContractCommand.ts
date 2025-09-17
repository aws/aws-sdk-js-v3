// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ManagedBlockchainQueryClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ManagedBlockchainQueryClient";
import { GetAssetContractInput, GetAssetContractOutput } from "../models/models_0";
import { de_GetAssetContractCommand, se_GetAssetContractCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAssetContractCommand}.
 */
export interface GetAssetContractCommandInput extends GetAssetContractInput {}
/**
 * @public
 *
 * The output of {@link GetAssetContractCommand}.
 */
export interface GetAssetContractCommandOutput extends GetAssetContractOutput, __MetadataBearer {}

/**
 * <p>Gets the information about a specific contract deployed on the blockchain.</p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>The Bitcoin blockchain networks do not support this
 *              operation.</p>
 *                </li>
 *                <li>
 *                   <p>Metadata is currently only available for some <code>ERC-20</code> contracts.
 *                 Metadata will be available for additional contracts in the future.</p>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ManagedBlockchainQueryClient, GetAssetContractCommand } from "@aws-sdk/client-managedblockchain-query"; // ES Modules import
 * // const { ManagedBlockchainQueryClient, GetAssetContractCommand } = require("@aws-sdk/client-managedblockchain-query"); // CommonJS import
 * // import type { ManagedBlockchainQueryClientConfig } from "@aws-sdk/client-managedblockchain-query";
 * const config = {}; // type is ManagedBlockchainQueryClientConfig
 * const client = new ManagedBlockchainQueryClient(config);
 * const input = { // GetAssetContractInput
 *   contractIdentifier: { // ContractIdentifier
 *     network: "STRING_VALUE", // required
 *     contractAddress: "STRING_VALUE", // required
 *   },
 * };
 * const command = new GetAssetContractCommand(input);
 * const response = await client.send(command);
 * // { // GetAssetContractOutput
 * //   contractIdentifier: { // ContractIdentifier
 * //     network: "STRING_VALUE", // required
 * //     contractAddress: "STRING_VALUE", // required
 * //   },
 * //   tokenStandard: "STRING_VALUE", // required
 * //   deployerAddress: "STRING_VALUE", // required
 * //   metadata: { // ContractMetadata
 * //     name: "STRING_VALUE",
 * //     symbol: "STRING_VALUE",
 * //     decimals: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAssetContractCommandInput - {@link GetAssetContractCommandInput}
 * @returns {@link GetAssetContractCommandOutput}
 * @see {@link GetAssetContractCommandInput} for command's `input` shape.
 * @see {@link GetAssetContractCommandOutput} for command's `response` shape.
 * @see {@link ManagedBlockchainQueryClientResolvedConfig | config} for ManagedBlockchainQueryClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The Amazon Web Services account doesn’t have access to this resource. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an internal error in the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource was not found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The service quota has been exceeded for this resource.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request or operation couldn't be performed because a service is throttling
 *       requests. The most common source of throttling errors is when you create resources
 *       that exceed your service limit for this resource type. Request a limit increase or
 *       delete unused resources, if possible.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The resource passed is invalid.</p>
 *
 * @throws {@link ManagedBlockchainQueryServiceException}
 * <p>Base exception class for all service exceptions from ManagedBlockchainQuery service.</p>
 *
 *
 * @public
 */
export class GetAssetContractCommand extends $Command
  .classBuilder<
    GetAssetContractCommandInput,
    GetAssetContractCommandOutput,
    ManagedBlockchainQueryClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ManagedBlockchainQueryClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("TietonChainQueryService", "GetAssetContract", {})
  .n("ManagedBlockchainQueryClient", "GetAssetContractCommand")
  .f(void 0, void 0)
  .ser(se_GetAssetContractCommand)
  .de(de_GetAssetContractCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAssetContractInput;
      output: GetAssetContractOutput;
    };
    sdk: {
      input: GetAssetContractCommandInput;
      output: GetAssetContractCommandOutput;
    };
  };
}
