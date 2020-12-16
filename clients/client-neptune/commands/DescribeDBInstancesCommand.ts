import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { DBInstanceMessage, DescribeDBInstancesMessage } from "../models/models_0";
import {
  deserializeAws_queryDescribeDBInstancesCommand,
  serializeAws_queryDescribeDBInstancesCommand,
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

export type DescribeDBInstancesCommandInput = DescribeDBInstancesMessage;
export type DescribeDBInstancesCommandOutput = DBInstanceMessage & __MetadataBearer;

/**
 * <p>Returns information about provisioned instances, and supports pagination.</p>
 *
 *          <note>
 *             <p>This operation can also return information for Amazon RDS instances
 *     and Amazon DocDB instances.</p>
 *          </note>
 */
export class DescribeDBInstancesCommand extends $Command<
  DescribeDBInstancesCommandInput,
  DescribeDBInstancesCommandOutput,
  NeptuneClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeDBInstancesCommandInput) {
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
  ): Handler<DescribeDBInstancesCommandInput, DescribeDBInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NeptuneClient";
    const commandName = "DescribeDBInstancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeDBInstancesMessage.filterSensitiveLog,
      outputFilterSensitiveLog: DBInstanceMessage.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeDBInstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeDBInstancesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeDBInstancesCommandOutput> {
    return deserializeAws_queryDescribeDBInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
