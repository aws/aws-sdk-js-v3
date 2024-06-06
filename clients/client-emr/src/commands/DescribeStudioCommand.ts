// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeStudioInput, DescribeStudioOutput } from "../models/models_0";
import { de_DescribeStudioCommand, se_DescribeStudioCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeStudioCommand}.
 */
export interface DescribeStudioCommandInput extends DescribeStudioInput {}
/**
 * @public
 *
 * The output of {@link DescribeStudioCommand}.
 */
export interface DescribeStudioCommandOutput extends DescribeStudioOutput, __MetadataBearer {}

/**
 * <p>Returns details for the specified Amazon EMR Studio including ID, Name, VPC,
 *          Studio access URL, and so on.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, DescribeStudioCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, DescribeStudioCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const input = { // DescribeStudioInput
 *   StudioId: "STRING_VALUE", // required
 * };
 * const command = new DescribeStudioCommand(input);
 * const response = await client.send(command);
 * // { // DescribeStudioOutput
 * //   Studio: { // Studio
 * //     StudioId: "STRING_VALUE",
 * //     StudioArn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     AuthMode: "SSO" || "IAM",
 * //     VpcId: "STRING_VALUE",
 * //     SubnetIds: [ // SubnetIdList
 * //       "STRING_VALUE",
 * //     ],
 * //     ServiceRole: "STRING_VALUE",
 * //     UserRole: "STRING_VALUE",
 * //     WorkspaceSecurityGroupId: "STRING_VALUE",
 * //     EngineSecurityGroupId: "STRING_VALUE",
 * //     Url: "STRING_VALUE",
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     DefaultS3Location: "STRING_VALUE",
 * //     IdpAuthUrl: "STRING_VALUE",
 * //     IdpRelayStateParameterName: "STRING_VALUE",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     IdcInstanceArn: "STRING_VALUE",
 * //     TrustedIdentityPropagationEnabled: true || false,
 * //     IdcUserAssignment: "REQUIRED" || "OPTIONAL",
 * //     EncryptionKeyArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeStudioCommandInput - {@link DescribeStudioCommandInput}
 * @returns {@link DescribeStudioCommandOutput}
 * @see {@link DescribeStudioCommandInput} for command's `input` shape.
 * @see {@link DescribeStudioCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Amazon EMR
 *          service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception occurs when there is something wrong with user input.</p>
 *
 * @throws {@link EMRServiceException}
 * <p>Base exception class for all service exceptions from EMR service.</p>
 *
 * @public
 */
export class DescribeStudioCommand extends $Command
  .classBuilder<
    DescribeStudioCommandInput,
    DescribeStudioCommandOutput,
    EMRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: EMRClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ElasticMapReduce", "DescribeStudio", {})
  .n("EMRClient", "DescribeStudioCommand")
  .f(void 0, void 0)
  .ser(se_DescribeStudioCommand)
  .de(de_DescribeStudioCommand)
  .build() {}
