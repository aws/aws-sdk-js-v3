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

import { AccessAnalyzerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccessAnalyzerClient";
import { CreateAccessPreviewRequest, CreateAccessPreviewResponse } from "../models/models_0";
import { de_CreateAccessPreviewCommand, se_CreateAccessPreviewCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateAccessPreviewCommand}.
 */
export interface CreateAccessPreviewCommandInput extends CreateAccessPreviewRequest {}
/**
 * @public
 *
 * The output of {@link CreateAccessPreviewCommand}.
 */
export interface CreateAccessPreviewCommandOutput extends CreateAccessPreviewResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates an access preview that allows you to preview IAM Access Analyzer findings for your
 *          resource before deploying resource permissions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, CreateAccessPreviewCommand } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, CreateAccessPreviewCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * const client = new AccessAnalyzerClient(config);
 * const input = { // CreateAccessPreviewRequest
 *   analyzerArn: "STRING_VALUE", // required
 *   configurations: { // ConfigurationsMap // required
 *     "<keys>": { // Configuration Union: only one key present
 *       ebsSnapshot: { // EbsSnapshotConfiguration
 *         userIds: [ // EbsUserIdList
 *           "STRING_VALUE",
 *         ],
 *         groups: [ // EbsGroupList
 *           "STRING_VALUE",
 *         ],
 *         kmsKeyId: "STRING_VALUE",
 *       },
 *       ecrRepository: { // EcrRepositoryConfiguration
 *         repositoryPolicy: "STRING_VALUE",
 *       },
 *       iamRole: { // IamRoleConfiguration
 *         trustPolicy: "STRING_VALUE",
 *       },
 *       efsFileSystem: { // EfsFileSystemConfiguration
 *         fileSystemPolicy: "STRING_VALUE",
 *       },
 *       kmsKey: { // KmsKeyConfiguration
 *         keyPolicies: { // KmsKeyPoliciesMap
 *           "<keys>": "STRING_VALUE",
 *         },
 *         grants: [ // KmsGrantConfigurationsList
 *           { // KmsGrantConfiguration
 *             operations: [ // KmsGrantOperationsList // required
 *               "STRING_VALUE",
 *             ],
 *             granteePrincipal: "STRING_VALUE", // required
 *             retiringPrincipal: "STRING_VALUE",
 *             constraints: { // KmsGrantConstraints
 *               encryptionContextEquals: { // KmsConstraintsMap
 *                 "<keys>": "STRING_VALUE",
 *               },
 *               encryptionContextSubset: {
 *                 "<keys>": "STRING_VALUE",
 *               },
 *             },
 *             issuingAccount: "STRING_VALUE", // required
 *           },
 *         ],
 *       },
 *       rdsDbClusterSnapshot: { // RdsDbClusterSnapshotConfiguration
 *         attributes: { // RdsDbClusterSnapshotAttributesMap
 *           "<keys>": { // RdsDbClusterSnapshotAttributeValue Union: only one key present
 *             accountIds: [ // RdsDbClusterSnapshotAccountIdsList
 *               "STRING_VALUE",
 *             ],
 *           },
 *         },
 *         kmsKeyId: "STRING_VALUE",
 *       },
 *       rdsDbSnapshot: { // RdsDbSnapshotConfiguration
 *         attributes: { // RdsDbSnapshotAttributesMap
 *           "<keys>": { // RdsDbSnapshotAttributeValue Union: only one key present
 *             accountIds: [ // RdsDbSnapshotAccountIdsList
 *               "STRING_VALUE",
 *             ],
 *           },
 *         },
 *         kmsKeyId: "STRING_VALUE",
 *       },
 *       secretsManagerSecret: { // SecretsManagerSecretConfiguration
 *         kmsKeyId: "STRING_VALUE",
 *         secretPolicy: "STRING_VALUE",
 *       },
 *       s3Bucket: { // S3BucketConfiguration
 *         bucketPolicy: "STRING_VALUE",
 *         bucketAclGrants: [ // S3BucketAclGrantConfigurationsList
 *           { // S3BucketAclGrantConfiguration
 *             permission: "STRING_VALUE", // required
 *             grantee: { // AclGrantee Union: only one key present
 *               id: "STRING_VALUE",
 *               uri: "STRING_VALUE",
 *             },
 *           },
 *         ],
 *         bucketPublicAccessBlock: { // S3PublicAccessBlockConfiguration
 *           ignorePublicAcls: true || false, // required
 *           restrictPublicBuckets: true || false, // required
 *         },
 *         accessPoints: { // S3AccessPointConfigurationsMap
 *           "<keys>": { // S3AccessPointConfiguration
 *             accessPointPolicy: "STRING_VALUE",
 *             publicAccessBlock: {
 *               ignorePublicAcls: true || false, // required
 *               restrictPublicBuckets: true || false, // required
 *             },
 *             networkOrigin: { // NetworkOriginConfiguration Union: only one key present
 *               vpcConfiguration: { // VpcConfiguration
 *                 vpcId: "STRING_VALUE", // required
 *               },
 *               internetConfiguration: {},
 *             },
 *           },
 *         },
 *       },
 *       snsTopic: { // SnsTopicConfiguration
 *         topicPolicy: "STRING_VALUE",
 *       },
 *       sqsQueue: { // SqsQueueConfiguration
 *         queuePolicy: "STRING_VALUE",
 *       },
 *     },
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateAccessPreviewCommand(input);
 * const response = await client.send(command);
 * // { // CreateAccessPreviewResponse
 * //   id: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateAccessPreviewCommandInput - {@link CreateAccessPreviewCommandInput}
 * @returns {@link CreateAccessPreviewCommandOutput}
 * @see {@link CreateAccessPreviewCommandInput} for command's `input` shape.
 * @see {@link CreateAccessPreviewCommandOutput} for command's `response` shape.
 * @see {@link AccessAnalyzerClientResolvedConfig | config} for AccessAnalyzerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A conflict exception error.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Service quote met error.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Throttling limit exceeded error.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validation exception error.</p>
 *
 * @throws {@link AccessAnalyzerServiceException}
 * <p>Base exception class for all service exceptions from AccessAnalyzer service.</p>
 *
 */
export class CreateAccessPreviewCommand extends $Command<
  CreateAccessPreviewCommandInput,
  CreateAccessPreviewCommandOutput,
  AccessAnalyzerClientResolvedConfig
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
  constructor(readonly input: CreateAccessPreviewCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AccessAnalyzerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateAccessPreviewCommandInput, CreateAccessPreviewCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateAccessPreviewCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AccessAnalyzerClient";
    const commandName = "CreateAccessPreviewCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AccessAnalyzer",
        operation: "CreateAccessPreview",
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
  private serialize(input: CreateAccessPreviewCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateAccessPreviewCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateAccessPreviewCommandOutput> {
    return de_CreateAccessPreviewCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
