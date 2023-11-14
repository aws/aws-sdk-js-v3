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

import { RevokeDomainAccessRequest, RevokeDomainAccessResponse } from "../models/models_0";
import { de_RevokeDomainAccessCommand, se_RevokeDomainAccessCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkLinkClientResolvedConfig } from "../WorkLinkClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RevokeDomainAccessCommand}.
 */
export interface RevokeDomainAccessCommandInput extends RevokeDomainAccessRequest {}
/**
 * @public
 *
 * The output of {@link RevokeDomainAccessCommand}.
 */
export interface RevokeDomainAccessCommandOutput extends RevokeDomainAccessResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Moves a domain to INACTIVE status if it was in the ACTIVE status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkLinkClient, RevokeDomainAccessCommand } from "@aws-sdk/client-worklink"; // ES Modules import
 * // const { WorkLinkClient, RevokeDomainAccessCommand } = require("@aws-sdk/client-worklink"); // CommonJS import
 * const client = new WorkLinkClient(config);
 * const input = { // RevokeDomainAccessRequest
 *   FleetArn: "STRING_VALUE", // required
 *   DomainName: "STRING_VALUE", // required
 * };
 * const command = new RevokeDomainAccessCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RevokeDomainAccessCommandInput - {@link RevokeDomainAccessCommandInput}
 * @returns {@link RevokeDomainAccessCommandOutput}
 * @see {@link RevokeDomainAccessCommandInput} for command's `input` shape.
 * @see {@link RevokeDomainAccessCommandOutput} for command's `response` shape.
 * @see {@link WorkLinkClientResolvedConfig | config} for WorkLinkClient's `config` shape.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
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
export class RevokeDomainAccessCommand extends $Command<
  RevokeDomainAccessCommandInput,
  RevokeDomainAccessCommandOutput,
  WorkLinkClientResolvedConfig
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
  constructor(readonly input: RevokeDomainAccessCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkLinkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RevokeDomainAccessCommandInput, RevokeDomainAccessCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RevokeDomainAccessCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkLinkClient";
    const commandName = "RevokeDomainAccessCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "WorkLink",
        operation: "RevokeDomainAccess",
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
  private serialize(input: RevokeDomainAccessCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_RevokeDomainAccessCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RevokeDomainAccessCommandOutput> {
    return de_RevokeDomainAccessCommand(output, context);
  }
}
