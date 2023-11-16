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
  ListApplicationAuthenticationMethodsRequest,
  ListApplicationAuthenticationMethodsResponse,
} from "../models/models_0";
import {
  de_ListApplicationAuthenticationMethodsCommand,
  se_ListApplicationAuthenticationMethodsCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSOAdminClientResolvedConfig } from "../SSOAdminClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListApplicationAuthenticationMethodsCommand}.
 */
export interface ListApplicationAuthenticationMethodsCommandInput extends ListApplicationAuthenticationMethodsRequest {}
/**
 * @public
 *
 * The output of {@link ListApplicationAuthenticationMethodsCommand}.
 */
export interface ListApplicationAuthenticationMethodsCommandOutput
  extends ListApplicationAuthenticationMethodsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Lists all of the authentication methods supported by the specified application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, ListApplicationAuthenticationMethodsCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, ListApplicationAuthenticationMethodsCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const input = { // ListApplicationAuthenticationMethodsRequest
 *   ApplicationArn: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListApplicationAuthenticationMethodsCommand(input);
 * const response = await client.send(command);
 * // { // ListApplicationAuthenticationMethodsResponse
 * //   AuthenticationMethods: [ // AuthenticationMethods
 * //     { // AuthenticationMethodItem
 * //       AuthenticationMethodType: "IAM",
 * //       AuthenticationMethod: { // AuthenticationMethod Union: only one key present
 * //         Iam: { // IamAuthenticationMethod
 * //           ActorPolicy: "DOCUMENT_VALUE", // required
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListApplicationAuthenticationMethodsCommandInput - {@link ListApplicationAuthenticationMethodsCommandInput}
 * @returns {@link ListApplicationAuthenticationMethodsCommandOutput}
 * @see {@link ListApplicationAuthenticationMethodsCommandInput} for command's `input` shape.
 * @see {@link ListApplicationAuthenticationMethodsCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for SSOAdminClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure
 *             with an internal server.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Indicates that a requested resource is not found.</p>
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
export class ListApplicationAuthenticationMethodsCommand extends $Command<
  ListApplicationAuthenticationMethodsCommandInput,
  ListApplicationAuthenticationMethodsCommandOutput,
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
  constructor(readonly input: ListApplicationAuthenticationMethodsCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSOAdminClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListApplicationAuthenticationMethodsCommandInput, ListApplicationAuthenticationMethodsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListApplicationAuthenticationMethodsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSOAdminClient";
    const commandName = "ListApplicationAuthenticationMethodsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SWBExternalService",
        operation: "ListApplicationAuthenticationMethods",
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
    input: ListApplicationAuthenticationMethodsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListApplicationAuthenticationMethodsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListApplicationAuthenticationMethodsCommandOutput> {
    return de_ListApplicationAuthenticationMethodsCommand(output, context);
  }
}
