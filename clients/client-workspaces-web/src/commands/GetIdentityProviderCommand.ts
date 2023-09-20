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
  GetIdentityProviderRequest,
  GetIdentityProviderResponse,
  GetIdentityProviderResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GetIdentityProviderCommand, se_GetIdentityProviderCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesWebClientResolvedConfig } from "../WorkSpacesWebClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetIdentityProviderCommand}.
 */
export interface GetIdentityProviderCommandInput extends GetIdentityProviderRequest {}
/**
 * @public
 *
 * The output of {@link GetIdentityProviderCommand}.
 */
export interface GetIdentityProviderCommandOutput extends GetIdentityProviderResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets the identity provider.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, GetIdentityProviderCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, GetIdentityProviderCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * const client = new WorkSpacesWebClient(config);
 * const input = { // GetIdentityProviderRequest
 *   identityProviderArn: "STRING_VALUE", // required
 * };
 * const command = new GetIdentityProviderCommand(input);
 * const response = await client.send(command);
 * // { // GetIdentityProviderResponse
 * //   identityProvider: { // IdentityProvider
 * //     identityProviderArn: "STRING_VALUE", // required
 * //     identityProviderName: "STRING_VALUE",
 * //     identityProviderType: "STRING_VALUE",
 * //     identityProviderDetails: { // IdentityProviderDetails
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetIdentityProviderCommandInput - {@link GetIdentityProviderCommandInput}
 * @returns {@link GetIdentityProviderCommandOutput}
 * @see {@link GetIdentityProviderCommandInput} for command's `input` shape.
 * @see {@link GetIdentityProviderCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesWebClientResolvedConfig | config} for WorkSpacesWebClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is an internal server error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource cannot be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>There is a throttling error.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>There is a validation error.</p>
 *
 * @throws {@link WorkSpacesWebServiceException}
 * <p>Base exception class for all service exceptions from WorkSpacesWeb service.</p>
 *
 */
export class GetIdentityProviderCommand extends $Command<
  GetIdentityProviderCommandInput,
  GetIdentityProviderCommandOutput,
  WorkSpacesWebClientResolvedConfig
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
  constructor(readonly input: GetIdentityProviderCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkSpacesWebClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetIdentityProviderCommandInput, GetIdentityProviderCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetIdentityProviderCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesWebClient";
    const commandName = "GetIdentityProviderCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetIdentityProviderResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSErmineControlPlaneService",
        operation: "GetIdentityProvider",
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
  private serialize(input: GetIdentityProviderCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetIdentityProviderCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetIdentityProviderCommandOutput> {
    return de_GetIdentityProviderCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
