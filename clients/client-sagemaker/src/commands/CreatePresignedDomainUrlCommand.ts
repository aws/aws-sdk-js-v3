// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreatePresignedDomainUrlRequest, CreatePresignedDomainUrlResponse } from "../models/models_1";
import { de_CreatePresignedDomainUrlCommand, se_CreatePresignedDomainUrlCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreatePresignedDomainUrlCommand}.
 */
export interface CreatePresignedDomainUrlCommandInput extends CreatePresignedDomainUrlRequest {}
/**
 * @public
 *
 * The output of {@link CreatePresignedDomainUrlCommand}.
 */
export interface CreatePresignedDomainUrlCommandOutput extends CreatePresignedDomainUrlResponse, __MetadataBearer {}

/**
 * <p>Creates a URL for a specified UserProfile in a Domain.  When accessed in a web browser,
 *        the user will be automatically signed in to the domain, and granted access to all of
 *        the Apps and files associated with the Domain's Amazon Elastic File System volume.
 *        This operation can only be called when the authentication mode equals IAM.
 *    </p>
 *          <p>The IAM role or user passed to this API defines the permissions to access the app. Once
 *       the presigned URL is created, no additional permission is required to access this URL. IAM
 *          authorization policies for this API are also enforced for every HTTP request and WebSocket
 *          frame that attempts to connect to the app.</p>
 *          <p>You can restrict access to this API and to the
 *       URL that it returns to a list of IP addresses, Amazon VPCs or Amazon VPC Endpoints that you specify. For more
 *       information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/studio-interface-endpoint.html">Connect to Amazon SageMaker Studio Through an Interface VPC Endpoint</a>
 *          .</p>
 *          <note>
 *             <p>The URL that you get from a call to <code>CreatePresignedDomainUrl</code> has a default timeout of 5 minutes. You can configure this value using <code>ExpiresInSeconds</code>. If you try to use the URL after the timeout limit expires, you
 *           are directed to the Amazon Web Services console sign-in page.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreatePresignedDomainUrlCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreatePresignedDomainUrlCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // CreatePresignedDomainUrlRequest
 *   DomainId: "STRING_VALUE", // required
 *   UserProfileName: "STRING_VALUE", // required
 *   SessionExpirationDurationInSeconds: Number("int"),
 *   ExpiresInSeconds: Number("int"),
 *   SpaceName: "STRING_VALUE",
 *   LandingUri: "STRING_VALUE",
 * };
 * const command = new CreatePresignedDomainUrlCommand(input);
 * const response = await client.send(command);
 * // { // CreatePresignedDomainUrlResponse
 * //   AuthorizedUrl: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreatePresignedDomainUrlCommandInput - {@link CreatePresignedDomainUrlCommandInput}
 * @returns {@link CreatePresignedDomainUrlCommandOutput}
 * @see {@link CreatePresignedDomainUrlCommandInput} for command's `input` shape.
 * @see {@link CreatePresignedDomainUrlCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 * @public
 */
export class CreatePresignedDomainUrlCommand extends $Command
  .classBuilder<
    CreatePresignedDomainUrlCommandInput,
    CreatePresignedDomainUrlCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SageMaker", "CreatePresignedDomainUrl", {})
  .n("SageMakerClient", "CreatePresignedDomainUrlCommand")
  .f(void 0, void 0)
  .ser(se_CreatePresignedDomainUrlCommand)
  .de(de_CreatePresignedDomainUrlCommand)
  .build() {}
