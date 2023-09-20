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

import {
  GlobalAcceleratorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../GlobalAcceleratorClient";
import { AdvertiseByoipCidrRequest, AdvertiseByoipCidrResponse } from "../models/models_0";
import { de_AdvertiseByoipCidrCommand, se_AdvertiseByoipCidrCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AdvertiseByoipCidrCommand}.
 */
export interface AdvertiseByoipCidrCommandInput extends AdvertiseByoipCidrRequest {}
/**
 * @public
 *
 * The output of {@link AdvertiseByoipCidrCommand}.
 */
export interface AdvertiseByoipCidrCommandOutput extends AdvertiseByoipCidrResponse, __MetadataBearer {}

/**
 * @public
 * <p>Advertises an IPv4 address range that is provisioned for use with your Amazon Web Services resources
 * 			through bring your own IP addresses (BYOIP). It can take a few minutes before traffic to
 * 			the specified addresses starts routing to Amazon Web Services because of propagation delays. </p>
 *          <p>To stop advertising the BYOIP address range, use <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/WithdrawByoipCidr.html">
 * 			WithdrawByoipCidr</a>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring your own
 * 		    IP addresses (BYOIP)</a> in the <i>Global Accelerator Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, AdvertiseByoipCidrCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, AdvertiseByoipCidrCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const input = { // AdvertiseByoipCidrRequest
 *   Cidr: "STRING_VALUE", // required
 * };
 * const command = new AdvertiseByoipCidrCommand(input);
 * const response = await client.send(command);
 * // { // AdvertiseByoipCidrResponse
 * //   ByoipCidr: { // ByoipCidr
 * //     Cidr: "STRING_VALUE",
 * //     State: "PENDING_PROVISIONING" || "READY" || "PENDING_ADVERTISING" || "ADVERTISING" || "PENDING_WITHDRAWING" || "PENDING_DEPROVISIONING" || "DEPROVISIONED" || "FAILED_PROVISION" || "FAILED_ADVERTISING" || "FAILED_WITHDRAW" || "FAILED_DEPROVISION",
 * //     Events: [ // ByoipCidrEvents
 * //       { // ByoipCidrEvent
 * //         Message: "STRING_VALUE",
 * //         Timestamp: new Date("TIMESTAMP"),
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param AdvertiseByoipCidrCommandInput - {@link AdvertiseByoipCidrCommandInput}
 * @returns {@link AdvertiseByoipCidrCommandOutput}
 * @see {@link AdvertiseByoipCidrCommandInput} for command's `input` shape.
 * @see {@link AdvertiseByoipCidrCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for GlobalAcceleratorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access permission.</p>
 *
 * @throws {@link ByoipCidrNotFoundException} (client fault)
 *  <p>The CIDR that you specified was not found or is incorrect.</p>
 *
 * @throws {@link IncorrectCidrStateException} (client fault)
 *  <p>The CIDR that you specified is not valid for this action. For example, the state of the CIDR might be
 * 		incorrect for this action.</p>
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>There was an internal error for Global Accelerator.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>An argument that you specified is invalid.</p>
 *
 * @throws {@link GlobalAcceleratorServiceException}
 * <p>Base exception class for all service exceptions from GlobalAccelerator service.</p>
 *
 */
export class AdvertiseByoipCidrCommand extends $Command<
  AdvertiseByoipCidrCommandInput,
  AdvertiseByoipCidrCommandOutput,
  GlobalAcceleratorClientResolvedConfig
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
  constructor(readonly input: AdvertiseByoipCidrCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlobalAcceleratorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AdvertiseByoipCidrCommandInput, AdvertiseByoipCidrCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AdvertiseByoipCidrCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlobalAcceleratorClient";
    const commandName = "AdvertiseByoipCidrCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "GlobalAccelerator_V20180706",
        operation: "AdvertiseByoipCidr",
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
  private serialize(input: AdvertiseByoipCidrCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AdvertiseByoipCidrCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AdvertiseByoipCidrCommandOutput> {
    return de_AdvertiseByoipCidrCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
