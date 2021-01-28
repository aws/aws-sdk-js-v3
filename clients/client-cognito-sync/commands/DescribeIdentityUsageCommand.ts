import { CognitoSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoSyncClient";
import { DescribeIdentityUsageRequest, DescribeIdentityUsageResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeIdentityUsageCommand,
  serializeAws_restJson1DescribeIdentityUsageCommand,
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

export type DescribeIdentityUsageCommandInput = DescribeIdentityUsageRequest;
export type DescribeIdentityUsageCommandOutput = DescribeIdentityUsageResponse & __MetadataBearer;

/**
 * <p>Gets usage information for an identity, including number of datasets and data usage.</p>
 *          <p>This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials.</p>
 */
export class DescribeIdentityUsageCommand extends $Command<
  DescribeIdentityUsageCommandInput,
  DescribeIdentityUsageCommandOutput,
  CognitoSyncClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeIdentityUsageCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CognitoSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeIdentityUsageCommandInput, DescribeIdentityUsageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoSyncClient";
    const commandName = "DescribeIdentityUsageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeIdentityUsageRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeIdentityUsageResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeIdentityUsageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeIdentityUsageCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeIdentityUsageCommandOutput> {
    return deserializeAws_restJson1DescribeIdentityUsageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
