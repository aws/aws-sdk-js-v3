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
  UpdateRelationalDatabaseParametersRequest,
  UpdateRelationalDatabaseParametersRequestFilterSensitiveLog,
  UpdateRelationalDatabaseParametersResult,
  UpdateRelationalDatabaseParametersResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1UpdateRelationalDatabaseParametersCommand,
  serializeAws_json1_1UpdateRelationalDatabaseParametersCommand,
} from "../protocols/Aws_json1_1";

export interface UpdateRelationalDatabaseParametersCommandInput extends UpdateRelationalDatabaseParametersRequest {}
export interface UpdateRelationalDatabaseParametersCommandOutput
  extends UpdateRelationalDatabaseParametersResult,
    __MetadataBearer {}

/**
 * <p>Allows the update of one or more parameters of a database in Amazon Lightsail.</p>
 *          <p>Parameter updates don't cause outages; therefore, their application is not subject to the
 *       preferred maintenance window. However, there are two ways in which parameter updates are
 *       applied: <code>dynamic</code> or <code>pending-reboot</code>. Parameters marked with a
 *         <code>dynamic</code> apply type are applied immediately. Parameters marked with a
 *         <code>pending-reboot</code> apply type are applied only after the database is rebooted using
 *       the <code>reboot relational database</code> operation.</p>
 *          <p>The <code>update relational database parameters</code> operation supports tag-based access
 *       control via resource tags applied to the resource identified by relationalDatabaseName. For
 *       more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, UpdateRelationalDatabaseParametersCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, UpdateRelationalDatabaseParametersCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new UpdateRelationalDatabaseParametersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRelationalDatabaseParametersCommandInput} for command's `input` shape.
 * @see {@link UpdateRelationalDatabaseParametersCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 */
export class UpdateRelationalDatabaseParametersCommand extends $Command<
  UpdateRelationalDatabaseParametersCommandInput,
  UpdateRelationalDatabaseParametersCommandOutput,
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

  constructor(readonly input: UpdateRelationalDatabaseParametersCommandInput) {
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
  ): Handler<UpdateRelationalDatabaseParametersCommandInput, UpdateRelationalDatabaseParametersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateRelationalDatabaseParametersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "UpdateRelationalDatabaseParametersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateRelationalDatabaseParametersRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateRelationalDatabaseParametersResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateRelationalDatabaseParametersCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateRelationalDatabaseParametersCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateRelationalDatabaseParametersCommandOutput> {
    return deserializeAws_json1_1UpdateRelationalDatabaseParametersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
