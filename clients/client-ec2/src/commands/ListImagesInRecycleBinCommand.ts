// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListImagesInRecycleBinRequest, ListImagesInRecycleBinResult } from "../models/models_7";
import { ListImagesInRecycleBin } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListImagesInRecycleBinCommand}.
 */
export interface ListImagesInRecycleBinCommandInput extends ListImagesInRecycleBinRequest {}
/**
 * @public
 *
 * The output of {@link ListImagesInRecycleBinCommand}.
 */
export interface ListImagesInRecycleBinCommandOutput extends ListImagesInRecycleBinResult, __MetadataBearer {}

/**
 * <p>Lists one or more AMIs that are currently in the Recycle Bin. For more information, see
 *       <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recycle-bin.html">Recycle
 *         Bin</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ListImagesInRecycleBinCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ListImagesInRecycleBinCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // ListImagesInRecycleBinRequest
 *   ImageIds: [ // ImageIdStringList
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   DryRun: true || false,
 * };
 * const command = new ListImagesInRecycleBinCommand(input);
 * const response = await client.send(command);
 * // { // ListImagesInRecycleBinResult
 * //   Images: [ // ImageRecycleBinInfoList
 * //     { // ImageRecycleBinInfo
 * //       ImageId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       RecycleBinEnterTime: new Date("TIMESTAMP"),
 * //       RecycleBinExitTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListImagesInRecycleBinCommandInput - {@link ListImagesInRecycleBinCommandInput}
 * @returns {@link ListImagesInRecycleBinCommandOutput}
 * @see {@link ListImagesInRecycleBinCommandInput} for command's `input` shape.
 * @see {@link ListImagesInRecycleBinCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class ListImagesInRecycleBinCommand extends $Command
  .classBuilder<
    ListImagesInRecycleBinCommandInput,
    ListImagesInRecycleBinCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "ListImagesInRecycleBin", {})
  .n("EC2Client", "ListImagesInRecycleBinCommand")
  .sc(ListImagesInRecycleBin)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListImagesInRecycleBinRequest;
      output: ListImagesInRecycleBinResult;
    };
    sdk: {
      input: ListImagesInRecycleBinCommandInput;
      output: ListImagesInRecycleBinCommandOutput;
    };
  };
}
