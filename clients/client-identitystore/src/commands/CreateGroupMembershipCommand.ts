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

import { IdentitystoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IdentitystoreClient";
import { CreateGroupMembershipRequest, CreateGroupMembershipResponse } from "../models/models_0";
import { de_CreateGroupMembershipCommand, se_CreateGroupMembershipCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateGroupMembershipCommand}.
 */
export interface CreateGroupMembershipCommandInput extends CreateGroupMembershipRequest {}
/**
 * @public
 *
 * The output of {@link CreateGroupMembershipCommand}.
 */
export interface CreateGroupMembershipCommandOutput extends CreateGroupMembershipResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a relationship between a member and a group. The following identifiers must be specified: <code>GroupId</code>, <code>IdentityStoreId</code>, and <code>MemberId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IdentitystoreClient, CreateGroupMembershipCommand } from "@aws-sdk/client-identitystore"; // ES Modules import
 * // const { IdentitystoreClient, CreateGroupMembershipCommand } = require("@aws-sdk/client-identitystore"); // CommonJS import
 * const client = new IdentitystoreClient(config);
 * const input = { // CreateGroupMembershipRequest
 *   IdentityStoreId: "STRING_VALUE", // required
 *   GroupId: "STRING_VALUE", // required
 *   MemberId: { // MemberId Union: only one key present
 *     UserId: "STRING_VALUE",
 *   },
 * };
 * const command = new CreateGroupMembershipCommand(input);
 * const response = await client.send(command);
 * // { // CreateGroupMembershipResponse
 * //   MembershipId: "STRING_VALUE", // required
 * //   IdentityStoreId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateGroupMembershipCommandInput - {@link CreateGroupMembershipCommandInput}
 * @returns {@link CreateGroupMembershipCommandOutput}
 * @see {@link CreateGroupMembershipCommandInput} for command's `input` shape.
 * @see {@link CreateGroupMembershipCommandOutput} for command's `response` shape.
 * @see {@link IdentitystoreClientResolvedConfig | config} for IdentitystoreClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This request cannot be completed for one of the following reasons:</p>
 *          <ul>
 *             <li>
 *                <p>Performing the requested operation would violate an existing uniqueness claim in the identity store. Resolve the conflict before retrying this request.</p>
 *             </li>
 *             <li>
 *                <p>The requested resource was being concurrently modified by another request.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Indicates that a requested resource is not found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would cause the number of users or groups in the identity store to exceed the maximum allowed.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed because it contains a syntax error.</p>
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure with an internal server.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Indicates that the principal has crossed the throttling limits of the API operations.</p>
 *
 * @throws {@link IdentitystoreServiceException}
 * <p>Base exception class for all service exceptions from Identitystore service.</p>
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIdentityStore",
        operation: "CreateGroupMembership",
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
  private serialize(input: CreateGroupMembershipCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateGroupMembershipCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateGroupMembershipCommandOutput> {
    return de_CreateGroupMembershipCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
