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

import {
  GlobalAcceleratorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../GlobalAcceleratorClient";
import { CreateAcceleratorRequest, CreateAcceleratorResponse } from "../models/models_0";
import { de_CreateAcceleratorCommand, se_CreateAcceleratorCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateAcceleratorCommand}.
 */
export interface CreateAcceleratorCommandInput extends CreateAcceleratorRequest {}
/**
 * @public
 *
 * The output of {@link CreateAcceleratorCommand}.
 */
export interface CreateAcceleratorCommandOutput extends CreateAcceleratorResponse, __MetadataBearer {}

/**
 * @public
 * <p>Create an accelerator. An accelerator includes one or more listeners that process inbound connections and direct traffic
 * 			to one or more endpoint groups, each of which includes endpoints, such as Network Load Balancers. </p>
 *          <important>
 *             <p>Global Accelerator is a global service that supports endpoints in multiple Amazon Web Services Regions but you must specify the
 * 				US West (Oregon) Region to create, update, or otherwise work with accelerators.  That is, for example, specify <code>--region us-west-2</code>
 * 				on Amazon Web Services CLI commands.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, CreateAcceleratorCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, CreateAcceleratorCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const input = { // CreateAcceleratorRequest
 *   Name: "STRING_VALUE", // required
 *   IpAddressType: "IPV4" || "DUAL_STACK",
 *   IpAddresses: [ // IpAddresses
 *     "STRING_VALUE",
 *   ],
 *   Enabled: true || false,
 *   IdempotencyToken: "STRING_VALUE", // required
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateAcceleratorCommand(input);
 * const response = await client.send(command);
 * // { // CreateAcceleratorResponse
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
 * @param CreateAcceleratorCommandInput - {@link CreateAcceleratorCommandInput}
 * @returns {@link CreateAcceleratorCommandOutput}
 * @see {@link CreateAcceleratorCommandInput} for command's `input` shape.
 * @see {@link CreateAcceleratorCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for GlobalAcceleratorClient's `config` shape.
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>There was an internal error for Global Accelerator.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>An argument that you specified is invalid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>Processing your request would cause you to exceed an Global Accelerator limit.</p>
 *
 * @throws {@link GlobalAcceleratorServiceException}
 * <p>Base exception class for all service exceptions from GlobalAccelerator service.</p>
 *
 */
export class CreateAcceleratorCommand extends $Command<
  CreateAcceleratorCommandInput,
  CreateAcceleratorCommandOutput,
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
  constructor(readonly input: CreateAcceleratorCommandInput) {
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
  ): Handler<CreateAcceleratorCommandInput, CreateAcceleratorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateAcceleratorCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlobalAcceleratorClient";
    const commandName = "CreateAcceleratorCommand";
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
  private serialize(input: CreateAcceleratorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateAcceleratorCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateAcceleratorCommandOutput> {
    return de_CreateAcceleratorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
