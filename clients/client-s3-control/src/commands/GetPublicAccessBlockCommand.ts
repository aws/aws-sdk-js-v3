// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw1, command } from "../commandBuilder";
import type { GetPublicAccessBlockOutput, GetPublicAccessBlockRequest } from "../models/models_0";
import { GetPublicAccessBlock$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetPublicAccessBlockCommand}.
 */
export interface GetPublicAccessBlockCommandInput extends GetPublicAccessBlockRequest {}
/**
 * @public
 *
 * The output of {@link GetPublicAccessBlockCommand}.
 */
export interface GetPublicAccessBlockCommandOutput extends GetPublicAccessBlockOutput, __MetadataBearer {}

/**
 * > **Note:** This operation is not supported by directory buckets.
 *
 * Retrieves the `PublicAccessBlock` configuration for an Amazon Web Services account. This operation returns the effective account-level configuration, which may inherit from organization-level policies. For more information, see [Using Amazon S3 block public access](https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html).
 *
 * Related actions include:
 *
 * - [DeletePublicAccessBlock](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeletePublicAccessBlock.html)
 * - [PutPublicAccessBlock](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutPublicAccessBlock.html)
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, GetPublicAccessBlockCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, GetPublicAccessBlockCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * // import type { S3ControlClientConfig } from "@aws-sdk/client-s3-control";
 * const config = {}; // type is S3ControlClientConfig
 * const client = new S3ControlClient(config);
 * const input = { // GetPublicAccessBlockRequest
 *   AccountId: "STRING_VALUE",
 * };
 * const command = new GetPublicAccessBlockCommand(input);
 * const response = await client.send(command);
 * // { // GetPublicAccessBlockOutput
 * //   PublicAccessBlockConfiguration: { // PublicAccessBlockConfiguration
 * //     BlockPublicAcls: true || false,
 * //     IgnorePublicAcls: true || false,
 * //     BlockPublicPolicy: true || false,
 * //     RestrictPublicBuckets: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param GetPublicAccessBlockCommandInput - {@link GetPublicAccessBlockCommandInput}
 * @returns {@link GetPublicAccessBlockCommandOutput}
 * @see {@link GetPublicAccessBlockCommandInput} for command's `input` shape.
 * @see {@link GetPublicAccessBlockCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link NoSuchPublicAccessBlockConfiguration} (client fault)
 *
 * Amazon S3 throws this exception if you make a `GetPublicAccessBlock` request against an account that doesn't have a `PublicAccessBlockConfiguration` set.
 *
 * @throws {@link S3ControlServiceException}
 *
 * Base exception class for all service exceptions from S3Control service.
 *
 * @public
 */
export class GetPublicAccessBlockCommand extends command<GetPublicAccessBlockCommandInput, GetPublicAccessBlockCommandOutput>(
  _ep0,
  _mw1,
  "GetPublicAccessBlock",
  GetPublicAccessBlock$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPublicAccessBlockRequest;
      output: GetPublicAccessBlockOutput;
    };
    sdk: {
      input: GetPublicAccessBlockCommandInput;
      output: GetPublicAccessBlockCommandOutput;
    };
  };
}
