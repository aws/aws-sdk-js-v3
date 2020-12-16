import { SSOAdminClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSOAdminClient";
import {
  DescribeAccountAssignmentCreationStatusRequest,
  DescribeAccountAssignmentCreationStatusResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeAccountAssignmentCreationStatusCommand,
  serializeAws_json1_1DescribeAccountAssignmentCreationStatusCommand,
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

export type DescribeAccountAssignmentCreationStatusCommandInput = DescribeAccountAssignmentCreationStatusRequest;
export type DescribeAccountAssignmentCreationStatusCommandOutput = DescribeAccountAssignmentCreationStatusResponse &
  __MetadataBearer;

/**
 * <p>Describes the status of the assignment creation request.</p>
 */
export class DescribeAccountAssignmentCreationStatusCommand extends $Command<
  DescribeAccountAssignmentCreationStatusCommandInput,
  DescribeAccountAssignmentCreationStatusCommandOutput,
  SSOAdminClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeAccountAssignmentCreationStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSOAdminClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeAccountAssignmentCreationStatusCommandInput,
    DescribeAccountAssignmentCreationStatusCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSOAdminClient";
    const commandName = "DescribeAccountAssignmentCreationStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeAccountAssignmentCreationStatusRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeAccountAssignmentCreationStatusResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeAccountAssignmentCreationStatusCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeAccountAssignmentCreationStatusCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeAccountAssignmentCreationStatusCommandOutput> {
    return deserializeAws_json1_1DescribeAccountAssignmentCreationStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
