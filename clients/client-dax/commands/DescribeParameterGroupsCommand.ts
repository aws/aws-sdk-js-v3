import { DAXClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DAXClient";
import { DescribeParameterGroupsRequest, DescribeParameterGroupsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeParameterGroupsCommand,
  serializeAws_json1_1DescribeParameterGroupsCommand,
} from "../protocols/Aws_json1_1";
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

export type DescribeParameterGroupsCommandInput = DescribeParameterGroupsRequest;
export type DescribeParameterGroupsCommandOutput = DescribeParameterGroupsResponse & __MetadataBearer;

/**
 * <p>Returns a list of parameter group descriptions. If a parameter group name is
 *             specified, the list will contain only the descriptions for that group.</p>
 */
export class DescribeParameterGroupsCommand extends $Command<
  DescribeParameterGroupsCommandInput,
  DescribeParameterGroupsCommandOutput,
  DAXClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeParameterGroupsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DAXClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeParameterGroupsCommandInput, DescribeParameterGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DAXClient";
    const commandName = "DescribeParameterGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeParameterGroupsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeParameterGroupsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeParameterGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeParameterGroupsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeParameterGroupsCommandOutput> {
    return deserializeAws_json1_1DescribeParameterGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
