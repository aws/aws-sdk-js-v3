// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteStreamingDistributionRequest } from "../models/models_0";
import { DeleteStreamingDistribution$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteStreamingDistributionCommand}.
 */
export interface DeleteStreamingDistributionCommandInput extends DeleteStreamingDistributionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteStreamingDistributionCommand}.
 */
export interface DeleteStreamingDistributionCommandOutput extends __MetadataBearer {}

/**
 * Delete a streaming distribution. To delete an RTMP distribution using the CloudFront API, perform the following steps.
 *
 * **To delete an RTMP distribution using the CloudFront API**:
 *
 * 1. Disable the RTMP distribution.
 * 2. Submit a `GET Streaming Distribution Config` request to get the current configuration and the `Etag` header for the distribution.
 * 3. Update the XML document that was returned in the response to your `GET Streaming Distribution Config` request to change the value of `Enabled` to `false`.
 * 4. Submit a `PUT Streaming Distribution Config` request to update the configuration for your distribution. In the request body, include the XML document that you updated in Step 3. Then set the value of the HTTP `If-Match` header to the value of the `ETag` header that CloudFront returned when you submitted the `GET Streaming Distribution Config` request in Step 2.
 * 5. Review the response to the `PUT Streaming Distribution Config` request to confirm that the distribution was successfully disabled.
 * 6. Submit a `GET Streaming Distribution Config` request to confirm that your changes have propagated. When propagation is complete, the value of `Status` is `Deployed`.
 * 7. Submit a `DELETE Streaming Distribution` request. Set the value of the HTTP `If-Match` header to the value of the `ETag` header that CloudFront returned when you submitted the `GET Streaming Distribution Config` request in Step 2.
 * 8. Review the response to your `DELETE Streaming Distribution` request to confirm that the distribution was successfully deleted.
 *
 * For information about deleting a distribution using the CloudFront console, see [Deleting a Distribution](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/HowToDeleteDistribution.html) in the *Amazon CloudFront Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, DeleteStreamingDistributionCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, DeleteStreamingDistributionCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // DeleteStreamingDistributionRequest
 *   Id: "STRING_VALUE", // required
 *   IfMatch: "STRING_VALUE",
 * };
 * const command = new DeleteStreamingDistributionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteStreamingDistributionCommandInput - {@link DeleteStreamingDistributionCommandInput}
 * @returns {@link DeleteStreamingDistributionCommandOutput}
 * @see {@link DeleteStreamingDistributionCommandInput} for command's `input` shape.
 * @see {@link DeleteStreamingDistributionCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *
 * Access denied.
 *
 * @throws {@link InvalidIfMatchVersion} (client fault)
 *
 * The `If-Match` version is missing or not valid.
 *
 * @throws {@link NoSuchStreamingDistribution} (client fault)
 *
 * The specified streaming distribution does not exist.
 *
 * @throws {@link PreconditionFailed} (client fault)
 *
 * The precondition in one or more of the request fields evaluated to `false`.
 *
 * @throws {@link StreamingDistributionNotDisabled} (client fault)
 *
 * The specified CloudFront distribution is not disabled. You must disable the distribution before you can delete it.
 *
 * @throws {@link CloudFrontServiceException}
 *
 * Base exception class for all service exceptions from CloudFront service.
 *
 * @public
 */
export class DeleteStreamingDistributionCommand extends command<DeleteStreamingDistributionCommandInput, DeleteStreamingDistributionCommandOutput>(
  _ep0,
  _mw0,
  "DeleteStreamingDistribution",
  DeleteStreamingDistribution$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteStreamingDistributionRequest;
      output: {};
    };
    sdk: {
      input: DeleteStreamingDistributionCommandInput;
      output: DeleteStreamingDistributionCommandOutput;
    };
  };
}
