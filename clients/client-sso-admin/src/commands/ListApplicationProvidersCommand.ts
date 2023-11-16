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

import { ListApplicationProvidersRequest, ListApplicationProvidersResponse } from "../models/models_0";
import { de_ListApplicationProvidersCommand, se_ListApplicationProvidersCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSOAdminClientResolvedConfig } from "../SSOAdminClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListApplicationProvidersCommand}.
 */
export interface ListApplicationProvidersCommandInput extends ListApplicationProvidersRequest {}
/**
 * @public
 *
 * The output of {@link ListApplicationProvidersCommand}.
 */
export interface ListApplicationProvidersCommandOutput extends ListApplicationProvidersResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the application providers configured in the IAM Identity Center identity store.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, ListApplicationProvidersCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, ListApplicationProvidersCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const input = { // ListApplicationProvidersRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListApplicationProvidersCommand(input);
 * const response = await client.send(command);
 * // { // ListApplicationProvidersResponse
 * //   ApplicationProviders: [ // ApplicationProviderList
 * //     { // ApplicationProvider
 * //       ApplicationProviderArn: "STRING_VALUE", // required
 * //       FederationProtocol: "SAML" || "OAUTH",
 * //       DisplayData: { // DisplayData
 * //         DisplayName: "STRING_VALUE",
 * //         IconUrl: "STRING_VALUE",
 * //         Description: "STRING_VALUE",
 * //       },
 * //       ResourceServerConfig: { // ResourceServerConfig
 * //         Scopes: { // ResourceServerScopes
 * //           "<keys>": { // ResourceServerScopeDetails
 * //             LongDescription: "STRING_VALUE",
 * //             DetailedTitle: "STRING_VALUE",
 * //           },
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListApplicationProvidersCommandInput - {@link ListApplicationProvidersCommandInput}
 * @returns {@link ListApplicationProvidersCommandOutput}
 * @see {@link ListApplicationProvidersCommandInput} for command's `input` shape.
 * @see {@link ListApplicationProvidersCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for SSOAdminClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure
 *             with an internal server.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Indicates that the principal has crossed the throttling limits of the API
 *             operations.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed because it contains a syntax error.</p>
 *
 * @throws {@link SSOAdminServiceException}
 * <p>Base exception class for all service exceptions from SSOAdmin service.</p>
 *
 */
export class ListApplicationProvidersCommand extends $Command<
  ListApplicationProvidersCommandInput,
  ListApplicationProvidersCommandOutput,
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
  constructor(readonly input: ListApplicationProvidersCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSOAdminClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListApplicationProvidersCommandInput, ListApplicationProvidersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListApplicationProvidersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSOAdminClient";
    const commandName = "ListApplicationProvidersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SWBExternalService",
        operation: "ListApplicationProviders",
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
  private serialize(input: ListApplicationProvidersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListApplicationProvidersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListApplicationProvidersCommandOutput> {
    return de_ListApplicationProvidersCommand(output, context);
  }
}
