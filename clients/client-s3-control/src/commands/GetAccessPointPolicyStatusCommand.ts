// smithy-typescript generated code
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetAccessPointPolicyStatusRequest, GetAccessPointPolicyStatusResult } from "../models/models_0";
import { de_GetAccessPointPolicyStatusCommand, se_GetAccessPointPolicyStatusCommand } from "../protocols/Aws_restXml";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAccessPointPolicyStatusCommand}.
 */
export interface GetAccessPointPolicyStatusCommandInput extends GetAccessPointPolicyStatusRequest {}
/**
 * @public
 *
 * The output of {@link GetAccessPointPolicyStatusCommand}.
 */
export interface GetAccessPointPolicyStatusCommandOutput extends GetAccessPointPolicyStatusResult, __MetadataBearer {}

/**
 * <note>
 *             <p>This operation is not supported by directory buckets.</p>
 *          </note>
 *          <p>Indicates whether the specified access point currently has a policy that allows public access.
 *          For more information about public access through access points, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points.html">Managing Data Access with Amazon S3
 *             access points</a> in the <i>Amazon S3 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, GetAccessPointPolicyStatusCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, GetAccessPointPolicyStatusCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const input = { // GetAccessPointPolicyStatusRequest
 *   AccountId: "STRING_VALUE",
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new GetAccessPointPolicyStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetAccessPointPolicyStatusResult
 * //   PolicyStatus: { // PolicyStatus
 * //     IsPublic: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAccessPointPolicyStatusCommandInput - {@link GetAccessPointPolicyStatusCommandInput}
 * @returns {@link GetAccessPointPolicyStatusCommandOutput}
 * @see {@link GetAccessPointPolicyStatusCommandInput} for command's `input` shape.
 * @see {@link GetAccessPointPolicyStatusCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 * @public
 */
export class GetAccessPointPolicyStatusCommand extends $Command
  .classBuilder<
    GetAccessPointPolicyStatusCommandInput,
    GetAccessPointPolicyStatusCommandOutput,
    S3ControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    RequiresAccountId: { type: "staticContextParams", value: true },
    AccessPointName: { type: "contextParams", name: "AccessPointName" },
    AccountId: { type: "contextParams", name: "AccountId" },
  })
  .m(function (this: any, Command: any, cs: any, config: S3ControlClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getProcessArnablesPlugin(config),
    ];
  })
  .s("AWSS3ControlServiceV20180820", "GetAccessPointPolicyStatus", {})
  .n("S3ControlClient", "GetAccessPointPolicyStatusCommand")
  .f(void 0, void 0)
  .ser(se_GetAccessPointPolicyStatusCommand)
  .de(de_GetAccessPointPolicyStatusCommand)
  .build() {}
