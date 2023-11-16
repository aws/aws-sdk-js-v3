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

import { DescribeApplicationProviderRequest, DescribeApplicationProviderResponse } from "../models/models_0";
import { de_DescribeApplicationProviderCommand, se_DescribeApplicationProviderCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSOAdminClientResolvedConfig } from "../SSOAdminClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeApplicationProviderCommand}.
 */
export interface DescribeApplicationProviderCommandInput extends DescribeApplicationProviderRequest {}
/**
 * @public
 *
 * The output of {@link DescribeApplicationProviderCommand}.
 */
export interface DescribeApplicationProviderCommandOutput
  extends DescribeApplicationProviderResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Retrieves details about a provider that can be used to connect an Amazon Web Services managed application or customer managed application to IAM Identity Center.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, DescribeApplicationProviderCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, DescribeApplicationProviderCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const input = { // DescribeApplicationProviderRequest
 *   ApplicationProviderArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeApplicationProviderCommand(input);
 * const response = await client.send(command);
 * // { // DescribeApplicationProviderResponse
 * //   ApplicationProviderArn: "STRING_VALUE", // required
 * //   FederationProtocol: "SAML" || "OAUTH",
 * //   DisplayData: { // DisplayData
 * //     DisplayName: "STRING_VALUE",
 * //     IconUrl: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //   },
 * //   ResourceServerConfig: { // ResourceServerConfig
 * //     Scopes: { // ResourceServerScopes
 * //       "<keys>": { // ResourceServerScopeDetails
 * //         LongDescription: "STRING_VALUE",
 * //         DetailedTitle: "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeApplicationProviderCommandInput - {@link DescribeApplicationProviderCommandInput}
 * @returns {@link DescribeApplicationProviderCommandOutput}
 * @see {@link DescribeApplicationProviderCommandInput} for command's `input` shape.
 * @see {@link DescribeApplicationProviderCommandOutput} for command's `response` shape.
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
export class DescribeApplicationProviderCommand extends $Command<
  DescribeApplicationProviderCommandInput,
  DescribeApplicationProviderCommandOutput,
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
  constructor(readonly input: DescribeApplicationProviderCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSOAdminClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeApplicationProviderCommandInput, DescribeApplicationProviderCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeApplicationProviderCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSOAdminClient";
    const commandName = "DescribeApplicationProviderCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SWBExternalService",
        operation: "DescribeApplicationProvider",
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
  private serialize(input: DescribeApplicationProviderCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeApplicationProviderCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeApplicationProviderCommandOutput> {
    return de_DescribeApplicationProviderCommand(output, context);
  }
}
