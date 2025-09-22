// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateEmailChannelRequest, UpdateEmailChannelResponse } from "../models/models_1";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { UpdateEmailChannel } from "../schemas/schemas_37_Email";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateEmailChannelCommand}.
 */
export interface UpdateEmailChannelCommandInput extends UpdateEmailChannelRequest {}
/**
 * @public
 *
 * The output of {@link UpdateEmailChannelCommand}.
 */
export interface UpdateEmailChannelCommandOutput extends UpdateEmailChannelResponse, __MetadataBearer {}

/**
 * <p>Enables the email channel for an application or updates the status and settings of the email channel for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, UpdateEmailChannelCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, UpdateEmailChannelCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * // import type { PinpointClientConfig } from "@aws-sdk/client-pinpoint";
 * const config = {}; // type is PinpointClientConfig
 * const client = new PinpointClient(config);
 * const input = { // UpdateEmailChannelRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   EmailChannelRequest: { // EmailChannelRequest
 *     ConfigurationSet: "STRING_VALUE",
 *     Enabled: true || false,
 *     FromAddress: "STRING_VALUE", // required
 *     Identity: "STRING_VALUE", // required
 *     RoleArn: "STRING_VALUE",
 *     OrchestrationSendingRoleArn: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateEmailChannelCommand(input);
 * const response = await client.send(command);
 * // { // UpdateEmailChannelResponse
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
 * @param UpdateEmailChannelCommandInput - {@link UpdateEmailChannelCommandInput}
 * @returns {@link UpdateEmailChannelCommandOutput}
 * @see {@link UpdateEmailChannelCommandInput} for command's `input` shape.
 * @see {@link UpdateEmailChannelCommandOutput} for command's `response` shape.
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
export class UpdateEmailChannelCommand extends $Command
  .classBuilder<
    UpdateEmailChannelCommandInput,
    UpdateEmailChannelCommandOutput,
    PinpointClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Pinpoint", "UpdateEmailChannel", {})
  .n("PinpointClient", "UpdateEmailChannelCommand")
  .sc(UpdateEmailChannel)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateEmailChannelRequest;
      output: UpdateEmailChannelResponse;
    };
    sdk: {
      input: UpdateEmailChannelCommandInput;
      output: UpdateEmailChannelCommandOutput;
    };
  };
}
