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

import {
  PurchaseReservedDBInstancesOfferingMessage,
  PurchaseReservedDBInstancesOfferingResult,
} from "../models/models_1";
import {
  deserializeAws_queryPurchaseReservedDBInstancesOfferingCommand,
  serializeAws_queryPurchaseReservedDBInstancesOfferingCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 *
 * The input for {@link PurchaseReservedDBInstancesOfferingCommand}.
 */
export interface PurchaseReservedDBInstancesOfferingCommandInput extends PurchaseReservedDBInstancesOfferingMessage {}
/**
 * @public
 *
 * The output of {@link PurchaseReservedDBInstancesOfferingCommand}.
 */
export interface PurchaseReservedDBInstancesOfferingCommandOutput
  extends PurchaseReservedDBInstancesOfferingResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Purchases a reserved DB instance offering.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, PurchaseReservedDBInstancesOfferingCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, PurchaseReservedDBInstancesOfferingCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = {
 *   ReservedDBInstancesOfferingId: "STRING_VALUE", // required
 *   ReservedDBInstanceId: "STRING_VALUE",
 *   DBInstanceCount: Number("int"),
 *   Tags: [
 *     {
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new PurchaseReservedDBInstancesOfferingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param PurchaseReservedDBInstancesOfferingCommandInput - {@link PurchaseReservedDBInstancesOfferingCommandInput}
 * @returns {@link PurchaseReservedDBInstancesOfferingCommandOutput}
 * @see {@link PurchaseReservedDBInstancesOfferingCommandInput} for command's `input` shape.
 * @see {@link PurchaseReservedDBInstancesOfferingCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link ReservedDBInstanceAlreadyExistsFault} (client fault)
 *  <p>User already has a reservation with the given identifier.</p>
 *
 * @throws {@link ReservedDBInstanceQuotaExceededFault} (client fault)
 *  <p>Request would exceed the user's DB Instance quota.</p>
 *
 * @throws {@link ReservedDBInstancesOfferingNotFoundFault} (client fault)
 *  <p>Specified offering does not exist.</p>
 *
 *
 * @example To purchase a reserved DB instance offering
 * ```javascript
 * // This example purchases a reserved DB instance offering that matches the specified settings.
 * const input = {
 *   "ReservedDBInstanceId": "myreservationid",
 *   "ReservedDBInstancesOfferingId": "fb29428a-646d-4390-850e-5fe89926e727"
 * };
 * const command = new PurchaseReservedDBInstancesOfferingCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ReservedDBInstance": {}
 * }
 * *\/
 * // example id: purchase-reserved-db-instances-offfering-f423c736-8413-429b-ba13-850fd4fa4dcd
 * ```
 *
 */
export class PurchaseReservedDBInstancesOfferingCommand extends $Command<
  PurchaseReservedDBInstancesOfferingCommandInput,
  PurchaseReservedDBInstancesOfferingCommandOutput,
  RDSClientResolvedConfig
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
  constructor(readonly input: PurchaseReservedDBInstancesOfferingCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PurchaseReservedDBInstancesOfferingCommandInput, PurchaseReservedDBInstancesOfferingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PurchaseReservedDBInstancesOfferingCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "PurchaseReservedDBInstancesOfferingCommand";
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
  private serialize(
    input: PurchaseReservedDBInstancesOfferingCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryPurchaseReservedDBInstancesOfferingCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PurchaseReservedDBInstancesOfferingCommandOutput> {
    return deserializeAws_queryPurchaseReservedDBInstancesOfferingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
