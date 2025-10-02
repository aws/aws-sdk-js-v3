// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetContainerAPIMetadataRequest, GetContainerAPIMetadataResult } from "../models/models_0";
import { de_GetContainerAPIMetadataCommand, se_GetContainerAPIMetadataCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetContainerAPIMetadataCommand}.
 */
export interface GetContainerAPIMetadataCommandInput extends GetContainerAPIMetadataRequest {}
/**
 * @public
 *
 * The output of {@link GetContainerAPIMetadataCommand}.
 */
export interface GetContainerAPIMetadataCommandOutput extends GetContainerAPIMetadataResult, __MetadataBearer {}

/**
 * <p>Returns information about Amazon Lightsail containers, such as the current version of the
 *       Lightsail Control (lightsailctl) plugin.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetContainerAPIMetadataCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetContainerAPIMetadataCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * // import type { LightsailClientConfig } from "@aws-sdk/client-lightsail";
 * const config = {}; // type is LightsailClientConfig
 * const client = new LightsailClient(config);
 * const input = {};
 * const command = new GetContainerAPIMetadataCommand(input);
 * const response = await client.send(command);
 * // { // GetContainerAPIMetadataResult
 * //   metadata: [ // ContainerServiceMetadataEntryList
 * //     { // ContainerServiceMetadataEntry
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetContainerAPIMetadataCommandInput - {@link GetContainerAPIMetadataCommandInput}
 * @returns {@link GetContainerAPIMetadataCommandOutput}
 * @see {@link GetContainerAPIMetadataCommandInput} for command's `input` shape.
 * @see {@link GetContainerAPIMetadataCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid
 *       credentials to access a resource.</p>
 *
 * @throws {@link RegionSetupInProgressException} (client fault)
 *  <p>Lightsail throws this exception when an operation is performed on resources in an opt-in
 *       Region that is currently being set up.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>A general service exception.</p>
 *
 * @throws {@link UnauthenticatedException} (client fault)
 *  <p>Lightsail throws this exception when the user has not been authenticated.</p>
 *
 * @throws {@link LightsailServiceException}
 * <p>Base exception class for all service exceptions from Lightsail service.</p>
 *
 *
 * @public
 */
export class GetContainerAPIMetadataCommand extends $Command
  .classBuilder<
    GetContainerAPIMetadataCommandInput,
    GetContainerAPIMetadataCommandOutput,
    LightsailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LightsailClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Lightsail_20161128", "GetContainerAPIMetadata", {})
  .n("LightsailClient", "GetContainerAPIMetadataCommand")
  .f(void 0, void 0)
  .ser(se_GetContainerAPIMetadataCommand)
  .de(de_GetContainerAPIMetadataCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetContainerAPIMetadataResult;
    };
    sdk: {
      input: GetContainerAPIMetadataCommandInput;
      output: GetContainerAPIMetadataCommandOutput;
    };
  };
}
