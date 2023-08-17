// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { CreateStudioSessionMappingInput } from "../models/models_0";
import { de_CreateStudioSessionMappingCommand, se_CreateStudioSessionMappingCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateStudioSessionMappingCommand}.
 */
export interface CreateStudioSessionMappingCommandInput extends CreateStudioSessionMappingInput {}
/**
 * @public
 *
 * The output of {@link CreateStudioSessionMappingCommand}.
 */
export interface CreateStudioSessionMappingCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Maps a user or group to the Amazon EMR Studio specified by
 *          <code>StudioId</code>, and applies a session policy to refine Studio permissions for that
 *          user or group. Use <code>CreateStudioSessionMapping</code> to assign users to a Studio when
 *          you use IAM Identity Center authentication. For instructions on how to assign users to a
 *          Studio when you use IAM authentication, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio-manage-users.html#emr-studio-assign-users-groups">Assign a user or group to your EMR Studio</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, CreateStudioSessionMappingCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, CreateStudioSessionMappingCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const input = { // CreateStudioSessionMappingInput
 *   StudioId: "STRING_VALUE", // required
 *   IdentityId: "STRING_VALUE",
 *   IdentityName: "STRING_VALUE",
 *   IdentityType: "USER" || "GROUP", // required
 *   SessionPolicyArn: "STRING_VALUE", // required
 * };
 * const command = new CreateStudioSessionMappingCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateStudioSessionMappingCommandInput - {@link CreateStudioSessionMappingCommandInput}
 * @returns {@link CreateStudioSessionMappingCommandOutput}
 * @see {@link CreateStudioSessionMappingCommandInput} for command's `input` shape.
 * @see {@link CreateStudioSessionMappingCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Indicates that an error occurred while processing the request and that the request was
 *          not completed.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception occurs when there is something wrong with user input.</p>
 *
 * @throws {@link EMRServiceException}
 * <p>Base exception class for all service exceptions from EMR service.</p>
 *
 */
export class CreateStudioSessionMappingCommand extends $Command<
  CreateStudioSessionMappingCommandInput,
  CreateStudioSessionMappingCommandOutput,
  EMRClientResolvedConfig
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

  /**
   * @public
   */
  constructor(readonly input: CreateStudioSessionMappingCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EMRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateStudioSessionMappingCommandInput, CreateStudioSessionMappingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateStudioSessionMappingCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRClient";
    const commandName = "CreateStudioSessionMappingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: CreateStudioSessionMappingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateStudioSessionMappingCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateStudioSessionMappingCommandOutput> {
    return de_CreateStudioSessionMappingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
