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
  RebootRelationalDatabaseRequest,
  RebootRelationalDatabaseRequestFilterSensitiveLog,
  RebootRelationalDatabaseResult,
  RebootRelationalDatabaseResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1RebootRelationalDatabaseCommand,
  serializeAws_json1_1RebootRelationalDatabaseCommand,
} from "../protocols/Aws_json1_1";

export interface RebootRelationalDatabaseCommandInput extends RebootRelationalDatabaseRequest {}
export interface RebootRelationalDatabaseCommandOutput extends RebootRelationalDatabaseResult, __MetadataBearer {}

/**
 * <p>Restarts a specific database in Amazon Lightsail.</p>
 *          <p>The <code>reboot relational database</code> operation supports tag-based access control
 *       via resource tags applied to the resource identified by relationalDatabaseName. For more
 *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, RebootRelationalDatabaseCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, RebootRelationalDatabaseCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new RebootRelationalDatabaseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RebootRelationalDatabaseCommandInput} for command's `input` shape.
 * @see {@link RebootRelationalDatabaseCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 */
export class RebootRelationalDatabaseCommand extends $Command<
  RebootRelationalDatabaseCommandInput,
  RebootRelationalDatabaseCommandOutput,
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

  constructor(readonly input: RebootRelationalDatabaseCommandInput) {
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
  ): Handler<RebootRelationalDatabaseCommandInput, RebootRelationalDatabaseCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RebootRelationalDatabaseCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "RebootRelationalDatabaseCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RebootRelationalDatabaseRequestFilterSensitiveLog,
      outputFilterSensitiveLog: RebootRelationalDatabaseResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RebootRelationalDatabaseCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RebootRelationalDatabaseCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RebootRelationalDatabaseCommandOutput> {
    return deserializeAws_json1_1RebootRelationalDatabaseCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
