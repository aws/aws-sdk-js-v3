// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetRouterInputThumbnailRequest, GetRouterInputThumbnailResponse } from "../models/models_1";
import { GetRouterInputThumbnail$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetRouterInputThumbnailCommand}.
 */
export interface GetRouterInputThumbnailCommandInput extends GetRouterInputThumbnailRequest {}
/**
 * @public
 *
 * The output of {@link GetRouterInputThumbnailCommand}.
 */
export interface GetRouterInputThumbnailCommandOutput extends GetRouterInputThumbnailResponse, __MetadataBearer {}

/**
 * Retrieves the thumbnail for a router input in AWS Elemental MediaConnect.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, GetRouterInputThumbnailCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, GetRouterInputThumbnailCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * // import type { MediaConnectClientConfig } from "@aws-sdk/client-mediaconnect";
 * const config = {}; // type is MediaConnectClientConfig
 * const client = new MediaConnectClient(config);
 * const input = { // GetRouterInputThumbnailRequest
 *   Arn: "STRING_VALUE", // required
 * };
 * const command = new GetRouterInputThumbnailCommand(input);
 * const response = await client.send(command);
 * // { // GetRouterInputThumbnailResponse
 * //   Arn: "STRING_VALUE", // required
 * //   Name: "STRING_VALUE", // required
 * //   ThumbnailDetails: { // RouterInputThumbnailDetails
 * //     ThumbnailMessages: [ // RouterInputMessages // required
 * //       { // RouterInputMessage
 * //         Code: "STRING_VALUE", // required
 * //         Message: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     Thumbnail: new Uint8Array(),
 * //     Timecode: "STRING_VALUE",
 * //     Timestamp: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetRouterInputThumbnailCommandInput - {@link GetRouterInputThumbnailCommandInput}
 * @returns {@link GetRouterInputThumbnailCommandOutput}
 * @see {@link GetRouterInputThumbnailCommandInput} for command's `input` shape.
 * @see {@link GetRouterInputThumbnailCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for MediaConnectClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * This exception is thrown if the request contains a semantic error. The precise meaning depends on the API, and is documented in the error message.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *
 * The server encountered an internal error and is unable to complete the request.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * One or more of the resources in the request does not exist in the system.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is currently unavailable or busy.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link MediaConnectServiceException}
 *
 * Base exception class for all service exceptions from MediaConnect service.
 *
 * @public
 */
export class GetRouterInputThumbnailCommand extends command<GetRouterInputThumbnailCommandInput, GetRouterInputThumbnailCommandOutput>(
  _ep0,
  _mw0,
  "GetRouterInputThumbnail",
  GetRouterInputThumbnail$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRouterInputThumbnailRequest;
      output: GetRouterInputThumbnailResponse;
    };
    sdk: {
      input: GetRouterInputThumbnailCommandInput;
      output: GetRouterInputThumbnailCommandOutput;
    };
  };
}
