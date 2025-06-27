// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateEnvironmentActionInput, CreateEnvironmentActionOutput } from "../models/models_0";
import { de_CreateEnvironmentActionCommand, se_CreateEnvironmentActionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateEnvironmentActionCommand}.
 */
export interface CreateEnvironmentActionCommandInput extends CreateEnvironmentActionInput {}
/**
 * @public
 *
 * The output of {@link CreateEnvironmentActionCommand}.
 */
export interface CreateEnvironmentActionCommandOutput extends CreateEnvironmentActionOutput, __MetadataBearer {}

/**
 * <p>Creates an action for the environment, for example, creates a console link for an
 *          analytics tool that is available in this environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, CreateEnvironmentActionCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, CreateEnvironmentActionCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * const client = new DataZoneClient(config);
 * const input = { // CreateEnvironmentActionInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   environmentIdentifier: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   parameters: { // ActionParameters Union: only one key present
 *     awsConsoleLink: { // AwsConsoleLinkParameters
 *       uri: "STRING_VALUE",
 *     },
 *   },
 *   description: "STRING_VALUE",
 * };
 * const command = new CreateEnvironmentActionCommand(input);
 * const response = await client.send(command);
 * // { // CreateEnvironmentActionOutput
 * //   domainId: "STRING_VALUE", // required
 * //   environmentId: "STRING_VALUE", // required
 * //   id: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   parameters: { // ActionParameters Union: only one key present
 * //     awsConsoleLink: { // AwsConsoleLinkParameters
 * //       uri: "STRING_VALUE",
 * //     },
 * //   },
 * //   description: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateEnvironmentActionCommandInput - {@link CreateEnvironmentActionCommandInput}
 * @returns {@link CreateEnvironmentActionCommandOutput}
 * @see {@link CreateEnvironmentActionCommandInput} for command's `input` shape.
 * @see {@link CreateEnvironmentActionCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There is a conflict while performing this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the Amazon Web Services service.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You do not have permission to perform this action.</p>
 *
 * @throws {@link DataZoneServiceException}
 * <p>Base exception class for all service exceptions from DataZone service.</p>
 *
 *
 * @public
 */
export class CreateEnvironmentActionCommand extends $Command
  .classBuilder<
    CreateEnvironmentActionCommandInput,
    CreateEnvironmentActionCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DataZone", "CreateEnvironmentAction", {})
  .n("DataZoneClient", "CreateEnvironmentActionCommand")
  .f(void 0, void 0)
  .ser(se_CreateEnvironmentActionCommand)
  .de(de_CreateEnvironmentActionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateEnvironmentActionInput;
      output: CreateEnvironmentActionOutput;
    };
    sdk: {
      input: CreateEnvironmentActionCommandInput;
      output: CreateEnvironmentActionCommandOutput;
    };
  };
}
