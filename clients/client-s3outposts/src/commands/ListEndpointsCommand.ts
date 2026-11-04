// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListEndpointsRequest, ListEndpointsResult } from "../models/models_0";
import { ListEndpoints$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListEndpointsCommand}.
 */
export interface ListEndpointsCommandInput extends ListEndpointsRequest {}
/**
 * @public
 *
 * The output of {@link ListEndpointsCommand}.
 */
export interface ListEndpointsCommandOutput extends ListEndpointsResult, __MetadataBearer {}

/**
 * Lists endpoints associated with the specified Outpost.
 *
 * Related actions include:
 *
 * - [CreateEndpoint](https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3outposts_CreateEndpoint.html)
 * - [DeleteEndpoint](https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3outposts_DeleteEndpoint.html)
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3OutpostsClient, ListEndpointsCommand } from "@aws-sdk/client-s3outposts"; // ES Modules import
 * // const { S3OutpostsClient, ListEndpointsCommand } = require("@aws-sdk/client-s3outposts"); // CommonJS import
 * // import type { S3OutpostsClientConfig } from "@aws-sdk/client-s3outposts";
 * const config = {}; // type is S3OutpostsClientConfig
 * const client = new S3OutpostsClient(config);
 * const input = { // ListEndpointsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListEndpointsCommand(input);
 * const response = await client.send(command);
 * // { // ListEndpointsResult
 * //   Endpoints: [ // Endpoints
 * //     { // Endpoint
 * //       EndpointArn: "STRING_VALUE",
 * //       OutpostsId: "STRING_VALUE",
 * //       CidrBlock: "STRING_VALUE",
 * //       Status: "Pending" || "Available" || "Deleting" || "Create_Failed" || "Delete_Failed",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       NetworkInterfaces: [ // NetworkInterfaces
 * //         { // NetworkInterface
 * //           NetworkInterfaceId: "STRING_VALUE",
 * //         },
 * //       ],
 * //       VpcId: "STRING_VALUE",
 * //       SubnetId: "STRING_VALUE",
 * //       SecurityGroupId: "STRING_VALUE",
 * //       AccessType: "Private" || "CustomerOwnedIp",
 * //       CustomerOwnedIpv4Pool: "STRING_VALUE",
 * //       FailedReason: { // FailedReason
 * //         ErrorCode: "STRING_VALUE",
 * //         Message: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEndpointsCommandInput - {@link ListEndpointsCommandInput}
 * @returns {@link ListEndpointsCommandOutput}
 * @see {@link ListEndpointsCommandInput} for command's `input` shape.
 * @see {@link ListEndpointsCommandOutput} for command's `response` shape.
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
export class ListEndpointsCommand extends command<ListEndpointsCommandInput, ListEndpointsCommandOutput>(
  _ep0,
  _mw0,
  "ListEndpoints",
  ListEndpoints$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEndpointsRequest;
      output: ListEndpointsResult;
    };
    sdk: {
      input: ListEndpointsCommandInput;
      output: ListEndpointsCommandOutput;
    };
  };
}
