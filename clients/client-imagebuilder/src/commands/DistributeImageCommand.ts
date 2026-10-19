// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DistributeImageRequest, DistributeImageResponse } from "../models/models_0";
import { DistributeImage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DistributeImageCommand}.
 */
export interface DistributeImageCommandInput extends DistributeImageRequest {}
/**
 * @public
 *
 * The output of {@link DistributeImageCommand}.
 */
export interface DistributeImageCommandOutput extends DistributeImageResponse, __MetadataBearer {}

/**
 * <p>Distributes an existing AMI to target Regions and accounts without running
 * 			the full image build process. This operation only runs the distribution
 * 			phase on an image that has already been built.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, DistributeImageCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, DistributeImageCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * // import type { ImagebuilderClientConfig } from "@aws-sdk/client-imagebuilder";
 * const config = {}; // type is ImagebuilderClientConfig
 * const client = new ImagebuilderClient(config);
 * const input = { // DistributeImageRequest
 *   sourceImage: "STRING_VALUE", // required
 *   distributionConfigurationArn: "STRING_VALUE", // required
 *   executionRole: "STRING_VALUE", // required
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   clientToken: "STRING_VALUE", // required
 *   loggingConfiguration: { // ImageLoggingConfiguration
 *     logGroupName: "STRING_VALUE",
 *   },
 * };
 * const command = new DistributeImageCommand(input);
 * const response = await client.send(command);
 * // { // DistributeImageResponse
 * //   clientToken: "STRING_VALUE",
 * //   imageBuildVersionArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DistributeImageCommandInput - {@link DistributeImageCommandInput}
 * @returns {@link DistributeImageCommandOutput}
 * @see {@link DistributeImageCommandInput} for command's `input` shape.
 * @see {@link DistributeImageCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for ImagebuilderClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have permissions to perform the requested operation.</p>
 *
 * @throws {@link CallRateLimitExceededException} (client fault)
 *  <p>You have exceeded the permitted request rate for the Amazon EC2 APIs that Image Builder
 * 			calls on your behalf. Retry with an increasing or variable delay between
 * 			requests.</p>
 *
 * @throws {@link ClientException} (client fault)
 *  <p>A generic client error. This error usually indicates that the request
 * 			failed a validation check, such as when a downstream service rejects a
 * 			configured value.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>You are not authorized to perform the requested operation.</p>
 *
 * @throws {@link IdempotentParameterMismatchException} (client fault)
 *  <p>You have specified a client token for an operation using parameter values that differ
 * 			from a previous request that used the same client token.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is malformed or otherwise invalid. Verify the request and try
 * 			again.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The resource that you are trying to operate on is currently in use. Review the message
 * 			details and retry later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>At least one of the resources referenced by your request does not exist.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An internal server error occurred while Image Builder processed the request.
 * 			Retrying the request may succeed.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have exceeded the number of permitted resources or operations for this service.
 * 			For service quotas, see <a href="https://docs.aws.amazon.com/general/latest/gr/imagebuilder.html#limits_imagebuilder">EC2 Image Builder endpoints and
 * 				quotas</a>.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is unable to process your request at this time.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>You have attempted too many requests for the specific operation.</p>
 *
 * @throws {@link ImagebuilderServiceException}
 * <p>Base exception class for all service exceptions from Imagebuilder service.</p>
 *
 *
 * @example Distribute an existing AMI
 * ```javascript
 * // The following example distributes an AMI that you own to the targets defined in the specified distribution configuration. It returns the ARN of a new Image Builder image resource that you can use with GetImage to monitor distribution progress.
 * const input = {
 *   clientToken: "a1b2c3d4-5678-90ab-cdef-EXAMPLE86420",
 *   distributionConfigurationArn: "arn:aws:imagebuilder:us-west-2:111122223333:distribution-configuration/my-example-distribution-configuration",
 *   executionRole: "arn:aws:iam::111122223333:role/aws-service-role/imagebuilder.amazonaws.com/AWSServiceRoleForImageBuilder",
 *   sourceImage: "ami-1234567890abcdef0"
 * };
 * const command = new DistributeImageCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   clientToken: "a1b2c3d4-5678-90ab-cdef-EXAMPLE86420",
 *   imageBuildVersionArn: "arn:aws:imagebuilder:us-west-2:111122223333:image/my-example-source-ami/1.0.0/1"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DistributeImageCommand extends command<DistributeImageCommandInput, DistributeImageCommandOutput>(
  _ep0,
  _mw0,
  "DistributeImage",
  DistributeImage$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DistributeImageRequest;
      output: DistributeImageResponse;
    };
    sdk: {
      input: DistributeImageCommandInput;
      output: DistributeImageCommandOutput;
    };
  };
}
