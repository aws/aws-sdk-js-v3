// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListSharedEndpointsRequest, ListSharedEndpointsResult } from "../models/models_0";
import { ListSharedEndpoints$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListSharedEndpointsCommand}.
 */
export interface ListSharedEndpointsCommandInput extends ListSharedEndpointsRequest {}
/**
 * @public
 *
 * The output of {@link ListSharedEndpointsCommand}.
 */
export interface ListSharedEndpointsCommandOutput extends ListSharedEndpointsResult, __MetadataBearer {}

/**
 * Lists all endpoints associated with an Outpost that has been shared by Amazon Web Services Resource Access Manager (RAM).
 *
 * Related actions include:
 *
 * - [CreateEndpoint](https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3outposts_CreateEndpoint.html)
 * - [DeleteEndpoint](https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3outposts_DeleteEndpoint.html)
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3OutpostsClient, ListSharedEndpointsCommand } from "@aws-sdk/client-s3outposts"; // ES Modules import
 * // const { S3OutpostsClient, ListSharedEndpointsCommand } = require("@aws-sdk/client-s3outposts"); // CommonJS import
 * // import type { S3OutpostsClientConfig } from "@aws-sdk/client-s3outposts";
 * const config = {}; // type is S3OutpostsClientConfig
 * const client = new S3OutpostsClient(config);
 * const input = { // ListSharedEndpointsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   OutpostId: "STRING_VALUE", // required
 * };
 * const command = new ListSharedEndpointsCommand(input);
 * const response = await client.send(command);
 * // { // ListSharedEndpointsResult
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
 * @param ListSharedEndpointsCommandInput - {@link ListSharedEndpointsCommandInput}
 * @returns {@link ListSharedEndpointsCommandOutput}
 * @see {@link ListSharedEndpointsCommandInput} for command's `input` shape.
 * @see {@link ListSharedEndpointsCommandOutput} for command's `response` shape.
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
export class ListSharedEndpointsCommand extends command<ListSharedEndpointsCommandInput, ListSharedEndpointsCommandOutput>(
  _ep0,
  _mw0,
  "ListSharedEndpoints",
  ListSharedEndpoints$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSharedEndpointsRequest;
      output: ListSharedEndpointsResult;
    };
    sdk: {
      input: ListSharedEndpointsCommandInput;
      output: ListSharedEndpointsCommandOutput;
    };
  };
}
