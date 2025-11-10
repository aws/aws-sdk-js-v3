// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { Inspector2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Inspector2Client";
import { CancelSbomExportRequest, CancelSbomExportResponse } from "../models/models_0";
import { CancelSbomExport } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CancelSbomExportCommand}.
 */
export interface CancelSbomExportCommandInput extends CancelSbomExportRequest {}
/**
 * @public
 *
 * The output of {@link CancelSbomExportCommand}.
 */
export interface CancelSbomExportCommandOutput extends CancelSbomExportResponse, __MetadataBearer {}

/**
 * <p>Cancels a software bill of materials (SBOM) report.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, CancelSbomExportCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, CancelSbomExportCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * // import type { Inspector2ClientConfig } from "@aws-sdk/client-inspector2";
 * const config = {}; // type is Inspector2ClientConfig
 * const client = new Inspector2Client(config);
 * const input = { // CancelSbomExportRequest
 *   reportId: "STRING_VALUE", // required
 * };
 * const command = new CancelSbomExportCommand(input);
 * const response = await client.send(command);
 * // { // CancelSbomExportResponse
 * //   reportId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CancelSbomExportCommandInput - {@link CancelSbomExportCommandInput}
 * @returns {@link CancelSbomExportCommandOutput}
 * @see {@link CancelSbomExportCommandInput} for command's `input` shape.
 * @see {@link CancelSbomExportCommandOutput} for command's `response` shape.
 * @see {@link Inspector2ClientResolvedConfig | config} for Inspector2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *          <p> For <code>Enable</code>, you receive this error if you attempt to use a feature in an
 *          unsupported Amazon Web Services Region. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal failure of the Amazon Inspector service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation tried to access an invalid resource. Make sure the resource is specified
 *          correctly.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation due to missing required fields or having invalid
 *          inputs.</p>
 *
 * @throws {@link Inspector2ServiceException}
 * <p>Base exception class for all service exceptions from Inspector2 service.</p>
 *
 *
 * @public
 */
export class CancelSbomExportCommand extends $Command
  .classBuilder<
    CancelSbomExportCommandInput,
    CancelSbomExportCommandOutput,
    Inspector2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Inspector2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Inspector2", "CancelSbomExport", {})
  .n("Inspector2Client", "CancelSbomExportCommand")
  .sc(CancelSbomExport)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelSbomExportRequest;
      output: CancelSbomExportResponse;
    };
    sdk: {
      input: CancelSbomExportCommandInput;
      output: CancelSbomExportCommandOutput;
    };
  };
}
