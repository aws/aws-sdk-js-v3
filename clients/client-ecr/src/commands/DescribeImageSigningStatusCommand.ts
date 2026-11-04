// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeImageSigningStatusRequest, DescribeImageSigningStatusResponse } from "../models/models_0";
import { DescribeImageSigningStatus$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeImageSigningStatusCommand}.
 */
export interface DescribeImageSigningStatusCommandInput extends DescribeImageSigningStatusRequest {}
/**
 * @public
 *
 * The output of {@link DescribeImageSigningStatusCommand}.
 */
export interface DescribeImageSigningStatusCommandOutput extends DescribeImageSigningStatusResponse, __MetadataBearer {}

/**
 * Returns the signing status for a specified image. If the image matched signing rules that reference different signing profiles, a status is returned for each profile.
 *
 * For more information, see [Managed signing](https://docs.aws.amazon.com/AmazonECR/latest/userguide/managed-signing.html) in the *Amazon Elastic Container Registry User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, DescribeImageSigningStatusCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, DescribeImageSigningStatusCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * // import type { ECRClientConfig } from "@aws-sdk/client-ecr";
 * const config = {}; // type is ECRClientConfig
 * const client = new ECRClient(config);
 * const input = { // DescribeImageSigningStatusRequest
 *   repositoryName: "STRING_VALUE", // required
 *   imageId: { // ImageIdentifier
 *     imageDigest: "STRING_VALUE",
 *     imageTag: "STRING_VALUE",
 *   },
 *   registryId: "STRING_VALUE",
 * };
 * const command = new DescribeImageSigningStatusCommand(input);
 * const response = await client.send(command);
 * // { // DescribeImageSigningStatusResponse
 * //   repositoryName: "STRING_VALUE",
 * //   imageId: { // ImageIdentifier
 * //     imageDigest: "STRING_VALUE",
 * //     imageTag: "STRING_VALUE",
 * //   },
 * //   registryId: "STRING_VALUE",
 * //   signingStatuses: [ // ImageSigningStatusList
 * //     { // ImageSigningStatus
 * //       signingProfileArn: "STRING_VALUE",
 * //       failureCode: "STRING_VALUE",
 * //       failureReason: "STRING_VALUE",
 * //       status: "IN_PROGRESS" || "COMPLETE" || "FAILED",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeImageSigningStatusCommandInput - {@link DescribeImageSigningStatusCommandInput}
 * @returns {@link DescribeImageSigningStatusCommandOutput}
 * @see {@link DescribeImageSigningStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeImageSigningStatusCommandOutput} for command's `response` shape.
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
export class DescribeImageSigningStatusCommand extends command<DescribeImageSigningStatusCommandInput, DescribeImageSigningStatusCommandOutput>(
  _ep0,
  _mw0,
  "DescribeImageSigningStatus",
  DescribeImageSigningStatus$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeImageSigningStatusRequest;
      output: DescribeImageSigningStatusResponse;
    };
    sdk: {
      input: DescribeImageSigningStatusCommandInput;
      output: DescribeImageSigningStatusCommandOutput;
    };
  };
}
