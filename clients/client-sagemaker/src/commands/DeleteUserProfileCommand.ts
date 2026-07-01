// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteUserProfileRequest } from "../models/models_2";
import { DeleteUserProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteUserProfileCommand}.
 */
export interface DeleteUserProfileCommandInput extends DeleteUserProfileRequest {}
/**
 * @public
 *
 * The output of {@link DeleteUserProfileCommand}.
 */
export interface DeleteUserProfileCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a user profile. When a user profile is deleted, the user loses access to their EFS volume, including data, notebooks, and other artifacts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteUserProfileCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteUserProfileCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // DeleteUserProfileRequest
 *   DomainId: "STRING_VALUE", // required
 *   UserProfileName: "STRING_VALUE", // required
 * };
 * const command = new DeleteUserProfileCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteUserProfileCommandInput - {@link DeleteUserProfileCommandInput}
 * @returns {@link DeleteUserProfileCommandOutput}
 * @see {@link DeleteUserProfileCommandInput} for command's `input` shape.
 * @see {@link DeleteUserProfileCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceInUse} (client fault)
 *  <p>Resource being accessed is in use.</p>
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class DeleteUserProfileCommand extends command<DeleteUserProfileCommandInput, DeleteUserProfileCommandOutput>(
  _ep0,
  _mw0,
  "DeleteUserProfile",
  DeleteUserProfile$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteUserProfileRequest;
      output: {};
    };
    sdk: {
      input: DeleteUserProfileCommandInput;
      output: DeleteUserProfileCommandOutput;
    };
  };
}
