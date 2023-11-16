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

import { ListTrustedTokenIssuersRequest, ListTrustedTokenIssuersResponse } from "../models/models_0";
import { de_ListTrustedTokenIssuersCommand, se_ListTrustedTokenIssuersCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSOAdminClientResolvedConfig } from "../SSOAdminClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListTrustedTokenIssuersCommand}.
 */
export interface ListTrustedTokenIssuersCommandInput extends ListTrustedTokenIssuersRequest {}
/**
 * @public
 *
 * The output of {@link ListTrustedTokenIssuersCommand}.
 */
export interface ListTrustedTokenIssuersCommandOutput extends ListTrustedTokenIssuersResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists all the trusted token issuers configured in an instance of IAM Identity Center.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, ListTrustedTokenIssuersCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, ListTrustedTokenIssuersCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const input = { // ListTrustedTokenIssuersRequest
 *   InstanceArn: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListTrustedTokenIssuersCommand(input);
 * const response = await client.send(command);
 * // { // ListTrustedTokenIssuersResponse
 * //   TrustedTokenIssuers: [ // TrustedTokenIssuerList
 * //     { // TrustedTokenIssuerMetadata
 * //       TrustedTokenIssuerArn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       TrustedTokenIssuerType: "OIDC_JWT",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTrustedTokenIssuersCommandInput - {@link ListTrustedTokenIssuersCommandInput}
 * @returns {@link ListTrustedTokenIssuersCommandOutput}
 * @see {@link ListTrustedTokenIssuersCommandInput} for command's `input` shape.
 * @see {@link ListTrustedTokenIssuersCommandOutput} for command's `response` shape.
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
export class ListTrustedTokenIssuersCommand extends $Command<
  ListTrustedTokenIssuersCommandInput,
  ListTrustedTokenIssuersCommandOutput,
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
  constructor(readonly input: ListTrustedTokenIssuersCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSOAdminClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListTrustedTokenIssuersCommandInput, ListTrustedTokenIssuersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListTrustedTokenIssuersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSOAdminClient";
    const commandName = "ListTrustedTokenIssuersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SWBExternalService",
        operation: "ListTrustedTokenIssuers",
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
  private serialize(input: ListTrustedTokenIssuersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListTrustedTokenIssuersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListTrustedTokenIssuersCommandOutput> {
    return de_ListTrustedTokenIssuersCommand(output, context);
  }
}
