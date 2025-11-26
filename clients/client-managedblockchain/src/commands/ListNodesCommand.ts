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
import type { ListNodesInput, ListNodesOutput } from "../models/models_0";
import { ListNodes } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListNodesCommand}.
 */
export interface ListNodesCommandInput extends ListNodesInput {}
/**
 * @public
 *
 * The output of {@link ListNodesCommand}.
 */
export interface ListNodesCommandOutput extends ListNodesOutput, __MetadataBearer {}

/**
 * <p>Returns information about the nodes within a network.</p>
 *          <p>Applies to Hyperledger Fabric and Ethereum.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ManagedBlockchainClient, ListNodesCommand } from "@aws-sdk/client-managedblockchain"; // ES Modules import
 * // const { ManagedBlockchainClient, ListNodesCommand } = require("@aws-sdk/client-managedblockchain"); // CommonJS import
 * // import type { ManagedBlockchainClientConfig } from "@aws-sdk/client-managedblockchain";
 * const config = {}; // type is ManagedBlockchainClientConfig
 * const client = new ManagedBlockchainClient(config);
 * const input = { // ListNodesInput
 *   NetworkId: "STRING_VALUE", // required
 *   MemberId: "STRING_VALUE",
 *   Status: "CREATING" || "AVAILABLE" || "UNHEALTHY" || "CREATE_FAILED" || "UPDATING" || "DELETING" || "DELETED" || "FAILED" || "INACCESSIBLE_ENCRYPTION_KEY",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListNodesCommand(input);
 * const response = await client.send(command);
 * // { // ListNodesOutput
 * //   Nodes: [ // NodeSummaryList
 * //     { // NodeSummary
 * //       Id: "STRING_VALUE",
 * //       Status: "CREATING" || "AVAILABLE" || "UNHEALTHY" || "CREATE_FAILED" || "UPDATING" || "DELETING" || "DELETED" || "FAILED" || "INACCESSIBLE_ENCRYPTION_KEY",
 * //       CreationDate: new Date("TIMESTAMP"),
 * //       AvailabilityZone: "STRING_VALUE",
 * //       InstanceType: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListNodesCommandInput - {@link ListNodesCommandInput}
 * @returns {@link ListNodesCommandOutput}
 * @see {@link ListNodesCommandInput} for command's `input` shape.
 * @see {@link ListNodesCommandOutput} for command's `response` shape.
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
export class ListNodesCommand extends $Command
  .classBuilder<
    ListNodesCommandInput,
    ListNodesCommandOutput,
    ManagedBlockchainClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ManagedBlockchainClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("TaigaWebService", "ListNodes", {})
  .n("ManagedBlockchainClient", "ListNodesCommand")
  .sc(ListNodes)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListNodesInput;
      output: ListNodesOutput;
    };
    sdk: {
      input: ListNodesCommandInput;
      output: ListNodesCommandOutput;
    };
  };
}
