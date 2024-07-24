// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { InspectorScanClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorScanClient";
import { ScanSbomRequest, ScanSbomResponse } from "../models/models_0";
import { de_ScanSbomCommand, se_ScanSbomCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ScanSbomCommand}.
 */
export interface ScanSbomCommandInput extends ScanSbomRequest {}
/**
 * @public
 *
 * The output of {@link ScanSbomCommand}.
 */
export interface ScanSbomCommandOutput extends ScanSbomResponse, __MetadataBearer {}

/**
 * <p>Scans a provided CycloneDX 1.5 SBOM and reports on any vulnerabilities discovered in that SBOM. You can generate compatible SBOMs for your resources using the <a href="">Amazon Inspector SBOM generator</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorScanClient, ScanSbomCommand } from "@aws-sdk/client-inspector-scan"; // ES Modules import
 * // const { InspectorScanClient, ScanSbomCommand } = require("@aws-sdk/client-inspector-scan"); // CommonJS import
 * const client = new InspectorScanClient(config);
 * const input = { // ScanSbomRequest
 *   sbom: "DOCUMENT_VALUE", // required
 *   outputFormat: "CYCLONE_DX_1_5" || "INSPECTOR",
 * };
 * const command = new ScanSbomCommand(input);
 * const response = await client.send(command);
 * // { // ScanSbomResponse
 * //   sbom: "DOCUMENT_VALUE",
 * // };
 *
 * ```
 *
 * @param ScanSbomCommandInput - {@link ScanSbomCommandInput}
 * @returns {@link ScanSbomCommandOutput}
 * @see {@link ScanSbomCommandInput} for command's `input` shape.
 * @see {@link ScanSbomCommandOutput} for command's `response` shape.
 * @see {@link InspectorScanClientResolvedConfig | config} for InspectorScanClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.
 *   </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.
 *
 *   </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.
 *
 *   </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation due to missing required fields or having invalid inputs.</p>
 *
 * @throws {@link InspectorScanServiceException}
 * <p>Base exception class for all service exceptions from InspectorScan service.</p>
 *
 * @public
 */
export class ScanSbomCommand extends $Command
  .classBuilder<
    ScanSbomCommandInput,
    ScanSbomCommandOutput,
    InspectorScanClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: InspectorScanClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("InspectorScan", "ScanSbom", {})
  .n("InspectorScanClient", "ScanSbomCommand")
  .f(void 0, void 0)
  .ser(se_ScanSbomCommand)
  .de(de_ScanSbomCommand)
  .build() {}
