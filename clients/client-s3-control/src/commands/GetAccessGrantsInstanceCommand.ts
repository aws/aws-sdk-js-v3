// smithy-typescript generated code
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getApplyMd5BodyChecksumPlugin } from "@smithy/middleware-apply-body-checksum";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetAccessGrantsInstanceRequest, GetAccessGrantsInstanceResult } from "../models/models_0";
import { de_GetAccessGrantsInstanceCommand, se_GetAccessGrantsInstanceCommand } from "../protocols/Aws_restXml";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAccessGrantsInstanceCommand}.
 */
export interface GetAccessGrantsInstanceCommandInput extends GetAccessGrantsInstanceRequest {}
/**
 * @public
 *
 * The output of {@link GetAccessGrantsInstanceCommand}.
 */
export interface GetAccessGrantsInstanceCommandOutput extends GetAccessGrantsInstanceResult, __MetadataBearer {}

/**
 * <p>Retrieves the S3 Access Grants instance for a Region in your account. </p>
 *          <dl>
 *             <dt>Permissions</dt>
 *             <dd>
 *                <p>You must have the <code>s3:GetAccessGrantsInstance</code> permission to use this operation. </p>
 *             </dd>
 *          </dl>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, GetAccessGrantsInstanceCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, GetAccessGrantsInstanceCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const input = { // GetAccessGrantsInstanceRequest
 *   AccountId: "STRING_VALUE",
 * };
 * const command = new GetAccessGrantsInstanceCommand(input);
 * const response = await client.send(command);
 * // { // GetAccessGrantsInstanceResult
 * //   AccessGrantsInstanceArn: "STRING_VALUE",
 * //   AccessGrantsInstanceId: "STRING_VALUE",
 * //   IdentityCenterArn: "STRING_VALUE",
 * //   CreatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetAccessGrantsInstanceCommandInput - {@link GetAccessGrantsInstanceCommandInput}
 * @returns {@link GetAccessGrantsInstanceCommandOutput}
 * @see {@link GetAccessGrantsInstanceCommandInput} for command's `input` shape.
 * @see {@link GetAccessGrantsInstanceCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 * @public
 */
export class GetAccessGrantsInstanceCommand extends $Command
  .classBuilder<
    GetAccessGrantsInstanceCommandInput,
    GetAccessGrantsInstanceCommandOutput,
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
  .s("AWSS3ControlServiceV20180820", "GetAccessGrantsInstance", {})
  .n("S3ControlClient", "GetAccessGrantsInstanceCommand")
  .f(void 0, void 0)
  .ser(se_GetAccessGrantsInstanceCommand)
  .de(de_GetAccessGrantsInstanceCommand)
  .build() {}
