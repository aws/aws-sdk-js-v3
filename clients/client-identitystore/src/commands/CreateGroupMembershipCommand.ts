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
  CreateGroupMembershipRequest,
  CreateGroupMembershipRequestFilterSensitiveLog,
  CreateGroupMembershipResponse,
  CreateGroupMembershipResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateGroupMembershipCommand,
  serializeAws_json1_1CreateGroupMembershipCommand,
} from "../protocols/Aws_json1_1";

export interface CreateGroupMembershipCommandInput extends CreateGroupMembershipRequest {}
export interface CreateGroupMembershipCommandOutput extends CreateGroupMembershipResponse, __MetadataBearer {}

/**
 * <p>Creates a relationship between a member and a group. The following identifiers must be specified: <code>GroupId</code>, <code>IdentityStoreId</code>, and <code>MemberId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IdentitystoreClient, CreateGroupMembershipCommand } from "@aws-sdk/client-identitystore"; // ES Modules import
 * // const { IdentitystoreClient, CreateGroupMembershipCommand } = require("@aws-sdk/client-identitystore"); // CommonJS import
 * const client = new IdentitystoreClient(config);
 * const command = new CreateGroupMembershipCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateGroupMembershipCommandInput} for command's `input` shape.
 * @see {@link CreateGroupMembershipCommandOutput} for command's `response` shape.
 * @see {@link IdentitystoreClientResolvedConfig | config} for IdentitystoreClient's `config` shape.
 *
 */
export class CreateGroupMembershipCommand extends $Command<
  CreateGroupMembershipCommandInput,
  CreateGroupMembershipCommandOutput,
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

  constructor(readonly input: CreateGroupMembershipCommandInput) {
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
  ): Handler<CreateGroupMembershipCommandInput, CreateGroupMembershipCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateGroupMembershipCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IdentitystoreClient";
    const commandName = "CreateGroupMembershipCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateGroupMembershipRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateGroupMembershipResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateGroupMembershipCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateGroupMembershipCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateGroupMembershipCommandOutput> {
    return deserializeAws_json1_1CreateGroupMembershipCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
