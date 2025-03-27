// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetRevisionRequest,
  GetRevisionRequestFilterSensitiveLog,
  GetRevisionResponse,
  GetRevisionResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GetRevisionCommand, se_GetRevisionCommand } from "../protocols/Aws_restJson1";
import { QLDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QLDBClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRevisionCommand}.
 */
export interface GetRevisionCommandInput extends GetRevisionRequest {}
/**
 * @public
 *
 * The output of {@link GetRevisionCommand}.
 */
export interface GetRevisionCommandOutput extends GetRevisionResponse, __MetadataBearer {}

/**
 * <p>Returns a revision data object for a specified document ID and block address. Also
 *          returns a proof of the specified revision for verification if <code>DigestTipAddress</code>
 *          is provided.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QLDBClient, GetRevisionCommand } from "@aws-sdk/client-qldb"; // ES Modules import
 * // const { QLDBClient, GetRevisionCommand } = require("@aws-sdk/client-qldb"); // CommonJS import
 * const client = new QLDBClient(config);
 * const input = { // GetRevisionRequest
 *   Name: "STRING_VALUE", // required
 *   BlockAddress: { // ValueHolder
 *     IonText: "STRING_VALUE",
 *   },
 *   DocumentId: "STRING_VALUE", // required
 *   DigestTipAddress: {
 *     IonText: "STRING_VALUE",
 *   },
 * };
 * const command = new GetRevisionCommand(input);
 * const response = await client.send(command);
 * // { // GetRevisionResponse
 * //   Proof: { // ValueHolder
 * //     IonText: "STRING_VALUE",
 * //   },
 * //   Revision: {
 * //     IonText: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetRevisionCommandInput - {@link GetRevisionCommandInput}
 * @returns {@link GetRevisionCommandOutput}
 * @see {@link GetRevisionCommandInput} for command's `input` shape.
 * @see {@link GetRevisionCommandOutput} for command's `response` shape.
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
export class GetRevisionCommand extends $Command
  .classBuilder<
    GetRevisionCommandInput,
    GetRevisionCommandOutput,
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
  .s("AmazonQLDB", "GetRevision", {})
  .n("QLDBClient", "GetRevisionCommand")
  .f(GetRevisionRequestFilterSensitiveLog, GetRevisionResponseFilterSensitiveLog)
  .ser(se_GetRevisionCommand)
  .de(de_GetRevisionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRevisionRequest;
      output: GetRevisionResponse;
    };
    sdk: {
      input: GetRevisionCommandInput;
      output: GetRevisionCommandOutput;
    };
  };
}
