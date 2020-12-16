import {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient";
import { DescribeUserPoolDomainRequest, DescribeUserPoolDomainResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeUserPoolDomainCommand,
  serializeAws_json1_1DescribeUserPoolDomainCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
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

export type DescribeUserPoolDomainCommandInput = DescribeUserPoolDomainRequest;
export type DescribeUserPoolDomainCommandOutput = DescribeUserPoolDomainResponse & __MetadataBearer;

/**
 * <p>Gets information about a domain.</p>
 */
export class DescribeUserPoolDomainCommand extends $Command<
  DescribeUserPoolDomainCommandInput,
  DescribeUserPoolDomainCommandOutput,
  CognitoIdentityProviderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeUserPoolDomainCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CognitoIdentityProviderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeUserPoolDomainCommandInput, DescribeUserPoolDomainCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getAwsAuthPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityProviderClient";
    const commandName = "DescribeUserPoolDomainCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeUserPoolDomainRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeUserPoolDomainResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeUserPoolDomainCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeUserPoolDomainCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeUserPoolDomainCommandOutput> {
    return deserializeAws_json1_1DescribeUserPoolDomainCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
