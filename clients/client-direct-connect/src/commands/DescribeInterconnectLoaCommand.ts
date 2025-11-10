// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeInterconnectLoaRequest, DescribeInterconnectLoaResponse } from "../models/models_0";
import { DescribeInterconnectLoa } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeInterconnectLoaCommand}.
 */
export interface DescribeInterconnectLoaCommandInput extends DescribeInterconnectLoaRequest {}
/**
 * @public
 *
 * The output of {@link DescribeInterconnectLoaCommand}.
 */
export interface DescribeInterconnectLoaCommandOutput extends DescribeInterconnectLoaResponse, __MetadataBearer {}

/**
 * <note>
 *             <p>Deprecated. Use <a>DescribeLoa</a> instead.</p>
 *          </note>
 *          <p>Gets the LOA-CFA for the specified interconnect.</p>
 *          <p>The Letter of Authorization - Connecting Facility Assignment (LOA-CFA) is a document that is used when establishing your cross connect to Amazon Web Services at the colocation facility.
 *       For more information, see <a href="https://docs.aws.amazon.com/directconnect/latest/UserGuide/Colocation.html">Requesting Cross Connects at Direct Connect Locations</a>
 *       in the <i>Direct Connect User Guide</i>.</p>
 *
 * @deprecated deprecated
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, DescribeInterconnectLoaCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, DescribeInterconnectLoaCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * // import type { DirectConnectClientConfig } from "@aws-sdk/client-direct-connect";
 * const config = {}; // type is DirectConnectClientConfig
 * const client = new DirectConnectClient(config);
 * const input = { // DescribeInterconnectLoaRequest
 *   interconnectId: "STRING_VALUE", // required
 *   providerName: "STRING_VALUE",
 *   loaContentType: "application/pdf",
 * };
 * const command = new DescribeInterconnectLoaCommand(input);
 * const response = await client.send(command);
 * // { // DescribeInterconnectLoaResponse
 * //   loa: { // Loa
 * //     loaContent: new Uint8Array(),
 * //     loaContentType: "application/pdf",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeInterconnectLoaCommandInput - {@link DescribeInterconnectLoaCommandInput}
 * @returns {@link DescribeInterconnectLoaCommandOutput}
 * @see {@link DescribeInterconnectLoaCommandInput} for command's `input` shape.
 * @see {@link DescribeInterconnectLoaCommandOutput} for command's `response` shape.
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
export class DescribeInterconnectLoaCommand extends $Command
  .classBuilder<
    DescribeInterconnectLoaCommandInput,
    DescribeInterconnectLoaCommandOutput,
    DirectConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("OvertureService", "DescribeInterconnectLoa", {})
  .n("DirectConnectClient", "DescribeInterconnectLoaCommand")
  .sc(DescribeInterconnectLoa)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeInterconnectLoaRequest;
      output: DescribeInterconnectLoaResponse;
    };
    sdk: {
      input: DescribeInterconnectLoaCommandInput;
      output: DescribeInterconnectLoaCommandOutput;
    };
  };
}
