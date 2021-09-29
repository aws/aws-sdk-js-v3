import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { CloneStackRequest, CloneStackResult } from "../models/models_0";
import {
  deserializeAws_json1_1CloneStackCommand,
  serializeAws_json1_1CloneStackCommand,
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

export interface CloneStackCommandInput extends CloneStackRequest {}
export interface CloneStackCommandOutput extends CloneStackResult, __MetadataBearer {}

/**
 * <p>Creates a clone of a specified stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-cloning.html">Clone a
 *         Stack</a>. By default, all parameters are set to the values used by the parent stack.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy
 *       that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, CloneStackCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, CloneStackCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const command = new CloneStackCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CloneStackCommandInput} for command's `input` shape.
 * @see {@link CloneStackCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CloneStackCommand extends $Command<
  CloneStackCommandInput,
  CloneStackCommandOutput,
  OpsWorksClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CloneStackCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OpsWorksClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CloneStackCommandInput, CloneStackCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpsWorksClient";
    const commandName = "CloneStackCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CloneStackRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CloneStackResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CloneStackCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CloneStackCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CloneStackCommandOutput> {
    return deserializeAws_json1_1CloneStackCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
