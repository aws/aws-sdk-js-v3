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
import { DescribeInstanceStorageConfigRequest, DescribeInstanceStorageConfigResponse } from "../models/models_0";
import {
  de_DescribeInstanceStorageConfigCommand,
  se_DescribeInstanceStorageConfigCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeInstanceStorageConfigCommand}.
 */
export interface DescribeInstanceStorageConfigCommandInput extends DescribeInstanceStorageConfigRequest {}
/**
 * @public
 *
 * The output of {@link DescribeInstanceStorageConfigCommand}.
 */
export interface DescribeInstanceStorageConfigCommandOutput
  extends DescribeInstanceStorageConfigResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Retrieves the current storage configurations for the specified resource type, association
 *    ID, and instance ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DescribeInstanceStorageConfigCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DescribeInstanceStorageConfigCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // DescribeInstanceStorageConfigRequest
 *   InstanceId: "STRING_VALUE", // required
 *   AssociationId: "STRING_VALUE", // required
 *   ResourceType: "CHAT_TRANSCRIPTS" || "CALL_RECORDINGS" || "SCHEDULED_REPORTS" || "MEDIA_STREAMS" || "CONTACT_TRACE_RECORDS" || "AGENT_EVENTS" || "REAL_TIME_CONTACT_ANALYSIS_SEGMENTS" || "ATTACHMENTS" || "CONTACT_EVALUATIONS" || "SCREEN_RECORDINGS", // required
 * };
 * const command = new DescribeInstanceStorageConfigCommand(input);
 * const response = await client.send(command);
 * // { // DescribeInstanceStorageConfigResponse
 * //   StorageConfig: { // InstanceStorageConfig
 * //     AssociationId: "STRING_VALUE",
 * //     StorageType: "S3" || "KINESIS_VIDEO_STREAM" || "KINESIS_STREAM" || "KINESIS_FIREHOSE", // required
 * //     S3Config: { // S3Config
 * //       BucketName: "STRING_VALUE", // required
 * //       BucketPrefix: "STRING_VALUE", // required
 * //       EncryptionConfig: { // EncryptionConfig
 * //         EncryptionType: "KMS", // required
 * //         KeyId: "STRING_VALUE", // required
 * //       },
 * //     },
 * //     KinesisVideoStreamConfig: { // KinesisVideoStreamConfig
 * //       Prefix: "STRING_VALUE", // required
 * //       RetentionPeriodHours: Number("int"), // required
 * //       EncryptionConfig: {
 * //         EncryptionType: "KMS", // required
 * //         KeyId: "STRING_VALUE", // required
 * //       },
 * //     },
 * //     KinesisStreamConfig: { // KinesisStreamConfig
 * //       StreamArn: "STRING_VALUE", // required
 * //     },
 * //     KinesisFirehoseConfig: { // KinesisFirehoseConfig
 * //       FirehoseArn: "STRING_VALUE", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeInstanceStorageConfigCommandInput - {@link DescribeInstanceStorageConfigCommandInput}
 * @returns {@link DescribeInstanceStorageConfigCommandOutput}
 * @see {@link DescribeInstanceStorageConfigCommandInput} for command's `input` shape.
 * @see {@link DescribeInstanceStorageConfigCommandOutput} for command's `response` shape.
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
export class DescribeInstanceStorageConfigCommand extends $Command<
  DescribeInstanceStorageConfigCommandInput,
  DescribeInstanceStorageConfigCommandOutput,
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
  constructor(readonly input: DescribeInstanceStorageConfigCommandInput) {
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
  ): Handler<DescribeInstanceStorageConfigCommandInput, DescribeInstanceStorageConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeInstanceStorageConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "DescribeInstanceStorageConfigCommand";
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
  private serialize(input: DescribeInstanceStorageConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeInstanceStorageConfigCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeInstanceStorageConfigCommandOutput> {
    return de_DescribeInstanceStorageConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
