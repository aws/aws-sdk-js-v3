// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetEmailChannelRequest, GetEmailChannelResponse } from "../models/models_1";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { de_GetEmailChannelCommand, se_GetEmailChannelCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetEmailChannelCommand}.
 */
export interface GetEmailChannelCommandInput extends GetEmailChannelRequest {}
/**
 * @public
 *
 * The output of {@link GetEmailChannelCommand}.
 */
export interface GetEmailChannelCommandOutput extends GetEmailChannelResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about the status and settings of the email channel for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetEmailChannelCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetEmailChannelCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * // import type { PinpointClientConfig } from "@aws-sdk/client-pinpoint";
 * const config = {}; // type is PinpointClientConfig
 * const client = new PinpointClient(config);
 * const input = { // GetEmailChannelRequest
 *   ApplicationId: "STRING_VALUE", // required
 * };
 * const command = new GetEmailChannelCommand(input);
 * const response = await client.send(command);
 * // { // GetEmailChannelResponse
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
 * @param GetEmailChannelCommandInput - {@link GetEmailChannelCommandInput}
 * @returns {@link GetEmailChannelCommandOutput}
 * @see {@link GetEmailChannelCommandInput} for command's `input` shape.
 * @see {@link GetEmailChannelCommandOutput} for command's `response` shape.
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
export class GetEmailChannelCommand extends $Command
  .classBuilder<
    GetEmailChannelCommandInput,
    GetEmailChannelCommandOutput,
    PinpointClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Pinpoint", "GetEmailChannel", {})
  .n("PinpointClient", "GetEmailChannelCommand")
  .f(void 0, void 0)
  .ser(se_GetEmailChannelCommand)
  .de(de_GetEmailChannelCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetEmailChannelRequest;
      output: GetEmailChannelResponse;
    };
    sdk: {
      input: GetEmailChannelCommandInput;
      output: GetEmailChannelCommandOutput;
    };
  };
}
