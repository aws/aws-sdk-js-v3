// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeImageReplicationStatusRequest, DescribeImageReplicationStatusResponse } from "../models/models_0";
import { DescribeImageReplicationStatus$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface DescribeImageReplicationStatusCommandOutput extends DescribeImageReplicationStatusResponse, __MetadataBearer {}

/**
 * Returns the replication status for a specified image.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, DescribeImageReplicationStatusCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, DescribeImageReplicationStatusCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * // import type { ECRClientConfig } from "@aws-sdk/client-ecr";
 * const config = {}; // type is ECRClientConfig
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
 *
 * The image requested does not exist in the specified repository.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * The specified parameter is invalid. Review the available parameters for the API request.
 *
 * @throws {@link RepositoryNotFoundException} (client fault)
 *
 * The specified repository could not be found. Check the spelling of the specified repository and ensure that you are performing operations on the correct registry.
 *
 * @throws {@link ServerException} (server fault)
 *
 * These errors are usually caused by a server-side issue.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * There was an exception validating this request.
 *
 * @throws {@link ECRServiceException}
 *
 * Base exception class for all service exceptions from ECR service.
 *
 * @public
 */
export class DescribeImageReplicationStatusCommand extends command<DescribeImageReplicationStatusCommandInput, DescribeImageReplicationStatusCommandOutput>(
  _ep0,
  _mw0,
  "DescribeImageReplicationStatus",
  DescribeImageReplicationStatus$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeImageReplicationStatusRequest;
      output: DescribeImageReplicationStatusResponse;
    };
    sdk: {
      input: DescribeImageReplicationStatusCommandInput;
      output: DescribeImageReplicationStatusCommandOutput;
    };
  };
}
