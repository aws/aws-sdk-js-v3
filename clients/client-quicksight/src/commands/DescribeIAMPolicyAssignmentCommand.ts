// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  DescribeIAMPolicyAssignmentRequest,
  DescribeIAMPolicyAssignmentRequestFilterSensitiveLog,
  DescribeIAMPolicyAssignmentResponse,
  DescribeIAMPolicyAssignmentResponseFilterSensitiveLog,
} from "../models/models_2";
import {
  deserializeAws_restJson1DescribeIAMPolicyAssignmentCommand,
  serializeAws_restJson1DescribeIAMPolicyAssignmentCommand,
} from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

export interface DescribeIAMPolicyAssignmentCommandInput extends DescribeIAMPolicyAssignmentRequest {}
export interface DescribeIAMPolicyAssignmentCommandOutput
  extends DescribeIAMPolicyAssignmentResponse,
    __MetadataBearer {}

/**
 * <p>Describes an existing IAM policy assignment, as specified by the assignment name.</p>
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
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 */
export class DescribeIAMPolicyAssignmentCommand extends $Command<
  DescribeIAMPolicyAssignmentCommandInput,
  DescribeIAMPolicyAssignmentCommandOutput,
  QuickSightClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeIAMPolicyAssignmentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "DescribeIAMPolicyAssignmentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeIAMPolicyAssignmentRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeIAMPolicyAssignmentResponseFilterSensitiveLog,
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
