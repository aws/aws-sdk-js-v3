import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { DescribeUserStackAssociationsRequest, DescribeUserStackAssociationsResult } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeUserStackAssociationsCommand,
  serializeAws_json1_1DescribeUserStackAssociationsCommand,
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

export type DescribeUserStackAssociationsCommandInput = DescribeUserStackAssociationsRequest;
export type DescribeUserStackAssociationsCommandOutput = DescribeUserStackAssociationsResult & __MetadataBearer;

/**
 * <p>Retrieves a list that describes the UserStackAssociation objects. You must specify either or both of the following:</p>
 *         <ul>
 *             <li>
 *                <p>The stack name</p>
 *             </li>
 *             <li>
 *                <p>The user name (email address of the user associated with the stack) and the authentication type for the user</p>
 *             </li>
 *          </ul>
 */
export class DescribeUserStackAssociationsCommand extends $Command<
  DescribeUserStackAssociationsCommandInput,
  DescribeUserStackAssociationsCommandOutput,
  AppStreamClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeUserStackAssociationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppStreamClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeUserStackAssociationsCommandInput, DescribeUserStackAssociationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppStreamClient";
    const commandName = "DescribeUserStackAssociationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeUserStackAssociationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeUserStackAssociationsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeUserStackAssociationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeUserStackAssociationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeUserStackAssociationsCommandOutput> {
    return deserializeAws_json1_1DescribeUserStackAssociationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
