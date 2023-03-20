// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { ApplyPendingMaintenanceActionMessage, ApplyPendingMaintenanceActionResult } from "../models/models_0";
import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import {
  deserializeAws_queryApplyPendingMaintenanceActionCommand,
  serializeAws_queryApplyPendingMaintenanceActionCommand,
} from "../protocols/Aws_query";

/**
 * @public
 *
 * The input for {@link ApplyPendingMaintenanceActionCommand}.
 */
export interface ApplyPendingMaintenanceActionCommandInput extends ApplyPendingMaintenanceActionMessage {}
/**
 * @public
 *
 * The output of {@link ApplyPendingMaintenanceActionCommand}.
 */
export interface ApplyPendingMaintenanceActionCommandOutput
  extends ApplyPendingMaintenanceActionResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Applies a pending maintenance action to a resource (for example, to a DB instance).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, ApplyPendingMaintenanceActionCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, ApplyPendingMaintenanceActionCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const command = new ApplyPendingMaintenanceActionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ApplyPendingMaintenanceActionCommandInput - {@link ApplyPendingMaintenanceActionCommandInput}
 * @returns {@link ApplyPendingMaintenanceActionCommandOutput}
 * @see {@link ApplyPendingMaintenanceActionCommandInput} for command's `input` shape.
 * @see {@link ApplyPendingMaintenanceActionCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for NeptuneClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The specified resource ID was not found.</p>
 *
 *
 */
export class ApplyPendingMaintenanceActionCommand extends $Command<
  ApplyPendingMaintenanceActionCommandInput,
  ApplyPendingMaintenanceActionCommandOutput,
  NeptuneClientResolvedConfig
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
  constructor(readonly input: ApplyPendingMaintenanceActionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NeptuneClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ApplyPendingMaintenanceActionCommandInput, ApplyPendingMaintenanceActionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ApplyPendingMaintenanceActionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NeptuneClient";
    const commandName = "ApplyPendingMaintenanceActionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: ApplyPendingMaintenanceActionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryApplyPendingMaintenanceActionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ApplyPendingMaintenanceActionCommandOutput> {
    return deserializeAws_queryApplyPendingMaintenanceActionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
