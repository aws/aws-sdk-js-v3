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

import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { AddClientIDToOpenIDConnectProviderRequest } from "../models/models_0";
import {
  de_AddClientIDToOpenIDConnectProviderCommand,
  se_AddClientIDToOpenIDConnectProviderCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AddClientIDToOpenIDConnectProviderCommand}.
 */
export interface AddClientIDToOpenIDConnectProviderCommandInput extends AddClientIDToOpenIDConnectProviderRequest {}
/**
 * @public
 *
 * The output of {@link AddClientIDToOpenIDConnectProviderCommand}.
 */
export interface AddClientIDToOpenIDConnectProviderCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Adds a new client ID (also known as audience) to the list of client IDs already
 *             registered for the specified IAM OpenID Connect (OIDC) provider resource.</p>
 *          <p>This operation is idempotent; it does not fail or return an error if you add an
 *             existing client ID to the provider.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, AddClientIDToOpenIDConnectProviderCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, AddClientIDToOpenIDConnectProviderCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // AddClientIDToOpenIDConnectProviderRequest
 *   OpenIDConnectProviderArn: "STRING_VALUE", // required
 *   ClientID: "STRING_VALUE", // required
 * };
 * const command = new AddClientIDToOpenIDConnectProviderCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AddClientIDToOpenIDConnectProviderCommandInput - {@link AddClientIDToOpenIDConnectProviderCommandInput}
 * @returns {@link AddClientIDToOpenIDConnectProviderCommandOutput}
 * @see {@link AddClientIDToOpenIDConnectProviderCommandInput} for command's `input` shape.
 * @see {@link AddClientIDToOpenIDConnectProviderCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *       input parameter.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current
 *       Amazon Web Services account limits. The error message describes the limit exceeded.</p>
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced a resource entity that does not exist. The
 *       error message describes the resource.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 * @example To add a client ID (audience) to an Open-ID Connect (OIDC) provider
 * ```javascript
 * // The following add-client-id-to-open-id-connect-provider command adds the client ID my-application-ID to the OIDC provider named server.example.com:
 * const input = {
 *   "ClientID": "my-application-ID",
 *   "OpenIDConnectProviderArn": "arn:aws:iam::123456789012:oidc-provider/server.example.com"
 * };
 * const command = new AddClientIDToOpenIDConnectProviderCommand(input);
 * await client.send(command);
 * // example id: 028e91f4-e2a6-4d59-9e3b-4965a3fb19be
 * ```
 *
 */
export class AddClientIDToOpenIDConnectProviderCommand extends $Command<
  AddClientIDToOpenIDConnectProviderCommandInput,
  AddClientIDToOpenIDConnectProviderCommandOutput,
  IAMClientResolvedConfig
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
  constructor(readonly input: AddClientIDToOpenIDConnectProviderCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AddClientIDToOpenIDConnectProviderCommandInput, AddClientIDToOpenIDConnectProviderCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AddClientIDToOpenIDConnectProviderCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "AddClientIDToOpenIDConnectProviderCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIdentityManagementV20100508",
        operation: "AddClientIDToOpenIDConnectProvider",
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
    input: AddClientIDToOpenIDConnectProviderCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_AddClientIDToOpenIDConnectProviderCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AddClientIDToOpenIDConnectProviderCommandOutput> {
    return de_AddClientIDToOpenIDConnectProviderCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
