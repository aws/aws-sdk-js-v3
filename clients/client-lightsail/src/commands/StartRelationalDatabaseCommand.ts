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

import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import {
  StartRelationalDatabaseRequest,
  StartRelationalDatabaseRequestFilterSensitiveLog,
  StartRelationalDatabaseResult,
  StartRelationalDatabaseResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1StartRelationalDatabaseCommand,
  serializeAws_json1_1StartRelationalDatabaseCommand,
} from "../protocols/Aws_json1_1";

export interface StartRelationalDatabaseCommandInput extends StartRelationalDatabaseRequest {}
export interface StartRelationalDatabaseCommandOutput extends StartRelationalDatabaseResult, __MetadataBearer {}

/**
 * <p>Starts a specific database from a stopped state in Amazon Lightsail. To restart a database,
 *       use the <code>reboot relational database</code> operation.</p>
 *          <p>The <code>start relational database</code> operation supports tag-based access control via
 *       resource tags applied to the resource identified by relationalDatabaseName. For more
 *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, StartRelationalDatabaseCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, StartRelationalDatabaseCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new StartRelationalDatabaseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartRelationalDatabaseCommandInput} for command's `input` shape.
 * @see {@link StartRelationalDatabaseCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 */
export class StartRelationalDatabaseCommand extends $Command<
  StartRelationalDatabaseCommandInput,
  StartRelationalDatabaseCommandOutput,
  LightsailClientResolvedConfig
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

  constructor(readonly input: StartRelationalDatabaseCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartRelationalDatabaseCommandInput, StartRelationalDatabaseCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartRelationalDatabaseCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "StartRelationalDatabaseCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartRelationalDatabaseRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StartRelationalDatabaseResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartRelationalDatabaseCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartRelationalDatabaseCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartRelationalDatabaseCommandOutput> {
    return deserializeAws_json1_1StartRelationalDatabaseCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
