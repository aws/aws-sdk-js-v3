import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { DeleteOrganizationConformancePackRequest } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteOrganizationConformancePackCommand,
  serializeAws_json1_1DeleteOrganizationConformancePackCommand,
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

export interface DeleteOrganizationConformancePackCommandInput extends DeleteOrganizationConformancePackRequest {}
export interface DeleteOrganizationConformancePackCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified organization conformance pack and all of the config rules and remediation actions from
 * 			all member accounts in that organization. </p>
 *          <p> Only a master account or a delegated administrator account can delete an organization conformance pack.
 * 	When calling this API with a delegated administrator, you must ensure Organizations
 * 		<code>ListDelegatedAdministrator</code> permissions are added.</p>
 * 			      <p>Config sets the state of a conformance pack to DELETE_IN_PROGRESS until the deletion is complete.
 * 				You cannot update a conformance pack while it is in this state. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DeleteOrganizationConformancePackCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DeleteOrganizationConformancePackCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new DeleteOrganizationConformancePackCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteOrganizationConformancePackCommandInput} for command's `input` shape.
 * @see {@link DeleteOrganizationConformancePackCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteOrganizationConformancePackCommand extends $Command<
  DeleteOrganizationConformancePackCommandInput,
  DeleteOrganizationConformancePackCommandOutput,
  ConfigServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteOrganizationConformancePackCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConfigServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteOrganizationConformancePackCommandInput, DeleteOrganizationConformancePackCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "DeleteOrganizationConformancePackCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteOrganizationConformancePackRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteOrganizationConformancePackCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteOrganizationConformancePackCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteOrganizationConformancePackCommandOutput> {
    return deserializeAws_json1_1DeleteOrganizationConformancePackCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
