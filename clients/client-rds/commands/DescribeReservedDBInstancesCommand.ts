import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DescribeReservedDBInstancesMessage, ReservedDBInstanceMessage } from "../models/models_1";
import {
  deserializeAws_queryDescribeReservedDBInstancesCommand,
  serializeAws_queryDescribeReservedDBInstancesCommand,
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

export type DescribeReservedDBInstancesCommandInput = DescribeReservedDBInstancesMessage;
export type DescribeReservedDBInstancesCommandOutput = ReservedDBInstanceMessage & __MetadataBearer;

/**
 * <p>Returns information about reserved DB instances for this account, or about a specified reserved DB instance.</p>
 */
export class DescribeReservedDBInstancesCommand extends $Command<
  DescribeReservedDBInstancesCommandInput,
  DescribeReservedDBInstancesCommandOutput,
  RDSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeReservedDBInstancesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeReservedDBInstancesCommandInput, DescribeReservedDBInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "DescribeReservedDBInstancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeReservedDBInstancesMessage.filterSensitiveLog,
      outputFilterSensitiveLog: ReservedDBInstanceMessage.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeReservedDBInstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeReservedDBInstancesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeReservedDBInstancesCommandOutput> {
    return deserializeAws_queryDescribeReservedDBInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
