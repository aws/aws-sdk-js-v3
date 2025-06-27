// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ManagedBlockchainClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ManagedBlockchainClient";
import { GetAccessorInput, GetAccessorOutput } from "../models/models_0";
import { de_GetAccessorCommand, se_GetAccessorCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAccessorCommand}.
 */
export interface GetAccessorCommandInput extends GetAccessorInput {}
/**
 * @public
 *
 * The output of {@link GetAccessorCommand}.
 */
export interface GetAccessorCommandOutput extends GetAccessorOutput, __MetadataBearer {}

/**
 * <p>Returns detailed information about an accessor. An accessor object is a container that has the
 *          information required for token based access to your Ethereum nodes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ManagedBlockchainClient, GetAccessorCommand } from "@aws-sdk/client-managedblockchain"; // ES Modules import
 * // const { ManagedBlockchainClient, GetAccessorCommand } = require("@aws-sdk/client-managedblockchain"); // CommonJS import
 * const client = new ManagedBlockchainClient(config);
 * const input = { // GetAccessorInput
 *   AccessorId: "STRING_VALUE", // required
 * };
 * const command = new GetAccessorCommand(input);
 * const response = await client.send(command);
 * // { // GetAccessorOutput
 * //   Accessor: { // Accessor
 * //     Id: "STRING_VALUE",
 * //     Type: "BILLING_TOKEN",
 * //     BillingToken: "STRING_VALUE",
 * //     Status: "AVAILABLE" || "PENDING_DELETION" || "DELETED",
 * //     CreationDate: new Date("TIMESTAMP"),
 * //     Arn: "STRING_VALUE",
 * //     Tags: { // OutputTagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     NetworkType: "ETHEREUM_GOERLI" || "ETHEREUM_MAINNET" || "ETHEREUM_MAINNET_AND_GOERLI" || "POLYGON_MAINNET" || "POLYGON_MUMBAI",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAccessorCommandInput - {@link GetAccessorCommandInput}
 * @returns {@link GetAccessorCommandOutput}
 * @see {@link GetAccessorCommandInput} for command's `input` shape.
 * @see {@link GetAccessorCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A requested resource doesn't exist. It may have been deleted or referenced incorrectly.</p>
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
export class GetAccessorCommand extends $Command
  .classBuilder<
    GetAccessorCommandInput,
    GetAccessorCommandOutput,
    ManagedBlockchainClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ManagedBlockchainClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("TaigaWebService", "GetAccessor", {})
  .n("ManagedBlockchainClient", "GetAccessorCommand")
  .f(void 0, void 0)
  .ser(se_GetAccessorCommand)
  .de(de_GetAccessorCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAccessorInput;
      output: GetAccessorOutput;
    };
    sdk: {
      input: GetAccessorCommandInput;
      output: GetAccessorCommandOutput;
    };
  };
}
