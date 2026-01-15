// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import type {
  GetTemporaryDataLocationCredentialsRequest,
  GetTemporaryDataLocationCredentialsResponse,
} from "../models/models_0";
import { GetTemporaryDataLocationCredentials$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTemporaryDataLocationCredentialsCommand}.
 */
export interface GetTemporaryDataLocationCredentialsCommandInput extends GetTemporaryDataLocationCredentialsRequest {}
/**
 * @public
 *
 * The output of {@link GetTemporaryDataLocationCredentialsCommand}.
 */
export interface GetTemporaryDataLocationCredentialsCommandOutput extends GetTemporaryDataLocationCredentialsResponse, __MetadataBearer {}

/**
 * <p>Allows a user or application in a secure environment to access data in a specific Amazon S3 location registered with Lake Formation by providing temporary scoped credentials that are limited to the requested data location and
 *       the caller's authorized access level.</p>
 *          <p> The API operation returns an error in the following scenarios:</p>
 *          <ul>
 *             <li>
 *                <p>The data location is not registered with Lake Formation. </p>
 *             </li>
 *             <li>
 *                <p>No Glue table is associated with the data location.</p>
 *             </li>
 *             <li>
 *                <p>The caller doesn't have required permissions on the associated table. The caller must have
 *             <code>SELECT</code> or <code>SUPER</code> permissions on the associated table, and
 *           credential vending for full table access must be enabled in the data lake settings. </p>
 *                <p>For more information, see <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/full-table-credential-vending.html">Application integration for full table access</a>.</p>
 *             </li>
 *             <li>
 *                <p>The data location is in a different Amazon Web Services Region. Lake Formation doesn't
 *           support cross-Region access when vending credentials for a data location. Lake Formation only supports Amazon S3 paths registered within the same Region as the API
 *           call. </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, GetTemporaryDataLocationCredentialsCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, GetTemporaryDataLocationCredentialsCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * // import type { LakeFormationClientConfig } from "@aws-sdk/client-lakeformation";
 * const config = {}; // type is LakeFormationClientConfig
 * const client = new LakeFormationClient(config);
 * const input = { // GetTemporaryDataLocationCredentialsRequest
 *   DurationSeconds: Number("int"),
 *   AuditContext: { // AuditContext
 *     AdditionalAuditContext: "STRING_VALUE",
 *   },
 *   DataLocations: [ // PathStringList
 *     "STRING_VALUE",
 *   ],
 *   CredentialsScope: "READ" || "READWRITE",
 * };
 * const command = new GetTemporaryDataLocationCredentialsCommand(input);
 * const response = await client.send(command);
 * // { // GetTemporaryDataLocationCredentialsResponse
 * //   Credentials: { // TemporaryCredentials
 * //     AccessKeyId: "STRING_VALUE",
 * //     SecretAccessKey: "STRING_VALUE",
 * //     SessionToken: "STRING_VALUE",
 * //     Expiration: new Date("TIMESTAMP"),
 * //   },
 * //   AccessibleDataLocations: [ // PathStringList
 * //     "STRING_VALUE",
 * //   ],
 * //   CredentialsScope: "READ" || "READWRITE",
 * // };
 *
 * ```
 *
 * @param GetTemporaryDataLocationCredentialsCommandInput - {@link GetTemporaryDataLocationCredentialsCommandInput}
 * @returns {@link GetTemporaryDataLocationCredentialsCommandOutput}
 * @see {@link GetTemporaryDataLocationCredentialsCommandInput} for command's `input` shape.
 * @see {@link GetTemporaryDataLocationCredentialsCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Multiple resources exist with the same Amazon S3 location</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist.</p>
 *
 * @throws {@link GlueEncryptionException} (client fault)
 *  <p>An encryption operation failed.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link LakeFormationServiceException}
 * <p>Base exception class for all service exceptions from LakeFormation service.</p>
 *
 *
 * @public
 */
export class GetTemporaryDataLocationCredentialsCommand extends $Command
  .classBuilder<
    GetTemporaryDataLocationCredentialsCommandInput,
    GetTemporaryDataLocationCredentialsCommandOutput,
    LakeFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LakeFormationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSLakeFormation", "GetTemporaryDataLocationCredentials", {})
  .n("LakeFormationClient", "GetTemporaryDataLocationCredentialsCommand")
  .sc(GetTemporaryDataLocationCredentials$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTemporaryDataLocationCredentialsRequest;
      output: GetTemporaryDataLocationCredentialsResponse;
    };
    sdk: {
      input: GetTemporaryDataLocationCredentialsCommandInput;
      output: GetTemporaryDataLocationCredentialsCommandOutput;
    };
  };
}
