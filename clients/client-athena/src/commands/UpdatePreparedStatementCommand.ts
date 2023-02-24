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

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import {
  UpdatePreparedStatementInput,
  UpdatePreparedStatementInputFilterSensitiveLog,
  UpdatePreparedStatementOutput,
  UpdatePreparedStatementOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1UpdatePreparedStatementCommand,
  serializeAws_json1_1UpdatePreparedStatementCommand,
} from "../protocols/Aws_json1_1";

export interface UpdatePreparedStatementCommandInput extends UpdatePreparedStatementInput {}
export interface UpdatePreparedStatementCommandOutput extends UpdatePreparedStatementOutput, __MetadataBearer {}

/**
 * <p>Updates a prepared statement.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, UpdatePreparedStatementCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, UpdatePreparedStatementCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const command = new UpdatePreparedStatementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdatePreparedStatementCommandInput} for command's `input` shape.
 * @see {@link UpdatePreparedStatementCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for AthenaClient's `config` shape.
 *
 */
export class UpdatePreparedStatementCommand extends $Command<
  UpdatePreparedStatementCommandInput,
  UpdatePreparedStatementCommandOutput,
  AthenaClientResolvedConfig
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

  constructor(readonly input: UpdatePreparedStatementCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AthenaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdatePreparedStatementCommandInput, UpdatePreparedStatementCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdatePreparedStatementCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AthenaClient";
    const commandName = "UpdatePreparedStatementCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdatePreparedStatementInputFilterSensitiveLog,
      outputFilterSensitiveLog: UpdatePreparedStatementOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdatePreparedStatementCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdatePreparedStatementCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdatePreparedStatementCommandOutput> {
    return deserializeAws_json1_1UpdatePreparedStatementCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
