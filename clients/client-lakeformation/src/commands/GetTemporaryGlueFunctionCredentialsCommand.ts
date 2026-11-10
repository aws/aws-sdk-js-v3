// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetTemporaryGlueFunctionCredentialsRequest,
  GetTemporaryGlueFunctionCredentialsResponse,
} from "../models/models_0";
import { GetTemporaryGlueFunctionCredentials$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetTemporaryGlueFunctionCredentialsCommand}.
 */
export interface GetTemporaryGlueFunctionCredentialsCommandInput extends GetTemporaryGlueFunctionCredentialsRequest {}
/**
 * @public
 *
 * The output of {@link GetTemporaryGlueFunctionCredentialsCommand}.
 */
export interface GetTemporaryGlueFunctionCredentialsCommandOutput extends GetTemporaryGlueFunctionCredentialsResponse, __MetadataBearer {}

/**
 * <p>Returns temporary credentials that you can use to download the artifacts of a user-defined function whose
 *       <code>GovernanceMode</code> is <code>LAKE_FORMATION</code>. Lake Formation assumes the role that you
 *       registered for the function's <code>ArtifactLocation</code>. The credentials have read-only access to that location in
 *       Amazon S3.</p>
 *          <p>To use this operation, you must have the <code>EXECUTE</code> permission on the function.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, GetTemporaryGlueFunctionCredentialsCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, GetTemporaryGlueFunctionCredentialsCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * // import type { LakeFormationClientConfig } from "@aws-sdk/client-lakeformation";
 * const config = {}; // type is LakeFormationClientConfig
 * const client = new LakeFormationClient(config);
 * const input = { // GetTemporaryGlueFunctionCredentialsRequest
 *   UserDefinedFunctionArn: "STRING_VALUE", // required
 *   AuditContext: { // AuditContext
 *     AdditionalAuditContext: "STRING_VALUE",
 *   },
 * };
 * const command = new GetTemporaryGlueFunctionCredentialsCommand(input);
 * const response = await client.send(command);
 * // { // GetTemporaryGlueFunctionCredentialsResponse
 * //   AccessKeyId: "STRING_VALUE",
 * //   SecretAccessKey: "STRING_VALUE",
 * //   SessionToken: "STRING_VALUE",
 * //   Expiration: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetTemporaryGlueFunctionCredentialsCommandInput - {@link GetTemporaryGlueFunctionCredentialsCommandInput}
 * @returns {@link GetTemporaryGlueFunctionCredentialsCommandOutput}
 * @see {@link GetTemporaryGlueFunctionCredentialsCommandInput} for command's `input` shape.
 * @see {@link GetTemporaryGlueFunctionCredentialsCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
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
export class GetTemporaryGlueFunctionCredentialsCommand extends command<GetTemporaryGlueFunctionCredentialsCommandInput, GetTemporaryGlueFunctionCredentialsCommandOutput>(
  _ep0,
  _mw0,
  "GetTemporaryGlueFunctionCredentials",
  GetTemporaryGlueFunctionCredentials$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTemporaryGlueFunctionCredentialsRequest;
      output: GetTemporaryGlueFunctionCredentialsResponse;
    };
    sdk: {
      input: GetTemporaryGlueFunctionCredentialsCommandInput;
      output: GetTemporaryGlueFunctionCredentialsCommandOutput;
    };
  };
}
