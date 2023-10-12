// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { PutProjectPolicyRequest, PutProjectPolicyResponse } from "../models/models_0";
import { de_PutProjectPolicyCommand, se_PutProjectPolicyCommand } from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
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
 * @example PutProjectPolicy
 * ```javascript
 * // This operation attaches a project policy to a Amazon Rekognition Custom Labels project in a trusting AWS account.
 * const input = {
 *   "PolicyDocument": "'{\"Version\":\"2012-10-17\",\"Statement\":[{\"Effect\":\"ALLOW\",\"Principal\":{\"AWS\":\"principal\"},\"Action\":\"rekognition:CopyProjectVersion\",\"Resource\":\"arn:aws:rekognition:us-east-1:123456789012:project/my-sdk-project/version/DestinationVersionName/1627045542080\"}]}'",
 *   "PolicyName": "SamplePolicy",
 *   "PolicyRevisionId": "0123456789abcdef",
 *   "ProjectArn": "arn:aws:rekognition:us-east-1:111122223333:project/my-sdk-project/1656557051929"
 * };
 * const command = new PutProjectPolicyCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "PolicyRevisionId": "0123456789abcdef"
 * }
 * *\/
 * // example id: putprojectpolicy-1658201727623
 * ```
 *
 */
export class PutProjectPolicyCommand extends $Command<
  PutProjectPolicyCommandInput,
  PutProjectPolicyCommandOutput,
  RekognitionClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: PutProjectPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RekognitionClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutProjectPolicyCommandInput, PutProjectPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutProjectPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RekognitionClient";
    const commandName = "PutProjectPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "RekognitionService",
        operation: "PutProjectPolicy",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: PutProjectPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutProjectPolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutProjectPolicyCommandOutput> {
    return de_PutProjectPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
