// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import type { BatchGetCustomEntityTypesRequest, BatchGetCustomEntityTypesResponse } from "../models/models_0";
import { BatchGetCustomEntityTypes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchGetCustomEntityTypesCommand}.
 */
export interface BatchGetCustomEntityTypesCommandInput extends BatchGetCustomEntityTypesRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetCustomEntityTypesCommand}.
 */
export interface BatchGetCustomEntityTypesCommandOutput extends BatchGetCustomEntityTypesResponse, __MetadataBearer {}

/**
 * <p>Retrieves the details for the custom patterns specified by a list of names.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, BatchGetCustomEntityTypesCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, BatchGetCustomEntityTypesCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // BatchGetCustomEntityTypesRequest
 *   Names: [ // CustomEntityTypeNames // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetCustomEntityTypesCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetCustomEntityTypesResponse
 * //   CustomEntityTypes: [ // CustomEntityTypes
 * //     { // CustomEntityType
 * //       Name: "STRING_VALUE", // required
 * //       RegexString: "STRING_VALUE", // required
 * //       ContextWords: [ // ContextWords
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   CustomEntityTypesNotFound: [ // CustomEntityTypeNames
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetCustomEntityTypesCommandInput - {@link BatchGetCustomEntityTypesCommandInput}
 * @returns {@link BatchGetCustomEntityTypesCommandOutput}
 * @see {@link BatchGetCustomEntityTypesCommandInput} for command's `input` shape.
 * @see {@link BatchGetCustomEntityTypesCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class BatchGetCustomEntityTypesCommand extends $Command
  .classBuilder<
    BatchGetCustomEntityTypesCommandInput,
    BatchGetCustomEntityTypesCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "BatchGetCustomEntityTypes", {})
  .n("GlueClient", "BatchGetCustomEntityTypesCommand")
  .sc(BatchGetCustomEntityTypes$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetCustomEntityTypesRequest;
      output: BatchGetCustomEntityTypesResponse;
    };
    sdk: {
      input: BatchGetCustomEntityTypesCommandInput;
      output: BatchGetCustomEntityTypesCommandOutput;
    };
  };
}
