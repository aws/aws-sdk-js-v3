// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteS3AccessPolicyRequest, DeleteS3AccessPolicyResponse } from "../models/models_0";
import { DeleteS3AccessPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteS3AccessPolicyCommand}.
 */
export interface DeleteS3AccessPolicyCommandInput extends DeleteS3AccessPolicyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteS3AccessPolicyCommand}.
 */
export interface DeleteS3AccessPolicyCommandOutput extends DeleteS3AccessPolicyResponse, __MetadataBearer {}

/**
 * Deletes an access policy for the specified store.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, DeleteS3AccessPolicyCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, DeleteS3AccessPolicyCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // DeleteS3AccessPolicyRequest
 *   s3AccessPointArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteS3AccessPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteS3AccessPolicyCommandInput - {@link DeleteS3AccessPolicyCommandInput}
 * @returns {@link DeleteS3AccessPolicyCommandOutput}
 * @see {@link DeleteS3AccessPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteS3AccessPolicyCommandOutput} for command's `response` shape.
 * @see {@link OmicsClientResolvedConfig | config} for OmicsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred. Try the request again.
 *
 * @throws {@link NotSupportedOperationException} (client fault)
 *
 * The operation is not supported by Amazon Omics, or the API does not exist.
 *
 * @throws {@link RequestTimeoutException} (client fault)
 *
 * The request timed out.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The target resource was not found in the current Region.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link OmicsServiceException}
 *
 * Base exception class for all service exceptions from Omics service.
 *
 * @public
 */
export class DeleteS3AccessPolicyCommand extends command<DeleteS3AccessPolicyCommandInput, DeleteS3AccessPolicyCommandOutput>(
  _ep0,
  _mw0,
  "DeleteS3AccessPolicy",
  DeleteS3AccessPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteS3AccessPolicyRequest;
      output: {};
    };
    sdk: {
      input: DeleteS3AccessPolicyCommandInput;
      output: DeleteS3AccessPolicyCommandOutput;
    };
  };
}
