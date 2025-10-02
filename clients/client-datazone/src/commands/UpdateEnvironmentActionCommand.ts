// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateEnvironmentActionInput, UpdateEnvironmentActionOutput } from "../models/models_2";
import { de_UpdateEnvironmentActionCommand, se_UpdateEnvironmentActionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateEnvironmentActionCommand}.
 */
export interface UpdateEnvironmentActionCommandInput extends UpdateEnvironmentActionInput {}
/**
 * @public
 *
 * The output of {@link UpdateEnvironmentActionCommand}.
 */
export interface UpdateEnvironmentActionCommandOutput extends UpdateEnvironmentActionOutput, __MetadataBearer {}

/**
 * <p>Updates an environment action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, UpdateEnvironmentActionCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, UpdateEnvironmentActionCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // UpdateEnvironmentActionInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   environmentIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 *   parameters: { // ActionParameters Union: only one key present
 *     awsConsoleLink: { // AwsConsoleLinkParameters
 *       uri: "STRING_VALUE",
 *     },
 *   },
 *   name: "STRING_VALUE",
 *   description: "STRING_VALUE",
 * };
 * const command = new UpdateEnvironmentActionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateEnvironmentActionOutput
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
 * @param UpdateEnvironmentActionCommandInput - {@link UpdateEnvironmentActionCommandInput}
 * @returns {@link UpdateEnvironmentActionCommandOutput}
 * @see {@link UpdateEnvironmentActionCommandInput} for command's `input` shape.
 * @see {@link UpdateEnvironmentActionCommandOutput} for command's `response` shape.
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
export class UpdateEnvironmentActionCommand extends $Command
  .classBuilder<
    UpdateEnvironmentActionCommandInput,
    UpdateEnvironmentActionCommandOutput,
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
  .s("DataZone", "UpdateEnvironmentAction", {})
  .n("DataZoneClient", "UpdateEnvironmentActionCommand")
  .f(void 0, void 0)
  .ser(se_UpdateEnvironmentActionCommand)
  .de(de_UpdateEnvironmentActionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateEnvironmentActionInput;
      output: UpdateEnvironmentActionOutput;
    };
    sdk: {
      input: UpdateEnvironmentActionCommandInput;
      output: UpdateEnvironmentActionCommandOutput;
    };
  };
}
