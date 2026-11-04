// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateEncryptionKeyRequest, UpdateEncryptionKeyResponse } from "../models/models_1";
import { UpdateEncryptionKey$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateEncryptionKeyCommand}.
 */
export interface UpdateEncryptionKeyCommandInput extends UpdateEncryptionKeyRequest {}
/**
 * @public
 *
 * The output of {@link UpdateEncryptionKeyCommand}.
 */
export interface UpdateEncryptionKeyCommandOutput extends UpdateEncryptionKeyResponse, __MetadataBearer {}

/**
 * Updates an encryption key. A `ResourceNotFoundException` means that an Amazon Web Services owned key is being used for encryption.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, UpdateEncryptionKeyCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, UpdateEncryptionKeyCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * // import type { Inspector2ClientConfig } from "@aws-sdk/client-inspector2";
 * const config = {}; // type is Inspector2ClientConfig
 * const client = new Inspector2Client(config);
 * const input = { // UpdateEncryptionKeyRequest
 *   kmsKeyId: "STRING_VALUE", // required
 *   scanType: "STRING_VALUE", // required
 *   resourceType: "STRING_VALUE", // required
 * };
 * const command = new UpdateEncryptionKeyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateEncryptionKeyCommandInput - {@link UpdateEncryptionKeyCommandInput}
 * @returns {@link UpdateEncryptionKeyCommandOutput}
 * @see {@link UpdateEncryptionKeyCommandInput} for command's `input` shape.
 * @see {@link UpdateEncryptionKeyCommandOutput} for command's `response` shape.
 * @see {@link Inspector2ClientResolvedConfig | config} for Inspector2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * For `Enable`, you receive this error if you attempt to use a feature in an unsupported Amazon Web Services Region.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed due to an internal failure of the Amazon Inspector service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The operation tried to access an invalid resource. Make sure the resource is specified correctly.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The limit on the number of requests per second was exceeded.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request has failed validation due to missing required fields or having invalid inputs.
 *
 * @throws {@link Inspector2ServiceException}
 *
 * Base exception class for all service exceptions from Inspector2 service.
 *
 * @public
 */
export class UpdateEncryptionKeyCommand extends command<UpdateEncryptionKeyCommandInput, UpdateEncryptionKeyCommandOutput>(
  _ep0,
  _mw0,
  "UpdateEncryptionKey",
  UpdateEncryptionKey$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateEncryptionKeyRequest;
      output: {};
    };
    sdk: {
      input: UpdateEncryptionKeyCommandInput;
      output: UpdateEncryptionKeyCommandOutput;
    };
  };
}
