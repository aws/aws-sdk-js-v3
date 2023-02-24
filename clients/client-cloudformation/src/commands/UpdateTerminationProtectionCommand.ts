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

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import {
  UpdateTerminationProtectionInput,
  UpdateTerminationProtectionInputFilterSensitiveLog,
  UpdateTerminationProtectionOutput,
  UpdateTerminationProtectionOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryUpdateTerminationProtectionCommand,
  serializeAws_queryUpdateTerminationProtectionCommand,
} from "../protocols/Aws_query";

export interface UpdateTerminationProtectionCommandInput extends UpdateTerminationProtectionInput {}
export interface UpdateTerminationProtectionCommandOutput extends UpdateTerminationProtectionOutput, __MetadataBearer {}

/**
 * <p>Updates termination protection for the specified stack. If a user attempts to delete a
 *          stack with termination protection enabled, the operation fails and the stack remains
 *          unchanged. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-protect-stacks.html">Protecting a
 *             Stack From Being Deleted</a> in the <i>CloudFormation User Guide</i>.</p>
 *          <p>For <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-nested-stacks.html">nested
 *             stacks</a>, termination protection is set on the root stack and can't be changed
 *          directly on the nested stack.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, UpdateTerminationProtectionCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, UpdateTerminationProtectionCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new UpdateTerminationProtectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateTerminationProtectionCommandInput} for command's `input` shape.
 * @see {@link UpdateTerminationProtectionCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 */
export class UpdateTerminationProtectionCommand extends $Command<
  UpdateTerminationProtectionCommandInput,
  UpdateTerminationProtectionCommandOutput,
  CloudFormationClientResolvedConfig
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

  constructor(readonly input: UpdateTerminationProtectionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateTerminationProtectionCommandInput, UpdateTerminationProtectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateTerminationProtectionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "UpdateTerminationProtectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateTerminationProtectionInputFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateTerminationProtectionOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateTerminationProtectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryUpdateTerminationProtectionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateTerminationProtectionCommandOutput> {
    return deserializeAws_queryUpdateTerminationProtectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
