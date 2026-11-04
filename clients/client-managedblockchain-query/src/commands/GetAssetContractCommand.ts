// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetAssetContractInput, GetAssetContractOutput } from "../models/models_0";
import { GetAssetContract$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Gets the information about a specific contract deployed on the blockchain.
 *
 * > **Note:**
 * >
 * > - The Bitcoin blockchain networks do not support this operation.
 * > - Metadata is currently only available for some `ERC-20` contracts. Metadata will be available for additional contracts in the future.
 *
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
 *
 * The Amazon Web Services account doesn’t have access to this resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an internal error in the service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource was not found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The service quota has been exceeded for this resource.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request or operation couldn't be performed because a service is throttling requests. The most common source of throttling errors is when you create resources that exceed your service limit for this resource type. Request a limit increase or delete unused resources, if possible.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The resource passed is invalid.
 *
 * @throws {@link ManagedBlockchainQueryServiceException}
 *
 * Base exception class for all service exceptions from ManagedBlockchainQuery service.
 *
 * @public
 */
export class GetAssetContractCommand extends command<GetAssetContractCommandInput, GetAssetContractCommandOutput>(
  _ep0,
  _mw0,
  "GetAssetContract",
  GetAssetContract$
) {
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
