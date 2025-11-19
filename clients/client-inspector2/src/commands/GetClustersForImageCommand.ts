// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { Inspector2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Inspector2Client";
import { GetClustersForImageRequest, GetClustersForImageResponse } from "../models/models_0";
import { GetClustersForImage } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetClustersForImageCommand}.
 */
export interface GetClustersForImageCommandInput extends GetClustersForImageRequest {}
/**
 * @public
 *
 * The output of {@link GetClustersForImageCommand}.
 */
export interface GetClustersForImageCommandOutput extends GetClustersForImageResponse, __MetadataBearer {}

/**
 * <p>Returns a list of clusters and metadata associated with an image.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, GetClustersForImageCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, GetClustersForImageCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * // import type { Inspector2ClientConfig } from "@aws-sdk/client-inspector2";
 * const config = {}; // type is Inspector2ClientConfig
 * const client = new Inspector2Client(config);
 * const input = { // GetClustersForImageRequest
 *   filter: { // ClusterForImageFilterCriteria
 *     resourceId: "STRING_VALUE", // required
 *   },
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new GetClustersForImageCommand(input);
 * const response = await client.send(command);
 * // { // GetClustersForImageResponse
 * //   cluster: [ // ClusterInformationList // required
 * //     { // ClusterInformation
 * //       clusterArn: "STRING_VALUE", // required
 * //       clusterDetails: [ // ClusterDetailsList
 * //         { // ClusterDetails
 * //           lastInUse: new Date("TIMESTAMP"), // required
 * //           runningUnitCount: Number("long"),
 * //           stoppedUnitCount: Number("long"),
 * //           clusterMetadata: { // ClusterMetadata Union: only one key present
 * //             awsEcsMetadataDetails: { // AwsEcsMetadataDetails
 * //               detailsGroup: "STRING_VALUE", // required
 * //               taskDefinitionArn: "STRING_VALUE", // required
 * //             },
 * //             awsEksMetadataDetails: { // AwsEksMetadataDetails
 * //               namespace: "STRING_VALUE",
 * //               workloadInfoList: [ // AwsEksWorkloadInfoList
 * //                 { // AwsEksWorkloadInfo
 * //                   name: "STRING_VALUE", // required
 * //                   type: "STRING_VALUE", // required
 * //                 },
 * //               ],
 * //             },
 * //           },
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetClustersForImageCommandInput - {@link GetClustersForImageCommandInput}
 * @returns {@link GetClustersForImageCommandOutput}
 * @see {@link GetClustersForImageCommandInput} for command's `input` shape.
 * @see {@link GetClustersForImageCommandOutput} for command's `response` shape.
 * @see {@link Inspector2ClientResolvedConfig | config} for Inspector2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *          <p> For <code>Enable</code>, you receive this error if you attempt to use a feature in an
 *          unsupported Amazon Web Services Region. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal failure of the Amazon Inspector service.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation due to missing required fields or having invalid
 *          inputs.</p>
 *
 * @throws {@link Inspector2ServiceException}
 * <p>Base exception class for all service exceptions from Inspector2 service.</p>
 *
 *
 * @public
 */
export class GetClustersForImageCommand extends $Command
  .classBuilder<
    GetClustersForImageCommandInput,
    GetClustersForImageCommandOutput,
    Inspector2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Inspector2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Inspector2", "GetClustersForImage", {})
  .n("Inspector2Client", "GetClustersForImageCommand")
  .sc(GetClustersForImage)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetClustersForImageRequest;
      output: GetClustersForImageResponse;
    };
    sdk: {
      input: GetClustersForImageCommandInput;
      output: GetClustersForImageCommandOutput;
    };
  };
}
