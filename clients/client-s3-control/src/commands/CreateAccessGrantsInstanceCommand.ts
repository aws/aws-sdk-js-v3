// smithy-typescript generated code
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getApplyMd5BodyChecksumPlugin } from "@smithy/middleware-apply-body-checksum";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateAccessGrantsInstanceRequest, CreateAccessGrantsInstanceResult } from "../models/models_0";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";
import { CreateAccessGrantsInstance } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAccessGrantsInstanceCommand}.
 */
export interface CreateAccessGrantsInstanceCommandInput extends CreateAccessGrantsInstanceRequest {}
/**
 * @public
 *
 * The output of {@link CreateAccessGrantsInstanceCommand}.
 */
export interface CreateAccessGrantsInstanceCommandOutput extends CreateAccessGrantsInstanceResult, __MetadataBearer {}

/**
 * <p>Creates an S3 Access Grants instance, which serves as a logical grouping for access grants. You can create one S3 Access Grants instance per Region per account. </p>
 *          <dl>
 *             <dt>Permissions</dt>
 *             <dd>
 *                <p>You must have the <code>s3:CreateAccessGrantsInstance</code> permission to use this operation. </p>
 *             </dd>
 *             <dt>Additional Permissions</dt>
 *             <dd>
 *                <p>To associate an IAM Identity Center instance with your S3 Access Grants instance, you must also have the <code>sso:DescribeInstance</code>, <code>sso:CreateApplication</code>, <code>sso:PutApplicationGrant</code>, and <code>sso:PutApplicationAuthenticationMethod</code> permissions. </p>
 *             </dd>
 *          </dl>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, CreateAccessGrantsInstanceCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, CreateAccessGrantsInstanceCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * // import type { S3ControlClientConfig } from "@aws-sdk/client-s3-control";
 * const config = {}; // type is S3ControlClientConfig
 * const client = new S3ControlClient(config);
 * const input = { // CreateAccessGrantsInstanceRequest
 *   AccountId: "STRING_VALUE",
 *   IdentityCenterArn: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateAccessGrantsInstanceCommand(input);
 * const response = await client.send(command);
 * // { // CreateAccessGrantsInstanceResult
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   AccessGrantsInstanceId: "STRING_VALUE",
 * //   AccessGrantsInstanceArn: "STRING_VALUE",
 * //   IdentityCenterArn: "STRING_VALUE",
 * //   IdentityCenterInstanceArn: "STRING_VALUE",
 * //   IdentityCenterApplicationArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateAccessGrantsInstanceCommandInput - {@link CreateAccessGrantsInstanceCommandInput}
 * @returns {@link CreateAccessGrantsInstanceCommandOutput}
 * @see {@link CreateAccessGrantsInstanceCommandInput} for command's `input` shape.
 * @see {@link CreateAccessGrantsInstanceCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 *
 * @public
 */
export class CreateAccessGrantsInstanceCommand extends $Command
  .classBuilder<
    CreateAccessGrantsInstanceCommandInput,
    CreateAccessGrantsInstanceCommandOutput,
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
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getProcessArnablesPlugin(config),
      getApplyMd5BodyChecksumPlugin(config),
    ];
  })
  .s("AWSS3ControlServiceV20180820", "CreateAccessGrantsInstance", {})
  .n("S3ControlClient", "CreateAccessGrantsInstanceCommand")
  .sc(CreateAccessGrantsInstance)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAccessGrantsInstanceRequest;
      output: CreateAccessGrantsInstanceResult;
    };
    sdk: {
      input: CreateAccessGrantsInstanceCommandInput;
      output: CreateAccessGrantsInstanceCommandOutput;
    };
  };
}
