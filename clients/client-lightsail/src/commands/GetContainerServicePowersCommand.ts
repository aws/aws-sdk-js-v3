// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetContainerServicePowersRequest, GetContainerServicePowersResult } from "../models/models_1";
import { de_GetContainerServicePowersCommand, se_GetContainerServicePowersCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetContainerServicePowersCommand}.
 */
export interface GetContainerServicePowersCommandInput extends GetContainerServicePowersRequest {}
/**
 * @public
 *
 * The output of {@link GetContainerServicePowersCommand}.
 */
export interface GetContainerServicePowersCommandOutput extends GetContainerServicePowersResult, __MetadataBearer {}

/**
 * <p>Returns the list of powers that can be specified for your Amazon Lightsail container
 *       services.</p>
 *          <p>The power specifies the amount of memory, the number of vCPUs, and the base price of the
 *       container service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetContainerServicePowersCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetContainerServicePowersCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * // import type { LightsailClientConfig } from "@aws-sdk/client-lightsail";
 * const config = {}; // type is LightsailClientConfig
 * const client = new LightsailClient(config);
 * const input = {};
 * const command = new GetContainerServicePowersCommand(input);
 * const response = await client.send(command);
 * // { // GetContainerServicePowersResult
 * //   powers: [ // ContainerServicePowerList
 * //     { // ContainerServicePower
 * //       powerId: "STRING_VALUE",
 * //       price: Number("float"),
 * //       cpuCount: Number("float"),
 * //       ramSizeInGb: Number("float"),
 * //       name: "STRING_VALUE",
 * //       isActive: true || false,
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetContainerServicePowersCommandInput - {@link GetContainerServicePowersCommandInput}
 * @returns {@link GetContainerServicePowersCommandOutput}
 * @see {@link GetContainerServicePowersCommandInput} for command's `input` shape.
 * @see {@link GetContainerServicePowersCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid
 *       credentials to access a resource.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Lightsail throws this exception when user input does not conform to the validation rules
 *       of an input field.</p>
 *          <note>
 *             <p>Domain and distribution APIs are only available in the N. Virginia
 *           (<code>us-east-1</code>) Amazon Web Services Region. Please set your Amazon Web Services
 *         Region configuration to <code>us-east-1</code> to create, view, or edit these
 *         resources.</p>
 *          </note>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Lightsail throws this exception when it cannot find a resource.</p>
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
export class GetContainerServicePowersCommand extends $Command
  .classBuilder<
    GetContainerServicePowersCommandInput,
    GetContainerServicePowersCommandOutput,
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
  .s("Lightsail_20161128", "GetContainerServicePowers", {})
  .n("LightsailClient", "GetContainerServicePowersCommand")
  .f(void 0, void 0)
  .ser(se_GetContainerServicePowersCommand)
  .de(de_GetContainerServicePowersCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetContainerServicePowersResult;
    };
    sdk: {
      input: GetContainerServicePowersCommandInput;
      output: GetContainerServicePowersCommandOutput;
    };
  };
}
