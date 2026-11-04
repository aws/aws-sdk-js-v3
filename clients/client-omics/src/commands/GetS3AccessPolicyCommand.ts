// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetS3AccessPolicyRequest, GetS3AccessPolicyResponse } from "../models/models_0";
import { GetS3AccessPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetS3AccessPolicyCommand}.
 */
export interface GetS3AccessPolicyCommandInput extends GetS3AccessPolicyRequest {}
/**
 * @public
 *
 * The output of {@link GetS3AccessPolicyCommand}.
 */
export interface GetS3AccessPolicyCommandOutput extends GetS3AccessPolicyResponse, __MetadataBearer {}

/**
 * Retrieves details about an access policy on a given store.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, GetS3AccessPolicyCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, GetS3AccessPolicyCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // GetS3AccessPolicyRequest
 *   s3AccessPointArn: "STRING_VALUE", // required
 * };
 * const command = new GetS3AccessPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetS3AccessPolicyResponse
 * //   s3AccessPointArn: "STRING_VALUE",
 * //   storeId: "STRING_VALUE",
 * //   storeType: "SEQUENCE_STORE" || "REFERENCE_STORE",
 * //   updateTime: new Date("TIMESTAMP"),
 * //   s3AccessPolicy: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GetS3AccessPolicyCommandInput - {@link GetS3AccessPolicyCommandInput}
 * @returns {@link GetS3AccessPolicyCommandOutput}
 * @see {@link GetS3AccessPolicyCommandInput} for command's `input` shape.
 * @see {@link GetS3AccessPolicyCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request exceeds a service quota.
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
export class GetS3AccessPolicyCommand extends command<GetS3AccessPolicyCommandInput, GetS3AccessPolicyCommandOutput>(
  _ep0,
  _mw0,
  "GetS3AccessPolicy",
  GetS3AccessPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetS3AccessPolicyRequest;
      output: GetS3AccessPolicyResponse;
    };
    sdk: {
      input: GetS3AccessPolicyCommandInput;
      output: GetS3AccessPolicyCommandOutput;
    };
  };
}
