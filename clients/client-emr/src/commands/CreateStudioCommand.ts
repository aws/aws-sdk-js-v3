// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateStudioInput, CreateStudioOutput } from "../models/models_0";
import { de_CreateStudioCommand, se_CreateStudioCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateStudioCommand}.
 */
export interface CreateStudioCommandInput extends CreateStudioInput {}
/**
 * @public
 *
 * The output of {@link CreateStudioCommand}.
 */
export interface CreateStudioCommandOutput extends CreateStudioOutput, __MetadataBearer {}

/**
 * <p>Creates a new Amazon EMR Studio.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, CreateStudioCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, CreateStudioCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new EMRClient(config);
 * const input = { // CreateStudioInput
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   AuthMode: "SSO" || "IAM", // required
 *   VpcId: "STRING_VALUE", // required
 *   SubnetIds: [ // SubnetIdList // required
 *     "STRING_VALUE",
 *   ],
 *   ServiceRole: "STRING_VALUE", // required
 *   UserRole: "STRING_VALUE",
 *   WorkspaceSecurityGroupId: "STRING_VALUE", // required
 *   EngineSecurityGroupId: "STRING_VALUE", // required
 *   DefaultS3Location: "STRING_VALUE", // required
 *   IdpAuthUrl: "STRING_VALUE",
 *   IdpRelayStateParameterName: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   TrustedIdentityPropagationEnabled: true || false,
 *   IdcUserAssignment: "REQUIRED" || "OPTIONAL",
 *   IdcInstanceArn: "STRING_VALUE",
 *   EncryptionKeyArn: "STRING_VALUE",
 * };
 * const command = new CreateStudioCommand(input);
 * const response = await client.send(command);
 * // { // CreateStudioOutput
 * //   StudioId: "STRING_VALUE",
 * //   Url: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateStudioCommandInput - {@link CreateStudioCommandInput}
 * @returns {@link CreateStudioCommandOutput}
 * @see {@link CreateStudioCommandInput} for command's `input` shape.
 * @see {@link CreateStudioCommandOutput} for command's `response` shape.
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
export class CreateStudioCommand extends $Command
  .classBuilder<
    CreateStudioCommandInput,
    CreateStudioCommandOutput,
    EMRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EMRClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ElasticMapReduce", "CreateStudio", {})
  .n("EMRClient", "CreateStudioCommand")
  .f(void 0, void 0)
  .ser(se_CreateStudioCommand)
  .de(de_CreateStudioCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateStudioInput;
      output: CreateStudioOutput;
    };
    sdk: {
      input: CreateStudioCommandInput;
      output: CreateStudioCommandOutput;
    };
  };
}
