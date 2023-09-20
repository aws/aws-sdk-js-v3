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
import {
  ListUsersRequest,
  ListUsersRequestFilterSensitiveLog,
  ListUsersResponse,
  ListUsersResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_ListUsersCommand, se_ListUsersCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListUsersCommand}.
 */
export interface ListUsersCommandInput extends ListUsersRequest {}
/**
 * @public
 *
 * The output of {@link ListUsersCommand}.
 */
export interface ListUsersCommandOutput extends ListUsersResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists all users in the identity store. Returns a paginated list of complete <code>User</code> objects.
 *          Filtering for a <code>User</code> by the <code>UserName</code> attribute is deprecated. Instead, use the <code>GetUserId</code> API action.</p>
 *          <note>
 *             <p>If you have administrator access to a member account, you can use this API from the member account.
 *          Read about <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_access.html">member accounts</a> in the
 *          <i>Organizations User Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IdentitystoreClient, ListUsersCommand } from "@aws-sdk/client-identitystore"; // ES Modules import
 * // const { IdentitystoreClient, ListUsersCommand } = require("@aws-sdk/client-identitystore"); // CommonJS import
 * const client = new IdentitystoreClient(config);
 * const input = { // ListUsersRequest
 *   IdentityStoreId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Filters: [ // Filters
 *     { // Filter
 *       AttributePath: "STRING_VALUE", // required
 *       AttributeValue: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new ListUsersCommand(input);
 * const response = await client.send(command);
 * // { // ListUsersResponse
 * //   Users: [ // Users // required
 * //     { // User
 * //       UserName: "STRING_VALUE",
 * //       UserId: "STRING_VALUE", // required
 * //       ExternalIds: [ // ExternalIds
 * //         { // ExternalId
 * //           Issuer: "STRING_VALUE", // required
 * //           Id: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       Name: { // Name
 * //         Formatted: "STRING_VALUE",
 * //         FamilyName: "STRING_VALUE",
 * //         GivenName: "STRING_VALUE",
 * //         MiddleName: "STRING_VALUE",
 * //         HonorificPrefix: "STRING_VALUE",
 * //         HonorificSuffix: "STRING_VALUE",
 * //       },
 * //       DisplayName: "STRING_VALUE",
 * //       NickName: "STRING_VALUE",
 * //       ProfileUrl: "STRING_VALUE",
 * //       Emails: [ // Emails
 * //         { // Email
 * //           Value: "STRING_VALUE",
 * //           Type: "STRING_VALUE",
 * //           Primary: true || false,
 * //         },
 * //       ],
 * //       Addresses: [ // Addresses
 * //         { // Address
 * //           StreetAddress: "STRING_VALUE",
 * //           Locality: "STRING_VALUE",
 * //           Region: "STRING_VALUE",
 * //           PostalCode: "STRING_VALUE",
 * //           Country: "STRING_VALUE",
 * //           Formatted: "STRING_VALUE",
 * //           Type: "STRING_VALUE",
 * //           Primary: true || false,
 * //         },
 * //       ],
 * //       PhoneNumbers: [ // PhoneNumbers
 * //         { // PhoneNumber
 * //           Value: "STRING_VALUE",
 * //           Type: "STRING_VALUE",
 * //           Primary: true || false,
 * //         },
 * //       ],
 * //       UserType: "STRING_VALUE",
 * //       Title: "STRING_VALUE",
 * //       PreferredLanguage: "STRING_VALUE",
 * //       Locale: "STRING_VALUE",
 * //       Timezone: "STRING_VALUE",
 * //       IdentityStoreId: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListUsersCommandInput - {@link ListUsersCommandInput}
 * @returns {@link ListUsersCommandOutput}
 * @see {@link ListUsersCommandInput} for command's `input` shape.
 * @see {@link ListUsersCommandOutput} for command's `response` shape.
 * @see {@link IdentitystoreClientResolvedConfig | config} for IdentitystoreClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Indicates that a requested resource is not found.</p>
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
export class ListUsersCommand extends $Command<
  ListUsersCommandInput,
  ListUsersCommandOutput,
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
  constructor(readonly input: ListUsersCommandInput) {
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
  ): Handler<ListUsersCommandInput, ListUsersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListUsersCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IdentitystoreClient";
    const commandName = "ListUsersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListUsersRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListUsersResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIdentityStore",
        operation: "ListUsers",
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
  private serialize(input: ListUsersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListUsersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListUsersCommandOutput> {
    return de_ListUsersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
