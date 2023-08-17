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
} from "@smithy/types";

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { GetCapacityReservationInput, GetCapacityReservationOutput } from "../models/models_0";
import { de_GetCapacityReservationCommand, se_GetCapacityReservationCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetCapacityReservationCommand}.
 */
export interface GetCapacityReservationCommandInput extends GetCapacityReservationInput {}
/**
 * @public
 *
 * The output of {@link GetCapacityReservationCommand}.
 */
export interface GetCapacityReservationCommandOutput extends GetCapacityReservationOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about the capacity reservation with the specified name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, GetCapacityReservationCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, GetCapacityReservationCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const input = { // GetCapacityReservationInput
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new GetCapacityReservationCommand(input);
 * const response = await client.send(command);
 * // { // GetCapacityReservationOutput
 * //   CapacityReservation: { // CapacityReservation
 * //     Name: "STRING_VALUE", // required
 * //     Status: "PENDING" || "ACTIVE" || "CANCELLING" || "CANCELLED" || "FAILED" || "UPDATE_PENDING", // required
 * //     TargetDpus: Number("int"), // required
 * //     AllocatedDpus: Number("int"), // required
 * //     LastAllocation: { // CapacityAllocation
 * //       Status: "PENDING" || "SUCCEEDED" || "FAILED", // required
 * //       StatusMessage: "STRING_VALUE",
 * //       RequestTime: new Date("TIMESTAMP"), // required
 * //       RequestCompletionTime: new Date("TIMESTAMP"),
 * //     },
 * //     LastSuccessfulAllocationTime: new Date("TIMESTAMP"),
 * //     CreationTime: new Date("TIMESTAMP"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetCapacityReservationCommandInput - {@link GetCapacityReservationCommandInput}
 * @returns {@link GetCapacityReservationCommandOutput}
 * @see {@link GetCapacityReservationCommandInput} for command's `input` shape.
 * @see {@link GetCapacityReservationCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for AthenaClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Indicates a platform issue, which may be due to a transient condition or
 *             outage.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that something is wrong with the input to the request. For example, a
 *             required parameter may be missing or out of range.</p>
 *
 * @throws {@link AthenaServiceException}
 * <p>Base exception class for all service exceptions from Athena service.</p>
 *
 */
export class GetCapacityReservationCommand extends $Command<
  GetCapacityReservationCommandInput,
  GetCapacityReservationCommandOutput,
  AthenaClientResolvedConfig
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
  constructor(readonly input: GetCapacityReservationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AthenaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetCapacityReservationCommandInput, GetCapacityReservationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetCapacityReservationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AthenaClient";
    const commandName = "GetCapacityReservationCommand";
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
  private serialize(input: GetCapacityReservationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetCapacityReservationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetCapacityReservationCommandOutput> {
    return de_GetCapacityReservationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
