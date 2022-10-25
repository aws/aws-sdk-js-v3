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

import { AppConfigClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppConfigClient";
import {
  ExtensionAssociation,
  ExtensionAssociationFilterSensitiveLog,
  UpdateExtensionAssociationRequest,
  UpdateExtensionAssociationRequestFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1UpdateExtensionAssociationCommand,
  serializeAws_restJson1UpdateExtensionAssociationCommand,
} from "../protocols/Aws_restJson1";

export interface UpdateExtensionAssociationCommandInput extends UpdateExtensionAssociationRequest {}
export interface UpdateExtensionAssociationCommandOutput extends ExtensionAssociation, __MetadataBearer {}

/**
 * <p>Updates an association. For more information about extensions and associations, see
 *             <a href="https://docs.aws.amazon.com/appconfig/latest/userguide/working-with-appconfig-extensions.html">Working with
 *                AppConfig extensions</a> in the
 *          <i>AppConfig User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, UpdateExtensionAssociationCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, UpdateExtensionAssociationCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * const client = new AppConfigClient(config);
 * const command = new UpdateExtensionAssociationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateExtensionAssociationCommandInput} for command's `input` shape.
 * @see {@link UpdateExtensionAssociationCommandOutput} for command's `response` shape.
 * @see {@link AppConfigClientResolvedConfig | config} for AppConfigClient's `config` shape.
 *
 */
export class UpdateExtensionAssociationCommand extends $Command<
  UpdateExtensionAssociationCommandInput,
  UpdateExtensionAssociationCommandOutput,
  AppConfigClientResolvedConfig
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

  constructor(readonly input: UpdateExtensionAssociationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppConfigClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateExtensionAssociationCommandInput, UpdateExtensionAssociationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateExtensionAssociationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppConfigClient";
    const commandName = "UpdateExtensionAssociationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateExtensionAssociationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ExtensionAssociationFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateExtensionAssociationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateExtensionAssociationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateExtensionAssociationCommandOutput> {
    return deserializeAws_restJson1UpdateExtensionAssociationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
