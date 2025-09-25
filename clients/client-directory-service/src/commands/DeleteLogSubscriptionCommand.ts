// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteLogSubscriptionRequest, DeleteLogSubscriptionResult } from "../models/models_0";
import { DeleteLogSubscription } from "../schemas/schemas_32_DeleteLogSubscription";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteLogSubscriptionCommand}.
 */
export interface DeleteLogSubscriptionCommandInput extends DeleteLogSubscriptionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteLogSubscriptionCommand}.
 */
export interface DeleteLogSubscriptionCommandOutput extends DeleteLogSubscriptionResult, __MetadataBearer {}

/**
 * <p>Deletes the specified log subscription.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, DeleteLogSubscriptionCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, DeleteLogSubscriptionCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * // import type { DirectoryServiceClientConfig } from "@aws-sdk/client-directory-service";
 * const config = {}; // type is DirectoryServiceClientConfig
 * const client = new DirectoryServiceClient(config);
 * const input = { // DeleteLogSubscriptionRequest
 *   DirectoryId: "STRING_VALUE", // required
 * };
 * const command = new DeleteLogSubscriptionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteLogSubscriptionCommandInput - {@link DeleteLogSubscriptionCommandInput}
 * @returns {@link DeleteLogSubscriptionCommandOutput}
 * @see {@link DeleteLogSubscriptionCommandInput} for command's `input` shape.
 * @see {@link DeleteLogSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>A client exception has occurred.</p>
 *
 * @throws {@link EntityDoesNotExistException} (client fault)
 *  <p>The specified entity could not be found.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An exception has occurred in Directory Service.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>The operation is not supported.</p>
 *
 * @throws {@link DirectoryServiceServiceException}
 * <p>Base exception class for all service exceptions from DirectoryService service.</p>
 *
 *
 * @public
 */
export class DeleteLogSubscriptionCommand extends $Command
  .classBuilder<
    DeleteLogSubscriptionCommandInput,
    DeleteLogSubscriptionCommandOutput,
    DirectoryServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectoryServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DirectoryService_20150416", "DeleteLogSubscription", {})
  .n("DirectoryServiceClient", "DeleteLogSubscriptionCommand")
  .sc(DeleteLogSubscription)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteLogSubscriptionRequest;
      output: {};
    };
    sdk: {
      input: DeleteLogSubscriptionCommandInput;
      output: DeleteLogSubscriptionCommandOutput;
    };
  };
}
