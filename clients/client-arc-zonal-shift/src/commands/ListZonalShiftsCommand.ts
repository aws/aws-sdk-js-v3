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

import { ARCZonalShiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ARCZonalShiftClient";
import {
  ListZonalShiftsRequest,
  ListZonalShiftsRequestFilterSensitiveLog,
  ListZonalShiftsResponse,
  ListZonalShiftsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListZonalShiftsCommand,
  serializeAws_restJson1ListZonalShiftsCommand,
} from "../protocols/Aws_restJson1";

export interface ListZonalShiftsCommandInput extends ListZonalShiftsRequest {}
export interface ListZonalShiftsCommandOutput extends ListZonalShiftsResponse, __MetadataBearer {}

/**
 * <p>Lists all the active zonal shifts in Amazon Route 53 Application Recovery Controller in your AWS account in this AWS Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ARCZonalShiftClient, ListZonalShiftsCommand } from "@aws-sdk/client-arc-zonal-shift"; // ES Modules import
 * // const { ARCZonalShiftClient, ListZonalShiftsCommand } = require("@aws-sdk/client-arc-zonal-shift"); // CommonJS import
 * const client = new ARCZonalShiftClient(config);
 * const command = new ListZonalShiftsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListZonalShiftsCommandInput} for command's `input` shape.
 * @see {@link ListZonalShiftsCommandOutput} for command's `response` shape.
 * @see {@link ARCZonalShiftClientResolvedConfig | config} for ARCZonalShiftClient's `config` shape.
 *
 */
export class ListZonalShiftsCommand extends $Command<
  ListZonalShiftsCommandInput,
  ListZonalShiftsCommandOutput,
  ARCZonalShiftClientResolvedConfig
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

  constructor(readonly input: ListZonalShiftsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ARCZonalShiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListZonalShiftsCommandInput, ListZonalShiftsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListZonalShiftsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ARCZonalShiftClient";
    const commandName = "ListZonalShiftsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListZonalShiftsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListZonalShiftsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListZonalShiftsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListZonalShiftsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListZonalShiftsCommandOutput> {
    return deserializeAws_restJson1ListZonalShiftsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
