// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateAccessorInput, CreateAccessorOutput } from "../models/models_0";
import { CreateAccessor$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateAccessorCommand}.
 */
export interface CreateAccessorCommandInput extends CreateAccessorInput {}
/**
 * @public
 *
 * The output of {@link CreateAccessorCommand}.
 */
export interface CreateAccessorCommandOutput extends CreateAccessorOutput, __MetadataBearer {}

/**
 * Creates a new accessor for use with Amazon Managed Blockchain service that supports token based access. The accessor contains information required for token based access.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ManagedBlockchainClient, CreateAccessorCommand } from "@aws-sdk/client-managedblockchain"; // ES Modules import
 * // const { ManagedBlockchainClient, CreateAccessorCommand } = require("@aws-sdk/client-managedblockchain"); // CommonJS import
 * // import type { ManagedBlockchainClientConfig } from "@aws-sdk/client-managedblockchain";
 * const config = {}; // type is ManagedBlockchainClientConfig
 * const client = new ManagedBlockchainClient(config);
 * const input = { // CreateAccessorInput
 *   ClientRequestToken: "STRING_VALUE", // required
 *   AccessorType: "BILLING_TOKEN", // required
 *   Tags: { // InputTagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   NetworkType: "ETHEREUM_GOERLI" || "ETHEREUM_MAINNET" || "ETHEREUM_MAINNET_AND_GOERLI" || "POLYGON_MAINNET" || "POLYGON_MUMBAI",
 * };
 * const command = new CreateAccessorCommand(input);
 * const response = await client.send(command);
 * // { // CreateAccessorOutput
 * //   AccessorId: "STRING_VALUE",
 * //   BillingToken: "STRING_VALUE",
 * //   NetworkType: "ETHEREUM_GOERLI" || "ETHEREUM_MAINNET" || "ETHEREUM_MAINNET_AND_GOERLI" || "POLYGON_MAINNET" || "POLYGON_MUMBAI",
 * // };
 *
 * ```
 *
 * @param CreateAccessorCommandInput - {@link CreateAccessorCommandInput}
 * @returns {@link CreateAccessorCommandOutput}
 * @see {@link CreateAccessorCommandInput} for command's `input` shape.
 * @see {@link CreateAccessorCommandOutput} for command's `response` shape.
 * @see {@link ManagedBlockchainClientResolvedConfig | config} for ManagedBlockchainClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have sufficient access to perform this action.
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception or failure.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The action or operation requested is invalid. Verify that the action is typed correctly.
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *
 * A resource request is issued for a resource that already exists.
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *
 * The maximum number of resources of that type already exist. Ensure the resources requested are within the boundaries of the service edition and your account limits.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request or operation couldn't be performed because a service is throttling requests. The most common source of throttling errors is creating resources that exceed your service limit for this resource type. Request a limit increase or delete unused resources if possible.
 *
 * @throws {@link TooManyTagsException} (client fault)
 *
 * @throws {@link ManagedBlockchainServiceException}
 *
 * Base exception class for all service exceptions from ManagedBlockchain service.
 *
 * @public
 */
export class CreateAccessorCommand extends command<CreateAccessorCommandInput, CreateAccessorCommandOutput>(
  _ep0,
  _mw0,
  "CreateAccessor",
  CreateAccessor$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAccessorInput;
      output: CreateAccessorOutput;
    };
    sdk: {
      input: CreateAccessorCommandInput;
      output: CreateAccessorCommandOutput;
    };
  };
}
