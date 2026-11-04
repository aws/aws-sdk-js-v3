// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetDataAccessRequest, GetDataAccessResult } from "../models/models_0";
import { GetDataAccess$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetDataAccessCommand}.
 */
export interface GetDataAccessCommandInput extends GetDataAccessRequest {}
/**
 * @public
 *
 * The output of {@link GetDataAccessCommand}.
 */
export interface GetDataAccessCommandOutput extends GetDataAccessResult, __MetadataBearer {}

/**
 * Returns a temporary access credential from S3 Access Grants to the grantee or client application. The [temporary credential](https://docs.aws.amazon.com/STS/latest/APIReference/API_Credentials.html) is an Amazon Web Services STS token that grants them access to the S3 data.
 *
 * - **Permissions**
 *
 *   You must have the `s3:GetDataAccess` permission to use this operation.
 *
 * - **Additional Permissions**
 *
 *   The IAM role that S3 Access Grants assumes must have the following permissions specified in the trust policy when registering the location: `sts:AssumeRole`, for directory users or groups `sts:SetContext`, and for IAM users or roles `sts:SetSourceIdentity`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, GetDataAccessCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, GetDataAccessCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * // import type { S3ControlClientConfig } from "@aws-sdk/client-s3-control";
 * const config = {}; // type is S3ControlClientConfig
 * const client = new S3ControlClient(config);
 * const input = { // GetDataAccessRequest
 *   AccountId: "STRING_VALUE",
 *   Target: "STRING_VALUE", // required
 *   Permission: "READ" || "WRITE" || "READWRITE", // required
 *   DurationSeconds: Number("int"),
 *   Privilege: "Minimal" || "Default",
 *   TargetType: "Object",
 *   AuditContext: "STRING_VALUE",
 * };
 * const command = new GetDataAccessCommand(input);
 * const response = await client.send(command);
 * // { // GetDataAccessResult
 * //   Credentials: { // Credentials
 * //     AccessKeyId: "STRING_VALUE",
 * //     SecretAccessKey: "STRING_VALUE",
 * //     SessionToken: "STRING_VALUE",
 * //     Expiration: new Date("TIMESTAMP"),
 * //   },
 * //   MatchedGrantTarget: "STRING_VALUE",
 * //   Grantee: { // Grantee
 * //     GranteeType: "DIRECTORY_USER" || "DIRECTORY_GROUP" || "IAM",
 * //     GranteeIdentifier: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDataAccessCommandInput - {@link GetDataAccessCommandInput}
 * @returns {@link GetDataAccessCommandOutput}
 * @see {@link GetDataAccessCommandInput} for command's `input` shape.
 * @see {@link GetDataAccessCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 *
 * Base exception class for all service exceptions from S3Control service.
 *
 * @public
 */
export class GetDataAccessCommand extends command<GetDataAccessCommandInput, GetDataAccessCommandOutput>(
  _ep0,
  _mw0,
  "GetDataAccess",
  GetDataAccess$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDataAccessRequest;
      output: GetDataAccessResult;
    };
    sdk: {
      input: GetDataAccessCommandInput;
      output: GetDataAccessCommandOutput;
    };
  };
}
