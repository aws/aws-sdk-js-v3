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
  SetTypeDefaultVersionInput,
  SetTypeDefaultVersionInputFilterSensitiveLog,
  SetTypeDefaultVersionOutput,
  SetTypeDefaultVersionOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_querySetTypeDefaultVersionCommand,
  serializeAws_querySetTypeDefaultVersionCommand,
} from "../protocols/Aws_query";

export interface SetTypeDefaultVersionCommandInput extends SetTypeDefaultVersionInput {}
export interface SetTypeDefaultVersionCommandOutput extends SetTypeDefaultVersionOutput, __MetadataBearer {}

/**
 * <p>Specify the default version of an extension. The default version of an extension will be
 *          used in CloudFormation operations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, SetTypeDefaultVersionCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, SetTypeDefaultVersionCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new SetTypeDefaultVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetTypeDefaultVersionCommandInput} for command's `input` shape.
 * @see {@link SetTypeDefaultVersionCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 */
export class SetTypeDefaultVersionCommand extends $Command<
  SetTypeDefaultVersionCommandInput,
  SetTypeDefaultVersionCommandOutput,
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

  constructor(readonly input: SetTypeDefaultVersionCommandInput) {
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
  ): Handler<SetTypeDefaultVersionCommandInput, SetTypeDefaultVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SetTypeDefaultVersionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "SetTypeDefaultVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SetTypeDefaultVersionInputFilterSensitiveLog,
      outputFilterSensitiveLog: SetTypeDefaultVersionOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SetTypeDefaultVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_querySetTypeDefaultVersionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SetTypeDefaultVersionCommandOutput> {
    return deserializeAws_querySetTypeDefaultVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
