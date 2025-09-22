// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ControlTowerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ControlTowerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateLandingZoneInput, CreateLandingZoneOutput } from "../models/models_0";
import { CreateLandingZone } from "../schemas/schemas_5_Resource";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateLandingZoneCommand}.
 */
export interface CreateLandingZoneCommandInput extends CreateLandingZoneInput {}
/**
 * @public
 *
 * The output of {@link CreateLandingZoneCommand}.
 */
export interface CreateLandingZoneCommandOutput extends CreateLandingZoneOutput, __MetadataBearer {}

/**
 * <p>Creates a new landing zone. This API call starts an asynchronous operation that creates and configures a landing zone, based on the parameters specified in the manifest JSON file.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ControlTowerClient, CreateLandingZoneCommand } from "@aws-sdk/client-controltower"; // ES Modules import
 * // const { ControlTowerClient, CreateLandingZoneCommand } = require("@aws-sdk/client-controltower"); // CommonJS import
 * // import type { ControlTowerClientConfig } from "@aws-sdk/client-controltower";
 * const config = {}; // type is ControlTowerClientConfig
 * const client = new ControlTowerClient(config);
 * const input = { // CreateLandingZoneInput
 *   version: "STRING_VALUE", // required
 *   manifest: "DOCUMENT_VALUE", // required
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateLandingZoneCommand(input);
 * const response = await client.send(command);
 * // { // CreateLandingZoneOutput
 * //   arn: "STRING_VALUE", // required
 * //   operationIdentifier: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateLandingZoneCommandInput - {@link CreateLandingZoneCommandInput}
 * @returns {@link CreateLandingZoneCommandOutput}
 * @see {@link CreateLandingZoneCommandInput} for command's `input` shape.
 * @see {@link CreateLandingZoneCommandOutput} for command's `response` shape.
 * @see {@link ControlTowerClientResolvedConfig | config} for ControlTowerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting the resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during processing of a request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input does not satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link ControlTowerServiceException}
 * <p>Base exception class for all service exceptions from ControlTower service.</p>
 *
 *
 * @public
 */
export class CreateLandingZoneCommand extends $Command
  .classBuilder<
    CreateLandingZoneCommandInput,
    CreateLandingZoneCommandOutput,
    ControlTowerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ControlTowerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSControlTowerApis", "CreateLandingZone", {})
  .n("ControlTowerClient", "CreateLandingZoneCommand")
  .sc(CreateLandingZone)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateLandingZoneInput;
      output: CreateLandingZoneOutput;
    };
    sdk: {
      input: CreateLandingZoneCommandInput;
      output: CreateLandingZoneCommandOutput;
    };
  };
}
