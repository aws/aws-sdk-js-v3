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
import { CancelZonalShiftRequest, ZonalShift } from "../models/models_0";
import { de_CancelZonalShiftCommand, se_CancelZonalShiftCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CancelZonalShiftCommand}.
 */
export interface CancelZonalShiftCommandInput extends CancelZonalShiftRequest {}
/**
 * @public
 *
 * The output of {@link CancelZonalShiftCommand}.
 */
export interface CancelZonalShiftCommandOutput extends ZonalShift, __MetadataBearer {}

/**
 * @public
 * <p>Cancel a zonal shift in Amazon Route 53 Application Recovery Controller that you've started for a resource in your AWS account in an AWS Region. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ARCZonalShiftClient, CancelZonalShiftCommand } from "@aws-sdk/client-arc-zonal-shift"; // ES Modules import
 * // const { ARCZonalShiftClient, CancelZonalShiftCommand } = require("@aws-sdk/client-arc-zonal-shift"); // CommonJS import
 * const client = new ARCZonalShiftClient(config);
 * const input = { // CancelZonalShiftRequest
 *   zonalShiftId: "STRING_VALUE", // required
 * };
 * const command = new CancelZonalShiftCommand(input);
 * const response = await client.send(command);
 * // { // ZonalShift
 * //   zonalShiftId: "STRING_VALUE", // required
 * //   resourceIdentifier: "STRING_VALUE", // required
 * //   awayFrom: "STRING_VALUE", // required
 * //   expiryTime: new Date("TIMESTAMP"), // required
 * //   startTime: new Date("TIMESTAMP"), // required
 * //   status: "ACTIVE" || "EXPIRED" || "CANCELED", // required
 * //   comment: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CancelZonalShiftCommandInput - {@link CancelZonalShiftCommandInput}
 * @returns {@link CancelZonalShiftCommandOutput}
 * @see {@link CancelZonalShiftCommandInput} for command's `input` shape.
 * @see {@link CancelZonalShiftCommandOutput} for command's `response` shape.
 * @see {@link ARCZonalShiftClientResolvedConfig | config} for ARCZonalShiftClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be processed because of conflict in the current state of the resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There was an internal server error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The input requested a resource that was not found.</p>
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
export class CancelZonalShiftCommand extends $Command<
  CancelZonalShiftCommandInput,
  CancelZonalShiftCommandOutput,
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
  constructor(readonly input: CancelZonalShiftCommandInput) {
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
  ): Handler<CancelZonalShiftCommandInput, CancelZonalShiftCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CancelZonalShiftCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ARCZonalShiftClient";
    const commandName = "CancelZonalShiftCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "PercDataPlane",
        operation: "CancelZonalShift",
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
  private serialize(input: CancelZonalShiftCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CancelZonalShiftCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CancelZonalShiftCommandOutput> {
    return de_CancelZonalShiftCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
