// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListEndpointsRequest, ListEndpointsResult } from "../models/models_0";
import { S3OutpostsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3OutpostsClient";
import { ListEndpoints } from "../schemas/schemas_1_Endpoint";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Lists endpoints associated with the specified Outpost. </p>
 *          <p>Related actions include:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3outposts_CreateEndpoint.html">CreateEndpoint</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3outposts_DeleteEndpoint.html">DeleteEndpoint</a>
 *                </p>
 *             </li>
 *          </ul>
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
 *  <p>Access was denied for this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There was an exception with the internal server.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>There was an exception validating this data.</p>
 *
 * @throws {@link S3OutpostsServiceException}
 * <p>Base exception class for all service exceptions from S3Outposts service.</p>
 *
 *
 * @public
 */
export class ListEndpointsCommand extends $Command
  .classBuilder<
    ListEndpointsCommandInput,
    ListEndpointsCommandOutput,
    S3OutpostsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: S3OutpostsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("S3Outposts", "ListEndpoints", {})
  .n("S3OutpostsClient", "ListEndpointsCommand")
  .sc(ListEndpoints)
  .build() {
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
