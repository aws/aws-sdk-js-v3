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

import { ARCZonalShiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ARCZonalShiftClient";
import { ListZonalShiftsRequest, ListZonalShiftsResponse } from "../models/models_0";
import { de_ListZonalShiftsCommand, se_ListZonalShiftsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListZonalShiftsCommand}.
 */
export interface ListZonalShiftsCommandInput extends ListZonalShiftsRequest {}
/**
 * @public
 *
 * The output of {@link ListZonalShiftsCommand}.
 */
export interface ListZonalShiftsCommandOutput extends ListZonalShiftsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists all the active zonal shifts in Amazon Route 53 Application Recovery Controller in your AWS account in this AWS Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ARCZonalShiftClient, ListZonalShiftsCommand } from "@aws-sdk/client-arc-zonal-shift"; // ES Modules import
 * // const { ARCZonalShiftClient, ListZonalShiftsCommand } = require("@aws-sdk/client-arc-zonal-shift"); // CommonJS import
 * const client = new ARCZonalShiftClient(config);
 * const input = { // ListZonalShiftsRequest
 *   nextToken: "STRING_VALUE",
 *   status: "ACTIVE" || "EXPIRED" || "CANCELED",
 *   maxResults: Number("int"),
 * };
 * const command = new ListZonalShiftsCommand(input);
 * const response = await client.send(command);
 * // { // ListZonalShiftsResponse
 * //   items: [ // ZonalShiftSummaries
 * //     { // ZonalShiftSummary
 * //       zonalShiftId: "STRING_VALUE", // required
 * //       resourceIdentifier: "STRING_VALUE", // required
 * //       awayFrom: "STRING_VALUE", // required
 * //       expiryTime: new Date("TIMESTAMP"), // required
 * //       startTime: new Date("TIMESTAMP"), // required
 * //       status: "ACTIVE" || "EXPIRED" || "CANCELED", // required
 * //       comment: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListZonalShiftsCommandInput - {@link ListZonalShiftsCommandInput}
 * @returns {@link ListZonalShiftsCommandOutput}
 * @see {@link ListZonalShiftsCommandInput} for command's `input` shape.
 * @see {@link ListZonalShiftsCommandOutput} for command's `response` shape.
 * @see {@link ARCZonalShiftClientResolvedConfig | config} for ARCZonalShiftClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There was an internal server error.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link ARCZonalShiftServiceException}
 * <p>Base exception class for all service exceptions from ARCZonalShift service.</p>
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "PercDataPlane",
        operation: "ListZonalShifts",
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
  private serialize(input: ListZonalShiftsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListZonalShiftsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListZonalShiftsCommandOutput> {
    return de_ListZonalShiftsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
