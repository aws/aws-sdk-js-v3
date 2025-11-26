// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  ManagedBlockchainClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ManagedBlockchainClient";
import type { ListAccessorsInput, ListAccessorsOutput } from "../models/models_0";
import { ListAccessors } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAccessorsCommand}.
 */
export interface ListAccessorsCommandInput extends ListAccessorsInput {}
/**
 * @public
 *
 * The output of {@link ListAccessorsCommand}.
 */
export interface ListAccessorsCommandOutput extends ListAccessorsOutput, __MetadataBearer {}

/**
 * <p>Returns a list of the accessors and their properties. Accessor objects are containers that have the
 *          information required for token based access to your Ethereum nodes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ManagedBlockchainClient, ListAccessorsCommand } from "@aws-sdk/client-managedblockchain"; // ES Modules import
 * // const { ManagedBlockchainClient, ListAccessorsCommand } = require("@aws-sdk/client-managedblockchain"); // CommonJS import
 * // import type { ManagedBlockchainClientConfig } from "@aws-sdk/client-managedblockchain";
 * const config = {}; // type is ManagedBlockchainClientConfig
 * const client = new ManagedBlockchainClient(config);
 * const input = { // ListAccessorsInput
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   NetworkType: "ETHEREUM_GOERLI" || "ETHEREUM_MAINNET" || "ETHEREUM_MAINNET_AND_GOERLI" || "POLYGON_MAINNET" || "POLYGON_MUMBAI",
 * };
 * const command = new ListAccessorsCommand(input);
 * const response = await client.send(command);
 * // { // ListAccessorsOutput
 * //   Accessors: [ // AccessorSummaryList
 * //     { // AccessorSummary
 * //       Id: "STRING_VALUE",
 * //       Type: "BILLING_TOKEN",
 * //       Status: "AVAILABLE" || "PENDING_DELETION" || "DELETED",
 * //       CreationDate: new Date("TIMESTAMP"),
 * //       Arn: "STRING_VALUE",
 * //       NetworkType: "ETHEREUM_GOERLI" || "ETHEREUM_MAINNET" || "ETHEREUM_MAINNET_AND_GOERLI" || "POLYGON_MAINNET" || "POLYGON_MUMBAI",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAccessorsCommandInput - {@link ListAccessorsCommandInput}
 * @returns {@link ListAccessorsCommandOutput}
 * @see {@link ListAccessorsCommandInput} for command's `input` shape.
 * @see {@link ListAccessorsCommandOutput} for command's `response` shape.
 * @see {@link ManagedBlockchainClientResolvedConfig | config} for ManagedBlockchainClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The action or operation requested is invalid. Verify that the action is typed correctly.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request or operation couldn't be performed because a service is
 *          throttling requests. The most common source of throttling errors is
 *          creating resources that exceed your service limit for this resource type.
 *          Request a limit increase or delete unused resources if possible.</p>
 *
 * @throws {@link ManagedBlockchainServiceException}
 * <p>Base exception class for all service exceptions from ManagedBlockchain service.</p>
 *
 *
 * @public
 */
export class ListAccessorsCommand extends $Command
  .classBuilder<
    ListAccessorsCommandInput,
    ListAccessorsCommandOutput,
    ManagedBlockchainClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ManagedBlockchainClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("TaigaWebService", "ListAccessors", {})
  .n("ManagedBlockchainClient", "ListAccessorsCommand")
  .sc(ListAccessors)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAccessorsInput;
      output: ListAccessorsOutput;
    };
    sdk: {
      input: ListAccessorsCommandInput;
      output: ListAccessorsCommandOutput;
    };
  };
}
