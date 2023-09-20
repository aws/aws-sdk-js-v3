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
import { UpdateCustomRoutingAcceleratorRequest, UpdateCustomRoutingAcceleratorResponse } from "../models/models_0";
import {
  de_UpdateCustomRoutingAcceleratorCommand,
  se_UpdateCustomRoutingAcceleratorCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateCustomRoutingAcceleratorCommand}.
 */
export interface UpdateCustomRoutingAcceleratorCommandInput extends UpdateCustomRoutingAcceleratorRequest {}
/**
 * @public
 *
 * The output of {@link UpdateCustomRoutingAcceleratorCommand}.
 */
export interface UpdateCustomRoutingAcceleratorCommandOutput
  extends UpdateCustomRoutingAcceleratorResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Update a custom routing accelerator. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, UpdateCustomRoutingAcceleratorCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, UpdateCustomRoutingAcceleratorCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const input = { // UpdateCustomRoutingAcceleratorRequest
 *   AcceleratorArn: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   IpAddressType: "IPV4" || "DUAL_STACK",
 *   Enabled: true || false,
 * };
 * const command = new UpdateCustomRoutingAcceleratorCommand(input);
 * const response = await client.send(command);
 * // { // UpdateCustomRoutingAcceleratorResponse
 * //   Accelerator: { // CustomRoutingAccelerator
 * //     AcceleratorArn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     IpAddressType: "IPV4" || "DUAL_STACK",
 * //     Enabled: true || false,
 * //     IpSets: [ // IpSets
 * //       { // IpSet
 * //         IpFamily: "STRING_VALUE",
 * //         IpAddresses: [ // IpAddresses
 * //           "STRING_VALUE",
 * //         ],
 * //         IpAddressFamily: "IPv4" || "IPv6",
 * //       },
 * //     ],
 * //     DnsName: "STRING_VALUE",
 * //     Status: "DEPLOYED" || "IN_PROGRESS",
 * //     CreatedTime: new Date("TIMESTAMP"),
 * //     LastModifiedTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateCustomRoutingAcceleratorCommandInput - {@link UpdateCustomRoutingAcceleratorCommandInput}
 * @returns {@link UpdateCustomRoutingAcceleratorCommandOutput}
 * @see {@link UpdateCustomRoutingAcceleratorCommandInput} for command's `input` shape.
 * @see {@link UpdateCustomRoutingAcceleratorCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for GlobalAcceleratorClient's `config` shape.
 *
 * @throws {@link AcceleratorNotFoundException} (client fault)
 *  <p>The accelerator that you specified doesn't exist.</p>
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
export class UpdateCustomRoutingAcceleratorCommand extends $Command<
  UpdateCustomRoutingAcceleratorCommandInput,
  UpdateCustomRoutingAcceleratorCommandOutput,
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
  constructor(readonly input: UpdateCustomRoutingAcceleratorCommandInput) {
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
  ): Handler<UpdateCustomRoutingAcceleratorCommandInput, UpdateCustomRoutingAcceleratorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateCustomRoutingAcceleratorCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlobalAcceleratorClient";
    const commandName = "UpdateCustomRoutingAcceleratorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "GlobalAccelerator_V20180706",
        operation: "UpdateCustomRoutingAccelerator",
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
  private serialize(
    input: UpdateCustomRoutingAcceleratorCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_UpdateCustomRoutingAcceleratorCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateCustomRoutingAcceleratorCommandOutput> {
    return de_UpdateCustomRoutingAcceleratorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
