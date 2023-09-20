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

import { ListMailboxPermissionsRequest, ListMailboxPermissionsResponse } from "../models/models_0";
import { de_ListMailboxPermissionsCommand, se_ListMailboxPermissionsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListMailboxPermissionsCommand}.
 */
export interface ListMailboxPermissionsCommandInput extends ListMailboxPermissionsRequest {}
/**
 * @public
 *
 * The output of {@link ListMailboxPermissionsCommand}.
 */
export interface ListMailboxPermissionsCommandOutput extends ListMailboxPermissionsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the mailbox permissions associated with a user, group, or resource
 *          mailbox.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, ListMailboxPermissionsCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, ListMailboxPermissionsCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const input = { // ListMailboxPermissionsRequest
 *   OrganizationId: "STRING_VALUE", // required
 *   EntityId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListMailboxPermissionsCommand(input);
 * const response = await client.send(command);
 * // { // ListMailboxPermissionsResponse
 * //   Permissions: [ // Permissions
 * //     { // Permission
 * //       GranteeId: "STRING_VALUE", // required
 * //       GranteeType: "GROUP" || "USER", // required
 * //       PermissionValues: [ // PermissionValues // required
 * //         "FULL_ACCESS" || "SEND_AS" || "SEND_ON_BEHALF",
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListMailboxPermissionsCommandInput - {@link ListMailboxPermissionsCommandInput}
 * @returns {@link ListMailboxPermissionsCommandOutput}
 * @see {@link ListMailboxPermissionsCommandInput} for command's `input` shape.
 * @see {@link ListMailboxPermissionsCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>The identifier supplied for the user, group, or resource does not exist in your
 *          organization.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link OrganizationNotFoundException} (client fault)
 *  <p>An operation received a valid organization identifier that either doesn't belong or
 *          exist in the system.</p>
 *
 * @throws {@link OrganizationStateException} (client fault)
 *  <p>The organization must have a valid state to perform certain
 *          operations on the organization or its members.</p>
 *
 * @throws {@link WorkMailServiceException}
 * <p>Base exception class for all service exceptions from WorkMail service.</p>
 *
 */
export class ListMailboxPermissionsCommand extends $Command<
  ListMailboxPermissionsCommandInput,
  ListMailboxPermissionsCommandOutput,
  WorkMailClientResolvedConfig
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
  constructor(readonly input: ListMailboxPermissionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkMailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListMailboxPermissionsCommandInput, ListMailboxPermissionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListMailboxPermissionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkMailClient";
    const commandName = "ListMailboxPermissionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "WorkMailService",
        operation: "ListMailboxPermissions",
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
  private serialize(input: ListMailboxPermissionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListMailboxPermissionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListMailboxPermissionsCommandOutput> {
    return de_ListMailboxPermissionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
