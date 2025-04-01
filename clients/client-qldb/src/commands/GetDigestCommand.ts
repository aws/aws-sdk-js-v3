// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetDigestRequest, GetDigestResponse, GetDigestResponseFilterSensitiveLog } from "../models/models_0";
import { de_GetDigestCommand, se_GetDigestCommand } from "../protocols/Aws_restJson1";
import { QLDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QLDBClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDigestCommand}.
 */
export interface GetDigestCommandInput extends GetDigestRequest {}
/**
 * @public
 *
 * The output of {@link GetDigestCommand}.
 */
export interface GetDigestCommandOutput extends GetDigestResponse, __MetadataBearer {}

/**
 * <p>Returns the digest of a ledger at the latest committed block in the journal. The
 *          response includes a 256-bit hash value and a block address.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QLDBClient, GetDigestCommand } from "@aws-sdk/client-qldb"; // ES Modules import
 * // const { QLDBClient, GetDigestCommand } = require("@aws-sdk/client-qldb"); // CommonJS import
 * const client = new QLDBClient(config);
 * const input = { // GetDigestRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new GetDigestCommand(input);
 * const response = await client.send(command);
 * // { // GetDigestResponse
 * //   Digest: new Uint8Array(), // required
 * //   DigestTipAddress: { // ValueHolder
 * //     IonText: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDigestCommandInput - {@link GetDigestCommandInput}
 * @returns {@link GetDigestCommandOutput}
 * @see {@link GetDigestCommandInput} for command's `input` shape.
 * @see {@link GetDigestCommandOutput} for command's `response` shape.
 * @see {@link QLDBClientResolvedConfig | config} for QLDBClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters in the request aren't valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource doesn't exist.</p>
 *
 * @throws {@link ResourcePreconditionNotMetException} (client fault)
 *  <p>The operation failed because a condition wasn't satisfied in advance.</p>
 *
 * @throws {@link QLDBServiceException}
 * <p>Base exception class for all service exceptions from QLDB service.</p>
 *
 *
 * @public
 */
export class GetDigestCommand extends $Command
  .classBuilder<
    GetDigestCommandInput,
    GetDigestCommandOutput,
    QLDBClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QLDBClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonQLDB", "GetDigest", {})
  .n("QLDBClient", "GetDigestCommand")
  .f(void 0, GetDigestResponseFilterSensitiveLog)
  .ser(se_GetDigestCommand)
  .de(de_GetDigestCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDigestRequest;
      output: GetDigestResponse;
    };
    sdk: {
      input: GetDigestCommandInput;
      output: GetDigestCommandOutput;
    };
  };
}
