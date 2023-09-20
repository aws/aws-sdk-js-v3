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
  DisassociateWebsiteAuthorizationProviderRequest,
  DisassociateWebsiteAuthorizationProviderResponse,
} from "../models/models_0";
import {
  de_DisassociateWebsiteAuthorizationProviderCommand,
  se_DisassociateWebsiteAuthorizationProviderCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkLinkClientResolvedConfig } from "../WorkLinkClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DisassociateWebsiteAuthorizationProviderCommand}.
 */
export interface DisassociateWebsiteAuthorizationProviderCommandInput
  extends DisassociateWebsiteAuthorizationProviderRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateWebsiteAuthorizationProviderCommand}.
 */
export interface DisassociateWebsiteAuthorizationProviderCommandOutput
  extends DisassociateWebsiteAuthorizationProviderResponse,
    __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Disassociates a website authorization provider from a specified fleet. After the
 *             disassociation, users can't load any associated websites that require this authorization
 *             provider.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkLinkClient, DisassociateWebsiteAuthorizationProviderCommand } from "@aws-sdk/client-worklink"; // ES Modules import
 * // const { WorkLinkClient, DisassociateWebsiteAuthorizationProviderCommand } = require("@aws-sdk/client-worklink"); // CommonJS import
 * const client = new WorkLinkClient(config);
 * const input = { // DisassociateWebsiteAuthorizationProviderRequest
 *   FleetArn: "STRING_VALUE", // required
 *   AuthorizationProviderId: "STRING_VALUE", // required
 * };
 * const command = new DisassociateWebsiteAuthorizationProviderCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateWebsiteAuthorizationProviderCommandInput - {@link DisassociateWebsiteAuthorizationProviderCommandInput}
 * @returns {@link DisassociateWebsiteAuthorizationProviderCommandOutput}
 * @see {@link DisassociateWebsiteAuthorizationProviderCommandInput} for command's `input` shape.
 * @see {@link DisassociateWebsiteAuthorizationProviderCommandOutput} for command's `response` shape.
 * @see {@link WorkLinkClientResolvedConfig | config} for WorkLinkClient's `config` shape.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The resource already exists.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource was not found.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The number of requests exceeds the limit.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You are not authorized to perform this action.</p>
 *
 * @throws {@link WorkLinkServiceException}
 * <p>Base exception class for all service exceptions from WorkLink service.</p>
 *
 */
export class DisassociateWebsiteAuthorizationProviderCommand extends $Command<
  DisassociateWebsiteAuthorizationProviderCommandInput,
  DisassociateWebsiteAuthorizationProviderCommandOutput,
  WorkLinkClientResolvedConfig
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
  constructor(readonly input: DisassociateWebsiteAuthorizationProviderCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkLinkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DisassociateWebsiteAuthorizationProviderCommandInput,
    DisassociateWebsiteAuthorizationProviderCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DisassociateWebsiteAuthorizationProviderCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkLinkClient";
    const commandName = "DisassociateWebsiteAuthorizationProviderCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "WorkLink",
        operation: "DisassociateWebsiteAuthorizationProvider",
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
    input: DisassociateWebsiteAuthorizationProviderCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DisassociateWebsiteAuthorizationProviderCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateWebsiteAuthorizationProviderCommandOutput> {
    return de_DisassociateWebsiteAuthorizationProviderCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
