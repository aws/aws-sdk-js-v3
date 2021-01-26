import { HealthClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HealthClient";
import { DescribeHealthServiceStatusForOrganizationResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeHealthServiceStatusForOrganizationCommand,
  serializeAws_json1_1DescribeHealthServiceStatusForOrganizationCommand,
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

export type DescribeHealthServiceStatusForOrganizationCommandInput = {};
export type DescribeHealthServiceStatusForOrganizationCommandOutput = DescribeHealthServiceStatusForOrganizationResponse &
  __MetadataBearer;

/**
 * <p>This operation provides status information on enabling or disabling AWS Health to work
 *          with your organization. To call this operation, you must sign in as an IAM user, assume
 *          an IAM role, or sign in as the root user (not recommended) in the organization's master
 *          account.</p>
 */
export class DescribeHealthServiceStatusForOrganizationCommand extends $Command<
  DescribeHealthServiceStatusForOrganizationCommandInput,
  DescribeHealthServiceStatusForOrganizationCommandOutput,
  HealthClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeHealthServiceStatusForOrganizationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: HealthClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeHealthServiceStatusForOrganizationCommandInput,
    DescribeHealthServiceStatusForOrganizationCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "HealthClient";
    const commandName = "DescribeHealthServiceStatusForOrganizationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (input: any) => input,
      outputFilterSensitiveLog: DescribeHealthServiceStatusForOrganizationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeHealthServiceStatusForOrganizationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeHealthServiceStatusForOrganizationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeHealthServiceStatusForOrganizationCommandOutput> {
    return deserializeAws_json1_1DescribeHealthServiceStatusForOrganizationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
