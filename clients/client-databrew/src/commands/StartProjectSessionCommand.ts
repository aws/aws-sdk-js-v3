// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  StartProjectSessionRequest,
  StartProjectSessionResponse,
  StartProjectSessionResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_StartProjectSessionCommand, se_StartProjectSessionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartProjectSessionCommand}.
 */
export interface StartProjectSessionCommandInput extends StartProjectSessionRequest {}
/**
 * @public
 *
 * The output of {@link StartProjectSessionCommand}.
 */
export interface StartProjectSessionCommandOutput extends StartProjectSessionResponse, __MetadataBearer {}

/**
 * <p>Creates an interactive session, enabling you to manipulate data in a DataBrew
 *             project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, StartProjectSessionCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, StartProjectSessionCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * const client = new DataBrewClient(config);
 * const input = { // StartProjectSessionRequest
 *   Name: "STRING_VALUE", // required
 *   AssumeControl: true || false,
 * };
 * const command = new StartProjectSessionCommand(input);
 * const response = await client.send(command);
 * // { // StartProjectSessionResponse
 * //   Name: "STRING_VALUE", // required
 * //   ClientSessionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartProjectSessionCommandInput - {@link StartProjectSessionCommandInput}
 * @returns {@link StartProjectSessionCommandOutput}
 * @see {@link StartProjectSessionCommandInput} for command's `input` shape.
 * @see {@link StartProjectSessionCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for DataBrewClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>A service quota is exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input parameters for this request failed validation.</p>
 *
 * @throws {@link DataBrewServiceException}
 * <p>Base exception class for all service exceptions from DataBrew service.</p>
 *
 *
 * @public
 */
export class StartProjectSessionCommand extends $Command
  .classBuilder<
    StartProjectSessionCommandInput,
    StartProjectSessionCommandOutput,
    DataBrewClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataBrewClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGlueDataBrew", "StartProjectSession", {})
  .n("DataBrewClient", "StartProjectSessionCommand")
  .f(void 0, StartProjectSessionResponseFilterSensitiveLog)
  .ser(se_StartProjectSessionCommand)
  .de(de_StartProjectSessionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartProjectSessionRequest;
      output: StartProjectSessionResponse;
    };
    sdk: {
      input: StartProjectSessionCommandInput;
      output: StartProjectSessionCommandOutput;
    };
  };
}
