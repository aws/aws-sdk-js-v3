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
import { ListInstanceStorageConfigsRequest, ListInstanceStorageConfigsResponse } from "../models/models_1";
import { de_ListInstanceStorageConfigsCommand, se_ListInstanceStorageConfigsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListInstanceStorageConfigsCommand}.
 */
export interface ListInstanceStorageConfigsCommandInput extends ListInstanceStorageConfigsRequest {}
/**
 * @public
 *
 * The output of {@link ListInstanceStorageConfigsCommand}.
 */
export interface ListInstanceStorageConfigsCommandOutput extends ListInstanceStorageConfigsResponse, __MetadataBearer {}

/**
 * @public
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Returns a paginated list of storage configs for the identified instance and resource
 *    type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListInstanceStorageConfigsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListInstanceStorageConfigsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // ListInstanceStorageConfigsRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ResourceType: "CHAT_TRANSCRIPTS" || "CALL_RECORDINGS" || "SCHEDULED_REPORTS" || "MEDIA_STREAMS" || "CONTACT_TRACE_RECORDS" || "AGENT_EVENTS" || "REAL_TIME_CONTACT_ANALYSIS_SEGMENTS" || "ATTACHMENTS" || "CONTACT_EVALUATIONS" || "SCREEN_RECORDINGS", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListInstanceStorageConfigsCommand(input);
 * const response = await client.send(command);
 * // { // ListInstanceStorageConfigsResponse
 * //   StorageConfigs: [ // InstanceStorageConfigs
 * //     { // InstanceStorageConfig
 * //       AssociationId: "STRING_VALUE",
 * //       StorageType: "S3" || "KINESIS_VIDEO_STREAM" || "KINESIS_STREAM" || "KINESIS_FIREHOSE", // required
 * //       S3Config: { // S3Config
 * //         BucketName: "STRING_VALUE", // required
 * //         BucketPrefix: "STRING_VALUE", // required
 * //         EncryptionConfig: { // EncryptionConfig
 * //           EncryptionType: "KMS", // required
 * //           KeyId: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       KinesisVideoStreamConfig: { // KinesisVideoStreamConfig
 * //         Prefix: "STRING_VALUE", // required
 * //         RetentionPeriodHours: Number("int"), // required
 * //         EncryptionConfig: {
 * //           EncryptionType: "KMS", // required
 * //           KeyId: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       KinesisStreamConfig: { // KinesisStreamConfig
 * //         StreamArn: "STRING_VALUE", // required
 * //       },
 * //       KinesisFirehoseConfig: { // KinesisFirehoseConfig
 * //         FirehoseArn: "STRING_VALUE", // required
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListInstanceStorageConfigsCommandInput - {@link ListInstanceStorageConfigsCommandInput}
 * @returns {@link ListInstanceStorageConfigsCommandOutput}
 * @see {@link ListInstanceStorageConfigsCommandInput} for command's `input` shape.
 * @see {@link ListInstanceStorageConfigsCommandOutput} for command's `response` shape.
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
export class ListInstanceStorageConfigsCommand extends $Command<
  ListInstanceStorageConfigsCommandInput,
  ListInstanceStorageConfigsCommandOutput,
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
  constructor(readonly input: ListInstanceStorageConfigsCommandInput) {
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
  ): Handler<ListInstanceStorageConfigsCommandInput, ListInstanceStorageConfigsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListInstanceStorageConfigsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "ListInstanceStorageConfigsCommand";
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
  private serialize(input: ListInstanceStorageConfigsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListInstanceStorageConfigsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListInstanceStorageConfigsCommandOutput> {
    return de_ListInstanceStorageConfigsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
