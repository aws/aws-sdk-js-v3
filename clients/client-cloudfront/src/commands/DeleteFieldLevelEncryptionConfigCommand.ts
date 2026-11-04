// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteFieldLevelEncryptionConfigRequest } from "../models/models_0";
import { DeleteFieldLevelEncryptionConfig$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteFieldLevelEncryptionConfigCommand}.
 */
export interface DeleteFieldLevelEncryptionConfigCommandInput extends DeleteFieldLevelEncryptionConfigRequest {}
/**
 * @public
 *
 * The output of {@link DeleteFieldLevelEncryptionConfigCommand}.
 */
export interface DeleteFieldLevelEncryptionConfigCommandOutput extends __MetadataBearer {}

/**
 * Remove a field-level encryption configuration.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, DeleteFieldLevelEncryptionConfigCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, DeleteFieldLevelEncryptionConfigCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // DeleteFieldLevelEncryptionConfigRequest
 *   Id: "STRING_VALUE", // required
 *   IfMatch: "STRING_VALUE",
 * };
 * const command = new DeleteFieldLevelEncryptionConfigCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteFieldLevelEncryptionConfigCommandInput - {@link DeleteFieldLevelEncryptionConfigCommandInput}
 * @returns {@link DeleteFieldLevelEncryptionConfigCommandOutput}
 * @see {@link DeleteFieldLevelEncryptionConfigCommandInput} for command's `input` shape.
 * @see {@link DeleteFieldLevelEncryptionConfigCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *
 * Access denied.
 *
 * @throws {@link FieldLevelEncryptionConfigInUse} (client fault)
 *
 * The specified configuration for field-level encryption is in use.
 *
 * @throws {@link InvalidIfMatchVersion} (client fault)
 *
 * The `If-Match` version is missing or not valid.
 *
 * @throws {@link NoSuchFieldLevelEncryptionConfig} (client fault)
 *
 * The specified configuration for field-level encryption doesn't exist.
 *
 * @throws {@link PreconditionFailed} (client fault)
 *
 * The precondition in one or more of the request fields evaluated to `false`.
 *
 * @throws {@link CloudFrontServiceException}
 *
 * Base exception class for all service exceptions from CloudFront service.
 *
 * @public
 */
export class DeleteFieldLevelEncryptionConfigCommand extends command<DeleteFieldLevelEncryptionConfigCommandInput, DeleteFieldLevelEncryptionConfigCommandOutput>(
  _ep0,
  _mw0,
  "DeleteFieldLevelEncryptionConfig",
  DeleteFieldLevelEncryptionConfig$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteFieldLevelEncryptionConfigRequest;
      output: {};
    };
    sdk: {
      input: DeleteFieldLevelEncryptionConfigCommandInput;
      output: DeleteFieldLevelEncryptionConfigCommandOutput;
    };
  };
}
