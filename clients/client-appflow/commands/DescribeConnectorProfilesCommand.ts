import { AppflowClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppflowClient";
import { DescribeConnectorProfilesRequest, DescribeConnectorProfilesResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeConnectorProfilesCommand,
  serializeAws_restJson1DescribeConnectorProfilesCommand,
} from "../protocols/Aws_restJson1";
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

export type DescribeConnectorProfilesCommandInput = DescribeConnectorProfilesRequest;
export type DescribeConnectorProfilesCommandOutput = DescribeConnectorProfilesResponse & __MetadataBearer;

/**
 * <p>
 *   Returns a list of <code>connector-profile</code> details matching the provided <code>connector-profile</code> names and <code>connector-types</code>. Both input lists are optional, and you can use them to filter the result. </p>
 *          <p>If no names or <code>connector-types</code> are provided, returns all connector profiles in a paginated form. If there is no match, this operation returns an empty list.</p>
 */
export class DescribeConnectorProfilesCommand extends $Command<
  DescribeConnectorProfilesCommandInput,
  DescribeConnectorProfilesCommandOutput,
  AppflowClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeConnectorProfilesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppflowClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeConnectorProfilesCommandInput, DescribeConnectorProfilesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppflowClient";
    const commandName = "DescribeConnectorProfilesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeConnectorProfilesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeConnectorProfilesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeConnectorProfilesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeConnectorProfilesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeConnectorProfilesCommandOutput> {
    return deserializeAws_restJson1DescribeConnectorProfilesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
