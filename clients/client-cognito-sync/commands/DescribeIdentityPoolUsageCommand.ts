import { CognitoSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoSyncClient";
import { DescribeIdentityPoolUsageRequest, DescribeIdentityPoolUsageResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeIdentityPoolUsageCommand,
  serializeAws_restJson1DescribeIdentityPoolUsageCommand,
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

export type DescribeIdentityPoolUsageCommandInput = DescribeIdentityPoolUsageRequest;
export type DescribeIdentityPoolUsageCommandOutput = DescribeIdentityPoolUsageResponse & __MetadataBearer;

/**
 * <p>Gets usage details (for example, data storage) about a particular identity pool.</p>
 *          <p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>
 */
export class DescribeIdentityPoolUsageCommand extends $Command<
  DescribeIdentityPoolUsageCommandInput,
  DescribeIdentityPoolUsageCommandOutput,
  CognitoSyncClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeIdentityPoolUsageCommandInput) {
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
  ): Handler<DescribeIdentityPoolUsageCommandInput, DescribeIdentityPoolUsageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoSyncClient";
    const commandName = "DescribeIdentityPoolUsageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeIdentityPoolUsageRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeIdentityPoolUsageResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeIdentityPoolUsageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeIdentityPoolUsageCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeIdentityPoolUsageCommandOutput> {
    return deserializeAws_restJson1DescribeIdentityPoolUsageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
