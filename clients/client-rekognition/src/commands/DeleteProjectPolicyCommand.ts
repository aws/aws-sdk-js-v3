// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteProjectPolicyRequest, DeleteProjectPolicyResponse } from "../models/models_0";
import type { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";
import { DeleteProjectPolicy } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteProjectPolicyCommand}.
 */
export interface DeleteProjectPolicyCommandInput extends DeleteProjectPolicyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteProjectPolicyCommand}.
 */
export interface DeleteProjectPolicyCommandOutput extends DeleteProjectPolicyResponse, __MetadataBearer {}

/**
 * <note>
 *             <p>This operation applies only to Amazon Rekognition Custom Labels.</p>
 *          </note>
 *          <p>Deletes an existing project policy.</p>
 *          <p>To get a list of project policies attached to a project, call <a>ListProjectPolicies</a>. To attach a project policy to a project, call <a>PutProjectPolicy</a>.</p>
 *          <p>This operation requires permissions to perform the <code>rekognition:DeleteProjectPolicy</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, DeleteProjectPolicyCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, DeleteProjectPolicyCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * // import type { RekognitionClientConfig } from "@aws-sdk/client-rekognition";
 * const config = {}; // type is RekognitionClientConfig
 * const client = new RekognitionClient(config);
 * const input = { // DeleteProjectPolicyRequest
 *   ProjectArn: "STRING_VALUE", // required
 *   PolicyName: "STRING_VALUE", // required
 *   PolicyRevisionId: "STRING_VALUE",
 * };
 * const command = new DeleteProjectPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteProjectPolicyCommandInput - {@link DeleteProjectPolicyCommandInput}
 * @returns {@link DeleteProjectPolicyCommandOutput}
 * @see {@link DeleteProjectPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteProjectPolicyCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for RekognitionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform the action.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Amazon Rekognition experienced a service issue. Try your call again.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Input parameter violated a constraint. Validate your parameter before calling the API
 *       operation again.</p>
 *
 * @throws {@link InvalidPolicyRevisionIdException} (client fault)
 *  <p>The supplied revision id for the project policy is invalid.</p>
 *
 * @throws {@link ProvisionedThroughputExceededException} (client fault)
 *  <p>The number of requests exceeded your throughput limit. If you want to increase this
 *       limit, contact Amazon Rekognition.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request cannot be found.</p>
 *
 * @throws {@link ThrottlingException} (server fault)
 *  <p>Amazon Rekognition is temporarily unable to process the request. Try your call again.</p>
 *
 * @throws {@link RekognitionServiceException}
 * <p>Base exception class for all service exceptions from Rekognition service.</p>
 *
 *
 * @example DeleteProjectPolicy
 * ```javascript
 * // This operation deletes a revision of an existing project policy from an Amazon Rekognition Custom Labels project.
 * const input = {
 *   PolicyName: "testPolicy1",
 *   PolicyRevisionId: "3b274c25e9203a56a99e00e3ff205fbc",
 *   ProjectArn: "arn:aws:rekognition:us-east-1:111122223333:project/SourceProject/1656557123456"
 * };
 * const command = new DeleteProjectPolicyCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteProjectPolicyCommand extends $Command
  .classBuilder<
    DeleteProjectPolicyCommandInput,
    DeleteProjectPolicyCommandOutput,
    RekognitionClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RekognitionClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RekognitionService", "DeleteProjectPolicy", {})
  .n("RekognitionClient", "DeleteProjectPolicyCommand")
  .sc(DeleteProjectPolicy)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteProjectPolicyRequest;
      output: {};
    };
    sdk: {
      input: DeleteProjectPolicyCommandInput;
      output: DeleteProjectPolicyCommandOutput;
    };
  };
}
