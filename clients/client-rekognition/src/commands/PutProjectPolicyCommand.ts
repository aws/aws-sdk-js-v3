// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { PutProjectPolicyRequest, PutProjectPolicyResponse } from "../models/models_0";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";
import { PutProjectPolicy } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutProjectPolicyCommand}.
 */
export interface PutProjectPolicyCommandInput extends PutProjectPolicyRequest {}
/**
 * @public
 *
 * The output of {@link PutProjectPolicyCommand}.
 */
export interface PutProjectPolicyCommandOutput extends PutProjectPolicyResponse, __MetadataBearer {}

/**
 * <note>
 *             <p>This operation applies only to Amazon Rekognition Custom Labels.</p>
 *          </note>
 *          <p>Attaches a project policy to a Amazon Rekognition Custom Labels project in a trusting AWS account. A
 *          project policy specifies that a trusted AWS account can copy a model version from a
 *          trusting AWS account to a project in the trusted AWS account. To copy a model version
 *          you use the <a>CopyProjectVersion</a> operation. Only applies to Custom Labels
 *          projects.</p>
 *          <p>For more information about the format of a project policy document, see Attaching a project policy (SDK)
 *          in the <i>Amazon Rekognition Custom Labels Developer Guide</i>.
 *       </p>
 *          <p>The response from <code>PutProjectPolicy</code> is a revision ID for the project policy.
 *          You can attach multiple project policies to a project. You can also update an existing
 *          project policy by specifying the policy revision ID of the existing policy.</p>
 *          <p>To remove a project policy from a project, call <a>DeleteProjectPolicy</a>.
 *          To get a list of project policies attached to a project, call <a>ListProjectPolicies</a>. </p>
 *          <p>You copy a model version by calling <a>CopyProjectVersion</a>.</p>
 *          <p>This operation requires permissions to perform the <code>rekognition:PutProjectPolicy</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, PutProjectPolicyCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, PutProjectPolicyCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * // import type { RekognitionClientConfig } from "@aws-sdk/client-rekognition";
 * const config = {}; // type is RekognitionClientConfig
 * const client = new RekognitionClient(config);
 * const input = { // PutProjectPolicyRequest
 *   ProjectArn: "STRING_VALUE", // required
 *   PolicyName: "STRING_VALUE", // required
 *   PolicyRevisionId: "STRING_VALUE",
 *   PolicyDocument: "STRING_VALUE", // required
 * };
 * const command = new PutProjectPolicyCommand(input);
 * const response = await client.send(command);
 * // { // PutProjectPolicyResponse
 * //   PolicyRevisionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutProjectPolicyCommandInput - {@link PutProjectPolicyCommandInput}
 * @returns {@link PutProjectPolicyCommandOutput}
 * @see {@link PutProjectPolicyCommandInput} for command's `input` shape.
 * @see {@link PutProjectPolicyCommandOutput} for command's `response` shape.
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
 * @throws {@link LimitExceededException} (client fault)
 *  <p>An Amazon Rekognition service limit was exceeded. For example, if you start too many jobs
 *             concurrently, subsequent calls to start operations (ex:
 *             <code>StartLabelDetection</code>) will raise a <code>LimitExceededException</code>
 *             exception (HTTP status code: 400) until the number of concurrently running jobs is below
 *             the Amazon Rekognition service limit. </p>
 *
 * @throws {@link MalformedPolicyDocumentException} (client fault)
 *  <p>The format of the project policy document that you supplied to
 *       <code>PutProjectPolicy</code> is incorrect. </p>
 *
 * @throws {@link ProvisionedThroughputExceededException} (client fault)
 *  <p>The number of requests exceeded your throughput limit. If you want to increase this
 *       limit, contact Amazon Rekognition.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>A resource with the specified ID already exists.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request cannot be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p></p>
 *          <p>The size of the collection exceeds the allowed limit. For more information,
 *       see Guidelines and quotas in Amazon Rekognition in the Amazon Rekognition Developer Guide. </p>
 *
 * @throws {@link ThrottlingException} (server fault)
 *  <p>Amazon Rekognition is temporarily unable to process the request. Try your call again.</p>
 *
 * @throws {@link RekognitionServiceException}
 * <p>Base exception class for all service exceptions from Rekognition service.</p>
 *
 *
 * @example PutProjectPolicy
 * ```javascript
 * // This operation attaches a project policy to a Amazon Rekognition Custom Labels project in a trusting AWS account.
 * const input = {
 *   PolicyDocument: `'{"Version":"2012-10-17","Statement":[{"Effect":"ALLOW","Principal":{"AWS":"principal"},"Action":"rekognition:CopyProjectVersion","Resource":"arn:aws:rekognition:us-east-1:123456789012:project/my-sdk-project/version/DestinationVersionName/1627045542080"}]}'`,
 *   PolicyName: "SamplePolicy",
 *   PolicyRevisionId: "0123456789abcdef",
 *   ProjectArn: "arn:aws:rekognition:us-east-1:111122223333:project/my-sdk-project/1656557051929"
 * };
 * const command = new PutProjectPolicyCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   PolicyRevisionId: "0123456789abcdef"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class PutProjectPolicyCommand extends $Command
  .classBuilder<
    PutProjectPolicyCommandInput,
    PutProjectPolicyCommandOutput,
    RekognitionClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RekognitionClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RekognitionService", "PutProjectPolicy", {})
  .n("RekognitionClient", "PutProjectPolicyCommand")
  .sc(PutProjectPolicy)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutProjectPolicyRequest;
      output: PutProjectPolicyResponse;
    };
    sdk: {
      input: PutProjectPolicyCommandInput;
      output: PutProjectPolicyCommandOutput;
    };
  };
}
