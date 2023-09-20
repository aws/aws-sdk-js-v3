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

import { GlacierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlacierClient";
import { PurchaseProvisionedCapacityInput, PurchaseProvisionedCapacityOutput } from "../models/models_0";
import {
  de_PurchaseProvisionedCapacityCommand,
  se_PurchaseProvisionedCapacityCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PurchaseProvisionedCapacityCommand}.
 */
export interface PurchaseProvisionedCapacityCommandInput extends PurchaseProvisionedCapacityInput {}
/**
 * @public
 *
 * The output of {@link PurchaseProvisionedCapacityCommand}.
 */
export interface PurchaseProvisionedCapacityCommandOutput extends PurchaseProvisionedCapacityOutput, __MetadataBearer {}

/**
 * @public
 * <p>This operation purchases a provisioned capacity unit for an AWS account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, PurchaseProvisionedCapacityCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, PurchaseProvisionedCapacityCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * const client = new GlacierClient(config);
 * const input = { // PurchaseProvisionedCapacityInput
 *   accountId: "STRING_VALUE", // required
 * };
 * const command = new PurchaseProvisionedCapacityCommand(input);
 * const response = await client.send(command);
 * // { // PurchaseProvisionedCapacityOutput
 * //   capacityId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PurchaseProvisionedCapacityCommandInput - {@link PurchaseProvisionedCapacityCommandInput}
 * @returns {@link PurchaseProvisionedCapacityCommandOutput}
 * @see {@link PurchaseProvisionedCapacityCommandInput} for command's `input` shape.
 * @see {@link PurchaseProvisionedCapacityCommandOutput} for command's `response` shape.
 * @see {@link GlacierClientResolvedConfig | config} for GlacierClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>Returned if a parameter of the request is incorrectly specified.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>Returned if the request results in a vault or account limit being exceeded.</p>
 *
 * @throws {@link MissingParameterValueException} (client fault)
 *  <p>Returned if a required header or parameter is missing from the request.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>Returned if the service cannot complete the request.</p>
 *
 * @throws {@link GlacierServiceException}
 * <p>Base exception class for all service exceptions from Glacier service.</p>
 *
 * @example To purchases a provisioned capacity unit for an AWS account
 * ```javascript
 * // The example purchases provisioned capacity unit for an AWS account.
 * const input = {
 *   "accountId": "-"
 * };
 * const command = new PurchaseProvisionedCapacityCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "capacityId": "zSaq7NzHFQDANTfQkDen4V7z"
 * }
 * *\/
 * // example id: to-purchases-a-provisioned-capacity-unit-for-an-aws-account-1481927446662
 * ```
 *
 */
export class PurchaseProvisionedCapacityCommand extends $Command<
  PurchaseProvisionedCapacityCommandInput,
  PurchaseProvisionedCapacityCommandOutput,
  GlacierClientResolvedConfig
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
  constructor(readonly input: PurchaseProvisionedCapacityCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlacierClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PurchaseProvisionedCapacityCommandInput, PurchaseProvisionedCapacityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PurchaseProvisionedCapacityCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlacierClient";
    const commandName = "PurchaseProvisionedCapacityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Glacier",
        operation: "PurchaseProvisionedCapacity",
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
  private serialize(input: PurchaseProvisionedCapacityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PurchaseProvisionedCapacityCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PurchaseProvisionedCapacityCommandOutput> {
    return de_PurchaseProvisionedCapacityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
