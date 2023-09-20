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
import { GetUserRequest, GetUserResponse, GetUserResponseFilterSensitiveLog } from "../models/models_1";
import { de_GetUserCommand, se_GetUserCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetUserCommand}.
 */
export interface GetUserCommandInput extends GetUserRequest {}
/**
 * @public
 *
 * The output of {@link GetUserCommand}.
 */
export interface GetUserCommandOutput extends GetUserResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves details for the specified user ID, such as primary email address, license type,and personal meeting PIN.</p>
 *          <p>
 * To retrieve user details with an email address instead of a user ID, use the
 * <a>ListUsers</a> action, and then filter by email address.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, GetUserCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, GetUserCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const input = { // GetUserRequest
 *   AccountId: "STRING_VALUE", // required
 *   UserId: "STRING_VALUE", // required
 * };
 * const command = new GetUserCommand(input);
 * const response = await client.send(command);
 * // { // GetUserResponse
 * //   User: { // User
 * //     UserId: "STRING_VALUE", // required
 * //     AccountId: "STRING_VALUE",
 * //     PrimaryEmail: "STRING_VALUE",
 * //     PrimaryProvisionedNumber: "STRING_VALUE",
 * //     DisplayName: "STRING_VALUE",
 * //     LicenseType: "Basic" || "Plus" || "Pro" || "ProTrial",
 * //     UserType: "PrivateUser" || "SharedDevice",
 * //     UserRegistrationStatus: "Unregistered" || "Registered" || "Suspended",
 * //     UserInvitationStatus: "Pending" || "Accepted" || "Failed",
 * //     RegisteredOn: new Date("TIMESTAMP"),
 * //     InvitedOn: new Date("TIMESTAMP"),
 * //     AlexaForBusinessMetadata: { // AlexaForBusinessMetadata
 * //       IsAlexaForBusinessEnabled: true || false,
 * //       AlexaForBusinessRoomArn: "STRING_VALUE",
 * //     },
 * //     PersonalPIN: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetUserCommandInput - {@link GetUserCommandInput}
 * @returns {@link GetUserCommandOutput}
 * @see {@link GetUserCommandInput} for command's `input` shape.
 * @see {@link GetUserCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>One or more of the resources in the request does not exist in the system.</p>
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
export class GetUserCommand extends $Command<GetUserCommandInput, GetUserCommandOutput, ChimeClientResolvedConfig> {
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
  constructor(readonly input: GetUserCommandInput) {
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
  ): Handler<GetUserCommandInput, GetUserCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetUserCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "GetUserCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetUserResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "UCBuzzConsoleService",
        operation: "GetUser",
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
  private serialize(input: GetUserCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetUserCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetUserCommandOutput> {
    return de_GetUserCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
