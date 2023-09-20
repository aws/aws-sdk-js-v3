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

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { ListCapacityReservationsInput, ListCapacityReservationsOutput } from "../models/models_0";
import { de_ListCapacityReservationsCommand, se_ListCapacityReservationsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListCapacityReservationsCommand}.
 */
export interface ListCapacityReservationsCommandInput extends ListCapacityReservationsInput {}
/**
 * @public
 *
 * The output of {@link ListCapacityReservationsCommand}.
 */
export interface ListCapacityReservationsCommandOutput extends ListCapacityReservationsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Lists the capacity reservations for the current account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, ListCapacityReservationsCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, ListCapacityReservationsCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const input = { // ListCapacityReservationsInput
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListCapacityReservationsCommand(input);
 * const response = await client.send(command);
 * // { // ListCapacityReservationsOutput
 * //   NextToken: "STRING_VALUE",
 * //   CapacityReservations: [ // CapacityReservationsList // required
 * //     { // CapacityReservation
 * //       Name: "STRING_VALUE", // required
 * //       Status: "PENDING" || "ACTIVE" || "CANCELLING" || "CANCELLED" || "FAILED" || "UPDATE_PENDING", // required
 * //       TargetDpus: Number("int"), // required
 * //       AllocatedDpus: Number("int"), // required
 * //       LastAllocation: { // CapacityAllocation
 * //         Status: "PENDING" || "SUCCEEDED" || "FAILED", // required
 * //         StatusMessage: "STRING_VALUE",
 * //         RequestTime: new Date("TIMESTAMP"), // required
 * //         RequestCompletionTime: new Date("TIMESTAMP"),
 * //       },
 * //       LastSuccessfulAllocationTime: new Date("TIMESTAMP"),
 * //       CreationTime: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListCapacityReservationsCommandInput - {@link ListCapacityReservationsCommandInput}
 * @returns {@link ListCapacityReservationsCommandOutput}
 * @see {@link ListCapacityReservationsCommandInput} for command's `input` shape.
 * @see {@link ListCapacityReservationsCommandOutput} for command's `response` shape.
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
export class ListCapacityReservationsCommand extends $Command<
  ListCapacityReservationsCommandInput,
  ListCapacityReservationsCommandOutput,
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
  constructor(readonly input: ListCapacityReservationsCommandInput) {
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
  ): Handler<ListCapacityReservationsCommandInput, ListCapacityReservationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListCapacityReservationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AthenaClient";
    const commandName = "ListCapacityReservationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonAthena",
        operation: "ListCapacityReservations",
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
  private serialize(input: ListCapacityReservationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListCapacityReservationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListCapacityReservationsCommandOutput> {
    return de_ListCapacityReservationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
