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
import { ListAutoshiftsRequest, ListAutoshiftsResponse } from "../models/models_0";
import { de_ListAutoshiftsCommand, se_ListAutoshiftsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListAutoshiftsCommand}.
 */
export interface ListAutoshiftsCommandInput extends ListAutoshiftsRequest {}
/**
 * @public
 *
 * The output of {@link ListAutoshiftsCommand}.
 */
export interface ListAutoshiftsCommandOutput extends ListAutoshiftsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns the active autoshifts for a specified resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ARCZonalShiftClient, ListAutoshiftsCommand } from "@aws-sdk/client-arc-zonal-shift"; // ES Modules import
 * // const { ARCZonalShiftClient, ListAutoshiftsCommand } = require("@aws-sdk/client-arc-zonal-shift"); // CommonJS import
 * const client = new ARCZonalShiftClient(config);
 * const input = { // ListAutoshiftsRequest
 *   nextToken: "STRING_VALUE",
 *   status: "ACTIVE" || "COMPLETED",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAutoshiftsCommand(input);
 * const response = await client.send(command);
 * // { // ListAutoshiftsResponse
 * //   items: [ // AutoshiftSummaries
 * //     { // AutoshiftSummary
 * //       awayFrom: "STRING_VALUE", // required
 * //       endTime: new Date("TIMESTAMP"), // required
 * //       startTime: new Date("TIMESTAMP"), // required
 * //       status: "ACTIVE" || "COMPLETED", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAutoshiftsCommandInput - {@link ListAutoshiftsCommandInput}
 * @returns {@link ListAutoshiftsCommandOutput}
 * @see {@link ListAutoshiftsCommandInput} for command's `input` shape.
 * @see {@link ListAutoshiftsCommandOutput} for command's `response` shape.
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
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link ARCZonalShiftServiceException}
 * <p>Base exception class for all service exceptions from ARCZonalShift service.</p>
 *
 */
export class ListAutoshiftsCommand extends $Command<
  ListAutoshiftsCommandInput,
  ListAutoshiftsCommandOutput,
  ARCZonalShiftClientResolvedConfig
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
  constructor(readonly input: ListAutoshiftsCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ARCZonalShiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAutoshiftsCommandInput, ListAutoshiftsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAutoshiftsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ARCZonalShiftClient";
    const commandName = "ListAutoshiftsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "PercDataPlane",
        operation: "ListAutoshifts",
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
  private serialize(input: ListAutoshiftsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListAutoshiftsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAutoshiftsCommandOutput> {
    return de_ListAutoshiftsCommand(output, context);
  }
}
