// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaPackageClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaPackageClient";
import { DescribeHarvestJobRequest, DescribeHarvestJobResponse } from "../models/models_0";
import { de_DescribeHarvestJobCommand, se_DescribeHarvestJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeHarvestJobCommand}.
 */
export interface DescribeHarvestJobCommandInput extends DescribeHarvestJobRequest {}
/**
 * @public
 *
 * The output of {@link DescribeHarvestJobCommand}.
 */
export interface DescribeHarvestJobCommandOutput extends DescribeHarvestJobResponse, __MetadataBearer {}

/**
 * Gets details about an existing HarvestJob.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageClient, DescribeHarvestJobCommand } from "@aws-sdk/client-mediapackage"; // ES Modules import
 * // const { MediaPackageClient, DescribeHarvestJobCommand } = require("@aws-sdk/client-mediapackage"); // CommonJS import
 * const client = new MediaPackageClient(config);
 * const input = { // DescribeHarvestJobRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new DescribeHarvestJobCommand(input);
 * const response = await client.send(command);
 * // { // DescribeHarvestJobResponse
 * //   Arn: "STRING_VALUE",
 * //   ChannelId: "STRING_VALUE",
 * //   CreatedAt: "STRING_VALUE",
 * //   EndTime: "STRING_VALUE",
 * //   Id: "STRING_VALUE",
 * //   OriginEndpointId: "STRING_VALUE",
 * //   S3Destination: { // S3Destination
 * //     BucketName: "STRING_VALUE", // required
 * //     ManifestKey: "STRING_VALUE", // required
 * //     RoleArn: "STRING_VALUE", // required
 * //   },
 * //   StartTime: "STRING_VALUE",
 * //   Status: "IN_PROGRESS" || "SUCCEEDED" || "FAILED",
 * // };
 *
 * ```
 *
 * @param DescribeHarvestJobCommandInput - {@link DescribeHarvestJobCommandInput}
 * @returns {@link DescribeHarvestJobCommandOutput}
 * @see {@link DescribeHarvestJobCommandInput} for command's `input` shape.
 * @see {@link DescribeHarvestJobCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageClientResolvedConfig | config} for MediaPackageClient's `config` shape.
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
 * @throws {@link MediaPackageServiceException}
 * <p>Base exception class for all service exceptions from MediaPackage service.</p>
 *
 * @public
 */
export class DescribeHarvestJobCommand extends $Command
  .classBuilder<
    DescribeHarvestJobCommandInput,
    DescribeHarvestJobCommandOutput,
    MediaPackageClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: MediaPackageClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MediaPackage", "DescribeHarvestJob", {})
  .n("MediaPackageClient", "DescribeHarvestJobCommand")
  .f(void 0, void 0)
  .ser(se_DescribeHarvestJobCommand)
  .de(de_DescribeHarvestJobCommand)
  .build() {}
