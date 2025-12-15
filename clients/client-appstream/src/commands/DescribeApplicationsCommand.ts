// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeApplicationsRequest, DescribeApplicationsResult } from "../models/models_0";
import { DescribeApplications$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeApplicationsCommand}.
 */
export interface DescribeApplicationsCommandInput extends DescribeApplicationsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeApplicationsCommand}.
 */
export interface DescribeApplicationsCommandOutput extends DescribeApplicationsResult, __MetadataBearer {}

/**
 * <p>Retrieves a list that describes one or more applications.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, DescribeApplicationsCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, DescribeApplicationsCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * // import type { AppStreamClientConfig } from "@aws-sdk/client-appstream";
 * const config = {}; // type is AppStreamClientConfig
 * const client = new AppStreamClient(config);
 * const input = { // DescribeApplicationsRequest
 *   Arns: [ // ArnList
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeApplicationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeApplicationsResult
 * //   Applications: [ // Applications
 * //     { // Application
 * //       Name: "STRING_VALUE",
 * //       DisplayName: "STRING_VALUE",
 * //       IconURL: "STRING_VALUE",
 * //       LaunchPath: "STRING_VALUE",
 * //       LaunchParameters: "STRING_VALUE",
 * //       Enabled: true || false,
 * //       Metadata: { // Metadata
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       WorkingDirectory: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       AppBlockArn: "STRING_VALUE",
 * //       IconS3Location: { // S3Location
 * //         S3Bucket: "STRING_VALUE", // required
 * //         S3Key: "STRING_VALUE",
 * //       },
 * //       Platforms: [ // Platforms
 * //         "WINDOWS" || "WINDOWS_SERVER_2016" || "WINDOWS_SERVER_2019" || "WINDOWS_SERVER_2022" || "AMAZON_LINUX2" || "RHEL8" || "ROCKY_LINUX8",
 * //       ],
 * //       InstanceFamilies: [ // StringList
 * //         "STRING_VALUE",
 * //       ],
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeApplicationsCommandInput - {@link DescribeApplicationsCommandInput}
 * @returns {@link DescribeApplicationsCommandOutput}
 * @see {@link DescribeApplicationsCommandInput} for command's `input` shape.
 * @see {@link DescribeApplicationsCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class DescribeApplicationsCommand extends $Command
  .classBuilder<
    DescribeApplicationsCommandInput,
    DescribeApplicationsCommandOutput,
    AppStreamClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppStreamClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PhotonAdminProxyService", "DescribeApplications", {})
  .n("AppStreamClient", "DescribeApplicationsCommand")
  .sc(DescribeApplications$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeApplicationsRequest;
      output: DescribeApplicationsResult;
    };
    sdk: {
      input: DescribeApplicationsCommandInput;
      output: DescribeApplicationsCommandOutput;
    };
  };
}
