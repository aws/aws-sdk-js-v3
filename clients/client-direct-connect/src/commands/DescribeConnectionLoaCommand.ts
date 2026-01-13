// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeConnectionLoaRequest, DescribeConnectionLoaResponse } from "../models/models_0";
import { DescribeConnectionLoa$ } from "../schemas/schemas_0";

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
 * <note>
 *             <p>Deprecated. Use <a>DescribeLoa</a> instead.</p>
 *          </note>
 *          <p>Gets the LOA-CFA for a connection.</p>
 *          <p>The Letter of Authorization - Connecting Facility Assignment (LOA-CFA) is a document that your APN partner or
 *       service provider uses when establishing your cross connect to Amazon Web Services at the colocation facility. For more information,
 *       see <a href="https://docs.aws.amazon.com/directconnect/latest/UserGuide/Colocation.html">Requesting Cross Connects
 *       at Direct Connect Locations</a> in the <i>Direct Connect User Guide</i>.</p>
 *
 * @deprecated deprecated
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, DescribeConnectionLoaCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, DescribeConnectionLoaCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * // import type { DirectConnectClientConfig } from "@aws-sdk/client-direct-connect";
 * const config = {}; // type is DirectConnectClientConfig
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
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("OvertureService", "DescribeConnectionLoa", {})
  .n("DirectConnectClient", "DescribeConnectionLoaCommand")
  .sc(DescribeConnectionLoa$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeConnectionLoaRequest;
      output: DescribeConnectionLoaResponse;
    };
    sdk: {
      input: DescribeConnectionLoaCommandInput;
      output: DescribeConnectionLoaCommandOutput;
    };
  };
}
