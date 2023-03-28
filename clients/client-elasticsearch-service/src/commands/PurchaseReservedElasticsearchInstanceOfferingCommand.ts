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
  ElasticsearchServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticsearchServiceClient";
import {
  PurchaseReservedElasticsearchInstanceOfferingRequest,
  PurchaseReservedElasticsearchInstanceOfferingResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1PurchaseReservedElasticsearchInstanceOfferingCommand,
  serializeAws_restJson1PurchaseReservedElasticsearchInstanceOfferingCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link PurchaseReservedElasticsearchInstanceOfferingCommand}.
 */
export interface PurchaseReservedElasticsearchInstanceOfferingCommandInput
  extends PurchaseReservedElasticsearchInstanceOfferingRequest {}
/**
 * @public
 *
 * The output of {@link PurchaseReservedElasticsearchInstanceOfferingCommand}.
 */
export interface PurchaseReservedElasticsearchInstanceOfferingCommandOutput
  extends PurchaseReservedElasticsearchInstanceOfferingResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Allows you to purchase reserved Elasticsearch instances.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, PurchaseReservedElasticsearchInstanceOfferingCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, PurchaseReservedElasticsearchInstanceOfferingCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const input = { // PurchaseReservedElasticsearchInstanceOfferingRequest
 *   ReservedElasticsearchInstanceOfferingId: "STRING_VALUE", // required
 *   ReservationName: "STRING_VALUE", // required
 *   InstanceCount: Number("int"),
 * };
 * const command = new PurchaseReservedElasticsearchInstanceOfferingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param PurchaseReservedElasticsearchInstanceOfferingCommandInput - {@link PurchaseReservedElasticsearchInstanceOfferingCommandInput}
 * @returns {@link PurchaseReservedElasticsearchInstanceOfferingCommandOutput}
 * @see {@link PurchaseReservedElasticsearchInstanceOfferingCommandInput} for command's `input` shape.
 * @see {@link PurchaseReservedElasticsearchInstanceOfferingCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for ElasticsearchServiceClient's `config` shape.
 *
 * @throws {@link DisabledOperationException} (client fault)
 *  <p>An error occured because the client wanted to access a not supported operation. Gives http status code of 409.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure (the failure is internal to the service) . Gives http status code of 500.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>An exception for trying to create more than allowed resources or sub-resources. Gives http status code of 409.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>An exception for creating a resource that already exists. Gives http status code of 400.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An exception for accessing or deleting a resource that does not exist. Gives http status code of 400.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception for missing / invalid input fields. Gives http status code of 400.</p>
 *
 *
 */
export class PurchaseReservedElasticsearchInstanceOfferingCommand extends $Command<
  PurchaseReservedElasticsearchInstanceOfferingCommandInput,
  PurchaseReservedElasticsearchInstanceOfferingCommandOutput,
  ElasticsearchServiceClientResolvedConfig
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
  constructor(readonly input: PurchaseReservedElasticsearchInstanceOfferingCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticsearchServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    PurchaseReservedElasticsearchInstanceOfferingCommandInput,
    PurchaseReservedElasticsearchInstanceOfferingCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        PurchaseReservedElasticsearchInstanceOfferingCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticsearchServiceClient";
    const commandName = "PurchaseReservedElasticsearchInstanceOfferingCommand";
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
    input: PurchaseReservedElasticsearchInstanceOfferingCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1PurchaseReservedElasticsearchInstanceOfferingCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PurchaseReservedElasticsearchInstanceOfferingCommandOutput> {
    return deserializeAws_restJson1PurchaseReservedElasticsearchInstanceOfferingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
