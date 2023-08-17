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

import { ListAutomaticTapeCreationPoliciesInput, ListAutomaticTapeCreationPoliciesOutput } from "../models/models_0";
import {
  de_ListAutomaticTapeCreationPoliciesCommand,
  se_ListAutomaticTapeCreationPoliciesCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListAutomaticTapeCreationPoliciesCommand}.
 */
export interface ListAutomaticTapeCreationPoliciesCommandInput extends ListAutomaticTapeCreationPoliciesInput {}
/**
 * @public
 *
 * The output of {@link ListAutomaticTapeCreationPoliciesCommand}.
 */
export interface ListAutomaticTapeCreationPoliciesCommandOutput
  extends ListAutomaticTapeCreationPoliciesOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Lists the automatic tape creation policies for a gateway. If there are no automatic tape
 *          creation policies for the gateway, it returns an empty list.</p>
 *
 *          <p>This operation is only supported for tape gateways.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, ListAutomaticTapeCreationPoliciesCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, ListAutomaticTapeCreationPoliciesCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const input = { // ListAutomaticTapeCreationPoliciesInput
 *   GatewayARN: "STRING_VALUE",
 * };
 * const command = new ListAutomaticTapeCreationPoliciesCommand(input);
 * const response = await client.send(command);
 * // { // ListAutomaticTapeCreationPoliciesOutput
 * //   AutomaticTapeCreationPolicyInfos: [ // AutomaticTapeCreationPolicyInfos
 * //     { // AutomaticTapeCreationPolicyInfo
 * //       AutomaticTapeCreationRules: [ // AutomaticTapeCreationRules
 * //         { // AutomaticTapeCreationRule
 * //           TapeBarcodePrefix: "STRING_VALUE", // required
 * //           PoolId: "STRING_VALUE", // required
 * //           TapeSizeInBytes: Number("long"), // required
 * //           MinimumNumTapes: Number("int"), // required
 * //           Worm: true || false,
 * //         },
 * //       ],
 * //       GatewayARN: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListAutomaticTapeCreationPoliciesCommandInput - {@link ListAutomaticTapeCreationPoliciesCommandInput}
 * @returns {@link ListAutomaticTapeCreationPoliciesCommandOutput}
 * @see {@link ListAutomaticTapeCreationPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListAutomaticTapeCreationPoliciesCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for StorageGatewayClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An internal server error has occurred during the request. For more information, see the
 *          error and message fields.</p>
 *
 * @throws {@link InvalidGatewayRequestException} (client fault)
 *  <p>An exception occurred because an invalid gateway request was issued to the service. For
 *          more information, see the error and message fields.</p>
 *
 * @throws {@link StorageGatewayServiceException}
 * <p>Base exception class for all service exceptions from StorageGateway service.</p>
 *
 */
export class ListAutomaticTapeCreationPoliciesCommand extends $Command<
  ListAutomaticTapeCreationPoliciesCommandInput,
  ListAutomaticTapeCreationPoliciesCommandOutput,
  StorageGatewayClientResolvedConfig
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
  constructor(readonly input: ListAutomaticTapeCreationPoliciesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: StorageGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAutomaticTapeCreationPoliciesCommandInput, ListAutomaticTapeCreationPoliciesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAutomaticTapeCreationPoliciesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "ListAutomaticTapeCreationPoliciesCommand";
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
    input: ListAutomaticTapeCreationPoliciesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListAutomaticTapeCreationPoliciesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListAutomaticTapeCreationPoliciesCommandOutput> {
    return de_ListAutomaticTapeCreationPoliciesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
