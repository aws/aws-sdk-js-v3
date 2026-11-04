// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteProjectPolicyRequest, DeleteProjectPolicyResponse } from "../models/models_0";
import { DeleteProjectPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * > **Note:** This operation applies only to Amazon Rekognition Custom Labels.
 *
 * Deletes an existing project policy.
 *
 * To get a list of project policies attached to a project, call ListProjectPolicies. To attach a project policy to a project, call PutProjectPolicy.
 *
 * This operation requires permissions to perform the `rekognition:DeleteProjectPolicy` action.
 *
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
 *
 * You are not authorized to perform the action.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * Amazon Rekognition experienced a service issue. Try your call again.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * Input parameter violated a constraint. Validate your parameter before calling the API operation again.
 *
 * @throws {@link InvalidPolicyRevisionIdException} (client fault)
 *
 * The supplied revision id for the project policy is invalid.
 *
 * @throws {@link ProvisionedThroughputExceededException} (client fault)
 *
 * The number of requests exceeded your throughput limit. If you want to increase this limit, contact Amazon Rekognition.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource specified in the request cannot be found.
 *
 * @throws {@link ThrottlingException} (server fault)
 *
 * Amazon Rekognition is temporarily unable to process the request. Try your call again.
 *
 * @throws {@link RekognitionServiceException}
 *
 * Base exception class for all service exceptions from Rekognition service.
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
export class DeleteProjectPolicyCommand extends command<DeleteProjectPolicyCommandInput, DeleteProjectPolicyCommandOutput>(
  _ep0,
  _mw0,
  "DeleteProjectPolicy",
  DeleteProjectPolicy$
) {
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
