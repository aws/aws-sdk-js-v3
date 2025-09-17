// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { CreateNodeRegistrationScriptRequest, CreateNodeRegistrationScriptResponse } from "../models/models_2";
import {
  de_CreateNodeRegistrationScriptCommand,
  se_CreateNodeRegistrationScriptCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateNodeRegistrationScriptCommand}.
 */
export interface CreateNodeRegistrationScriptCommandInput extends CreateNodeRegistrationScriptRequest {}
/**
 * @public
 *
 * The output of {@link CreateNodeRegistrationScriptCommand}.
 */
export interface CreateNodeRegistrationScriptCommandOutput
  extends CreateNodeRegistrationScriptResponse,
    __MetadataBearer {}

/**
 * Create the Register Node script for all the nodes intended for a specific Cluster. You will then run the script on each hardware unit that is intended for that Cluster. The script creates a Node in the specified Cluster. It then binds the Node to this hardware unit, and activates the node hardware for use with MediaLive Anywhere.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, CreateNodeRegistrationScriptCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, CreateNodeRegistrationScriptCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * // import type { MediaLiveClientConfig } from "@aws-sdk/client-medialive";
 * const config = {}; // type is MediaLiveClientConfig
 * const client = new MediaLiveClient(config);
 * const input = { // CreateNodeRegistrationScriptRequest
 *   ClusterId: "STRING_VALUE", // required
 *   Id: "STRING_VALUE",
 *   Name: "STRING_VALUE",
 *   NodeInterfaceMappings: [ // __listOfNodeInterfaceMapping
 *     { // NodeInterfaceMapping
 *       LogicalInterfaceName: "STRING_VALUE",
 *       NetworkInterfaceMode: "NAT" || "BRIDGE",
 *       PhysicalInterfaceName: "STRING_VALUE",
 *     },
 *   ],
 *   RequestId: "STRING_VALUE",
 *   Role: "BACKUP" || "ACTIVE",
 * };
 * const command = new CreateNodeRegistrationScriptCommand(input);
 * const response = await client.send(command);
 * // { // CreateNodeRegistrationScriptResponse
 * //   NodeRegistrationScript: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateNodeRegistrationScriptCommandInput - {@link CreateNodeRegistrationScriptCommandInput}
 * @returns {@link CreateNodeRegistrationScriptCommandOutput}
 * @see {@link CreateNodeRegistrationScriptCommandInput} for command's `input` shape.
 * @see {@link CreateNodeRegistrationScriptCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for MediaLiveClient's `config` shape.
 *
 * @throws {@link BadGatewayException} (server fault)
 *  Placeholder documentation for BadGatewayException
 *
 * @throws {@link BadRequestException} (client fault)
 *  Placeholder documentation for BadRequestException
 *
 * @throws {@link ConflictException} (client fault)
 *  Placeholder documentation for ConflictException
 *
 * @throws {@link ForbiddenException} (client fault)
 *  Placeholder documentation for ForbiddenException
 *
 * @throws {@link GatewayTimeoutException} (server fault)
 *  Placeholder documentation for GatewayTimeoutException
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  Placeholder documentation for InternalServerErrorException
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  Placeholder documentation for TooManyRequestsException
 *
 * @throws {@link MediaLiveServiceException}
 * <p>Base exception class for all service exceptions from MediaLive service.</p>
 *
 *
 * @public
 */
export class CreateNodeRegistrationScriptCommand extends $Command
  .classBuilder<
    CreateNodeRegistrationScriptCommandInput,
    CreateNodeRegistrationScriptCommandOutput,
    MediaLiveClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaLiveClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MediaLive", "CreateNodeRegistrationScript", {})
  .n("MediaLiveClient", "CreateNodeRegistrationScriptCommand")
  .f(void 0, void 0)
  .ser(se_CreateNodeRegistrationScriptCommand)
  .de(de_CreateNodeRegistrationScriptCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateNodeRegistrationScriptRequest;
      output: CreateNodeRegistrationScriptResponse;
    };
    sdk: {
      input: CreateNodeRegistrationScriptCommandInput;
      output: CreateNodeRegistrationScriptCommandOutput;
    };
  };
}
