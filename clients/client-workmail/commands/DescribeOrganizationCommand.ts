import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";
import { DescribeOrganizationRequest, DescribeOrganizationResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeOrganizationCommand,
  serializeAws_json1_1DescribeOrganizationCommand,
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

export type DescribeOrganizationCommandInput = DescribeOrganizationRequest;
export type DescribeOrganizationCommandOutput = DescribeOrganizationResponse & __MetadataBearer;

/**
 * <p>Provides more information regarding a given organization based on its identifier.</p>
 */
export class DescribeOrganizationCommand extends $Command<
  DescribeOrganizationCommandInput,
  DescribeOrganizationCommandOutput,
  WorkMailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeOrganizationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkMailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeOrganizationCommandInput, DescribeOrganizationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkMailClient";
    const commandName = "DescribeOrganizationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeOrganizationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeOrganizationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeOrganizationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeOrganizationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeOrganizationCommandOutput> {
    return deserializeAws_json1_1DescribeOrganizationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
