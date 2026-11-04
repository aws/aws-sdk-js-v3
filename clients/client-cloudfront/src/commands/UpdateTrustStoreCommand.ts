// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateTrustStoreRequest, UpdateTrustStoreResult } from "../models/models_1";
import { UpdateTrustStore$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateTrustStoreCommand}.
 */
export interface UpdateTrustStoreCommandInput extends UpdateTrustStoreRequest {}
/**
 * @public
 *
 * The output of {@link UpdateTrustStoreCommand}.
 */
export interface UpdateTrustStoreCommandOutput extends UpdateTrustStoreResult, __MetadataBearer {}

/**
 * Updates a trust store.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, UpdateTrustStoreCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, UpdateTrustStoreCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // UpdateTrustStoreRequest
 *   Id: "STRING_VALUE", // required
 *   CaCertificatesBundleSource: { // CaCertificatesBundleSource Union: only one key present
 *     CaCertificatesBundleS3Location: { // CaCertificatesBundleS3Location
 *       Bucket: "STRING_VALUE", // required
 *       Key: "STRING_VALUE", // required
 *       Region: "STRING_VALUE", // required
 *       Version: "STRING_VALUE",
 *     },
 *   },
 *   UseClientCertificateOCSPEndpoint: true || false,
 *   IfMatch: "STRING_VALUE", // required
 * };
 * const command = new UpdateTrustStoreCommand(input);
 * const response = await client.send(command);
 * // { // UpdateTrustStoreResult
 * //   TrustStore: { // TrustStore
 * //     Id: "STRING_VALUE",
 * //     Arn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Status: "pending" || "active" || "failed",
 * //     NumberOfCaCertificates: Number("int"),
 * //     LastModifiedTime: new Date("TIMESTAMP"),
 * //     Reason: "STRING_VALUE",
 * //     UseClientCertificateOCSPEndpoint: true || false,
 * //   },
 * //   ETag: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateTrustStoreCommandInput - {@link UpdateTrustStoreCommandInput}
 * @returns {@link UpdateTrustStoreCommandOutput}
 * @see {@link UpdateTrustStoreCommandInput} for command's `input` shape.
 * @see {@link UpdateTrustStoreCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *
 * Access denied.
 *
 * @throws {@link EntityNotFound} (client fault)
 *
 * The entity was not found.
 *
 * @throws {@link InvalidArgument} (client fault)
 *
 * An argument is invalid.
 *
 * @throws {@link InvalidIfMatchVersion} (client fault)
 *
 * The `If-Match` version is missing or not valid.
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
export class UpdateTrustStoreCommand extends command<UpdateTrustStoreCommandInput, UpdateTrustStoreCommandOutput>(
  _ep0,
  _mw0,
  "UpdateTrustStore",
  UpdateTrustStore$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateTrustStoreRequest;
      output: UpdateTrustStoreResult;
    };
    sdk: {
      input: UpdateTrustStoreCommandInput;
      output: UpdateTrustStoreCommandOutput;
    };
  };
}
