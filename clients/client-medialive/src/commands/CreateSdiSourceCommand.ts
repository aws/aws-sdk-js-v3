// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { CreateSdiSourceRequest, CreateSdiSourceResponse } from "../models/models_2";
import { de_CreateSdiSourceCommand, se_CreateSdiSourceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateSdiSourceCommand}.
 */
export interface CreateSdiSourceCommandInput extends CreateSdiSourceRequest {}
/**
 * @public
 *
 * The output of {@link CreateSdiSourceCommand}.
 */
export interface CreateSdiSourceCommandOutput extends CreateSdiSourceResponse, __MetadataBearer {}

/**
 * Create an SdiSource for each video source that uses the SDI protocol. You will reference the SdiSource when you create an SDI input in MediaLive. You will also reference it in an SdiSourceMapping, in order to create a connection between the logical SdiSource and the physical SDI card and port that the physical SDI source uses.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, CreateSdiSourceCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, CreateSdiSourceCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const input = { // CreateSdiSourceRequest
 *   Mode: "QUADRANT" || "INTERLEAVE",
 *   Name: "STRING_VALUE",
 *   RequestId: "STRING_VALUE",
 *   Tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 *   Type: "SINGLE" || "QUAD",
 * };
 * const command = new CreateSdiSourceCommand(input);
 * const response = await client.send(command);
 * // { // CreateSdiSourceResponse
 * //   SdiSource: { // SdiSource
 * //     Arn: "STRING_VALUE",
 * //     Id: "STRING_VALUE",
 * //     Inputs: [ // __listOf__string
 * //       "STRING_VALUE",
 * //     ],
 * //     Mode: "QUADRANT" || "INTERLEAVE",
 * //     Name: "STRING_VALUE",
 * //     State: "IDLE" || "IN_USE" || "DELETED",
 * //     Type: "SINGLE" || "QUAD",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateSdiSourceCommandInput - {@link CreateSdiSourceCommandInput}
 * @returns {@link CreateSdiSourceCommandOutput}
 * @see {@link CreateSdiSourceCommandInput} for command's `input` shape.
 * @see {@link CreateSdiSourceCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for MediaLiveClient's `config` shape.
 *
 * @throws {@link BadGatewayException} (server fault)
 *  Placeholder documentation for BadGatewayException
 *
 * @throws {@link BadRequestException} (client fault)
 *  Placeholder documentation for BadRequestException
 *
 * @throws {@link ConflictException} (client fault)
 *  Placeholder documentation for ConflictException
 *
 * @throws {@link ForbiddenException} (client fault)
 *  Placeholder documentation for ForbiddenException
 *
 * @throws {@link GatewayTimeoutException} (server fault)
 *  Placeholder documentation for GatewayTimeoutException
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  Placeholder documentation for InternalServerErrorException
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  Placeholder documentation for TooManyRequestsException
 *
 * @throws {@link MediaLiveServiceException}
 * <p>Base exception class for all service exceptions from MediaLive service.</p>
 *
 *
 * @public
 */
export class CreateSdiSourceCommand extends $Command
  .classBuilder<
    CreateSdiSourceCommandInput,
    CreateSdiSourceCommandOutput,
    MediaLiveClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaLiveClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MediaLive", "CreateSdiSource", {})
  .n("MediaLiveClient", "CreateSdiSourceCommand")
  .f(void 0, void 0)
  .ser(se_CreateSdiSourceCommand)
  .de(de_CreateSdiSourceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSdiSourceRequest;
      output: CreateSdiSourceResponse;
    };
    sdk: {
      input: CreateSdiSourceCommandInput;
      output: CreateSdiSourceCommandOutput;
    };
  };
}
