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
  ListGroupMembershipsForMemberRequest,
  ListGroupMembershipsForMemberRequestFilterSensitiveLog,
  ListGroupMembershipsForMemberResponse,
  ListGroupMembershipsForMemberResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListGroupMembershipsForMemberCommand,
  serializeAws_json1_1ListGroupMembershipsForMemberCommand,
} from "../protocols/Aws_json1_1";

export interface ListGroupMembershipsForMemberCommandInput extends ListGroupMembershipsForMemberRequest {}
export interface ListGroupMembershipsForMemberCommandOutput
  extends ListGroupMembershipsForMemberResponse,
    __MetadataBearer {}

/**
 * <p>For the specified member in the specified identity store, returns the list of all <code>GroupMembership</code> objects and returns results in paginated form.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IdentitystoreClient, ListGroupMembershipsForMemberCommand } from "@aws-sdk/client-identitystore"; // ES Modules import
 * // const { IdentitystoreClient, ListGroupMembershipsForMemberCommand } = require("@aws-sdk/client-identitystore"); // CommonJS import
 * const client = new IdentitystoreClient(config);
 * const command = new ListGroupMembershipsForMemberCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListGroupMembershipsForMemberCommandInput} for command's `input` shape.
 * @see {@link ListGroupMembershipsForMemberCommandOutput} for command's `response` shape.
 * @see {@link IdentitystoreClientResolvedConfig | config} for IdentitystoreClient's `config` shape.
 *
 */
export class ListGroupMembershipsForMemberCommand extends $Command<
  ListGroupMembershipsForMemberCommandInput,
  ListGroupMembershipsForMemberCommandOutput,
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

  constructor(readonly input: ListGroupMembershipsForMemberCommandInput) {
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
  ): Handler<ListGroupMembershipsForMemberCommandInput, ListGroupMembershipsForMemberCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListGroupMembershipsForMemberCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IdentitystoreClient";
    const commandName = "ListGroupMembershipsForMemberCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListGroupMembershipsForMemberRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListGroupMembershipsForMemberResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListGroupMembershipsForMemberCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListGroupMembershipsForMemberCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListGroupMembershipsForMemberCommandOutput> {
    return deserializeAws_json1_1ListGroupMembershipsForMemberCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
