// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetEnvironmentCredentialsInput,
  GetEnvironmentCredentialsOutput,
  GetEnvironmentCredentialsOutputFilterSensitiveLog,
} from "../models/models_1";
import { de_GetEnvironmentCredentialsCommand, se_GetEnvironmentCredentialsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetEnvironmentCredentialsCommand}.
 */
export interface GetEnvironmentCredentialsCommandInput extends GetEnvironmentCredentialsInput {}
/**
 * @public
 *
 * The output of {@link GetEnvironmentCredentialsCommand}.
 */
export interface GetEnvironmentCredentialsCommandOutput extends GetEnvironmentCredentialsOutput, __MetadataBearer {}

/**
 * <p>Gets the credentials of an environment in Amazon DataZone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, GetEnvironmentCredentialsCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, GetEnvironmentCredentialsCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // GetEnvironmentCredentialsInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   environmentIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetEnvironmentCredentialsCommand(input);
 * const response = await client.send(command);
 * // { // GetEnvironmentCredentialsOutput
 * //   accessKeyId: "STRING_VALUE",
 * //   secretAccessKey: "STRING_VALUE",
 * //   sessionToken: "STRING_VALUE",
 * //   expiration: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetEnvironmentCredentialsCommandInput - {@link GetEnvironmentCredentialsCommandInput}
 * @returns {@link GetEnvironmentCredentialsCommandOutput}
 * @see {@link GetEnvironmentCredentialsCommandInput} for command's `input` shape.
 * @see {@link GetEnvironmentCredentialsCommandOutput} for command's `response` shape.
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
export class GetEnvironmentCredentialsCommand extends $Command
  .classBuilder<
    GetEnvironmentCredentialsCommandInput,
    GetEnvironmentCredentialsCommandOutput,
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
  .s("DataZone", "GetEnvironmentCredentials", {})
  .n("DataZoneClient", "GetEnvironmentCredentialsCommand")
  .f(void 0, GetEnvironmentCredentialsOutputFilterSensitiveLog)
  .ser(se_GetEnvironmentCredentialsCommand)
  .de(de_GetEnvironmentCredentialsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetEnvironmentCredentialsInput;
      output: GetEnvironmentCredentialsOutput;
    };
    sdk: {
      input: GetEnvironmentCredentialsCommandInput;
      output: GetEnvironmentCredentialsCommandOutput;
    };
  };
}
