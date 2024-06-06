// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeAppBlocksRequest, DescribeAppBlocksResult } from "../models/models_0";
import { de_DescribeAppBlocksCommand, se_DescribeAppBlocksCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAppBlocksCommand}.
 */
export interface DescribeAppBlocksCommandInput extends DescribeAppBlocksRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAppBlocksCommand}.
 */
export interface DescribeAppBlocksCommandOutput extends DescribeAppBlocksResult, __MetadataBearer {}

/**
 * <p>Retrieves a list that describes one or more app blocks.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, DescribeAppBlocksCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, DescribeAppBlocksCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const input = { // DescribeAppBlocksRequest
 *   Arns: [ // ArnList
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeAppBlocksCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAppBlocksResult
 * //   AppBlocks: [ // AppBlocks
 * //     { // AppBlock
 * //       Name: "STRING_VALUE", // required
 * //       Arn: "STRING_VALUE", // required
 * //       Description: "STRING_VALUE",
 * //       DisplayName: "STRING_VALUE",
 * //       SourceS3Location: { // S3Location
 * //         S3Bucket: "STRING_VALUE", // required
 * //         S3Key: "STRING_VALUE",
 * //       },
 * //       SetupScriptDetails: { // ScriptDetails
 * //         ScriptS3Location: {
 * //           S3Bucket: "STRING_VALUE", // required
 * //           S3Key: "STRING_VALUE",
 * //         },
 * //         ExecutablePath: "STRING_VALUE", // required
 * //         ExecutableParameters: "STRING_VALUE",
 * //         TimeoutInSeconds: Number("int"), // required
 * //       },
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //       PostSetupScriptDetails: {
 * //         ScriptS3Location: {
 * //           S3Bucket: "STRING_VALUE", // required
 * //           S3Key: "STRING_VALUE",
 * //         },
 * //         ExecutablePath: "STRING_VALUE", // required
 * //         ExecutableParameters: "STRING_VALUE",
 * //         TimeoutInSeconds: Number("int"), // required
 * //       },
 * //       PackagingType: "CUSTOM" || "APPSTREAM2",
 * //       State: "INACTIVE" || "ACTIVE",
 * //       AppBlockErrors: [ // ErrorDetailsList
 * //         { // ErrorDetails
 * //           ErrorCode: "STRING_VALUE",
 * //           ErrorMessage: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeAppBlocksCommandInput - {@link DescribeAppBlocksCommandInput}
 * @returns {@link DescribeAppBlocksCommandOutput}
 * @see {@link DescribeAppBlocksCommandInput} for command's `input` shape.
 * @see {@link DescribeAppBlocksCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>The attempted operation is not permitted.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link AppStreamServiceException}
 * <p>Base exception class for all service exceptions from AppStream service.</p>
 *
 * @public
 */
export class DescribeAppBlocksCommand extends $Command
  .classBuilder<
    DescribeAppBlocksCommandInput,
    DescribeAppBlocksCommandOutput,
    AppStreamClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: AppStreamClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("PhotonAdminProxyService", "DescribeAppBlocks", {})
  .n("AppStreamClient", "DescribeAppBlocksCommand")
  .f(void 0, void 0)
  .ser(se_DescribeAppBlocksCommand)
  .de(de_DescribeAppBlocksCommand)
  .build() {}
