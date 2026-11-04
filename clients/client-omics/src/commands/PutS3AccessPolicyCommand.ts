// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutS3AccessPolicyRequest, PutS3AccessPolicyResponse } from "../models/models_0";
import { PutS3AccessPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutS3AccessPolicyCommand}.
 */
export interface PutS3AccessPolicyCommandInput extends PutS3AccessPolicyRequest {}
/**
 * @public
 *
 * The output of {@link PutS3AccessPolicyCommand}.
 */
export interface PutS3AccessPolicyCommandOutput extends PutS3AccessPolicyResponse, __MetadataBearer {}

/**
 * Adds an access policy to the specified store.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, PutS3AccessPolicyCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, PutS3AccessPolicyCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // PutS3AccessPolicyRequest
 *   s3AccessPointArn: "STRING_VALUE", // required
 *   s3AccessPolicy: "STRING_VALUE", // required
 * };
 * const command = new PutS3AccessPolicyCommand(input);
 * const response = await client.send(command);
 * // { // PutS3AccessPolicyResponse
 * //   s3AccessPointArn: "STRING_VALUE",
 * //   storeId: "STRING_VALUE",
 * //   storeType: "SEQUENCE_STORE" || "REFERENCE_STORE",
 * // };
 *
 * ```
 *
 * @param PutS3AccessPolicyCommandInput - {@link PutS3AccessPolicyCommandInput}
 * @returns {@link PutS3AccessPolicyCommandOutput}
 * @see {@link PutS3AccessPolicyCommandInput} for command's `input` shape.
 * @see {@link PutS3AccessPolicyCommandOutput} for command's `response` shape.
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
export class PutS3AccessPolicyCommand extends command<PutS3AccessPolicyCommandInput, PutS3AccessPolicyCommandOutput>(
  _ep0,
  _mw0,
  "PutS3AccessPolicy",
  PutS3AccessPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutS3AccessPolicyRequest;
      output: PutS3AccessPolicyResponse;
    };
    sdk: {
      input: PutS3AccessPolicyCommandInput;
      output: PutS3AccessPolicyCommandOutput;
    };
  };
}
