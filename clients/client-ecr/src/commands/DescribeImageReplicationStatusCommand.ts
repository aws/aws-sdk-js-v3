// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeImageReplicationStatusRequest, DescribeImageReplicationStatusResponse } from "../models/models_0";
import {
  de_DescribeImageReplicationStatusCommand,
  se_DescribeImageReplicationStatusCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeImageReplicationStatusCommand}.
 */
export interface DescribeImageReplicationStatusCommandInput extends DescribeImageReplicationStatusRequest {}
/**
 * @public
 *
 * The output of {@link DescribeImageReplicationStatusCommand}.
 */
export interface DescribeImageReplicationStatusCommandOutput
  extends DescribeImageReplicationStatusResponse,
    __MetadataBearer {}

/**
 * <p>Returns the replication status for a specified image.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, DescribeImageReplicationStatusCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, DescribeImageReplicationStatusCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const input = { // DescribeImageReplicationStatusRequest
 *   repositoryName: "STRING_VALUE", // required
 *   imageId: { // ImageIdentifier
 *     imageDigest: "STRING_VALUE",
 *     imageTag: "STRING_VALUE",
 *   },
 *   registryId: "STRING_VALUE",
 * };
 * const command = new DescribeImageReplicationStatusCommand(input);
 * const response = await client.send(command);
 * // { // DescribeImageReplicationStatusResponse
 * //   repositoryName: "STRING_VALUE",
 * //   imageId: { // ImageIdentifier
 * //     imageDigest: "STRING_VALUE",
 * //     imageTag: "STRING_VALUE",
 * //   },
 * //   replicationStatuses: [ // ImageReplicationStatusList
 * //     { // ImageReplicationStatus
 * //       region: "STRING_VALUE",
 * //       registryId: "STRING_VALUE",
 * //       status: "IN_PROGRESS" || "COMPLETE" || "FAILED",
 * //       failureCode: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeImageReplicationStatusCommandInput - {@link DescribeImageReplicationStatusCommandInput}
 * @returns {@link DescribeImageReplicationStatusCommandOutput}
 * @see {@link DescribeImageReplicationStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeImageReplicationStatusCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for ECRClient's `config` shape.
 *
 * @throws {@link ImageNotFoundException} (client fault)
 *  <p>The image requested does not exist in the specified repository.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *             request.</p>
 *
 * @throws {@link RepositoryNotFoundException} (client fault)
 *  <p>The specified repository could not be found. Check the spelling of the specified
 *             repository and ensure that you are performing operations on the correct registry.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>There was an exception validating this request.</p>
 *
 * @throws {@link ECRServiceException}
 * <p>Base exception class for all service exceptions from ECR service.</p>
 *
 * @public
 */
export class DescribeImageReplicationStatusCommand extends $Command
  .classBuilder<
    DescribeImageReplicationStatusCommandInput,
    DescribeImageReplicationStatusCommandOutput,
    ECRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ECRClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2ContainerRegistry_V20150921", "DescribeImageReplicationStatus", {})
  .n("ECRClient", "DescribeImageReplicationStatusCommand")
  .f(void 0, void 0)
  .ser(se_DescribeImageReplicationStatusCommand)
  .de(de_DescribeImageReplicationStatusCommand)
  .build() {}
