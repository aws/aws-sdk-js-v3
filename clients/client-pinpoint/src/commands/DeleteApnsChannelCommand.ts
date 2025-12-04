// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteApnsChannelRequest, DeleteApnsChannelResponse } from "../models/models_0";
import type { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { DeleteApnsChannel } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteApnsChannelCommand}.
 */
export interface DeleteApnsChannelCommandInput extends DeleteApnsChannelRequest {}
/**
 * @public
 *
 * The output of {@link DeleteApnsChannelCommand}.
 */
export interface DeleteApnsChannelCommandOutput extends DeleteApnsChannelResponse, __MetadataBearer {}

/**
 * <p>Disables the APNs channel for an application and deletes any existing settings for the channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, DeleteApnsChannelCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, DeleteApnsChannelCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * // import type { PinpointClientConfig } from "@aws-sdk/client-pinpoint";
 * const config = {}; // type is PinpointClientConfig
 * const client = new PinpointClient(config);
 * const input = { // DeleteApnsChannelRequest
 *   ApplicationId: "STRING_VALUE", // required
 * };
 * const command = new DeleteApnsChannelCommand(input);
 * const response = await client.send(command);
 * // { // DeleteApnsChannelResponse
 * //   APNSChannelResponse: { // APNSChannelResponse
 * //     ApplicationId: "STRING_VALUE",
 * //     CreationDate: "STRING_VALUE",
 * //     DefaultAuthenticationMethod: "STRING_VALUE",
 * //     Enabled: true || false,
 * //     HasCredential: true || false,
 * //     HasTokenKey: true || false,
 * //     Id: "STRING_VALUE",
 * //     IsArchived: true || false,
 * //     LastModifiedBy: "STRING_VALUE",
 * //     LastModifiedDate: "STRING_VALUE",
 * //     Platform: "STRING_VALUE", // required
 * //     Version: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteApnsChannelCommandInput - {@link DeleteApnsChannelCommandInput}
 * @returns {@link DeleteApnsChannelCommandOutput}
 * @see {@link DeleteApnsChannelCommandInput} for command's `input` shape.
 * @see {@link DeleteApnsChannelCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for PinpointClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link MethodNotAllowedException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link PayloadTooLargeException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link PinpointServiceException}
 * <p>Base exception class for all service exceptions from Pinpoint service.</p>
 *
 *
 * @public
 */
export class DeleteApnsChannelCommand extends $Command
  .classBuilder<
    DeleteApnsChannelCommandInput,
    DeleteApnsChannelCommandOutput,
    PinpointClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Pinpoint", "DeleteApnsChannel", {})
  .n("PinpointClient", "DeleteApnsChannelCommand")
  .sc(DeleteApnsChannel)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteApnsChannelRequest;
      output: DeleteApnsChannelResponse;
    };
    sdk: {
      input: DeleteApnsChannelCommandInput;
      output: DeleteApnsChannelCommandOutput;
    };
  };
}
