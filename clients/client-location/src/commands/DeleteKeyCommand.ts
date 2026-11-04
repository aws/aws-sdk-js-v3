// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteKeyRequest, DeleteKeyResponse } from "../models/models_0";
import { DeleteKey$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteKeyCommand}.
 */
export interface DeleteKeyCommandInput extends DeleteKeyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteKeyCommand}.
 */
export interface DeleteKeyCommandOutput extends DeleteKeyResponse, __MetadataBearer {}

/**
 * Deletes the specified API key. The API key must have been deactivated more than 90 days previously.
 *
 * For more information, see [Use API keys to authenticate](https://docs.aws.amazon.com/location/latest/developerguide/using-apikeys.html) in the *Amazon Location Service Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, DeleteKeyCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, DeleteKeyCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * // import type { LocationClientConfig } from "@aws-sdk/client-location";
 * const config = {}; // type is LocationClientConfig
 * const client = new LocationClient(config);
 * const input = { // DeleteKeyRequest
 *   KeyName: "STRING_VALUE", // required
 *   ForceDelete: true || false,
 * };
 * const command = new DeleteKeyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteKeyCommandInput - {@link DeleteKeyCommandInput}
 * @returns {@link DeleteKeyCommandOutput}
 * @see {@link DeleteKeyCommandInput} for command's `input` shape.
 * @see {@link DeleteKeyCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The request was denied because of insufficient access or permissions. Check with an administrator to verify your permissions.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed to process because of an unknown server error, exception, or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource that you've entered was not found in your AWS account.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied because of request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input failed to meet the constraints specified by the AWS service.
 *
 * @throws {@link LocationServiceException}
 *
 * Base exception class for all service exceptions from Location service.
 *
 * @public
 */
export class DeleteKeyCommand extends command<DeleteKeyCommandInput, DeleteKeyCommandOutput>(
  _ep0,
  _mw0,
  "DeleteKey",
  DeleteKey$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteKeyRequest;
      output: {};
    };
    sdk: {
      input: DeleteKeyCommandInput;
      output: DeleteKeyCommandOutput;
    };
  };
}
