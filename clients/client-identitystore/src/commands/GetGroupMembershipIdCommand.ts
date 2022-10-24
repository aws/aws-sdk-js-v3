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
  GetGroupMembershipIdRequest,
  GetGroupMembershipIdRequestFilterSensitiveLog,
  GetGroupMembershipIdResponse,
  GetGroupMembershipIdResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetGroupMembershipIdCommand,
  serializeAws_json1_1GetGroupMembershipIdCommand,
} from "../protocols/Aws_json1_1";

export interface GetGroupMembershipIdCommandInput extends GetGroupMembershipIdRequest {}
export interface GetGroupMembershipIdCommandOutput extends GetGroupMembershipIdResponse, __MetadataBearer {}

/**
 * <p>Retrieves the <code>MembershipId</code> in an identity store.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IdentitystoreClient, GetGroupMembershipIdCommand } from "@aws-sdk/client-identitystore"; // ES Modules import
 * // const { IdentitystoreClient, GetGroupMembershipIdCommand } = require("@aws-sdk/client-identitystore"); // CommonJS import
 * const client = new IdentitystoreClient(config);
 * const command = new GetGroupMembershipIdCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetGroupMembershipIdCommandInput} for command's `input` shape.
 * @see {@link GetGroupMembershipIdCommandOutput} for command's `response` shape.
 * @see {@link IdentitystoreClientResolvedConfig | config} for IdentitystoreClient's `config` shape.
 *
 */
export class GetGroupMembershipIdCommand extends $Command<
  GetGroupMembershipIdCommandInput,
  GetGroupMembershipIdCommandOutput,
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

  constructor(readonly input: GetGroupMembershipIdCommandInput) {
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
  ): Handler<GetGroupMembershipIdCommandInput, GetGroupMembershipIdCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetGroupMembershipIdCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IdentitystoreClient";
    const commandName = "GetGroupMembershipIdCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetGroupMembershipIdRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetGroupMembershipIdResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetGroupMembershipIdCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetGroupMembershipIdCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetGroupMembershipIdCommandOutput> {
    return deserializeAws_json1_1GetGroupMembershipIdCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
