// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteEmailChannelRequest, DeleteEmailChannelResponse } from "../models/models_0";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { DeleteEmailChannel } from "../schemas/schemas_37_Email";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteEmailChannelCommand}.
 */
export interface DeleteEmailChannelCommandInput extends DeleteEmailChannelRequest {}
/**
 * @public
 *
 * The output of {@link DeleteEmailChannelCommand}.
 */
export interface DeleteEmailChannelCommandOutput extends DeleteEmailChannelResponse, __MetadataBearer {}

/**
 * <p>Disables the email channel for an application and deletes any existing settings for the channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, DeleteEmailChannelCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, DeleteEmailChannelCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * // import type { PinpointClientConfig } from "@aws-sdk/client-pinpoint";
 * const config = {}; // type is PinpointClientConfig
 * const client = new PinpointClient(config);
 * const input = { // DeleteEmailChannelRequest
 *   ApplicationId: "STRING_VALUE", // required
 * };
 * const command = new DeleteEmailChannelCommand(input);
 * const response = await client.send(command);
 * // { // DeleteEmailChannelResponse
 * //   EmailChannelResponse: { // EmailChannelResponse
 * //     ApplicationId: "STRING_VALUE",
 * //     ConfigurationSet: "STRING_VALUE",
 * //     CreationDate: "STRING_VALUE",
 * //     Enabled: true || false,
 * //     FromAddress: "STRING_VALUE",
 * //     HasCredential: true || false,
 * //     Id: "STRING_VALUE",
 * //     Identity: "STRING_VALUE",
 * //     IsArchived: true || false,
 * //     LastModifiedBy: "STRING_VALUE",
 * //     LastModifiedDate: "STRING_VALUE",
 * //     MessagesPerSecond: Number("int"),
 * //     Platform: "STRING_VALUE", // required
 * //     RoleArn: "STRING_VALUE",
 * //     OrchestrationSendingRoleArn: "STRING_VALUE",
 * //     Version: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteEmailChannelCommandInput - {@link DeleteEmailChannelCommandInput}
 * @returns {@link DeleteEmailChannelCommandOutput}
 * @see {@link DeleteEmailChannelCommandInput} for command's `input` shape.
 * @see {@link DeleteEmailChannelCommandOutput} for command's `response` shape.
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
export class DeleteEmailChannelCommand extends $Command
  .classBuilder<
    DeleteEmailChannelCommandInput,
    DeleteEmailChannelCommandOutput,
    PinpointClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Pinpoint", "DeleteEmailChannel", {})
  .n("PinpointClient", "DeleteEmailChannelCommand")
  .sc(DeleteEmailChannel)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteEmailChannelRequest;
      output: DeleteEmailChannelResponse;
    };
    sdk: {
      input: DeleteEmailChannelCommandInput;
      output: DeleteEmailChannelCommandOutput;
    };
  };
}
