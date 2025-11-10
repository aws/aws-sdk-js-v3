// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ManagedBlockchainClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ManagedBlockchainClient";
import { DeleteAccessorInput, DeleteAccessorOutput } from "../models/models_0";
import { DeleteAccessor } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAccessorCommand}.
 */
export interface DeleteAccessorCommandInput extends DeleteAccessorInput {}
/**
 * @public
 *
 * The output of {@link DeleteAccessorCommand}.
 */
export interface DeleteAccessorCommandOutput extends DeleteAccessorOutput, __MetadataBearer {}

/**
 * <p>Deletes an accessor that your Amazon Web Services account owns. An accessor object is a container that has the
 *          information required for token based access to your Ethereum nodes including, the
 *          <code>BILLING_TOKEN</code>. After an accessor is deleted, the status of the accessor changes
 *          from <code>AVAILABLE</code> to <code>PENDING_DELETION</code>. An accessor in the
 *          <code>PENDING_DELETION</code> state can’t be used for new WebSocket requests or
 *          HTTP requests. However, WebSocket connections that were initiated while the accessor was in the
 *          <code>AVAILABLE</code> state remain open until they expire (up to 2 hours).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ManagedBlockchainClient, DeleteAccessorCommand } from "@aws-sdk/client-managedblockchain"; // ES Modules import
 * // const { ManagedBlockchainClient, DeleteAccessorCommand } = require("@aws-sdk/client-managedblockchain"); // CommonJS import
 * // import type { ManagedBlockchainClientConfig } from "@aws-sdk/client-managedblockchain";
 * const config = {}; // type is ManagedBlockchainClientConfig
 * const client = new ManagedBlockchainClient(config);
 * const input = { // DeleteAccessorInput
 *   AccessorId: "STRING_VALUE", // required
 * };
 * const command = new DeleteAccessorCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAccessorCommandInput - {@link DeleteAccessorCommandInput}
 * @returns {@link DeleteAccessorCommandOutput}
 * @see {@link DeleteAccessorCommandInput} for command's `input` shape.
 * @see {@link DeleteAccessorCommandOutput} for command's `response` shape.
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
export class DeleteAccessorCommand extends $Command
  .classBuilder<
    DeleteAccessorCommandInput,
    DeleteAccessorCommandOutput,
    ManagedBlockchainClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ManagedBlockchainClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("TaigaWebService", "DeleteAccessor", {})
  .n("ManagedBlockchainClient", "DeleteAccessorCommand")
  .sc(DeleteAccessor)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAccessorInput;
      output: {};
    };
    sdk: {
      input: DeleteAccessorCommandInput;
      output: DeleteAccessorCommandOutput;
    };
  };
}
