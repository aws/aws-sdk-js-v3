// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaPackageVodClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaPackageVodClient";
import { DescribeAssetRequest, DescribeAssetResponse } from "../models/models_0";
import { de_DescribeAssetCommand, se_DescribeAssetCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAssetCommand}.
 */
export interface DescribeAssetCommandInput extends DescribeAssetRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAssetCommand}.
 */
export interface DescribeAssetCommandOutput extends DescribeAssetResponse, __MetadataBearer {}

/**
 * Returns a description of a MediaPackage VOD Asset resource.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageVodClient, DescribeAssetCommand } from "@aws-sdk/client-mediapackage-vod"; // ES Modules import
 * // const { MediaPackageVodClient, DescribeAssetCommand } = require("@aws-sdk/client-mediapackage-vod"); // CommonJS import
 * const client = new MediaPackageVodClient(config);
 * const input = { // DescribeAssetRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new DescribeAssetCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAssetResponse
 * //   Arn: "STRING_VALUE",
 * //   CreatedAt: "STRING_VALUE",
 * //   EgressEndpoints: [ // __listOfEgressEndpoint
 * //     { // EgressEndpoint
 * //       PackagingConfigurationId: "STRING_VALUE",
 * //       Status: "STRING_VALUE",
 * //       Url: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Id: "STRING_VALUE",
 * //   PackagingGroupId: "STRING_VALUE",
 * //   ResourceId: "STRING_VALUE",
 * //   SourceArn: "STRING_VALUE",
 * //   SourceRoleArn: "STRING_VALUE",
 * //   Tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeAssetCommandInput - {@link DescribeAssetCommandInput}
 * @returns {@link DescribeAssetCommandOutput}
 * @see {@link DescribeAssetCommandInput} for command's `input` shape.
 * @see {@link DescribeAssetCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageVodClientResolvedConfig | config} for MediaPackageVodClient's `config` shape.
 *
 * @throws {@link ForbiddenException} (client fault)
 *  The client is not authorized to access the requested resource.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  An unexpected error occurred.
 *
 * @throws {@link NotFoundException} (client fault)
 *  The requested resource does not exist.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  An unexpected error occurred.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  The client has exceeded their resource or throttling limits.
 *
 * @throws {@link UnprocessableEntityException} (client fault)
 *  The parameters sent in the request are not valid.
 *
 * @throws {@link MediaPackageVodServiceException}
 * <p>Base exception class for all service exceptions from MediaPackageVod service.</p>
 *
 * @public
 */
export class DescribeAssetCommand extends $Command
  .classBuilder<
    DescribeAssetCommandInput,
    DescribeAssetCommandOutput,
    MediaPackageVodClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: MediaPackageVodClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MediaPackageVod", "DescribeAsset", {})
  .n("MediaPackageVodClient", "DescribeAssetCommand")
  .f(void 0, void 0)
  .ser(se_DescribeAssetCommand)
  .de(de_DescribeAssetCommand)
  .build() {}
