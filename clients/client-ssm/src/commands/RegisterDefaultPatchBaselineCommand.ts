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
  RegisterDefaultPatchBaselineRequest,
  RegisterDefaultPatchBaselineRequestFilterSensitiveLog,
  RegisterDefaultPatchBaselineResult,
  RegisterDefaultPatchBaselineResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1RegisterDefaultPatchBaselineCommand,
  serializeAws_json1_1RegisterDefaultPatchBaselineCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

export interface RegisterDefaultPatchBaselineCommandInput extends RegisterDefaultPatchBaselineRequest {}
export interface RegisterDefaultPatchBaselineCommandOutput
  extends RegisterDefaultPatchBaselineResult,
    __MetadataBearer {}

/**
 * <p>Defines the default patch baseline for the relevant operating system.</p>
 *          <p>To reset the Amazon Web Services-predefined patch baseline as the default, specify the full patch baseline
 *    Amazon Resource Name (ARN) as the baseline ID value. For example, for CentOS, specify
 *     <code>arn:aws:ssm:us-east-2:733109147000:patchbaseline/pb-0574b43a65ea646ed</code> instead of
 *     <code>pb-0574b43a65ea646ed</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, RegisterDefaultPatchBaselineCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, RegisterDefaultPatchBaselineCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new RegisterDefaultPatchBaselineCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterDefaultPatchBaselineCommandInput} for command's `input` shape.
 * @see {@link RegisterDefaultPatchBaselineCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 */
export class RegisterDefaultPatchBaselineCommand extends $Command<
  RegisterDefaultPatchBaselineCommandInput,
  RegisterDefaultPatchBaselineCommandOutput,
  SSMClientResolvedConfig
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

  constructor(readonly input: RegisterDefaultPatchBaselineCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RegisterDefaultPatchBaselineCommandInput, RegisterDefaultPatchBaselineCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RegisterDefaultPatchBaselineCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "RegisterDefaultPatchBaselineCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RegisterDefaultPatchBaselineRequestFilterSensitiveLog,
      outputFilterSensitiveLog: RegisterDefaultPatchBaselineResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RegisterDefaultPatchBaselineCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RegisterDefaultPatchBaselineCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RegisterDefaultPatchBaselineCommandOutput> {
    return deserializeAws_json1_1RegisterDefaultPatchBaselineCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
