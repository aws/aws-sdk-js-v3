import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { CreateIAMPolicyAssignmentRequest, CreateIAMPolicyAssignmentResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateIAMPolicyAssignmentCommand,
  serializeAws_restJson1CreateIAMPolicyAssignmentCommand,
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

export interface CreateIAMPolicyAssignmentCommandInput extends CreateIAMPolicyAssignmentRequest {}
export interface CreateIAMPolicyAssignmentCommandOutput extends CreateIAMPolicyAssignmentResponse, __MetadataBearer {}

/**
 * <p>Creates an assignment with one specified IAMpolicy, identified by its Amazon Resource Name
 * 			(ARN). This policy assignment is attached to the specified groups or users of Amazon QuickSight.
 * 			Assignment names are unique per Amazon Web Services account. To avoid overwriting rules in other namespaces,
 * 			use assignment names that are unique.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, CreateIAMPolicyAssignmentCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, CreateIAMPolicyAssignmentCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new CreateIAMPolicyAssignmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateIAMPolicyAssignmentCommandInput} for command's `input` shape.
 * @see {@link CreateIAMPolicyAssignmentCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateIAMPolicyAssignmentCommand extends $Command<
  CreateIAMPolicyAssignmentCommandInput,
  CreateIAMPolicyAssignmentCommandOutput,
  QuickSightClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateIAMPolicyAssignmentCommandInput) {
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
  ): Handler<CreateIAMPolicyAssignmentCommandInput, CreateIAMPolicyAssignmentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "CreateIAMPolicyAssignmentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateIAMPolicyAssignmentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateIAMPolicyAssignmentResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateIAMPolicyAssignmentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateIAMPolicyAssignmentCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateIAMPolicyAssignmentCommandOutput> {
    return deserializeAws_restJson1CreateIAMPolicyAssignmentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
