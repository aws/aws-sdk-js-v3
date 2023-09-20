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

import { AccountClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccountClient";
import { DisableRegionRequest } from "../models/models_0";
import { de_DisableRegionCommand, se_DisableRegionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DisableRegionCommand}.
 */
export interface DisableRegionCommandInput extends DisableRegionRequest {}
/**
 * @public
 *
 * The output of {@link DisableRegionCommand}.
 */
export interface DisableRegionCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Disables (opts-out) a particular Region for an account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccountClient, DisableRegionCommand } from "@aws-sdk/client-account"; // ES Modules import
 * // const { AccountClient, DisableRegionCommand } = require("@aws-sdk/client-account"); // CommonJS import
 * const client = new AccountClient(config);
 * const input = { // DisableRegionRequest
 *   AccountId: "STRING_VALUE",
 *   RegionName: "STRING_VALUE", // required
 * };
 * const command = new DisableRegionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisableRegionCommandInput - {@link DisableRegionCommandInput}
 * @returns {@link DisableRegionCommandOutput}
 * @see {@link DisableRegionCommandInput} for command's `input` shape.
 * @see {@link DisableRegionCommandOutput} for command's `response` shape.
 * @see {@link AccountClientResolvedConfig | config} for AccountClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The operation failed because the calling identity doesn't have the minimum required
 *             permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be processed because of a conflict in the current status of the
 *             resource. For example, this happens if you try to enable a Region that is currently being disabled
 *             (in a status of DISABLING).</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The operation failed because of an error internal to Amazon Web Services. Try your operation again
 *             later.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The operation failed because it was called too frequently and exceeded a throttle
 *             limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The operation failed because one of the input parameters was invalid.</p>
 *
 * @throws {@link AccountServiceException}
 * <p>Base exception class for all service exceptions from Account service.</p>
 *
 */
export class DisableRegionCommand extends $Command<
  DisableRegionCommandInput,
  DisableRegionCommandOutput,
  AccountClientResolvedConfig
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
  constructor(readonly input: DisableRegionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AccountClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisableRegionCommandInput, DisableRegionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DisableRegionCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AccountClient";
    const commandName = "DisableRegionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Account",
        operation: "DisableRegion",
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
  private serialize(input: DisableRegionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DisableRegionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisableRegionCommandOutput> {
    return de_DisableRegionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
