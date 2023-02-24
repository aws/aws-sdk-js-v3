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
  EnablePolicyTypeRequest,
  EnablePolicyTypeRequestFilterSensitiveLog,
  EnablePolicyTypeResponse,
  EnablePolicyTypeResponseFilterSensitiveLog,
} from "../models/models_0";
import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import {
  deserializeAws_json1_1EnablePolicyTypeCommand,
  serializeAws_json1_1EnablePolicyTypeCommand,
} from "../protocols/Aws_json1_1";

export interface EnablePolicyTypeCommandInput extends EnablePolicyTypeRequest {}
export interface EnablePolicyTypeCommandOutput extends EnablePolicyTypeResponse, __MetadataBearer {}

/**
 * <p>Enables a policy type in a root. After you enable a policy type in a root, you can
 *             attach policies of that type to the root, any organizational unit (OU), or account in
 *             that root. You can undo this by using the <a>DisablePolicyType</a>
 *             operation.</p>
 *         <p>This is an asynchronous request that Amazon Web Services performs in the background. Amazon Web Services
 *             recommends that you first use <a>ListRoots</a> to see the status of policy
 *             types for a specified root, and then use this operation.</p>
 *         <p>This operation can be called only from the organization's management account.</p>
 *         <p>You can enable a policy type in a root only if that policy type is available in the
 *             organization. To view the status of available policy types in the organization, use
 *                 <a>DescribeOrganization</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, EnablePolicyTypeCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, EnablePolicyTypeCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new EnablePolicyTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnablePolicyTypeCommandInput} for command's `input` shape.
 * @see {@link EnablePolicyTypeCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for OrganizationsClient's `config` shape.
 *
 */
export class EnablePolicyTypeCommand extends $Command<
  EnablePolicyTypeCommandInput,
  EnablePolicyTypeCommandOutput,
  OrganizationsClientResolvedConfig
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

  constructor(readonly input: EnablePolicyTypeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OrganizationsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<EnablePolicyTypeCommandInput, EnablePolicyTypeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, EnablePolicyTypeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OrganizationsClient";
    const commandName = "EnablePolicyTypeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: EnablePolicyTypeRequestFilterSensitiveLog,
      outputFilterSensitiveLog: EnablePolicyTypeResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: EnablePolicyTypeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1EnablePolicyTypeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<EnablePolicyTypeCommandOutput> {
    return deserializeAws_json1_1EnablePolicyTypeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
