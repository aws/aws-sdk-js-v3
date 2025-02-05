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
import { GetTokenBalanceInput, GetTokenBalanceOutput } from "../models/models_0";
import { de_GetTokenBalanceCommand, se_GetTokenBalanceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTokenBalanceCommand}.
 */
export interface GetTokenBalanceCommandInput extends GetTokenBalanceInput {}
/**
 * @public
 *
 * The output of {@link GetTokenBalanceCommand}.
 */
export interface GetTokenBalanceCommandOutput extends GetTokenBalanceOutput, __MetadataBearer {}

/**
 * <p>Gets the balance of a specific token, including native tokens, for a given address (wallet or contract) on the blockchain.</p>
 *          <note>
 *             <p>Only the native tokens BTC and ETH, and the ERC-20,
 *          ERC-721, and ERC 1155 token standards are supported.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ManagedBlockchainQueryClient, GetTokenBalanceCommand } from "@aws-sdk/client-managedblockchain-query"; // ES Modules import
 * // const { ManagedBlockchainQueryClient, GetTokenBalanceCommand } = require("@aws-sdk/client-managedblockchain-query"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ManagedBlockchainQueryClient(config);
 * const input = { // GetTokenBalanceInput
 *   tokenIdentifier: { // TokenIdentifier
 *     network: "STRING_VALUE", // required
 *     contractAddress: "STRING_VALUE",
 *     tokenId: "STRING_VALUE",
 *   },
 *   ownerIdentifier: { // OwnerIdentifier
 *     address: "STRING_VALUE", // required
 *   },
 *   atBlockchainInstant: { // BlockchainInstant
 *     time: new Date("TIMESTAMP"),
 *   },
 * };
 * const command = new GetTokenBalanceCommand(input);
 * const response = await client.send(command);
 * // { // GetTokenBalanceOutput
 * //   ownerIdentifier: { // OwnerIdentifier
 * //     address: "STRING_VALUE", // required
 * //   },
 * //   tokenIdentifier: { // TokenIdentifier
 * //     network: "STRING_VALUE", // required
 * //     contractAddress: "STRING_VALUE",
 * //     tokenId: "STRING_VALUE",
 * //   },
 * //   balance: "STRING_VALUE", // required
 * //   atBlockchainInstant: { // BlockchainInstant
 * //     time: new Date("TIMESTAMP"),
 * //   },
 * //   lastUpdatedTime: {
 * //     time: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetTokenBalanceCommandInput - {@link GetTokenBalanceCommandInput}
 * @returns {@link GetTokenBalanceCommandOutput}
 * @see {@link GetTokenBalanceCommandInput} for command's `input` shape.
 * @see {@link GetTokenBalanceCommandOutput} for command's `response` shape.
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
 * @public
 */
export class GetTokenBalanceCommand extends $Command
  .classBuilder<
    GetTokenBalanceCommandInput,
    GetTokenBalanceCommandOutput,
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
  .s("TietonChainQueryService", "GetTokenBalance", {})
  .n("ManagedBlockchainQueryClient", "GetTokenBalanceCommand")
  .f(void 0, void 0)
  .ser(se_GetTokenBalanceCommand)
  .de(de_GetTokenBalanceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTokenBalanceInput;
      output: GetTokenBalanceOutput;
    };
    sdk: {
      input: GetTokenBalanceCommandInput;
      output: GetTokenBalanceCommandOutput;
    };
  };
}
