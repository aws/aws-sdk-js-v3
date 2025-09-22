// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { BatchDeleteReadSetRequest, BatchDeleteReadSetResponse } from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { BatchDeleteReadSet } from "../schemas/schemas_7_Read";

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
 * <p>Deletes one or more read sets. If the operation is successful, it returns a response with no body. If there is an error with deleting one of the read sets, the operation returns an error list. If the operation successfully deletes only a subset of files, it will return an error list for the remaining files that fail to be deleted. There is a limit of 100 read sets that can be deleted in each <code>BatchDeleteReadSet</code> API call.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, BatchDeleteReadSetCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, BatchDeleteReadSetCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Omics", "BatchDeleteReadSet", {})
  .n("OmicsClient", "BatchDeleteReadSetCommand")
  .sc(BatchDeleteReadSet)
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
