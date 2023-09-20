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
import { UpdateAcceleratorRequest, UpdateAcceleratorResponse } from "../models/models_0";
import { de_UpdateAcceleratorCommand, se_UpdateAcceleratorCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateAcceleratorCommand}.
 */
export interface UpdateAcceleratorCommandInput extends UpdateAcceleratorRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAcceleratorCommand}.
 */
export interface UpdateAcceleratorCommandOutput extends UpdateAcceleratorResponse, __MetadataBearer {}

/**
 * @public
 * <p>Update an accelerator to make changes, such as the following: </p>
 *          <ul>
 *             <li>
 *                <p>Change the name of the accelerator.</p>
 *             </li>
 *             <li>
 *                <p>Disable the accelerator so that it no longer accepts or routes traffic, or so that you can delete it.</p>
 *             </li>
 *             <li>
 *                <p>Enable the accelerator, if it is disabled.</p>
 *             </li>
 *             <li>
 *                <p>Change the IP address type to dual-stack if it is IPv4, or change the IP address type to IPv4 if it's dual-stack.</p>
 *             </li>
 *          </ul>
 *          <p>Be aware that static IP addresses remain assigned to your accelerator for as long as it exists, even if you disable the accelerator and it no
 * 			longer accepts or routes traffic. However, when you delete the accelerator, you lose the static IP addresses that are assigned to it, so you
 * 			can no longer route traffic by using them.</p>
 *          <important>
 *             <p>Global Accelerator is a global service that supports endpoints in multiple Amazon Web Services Regions but you must specify the
 * 				US West (Oregon) Region to create, update, or otherwise work with accelerators.  That is, for example, specify <code>--region us-west-2</code>
 * 				on Amazon Web Services CLI commands.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, UpdateAcceleratorCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, UpdateAcceleratorCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const input = { // UpdateAcceleratorRequest
 *   AcceleratorArn: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   IpAddressType: "IPV4" || "DUAL_STACK",
 *   Enabled: true || false,
 * };
 * const command = new UpdateAcceleratorCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAcceleratorResponse
 * //   Accelerator: { // Accelerator
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
 * //     DualStackDnsName: "STRING_VALUE",
 * //     Events: [ // AcceleratorEvents
 * //       { // AcceleratorEvent
 * //         Message: "STRING_VALUE",
 * //         Timestamp: new Date("TIMESTAMP"),
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateAcceleratorCommandInput - {@link UpdateAcceleratorCommandInput}
 * @returns {@link UpdateAcceleratorCommandOutput}
 * @see {@link UpdateAcceleratorCommandInput} for command's `input` shape.
 * @see {@link UpdateAcceleratorCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for GlobalAcceleratorClient's `config` shape.
 *
 * @throws {@link AcceleratorNotFoundException} (client fault)
 *  <p>The accelerator that you specified doesn't exist.</p>
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access permission.</p>
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
export class UpdateAcceleratorCommand extends $Command<
  UpdateAcceleratorCommandInput,
  UpdateAcceleratorCommandOutput,
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
  constructor(readonly input: UpdateAcceleratorCommandInput) {
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
  ): Handler<UpdateAcceleratorCommandInput, UpdateAcceleratorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateAcceleratorCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlobalAcceleratorClient";
    const commandName = "UpdateAcceleratorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "GlobalAccelerator_V20180706",
        operation: "UpdateAccelerator",
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
  private serialize(input: UpdateAcceleratorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateAcceleratorCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateAcceleratorCommandOutput> {
    return de_UpdateAcceleratorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
