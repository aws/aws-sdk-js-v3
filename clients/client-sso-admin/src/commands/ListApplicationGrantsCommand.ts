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

import { ListApplicationGrantsRequest, ListApplicationGrantsResponse } from "../models/models_0";
import { de_ListApplicationGrantsCommand, se_ListApplicationGrantsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSOAdminClientResolvedConfig } from "../SSOAdminClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListApplicationGrantsCommand}.
 */
export interface ListApplicationGrantsCommandInput extends ListApplicationGrantsRequest {}
/**
 * @public
 *
 * The output of {@link ListApplicationGrantsCommand}.
 */
export interface ListApplicationGrantsCommandOutput extends ListApplicationGrantsResponse, __MetadataBearer {}

/**
 * @public
 * <p>List the grants associated with an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, ListApplicationGrantsCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, ListApplicationGrantsCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const input = { // ListApplicationGrantsRequest
 *   ApplicationArn: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListApplicationGrantsCommand(input);
 * const response = await client.send(command);
 * // { // ListApplicationGrantsResponse
 * //   Grants: [ // Grants // required
 * //     { // GrantItem
 * //       GrantType: "authorization_code" || "refresh_token" || "urn:ietf:params:oauth:grant-type:jwt-bearer" || "urn:ietf:params:oauth:grant-type:token-exchange", // required
 * //       Grant: { // Grant Union: only one key present
 * //         AuthorizationCode: { // AuthorizationCodeGrant
 * //           RedirectUris: [ // RedirectUris
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         JwtBearer: { // JwtBearerGrant
 * //           AuthorizedTokenIssuers: [ // AuthorizedTokenIssuers
 * //             { // AuthorizedTokenIssuer
 * //               TrustedTokenIssuerArn: "STRING_VALUE",
 * //               AuthorizedAudiences: [ // TokenIssuerAudiences
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //           ],
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListApplicationGrantsCommandInput - {@link ListApplicationGrantsCommandInput}
 * @returns {@link ListApplicationGrantsCommandOutput}
 * @see {@link ListApplicationGrantsCommandInput} for command's `input` shape.
 * @see {@link ListApplicationGrantsCommandOutput} for command's `response` shape.
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
export class ListApplicationGrantsCommand extends $Command<
  ListApplicationGrantsCommandInput,
  ListApplicationGrantsCommandOutput,
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
  constructor(readonly input: ListApplicationGrantsCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSOAdminClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListApplicationGrantsCommandInput, ListApplicationGrantsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListApplicationGrantsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSOAdminClient";
    const commandName = "ListApplicationGrantsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SWBExternalService",
        operation: "ListApplicationGrants",
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
  private serialize(input: ListApplicationGrantsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListApplicationGrantsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListApplicationGrantsCommandOutput> {
    return de_ListApplicationGrantsCommand(output, context);
  }
}
