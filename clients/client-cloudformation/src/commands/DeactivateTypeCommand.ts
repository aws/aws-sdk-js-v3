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
  DeactivateTypeInput,
  DeactivateTypeInputFilterSensitiveLog,
  DeactivateTypeOutput,
  DeactivateTypeOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryDeactivateTypeCommand,
  serializeAws_queryDeactivateTypeCommand,
} from "../protocols/Aws_query";

export interface DeactivateTypeCommandInput extends DeactivateTypeInput {}
export interface DeactivateTypeCommandOutput extends DeactivateTypeOutput, __MetadataBearer {}

/**
 * <p>Deactivates a public extension that was previously activated in this account and
 *          region.</p>
 *          <p>Once deactivated, an extension can't be used in any CloudFormation operation.
 *          This includes stack update operations where the stack template includes the extension, even
 *          if no updates are being made to the extension. In addition, deactivated extensions aren't
 *          automatically updated if a new version of the extension is released.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DeactivateTypeCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DeactivateTypeCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new DeactivateTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeactivateTypeCommandInput} for command's `input` shape.
 * @see {@link DeactivateTypeCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 */
export class DeactivateTypeCommand extends $Command<
  DeactivateTypeCommandInput,
  DeactivateTypeCommandOutput,
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

  constructor(readonly input: DeactivateTypeCommandInput) {
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
  ): Handler<DeactivateTypeCommandInput, DeactivateTypeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeactivateTypeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "DeactivateTypeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeactivateTypeInputFilterSensitiveLog,
      outputFilterSensitiveLog: DeactivateTypeOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeactivateTypeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeactivateTypeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeactivateTypeCommandOutput> {
    return deserializeAws_queryDeactivateTypeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
