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

import { IvschatClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IvschatClient";
import { CreateLoggingConfigurationRequest, CreateLoggingConfigurationResponse } from "../models/models_0";
import { de_CreateLoggingConfigurationCommand, se_CreateLoggingConfigurationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateLoggingConfigurationCommand}.
 */
export interface CreateLoggingConfigurationCommandInput extends CreateLoggingConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link CreateLoggingConfigurationCommand}.
 */
export interface CreateLoggingConfigurationCommandOutput extends CreateLoggingConfigurationResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a logging configuration that allows clients to store and record sent
 *          messages.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvschatClient, CreateLoggingConfigurationCommand } from "@aws-sdk/client-ivschat"; // ES Modules import
 * // const { IvschatClient, CreateLoggingConfigurationCommand } = require("@aws-sdk/client-ivschat"); // CommonJS import
 * const client = new IvschatClient(config);
 * const input = { // CreateLoggingConfigurationRequest
 *   name: "STRING_VALUE",
 *   destinationConfiguration: { // DestinationConfiguration Union: only one key present
 *     s3: { // S3DestinationConfiguration
 *       bucketName: "STRING_VALUE", // required
 *     },
 *     cloudWatchLogs: { // CloudWatchLogsDestinationConfiguration
 *       logGroupName: "STRING_VALUE", // required
 *     },
 *     firehose: { // FirehoseDestinationConfiguration
 *       deliveryStreamName: "STRING_VALUE", // required
 *     },
 *   },
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateLoggingConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // CreateLoggingConfigurationResponse
 * //   arn: "STRING_VALUE",
 * //   id: "STRING_VALUE",
 * //   createTime: new Date("TIMESTAMP"),
 * //   updateTime: new Date("TIMESTAMP"),
 * //   name: "STRING_VALUE",
 * //   destinationConfiguration: { // DestinationConfiguration Union: only one key present
 * //     s3: { // S3DestinationConfiguration
 * //       bucketName: "STRING_VALUE", // required
 * //     },
 * //     cloudWatchLogs: { // CloudWatchLogsDestinationConfiguration
 * //       logGroupName: "STRING_VALUE", // required
 * //     },
 * //     firehose: { // FirehoseDestinationConfiguration
 * //       deliveryStreamName: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   state: "STRING_VALUE",
 * //   tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateLoggingConfigurationCommandInput - {@link CreateLoggingConfigurationCommandInput}
 * @returns {@link CreateLoggingConfigurationCommandOutput}
 * @see {@link CreateLoggingConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateLoggingConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IvschatClientResolvedConfig | config} for IvschatClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p/>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p/>
 *
 * @throws {@link PendingVerification} (client fault)
 *  <p/>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p/>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p/>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p/>
 *
 * @throws {@link IvschatServiceException}
 * <p>Base exception class for all service exceptions from Ivschat service.</p>
 *
 */
export class CreateLoggingConfigurationCommand extends $Command<
  CreateLoggingConfigurationCommandInput,
  CreateLoggingConfigurationCommandOutput,
  IvschatClientResolvedConfig
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
  constructor(readonly input: CreateLoggingConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IvschatClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateLoggingConfigurationCommandInput, CreateLoggingConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateLoggingConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IvschatClient";
    const commandName = "CreateLoggingConfigurationCommand";
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
  private serialize(input: CreateLoggingConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateLoggingConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateLoggingConfigurationCommandOutput> {
    return de_CreateLoggingConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
