// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateAdmChannelRequest, UpdateAdmChannelResponse } from "../models/models_1";
import { UpdateAdmChannel$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateAdmChannelCommand}.
 */
export interface UpdateAdmChannelCommandInput extends UpdateAdmChannelRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAdmChannelCommand}.
 */
export interface UpdateAdmChannelCommandOutput extends UpdateAdmChannelResponse, __MetadataBearer {}

/**
 * <p>Enables the ADM channel for an application or updates the status and settings of the ADM channel for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, UpdateAdmChannelCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, UpdateAdmChannelCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * // import type { PinpointClientConfig } from "@aws-sdk/client-pinpoint";
 * const config = {}; // type is PinpointClientConfig
 * const client = new PinpointClient(config);
 * const input = { // UpdateAdmChannelRequest
 *   ADMChannelRequest: { // ADMChannelRequest
 *     ClientId: "STRING_VALUE", // required
 *     ClientSecret: "STRING_VALUE", // required
 *     Enabled: true || false,
 *   },
 *   ApplicationId: "STRING_VALUE", // required
 * };
 * const command = new UpdateAdmChannelCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAdmChannelResponse
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
 * @param UpdateAdmChannelCommandInput - {@link UpdateAdmChannelCommandInput}
 * @returns {@link UpdateAdmChannelCommandOutput}
 * @see {@link UpdateAdmChannelCommandInput} for command's `input` shape.
 * @see {@link UpdateAdmChannelCommandOutput} for command's `response` shape.
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
export class UpdateAdmChannelCommand extends command<UpdateAdmChannelCommandInput, UpdateAdmChannelCommandOutput>(
  _ep0,
  _mw0,
  "UpdateAdmChannel",
  UpdateAdmChannel$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAdmChannelRequest;
      output: UpdateAdmChannelResponse;
    };
    sdk: {
      input: UpdateAdmChannelCommandInput;
      output: UpdateAdmChannelCommandOutput;
    };
  };
}
