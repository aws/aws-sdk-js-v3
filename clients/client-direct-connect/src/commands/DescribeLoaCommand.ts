// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeLoaRequest, Loa } from "../models/models_0";
import { DescribeLoa$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Gets the LOA-CFA for a connection, interconnect, or link aggregation group (LAG).
 *
 * The Letter of Authorization - Connecting Facility Assignment (LOA-CFA) is a document that is used when establishing your cross connect to Amazon Web Services at the colocation facility. For more information, see [Requesting Cross Connects at Direct Connect Locations](https://docs.aws.amazon.com/directconnect/latest/UserGuide/Colocation.html) in the *Direct Connect User Guide*.
 *
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
 *
 * One or more parameters are not valid.
 *
 * @throws {@link DirectConnectServerException} (server fault)
 *
 * A server-side error occurred.
 *
 * @throws {@link DirectConnectServiceException}
 *
 * Base exception class for all service exceptions from DirectConnect service.
 *
 * @public
 */
export class DescribeLoaCommand extends command<DescribeLoaCommandInput, DescribeLoaCommandOutput>(
  _ep0,
  _mw0,
  "DescribeLoa",
  DescribeLoa$
) {
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
