// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeLoaRequest, Loa } from "../models/models_0";
import { DescribeLoa } from "../schemas/schemas_11_Describe";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeLoaCommand}.
 */
export interface DescribeLoaCommandInput extends DescribeLoaRequest {}
/**
 * @public
 *
 * The output of {@link DescribeLoaCommand}.
 */
export interface DescribeLoaCommandOutput extends Loa, __MetadataBearer {}

/**
 * <p>Gets the LOA-CFA for a connection, interconnect, or link aggregation group (LAG).</p>
 *          <p>The Letter of Authorization - Connecting Facility Assignment (LOA-CFA) is a document that is used when establishing
 *       your cross connect to Amazon Web Services at the colocation facility. For more information, see <a href="https://docs.aws.amazon.com/directconnect/latest/UserGuide/Colocation.html">Requesting Cross Connects at Direct Connect Locations</a>
 *       in the <i>Direct Connect User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, DescribeLoaCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, DescribeLoaCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * // import type { DirectConnectClientConfig } from "@aws-sdk/client-direct-connect";
 * const config = {}; // type is DirectConnectClientConfig
 * const client = new DirectConnectClient(config);
 * const input = { // DescribeLoaRequest
 *   connectionId: "STRING_VALUE", // required
 *   providerName: "STRING_VALUE",
 *   loaContentType: "application/pdf",
 * };
 * const command = new DescribeLoaCommand(input);
 * const response = await client.send(command);
 * // { // Loa
 * //   loaContent: new Uint8Array(),
 * //   loaContentType: "application/pdf",
 * // };
 *
 * ```
 *
 * @param DescribeLoaCommandInput - {@link DescribeLoaCommandInput}
 * @returns {@link DescribeLoaCommandOutput}
 * @see {@link DescribeLoaCommandInput} for command's `input` shape.
 * @see {@link DescribeLoaCommandOutput} for command's `response` shape.
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
export class DescribeLoaCommand extends $Command
  .classBuilder<
    DescribeLoaCommandInput,
    DescribeLoaCommandOutput,
    DirectConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("OvertureService", "DescribeLoa", {})
  .n("DirectConnectClient", "DescribeLoaCommand")
  .sc(DescribeLoa)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeLoaRequest;
      output: Loa;
    };
    sdk: {
      input: DescribeLoaCommandInput;
      output: DescribeLoaCommandOutput;
    };
  };
}
