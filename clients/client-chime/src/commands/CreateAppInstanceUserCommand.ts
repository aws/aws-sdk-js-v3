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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import {
  CreateAppInstanceUserRequest,
  CreateAppInstanceUserRequestFilterSensitiveLog,
  CreateAppInstanceUserResponse,
} from "../models/models_0";
import { de_CreateAppInstanceUserCommand, se_CreateAppInstanceUserCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateAppInstanceUserCommand}.
 */
export interface CreateAppInstanceUserCommandInput extends CreateAppInstanceUserRequest {}
/**
 * @public
 *
 * The output of {@link CreateAppInstanceUserCommand}.
 */
export interface CreateAppInstanceUserCommandOutput extends CreateAppInstanceUserResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Creates a user under an Amazon Chime <code>AppInstance</code>. The request consists of a unique <code>appInstanceUserId</code> and
 * <code>Name</code> for that user.</p>
 *          <important>
 *             <p>
 *                <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_identity-chime_CreateAppInstanceUser.html">CreateAppInstanceUser</a>, in the Amazon Chime SDK.</p>
 *             <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to
 *             <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the
 *             <i>Amazon Chime SDK Developer Guide</i>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, CreateAppInstanceUserCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, CreateAppInstanceUserCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const input = { // CreateAppInstanceUserRequest
 *   AppInstanceArn: "STRING_VALUE", // required
 *   AppInstanceUserId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   Metadata: "STRING_VALUE",
 *   ClientRequestToken: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateAppInstanceUserCommand(input);
 * const response = await client.send(command);
 * // { // CreateAppInstanceUserResponse
 * //   AppInstanceUserArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateAppInstanceUserCommandInput - {@link CreateAppInstanceUserCommandInput}
 * @returns {@link CreateAppInstanceUserCommandOutput}
 * @see {@link CreateAppInstanceUserCommandInput} for command's `input` shape.
 * @see {@link CreateAppInstanceUserCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be processed because of conflict in the current state of the
 *          resource.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>The request exceeds the resource limit.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottledClientException} (client fault)
 *  <p>The client exceeded its request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client is not currently authorized to make the request.</p>
 *
 * @throws {@link ChimeServiceException}
 * <p>Base exception class for all service exceptions from Chime service.</p>
 *
 */
export class CreateAppInstanceUserCommand extends $Command<
  CreateAppInstanceUserCommandInput,
  CreateAppInstanceUserCommandOutput,
  ChimeClientResolvedConfig
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
  constructor(readonly input: CreateAppInstanceUserCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateAppInstanceUserCommandInput, CreateAppInstanceUserCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateAppInstanceUserCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "CreateAppInstanceUserCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateAppInstanceUserRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "UCBuzzConsoleService",
        operation: "CreateAppInstanceUser",
      },
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
  private serialize(input: CreateAppInstanceUserCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateAppInstanceUserCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateAppInstanceUserCommandOutput> {
    return de_CreateAppInstanceUserCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
