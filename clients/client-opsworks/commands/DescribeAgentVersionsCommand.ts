import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { DescribeAgentVersionsRequest, DescribeAgentVersionsResult } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeAgentVersionsCommand,
  serializeAws_json1_1DescribeAgentVersionsCommand,
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

export type DescribeAgentVersionsCommandInput = DescribeAgentVersionsRequest;
export type DescribeAgentVersionsCommandOutput = DescribeAgentVersionsResult & __MetadataBearer;

/**
 * <p>Describes the available AWS OpsWorks Stacks agent versions. You must specify a stack ID or a
 *     configuration manager. <code>DescribeAgentVersions</code> returns a list of available
 *     agent versions for the specified stack or configuration manager.</p>
 */
export class DescribeAgentVersionsCommand extends $Command<
  DescribeAgentVersionsCommandInput,
  DescribeAgentVersionsCommandOutput,
  OpsWorksClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeAgentVersionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OpsWorksClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAgentVersionsCommandInput, DescribeAgentVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpsWorksClient";
    const commandName = "DescribeAgentVersionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeAgentVersionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeAgentVersionsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeAgentVersionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeAgentVersionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAgentVersionsCommandOutput> {
    return deserializeAws_json1_1DescribeAgentVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
