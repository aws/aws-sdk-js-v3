// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteParallelDataRequest, DeleteParallelDataResponse } from "../models/models_0";
import { DeleteParallelData } from "../schemas/schemas_3_ParallelData";
import { ServiceInputTypes, ServiceOutputTypes, TranslateClientResolvedConfig } from "../TranslateClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteParallelDataCommand}.
 */
export interface DeleteParallelDataCommandInput extends DeleteParallelDataRequest {}
/**
 * @public
 *
 * The output of {@link DeleteParallelDataCommand}.
 */
export interface DeleteParallelDataCommandOutput extends DeleteParallelDataResponse, __MetadataBearer {}

/**
 * <p>Deletes a parallel data resource in Amazon Translate.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranslateClient, DeleteParallelDataCommand } from "@aws-sdk/client-translate"; // ES Modules import
 * // const { TranslateClient, DeleteParallelDataCommand } = require("@aws-sdk/client-translate"); // CommonJS import
 * // import type { TranslateClientConfig } from "@aws-sdk/client-translate";
 * const config = {}; // type is TranslateClientConfig
 * const client = new TranslateClient(config);
 * const input = { // DeleteParallelDataRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DeleteParallelDataCommand(input);
 * const response = await client.send(command);
 * // { // DeleteParallelDataResponse
 * //   Name: "STRING_VALUE",
 * //   Status: "CREATING" || "UPDATING" || "ACTIVE" || "DELETING" || "FAILED",
 * // };
 *
 * ```
 *
 * @param DeleteParallelDataCommandInput - {@link DeleteParallelDataCommandInput}
 * @returns {@link DeleteParallelDataCommandOutput}
 * @see {@link DeleteParallelDataCommandInput} for command's `input` shape.
 * @see {@link DeleteParallelDataCommandOutput} for command's `response` shape.
 * @see {@link TranslateClientResolvedConfig | config} for TranslateClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Another modification is being made. That modification must complete before you can make
 *       your change.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource you are looking for has not been found. Review the resource you're looking
 *       for and see if a different resource will accomplish your needs before retrying the revised
 *       request.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p> You have made too many requests within a short period of time. Wait for a short time and
 *       then try your request again.</p>
 *
 * @throws {@link TranslateServiceException}
 * <p>Base exception class for all service exceptions from Translate service.</p>
 *
 *
 * @public
 */
export class DeleteParallelDataCommand extends $Command
  .classBuilder<
    DeleteParallelDataCommandInput,
    DeleteParallelDataCommandOutput,
    TranslateClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TranslateClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSShineFrontendService_20170701", "DeleteParallelData", {})
  .n("TranslateClient", "DeleteParallelDataCommand")
  .sc(DeleteParallelData)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteParallelDataRequest;
      output: DeleteParallelDataResponse;
    };
    sdk: {
      input: DeleteParallelDataCommandInput;
      output: DeleteParallelDataCommandOutput;
    };
  };
}
