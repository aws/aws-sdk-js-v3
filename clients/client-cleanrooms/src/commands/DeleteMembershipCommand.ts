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
  DeleteMembershipInput,
  DeleteMembershipInputFilterSensitiveLog,
  DeleteMembershipOutput,
  DeleteMembershipOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DeleteMembershipCommand,
  serializeAws_restJson1DeleteMembershipCommand,
} from "../protocols/Aws_restJson1";

/**
 * The input for {@link DeleteMembershipCommand}.
 */
export interface DeleteMembershipCommandInput extends DeleteMembershipInput {}
/**
 * The output of {@link DeleteMembershipCommand}.
 */
export interface DeleteMembershipCommandOutput extends DeleteMembershipOutput, __MetadataBearer {}

/**
 * <p>Deletes a specified membership. All resources under a membership must be deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, DeleteMembershipCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, DeleteMembershipCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * const client = new CleanRoomsClient(config);
 * const command = new DeleteMembershipCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteMembershipCommandInput} for command's `input` shape.
 * @see {@link DeleteMembershipCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsClientResolvedConfig | config} for CleanRoomsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Caller does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the specified constraints.</p>
 *
 *
 */
export class DeleteMembershipCommand extends $Command<
  DeleteMembershipCommandInput,
  DeleteMembershipCommandOutput,
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

  constructor(readonly input: DeleteMembershipCommandInput) {
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
  ): Handler<DeleteMembershipCommandInput, DeleteMembershipCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteMembershipCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CleanRoomsClient";
    const commandName = "DeleteMembershipCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteMembershipInputFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteMembershipOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteMembershipCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteMembershipCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteMembershipCommandOutput> {
    return deserializeAws_restJson1DeleteMembershipCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
