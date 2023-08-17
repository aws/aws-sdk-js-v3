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

import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import { ListAdminsManagingAccountRequest, ListAdminsManagingAccountResponse } from "../models/models_0";
import { de_ListAdminsManagingAccountCommand, se_ListAdminsManagingAccountCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListAdminsManagingAccountCommand}.
 */
export interface ListAdminsManagingAccountCommandInput extends ListAdminsManagingAccountRequest {}
/**
 * @public
 *
 * The output of {@link ListAdminsManagingAccountCommand}.
 */
export interface ListAdminsManagingAccountCommandOutput extends ListAdminsManagingAccountResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the accounts that are managing the specified Organizations member account. This is useful for any member account so that they can view the accounts who are managing their account. This operation only returns the managing administrators that have the requested account within their <a>AdminScope</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, ListAdminsManagingAccountCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, ListAdminsManagingAccountCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * const client = new FMSClient(config);
 * const input = { // ListAdminsManagingAccountRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListAdminsManagingAccountCommand(input);
 * const response = await client.send(command);
 * // { // ListAdminsManagingAccountResponse
 * //   AdminAccounts: [ // AccountIdList
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAdminsManagingAccountCommandInput - {@link ListAdminsManagingAccountCommandInput}
 * @returns {@link ListAdminsManagingAccountCommandOutput}
 * @see {@link ListAdminsManagingAccountCommandInput} for command's `input` shape.
 * @see {@link ListAdminsManagingAccountCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for FMSClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (client fault)
 *  <p>The operation failed because of a system problem, even though the request was valid. Retry
 *       your request.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The parameters of the request were invalid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link FMSServiceException}
 * <p>Base exception class for all service exceptions from FMS service.</p>
 *
 */
export class ListAdminsManagingAccountCommand extends $Command<
  ListAdminsManagingAccountCommandInput,
  ListAdminsManagingAccountCommandOutput,
  FMSClientResolvedConfig
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
  constructor(readonly input: ListAdminsManagingAccountCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAdminsManagingAccountCommandInput, ListAdminsManagingAccountCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAdminsManagingAccountCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FMSClient";
    const commandName = "ListAdminsManagingAccountCommand";
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
  private serialize(input: ListAdminsManagingAccountCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListAdminsManagingAccountCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListAdminsManagingAccountCommandOutput> {
    return de_ListAdminsManagingAccountCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
