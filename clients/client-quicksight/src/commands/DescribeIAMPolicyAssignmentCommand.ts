import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { DescribeIAMPolicyAssignmentRequest, DescribeIAMPolicyAssignmentResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeIAMPolicyAssignmentCommand,
  serializeAws_restJson1DescribeIAMPolicyAssignmentCommand,
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

export interface DescribeIAMPolicyAssignmentCommandInput extends DescribeIAMPolicyAssignmentRequest {}
export interface DescribeIAMPolicyAssignmentCommandOutput
  extends DescribeIAMPolicyAssignmentResponse,
    __MetadataBearer {}

/**
 * <p>Describes an existing IAMpolicy assignment, as specified by the assignment name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeIAMPolicyAssignmentCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeIAMPolicyAssignmentCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new DescribeIAMPolicyAssignmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeIAMPolicyAssignmentCommandInput} for command's `input` shape.
 * @see {@link DescribeIAMPolicyAssignmentCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeIAMPolicyAssignmentCommand extends $Command<
  DescribeIAMPolicyAssignmentCommandInput,
  DescribeIAMPolicyAssignmentCommandOutput,
  QuickSightClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeIAMPolicyAssignmentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QuickSightClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeIAMPolicyAssignmentCommandInput, DescribeIAMPolicyAssignmentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "DescribeIAMPolicyAssignmentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeIAMPolicyAssignmentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeIAMPolicyAssignmentResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeIAMPolicyAssignmentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeIAMPolicyAssignmentCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeIAMPolicyAssignmentCommandOutput> {
    return deserializeAws_restJson1DescribeIAMPolicyAssignmentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
