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
} from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { UpdateInstanceStorageConfigRequest } from "../models/models_1";
import {
  de_UpdateInstanceStorageConfigCommand,
  se_UpdateInstanceStorageConfigCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateInstanceStorageConfigCommand}.
 */
export interface UpdateInstanceStorageConfigCommandInput extends UpdateInstanceStorageConfigRequest {}
/**
 * @public
 *
 * The output of {@link UpdateInstanceStorageConfigCommand}.
 */
export interface UpdateInstanceStorageConfigCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Updates an existing configuration for a resource type. This API is idempotent.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateInstanceStorageConfigCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateInstanceStorageConfigCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // UpdateInstanceStorageConfigRequest
 *   InstanceId: "STRING_VALUE", // required
 *   AssociationId: "STRING_VALUE", // required
 *   ResourceType: "CHAT_TRANSCRIPTS" || "CALL_RECORDINGS" || "SCHEDULED_REPORTS" || "MEDIA_STREAMS" || "CONTACT_TRACE_RECORDS" || "AGENT_EVENTS" || "REAL_TIME_CONTACT_ANALYSIS_SEGMENTS" || "ATTACHMENTS" || "CONTACT_EVALUATIONS" || "SCREEN_RECORDINGS", // required
 *   StorageConfig: { // InstanceStorageConfig
 *     AssociationId: "STRING_VALUE",
 *     StorageType: "S3" || "KINESIS_VIDEO_STREAM" || "KINESIS_STREAM" || "KINESIS_FIREHOSE", // required
 *     S3Config: { // S3Config
 *       BucketName: "STRING_VALUE", // required
 *       BucketPrefix: "STRING_VALUE", // required
 *       EncryptionConfig: { // EncryptionConfig
 *         EncryptionType: "KMS", // required
 *         KeyId: "STRING_VALUE", // required
 *       },
 *     },
 *     KinesisVideoStreamConfig: { // KinesisVideoStreamConfig
 *       Prefix: "STRING_VALUE", // required
 *       RetentionPeriodHours: Number("int"), // required
 *       EncryptionConfig: {
 *         EncryptionType: "KMS", // required
 *         KeyId: "STRING_VALUE", // required
 *       },
 *     },
 *     KinesisStreamConfig: { // KinesisStreamConfig
 *       StreamArn: "STRING_VALUE", // required
 *     },
 *     KinesisFirehoseConfig: { // KinesisFirehoseConfig
 *       FirehoseArn: "STRING_VALUE", // required
 *     },
 *   },
 * };
 * const command = new UpdateInstanceStorageConfigCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateInstanceStorageConfigCommandInput - {@link UpdateInstanceStorageConfigCommandInput}
 * @returns {@link UpdateInstanceStorageConfigCommandOutput}
 * @see {@link UpdateInstanceStorageConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateInstanceStorageConfigCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 */
export class UpdateInstanceStorageConfigCommand extends $Command<
  UpdateInstanceStorageConfigCommandInput,
  UpdateInstanceStorageConfigCommandOutput,
  ConnectClientResolvedConfig
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
  constructor(readonly input: UpdateInstanceStorageConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateInstanceStorageConfigCommandInput, UpdateInstanceStorageConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateInstanceStorageConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "UpdateInstanceStorageConfigCommand";
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
  private serialize(input: UpdateInstanceStorageConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateInstanceStorageConfigCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateInstanceStorageConfigCommandOutput> {
    return de_UpdateInstanceStorageConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
