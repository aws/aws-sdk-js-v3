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
  DeleteClientBrandingRequest,
  DeleteClientBrandingRequestFilterSensitiveLog,
  DeleteClientBrandingResult,
  DeleteClientBrandingResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DeleteClientBrandingCommand,
  serializeAws_json1_1DeleteClientBrandingCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

export interface DeleteClientBrandingCommandInput extends DeleteClientBrandingRequest {}
export interface DeleteClientBrandingCommandOutput extends DeleteClientBrandingResult, __MetadataBearer {}

/**
 * <p>Deletes customized client branding. Client branding allows you to customize your
 *          WorkSpace's client login portal. You can tailor your login portal company logo, the support
 *          email address, support link, link to reset password, and a custom message for users trying
 *          to sign in.</p>
 *          <p>After you delete your customized client branding, your login portal reverts to the
 *          default client branding.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, DeleteClientBrandingCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, DeleteClientBrandingCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new DeleteClientBrandingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteClientBrandingCommandInput} for command's `input` shape.
 * @see {@link DeleteClientBrandingCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 */
export class DeleteClientBrandingCommand extends $Command<
  DeleteClientBrandingCommandInput,
  DeleteClientBrandingCommandOutput,
  WorkSpacesClientResolvedConfig
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

  constructor(readonly input: DeleteClientBrandingCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkSpacesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteClientBrandingCommandInput, DeleteClientBrandingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteClientBrandingCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesClient";
    const commandName = "DeleteClientBrandingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteClientBrandingRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteClientBrandingResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteClientBrandingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteClientBrandingCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteClientBrandingCommandOutput> {
    return deserializeAws_json1_1DeleteClientBrandingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
