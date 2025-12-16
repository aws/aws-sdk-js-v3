// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetEnvironmentActionInput, GetEnvironmentActionOutput } from "../models/models_1";
import { GetEnvironmentAction$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetEnvironmentActionCommand}.
 */
export interface GetEnvironmentActionCommandInput extends GetEnvironmentActionInput {}
/**
 * @public
 *
 * The output of {@link GetEnvironmentActionCommand}.
 */
export interface GetEnvironmentActionCommandOutput extends GetEnvironmentActionOutput, __MetadataBearer {}

/**
 * <p>Gets the specified environment action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, GetEnvironmentActionCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, GetEnvironmentActionCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // GetEnvironmentActionInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   environmentIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new GetEnvironmentActionCommand(input);
 * const response = await client.send(command);
 * // { // GetEnvironmentActionOutput
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
 * @param GetEnvironmentActionCommandInput - {@link GetEnvironmentActionCommandInput}
 * @returns {@link GetEnvironmentActionCommandOutput}
 * @see {@link GetEnvironmentActionCommandInput} for command's `input` shape.
 * @see {@link GetEnvironmentActionCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
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
export class GetEnvironmentActionCommand extends $Command
  .classBuilder<
    GetEnvironmentActionCommandInput,
    GetEnvironmentActionCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DataZone", "GetEnvironmentAction", {})
  .n("DataZoneClient", "GetEnvironmentActionCommand")
  .sc(GetEnvironmentAction$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetEnvironmentActionInput;
      output: GetEnvironmentActionOutput;
    };
    sdk: {
      input: GetEnvironmentActionCommandInput;
      output: GetEnvironmentActionCommandOutput;
    };
  };
}
