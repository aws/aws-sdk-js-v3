// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteParallelDataRequest, DeleteParallelDataResponse } from "../models/models_0";
import { de_DeleteParallelDataCommand, se_DeleteParallelDataCommand } from "../protocols/Aws_json1_1";
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
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSShineFrontendService_20170701", "DeleteParallelData", {})
  .n("TranslateClient", "DeleteParallelDataCommand")
  .f(void 0, void 0)
  .ser(se_DeleteParallelDataCommand)
  .de(de_DeleteParallelDataCommand)
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
