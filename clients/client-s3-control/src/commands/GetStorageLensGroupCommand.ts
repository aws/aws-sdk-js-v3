// smithy-typescript generated code
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetStorageLensGroupRequest, GetStorageLensGroupResult } from "../models/models_0";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";
import { GetStorageLensGroup } from "../schemas/schemas_28_Storage";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetStorageLensGroupCommand}.
 */
export interface GetStorageLensGroupCommandInput extends GetStorageLensGroupRequest {}
/**
 * @public
 *
 * The output of {@link GetStorageLensGroupCommand}.
 */
export interface GetStorageLensGroupCommandOutput extends GetStorageLensGroupResult, __MetadataBearer {}

/**
 * <p>
 * Retrieves the Storage Lens group configuration details.</p>
 *          <p>To use this operation, you must have the permission to perform the
 *       <code>s3:GetStorageLensGroup</code> action. For more information about the required Storage Lens
 *       Groups permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens_iam_permissions.html#storage_lens_groups_permissions">Setting account permissions to use S3 Storage Lens groups</a>.</p>
 *          <p>For information about Storage Lens groups errors, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html#S3LensErrorCodeList">List of Amazon S3 Storage
 *       Lens error codes</a>.</p>
 *          <important>
 *             <p>You must URL encode any signed header values that contain spaces. For example, if your header value is <code>my  file.txt</code>, containing two spaces after <code>my</code>, you must URL encode this value to <code>my%20%20file.txt</code>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, GetStorageLensGroupCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, GetStorageLensGroupCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * // import type { S3ControlClientConfig } from "@aws-sdk/client-s3-control";
 * const config = {}; // type is S3ControlClientConfig
 * const client = new S3ControlClient(config);
 * const input = { // GetStorageLensGroupRequest
 *   Name: "STRING_VALUE", // required
 *   AccountId: "STRING_VALUE",
 * };
 * const command = new GetStorageLensGroupCommand(input);
 * const response = await client.send(command);
 * // { // GetStorageLensGroupResult
 * //   StorageLensGroup: { // StorageLensGroup
 * //     Name: "STRING_VALUE", // required
 * //     Filter: { // StorageLensGroupFilter
 * //       MatchAnyPrefix: [ // MatchAnyPrefix
 * //         "STRING_VALUE",
 * //       ],
 * //       MatchAnySuffix: [ // MatchAnySuffix
 * //         "STRING_VALUE",
 * //       ],
 * //       MatchAnyTag: [ // MatchAnyTag
 * //         { // S3Tag
 * //           Key: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       MatchObjectAge: { // MatchObjectAge
 * //         DaysGreaterThan: Number("int"),
 * //         DaysLessThan: Number("int"),
 * //       },
 * //       MatchObjectSize: { // MatchObjectSize
 * //         BytesGreaterThan: Number("long"),
 * //         BytesLessThan: Number("long"),
 * //       },
 * //       And: { // StorageLensGroupAndOperator
 * //         MatchAnyPrefix: [
 * //           "STRING_VALUE",
 * //         ],
 * //         MatchAnySuffix: [
 * //           "STRING_VALUE",
 * //         ],
 * //         MatchAnyTag: [
 * //           {
 * //             Key: "STRING_VALUE", // required
 * //             Value: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //         MatchObjectAge: {
 * //           DaysGreaterThan: Number("int"),
 * //           DaysLessThan: Number("int"),
 * //         },
 * //         MatchObjectSize: {
 * //           BytesGreaterThan: Number("long"),
 * //           BytesLessThan: Number("long"),
 * //         },
 * //       },
 * //       Or: { // StorageLensGroupOrOperator
 * //         MatchAnyPrefix: [
 * //           "STRING_VALUE",
 * //         ],
 * //         MatchAnySuffix: [
 * //           "STRING_VALUE",
 * //         ],
 * //         MatchAnyTag: [
 * //           {
 * //             Key: "STRING_VALUE", // required
 * //             Value: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //         MatchObjectAge: {
 * //           DaysGreaterThan: Number("int"),
 * //           DaysLessThan: Number("int"),
 * //         },
 * //         MatchObjectSize: {
 * //           BytesGreaterThan: Number("long"),
 * //           BytesLessThan: Number("long"),
 * //         },
 * //       },
 * //     },
 * //     StorageLensGroupArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetStorageLensGroupCommandInput - {@link GetStorageLensGroupCommandInput}
 * @returns {@link GetStorageLensGroupCommandOutput}
 * @see {@link GetStorageLensGroupCommandInput} for command's `input` shape.
 * @see {@link GetStorageLensGroupCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 *
 * @public
 */
export class GetStorageLensGroupCommand extends $Command
  .classBuilder<
    GetStorageLensGroupCommandInput,
    GetStorageLensGroupCommandOutput,
    S3ControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    RequiresAccountId: { type: "staticContextParams", value: true },
    AccountId: { type: "contextParams", name: "AccountId" },
  })
  .m(function (this: any, Command: any, cs: any, config: S3ControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions()), getProcessArnablesPlugin(config)];
  })
  .s("AWSS3ControlServiceV20180820", "GetStorageLensGroup", {})
  .n("S3ControlClient", "GetStorageLensGroupCommand")
  .sc(GetStorageLensGroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetStorageLensGroupRequest;
      output: GetStorageLensGroupResult;
    };
    sdk: {
      input: GetStorageLensGroupCommandInput;
      output: GetStorageLensGroupCommandOutput;
    };
  };
}
