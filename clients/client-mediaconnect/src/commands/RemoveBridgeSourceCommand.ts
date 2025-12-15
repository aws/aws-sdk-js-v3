// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import type { RemoveBridgeSourceRequest, RemoveBridgeSourceResponse } from "../models/models_0";
import { RemoveBridgeSource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RemoveBridgeSourceCommand}.
 */
export interface RemoveBridgeSourceCommandInput extends RemoveBridgeSourceRequest {}
/**
 * @public
 *
 * The output of {@link RemoveBridgeSourceCommand}.
 */
export interface RemoveBridgeSourceCommandOutput extends RemoveBridgeSourceResponse, __MetadataBearer {}

/**
 * <p> Removes a source from a bridge.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, RemoveBridgeSourceCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, RemoveBridgeSourceCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * // import type { MediaConnectClientConfig } from "@aws-sdk/client-mediaconnect";
 * const config = {}; // type is MediaConnectClientConfig
 * const client = new MediaConnectClient(config);
 * const input = { // RemoveBridgeSourceRequest
 *   BridgeArn: "STRING_VALUE", // required
 *   SourceName: "STRING_VALUE", // required
 * };
 * const command = new RemoveBridgeSourceCommand(input);
 * const response = await client.send(command);
 * // { // RemoveBridgeSourceResponse
 * //   BridgeArn: "STRING_VALUE",
 * //   SourceName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RemoveBridgeSourceCommandInput - {@link RemoveBridgeSourceCommandInput}
 * @returns {@link RemoveBridgeSourceCommandOutput}
 * @see {@link RemoveBridgeSourceCommandInput} for command's `input` shape.
 * @see {@link RemoveBridgeSourceCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for MediaConnectClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>This exception is thrown if the request contains a semantic error. The precise meaning depends on the API, and is documented in the error message. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The requested operation would cause a conflict with the current state of a service resource associated with the request. Resolve the conflict before retrying this request. </p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>You do not have sufficient access to perform this action. </p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>The server encountered an internal error and is unable to complete the request. </p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>One or more of the resources in the request does not exist in the system. </p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable or busy. </p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request was denied due to request throttling. </p>
 *
 * @throws {@link MediaConnectServiceException}
 * <p>Base exception class for all service exceptions from MediaConnect service.</p>
 *
 *
 * @public
 */
export class RemoveBridgeSourceCommand extends $Command
  .classBuilder<
    RemoveBridgeSourceCommandInput,
    RemoveBridgeSourceCommandOutput,
    MediaConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaConnect", "RemoveBridgeSource", {})
  .n("MediaConnectClient", "RemoveBridgeSourceCommand")
  .sc(RemoveBridgeSource$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RemoveBridgeSourceRequest;
      output: RemoveBridgeSourceResponse;
    };
    sdk: {
      input: RemoveBridgeSourceCommandInput;
      output: RemoveBridgeSourceCommandOutput;
    };
  };
}
