// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaPackageClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaPackageClient";
import {
  DescribeChannelRequest,
  DescribeChannelResponse,
  DescribeChannelResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_DescribeChannelCommand, se_DescribeChannelCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeChannelCommand}.
 */
export interface DescribeChannelCommandInput extends DescribeChannelRequest {}
/**
 * @public
 *
 * The output of {@link DescribeChannelCommand}.
 */
export interface DescribeChannelCommandOutput extends DescribeChannelResponse, __MetadataBearer {}

/**
 * Gets details about a Channel.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageClient, DescribeChannelCommand } from "@aws-sdk/client-mediapackage"; // ES Modules import
 * // const { MediaPackageClient, DescribeChannelCommand } = require("@aws-sdk/client-mediapackage"); // CommonJS import
 * const client = new MediaPackageClient(config);
 * const input = { // DescribeChannelRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new DescribeChannelCommand(input);
 * const response = await client.send(command);
 * // { // DescribeChannelResponse
 * //   Arn: "STRING_VALUE",
 * //   CreatedAt: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   EgressAccessLogs: { // EgressAccessLogs
 * //     LogGroupName: "STRING_VALUE",
 * //   },
 * //   HlsIngest: { // HlsIngest
 * //     IngestEndpoints: [ // __listOfIngestEndpoint
 * //       { // IngestEndpoint
 * //         Id: "STRING_VALUE",
 * //         Password: "STRING_VALUE",
 * //         Url: "STRING_VALUE",
 * //         Username: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * //   Id: "STRING_VALUE",
 * //   IngressAccessLogs: { // IngressAccessLogs
 * //     LogGroupName: "STRING_VALUE",
 * //   },
 * //   Tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeChannelCommandInput - {@link DescribeChannelCommandInput}
 * @returns {@link DescribeChannelCommandOutput}
 * @see {@link DescribeChannelCommandInput} for command's `input` shape.
 * @see {@link DescribeChannelCommandOutput} for command's `response` shape.
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
export class DescribeChannelCommand extends $Command
  .classBuilder<
    DescribeChannelCommandInput,
    DescribeChannelCommandOutput,
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
  .s("MediaPackage", "DescribeChannel", {})
  .n("MediaPackageClient", "DescribeChannelCommand")
  .f(void 0, DescribeChannelResponseFilterSensitiveLog)
  .ser(se_DescribeChannelCommand)
  .de(de_DescribeChannelCommand)
  .build() {}
