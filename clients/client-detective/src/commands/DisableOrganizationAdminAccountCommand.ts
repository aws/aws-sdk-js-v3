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

import { DetectiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DetectiveClient";
import {
  de_DisableOrganizationAdminAccountCommand,
  se_DisableOrganizationAdminAccountCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DisableOrganizationAdminAccountCommand}.
 */
export interface DisableOrganizationAdminAccountCommandInput {}
/**
 * @public
 *
 * The output of {@link DisableOrganizationAdminAccountCommand}.
 */
export interface DisableOrganizationAdminAccountCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Removes the Detective administrator account in the current Region. Deletes the
 *          organization behavior graph.</p>
 *          <p>Can only be called by the organization management account.</p>
 *          <p>Removing the Detective administrator account does not affect the delegated
 *          administrator account for Detective in Organizations.</p>
 *          <p>To remove the delegated administrator account in Organizations, use the Organizations API. Removing the delegated administrator account also removes the Detective administrator account in all Regions, except for Regions where the Detective administrator account is the organization management account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DetectiveClient, DisableOrganizationAdminAccountCommand } from "@aws-sdk/client-detective"; // ES Modules import
 * // const { DetectiveClient, DisableOrganizationAdminAccountCommand } = require("@aws-sdk/client-detective"); // CommonJS import
 * const client = new DetectiveClient(config);
 * const input = {};
 * const command = new DisableOrganizationAdminAccountCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisableOrganizationAdminAccountCommandInput - {@link DisableOrganizationAdminAccountCommandInput}
 * @returns {@link DisableOrganizationAdminAccountCommandOutput}
 * @see {@link DisableOrganizationAdminAccountCommandInput} for command's `input` shape.
 * @see {@link DisableOrganizationAdminAccountCommandOutput} for command's `response` shape.
 * @see {@link DetectiveClientResolvedConfig | config} for DetectiveClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request issuer does not have permission to access this resource or perform this
 *          operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request was valid but failed because of a problem with the service.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request cannot be completed because too many other requests are occurring at the
 *          same time.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request parameters are invalid.</p>
 *
 * @throws {@link DetectiveServiceException}
 * <p>Base exception class for all service exceptions from Detective service.</p>
 *
 */
export class DisableOrganizationAdminAccountCommand extends $Command<
  DisableOrganizationAdminAccountCommandInput,
  DisableOrganizationAdminAccountCommandOutput,
  DetectiveClientResolvedConfig
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
  constructor(readonly input: DisableOrganizationAdminAccountCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DetectiveClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisableOrganizationAdminAccountCommandInput, DisableOrganizationAdminAccountCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisableOrganizationAdminAccountCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DetectiveClient";
    const commandName = "DisableOrganizationAdminAccountCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonDetective",
        operation: "DisableOrganizationAdminAccount",
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
    input: DisableOrganizationAdminAccountCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DisableOrganizationAdminAccountCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisableOrganizationAdminAccountCommandOutput> {
    return de_DisableOrganizationAdminAccountCommand(output, context);
  }
}
