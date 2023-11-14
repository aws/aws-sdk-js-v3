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

import {
  ListPermissionSetsProvisionedToAccountRequest,
  ListPermissionSetsProvisionedToAccountResponse,
} from "../models/models_0";
import {
  de_ListPermissionSetsProvisionedToAccountCommand,
  se_ListPermissionSetsProvisionedToAccountCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSOAdminClientResolvedConfig } from "../SSOAdminClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListPermissionSetsProvisionedToAccountCommand}.
 */
export interface ListPermissionSetsProvisionedToAccountCommandInput
  extends ListPermissionSetsProvisionedToAccountRequest {}
/**
 * @public
 *
 * The output of {@link ListPermissionSetsProvisionedToAccountCommand}.
 */
export interface ListPermissionSetsProvisionedToAccountCommandOutput
  extends ListPermissionSetsProvisionedToAccountResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Lists all the permission sets that are provisioned to a specified Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, ListPermissionSetsProvisionedToAccountCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, ListPermissionSetsProvisionedToAccountCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const input = { // ListPermissionSetsProvisionedToAccountRequest
 *   InstanceArn: "STRING_VALUE", // required
 *   AccountId: "STRING_VALUE", // required
 *   ProvisioningStatus: "LATEST_PERMISSION_SET_PROVISIONED" || "LATEST_PERMISSION_SET_NOT_PROVISIONED",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListPermissionSetsProvisionedToAccountCommand(input);
 * const response = await client.send(command);
 * // { // ListPermissionSetsProvisionedToAccountResponse
 * //   NextToken: "STRING_VALUE",
 * //   PermissionSets: [ // PermissionSetList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListPermissionSetsProvisionedToAccountCommandInput - {@link ListPermissionSetsProvisionedToAccountCommandInput}
 * @returns {@link ListPermissionSetsProvisionedToAccountCommandOutput}
 * @see {@link ListPermissionSetsProvisionedToAccountCommandInput} for command's `input` shape.
 * @see {@link ListPermissionSetsProvisionedToAccountCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for SSOAdminClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure with
 *       an internal server.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Indicates that a requested resource is not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Indicates that the principal has crossed the throttling limits of the API
 *       operations.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed because it contains a syntax error.</p>
 *
 * @throws {@link SSOAdminServiceException}
 * <p>Base exception class for all service exceptions from SSOAdmin service.</p>
 *
 */
export class ListPermissionSetsProvisionedToAccountCommand extends $Command<
  ListPermissionSetsProvisionedToAccountCommandInput,
  ListPermissionSetsProvisionedToAccountCommandOutput,
  SSOAdminClientResolvedConfig
> {
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
  constructor(readonly input: ListPermissionSetsProvisionedToAccountCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSOAdminClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListPermissionSetsProvisionedToAccountCommandInput, ListPermissionSetsProvisionedToAccountCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListPermissionSetsProvisionedToAccountCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSOAdminClient";
    const commandName = "ListPermissionSetsProvisionedToAccountCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SWBExternalService",
        operation: "ListPermissionSetsProvisionedToAccount",
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
  private serialize(
    input: ListPermissionSetsProvisionedToAccountCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListPermissionSetsProvisionedToAccountCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListPermissionSetsProvisionedToAccountCommandOutput> {
    return de_ListPermissionSetsProvisionedToAccountCommand(output, context);
  }
}
