// smithy-typescript generated code
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getApplyMd5BodyChecksumPlugin } from "@smithy/middleware-apply-body-checksum";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetDataAccessRequest, GetDataAccessResult, GetDataAccessResultFilterSensitiveLog } from "../models/models_0";
import { de_GetDataAccessCommand, se_GetDataAccessCommand } from "../protocols/Aws_restXml";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Returns a temporary access credential from S3 Access Grants to the grantee or client application. The <a href="https://docs.aws.amazon.com/STS/latest/APIReference/API_Credentials.html">temporary credential</a> is an Amazon Web Services STS token that grants them access to the S3 data. </p>
 *          <dl>
 *             <dt>Permissions</dt>
 *             <dd>
 *                <p>You must have the <code>s3:GetDataAccess</code> permission to use this operation. </p>
 *             </dd>
 *             <dt>Additional Permissions</dt>
 *             <dd>
 *                <p>The IAM role that S3 Access Grants assumes must have the following permissions specified in the trust policy when registering the location: <code>sts:AssumeRole</code>, for directory users or groups <code>sts:SetContext</code>, and for IAM users or roles <code>sts:SetSourceIdentity</code>. </p>
 *             </dd>
 *          </dl>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, GetDataAccessCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, GetDataAccessCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const input = { // GetDataAccessRequest
 *   AccountId: "STRING_VALUE",
 *   Target: "STRING_VALUE", // required
 *   Permission: "READ" || "WRITE" || "READWRITE", // required
 *   DurationSeconds: Number("int"),
 *   Privilege: "Minimal" || "Default",
 *   TargetType: "Object",
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
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 * @public
 */
export class GetDataAccessCommand extends $Command
  .classBuilder<
    GetDataAccessCommandInput,
    GetDataAccessCommandOutput,
    S3ControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    RequiresAccountId: { type: "staticContextParams", value: true },
    AccountId: { type: "contextParams", name: "AccountId" },
  })
  .m(function (this: any, Command: any, cs: any, config: S3ControlClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getProcessArnablesPlugin(config),
      getApplyMd5BodyChecksumPlugin(config),
    ];
  })
  .s("AWSS3ControlServiceV20180820", "GetDataAccess", {})
  .n("S3ControlClient", "GetDataAccessCommand")
  .f(void 0, GetDataAccessResultFilterSensitiveLog)
  .ser(se_GetDataAccessCommand)
  .de(de_GetDataAccessCommand)
  .build() {}
