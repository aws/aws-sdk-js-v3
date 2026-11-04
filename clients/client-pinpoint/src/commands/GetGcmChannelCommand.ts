// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetGcmChannelRequest, GetGcmChannelResponse } from "../models/models_0";
import { GetGcmChannel$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetGcmChannelCommand}.
 */
export interface GetGcmChannelCommandInput extends GetGcmChannelRequest {}
/**
 * @public
 *
 * The output of {@link GetGcmChannelCommand}.
 */
export interface GetGcmChannelCommandOutput extends GetGcmChannelResponse, __MetadataBearer {}

/**
 * Retrieves information about the status and settings of the GCM channel for an application.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetGcmChannelCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetGcmChannelCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * // import type { PinpointClientConfig } from "@aws-sdk/client-pinpoint";
 * const config = {}; // type is PinpointClientConfig
 * const client = new PinpointClient(config);
 * const input = { // GetGcmChannelRequest
 *   ApplicationId: "STRING_VALUE", // required
 * };
 * const command = new GetGcmChannelCommand(input);
 * const response = await client.send(command);
 * // { // GetGcmChannelResponse
 * //   GCMChannelResponse: { // GCMChannelResponse
 * //     ApplicationId: "STRING_VALUE",
 * //     CreationDate: "STRING_VALUE",
 * //     Credential: "STRING_VALUE",
 * //     DefaultAuthenticationMethod: "STRING_VALUE",
 * //     Enabled: true || false,
 * //     HasCredential: true || false,
 * //     HasFcmServiceCredentials: true || false,
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
 * @param GetGcmChannelCommandInput - {@link GetGcmChannelCommandInput}
 * @returns {@link GetGcmChannelCommandOutput}
 * @see {@link GetGcmChannelCommandInput} for command's `input` shape.
 * @see {@link GetGcmChannelCommandOutput} for command's `response` shape.
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
export class GetGcmChannelCommand extends command<GetGcmChannelCommandInput, GetGcmChannelCommandOutput>(
  _ep0,
  _mw0,
  "GetGcmChannel",
  GetGcmChannel$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetGcmChannelRequest;
      output: GetGcmChannelResponse;
    };
    sdk: {
      input: GetGcmChannelCommandInput;
      output: GetGcmChannelCommandOutput;
    };
  };
}
