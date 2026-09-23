// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CancelImageCreationRequest, CancelImageCreationResponse } from "../models/models_0";
import { CancelImageCreation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CancelImageCreationCommand}.
 */
export interface CancelImageCreationCommandInput extends CancelImageCreationRequest {}
/**
 * @public
 *
 * The output of {@link CancelImageCreationCommand}.
 */
export interface CancelImageCreationCommandOutput extends CancelImageCreationResponse, __MetadataBearer {}

/**
 * <p>Cancels the creation of an image. This operation can only be used on
 * 			images in a non-terminal state. Cancellation is asynchronous: the request
 * 			returns immediately, then Image Builder stops the running build and moves the image
 * 			to the <code>CANCELLED</code> state. Output resources that the build already
 * 			created, such as AMIs and snapshots, aren't removed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, CancelImageCreationCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, CancelImageCreationCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * // import type { ImagebuilderClientConfig } from "@aws-sdk/client-imagebuilder";
 * const config = {}; // type is ImagebuilderClientConfig
 * const client = new ImagebuilderClient(config);
 * const input = { // CancelImageCreationRequest
 *   imageBuildVersionArn: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE", // required
 * };
 * const command = new CancelImageCreationCommand(input);
 * const response = await client.send(command);
 * // { // CancelImageCreationResponse
 * //   requestId: "STRING_VALUE",
 * //   clientToken: "STRING_VALUE",
 * //   imageBuildVersionArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CancelImageCreationCommandInput - {@link CancelImageCreationCommandInput}
 * @returns {@link CancelImageCreationCommandOutput}
 * @see {@link CancelImageCreationCommandInput} for command's `input` shape.
 * @see {@link CancelImageCreationCommandOutput} for command's `response` shape.
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
 * @example Cancel an image build
 * ```javascript
 * // The following example cancels a build that is in progress for the specified image build version.
 * const input = {
 *   clientToken: "a1b2c3d4-5678-90ab-cdef-EXAMPLE77777",
 *   imageBuildVersionArn: "arn:aws:imagebuilder:us-west-2:111122223333:image/my-example-recipe/1.0.0/1"
 * };
 * const command = new CancelImageCreationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   clientToken: "a1b2c3d4-5678-90ab-cdef-EXAMPLE77777",
 *   imageBuildVersionArn: "arn:aws:imagebuilder:us-west-2:111122223333:image/my-example-recipe/1.0.0/1",
 *   requestId: "fead325f-72d9-42b5-b2ed-c5294984c6a9"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CancelImageCreationCommand extends command<CancelImageCreationCommandInput, CancelImageCreationCommandOutput>(
  _ep0,
  _mw0,
  "CancelImageCreation",
  CancelImageCreation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelImageCreationRequest;
      output: CancelImageCreationResponse;
    };
    sdk: {
      input: CancelImageCreationCommandInput;
      output: CancelImageCreationCommandOutput;
    };
  };
}
