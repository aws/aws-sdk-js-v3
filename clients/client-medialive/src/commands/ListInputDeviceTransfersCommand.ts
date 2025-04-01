// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { ListInputDeviceTransfersRequest, ListInputDeviceTransfersResponse } from "../models/models_2";
import { de_ListInputDeviceTransfersCommand, se_ListInputDeviceTransfersCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListInputDeviceTransfersCommand}.
 */
export interface ListInputDeviceTransfersCommandInput extends ListInputDeviceTransfersRequest {}
/**
 * @public
 *
 * The output of {@link ListInputDeviceTransfersCommand}.
 */
export interface ListInputDeviceTransfersCommandOutput extends ListInputDeviceTransfersResponse, __MetadataBearer {}

/**
 * List input devices that are currently being transferred. List input devices that you are transferring from your AWS account or input devices that another AWS account is transferring to you.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, ListInputDeviceTransfersCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, ListInputDeviceTransfersCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const input = { // ListInputDeviceTransfersRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   TransferType: "STRING_VALUE", // required
 * };
 * const command = new ListInputDeviceTransfersCommand(input);
 * const response = await client.send(command);
 * // { // ListInputDeviceTransfersResponse
 * //   InputDeviceTransfers: [ // __listOfTransferringInputDeviceSummary
 * //     { // TransferringInputDeviceSummary
 * //       Id: "STRING_VALUE",
 * //       Message: "STRING_VALUE",
 * //       TargetCustomerId: "STRING_VALUE",
 * //       TransferType: "OUTGOING" || "INCOMING",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListInputDeviceTransfersCommandInput - {@link ListInputDeviceTransfersCommandInput}
 * @returns {@link ListInputDeviceTransfersCommandOutput}
 * @see {@link ListInputDeviceTransfersCommandInput} for command's `input` shape.
 * @see {@link ListInputDeviceTransfersCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for MediaLiveClient's `config` shape.
 *
 * @throws {@link BadGatewayException} (server fault)
 *  Placeholder documentation for BadGatewayException
 *
 * @throws {@link BadRequestException} (client fault)
 *  Placeholder documentation for BadRequestException
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
 * @throws {@link UnprocessableEntityException} (client fault)
 *  Placeholder documentation for UnprocessableEntityException
 *
 * @throws {@link MediaLiveServiceException}
 * <p>Base exception class for all service exceptions from MediaLive service.</p>
 *
 *
 * @public
 */
export class ListInputDeviceTransfersCommand extends $Command
  .classBuilder<
    ListInputDeviceTransfersCommandInput,
    ListInputDeviceTransfersCommandOutput,
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
  .s("MediaLive", "ListInputDeviceTransfers", {})
  .n("MediaLiveClient", "ListInputDeviceTransfersCommand")
  .f(void 0, void 0)
  .ser(se_ListInputDeviceTransfersCommand)
  .de(de_ListInputDeviceTransfersCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListInputDeviceTransfersRequest;
      output: ListInputDeviceTransfersResponse;
    };
    sdk: {
      input: ListInputDeviceTransfersCommandInput;
      output: ListInputDeviceTransfersCommandOutput;
    };
  };
}
