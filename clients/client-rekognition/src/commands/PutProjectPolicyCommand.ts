// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutProjectPolicyRequest, PutProjectPolicyResponse } from "../models/models_0";
import { PutProjectPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * > **Note:** This operation applies only to Amazon Rekognition Custom Labels.
 *
 * Attaches a project policy to a Amazon Rekognition Custom Labels project in a trusting AWS account. A project policy specifies that a trusted AWS account can copy a model version from a trusting AWS account to a project in the trusted AWS account. To copy a model version you use the CopyProjectVersion operation. Only applies to Custom Labels projects.
 *
 * For more information about the format of a project policy document, see Attaching a project policy (SDK) in the *Amazon Rekognition Custom Labels Developer Guide*.
 *
 * The response from `PutProjectPolicy` is a revision ID for the project policy. You can attach multiple project policies to a project. You can also update an existing project policy by specifying the policy revision ID of the existing policy.
 *
 * To remove a project policy from a project, call DeleteProjectPolicy. To get a list of project policies attached to a project, call ListProjectPolicies.
 *
 * You copy a model version by calling CopyProjectVersion.
 *
 * This operation requires permissions to perform the `rekognition:PutProjectPolicy` action.
 *
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
 * @throws {@link LimitExceededException} (client fault)
 *
 * An Amazon Rekognition service limit was exceeded. For example, if you start too many jobs concurrently, subsequent calls to start operations (ex: `StartLabelDetection`) will raise a `LimitExceededException` exception (HTTP status code: 400) until the number of concurrently running jobs is below the Amazon Rekognition service limit.
 *
 * @throws {@link MalformedPolicyDocumentException} (client fault)
 *
 * The format of the project policy document that you supplied to `PutProjectPolicy` is incorrect.
 *
 * @throws {@link ProvisionedThroughputExceededException} (client fault)
 *
 * The number of requests exceeded your throughput limit. If you want to increase this limit, contact Amazon Rekognition.
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *
 * A resource with the specified ID already exists.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource specified in the request cannot be found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The size of the collection exceeds the allowed limit. For more information, see Guidelines and quotas in Amazon Rekognition in the Amazon Rekognition Developer Guide.
 *
 * @throws {@link ThrottlingException} (server fault)
 *
 * Amazon Rekognition is temporarily unable to process the request. Try your call again.
 *
 * @throws {@link RekognitionServiceException}
 *
 * Base exception class for all service exceptions from Rekognition service.
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
export class PutProjectPolicyCommand extends command<PutProjectPolicyCommandInput, PutProjectPolicyCommandOutput>(
  _ep0,
  _mw0,
  "PutProjectPolicy",
  PutProjectPolicy$
) {
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
