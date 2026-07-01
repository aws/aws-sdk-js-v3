// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeModelCardRequest, DescribeModelCardResponse } from "../models/models_3";
import { DescribeModelCard$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeModelCardCommand}.
 */
export interface DescribeModelCardCommandInput extends DescribeModelCardRequest {}
/**
 * @public
 *
 * The output of {@link DescribeModelCardCommand}.
 */
export interface DescribeModelCardCommandOutput extends DescribeModelCardResponse, __MetadataBearer {}

/**
 * <p>Describes the content, creation time, and security configuration of an Amazon SageMaker Model Card.</p> <important> <p>To retrieve only metadata about a model card without requiring <code>kms:Decrypt</code> permission on the associated customer-managed Amazon Web Services KMS key, set <code>IncludedData</code> to <code>MetadataOnly</code>. The default is <code>AllData</code>, which returns the full model card <code>Content</code> and requires <code>kms:Decrypt</code> permission when a customer-managed key is configured.</p> </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeModelCardCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeModelCardCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // DescribeModelCardRequest
 *   ModelCardName: "STRING_VALUE", // required
 *   ModelCardVersion: Number("int"),
 *   IncludedData: "AllData" || "MetadataOnly",
 * };
 * const command = new DescribeModelCardCommand(input);
 * const response = await client.send(command);
 * // { // DescribeModelCardResponse
 * //   ModelCardArn: "STRING_VALUE", // required
 * //   ModelCardName: "STRING_VALUE", // required
 * //   ModelCardVersion: Number("int"), // required
 * //   Content: "STRING_VALUE", // required
 * //   ModelCardStatus: "Draft" || "PendingReview" || "Approved" || "Archived", // required
 * //   SecurityConfig: { // ModelCardSecurityConfig
 * //     KmsKeyId: "STRING_VALUE",
 * //   },
 * //   CreationTime: new Date("TIMESTAMP"), // required
 * //   CreatedBy: { // UserContext
 * //     UserProfileArn: "STRING_VALUE",
 * //     UserProfileName: "STRING_VALUE",
 * //     DomainId: "STRING_VALUE",
 * //     IamIdentity: { // IamIdentity
 * //       Arn: "STRING_VALUE",
 * //       PrincipalId: "STRING_VALUE",
 * //       SourceIdentity: "STRING_VALUE",
 * //     },
 * //   },
 * //   LastModifiedTime: new Date("TIMESTAMP"),
 * //   LastModifiedBy: {
 * //     UserProfileArn: "STRING_VALUE",
 * //     UserProfileName: "STRING_VALUE",
 * //     DomainId: "STRING_VALUE",
 * //     IamIdentity: {
 * //       Arn: "STRING_VALUE",
 * //       PrincipalId: "STRING_VALUE",
 * //       SourceIdentity: "STRING_VALUE",
 * //     },
 * //   },
 * //   ModelCardProcessingStatus: "DeleteInProgress" || "DeletePending" || "ContentDeleted" || "ExportJobsDeleted" || "DeleteCompleted" || "DeleteFailed",
 * // };
 *
 * ```
 *
 * @param DescribeModelCardCommandInput - {@link DescribeModelCardCommandInput}
 * @returns {@link DescribeModelCardCommandOutput}
 * @see {@link DescribeModelCardCommandInput} for command's `input` shape.
 * @see {@link DescribeModelCardCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class DescribeModelCardCommand extends command<DescribeModelCardCommandInput, DescribeModelCardCommandOutput>(
  _ep0,
  _mw0,
  "DescribeModelCard",
  DescribeModelCard$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeModelCardRequest;
      output: DescribeModelCardResponse;
    };
    sdk: {
      input: DescribeModelCardCommandInput;
      output: DescribeModelCardCommandOutput;
    };
  };
}
