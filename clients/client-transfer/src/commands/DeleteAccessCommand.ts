// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteAccessRequest } from "../models/models_0";
import { DeleteAccess } from "../schemas/schemas_14_Access";
import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAccessCommand}.
 */
export interface DeleteAccessCommandInput extends DeleteAccessRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAccessCommand}.
 */
export interface DeleteAccessCommandOutput extends __MetadataBearer {}

/**
 * <p>Allows you to delete the access specified in the <code>ServerID</code> and <code>ExternalID</code> parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, DeleteAccessCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, DeleteAccessCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * // import type { TransferClientConfig } from "@aws-sdk/client-transfer";
 * const config = {}; // type is TransferClientConfig
 * const client = new TransferClient(config);
 * const input = { // DeleteAccessRequest
 *   ServerId: "STRING_VALUE", // required
 *   ExternalId: "STRING_VALUE", // required
 * };
 * const command = new DeleteAccessCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAccessCommandInput - {@link DeleteAccessCommandInput}
 * @returns {@link DeleteAccessCommandOutput}
 * @see {@link DeleteAccessCommandInput} for command's `input` shape.
 * @see {@link DeleteAccessCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for TransferClient's `config` shape.
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>This exception is thrown when an error occurs in the Transfer Family service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception is thrown when the client submits a malformed request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when a resource is not found by the Amazon Web ServicesTransfer Family service.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request has failed because the Amazon Web ServicesTransfer Family service is not available.</p>
 *
 * @throws {@link TransferServiceException}
 * <p>Base exception class for all service exceptions from Transfer service.</p>
 *
 *
 * @public
 */
export class DeleteAccessCommand extends $Command
  .classBuilder<
    DeleteAccessCommandInput,
    DeleteAccessCommandOutput,
    TransferClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TransferClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("TransferService", "DeleteAccess", {})
  .n("TransferClient", "DeleteAccessCommand")
  .sc(DeleteAccess)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAccessRequest;
      output: {};
    };
    sdk: {
      input: DeleteAccessCommandInput;
      output: DeleteAccessCommandOutput;
    };
  };
}
