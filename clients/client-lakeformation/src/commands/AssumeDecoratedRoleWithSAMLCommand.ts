// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssumeDecoratedRoleWithSAMLRequest, AssumeDecoratedRoleWithSAMLResponse } from "../models/models_0";
import { AssumeDecoratedRoleWithSAML$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssumeDecoratedRoleWithSAMLCommand}.
 */
export interface AssumeDecoratedRoleWithSAMLCommandInput extends AssumeDecoratedRoleWithSAMLRequest {}
/**
 * @public
 *
 * The output of {@link AssumeDecoratedRoleWithSAMLCommand}.
 */
export interface AssumeDecoratedRoleWithSAMLCommandOutput extends AssumeDecoratedRoleWithSAMLResponse, __MetadataBearer {}

/**
 * Allows a caller to assume an IAM role decorated as the SAML user specified in the SAML assertion included in the request. This decoration allows Lake Formation to enforce access policies against the SAML users and groups. This API operation requires SAML federation setup in the caller’s account as it can only be called with valid SAML assertions. Lake Formation does not scope down the permission of the assumed role. All permissions attached to the role via the SAML federation setup will be included in the role session.
 *
 * This decorated role is expected to access data in Amazon S3 by getting temporary access from Lake Formation which is authorized via the virtual API `GetDataAccess`. Therefore, all SAML roles that can be assumed via `AssumeDecoratedRoleWithSAML` must at a minimum include `lakeformation:GetDataAccess` in their role policies. A typical IAM policy attached to such a role would include the following actions:
 *
 * - glue:*Database*
 * - glue:*Table*
 * - glue:*Partition*
 * - glue:*UserDefinedFunction*
 * - lakeformation:GetDataAccess
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, AssumeDecoratedRoleWithSAMLCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, AssumeDecoratedRoleWithSAMLCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * // import type { LakeFormationClientConfig } from "@aws-sdk/client-lakeformation";
 * const config = {}; // type is LakeFormationClientConfig
 * const client = new LakeFormationClient(config);
 * const input = { // AssumeDecoratedRoleWithSAMLRequest
 *   SAMLAssertion: "STRING_VALUE", // required
 *   RoleArn: "STRING_VALUE", // required
 *   PrincipalArn: "STRING_VALUE", // required
 *   DurationSeconds: Number("int"),
 * };
 * const command = new AssumeDecoratedRoleWithSAMLCommand(input);
 * const response = await client.send(command);
 * // { // AssumeDecoratedRoleWithSAMLResponse
 * //   AccessKeyId: "STRING_VALUE",
 * //   SecretAccessKey: "STRING_VALUE",
 * //   SessionToken: "STRING_VALUE",
 * //   Expiration: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param AssumeDecoratedRoleWithSAMLCommandInput - {@link AssumeDecoratedRoleWithSAMLCommandInput}
 * @returns {@link AssumeDecoratedRoleWithSAMLCommandOutput}
 * @see {@link AssumeDecoratedRoleWithSAMLCommandInput} for command's `input` shape.
 * @see {@link AssumeDecoratedRoleWithSAMLCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access to a resource was denied.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *
 * A specified entity does not exist.
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
export class AssumeDecoratedRoleWithSAMLCommand extends command<AssumeDecoratedRoleWithSAMLCommandInput, AssumeDecoratedRoleWithSAMLCommandOutput>(
  _ep0,
  _mw0,
  "AssumeDecoratedRoleWithSAML",
  AssumeDecoratedRoleWithSAML$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssumeDecoratedRoleWithSAMLRequest;
      output: AssumeDecoratedRoleWithSAMLResponse;
    };
    sdk: {
      input: AssumeDecoratedRoleWithSAMLCommandInput;
      output: AssumeDecoratedRoleWithSAMLCommandOutput;
    };
  };
}
