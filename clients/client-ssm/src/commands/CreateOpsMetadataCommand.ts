// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateOpsMetadataRequest, CreateOpsMetadataResult } from "../models/models_0";
import { de_CreateOpsMetadataCommand, se_CreateOpsMetadataCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateOpsMetadataCommand}.
 */
export interface CreateOpsMetadataCommandInput extends CreateOpsMetadataRequest {}
/**
 * @public
 *
 * The output of {@link CreateOpsMetadataCommand}.
 */
export interface CreateOpsMetadataCommandOutput extends CreateOpsMetadataResult, __MetadataBearer {}

/**
 * <p>If you create a new application in Application Manager, Amazon Web Services Systems Manager calls this API operation to specify
 *    information about the new application, including the application type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, CreateOpsMetadataCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, CreateOpsMetadataCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SSMClient(config);
 * const input = { // CreateOpsMetadataRequest
 *   ResourceId: "STRING_VALUE", // required
 *   Metadata: { // MetadataMap
 *     "<keys>": { // MetadataValue
 *       Value: "STRING_VALUE",
 *     },
 *   },
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateOpsMetadataCommand(input);
 * const response = await client.send(command);
 * // { // CreateOpsMetadataResult
 * //   OpsMetadataArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateOpsMetadataCommandInput - {@link CreateOpsMetadataCommandInput}
 * @returns {@link CreateOpsMetadataCommandOutput}
 * @see {@link CreateOpsMetadataCommandInput} for command's `input` shape.
 * @see {@link CreateOpsMetadataCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link OpsMetadataAlreadyExistsException} (client fault)
 *  <p>An OpsMetadata object already exists for the selected resource.</p>
 *
 * @throws {@link OpsMetadataInvalidArgumentException} (client fault)
 *  <p>One of the arguments passed is invalid. </p>
 *
 * @throws {@link OpsMetadataLimitExceededException} (client fault)
 *  <p>Your account reached the maximum number of OpsMetadata objects allowed by Application Manager. The
 *    maximum is 200 OpsMetadata objects. Delete one or more OpsMetadata object and try again.</p>
 *
 * @throws {@link OpsMetadataTooManyUpdatesException} (client fault)
 *  <p>The system is processing too many concurrent updates. Wait a few moments and try
 *    again.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 * @public
 */
export class CreateOpsMetadataCommand extends $Command
  .classBuilder<
    CreateOpsMetadataCommandInput,
    CreateOpsMetadataCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonSSM", "CreateOpsMetadata", {})
  .n("SSMClient", "CreateOpsMetadataCommand")
  .f(void 0, void 0)
  .ser(se_CreateOpsMetadataCommand)
  .de(de_CreateOpsMetadataCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateOpsMetadataRequest;
      output: CreateOpsMetadataResult;
    };
    sdk: {
      input: CreateOpsMetadataCommandInput;
      output: CreateOpsMetadataCommandOutput;
    };
  };
}
