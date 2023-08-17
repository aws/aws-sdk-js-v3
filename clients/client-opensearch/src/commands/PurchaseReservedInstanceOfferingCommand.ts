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

import { PurchaseReservedInstanceOfferingRequest, PurchaseReservedInstanceOfferingResponse } from "../models/models_0";
import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import {
  de_PurchaseReservedInstanceOfferingCommand,
  se_PurchaseReservedInstanceOfferingCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PurchaseReservedInstanceOfferingCommand}.
 */
export interface PurchaseReservedInstanceOfferingCommandInput extends PurchaseReservedInstanceOfferingRequest {}
/**
 * @public
 *
 * The output of {@link PurchaseReservedInstanceOfferingCommand}.
 */
export interface PurchaseReservedInstanceOfferingCommandOutput
  extends PurchaseReservedInstanceOfferingResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Allows you to purchase Amazon OpenSearch Service Reserved Instances.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, PurchaseReservedInstanceOfferingCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, PurchaseReservedInstanceOfferingCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * const client = new OpenSearchClient(config);
 * const input = { // PurchaseReservedInstanceOfferingRequest
 *   ReservedInstanceOfferingId: "STRING_VALUE", // required
 *   ReservationName: "STRING_VALUE", // required
 *   InstanceCount: Number("int"),
 * };
 * const command = new PurchaseReservedInstanceOfferingCommand(input);
 * const response = await client.send(command);
 * // { // PurchaseReservedInstanceOfferingResponse
 * //   ReservedInstanceId: "STRING_VALUE",
 * //   ReservationName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PurchaseReservedInstanceOfferingCommandInput - {@link PurchaseReservedInstanceOfferingCommandInput}
 * @returns {@link PurchaseReservedInstanceOfferingCommandOutput}
 * @see {@link PurchaseReservedInstanceOfferingCommandInput} for command's `input` shape.
 * @see {@link PurchaseReservedInstanceOfferingCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for OpenSearchClient's `config` shape.
 *
 * @throws {@link DisabledOperationException} (client fault)
 *  <p>An error occured because the client wanted to access an unsupported operation.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Request processing failed because of an unknown error, exception, or internal failure.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>An exception for trying to create more than the allowed number of resources or sub-resources.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>An exception for creating a resource that already exists.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 *
 * @throws {@link OpenSearchServiceException}
 * <p>Base exception class for all service exceptions from OpenSearch service.</p>
 *
 */
export class PurchaseReservedInstanceOfferingCommand extends $Command<
  PurchaseReservedInstanceOfferingCommandInput,
  PurchaseReservedInstanceOfferingCommandOutput,
  OpenSearchClientResolvedConfig
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
  constructor(readonly input: PurchaseReservedInstanceOfferingCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OpenSearchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PurchaseReservedInstanceOfferingCommandInput, PurchaseReservedInstanceOfferingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PurchaseReservedInstanceOfferingCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpenSearchClient";
    const commandName = "PurchaseReservedInstanceOfferingCommand";
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
    input: PurchaseReservedInstanceOfferingCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_PurchaseReservedInstanceOfferingCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PurchaseReservedInstanceOfferingCommandOutput> {
    return de_PurchaseReservedInstanceOfferingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
