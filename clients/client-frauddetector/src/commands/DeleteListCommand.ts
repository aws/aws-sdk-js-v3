// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { DeleteListRequest, DeleteListResult } from "../models/models_0";
import { DeleteList } from "../schemas/schemas_9_List";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteListCommand}.
 */
export interface DeleteListCommandInput extends DeleteListRequest {}
/**
 * @public
 *
 * The output of {@link DeleteListCommand}.
 */
export interface DeleteListCommandOutput extends DeleteListResult, __MetadataBearer {}

/**
 * <p>
 *             Deletes the list, provided it is not used in a rule.
 *         </p>
 *          <p> When you delete a list, Amazon Fraud Detector permanently deletes that list and the elements in the list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, DeleteListCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, DeleteListCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * // import type { FraudDetectorClientConfig } from "@aws-sdk/client-frauddetector";
 * const config = {}; // type is FraudDetectorClientConfig
 * const client = new FraudDetectorClient(config);
 * const input = { // DeleteListRequest
 *   name: "STRING_VALUE", // required
 * };
 * const command = new DeleteListCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteListCommandInput - {@link DeleteListCommandInput}
 * @returns {@link DeleteListCommandOutput}
 * @see {@link DeleteListCommandInput} for command's `input` shape.
 * @see {@link DeleteListCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for FraudDetectorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>An exception indicating Amazon Fraud Detector does not have the needed permissions. This can occur if you submit a request, such as <code>PutExternalModel</code>, that specifies a role that is not in your account.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>An exception indicating there was a conflict during a delete operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An exception indicating an internal server error.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>An exception indicating a throttling error.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception indicating a specified value is not allowed.</p>
 *
 * @throws {@link FraudDetectorServiceException}
 * <p>Base exception class for all service exceptions from FraudDetector service.</p>
 *
 *
 * @public
 */
export class DeleteListCommand extends $Command
  .classBuilder<
    DeleteListCommandInput,
    DeleteListCommandOutput,
    FraudDetectorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FraudDetectorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSHawksNestServiceFacade", "DeleteList", {})
  .n("FraudDetectorClient", "DeleteListCommand")
  .sc(DeleteList)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteListRequest;
      output: {};
    };
    sdk: {
      input: DeleteListCommandInput;
      output: DeleteListCommandOutput;
    };
  };
}
