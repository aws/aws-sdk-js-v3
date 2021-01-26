import { IdentitystoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IdentitystoreClient";
import { DescribeUserRequest, DescribeUserResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeUserCommand,
  serializeAws_json1_1DescribeUserCommand,
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

export type DescribeUserCommandInput = DescribeUserRequest;
export type DescribeUserCommandOutput = DescribeUserResponse & __MetadataBearer;

/**
 * <p>Retrieves the user metadata and attributes from <code>UserId</code> in an identity store.</p>
 */
export class DescribeUserCommand extends $Command<
  DescribeUserCommandInput,
  DescribeUserCommandOutput,
  IdentitystoreClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeUserCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IdentitystoreClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeUserCommandInput, DescribeUserCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IdentitystoreClient";
    const commandName = "DescribeUserCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeUserRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeUserResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeUserCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeUserCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeUserCommandOutput> {
    return deserializeAws_json1_1DescribeUserCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
