// smithy-typescript generated code
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
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
} from "@smithy/types";

import { DeleteBucketLifecycleConfigurationRequest } from "../models/models_0";
import {
  de_DeleteBucketLifecycleConfigurationCommand,
  se_DeleteBucketLifecycleConfigurationCommand,
} from "../protocols/Aws_restXml";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteBucketLifecycleConfigurationCommand}.
 */
export interface DeleteBucketLifecycleConfigurationCommandInput extends DeleteBucketLifecycleConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteBucketLifecycleConfigurationCommand}.
 */
export interface DeleteBucketLifecycleConfigurationCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <note>
 *             <p>This action deletes an Amazon S3 on Outposts bucket's lifecycle configuration. To delete
 *             an S3 bucket's lifecycle configuration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketLifecycle.html">DeleteBucketLifecycle</a> in the <i>Amazon S3 API Reference</i>. </p>
 *          </note>
 *          <p>Deletes the lifecycle configuration from the specified Outposts bucket.
 *          Amazon S3 on Outposts removes all the lifecycle configuration rules in the lifecycle subresource
 *          associated with the bucket. Your objects never expire, and Amazon S3 on Outposts no longer
 *          automatically deletes any objects on the basis of rules contained in the deleted lifecycle
 *          configuration. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">Using Amazon S3 on Outposts</a> in
 *             <i>Amazon S3 User Guide</i>.</p>
 *          <p>To use this action, you must have permission to perform the
 *             <code>s3-outposts:DeleteLifecycleConfiguration</code> action. By default, the bucket
 *          owner has this permission and the Outposts bucket owner can grant this permission to
 *          others.</p>
 *          <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived by using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteBucketLifecycleConfiguration.html#API_control_DeleteBucketLifecycleConfiguration_Examples">Examples</a> section.</p>
 *          <p>For more information about object expiration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/intro-lifecycle-rules.html#intro-lifecycle-rules-actions">Elements to Describe Lifecycle Actions</a>.</p>
 *          <p>Related actions include:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketLifecycleConfiguration.html">PutBucketLifecycleConfiguration</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketLifecycleConfiguration.html">GetBucketLifecycleConfiguration</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, DeleteBucketLifecycleConfigurationCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, DeleteBucketLifecycleConfigurationCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const input = { // DeleteBucketLifecycleConfigurationRequest
 *   AccountId: "STRING_VALUE",
 *   Bucket: "STRING_VALUE", // required
 * };
 * const command = new DeleteBucketLifecycleConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteBucketLifecycleConfigurationCommandInput - {@link DeleteBucketLifecycleConfigurationCommandInput}
 * @returns {@link DeleteBucketLifecycleConfigurationCommandOutput}
 * @see {@link DeleteBucketLifecycleConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteBucketLifecycleConfigurationCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 */
export class DeleteBucketLifecycleConfigurationCommand extends $Command<
  DeleteBucketLifecycleConfigurationCommandInput,
  DeleteBucketLifecycleConfigurationCommandOutput,
  S3ControlClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      RequiresAccountId: { type: "staticContextParams", value: true },
      AccountId: { type: "contextParams", name: "AccountId" },
      Bucket: { type: "contextParams", name: "Bucket" },
      UseArnRegion: { type: "clientContextParams", name: "useArnRegion" },
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: DeleteBucketLifecycleConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ControlClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteBucketLifecycleConfigurationCommandInput, DeleteBucketLifecycleConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteBucketLifecycleConfigurationCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getProcessArnablesPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3ControlClient";
    const commandName = "DeleteBucketLifecycleConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(
    input: DeleteBucketLifecycleConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DeleteBucketLifecycleConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteBucketLifecycleConfigurationCommandOutput> {
    return de_DeleteBucketLifecycleConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
