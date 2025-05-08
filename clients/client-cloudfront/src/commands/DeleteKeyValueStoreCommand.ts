// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteKeyValueStoreRequest } from "../models/models_1";
import { de_DeleteKeyValueStoreCommand, se_DeleteKeyValueStoreCommand } from "../protocols/Aws_restXml";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteKeyValueStoreCommand}.
 */
export interface DeleteKeyValueStoreCommandInput extends DeleteKeyValueStoreRequest {}
/**
 * @public
 *
 * The output of {@link DeleteKeyValueStoreCommand}.
 */
export interface DeleteKeyValueStoreCommandOutput extends __MetadataBearer {}

/**
 * <p>Specifies the key value store to delete.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, DeleteKeyValueStoreCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, DeleteKeyValueStoreCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const input = { // DeleteKeyValueStoreRequest
 *   Name: "STRING_VALUE", // required
 *   IfMatch: "STRING_VALUE", // required
 * };
 * const command = new DeleteKeyValueStoreCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteKeyValueStoreCommandInput - {@link DeleteKeyValueStoreCommandInput}
 * @returns {@link DeleteKeyValueStoreCommandOutput}
 * @see {@link DeleteKeyValueStoreCommandInput} for command's `input` shape.
 * @see {@link DeleteKeyValueStoreCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link CannotDeleteEntityWhileInUse} (client fault)
 *  <p>The entity cannot be deleted while it is in use.</p>
 *
 * @throws {@link EntityNotFound} (client fault)
 *  <p>The entity was not found.</p>
 *
 * @throws {@link InvalidIfMatchVersion} (client fault)
 *  <p>The <code>If-Match</code> version is missing or not valid.</p>
 *
 * @throws {@link PreconditionFailed} (client fault)
 *  <p>The precondition in one or more of the request fields evaluated to <code>false</code>.</p>
 *
 * @throws {@link UnsupportedOperation} (client fault)
 *  <p>This operation is not supported in this Amazon Web Services Region.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 *
 * @example To delete a KeyValueStore
 * ```javascript
 * // Use the following command to delete a KeyValueStore.
 * const input = {
 *   IfMatch: "ETVPDKIKX0DER",
 *   Name: "my-keyvaluestore-name"
 * };
 * const command = new DeleteKeyValueStoreCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteKeyValueStoreCommand extends $Command
  .classBuilder<
    DeleteKeyValueStoreCommandInput,
    DeleteKeyValueStoreCommandOutput,
    CloudFrontClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFrontClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Cloudfront2020_05_31", "DeleteKeyValueStore", {})
  .n("CloudFrontClient", "DeleteKeyValueStoreCommand")
  .f(void 0, void 0)
  .ser(se_DeleteKeyValueStoreCommand)
  .de(de_DeleteKeyValueStoreCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteKeyValueStoreRequest;
      output: {};
    };
    sdk: {
      input: DeleteKeyValueStoreCommandInput;
      output: DeleteKeyValueStoreCommandOutput;
    };
  };
}
