// smithy-typescript generated code
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getApplyMd5BodyChecksumPlugin } from "@smithy/middleware-apply-body-checksum";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateAccessGrantRequest, CreateAccessGrantResult } from "../models/models_0";
import { de_CreateAccessGrantCommand, se_CreateAccessGrantCommand } from "../protocols/Aws_restXml";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAccessGrantCommand}.
 */
export interface CreateAccessGrantCommandInput extends CreateAccessGrantRequest {}
/**
 * @public
 *
 * The output of {@link CreateAccessGrantCommand}.
 */
export interface CreateAccessGrantCommandOutput extends CreateAccessGrantResult, __MetadataBearer {}

/**
 * <p>Creates an access grant that gives a grantee access to your S3 data. The grantee can be an IAM user or role or a directory user, or group. Before you can create a grant, you must have an S3 Access Grants instance in the same Region as the S3 data. You can create an S3 Access Grants instance using the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateAccessGrantsInstance.html">CreateAccessGrantsInstance</a>. You must also have registered at least one S3 data location in your S3 Access Grants instance using <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateAccessGrantsLocation.html">CreateAccessGrantsLocation</a>.  </p>
 *          <dl>
 *             <dt>Permissions</dt>
 *             <dd>
 *                <p>You must have the <code>s3:CreateAccessGrant</code> permission to use this operation. </p>
 *             </dd>
 *             <dt>Additional Permissions</dt>
 *             <dd>
 *                <p>For any directory identity - <code>sso:DescribeInstance</code> and <code>sso:DescribeApplication</code>
 *                </p>
 *                <p>For directory users - <code>identitystore:DescribeUser</code>
 *                </p>
 *                <p>For directory groups - <code>identitystore:DescribeGroup</code>
 *                </p>
 *             </dd>
 *          </dl>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, CreateAccessGrantCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, CreateAccessGrantCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const input = { // CreateAccessGrantRequest
 *   AccountId: "STRING_VALUE",
 *   AccessGrantsLocationId: "STRING_VALUE", // required
 *   AccessGrantsLocationConfiguration: { // AccessGrantsLocationConfiguration
 *     S3SubPrefix: "STRING_VALUE",
 *   },
 *   Grantee: { // Grantee
 *     GranteeType: "DIRECTORY_USER" || "DIRECTORY_GROUP" || "IAM",
 *     GranteeIdentifier: "STRING_VALUE",
 *   },
 *   Permission: "READ" || "WRITE" || "READWRITE", // required
 *   ApplicationArn: "STRING_VALUE",
 *   S3PrefixType: "Object",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateAccessGrantCommand(input);
 * const response = await client.send(command);
 * // { // CreateAccessGrantResult
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   AccessGrantId: "STRING_VALUE",
 * //   AccessGrantArn: "STRING_VALUE",
 * //   Grantee: { // Grantee
 * //     GranteeType: "DIRECTORY_USER" || "DIRECTORY_GROUP" || "IAM",
 * //     GranteeIdentifier: "STRING_VALUE",
 * //   },
 * //   AccessGrantsLocationId: "STRING_VALUE",
 * //   AccessGrantsLocationConfiguration: { // AccessGrantsLocationConfiguration
 * //     S3SubPrefix: "STRING_VALUE",
 * //   },
 * //   Permission: "READ" || "WRITE" || "READWRITE",
 * //   ApplicationArn: "STRING_VALUE",
 * //   GrantScope: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateAccessGrantCommandInput - {@link CreateAccessGrantCommandInput}
 * @returns {@link CreateAccessGrantCommandOutput}
 * @see {@link CreateAccessGrantCommandInput} for command's `input` shape.
 * @see {@link CreateAccessGrantCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 *
 * @public
 */
export class CreateAccessGrantCommand extends $Command
  .classBuilder<
    CreateAccessGrantCommandInput,
    CreateAccessGrantCommandOutput,
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
  .s("AWSS3ControlServiceV20180820", "CreateAccessGrant", {})
  .n("S3ControlClient", "CreateAccessGrantCommand")
  .f(void 0, void 0)
  .ser(se_CreateAccessGrantCommand)
  .de(de_CreateAccessGrantCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAccessGrantRequest;
      output: CreateAccessGrantResult;
    };
    sdk: {
      input: CreateAccessGrantCommandInput;
      output: CreateAccessGrantCommandOutput;
    };
  };
}
