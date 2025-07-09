// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ExportServerEngineAttributeRequest,
  ExportServerEngineAttributeRequestFilterSensitiveLog,
  ExportServerEngineAttributeResponse,
  ExportServerEngineAttributeResponseFilterSensitiveLog,
} from "../models/models_0";
import { OpsWorksCMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksCMClient";
import { de_ExportServerEngineAttributeCommand, se_ExportServerEngineAttributeCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ExportServerEngineAttributeCommand}.
 */
export interface ExportServerEngineAttributeCommandInput extends ExportServerEngineAttributeRequest {}
/**
 * @public
 *
 * The output of {@link ExportServerEngineAttributeCommand}.
 */
export interface ExportServerEngineAttributeCommandOutput
  extends ExportServerEngineAttributeResponse,
    __MetadataBearer {}

/**
 * <p>
 *       Exports a specified server engine attribute as a base64-encoded string. For example, you can export user data that you can
 *       use in EC2 to associate nodes with a server.
 *     </p>
 *          <p>
 *       This operation is synchronous.
 *     </p>
 *          <p>
 *       A <code>ValidationException</code> is raised when parameters of the request are not valid.
 *       A <code>ResourceNotFoundException</code> is thrown when the server does not exist.
 *       An <code>InvalidStateException</code> is thrown when the server is in any of the following states: CREATING, TERMINATED,
 *       FAILED or DELETING.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksCMClient, ExportServerEngineAttributeCommand } from "@aws-sdk/client-opsworkscm"; // ES Modules import
 * // const { OpsWorksCMClient, ExportServerEngineAttributeCommand } = require("@aws-sdk/client-opsworkscm"); // CommonJS import
 * const client = new OpsWorksCMClient(config);
 * const input = { // ExportServerEngineAttributeRequest
 *   ExportAttributeName: "STRING_VALUE", // required
 *   ServerName: "STRING_VALUE", // required
 *   InputAttributes: [ // EngineAttributes
 *     { // EngineAttribute
 *       Name: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new ExportServerEngineAttributeCommand(input);
 * const response = await client.send(command);
 * // { // ExportServerEngineAttributeResponse
 * //   EngineAttribute: { // EngineAttribute
 * //     Name: "STRING_VALUE",
 * //     Value: "STRING_VALUE",
 * //   },
 * //   ServerName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ExportServerEngineAttributeCommandInput - {@link ExportServerEngineAttributeCommandInput}
 * @returns {@link ExportServerEngineAttributeCommandOutput}
 * @see {@link ExportServerEngineAttributeCommandInput} for command's `input` shape.
 * @see {@link ExportServerEngineAttributeCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksCMClientResolvedConfig | config} for OpsWorksCMClient's `config` shape.
 *
 * @throws {@link InvalidStateException} (client fault)
 *  <p>The resource is in a state that does not allow you to perform a specified action.
 *     </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource does not exist, or access was denied.
 *     </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One or more of the provided request parameters are not valid.
 *     </p>
 *
 * @throws {@link OpsWorksCMServiceException}
 * <p>Base exception class for all service exceptions from OpsWorksCM service.</p>
 *
 *
 * @public
 */
export class ExportServerEngineAttributeCommand extends $Command
  .classBuilder<
    ExportServerEngineAttributeCommandInput,
    ExportServerEngineAttributeCommandOutput,
    OpsWorksCMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OpsWorksCMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("OpsWorksCM_V2016_11_01", "ExportServerEngineAttribute", {})
  .n("OpsWorksCMClient", "ExportServerEngineAttributeCommand")
  .f(ExportServerEngineAttributeRequestFilterSensitiveLog, ExportServerEngineAttributeResponseFilterSensitiveLog)
  .ser(se_ExportServerEngineAttributeCommand)
  .de(de_ExportServerEngineAttributeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ExportServerEngineAttributeRequest;
      output: ExportServerEngineAttributeResponse;
    };
    sdk: {
      input: ExportServerEngineAttributeCommandInput;
      output: ExportServerEngineAttributeCommandOutput;
    };
  };
}
