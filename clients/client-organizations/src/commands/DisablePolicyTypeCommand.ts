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
  DisablePolicyTypeRequest,
  DisablePolicyTypeRequestFilterSensitiveLog,
  DisablePolicyTypeResponse,
  DisablePolicyTypeResponseFilterSensitiveLog,
} from "../models/models_0";
import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import {
  deserializeAws_json1_1DisablePolicyTypeCommand,
  serializeAws_json1_1DisablePolicyTypeCommand,
} from "../protocols/Aws_json1_1";

export interface DisablePolicyTypeCommandInput extends DisablePolicyTypeRequest {}
export interface DisablePolicyTypeCommandOutput extends DisablePolicyTypeResponse, __MetadataBearer {}

/**
 * <p>Disables an organizational policy type in a root. A policy of a certain type can be
 *             attached to entities in a root only if that type is enabled in the root. After you
 *             perform this operation, you no longer can attach policies of the specified type to that
 *             root or to any organizational unit (OU) or account in that root. You can undo this by
 *             using the <a>EnablePolicyType</a> operation.</p>
 *         <p>This is an asynchronous request that Amazon Web Services performs in the background. If you disable
 *             a policy type for a root, it still appears enabled for the organization if <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">all features</a> are enabled for the organization. Amazon Web Services recommends that you
 *             first use <a>ListRoots</a> to see the status of policy types for a specified
 *             root, and then use this operation.</p>
 *         <p>This operation can be called only from the organization's management account.</p>
 *         <p> To view the status of available policy types in the organization, use <a>DescribeOrganization</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, DisablePolicyTypeCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, DisablePolicyTypeCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new DisablePolicyTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisablePolicyTypeCommandInput} for command's `input` shape.
 * @see {@link DisablePolicyTypeCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for OrganizationsClient's `config` shape.
 *
 */
export class DisablePolicyTypeCommand extends $Command<
  DisablePolicyTypeCommandInput,
  DisablePolicyTypeCommandOutput,
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

  constructor(readonly input: DisablePolicyTypeCommandInput) {
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
  ): Handler<DisablePolicyTypeCommandInput, DisablePolicyTypeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisablePolicyTypeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OrganizationsClient";
    const commandName = "DisablePolicyTypeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisablePolicyTypeRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DisablePolicyTypeResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisablePolicyTypeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DisablePolicyTypeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisablePolicyTypeCommandOutput> {
    return deserializeAws_json1_1DisablePolicyTypeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
