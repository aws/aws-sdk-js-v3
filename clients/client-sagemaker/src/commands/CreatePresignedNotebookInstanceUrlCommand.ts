// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreatePresignedNotebookInstanceUrlInput, CreatePresignedNotebookInstanceUrlOutput } from "../models/models_2";
import {
  de_CreatePresignedNotebookInstanceUrlCommand,
  se_CreatePresignedNotebookInstanceUrlCommand,
} from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreatePresignedNotebookInstanceUrlCommand}.
 */
export interface CreatePresignedNotebookInstanceUrlCommandInput extends CreatePresignedNotebookInstanceUrlInput {}
/**
 * @public
 *
 * The output of {@link CreatePresignedNotebookInstanceUrlCommand}.
 */
export interface CreatePresignedNotebookInstanceUrlCommandOutput
  extends CreatePresignedNotebookInstanceUrlOutput,
    __MetadataBearer {}

/**
 * <p>Returns a URL that you can use to connect to the Jupyter server from a notebook
 *             instance. In the SageMaker AI console, when you choose <code>Open</code> next to a
 *             notebook instance, SageMaker AI opens a new tab showing the Jupyter server home
 *             page from the notebook instance. The console uses this API to get the URL and show the
 *             page.</p>
 *          <p> The IAM role or user used to call this API defines the permissions to
 *             access the notebook instance. Once the presigned URL is created, no additional
 *             permission is required to access this URL. IAM authorization policies for
 *             this API are also enforced for every HTTP request and WebSocket frame that attempts to
 *             connect to the notebook instance.</p>
 *          <p>You can restrict access to this API and to the URL that it returns to a list of IP
 *             addresses that you specify. Use the <code>NotIpAddress</code> condition operator and the
 *                 <code>aws:SourceIP</code> condition context key to specify the list of IP addresses
 *             that you want to have access to the notebook instance. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/security_iam_id-based-policy-examples.html#nbi-ip-filter">Limit Access to a Notebook Instance by IP Address</a>.</p>
 *          <note>
 *             <p>The URL that you get from a call to <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreatePresignedNotebookInstanceUrl.html">CreatePresignedNotebookInstanceUrl</a> is valid only for 5 minutes. If you
 *                 try to use the URL after the 5-minute limit expires, you are directed to the Amazon Web Services console sign-in page.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreatePresignedNotebookInstanceUrlCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreatePresignedNotebookInstanceUrlCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SageMakerClient(config);
 * const input = { // CreatePresignedNotebookInstanceUrlInput
 *   NotebookInstanceName: "STRING_VALUE", // required
 *   SessionExpirationDurationInSeconds: Number("int"),
 * };
 * const command = new CreatePresignedNotebookInstanceUrlCommand(input);
 * const response = await client.send(command);
 * // { // CreatePresignedNotebookInstanceUrlOutput
 * //   AuthorizedUrl: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreatePresignedNotebookInstanceUrlCommandInput - {@link CreatePresignedNotebookInstanceUrlCommandInput}
 * @returns {@link CreatePresignedNotebookInstanceUrlCommandOutput}
 * @see {@link CreatePresignedNotebookInstanceUrlCommandInput} for command's `input` shape.
 * @see {@link CreatePresignedNotebookInstanceUrlCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 * @public
 */
export class CreatePresignedNotebookInstanceUrlCommand extends $Command
  .classBuilder<
    CreatePresignedNotebookInstanceUrlCommandInput,
    CreatePresignedNotebookInstanceUrlCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SageMaker", "CreatePresignedNotebookInstanceUrl", {})
  .n("SageMakerClient", "CreatePresignedNotebookInstanceUrlCommand")
  .f(void 0, void 0)
  .ser(se_CreatePresignedNotebookInstanceUrlCommand)
  .de(de_CreatePresignedNotebookInstanceUrlCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePresignedNotebookInstanceUrlInput;
      output: CreatePresignedNotebookInstanceUrlOutput;
    };
    sdk: {
      input: CreatePresignedNotebookInstanceUrlCommandInput;
      output: CreatePresignedNotebookInstanceUrlCommandOutput;
    };
  };
}
