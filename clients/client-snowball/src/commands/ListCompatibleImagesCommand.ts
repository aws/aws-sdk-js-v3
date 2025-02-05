// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListCompatibleImagesRequest, ListCompatibleImagesResult } from "../models/models_0";
import { de_ListCompatibleImagesCommand, se_ListCompatibleImagesCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCompatibleImagesCommand}.
 */
export interface ListCompatibleImagesCommandInput extends ListCompatibleImagesRequest {}
/**
 * @public
 *
 * The output of {@link ListCompatibleImagesCommand}.
 */
export interface ListCompatibleImagesCommandOutput extends ListCompatibleImagesResult, __MetadataBearer {}

/**
 * <p>This action returns a list of the different Amazon EC2-compatible Amazon Machine Images (AMIs)
 *       that are owned by your Amazon Web Services accountthat would be supported for use on a Snow
 *       device. Currently, supported AMIs are based on the Amazon Linux-2, Ubuntu 20.04 LTS - Focal, or Ubuntu 22.04 LTS - Jammy images, available on the
 *       Amazon Web Services Marketplace. Ubuntu 16.04 LTS - Xenial (HVM) images are no longer supported in the Market, but still supported for use on devices through Amazon EC2 VM Import/Export and running locally in AMIs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, ListCompatibleImagesCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, ListCompatibleImagesCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SnowballClient(config);
 * const input = { // ListCompatibleImagesRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListCompatibleImagesCommand(input);
 * const response = await client.send(command);
 * // { // ListCompatibleImagesResult
 * //   CompatibleImages: [ // CompatibleImageList
 * //     { // CompatibleImage
 * //       AmiId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCompatibleImagesCommandInput - {@link ListCompatibleImagesCommandInput}
 * @returns {@link ListCompatibleImagesCommandOutput}
 * @see {@link ListCompatibleImagesCommandInput} for command's `input` shape.
 * @see {@link ListCompatibleImagesCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for SnowballClient's `config` shape.
 *
 * @throws {@link Ec2RequestFailedException} (client fault)
 *  <p>Your user lacks the necessary Amazon EC2 permissions to perform the attempted
 *       action.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The <code>NextToken</code> string was altered unexpectedly, and the operation has
 *       stopped. Run the operation without changing the <code>NextToken</code> string, and try
 *       again.</p>
 *
 * @throws {@link SnowballServiceException}
 * <p>Base exception class for all service exceptions from Snowball service.</p>
 *
 * @public
 */
export class ListCompatibleImagesCommand extends $Command
  .classBuilder<
    ListCompatibleImagesCommandInput,
    ListCompatibleImagesCommandOutput,
    SnowballClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SnowballClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIESnowballJobManagementService", "ListCompatibleImages", {})
  .n("SnowballClient", "ListCompatibleImagesCommand")
  .f(void 0, void 0)
  .ser(se_ListCompatibleImagesCommand)
  .de(de_ListCompatibleImagesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCompatibleImagesRequest;
      output: ListCompatibleImagesResult;
    };
    sdk: {
      input: ListCompatibleImagesCommandInput;
      output: ListCompatibleImagesCommandOutput;
    };
  };
}
