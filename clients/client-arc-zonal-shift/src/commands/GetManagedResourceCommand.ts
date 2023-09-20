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
import { GetManagedResourceRequest, GetManagedResourceResponse } from "../models/models_0";
import { de_GetManagedResourceCommand, se_GetManagedResourceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetManagedResourceCommand}.
 */
export interface GetManagedResourceCommandInput extends GetManagedResourceRequest {}
/**
 * @public
 *
 * The output of {@link GetManagedResourceCommand}.
 */
export interface GetManagedResourceCommandOutput extends GetManagedResourceResponse, __MetadataBearer {}

/**
 * @public
 * <p>Get information about a resource that's been registered for zonal shifts with Amazon Route 53 Application Recovery Controller in this AWS Region. Resources that are registered for
 *    		zonal shifts are managed resources in Route 53 ARC.</p>
 *    	     <p>At this time, you can only start a zonal shift for Network Load Balancers and Application Load Balancers with cross-zone load balancing turned off.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ARCZonalShiftClient, GetManagedResourceCommand } from "@aws-sdk/client-arc-zonal-shift"; // ES Modules import
 * // const { ARCZonalShiftClient, GetManagedResourceCommand } = require("@aws-sdk/client-arc-zonal-shift"); // CommonJS import
 * const client = new ARCZonalShiftClient(config);
 * const input = { // GetManagedResourceRequest
 *   resourceIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetManagedResourceCommand(input);
 * const response = await client.send(command);
 * // { // GetManagedResourceResponse
 * //   arn: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   appliedWeights: { // AppliedWeights // required
 * //     "<keys>": Number("float"),
 * //   },
 * //   zonalShifts: [ // ZonalShiftsInResource // required
 * //     { // ZonalShiftInResource
 * //       appliedStatus: "APPLIED" || "NOT_APPLIED", // required
 * //       zonalShiftId: "STRING_VALUE", // required
 * //       resourceIdentifier: "STRING_VALUE", // required
 * //       awayFrom: "STRING_VALUE", // required
 * //       expiryTime: new Date("TIMESTAMP"), // required
 * //       startTime: new Date("TIMESTAMP"), // required
 * //       comment: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetManagedResourceCommandInput - {@link GetManagedResourceCommandInput}
 * @returns {@link GetManagedResourceCommandOutput}
 * @see {@link GetManagedResourceCommandInput} for command's `input` shape.
 * @see {@link GetManagedResourceCommandOutput} for command's `response` shape.
 * @see {@link ARCZonalShiftClientResolvedConfig | config} for ARCZonalShiftClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
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
export class GetManagedResourceCommand extends $Command<
  GetManagedResourceCommandInput,
  GetManagedResourceCommandOutput,
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
  constructor(readonly input: GetManagedResourceCommandInput) {
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
  ): Handler<GetManagedResourceCommandInput, GetManagedResourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetManagedResourceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ARCZonalShiftClient";
    const commandName = "GetManagedResourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "PercDataPlane",
        operation: "GetManagedResource",
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
  private serialize(input: GetManagedResourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetManagedResourceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetManagedResourceCommandOutput> {
    return de_GetManagedResourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
