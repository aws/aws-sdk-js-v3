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
  UpdateRelationalDatabaseRequest,
  UpdateRelationalDatabaseRequestFilterSensitiveLog,
  UpdateRelationalDatabaseResult,
  UpdateRelationalDatabaseResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1UpdateRelationalDatabaseCommand,
  serializeAws_json1_1UpdateRelationalDatabaseCommand,
} from "../protocols/Aws_json1_1";

export interface UpdateRelationalDatabaseCommandInput extends UpdateRelationalDatabaseRequest {}
export interface UpdateRelationalDatabaseCommandOutput extends UpdateRelationalDatabaseResult, __MetadataBearer {}

/**
 * <p>Allows the update of one or more attributes of a database in Amazon Lightsail.</p>
 *          <p>Updates are applied immediately, or in cases where the updates could result in an outage,
 *       are applied during the database's predefined maintenance window.</p>
 *          <p>The <code>update relational database</code> operation supports tag-based access control
 *       via resource tags applied to the resource identified by relationalDatabaseName. For more
 *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, UpdateRelationalDatabaseCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, UpdateRelationalDatabaseCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new UpdateRelationalDatabaseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRelationalDatabaseCommandInput} for command's `input` shape.
 * @see {@link UpdateRelationalDatabaseCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 */
export class UpdateRelationalDatabaseCommand extends $Command<
  UpdateRelationalDatabaseCommandInput,
  UpdateRelationalDatabaseCommandOutput,
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

  constructor(readonly input: UpdateRelationalDatabaseCommandInput) {
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
  ): Handler<UpdateRelationalDatabaseCommandInput, UpdateRelationalDatabaseCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateRelationalDatabaseCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "UpdateRelationalDatabaseCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateRelationalDatabaseRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateRelationalDatabaseResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateRelationalDatabaseCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateRelationalDatabaseCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateRelationalDatabaseCommandOutput> {
    return deserializeAws_json1_1UpdateRelationalDatabaseCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
