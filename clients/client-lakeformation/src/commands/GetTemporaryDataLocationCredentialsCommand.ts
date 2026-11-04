// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetTemporaryDataLocationCredentialsRequest,
  GetTemporaryDataLocationCredentialsResponse,
} from "../models/models_0";
import { GetTemporaryDataLocationCredentials$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Allows a user or application in a secure environment to access data in a specific Amazon S3 location registered with Lake Formation by providing temporary scoped credentials that are limited to the requested data location and the caller's authorized access level.
 *
 * `GetDataAccess` is logged in CloudTrail whenever a principal requests temporary data location credentials to access data in a data lake location that is registered with Lake Formation.
 *
 * The API operation returns an error in the following scenarios:
 *
 * - The data location is not registered with Lake Formation.
 * - No Glue table is associated with the data location.
 * - The caller doesn't have required permissions on the associated table. The caller must have `SELECT` or `SUPER` permissions on the associated table, and credential vending for full table access must be enabled in the data lake settings.
 *
 *   For more information, see [Application integration for full table access](https://docs.aws.amazon.com/lake-formation/latest/dg/full-table-credential-vending.html).
 * - The data location is in a different Amazon Web Services Region. Lake Formation doesn't support cross-Region access when vending credentials for a data location. Lake Formation only supports Amazon S3 paths registered within the same Region as the API call.
 *
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
 *
 * Access to a resource was denied.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Multiple resources exist with the same Amazon S3 location
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *
 * A specified entity does not exist.
 *
 * @throws {@link GlueEncryptionException} (client fault)
 *
 * An encryption operation failed.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * An internal service error occurred.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The input provided was not valid.
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *
 * The operation timed out.
 *
 * @throws {@link LakeFormationServiceException}
 *
 * Base exception class for all service exceptions from LakeFormation service.
 *
 * @public
 */
export class GetTemporaryDataLocationCredentialsCommand extends command<GetTemporaryDataLocationCredentialsCommandInput, GetTemporaryDataLocationCredentialsCommandOutput>(
  _ep0,
  _mw0,
  "GetTemporaryDataLocationCredentials",
  GetTemporaryDataLocationCredentials$
) {
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
