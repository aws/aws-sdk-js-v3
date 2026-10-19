// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RetryImageRequest, RetryImageResponse } from "../models/models_0";
import { RetryImage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RetryImageCommand}.
 */
export interface RetryImageCommandInput extends RetryImageRequest {}
/**
 * @public
 *
 * The output of {@link RetryImageCommand}.
 */
export interface RetryImageCommandOutput extends RetryImageResponse, __MetadataBearer {}

/**
 * <p>Retries a failed or canceled image build without rebuilding the phases
 * 			that already completed. The image re-runs asynchronously in place: the same
 * 			build version returns to the test or distribution phase where it failed and
 * 			continues from there. No new image build version is created. Retry is only
 * 			supported for AMI-based images.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, RetryImageCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, RetryImageCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * // import type { ImagebuilderClientConfig } from "@aws-sdk/client-imagebuilder";
 * const config = {}; // type is ImagebuilderClientConfig
 * const client = new ImagebuilderClient(config);
 * const input = { // RetryImageRequest
 *   imageBuildVersionArn: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE", // required
 * };
 * const command = new RetryImageCommand(input);
 * const response = await client.send(command);
 * // { // RetryImageResponse
 * //   clientToken: "STRING_VALUE",
 * //   imageBuildVersionArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RetryImageCommandInput - {@link RetryImageCommandInput}
 * @returns {@link RetryImageCommandOutput}
 * @see {@link RetryImageCommandInput} for command's `input` shape.
 * @see {@link RetryImageCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for ImagebuilderClient's `config` shape.
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
 * @throws {@link ServiceException} (server fault)
 *  <p>An internal server error occurred while Image Builder processed the request.
 * 			Retrying the request may succeed.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is unable to process your request at this time.</p>
 *
 * @throws {@link ImagebuilderServiceException}
 * <p>Base exception class for all service exceptions from Imagebuilder service.</p>
 *
 *
 * @example Retry an image build
 * ```javascript
 * // The following example retries a cancelled image build, which resumes in place from the phase where it stopped.
 * const input = {
 *   clientToken: "a1b2c3d4-5678-90ab-cdef-EXAMPLEfffff",
 *   imageBuildVersionArn: "arn:aws:imagebuilder:us-west-2:111122223333:image/my-example-recipe/1.0.0/1"
 * };
 * const command = new RetryImageCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   clientToken: "a1b2c3d4-5678-90ab-cdef-EXAMPLEfffff",
 *   imageBuildVersionArn: "arn:aws:imagebuilder:us-west-2:111122223333:image/my-example-recipe/1.0.0/1"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class RetryImageCommand extends command<RetryImageCommandInput, RetryImageCommandOutput>(
  _ep0,
  _mw0,
  "RetryImage",
  RetryImage$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RetryImageRequest;
      output: RetryImageResponse;
    };
    sdk: {
      input: RetryImageCommandInput;
      output: RetryImageCommandOutput;
    };
  };
}
