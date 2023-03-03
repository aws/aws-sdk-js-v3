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

import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import {
  DescribeGlobalTableInput,
  DescribeGlobalTableInputFilterSensitiveLog,
  DescribeGlobalTableOutput,
  DescribeGlobalTableOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0DescribeGlobalTableCommand,
  serializeAws_json1_0DescribeGlobalTableCommand,
} from "../protocols/Aws_json1_0";

/**
 * The input for {@link DescribeGlobalTableCommand}.
 */
export interface DescribeGlobalTableCommandInput extends DescribeGlobalTableInput {}
/**
 * The output of {@link DescribeGlobalTableCommand}.
 */
export interface DescribeGlobalTableCommandOutput extends DescribeGlobalTableOutput, __MetadataBearer {}

/**
 * <p>Returns information about the specified global table.</p>
 *          <important>
 *             <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V1.html">Version
 *                 2017.11.29 (Legacy)</a> of global tables. We recommend using
 *                 <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21 (Current)</a>
 *                 when creating new global tables, as it provides greater flexibility, higher efficiency and consumes less write capacity than
 *                 2017.11.29 (Legacy). To determine which version you are using, see
 *                 <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.DetermineVersion.html">Determining the version</a>.
 *                 To update existing global tables from version 2017.11.29 (Legacy) to version
 *                 2019.11.21 (Current), see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/V2globaltables_upgrade.html">
 *                     Updating global tables</a>.
 *             </p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, DescribeGlobalTableCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, DescribeGlobalTableCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new DescribeGlobalTableCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeGlobalTableCommandInput} for command's `input` shape.
 * @see {@link DescribeGlobalTableCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for DynamoDBClient's `config` shape.
 *
 */
export class DescribeGlobalTableCommand extends $Command<
  DescribeGlobalTableCommandInput,
  DescribeGlobalTableCommandOutput,
  DynamoDBClientResolvedConfig
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

  constructor(readonly input: DescribeGlobalTableCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeGlobalTableCommandInput, DescribeGlobalTableCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeGlobalTableCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DynamoDBClient";
    const commandName = "DescribeGlobalTableCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeGlobalTableInputFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeGlobalTableOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeGlobalTableCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0DescribeGlobalTableCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeGlobalTableCommandOutput> {
    return deserializeAws_json1_0DescribeGlobalTableCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
