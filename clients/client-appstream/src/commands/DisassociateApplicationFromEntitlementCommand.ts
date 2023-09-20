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

import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import {
  DisassociateApplicationFromEntitlementRequest,
  DisassociateApplicationFromEntitlementResult,
} from "../models/models_0";
import {
  de_DisassociateApplicationFromEntitlementCommand,
  se_DisassociateApplicationFromEntitlementCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DisassociateApplicationFromEntitlementCommand}.
 */
export interface DisassociateApplicationFromEntitlementCommandInput
  extends DisassociateApplicationFromEntitlementRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateApplicationFromEntitlementCommand}.
 */
export interface DisassociateApplicationFromEntitlementCommandOutput
  extends DisassociateApplicationFromEntitlementResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Deletes the specified application from the specified entitlement.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, DisassociateApplicationFromEntitlementCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, DisassociateApplicationFromEntitlementCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const input = { // DisassociateApplicationFromEntitlementRequest
 *   StackName: "STRING_VALUE", // required
 *   EntitlementName: "STRING_VALUE", // required
 *   ApplicationIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DisassociateApplicationFromEntitlementCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateApplicationFromEntitlementCommandInput - {@link DisassociateApplicationFromEntitlementCommandInput}
 * @returns {@link DisassociateApplicationFromEntitlementCommandOutput}
 * @see {@link DisassociateApplicationFromEntitlementCommandInput} for command's `input` shape.
 * @see {@link DisassociateApplicationFromEntitlementCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link EntitlementNotFoundException} (client fault)
 *  <p>The entitlement can't be found.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>The attempted operation is not permitted.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link AppStreamServiceException}
 * <p>Base exception class for all service exceptions from AppStream service.</p>
 *
 */
export class DisassociateApplicationFromEntitlementCommand extends $Command<
  DisassociateApplicationFromEntitlementCommandInput,
  DisassociateApplicationFromEntitlementCommandOutput,
  AppStreamClientResolvedConfig
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
  constructor(readonly input: DisassociateApplicationFromEntitlementCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppStreamClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisassociateApplicationFromEntitlementCommandInput, DisassociateApplicationFromEntitlementCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisassociateApplicationFromEntitlementCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppStreamClient";
    const commandName = "DisassociateApplicationFromEntitlementCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "PhotonAdminProxyService",
        operation: "DisassociateApplicationFromEntitlement",
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
    input: DisassociateApplicationFromEntitlementCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DisassociateApplicationFromEntitlementCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateApplicationFromEntitlementCommandOutput> {
    return de_DisassociateApplicationFromEntitlementCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
