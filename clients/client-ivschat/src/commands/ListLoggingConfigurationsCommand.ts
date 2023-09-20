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

import { IvschatClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IvschatClient";
import { ListLoggingConfigurationsRequest, ListLoggingConfigurationsResponse } from "../models/models_0";
import { de_ListLoggingConfigurationsCommand, se_ListLoggingConfigurationsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListLoggingConfigurationsCommand}.
 */
export interface ListLoggingConfigurationsCommandInput extends ListLoggingConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link ListLoggingConfigurationsCommand}.
 */
export interface ListLoggingConfigurationsCommandOutput extends ListLoggingConfigurationsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets summary information about all your logging configurations in the AWS region where
 *          the API request is processed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvschatClient, ListLoggingConfigurationsCommand } from "@aws-sdk/client-ivschat"; // ES Modules import
 * // const { IvschatClient, ListLoggingConfigurationsCommand } = require("@aws-sdk/client-ivschat"); // CommonJS import
 * const client = new IvschatClient(config);
 * const input = { // ListLoggingConfigurationsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListLoggingConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // ListLoggingConfigurationsResponse
 * //   loggingConfigurations: [ // LoggingConfigurationList // required
 * //     { // LoggingConfigurationSummary
 * //       arn: "STRING_VALUE",
 * //       id: "STRING_VALUE",
 * //       createTime: new Date("TIMESTAMP"),
 * //       updateTime: new Date("TIMESTAMP"),
 * //       name: "STRING_VALUE",
 * //       destinationConfiguration: { // DestinationConfiguration Union: only one key present
 * //         s3: { // S3DestinationConfiguration
 * //           bucketName: "STRING_VALUE", // required
 * //         },
 * //         cloudWatchLogs: { // CloudWatchLogsDestinationConfiguration
 * //           logGroupName: "STRING_VALUE", // required
 * //         },
 * //         firehose: { // FirehoseDestinationConfiguration
 * //           deliveryStreamName: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       state: "STRING_VALUE",
 * //       tags: { // Tags
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListLoggingConfigurationsCommandInput - {@link ListLoggingConfigurationsCommandInput}
 * @returns {@link ListLoggingConfigurationsCommandOutput}
 * @see {@link ListLoggingConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListLoggingConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link IvschatClientResolvedConfig | config} for IvschatClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p/>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p/>
 *
 * @throws {@link IvschatServiceException}
 * <p>Base exception class for all service exceptions from Ivschat service.</p>
 *
 */
export class ListLoggingConfigurationsCommand extends $Command<
  ListLoggingConfigurationsCommandInput,
  ListLoggingConfigurationsCommandOutput,
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
  constructor(readonly input: ListLoggingConfigurationsCommandInput) {
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
  ): Handler<ListLoggingConfigurationsCommandInput, ListLoggingConfigurationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListLoggingConfigurationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IvschatClient";
    const commandName = "ListLoggingConfigurationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonInteractiveVideoServiceChat",
        operation: "ListLoggingConfigurations",
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
  private serialize(input: ListLoggingConfigurationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListLoggingConfigurationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListLoggingConfigurationsCommandOutput> {
    return de_ListLoggingConfigurationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
