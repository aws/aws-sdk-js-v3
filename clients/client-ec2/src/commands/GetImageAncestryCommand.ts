// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetImageAncestryRequest, GetImageAncestryResult } from "../models/models_7";
import { GetImageAncestry } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetImageAncestryCommand}.
 */
export interface GetImageAncestryCommandInput extends GetImageAncestryRequest {}
/**
 * @public
 *
 * The output of {@link GetImageAncestryCommand}.
 */
export interface GetImageAncestryCommandOutput extends GetImageAncestryResult, __MetadataBearer {}

/**
 * <p>Retrieves the ancestry chain of the specified AMI, tracing its lineage back to the root
 *       AMI. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-ancestry.html">AMI ancestry</a> in
 *       <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetImageAncestryCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetImageAncestryCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // GetImageAncestryRequest
 *   ImageId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new GetImageAncestryCommand(input);
 * const response = await client.send(command);
 * // { // GetImageAncestryResult
 * //   ImageAncestryEntries: [ // ImageAncestryEntryList
 * //     { // ImageAncestryEntry
 * //       CreationDate: new Date("TIMESTAMP"),
 * //       ImageId: "STRING_VALUE",
 * //       ImageOwnerAlias: "STRING_VALUE",
 * //       SourceImageId: "STRING_VALUE",
 * //       SourceImageRegion: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetImageAncestryCommandInput - {@link GetImageAncestryCommandInput}
 * @returns {@link GetImageAncestryCommandOutput}
 * @see {@link GetImageAncestryCommandInput} for command's `input` shape.
 * @see {@link GetImageAncestryCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class GetImageAncestryCommand extends $Command
  .classBuilder<
    GetImageAncestryCommandInput,
    GetImageAncestryCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "GetImageAncestry", {})
  .n("EC2Client", "GetImageAncestryCommand")
  .sc(GetImageAncestry)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetImageAncestryRequest;
      output: GetImageAncestryResult;
    };
    sdk: {
      input: GetImageAncestryCommandInput;
      output: GetImageAncestryCommandOutput;
    };
  };
}
