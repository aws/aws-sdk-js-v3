import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import {
  DescribeValidDBInstanceModificationsMessage,
  DescribeValidDBInstanceModificationsResult,
} from "../models/models_0";
import {
  deserializeAws_queryDescribeValidDBInstanceModificationsCommand,
  serializeAws_queryDescribeValidDBInstanceModificationsCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type DescribeValidDBInstanceModificationsCommandInput = DescribeValidDBInstanceModificationsMessage;
export type DescribeValidDBInstanceModificationsCommandOutput = DescribeValidDBInstanceModificationsResult &
  __MetadataBearer;

/**
 * <p>You can call <a>DescribeValidDBInstanceModifications</a>
 *       to learn what modifications you can make to your DB instance. You can use this
 *       information when you call <a>ModifyDBInstance</a>.</p>
 */
export class DescribeValidDBInstanceModificationsCommand extends $Command<
  DescribeValidDBInstanceModificationsCommandInput,
  DescribeValidDBInstanceModificationsCommandOutput,
  NeptuneClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NeptuneClient";
    const commandName = "DescribeValidDBInstanceModificationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeValidDBInstanceModificationsMessage.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeValidDBInstanceModificationsResult.filterSensitiveLog,
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
