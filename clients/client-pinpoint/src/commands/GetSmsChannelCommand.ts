// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetSmsChannelRequest, GetSmsChannelResponse } from "../models/models_1";
import { GetSmsChannel$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetSmsChannelCommand}.
 */
export interface GetSmsChannelCommandInput extends GetSmsChannelRequest {}
/**
 * @public
 *
 * The output of {@link GetSmsChannelCommand}.
 */
export interface GetSmsChannelCommandOutput extends GetSmsChannelResponse, __MetadataBearer {}

/**
 * Retrieves information about the status and settings of the SMS channel for an application.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetSmsChannelCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetSmsChannelCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * // import type { PinpointClientConfig } from "@aws-sdk/client-pinpoint";
 * const config = {}; // type is PinpointClientConfig
 * const client = new PinpointClient(config);
 * const input = { // GetSmsChannelRequest
 *   ApplicationId: "STRING_VALUE", // required
 * };
 * const command = new GetSmsChannelCommand(input);
 * const response = await client.send(command);
 * // { // GetSmsChannelResponse
 * //   SMSChannelResponse: { // SMSChannelResponse
 * //     ApplicationId: "STRING_VALUE",
 * //     CreationDate: "STRING_VALUE",
 * //     Enabled: true || false,
 * //     HasCredential: true || false,
 * //     Id: "STRING_VALUE",
 * //     IsArchived: true || false,
 * //     LastModifiedBy: "STRING_VALUE",
 * //     LastModifiedDate: "STRING_VALUE",
 * //     Platform: "STRING_VALUE", // required
 * //     PromotionalMessagesPerSecond: Number("int"),
 * //     SenderId: "STRING_VALUE",
 * //     ShortCode: "STRING_VALUE",
 * //     TransactionalMessagesPerSecond: Number("int"),
 * //     Version: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetSmsChannelCommandInput - {@link GetSmsChannelCommandInput}
 * @returns {@link GetSmsChannelCommandOutput}
 * @see {@link GetSmsChannelCommandInput} for command's `input` shape.
 * @see {@link GetSmsChannelCommandOutput} for command's `response` shape.
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
export class GetSmsChannelCommand extends command<GetSmsChannelCommandInput, GetSmsChannelCommandOutput>(
  _ep0,
  _mw0,
  "GetSmsChannel",
  GetSmsChannel$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSmsChannelRequest;
      output: GetSmsChannelResponse;
    };
    sdk: {
      input: GetSmsChannelCommandInput;
      output: GetSmsChannelCommandOutput;
    };
  };
}
