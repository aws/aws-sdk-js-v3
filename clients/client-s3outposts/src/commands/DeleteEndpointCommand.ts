// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteEndpointRequest } from "../models/models_0";
import { DeleteEndpoint$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteEndpointCommand}.
 */
export interface DeleteEndpointCommandInput extends DeleteEndpointRequest {}
/**
 * @public
 *
 * The output of {@link DeleteEndpointCommand}.
 */
export interface DeleteEndpointCommandOutput extends __MetadataBearer {}

/**
 * Deletes an endpoint.
 *
 * > **Note:** It can take up to 5 minutes for this action to finish.
 *
 * Related actions include:
 *
 * - [CreateEndpoint](https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3outposts_CreateEndpoint.html)
 * - [ListEndpoints](https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3outposts_ListEndpoints.html)
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3OutpostsClient, DeleteEndpointCommand } from "@aws-sdk/client-s3outposts"; // ES Modules import
 * // const { S3OutpostsClient, DeleteEndpointCommand } = require("@aws-sdk/client-s3outposts"); // CommonJS import
 * // import type { S3OutpostsClientConfig } from "@aws-sdk/client-s3outposts";
 * const config = {}; // type is S3OutpostsClientConfig
 * const client = new S3OutpostsClient(config);
 * const input = { // DeleteEndpointRequest
 *   EndpointId: "STRING_VALUE", // required
 *   OutpostId: "STRING_VALUE", // required
 * };
 * const command = new DeleteEndpointCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteEndpointCommandInput - {@link DeleteEndpointCommandInput}
 * @returns {@link DeleteEndpointCommandOutput}
 * @see {@link DeleteEndpointCommandInput} for command's `input` shape.
 * @see {@link DeleteEndpointCommandOutput} for command's `response` shape.
 * @see {@link S3OutpostsClientResolvedConfig | config} for S3OutpostsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access was denied for this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * There was an exception with the internal server.
 *
 * @throws {@link OutpostOfflineException} (client fault)
 *
 * The service link connection to your Outposts home Region is down. Check your connection and try again.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * There was an exception validating this data.
 *
 * @throws {@link S3OutpostsServiceException}
 *
 * Base exception class for all service exceptions from S3Outposts service.
 *
 * @public
 */
export class DeleteEndpointCommand extends command<DeleteEndpointCommandInput, DeleteEndpointCommandOutput>(
  _ep0,
  _mw0,
  "DeleteEndpoint",
  DeleteEndpoint$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteEndpointRequest;
      output: {};
    };
    sdk: {
      input: DeleteEndpointCommandInput;
      output: DeleteEndpointCommandOutput;
    };
  };
}
