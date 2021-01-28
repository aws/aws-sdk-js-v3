import { Cloud9ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Cloud9Client";
import { DescribeEnvironmentMembershipsRequest, DescribeEnvironmentMembershipsResult } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeEnvironmentMembershipsCommand,
  serializeAws_json1_1DescribeEnvironmentMembershipsCommand,
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

export type DescribeEnvironmentMembershipsCommandInput = DescribeEnvironmentMembershipsRequest;
export type DescribeEnvironmentMembershipsCommandOutput = DescribeEnvironmentMembershipsResult & __MetadataBearer;

/**
 * <p>Gets information about environment members for an AWS Cloud9 development environment.</p>
 */
export class DescribeEnvironmentMembershipsCommand extends $Command<
  DescribeEnvironmentMembershipsCommandInput,
  DescribeEnvironmentMembershipsCommandOutput,
  Cloud9ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeEnvironmentMembershipsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Cloud9ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeEnvironmentMembershipsCommandInput, DescribeEnvironmentMembershipsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Cloud9Client";
    const commandName = "DescribeEnvironmentMembershipsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeEnvironmentMembershipsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeEnvironmentMembershipsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeEnvironmentMembershipsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeEnvironmentMembershipsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeEnvironmentMembershipsCommandOutput> {
    return deserializeAws_json1_1DescribeEnvironmentMembershipsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
