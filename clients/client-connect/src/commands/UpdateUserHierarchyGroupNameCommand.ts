import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { UpdateUserHierarchyGroupNameRequest } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateUserHierarchyGroupNameCommand,
  serializeAws_restJson1UpdateUserHierarchyGroupNameCommand,
} from "../protocols/Aws_restJson1";
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

export interface UpdateUserHierarchyGroupNameCommandInput extends UpdateUserHierarchyGroupNameRequest {}
export interface UpdateUserHierarchyGroupNameCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates the name of the user hierarchy group. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateUserHierarchyGroupNameCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateUserHierarchyGroupNameCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new UpdateUserHierarchyGroupNameCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateUserHierarchyGroupNameCommandInput} for command's `input` shape.
 * @see {@link UpdateUserHierarchyGroupNameCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateUserHierarchyGroupNameCommand extends $Command<
  UpdateUserHierarchyGroupNameCommandInput,
  UpdateUserHierarchyGroupNameCommandOutput,
  ConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateUserHierarchyGroupNameCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateUserHierarchyGroupNameCommandInput, UpdateUserHierarchyGroupNameCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "UpdateUserHierarchyGroupNameCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateUserHierarchyGroupNameRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateUserHierarchyGroupNameCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateUserHierarchyGroupNameCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateUserHierarchyGroupNameCommandOutput> {
    return deserializeAws_restJson1UpdateUserHierarchyGroupNameCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
