// smithy-typescript generated code
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getApplyMd5BodyChecksumPlugin } from "@smithy/middleware-apply-body-checksum";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetAccessGrantsLocationRequest, GetAccessGrantsLocationResult } from "../models/models_0";
import { de_GetAccessGrantsLocationCommand, se_GetAccessGrantsLocationCommand } from "../protocols/Aws_restXml";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAccessGrantsLocationCommand}.
 */
export interface GetAccessGrantsLocationCommandInput extends GetAccessGrantsLocationRequest {}
/**
 * @public
 *
 * The output of {@link GetAccessGrantsLocationCommand}.
 */
export interface GetAccessGrantsLocationCommandOutput extends GetAccessGrantsLocationResult, __MetadataBearer {}

/**
 * <p>Retrieves the details of a particular location registered in your S3 Access Grants instance. </p>
 *          <dl>
 *             <dt>Permissions</dt>
 *             <dd>
 *                <p>You must have the <code>s3:GetAccessGrantsLocation</code> permission to use this operation. </p>
 *             </dd>
 *          </dl>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, GetAccessGrantsLocationCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, GetAccessGrantsLocationCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const input = { // GetAccessGrantsLocationRequest
 *   AccountId: "STRING_VALUE",
 *   AccessGrantsLocationId: "STRING_VALUE", // required
 * };
 * const command = new GetAccessGrantsLocationCommand(input);
 * const response = await client.send(command);
 * // { // GetAccessGrantsLocationResult
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   AccessGrantsLocationId: "STRING_VALUE",
 * //   AccessGrantsLocationArn: "STRING_VALUE",
 * //   LocationScope: "STRING_VALUE",
 * //   IAMRoleArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetAccessGrantsLocationCommandInput - {@link GetAccessGrantsLocationCommandInput}
 * @returns {@link GetAccessGrantsLocationCommandOutput}
 * @see {@link GetAccessGrantsLocationCommandInput} for command's `input` shape.
 * @see {@link GetAccessGrantsLocationCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 *
 * @public
 */
export class GetAccessGrantsLocationCommand extends $Command
  .classBuilder<
    GetAccessGrantsLocationCommandInput,
    GetAccessGrantsLocationCommandOutput,
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
  .s("AWSS3ControlServiceV20180820", "GetAccessGrantsLocation", {})
  .n("S3ControlClient", "GetAccessGrantsLocationCommand")
  .f(void 0, void 0)
  .ser(se_GetAccessGrantsLocationCommand)
  .de(de_GetAccessGrantsLocationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAccessGrantsLocationRequest;
      output: GetAccessGrantsLocationResult;
    };
    sdk: {
      input: GetAccessGrantsLocationCommandInput;
      output: GetAccessGrantsLocationCommandOutput;
    };
  };
}
