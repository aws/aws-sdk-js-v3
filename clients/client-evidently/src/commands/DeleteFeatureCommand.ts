// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { EvidentlyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EvidentlyClient";
import { DeleteFeatureRequest, DeleteFeatureResponse } from "../models/models_0";
import { de_DeleteFeatureCommand, se_DeleteFeatureCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteFeatureCommand}.
 */
export interface DeleteFeatureCommandInput extends DeleteFeatureRequest {}
/**
 * @public
 *
 * The output of {@link DeleteFeatureCommand}.
 */
export interface DeleteFeatureCommandOutput extends DeleteFeatureResponse, __MetadataBearer {}

/**
 * <p>Deletes an Evidently feature.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EvidentlyClient, DeleteFeatureCommand } from "@aws-sdk/client-evidently"; // ES Modules import
 * // const { EvidentlyClient, DeleteFeatureCommand } = require("@aws-sdk/client-evidently"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new EvidentlyClient(config);
 * const input = { // DeleteFeatureRequest
 *   project: "STRING_VALUE", // required
 *   feature: "STRING_VALUE", // required
 * };
 * const command = new DeleteFeatureCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteFeatureCommandInput - {@link DeleteFeatureCommandInput}
 * @returns {@link DeleteFeatureCommandOutput}
 * @see {@link DeleteFeatureCommandInput} for command's `input` shape.
 * @see {@link DeleteFeatureCommandOutput} for command's `response` shape.
 * @see {@link EvidentlyClientResolvedConfig | config} for EvidentlyClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A resource was in an inconsistent state during an update or a deletion.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because of request throttling. Retry the request.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The value of a parameter in the request caused an error.</p>
 *
 * @throws {@link EvidentlyServiceException}
 * <p>Base exception class for all service exceptions from Evidently service.</p>
 *
 * @public
 */
export class DeleteFeatureCommand extends $Command
  .classBuilder<
    DeleteFeatureCommandInput,
    DeleteFeatureCommandOutput,
    EvidentlyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EvidentlyClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Evidently", "DeleteFeature", {})
  .n("EvidentlyClient", "DeleteFeatureCommand")
  .f(void 0, void 0)
  .ser(se_DeleteFeatureCommand)
  .de(de_DeleteFeatureCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteFeatureRequest;
      output: {};
    };
    sdk: {
      input: DeleteFeatureCommandInput;
      output: DeleteFeatureCommandOutput;
    };
  };
}
