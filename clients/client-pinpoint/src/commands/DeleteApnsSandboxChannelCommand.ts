// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteApnsSandboxChannelRequest, DeleteApnsSandboxChannelResponse } from "../models/models_0";
import { DeleteApnsSandboxChannel$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteApnsSandboxChannelCommand}.
 */
export interface DeleteApnsSandboxChannelCommandInput extends DeleteApnsSandboxChannelRequest {}
/**
 * @public
 *
 * The output of {@link DeleteApnsSandboxChannelCommand}.
 */
export interface DeleteApnsSandboxChannelCommandOutput extends DeleteApnsSandboxChannelResponse, __MetadataBearer {}

/**
 * Disables the APNs sandbox channel for an application and deletes any existing settings for the channel.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, DeleteApnsSandboxChannelCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, DeleteApnsSandboxChannelCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * // import type { PinpointClientConfig } from "@aws-sdk/client-pinpoint";
 * const config = {}; // type is PinpointClientConfig
 * const client = new PinpointClient(config);
 * const input = { // DeleteApnsSandboxChannelRequest
 *   ApplicationId: "STRING_VALUE", // required
 * };
 * const command = new DeleteApnsSandboxChannelCommand(input);
 * const response = await client.send(command);
 * // { // DeleteApnsSandboxChannelResponse
 * //   APNSSandboxChannelResponse: { // APNSSandboxChannelResponse
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
 * @param DeleteApnsSandboxChannelCommandInput - {@link DeleteApnsSandboxChannelCommandInput}
 * @returns {@link DeleteApnsSandboxChannelCommandOutput}
 * @see {@link DeleteApnsSandboxChannelCommandInput} for command's `input` shape.
 * @see {@link DeleteApnsSandboxChannelCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for PinpointClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * Provides information about an API request or response.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * Provides information about an API request or response.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *
 * Provides information about an API request or response.
 *
 * @throws {@link MethodNotAllowedException} (client fault)
 *
 * Provides information about an API request or response.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * Provides information about an API request or response.
 *
 * @throws {@link PayloadTooLargeException} (client fault)
 *
 * Provides information about an API request or response.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * Provides information about an API request or response.
 *
 * @throws {@link PinpointServiceException}
 *
 * Base exception class for all service exceptions from Pinpoint service.
 *
 * @public
 */
export class DeleteApnsSandboxChannelCommand extends command<DeleteApnsSandboxChannelCommandInput, DeleteApnsSandboxChannelCommandOutput>(
  _ep0,
  _mw0,
  "DeleteApnsSandboxChannel",
  DeleteApnsSandboxChannel$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteApnsSandboxChannelRequest;
      output: DeleteApnsSandboxChannelResponse;
    };
    sdk: {
      input: DeleteApnsSandboxChannelCommandInput;
      output: DeleteApnsSandboxChannelCommandOutput;
    };
  };
}
