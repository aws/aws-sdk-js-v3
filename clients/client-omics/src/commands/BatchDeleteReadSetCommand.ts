// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { BatchDeleteReadSetRequest, BatchDeleteReadSetResponse } from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { de_BatchDeleteReadSetCommand, se_BatchDeleteReadSetCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchDeleteReadSetCommand}.
 */
export interface BatchDeleteReadSetCommandInput extends BatchDeleteReadSetRequest {}
/**
 * @public
 *
 * The output of {@link BatchDeleteReadSetCommand}.
 */
export interface BatchDeleteReadSetCommandOutput extends BatchDeleteReadSetResponse, __MetadataBearer {}

/**
 * <p>Deletes one or more read sets.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, BatchDeleteReadSetCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, BatchDeleteReadSetCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * const client = new OmicsClient(config);
 * const input = { // BatchDeleteReadSetRequest
 *   ids: [ // ReadSetIdList // required
 *     "STRING_VALUE",
 *   ],
 *   sequenceStoreId: "STRING_VALUE", // required
 * };
 * const command = new BatchDeleteReadSetCommand(input);
 * const response = await client.send(command);
 * // { // BatchDeleteReadSetResponse
 * //   errors: [ // ReadSetBatchErrorList
 * //     { // ReadSetBatchError
 * //       id: "STRING_VALUE", // required
 * //       code: "STRING_VALUE", // required
 * //       message: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchDeleteReadSetCommandInput - {@link BatchDeleteReadSetCommandInput}
 * @returns {@link BatchDeleteReadSetCommandOutput}
 * @see {@link BatchDeleteReadSetCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteReadSetCommandOutput} for command's `response` shape.
 * @see {@link OmicsClientResolvedConfig | config} for OmicsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred. Try the request again.</p>
 *
 * @throws {@link RequestTimeoutException} (client fault)
 *  <p>The request timed out.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The target resource was not found in the current Region.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link OmicsServiceException}
 * <p>Base exception class for all service exceptions from Omics service.</p>
 *
 *
 * @public
 */
export class BatchDeleteReadSetCommand extends $Command
  .classBuilder<
    BatchDeleteReadSetCommandInput,
    BatchDeleteReadSetCommandOutput,
    OmicsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OmicsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Omics", "BatchDeleteReadSet", {})
  .n("OmicsClient", "BatchDeleteReadSetCommand")
  .f(void 0, void 0)
  .ser(se_BatchDeleteReadSetCommand)
  .de(de_BatchDeleteReadSetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchDeleteReadSetRequest;
      output: BatchDeleteReadSetResponse;
    };
    sdk: {
      input: BatchDeleteReadSetCommandInput;
      output: BatchDeleteReadSetCommandOutput;
    };
  };
}
