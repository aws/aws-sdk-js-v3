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

import { DocDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBClient";
import {
  RebootDBInstanceMessage,
  RebootDBInstanceMessageFilterSensitiveLog,
  RebootDBInstanceResult,
  RebootDBInstanceResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryRebootDBInstanceCommand,
  serializeAws_queryRebootDBInstanceCommand,
} from "../protocols/Aws_query";

export interface RebootDBInstanceCommandInput extends RebootDBInstanceMessage {}
export interface RebootDBInstanceCommandOutput extends RebootDBInstanceResult, __MetadataBearer {}

/**
 * <p>You might need to reboot your instance, usually for maintenance reasons. For
 *             example, if you make certain changes, or if you change the cluster parameter group
 *             that is associated with the instance, you must reboot the instance for the changes to
 *             take effect. </p>
 *         <p>Rebooting an instance restarts the database engine service. Rebooting an instance
 *             results in a momentary outage, during which the instance status is set to
 *                 <i>rebooting</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBClient, RebootDBInstanceCommand } from "@aws-sdk/client-docdb"; // ES Modules import
 * // const { DocDBClient, RebootDBInstanceCommand } = require("@aws-sdk/client-docdb"); // CommonJS import
 * const client = new DocDBClient(config);
 * const command = new RebootDBInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RebootDBInstanceCommandInput} for command's `input` shape.
 * @see {@link RebootDBInstanceCommandOutput} for command's `response` shape.
 * @see {@link DocDBClientResolvedConfig | config} for DocDBClient's `config` shape.
 *
 */
export class RebootDBInstanceCommand extends $Command<
  RebootDBInstanceCommandInput,
  RebootDBInstanceCommandOutput,
  DocDBClientResolvedConfig
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

  constructor(readonly input: RebootDBInstanceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DocDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RebootDBInstanceCommandInput, RebootDBInstanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RebootDBInstanceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DocDBClient";
    const commandName = "RebootDBInstanceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RebootDBInstanceMessageFilterSensitiveLog,
      outputFilterSensitiveLog: RebootDBInstanceResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RebootDBInstanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryRebootDBInstanceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RebootDBInstanceCommandOutput> {
    return deserializeAws_queryRebootDBInstanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
