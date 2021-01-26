import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DescribeSubscribedWorkteamRequest, DescribeSubscribedWorkteamResponse } from "../models/models_1";
import {
  deserializeAws_json1_1DescribeSubscribedWorkteamCommand,
  serializeAws_json1_1DescribeSubscribedWorkteamCommand,
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

export type DescribeSubscribedWorkteamCommandInput = DescribeSubscribedWorkteamRequest;
export type DescribeSubscribedWorkteamCommandOutput = DescribeSubscribedWorkteamResponse & __MetadataBearer;

/**
 * <p>Gets information about a work team provided by a vendor. It returns details about the
 *             subscription with a vendor in the AWS Marketplace.</p>
 */
export class DescribeSubscribedWorkteamCommand extends $Command<
  DescribeSubscribedWorkteamCommandInput,
  DescribeSubscribedWorkteamCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeSubscribedWorkteamCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeSubscribedWorkteamCommandInput, DescribeSubscribedWorkteamCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "DescribeSubscribedWorkteamCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeSubscribedWorkteamRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeSubscribedWorkteamResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeSubscribedWorkteamCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeSubscribedWorkteamCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeSubscribedWorkteamCommandOutput> {
    return deserializeAws_json1_1DescribeSubscribedWorkteamCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
