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

import { DescribeTrustedTokenIssuerRequest, DescribeTrustedTokenIssuerResponse } from "../models/models_0";
import { de_DescribeTrustedTokenIssuerCommand, se_DescribeTrustedTokenIssuerCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSOAdminClientResolvedConfig } from "../SSOAdminClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeTrustedTokenIssuerCommand}.
 */
export interface DescribeTrustedTokenIssuerCommandInput extends DescribeTrustedTokenIssuerRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTrustedTokenIssuerCommand}.
 */
export interface DescribeTrustedTokenIssuerCommandOutput extends DescribeTrustedTokenIssuerResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves details about a trusted token issuer configuration stored in an instance of IAM Identity Center. Details include the  name of the trusted token issuer, the issuer URL, and the path of the source attribute and the destination attribute for a trusted token issuer configuration.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, DescribeTrustedTokenIssuerCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, DescribeTrustedTokenIssuerCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const input = { // DescribeTrustedTokenIssuerRequest
 *   TrustedTokenIssuerArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeTrustedTokenIssuerCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTrustedTokenIssuerResponse
 * //   TrustedTokenIssuerArn: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   TrustedTokenIssuerType: "OIDC_JWT",
 * //   TrustedTokenIssuerConfiguration: { // TrustedTokenIssuerConfiguration Union: only one key present
 * //     OidcJwtConfiguration: { // OidcJwtConfiguration
 * //       IssuerUrl: "STRING_VALUE", // required
 * //       ClaimAttributePath: "STRING_VALUE", // required
 * //       IdentityStoreAttributePath: "STRING_VALUE", // required
 * //       JwksRetrievalOption: "OPEN_ID_DISCOVERY", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeTrustedTokenIssuerCommandInput - {@link DescribeTrustedTokenIssuerCommandInput}
 * @returns {@link DescribeTrustedTokenIssuerCommandOutput}
 * @see {@link DescribeTrustedTokenIssuerCommandInput} for command's `input` shape.
 * @see {@link DescribeTrustedTokenIssuerCommandOutput} for command's `response` shape.
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
export class DescribeTrustedTokenIssuerCommand extends $Command<
  DescribeTrustedTokenIssuerCommandInput,
  DescribeTrustedTokenIssuerCommandOutput,
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
  constructor(readonly input: DescribeTrustedTokenIssuerCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSOAdminClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeTrustedTokenIssuerCommandInput, DescribeTrustedTokenIssuerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeTrustedTokenIssuerCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSOAdminClient";
    const commandName = "DescribeTrustedTokenIssuerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SWBExternalService",
        operation: "DescribeTrustedTokenIssuer",
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
  private serialize(input: DescribeTrustedTokenIssuerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeTrustedTokenIssuerCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeTrustedTokenIssuerCommandOutput> {
    return de_DescribeTrustedTokenIssuerCommand(output, context);
  }
}
