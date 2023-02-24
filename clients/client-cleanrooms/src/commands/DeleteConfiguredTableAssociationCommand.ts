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

import { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import {
  DeleteConfiguredTableAssociationInput,
  DeleteConfiguredTableAssociationInputFilterSensitiveLog,
  DeleteConfiguredTableAssociationOutput,
  DeleteConfiguredTableAssociationOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DeleteConfiguredTableAssociationCommand,
  serializeAws_restJson1DeleteConfiguredTableAssociationCommand,
} from "../protocols/Aws_restJson1";

export interface DeleteConfiguredTableAssociationCommandInput extends DeleteConfiguredTableAssociationInput {}
export interface DeleteConfiguredTableAssociationCommandOutput
  extends DeleteConfiguredTableAssociationOutput,
    __MetadataBearer {}

/**
 * <p>Deletes a configured table association.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, DeleteConfiguredTableAssociationCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, DeleteConfiguredTableAssociationCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * const client = new CleanRoomsClient(config);
 * const command = new DeleteConfiguredTableAssociationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteConfiguredTableAssociationCommandInput} for command's `input` shape.
 * @see {@link DeleteConfiguredTableAssociationCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsClientResolvedConfig | config} for CleanRoomsClient's `config` shape.
 *
 */
export class DeleteConfiguredTableAssociationCommand extends $Command<
  DeleteConfiguredTableAssociationCommandInput,
  DeleteConfiguredTableAssociationCommandOutput,
  CleanRoomsClientResolvedConfig
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

  constructor(readonly input: DeleteConfiguredTableAssociationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CleanRoomsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteConfiguredTableAssociationCommandInput, DeleteConfiguredTableAssociationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteConfiguredTableAssociationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CleanRoomsClient";
    const commandName = "DeleteConfiguredTableAssociationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteConfiguredTableAssociationInputFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteConfiguredTableAssociationOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteConfiguredTableAssociationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteConfiguredTableAssociationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteConfiguredTableAssociationCommandOutput> {
    return deserializeAws_restJson1DeleteConfiguredTableAssociationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
