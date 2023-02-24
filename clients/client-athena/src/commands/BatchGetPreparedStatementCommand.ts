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
  BatchGetPreparedStatementInput,
  BatchGetPreparedStatementInputFilterSensitiveLog,
  BatchGetPreparedStatementOutput,
  BatchGetPreparedStatementOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1BatchGetPreparedStatementCommand,
  serializeAws_json1_1BatchGetPreparedStatementCommand,
} from "../protocols/Aws_json1_1";

export interface BatchGetPreparedStatementCommandInput extends BatchGetPreparedStatementInput {}
export interface BatchGetPreparedStatementCommandOutput extends BatchGetPreparedStatementOutput, __MetadataBearer {}

/**
 * <p>Returns the details of a single prepared statement or a list of up to 256 prepared
 *             statements for the array of prepared statement names that you provide. Requires you to
 *             have access to the workgroup to which the prepared statements belong. If a prepared
 *             statement cannot be retrieved for the name specified, the statement is listed in
 *                 <code>UnprocessedPreparedStatementNames</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, BatchGetPreparedStatementCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, BatchGetPreparedStatementCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const command = new BatchGetPreparedStatementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchGetPreparedStatementCommandInput} for command's `input` shape.
 * @see {@link BatchGetPreparedStatementCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for AthenaClient's `config` shape.
 *
 */
export class BatchGetPreparedStatementCommand extends $Command<
  BatchGetPreparedStatementCommandInput,
  BatchGetPreparedStatementCommandOutput,
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

  constructor(readonly input: BatchGetPreparedStatementCommandInput) {
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
  ): Handler<BatchGetPreparedStatementCommandInput, BatchGetPreparedStatementCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchGetPreparedStatementCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AthenaClient";
    const commandName = "BatchGetPreparedStatementCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchGetPreparedStatementInputFilterSensitiveLog,
      outputFilterSensitiveLog: BatchGetPreparedStatementOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchGetPreparedStatementCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1BatchGetPreparedStatementCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchGetPreparedStatementCommandOutput> {
    return deserializeAws_json1_1BatchGetPreparedStatementCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
