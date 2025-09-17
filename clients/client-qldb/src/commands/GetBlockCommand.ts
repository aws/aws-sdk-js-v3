// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetBlockRequest,
  GetBlockRequestFilterSensitiveLog,
  GetBlockResponse,
  GetBlockResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GetBlockCommand, se_GetBlockCommand } from "../protocols/Aws_restJson1";
import { QLDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QLDBClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetBlockCommand}.
 */
export interface GetBlockCommandInput extends GetBlockRequest {}
/**
 * @public
 *
 * The output of {@link GetBlockCommand}.
 */
export interface GetBlockCommandOutput extends GetBlockResponse, __MetadataBearer {}

/**
 * <p>Returns a block object at a specified address in a journal. Also returns a proof of the
 *          specified block for verification if <code>DigestTipAddress</code> is provided.</p>
 *          <p>For information about the data contents in a block, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/journal-contents.html">Journal contents</a> in the
 *             <i>Amazon QLDB Developer Guide</i>.</p>
 *          <p>If the specified ledger doesn't exist or is in <code>DELETING</code> status, then throws
 *             <code>ResourceNotFoundException</code>.</p>
 *          <p>If the specified ledger is in <code>CREATING</code> status, then throws
 *             <code>ResourcePreconditionNotMetException</code>.</p>
 *          <p>If no block exists with the specified address, then throws
 *             <code>InvalidParameterException</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QLDBClient, GetBlockCommand } from "@aws-sdk/client-qldb"; // ES Modules import
 * // const { QLDBClient, GetBlockCommand } = require("@aws-sdk/client-qldb"); // CommonJS import
 * // import type { QLDBClientConfig } from "@aws-sdk/client-qldb";
 * const config = {}; // type is QLDBClientConfig
 * const client = new QLDBClient(config);
 * const input = { // GetBlockRequest
 *   Name: "STRING_VALUE", // required
 *   BlockAddress: { // ValueHolder
 *     IonText: "STRING_VALUE",
 *   },
 *   DigestTipAddress: {
 *     IonText: "STRING_VALUE",
 *   },
 * };
 * const command = new GetBlockCommand(input);
 * const response = await client.send(command);
 * // { // GetBlockResponse
 * //   Block: { // ValueHolder
 * //     IonText: "STRING_VALUE",
 * //   },
 * //   Proof: {
 * //     IonText: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetBlockCommandInput - {@link GetBlockCommandInput}
 * @returns {@link GetBlockCommandOutput}
 * @see {@link GetBlockCommandInput} for command's `input` shape.
 * @see {@link GetBlockCommandOutput} for command's `response` shape.
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
export class GetBlockCommand extends $Command
  .classBuilder<
    GetBlockCommandInput,
    GetBlockCommandOutput,
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
  .s("AmazonQLDB", "GetBlock", {})
  .n("QLDBClient", "GetBlockCommand")
  .f(GetBlockRequestFilterSensitiveLog, GetBlockResponseFilterSensitiveLog)
  .ser(se_GetBlockCommand)
  .de(de_GetBlockCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBlockRequest;
      output: GetBlockResponse;
    };
    sdk: {
      input: GetBlockCommandInput;
      output: GetBlockCommandOutput;
    };
  };
}
