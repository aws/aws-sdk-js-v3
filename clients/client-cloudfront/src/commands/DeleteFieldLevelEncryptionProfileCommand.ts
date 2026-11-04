// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteFieldLevelEncryptionProfileRequest } from "../models/models_0";
import { DeleteFieldLevelEncryptionProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteFieldLevelEncryptionProfileCommand}.
 */
export interface DeleteFieldLevelEncryptionProfileCommandInput extends DeleteFieldLevelEncryptionProfileRequest {}
/**
 * @public
 *
 * The output of {@link DeleteFieldLevelEncryptionProfileCommand}.
 */
export interface DeleteFieldLevelEncryptionProfileCommandOutput extends __MetadataBearer {}

/**
 * Remove a field-level encryption profile.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, DeleteFieldLevelEncryptionProfileCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, DeleteFieldLevelEncryptionProfileCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // DeleteFieldLevelEncryptionProfileRequest
 *   Id: "STRING_VALUE", // required
 *   IfMatch: "STRING_VALUE",
 * };
 * const command = new DeleteFieldLevelEncryptionProfileCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteFieldLevelEncryptionProfileCommandInput - {@link DeleteFieldLevelEncryptionProfileCommandInput}
 * @returns {@link DeleteFieldLevelEncryptionProfileCommandOutput}
 * @see {@link DeleteFieldLevelEncryptionProfileCommandInput} for command's `input` shape.
 * @see {@link DeleteFieldLevelEncryptionProfileCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *
 * Access denied.
 *
 * @throws {@link FieldLevelEncryptionProfileInUse} (client fault)
 *
 * The specified profile for field-level encryption is in use.
 *
 * @throws {@link InvalidIfMatchVersion} (client fault)
 *
 * The `If-Match` version is missing or not valid.
 *
 * @throws {@link NoSuchFieldLevelEncryptionProfile} (client fault)
 *
 * The specified profile for field-level encryption doesn't exist.
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
export class DeleteFieldLevelEncryptionProfileCommand extends command<DeleteFieldLevelEncryptionProfileCommandInput, DeleteFieldLevelEncryptionProfileCommandOutput>(
  _ep0,
  _mw0,
  "DeleteFieldLevelEncryptionProfile",
  DeleteFieldLevelEncryptionProfile$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteFieldLevelEncryptionProfileRequest;
      output: {};
    };
    sdk: {
      input: DeleteFieldLevelEncryptionProfileCommandInput;
      output: DeleteFieldLevelEncryptionProfileCommandOutput;
    };
  };
}
