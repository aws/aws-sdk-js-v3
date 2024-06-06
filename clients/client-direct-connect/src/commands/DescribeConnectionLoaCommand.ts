// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeConnectionLoaRequest, DescribeConnectionLoaResponse } from "../models/models_0";
import { de_DescribeConnectionLoaCommand, se_DescribeConnectionLoaCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeConnectionLoaCommand}.
 */
export interface DescribeConnectionLoaCommandInput extends DescribeConnectionLoaRequest {}
/**
 * @public
 *
 * The output of {@link DescribeConnectionLoaCommand}.
 */
export interface DescribeConnectionLoaCommandOutput extends DescribeConnectionLoaResponse, __MetadataBearer {}

/**
 * <p>Deprecated. Use <a>DescribeLoa</a> instead.</p>
 *          <p>Gets the LOA-CFA for a connection.</p>
 *          <p>The Letter of Authorization - Connecting Facility Assignment (LOA-CFA) is a document that your APN partner or
 *       service provider uses when establishing your cross connect to Amazon Web Services at the colocation facility. For more information,
 *       see <a href="https://docs.aws.amazon.com/directconnect/latest/UserGuide/Colocation.html">Requesting Cross Connects
 *       at Direct Connect Locations</a> in the <i>Direct Connect User Guide</i>.</p>
 *
 * @deprecated
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, DescribeConnectionLoaCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, DescribeConnectionLoaCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const input = { // DescribeConnectionLoaRequest
 *   connectionId: "STRING_VALUE", // required
 *   providerName: "STRING_VALUE",
 *   loaContentType: "application/pdf",
 * };
 * const command = new DescribeConnectionLoaCommand(input);
 * const response = await client.send(command);
 * // { // DescribeConnectionLoaResponse
 * //   loa: { // Loa
 * //     loaContent: new Uint8Array(),
 * //     loaContentType: "application/pdf",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeConnectionLoaCommandInput - {@link DescribeConnectionLoaCommandInput}
 * @returns {@link DescribeConnectionLoaCommandOutput}
 * @see {@link DescribeConnectionLoaCommandInput} for command's `input` shape.
 * @see {@link DescribeConnectionLoaCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for DirectConnectClient's `config` shape.
 *
 * @throws {@link DirectConnectClientException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link DirectConnectServerException} (server fault)
 *  <p>A server-side error occurred.</p>
 *
 * @throws {@link DirectConnectServiceException}
 * <p>Base exception class for all service exceptions from DirectConnect service.</p>
 *
 * @public
 */
export class DescribeConnectionLoaCommand extends $Command
  .classBuilder<
    DescribeConnectionLoaCommandInput,
    DescribeConnectionLoaCommandOutput,
    DirectConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: DirectConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("OvertureService", "DescribeConnectionLoa", {})
  .n("DirectConnectClient", "DescribeConnectionLoaCommand")
  .f(void 0, void 0)
  .ser(se_DescribeConnectionLoaCommand)
  .de(de_DescribeConnectionLoaCommand)
  .build() {}
