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

import {
  KinesisAnalyticsV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../KinesisAnalyticsV2Client";
import { AddApplicationInputRequest, AddApplicationInputResponse } from "../models/models_0";
import {
  deserializeAws_json1_1AddApplicationInputCommand,
  serializeAws_json1_1AddApplicationInputCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link AddApplicationInputCommand}.
 */
export interface AddApplicationInputCommandInput extends AddApplicationInputRequest {}
/**
 * @public
 *
 * The output of {@link AddApplicationInputCommand}.
 */
export interface AddApplicationInputCommandOutput extends AddApplicationInputResponse, __MetadataBearer {}

/**
 * @public
 * <p>
 *       Adds a streaming source to your SQL-based Kinesis Data Analytics application.
 *     </p>
 *          <p>You can add a streaming source when you create an application, or you can use this
 *       operation to add a streaming source after you create an application. For more information, see
 *         <a>CreateApplication</a>.</p>
 *          <p>Any configuration update, including adding a streaming source using this operation,
 *       results in a new version of the application. You can use the <a>DescribeApplication</a> operation
 *       to find the current application version.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsV2Client, AddApplicationInputCommand } from "@aws-sdk/client-kinesis-analytics-v2"; // ES Modules import
 * // const { KinesisAnalyticsV2Client, AddApplicationInputCommand } = require("@aws-sdk/client-kinesis-analytics-v2"); // CommonJS import
 * const client = new KinesisAnalyticsV2Client(config);
 * const command = new AddApplicationInputCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param AddApplicationInputCommandInput - {@link AddApplicationInputCommandInput}
 * @returns {@link AddApplicationInputCommandOutput}
 * @see {@link AddApplicationInputCommandInput} for command's `input` shape.
 * @see {@link AddApplicationInputCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsV2ClientResolvedConfig | config} for KinesisAnalyticsV2Client's `config` shape.
 *
 * @throws {@link CodeValidationException} (client fault)
 *  <p>The user-provided application code (query) is not valid. This can be a simple syntax
 *       error.</p>
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Exception thrown as a result of concurrent modifications to an application. This error can
 *       be the result of attempting to modify an application without using the current application
 *       ID.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>The specified input parameter value is not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request JSON is not valid for the operation.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The application is not available for this operation.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Specified application can't be found.</p>
 *
 *
 */
export class AddApplicationInputCommand extends $Command<
  AddApplicationInputCommandInput,
  AddApplicationInputCommandOutput,
  KinesisAnalyticsV2ClientResolvedConfig
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
  constructor(readonly input: AddApplicationInputCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisAnalyticsV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AddApplicationInputCommandInput, AddApplicationInputCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AddApplicationInputCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisAnalyticsV2Client";
    const commandName = "AddApplicationInputCommand";
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
  private serialize(input: AddApplicationInputCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AddApplicationInputCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AddApplicationInputCommandOutput> {
    return deserializeAws_json1_1AddApplicationInputCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
