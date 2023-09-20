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
import { ListAcceleratorsRequest, ListAcceleratorsResponse } from "../models/models_0";
import { de_ListAcceleratorsCommand, se_ListAcceleratorsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListAcceleratorsCommand}.
 */
export interface ListAcceleratorsCommandInput extends ListAcceleratorsRequest {}
/**
 * @public
 *
 * The output of {@link ListAcceleratorsCommand}.
 */
export interface ListAcceleratorsCommandOutput extends ListAcceleratorsResponse, __MetadataBearer {}

/**
 * @public
 * <p>List the accelerators for an Amazon Web Services account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, ListAcceleratorsCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, ListAcceleratorsCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const input = { // ListAcceleratorsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListAcceleratorsCommand(input);
 * const response = await client.send(command);
 * // { // ListAcceleratorsResponse
 * //   Accelerators: [ // Accelerators
 * //     { // Accelerator
 * //       AcceleratorArn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       IpAddressType: "IPV4" || "DUAL_STACK",
 * //       Enabled: true || false,
 * //       IpSets: [ // IpSets
 * //         { // IpSet
 * //           IpFamily: "STRING_VALUE",
 * //           IpAddresses: [ // IpAddresses
 * //             "STRING_VALUE",
 * //           ],
 * //           IpAddressFamily: "IPv4" || "IPv6",
 * //         },
 * //       ],
 * //       DnsName: "STRING_VALUE",
 * //       Status: "DEPLOYED" || "IN_PROGRESS",
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //       DualStackDnsName: "STRING_VALUE",
 * //       Events: [ // AcceleratorEvents
 * //         { // AcceleratorEvent
 * //           Message: "STRING_VALUE",
 * //           Timestamp: new Date("TIMESTAMP"),
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAcceleratorsCommandInput - {@link ListAcceleratorsCommandInput}
 * @returns {@link ListAcceleratorsCommandOutput}
 * @see {@link ListAcceleratorsCommandInput} for command's `input` shape.
 * @see {@link ListAcceleratorsCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for GlobalAcceleratorClient's `config` shape.
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>There was an internal error for Global Accelerator.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>An argument that you specified is invalid.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>There isn't another item to return.</p>
 *
 * @throws {@link GlobalAcceleratorServiceException}
 * <p>Base exception class for all service exceptions from GlobalAccelerator service.</p>
 *
 */
export class ListAcceleratorsCommand extends $Command<
  ListAcceleratorsCommandInput,
  ListAcceleratorsCommandOutput,
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
  constructor(readonly input: ListAcceleratorsCommandInput) {
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
  ): Handler<ListAcceleratorsCommandInput, ListAcceleratorsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAcceleratorsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlobalAcceleratorClient";
    const commandName = "ListAcceleratorsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "GlobalAccelerator_V20180706",
        operation: "ListAccelerators",
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
  private serialize(input: ListAcceleratorsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListAcceleratorsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAcceleratorsCommandOutput> {
    return de_ListAcceleratorsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
