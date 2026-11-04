// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateEndpointRequest, CreateEndpointResult } from "../models/models_0";
import { CreateEndpoint$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateEndpointCommand}.
 */
export interface CreateEndpointCommandInput extends CreateEndpointRequest {}
/**
 * @public
 *
 * The output of {@link CreateEndpointCommand}.
 */
export interface CreateEndpointCommandOutput extends CreateEndpointResult, __MetadataBearer {}

/**
 * Creates an endpoint and associates it with the specified Outpost.
 *
 * > **Note:** It can take up to 5 minutes for this action to finish.
 *
 * Related actions include:
 *
 * - [DeleteEndpoint](https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3outposts_DeleteEndpoint.html)
 * - [ListEndpoints](https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3outposts_ListEndpoints.html)
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3OutpostsClient, CreateEndpointCommand } from "@aws-sdk/client-s3outposts"; // ES Modules import
 * // const { S3OutpostsClient, CreateEndpointCommand } = require("@aws-sdk/client-s3outposts"); // CommonJS import
 * // import type { S3OutpostsClientConfig } from "@aws-sdk/client-s3outposts";
 * const config = {}; // type is S3OutpostsClientConfig
 * const client = new S3OutpostsClient(config);
 * const input = { // CreateEndpointRequest
 *   OutpostId: "STRING_VALUE", // required
 *   SubnetId: "STRING_VALUE", // required
 *   SecurityGroupId: "STRING_VALUE", // required
 *   AccessType: "Private" || "CustomerOwnedIp",
 *   CustomerOwnedIpv4Pool: "STRING_VALUE",
 * };
 * const command = new CreateEndpointCommand(input);
 * const response = await client.send(command);
 * // { // CreateEndpointResult
 * //   EndpointArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateEndpointCommandInput - {@link CreateEndpointCommandInput}
 * @returns {@link CreateEndpointCommandOutput}
 * @see {@link CreateEndpointCommandInput} for command's `input` shape.
 * @see {@link CreateEndpointCommandOutput} for command's `response` shape.
 * @see {@link S3OutpostsClientResolvedConfig | config} for S3OutpostsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access was denied for this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * There was a conflict with this action, and it could not be completed.
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
export class CreateEndpointCommand extends command<CreateEndpointCommandInput, CreateEndpointCommandOutput>(
  _ep0,
  _mw0,
  "CreateEndpoint",
  CreateEndpoint$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateEndpointRequest;
      output: CreateEndpointResult;
    };
    sdk: {
      input: CreateEndpointCommandInput;
      output: CreateEndpointCommandOutput;
    };
  };
}
