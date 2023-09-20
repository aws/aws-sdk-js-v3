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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { GetBucketLifecycleConfigurationRequest, GetBucketLifecycleConfigurationResult } from "../models/models_0";
import {
  de_GetBucketLifecycleConfigurationCommand,
  se_GetBucketLifecycleConfigurationCommand,
} from "../protocols/Aws_restXml";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetBucketLifecycleConfigurationCommand}.
 */
export interface GetBucketLifecycleConfigurationCommandInput extends GetBucketLifecycleConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetBucketLifecycleConfigurationCommand}.
 */
export interface GetBucketLifecycleConfigurationCommandOutput
  extends GetBucketLifecycleConfigurationResult,
    __MetadataBearer {}

/**
 * @public
 * <note>
 *             <p>This action gets an Amazon S3 on Outposts bucket's lifecycle configuration. To get an S3
 *             bucket's lifecycle configuration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketLifecycleConfiguration.html">GetBucketLifecycleConfiguration</a> in the <i>Amazon S3 API Reference</i>.
 *          </p>
 *          </note>
 *          <p>Returns the lifecycle configuration information set on the Outposts bucket. For more
 *          information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">Using Amazon S3 on Outposts</a> and for
 *          information about lifecycle configuration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lifecycle-mgmt.html"> Object Lifecycle
 *             Management</a> in <i>Amazon S3 User Guide</i>.</p>
 *          <p>To use this action, you must have permission to perform the
 *             <code>s3-outposts:GetLifecycleConfiguration</code> action. The Outposts bucket owner
 *          has this permission, by default. The bucket owner can grant this permission to others. For
 *          more information about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources">Permissions Related to Bucket Subresource Operations</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-access-control.html">Managing
 *             Access Permissions to Your Amazon S3 Resources</a>.</p>
 *          <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived by using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketLifecycleConfiguration.html#API_control_GetBucketLifecycleConfiguration_Examples">Examples</a> section.</p>
 *          <p>
 *             <code>GetBucketLifecycleConfiguration</code> has the following special error:</p>
 *          <ul>
 *             <li>
 *                <p>Error code: <code>NoSuchLifecycleConfiguration</code>
 *                </p>
 *                <ul>
 *                   <li>
 *                      <p>Description: The lifecycle configuration does not exist.</p>
 *                   </li>
 *                   <li>
 *                      <p>HTTP Status Code: 404 Not Found</p>
 *                   </li>
 *                   <li>
 *                      <p>SOAP Fault Code Prefix: Client</p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 *          <p>The following actions are related to
 *          <code>GetBucketLifecycleConfiguration</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketLifecycleConfiguration.html">PutBucketLifecycleConfiguration</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteBucketLifecycleConfiguration.html">DeleteBucketLifecycleConfiguration</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, GetBucketLifecycleConfigurationCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, GetBucketLifecycleConfigurationCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const input = { // GetBucketLifecycleConfigurationRequest
 *   AccountId: "STRING_VALUE",
 *   Bucket: "STRING_VALUE", // required
 * };
 * const command = new GetBucketLifecycleConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetBucketLifecycleConfigurationResult
 * //   Rules: [ // LifecycleRules
 * //     { // LifecycleRule
 * //       Expiration: { // LifecycleExpiration
 * //         Date: new Date("TIMESTAMP"),
 * //         Days: Number("int"),
 * //         ExpiredObjectDeleteMarker: true || false,
 * //       },
 * //       ID: "STRING_VALUE",
 * //       Filter: { // LifecycleRuleFilter
 * //         Prefix: "STRING_VALUE",
 * //         Tag: { // S3Tag
 * //           Key: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //         And: { // LifecycleRuleAndOperator
 * //           Prefix: "STRING_VALUE",
 * //           Tags: [ // S3TagSet
 * //             {
 * //               Key: "STRING_VALUE", // required
 * //               Value: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //           ObjectSizeGreaterThan: Number("long"),
 * //           ObjectSizeLessThan: Number("long"),
 * //         },
 * //         ObjectSizeGreaterThan: Number("long"),
 * //         ObjectSizeLessThan: Number("long"),
 * //       },
 * //       Status: "Enabled" || "Disabled", // required
 * //       Transitions: [ // TransitionList
 * //         { // Transition
 * //           Date: new Date("TIMESTAMP"),
 * //           Days: Number("int"),
 * //           StorageClass: "GLACIER" || "STANDARD_IA" || "ONEZONE_IA" || "INTELLIGENT_TIERING" || "DEEP_ARCHIVE",
 * //         },
 * //       ],
 * //       NoncurrentVersionTransitions: [ // NoncurrentVersionTransitionList
 * //         { // NoncurrentVersionTransition
 * //           NoncurrentDays: Number("int"),
 * //           StorageClass: "GLACIER" || "STANDARD_IA" || "ONEZONE_IA" || "INTELLIGENT_TIERING" || "DEEP_ARCHIVE",
 * //         },
 * //       ],
 * //       NoncurrentVersionExpiration: { // NoncurrentVersionExpiration
 * //         NoncurrentDays: Number("int"),
 * //         NewerNoncurrentVersions: Number("int"),
 * //       },
 * //       AbortIncompleteMultipartUpload: { // AbortIncompleteMultipartUpload
 * //         DaysAfterInitiation: Number("int"),
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetBucketLifecycleConfigurationCommandInput - {@link GetBucketLifecycleConfigurationCommandInput}
 * @returns {@link GetBucketLifecycleConfigurationCommandOutput}
 * @see {@link GetBucketLifecycleConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetBucketLifecycleConfigurationCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 */
export class GetBucketLifecycleConfigurationCommand extends $Command<
  GetBucketLifecycleConfigurationCommandInput,
  GetBucketLifecycleConfigurationCommandOutput,
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
  constructor(readonly input: GetBucketLifecycleConfigurationCommandInput) {
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
  ): Handler<GetBucketLifecycleConfigurationCommandInput, GetBucketLifecycleConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetBucketLifecycleConfigurationCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getProcessArnablesPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3ControlClient";
    const commandName = "GetBucketLifecycleConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSS3ControlServiceV20180820",
        operation: "GetBucketLifecycleConfiguration",
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
  private serialize(
    input: GetBucketLifecycleConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetBucketLifecycleConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetBucketLifecycleConfigurationCommandOutput> {
    return de_GetBucketLifecycleConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
