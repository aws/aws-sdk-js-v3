// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaPackageV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaPackageV2Client";
import { CreateChannelRequest, CreateChannelResponse } from "../models/models_0";
import { de_CreateChannelCommand, se_CreateChannelCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateChannelCommand}.
 */
export interface CreateChannelCommandInput extends CreateChannelRequest {}
/**
 * @public
 *
 * The output of {@link CreateChannelCommand}.
 */
export interface CreateChannelCommandOutput extends CreateChannelResponse, __MetadataBearer {}

/**
 * <p>Create a channel to start receiving content streams. The channel represents the input to MediaPackage for incoming live content from an encoder such as AWS Elemental MediaLive. The channel receives content, and after packaging it, outputs it through an origin endpoint to downstream devices (such as video players or CDNs) that request the content. You can create only one channel with each request. We recommend that you spread out channels between channel groups, such as putting redundant channels in the same AWS Region in different channel groups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageV2Client, CreateChannelCommand } from "@aws-sdk/client-mediapackagev2"; // ES Modules import
 * // const { MediaPackageV2Client, CreateChannelCommand } = require("@aws-sdk/client-mediapackagev2"); // CommonJS import
 * const client = new MediaPackageV2Client(config);
 * const input = { // CreateChannelRequest
 *   ChannelGroupName: "STRING_VALUE", // required
 *   ChannelName: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateChannelCommand(input);
 * const response = await client.send(command);
 * // { // CreateChannelResponse
 * //   Arn: "STRING_VALUE", // required
 * //   ChannelName: "STRING_VALUE", // required
 * //   ChannelGroupName: "STRING_VALUE", // required
 * //   CreatedAt: new Date("TIMESTAMP"), // required
 * //   ModifiedAt: new Date("TIMESTAMP"), // required
 * //   Description: "STRING_VALUE",
 * //   IngestEndpoints: [ // IngestEndpointList
 * //     { // IngestEndpoint
 * //       Id: "STRING_VALUE",
 * //       Url: "STRING_VALUE",
 * //     },
 * //   ],
 * //   ETag: "STRING_VALUE",
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateChannelCommandInput - {@link CreateChannelCommandInput}
 * @returns {@link CreateChannelCommandOutput}
 * @see {@link CreateChannelCommandInput} for command's `input` shape.
 * @see {@link CreateChannelCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageV2ClientResolvedConfig | config} for MediaPackageV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permissions to perform the requested operation. The user or role that is making the request must have at least one IAM permissions policy attached that grants the required permissions. For more information, see Access Management in the IAM User Guide.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting this resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Indicates that an error from the service occurred while trying to process a request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource doesn't exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would cause a service quota to be exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request throughput limit was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to meet the constraints specified by the AWS service.</p>
 *
 * @throws {@link MediaPackageV2ServiceException}
 * <p>Base exception class for all service exceptions from MediaPackageV2 service.</p>
 *
 * @public
 */
export class CreateChannelCommand extends $Command
  .classBuilder<
    CreateChannelCommandInput,
    CreateChannelCommandOutput,
    MediaPackageV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: MediaPackageV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("mediapackagev2", "CreateChannel", {})
  .n("MediaPackageV2Client", "CreateChannelCommand")
  .f(void 0, void 0)
  .ser(se_CreateChannelCommand)
  .de(de_CreateChannelCommand)
  .build() {}
