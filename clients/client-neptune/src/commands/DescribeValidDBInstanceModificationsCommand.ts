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
  DescribeValidDBInstanceModificationsMessage,
  DescribeValidDBInstanceModificationsMessageFilterSensitiveLog,
  DescribeValidDBInstanceModificationsResult,
  DescribeValidDBInstanceModificationsResultFilterSensitiveLog,
} from "../models/models_0";
import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import {
  deserializeAws_queryDescribeValidDBInstanceModificationsCommand,
  serializeAws_queryDescribeValidDBInstanceModificationsCommand,
} from "../protocols/Aws_query";

export interface DescribeValidDBInstanceModificationsCommandInput extends DescribeValidDBInstanceModificationsMessage {}
export interface DescribeValidDBInstanceModificationsCommandOutput
  extends DescribeValidDBInstanceModificationsResult,
    __MetadataBearer {}

/**
 * <p>You can call <a>DescribeValidDBInstanceModifications</a>
 *       to learn what modifications you can make to your DB instance. You can use this
 *       information when you call <a>ModifyDBInstance</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, DescribeValidDBInstanceModificationsCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, DescribeValidDBInstanceModificationsCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const command = new DescribeValidDBInstanceModificationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeValidDBInstanceModificationsCommandInput} for command's `input` shape.
 * @see {@link DescribeValidDBInstanceModificationsCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for NeptuneClient's `config` shape.
 *
 */
export class DescribeValidDBInstanceModificationsCommand extends $Command<
  DescribeValidDBInstanceModificationsCommandInput,
  DescribeValidDBInstanceModificationsCommandOutput,
  NeptuneClientResolvedConfig
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

  constructor(readonly input: DescribeValidDBInstanceModificationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NeptuneClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeValidDBInstanceModificationsCommandInput, DescribeValidDBInstanceModificationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeValidDBInstanceModificationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NeptuneClient";
    const commandName = "DescribeValidDBInstanceModificationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeValidDBInstanceModificationsMessageFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeValidDBInstanceModificationsResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeValidDBInstanceModificationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryDescribeValidDBInstanceModificationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeValidDBInstanceModificationsCommandOutput> {
    return deserializeAws_queryDescribeValidDBInstanceModificationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
