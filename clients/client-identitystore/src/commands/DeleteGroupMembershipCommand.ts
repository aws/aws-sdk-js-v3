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

import { IdentitystoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IdentitystoreClient";
import {
  DeleteGroupMembershipRequest,
  DeleteGroupMembershipRequestFilterSensitiveLog,
  DeleteGroupMembershipResponse,
  DeleteGroupMembershipResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DeleteGroupMembershipCommand,
  serializeAws_json1_1DeleteGroupMembershipCommand,
} from "../protocols/Aws_json1_1";

export interface DeleteGroupMembershipCommandInput extends DeleteGroupMembershipRequest {}
export interface DeleteGroupMembershipCommandOutput extends DeleteGroupMembershipResponse, __MetadataBearer {}

/**
 * <p>Delete a membership within a group given <code>MembershipId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IdentitystoreClient, DeleteGroupMembershipCommand } from "@aws-sdk/client-identitystore"; // ES Modules import
 * // const { IdentitystoreClient, DeleteGroupMembershipCommand } = require("@aws-sdk/client-identitystore"); // CommonJS import
 * const client = new IdentitystoreClient(config);
 * const command = new DeleteGroupMembershipCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteGroupMembershipCommandInput} for command's `input` shape.
 * @see {@link DeleteGroupMembershipCommandOutput} for command's `response` shape.
 * @see {@link IdentitystoreClientResolvedConfig | config} for IdentitystoreClient's `config` shape.
 *
 */
export class DeleteGroupMembershipCommand extends $Command<
  DeleteGroupMembershipCommandInput,
  DeleteGroupMembershipCommandOutput,
  IdentitystoreClientResolvedConfig
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

  constructor(readonly input: DeleteGroupMembershipCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IdentitystoreClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteGroupMembershipCommandInput, DeleteGroupMembershipCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteGroupMembershipCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IdentitystoreClient";
    const commandName = "DeleteGroupMembershipCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteGroupMembershipRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteGroupMembershipResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteGroupMembershipCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteGroupMembershipCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteGroupMembershipCommandOutput> {
    return deserializeAws_json1_1DeleteGroupMembershipCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
