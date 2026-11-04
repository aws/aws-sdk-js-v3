// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteAdmChannelRequest, DeleteAdmChannelResponse } from "../models/models_0";
import { DeleteAdmChannel$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteAdmChannelCommand}.
 */
export interface DeleteAdmChannelCommandInput extends DeleteAdmChannelRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAdmChannelCommand}.
 */
export interface DeleteAdmChannelCommandOutput extends DeleteAdmChannelResponse, __MetadataBearer {}

/**
 * Disables the ADM channel for an application and deletes any existing settings for the channel.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, DeleteAdmChannelCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, DeleteAdmChannelCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * // import type { PinpointClientConfig } from "@aws-sdk/client-pinpoint";
 * const config = {}; // type is PinpointClientConfig
 * const client = new PinpointClient(config);
 * const input = { // DeleteAdmChannelRequest
 *   ApplicationId: "STRING_VALUE", // required
 * };
 * const command = new DeleteAdmChannelCommand(input);
 * const response = await client.send(command);
 * // { // DeleteAdmChannelResponse
 * //   ADMChannelResponse: { // ADMChannelResponse
 * //     ApplicationId: "STRING_VALUE",
 * //     CreationDate: "STRING_VALUE",
 * //     Enabled: true || false,
 * //     HasCredential: true || false,
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
 * @param DeleteAdmChannelCommandInput - {@link DeleteAdmChannelCommandInput}
 * @returns {@link DeleteAdmChannelCommandOutput}
 * @see {@link DeleteAdmChannelCommandInput} for command's `input` shape.
 * @see {@link DeleteAdmChannelCommandOutput} for command's `response` shape.
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
export class DeleteAdmChannelCommand extends command<DeleteAdmChannelCommandInput, DeleteAdmChannelCommandOutput>(
  _ep0,
  _mw0,
  "DeleteAdmChannel",
  DeleteAdmChannel$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAdmChannelRequest;
      output: DeleteAdmChannelResponse;
    };
    sdk: {
      input: DeleteAdmChannelCommandInput;
      output: DeleteAdmChannelCommandOutput;
    };
  };
}
