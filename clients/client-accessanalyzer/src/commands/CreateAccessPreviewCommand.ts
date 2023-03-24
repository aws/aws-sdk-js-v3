// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { AccessAnalyzerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccessAnalyzerClient";
import { CreateAccessPreviewRequest, CreateAccessPreviewResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateAccessPreviewCommand,
  serializeAws_restJson1CreateAccessPreviewCommand,
} from "../protocols/Aws_restJson1";

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
 * const input = {
 *   analyzerArn: "STRING_VALUE", // required
 *   configurations: { // required
 *     "<keys>": { // Union: only one key present
 *       ebsSnapshot: {
 *         userIds: [
 *           "STRING_VALUE",
 *         ],
 *         groups: [
 *           "STRING_VALUE",
 *         ],
 *         kmsKeyId: "STRING_VALUE",
 *       },
 *       ecrRepository: {
 *         repositoryPolicy: "STRING_VALUE",
 *       },
 *       iamRole: {
 *         trustPolicy: "STRING_VALUE",
 *       },
 *       efsFileSystem: {
 *         fileSystemPolicy: "STRING_VALUE",
 *       },
 *       kmsKey: {
 *         keyPolicies: {
 *           "<keys>": "STRING_VALUE",
 *         },
 *         grants: [
 *           {
 *             operations: [ // required
 *               "STRING_VALUE",
 *             ],
 *             granteePrincipal: "STRING_VALUE", // required
 *             retiringPrincipal: "STRING_VALUE",
 *             constraints: {
 *               encryptionContextEquals: {
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
 *       rdsDbClusterSnapshot: {
 *         attributes: {
 *           "<keys>": { // Union: only one key present
 *             accountIds: [
 *               "STRING_VALUE",
 *             ],
 *           },
 *         },
 *         kmsKeyId: "STRING_VALUE",
 *       },
 *       rdsDbSnapshot: {
 *         attributes: {
 *           "<keys>": { // Union: only one key present
 *             accountIds: [
 *               "STRING_VALUE",
 *             ],
 *           },
 *         },
 *         kmsKeyId: "STRING_VALUE",
 *       },
 *       secretsManagerSecret: {
 *         kmsKeyId: "STRING_VALUE",
 *         secretPolicy: "STRING_VALUE",
 *       },
 *       s3Bucket: {
 *         bucketPolicy: "STRING_VALUE",
 *         bucketAclGrants: [
 *           {
 *             permission: "STRING_VALUE", // required
 *             grantee: { // Union: only one key present
 *               id: "STRING_VALUE",
 *               uri: "STRING_VALUE",
 *             },
 *           },
 *         ],
 *         bucketPublicAccessBlock: {
 *           ignorePublicAcls: true || false, // required
 *           restrictPublicBuckets: true || false, // required
 *         },
 *         accessPoints: {
 *           "<keys>": {
 *             accessPointPolicy: "STRING_VALUE",
 *             publicAccessBlock: {
 *               ignorePublicAcls: true || false, // required
 *               restrictPublicBuckets: true || false, // required
 *             },
 *             networkOrigin: { // Union: only one key present
 *               vpcConfiguration: {
 *                 vpcId: "STRING_VALUE", // required
 *               },
 *               internetConfiguration: {},
 *             },
 *           },
 *         },
 *       },
 *       snsTopic: {
 *         topicPolicy: "STRING_VALUE",
 *       },
 *       sqsQueue: {
 *         queuePolicy: "STRING_VALUE",
 *       },
 *     },
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateAccessPreviewCommand(input);
 * const response = await client.send(command);
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
    return serializeAws_restJson1CreateAccessPreviewCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateAccessPreviewCommandOutput> {
    return deserializeAws_restJson1CreateAccessPreviewCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
