import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DescribeWorkteamRequest, DescribeWorkteamResponse } from "../models/models_1";
import {
  deserializeAws_json1_1DescribeWorkteamCommand,
  serializeAws_json1_1DescribeWorkteamCommand,
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

export type DescribeWorkteamCommandInput = DescribeWorkteamRequest;
export type DescribeWorkteamCommandOutput = DescribeWorkteamResponse & __MetadataBearer;

/**
 * <p>Gets information about a specific work team. You can see information such as the
 *             create date, the last updated date, membership information, and the work team's Amazon
 *             Resource Name (ARN).</p>
 */
export class DescribeWorkteamCommand extends $Command<
  DescribeWorkteamCommandInput,
  DescribeWorkteamCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeWorkteamCommandInput) {
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
  ): Handler<DescribeWorkteamCommandInput, DescribeWorkteamCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "DescribeWorkteamCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeWorkteamRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeWorkteamResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeWorkteamCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeWorkteamCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeWorkteamCommandOutput> {
    return deserializeAws_json1_1DescribeWorkteamCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
