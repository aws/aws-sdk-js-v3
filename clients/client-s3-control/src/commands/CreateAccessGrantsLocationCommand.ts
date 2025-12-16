// smithy-typescript generated code
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getApplyMd5BodyChecksumPlugin } from "@smithy/middleware-apply-body-checksum";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateAccessGrantsLocationRequest, CreateAccessGrantsLocationResult } from "../models/models_0";
import type { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";
import { CreateAccessGrantsLocation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAccessGrantsLocationCommand}.
 */
export interface CreateAccessGrantsLocationCommandInput extends CreateAccessGrantsLocationRequest {}
/**
 * @public
 *
 * The output of {@link CreateAccessGrantsLocationCommand}.
 */
export interface CreateAccessGrantsLocationCommandOutput extends CreateAccessGrantsLocationResult, __MetadataBearer {}

/**
 * <p>The S3 data location that you would like to register in your S3 Access Grants instance. Your S3 data must be in the same Region as your S3 Access Grants instance. The location can be one of the following: </p>
 *          <ul>
 *             <li>
 *                <p>The default S3 location <code>s3://</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>A bucket - <code>S3://<bucket-name></code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>A bucket and prefix - <code>S3://<bucket-name>/<prefix></code>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>When you register a location, you must include the IAM role that has permission to manage the S3 location that you are registering. Give S3 Access Grants permission to assume this role <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-grants-location.html">using a policy</a>. S3 Access Grants assumes this role to manage access to the location and to vend temporary credentials to grantees or client applications. </p>
 *          <dl>
 *             <dt>Permissions</dt>
 *             <dd>
 *                <p>You must have the <code>s3:CreateAccessGrantsLocation</code> permission to use this operation. </p>
 *             </dd>
 *             <dt>Additional Permissions</dt>
 *             <dd>
 *                <p>You must also have the following permission for the specified IAM role: <code>iam:PassRole</code>
 *                </p>
 *             </dd>
 *          </dl>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, CreateAccessGrantsLocationCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, CreateAccessGrantsLocationCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * // import type { S3ControlClientConfig } from "@aws-sdk/client-s3-control";
 * const config = {}; // type is S3ControlClientConfig
 * const client = new S3ControlClient(config);
 * const input = { // CreateAccessGrantsLocationRequest
 *   AccountId: "STRING_VALUE",
 *   LocationScope: "STRING_VALUE", // required
 *   IAMRoleArn: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateAccessGrantsLocationCommand(input);
 * const response = await client.send(command);
 * // { // CreateAccessGrantsLocationResult
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   AccessGrantsLocationId: "STRING_VALUE",
 * //   AccessGrantsLocationArn: "STRING_VALUE",
 * //   LocationScope: "STRING_VALUE",
 * //   IAMRoleArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateAccessGrantsLocationCommandInput - {@link CreateAccessGrantsLocationCommandInput}
 * @returns {@link CreateAccessGrantsLocationCommandOutput}
 * @see {@link CreateAccessGrantsLocationCommandInput} for command's `input` shape.
 * @see {@link CreateAccessGrantsLocationCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 *
 * @public
 */
export class CreateAccessGrantsLocationCommand extends $Command
  .classBuilder<
    CreateAccessGrantsLocationCommandInput,
    CreateAccessGrantsLocationCommandOutput,
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
  .s("AWSS3ControlServiceV20180820", "CreateAccessGrantsLocation", {})
  .n("S3ControlClient", "CreateAccessGrantsLocationCommand")
  .sc(CreateAccessGrantsLocation$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAccessGrantsLocationRequest;
      output: CreateAccessGrantsLocationResult;
    };
    sdk: {
      input: CreateAccessGrantsLocationCommandInput;
      output: CreateAccessGrantsLocationCommandOutput;
    };
  };
}
