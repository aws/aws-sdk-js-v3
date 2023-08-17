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

import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { ListMulticastGroupsByFuotaTaskRequest, ListMulticastGroupsByFuotaTaskResponse } from "../models/models_0";
import {
  de_ListMulticastGroupsByFuotaTaskCommand,
  se_ListMulticastGroupsByFuotaTaskCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListMulticastGroupsByFuotaTaskCommand}.
 */
export interface ListMulticastGroupsByFuotaTaskCommandInput extends ListMulticastGroupsByFuotaTaskRequest {}
/**
 * @public
 *
 * The output of {@link ListMulticastGroupsByFuotaTaskCommand}.
 */
export interface ListMulticastGroupsByFuotaTaskCommandOutput
  extends ListMulticastGroupsByFuotaTaskResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>List all multicast groups associated with a fuota task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, ListMulticastGroupsByFuotaTaskCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, ListMulticastGroupsByFuotaTaskCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const input = { // ListMulticastGroupsByFuotaTaskRequest
 *   Id: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListMulticastGroupsByFuotaTaskCommand(input);
 * const response = await client.send(command);
 * // { // ListMulticastGroupsByFuotaTaskResponse
 * //   NextToken: "STRING_VALUE",
 * //   MulticastGroupList: [ // MulticastGroupListByFuotaTask
 * //     { // MulticastGroupByFuotaTask
 * //       Id: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListMulticastGroupsByFuotaTaskCommandInput - {@link ListMulticastGroupsByFuotaTaskCommandInput}
 * @returns {@link ListMulticastGroupsByFuotaTaskCommandOutput}
 * @see {@link ListMulticastGroupsByFuotaTaskCommandInput} for command's `input` shape.
 * @see {@link ListMulticastGroupsByFuotaTaskCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for IoTWirelessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have permission to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing a request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because it exceeded the allowed API request rate.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input did not meet the specified constraints.</p>
 *
 * @throws {@link IoTWirelessServiceException}
 * <p>Base exception class for all service exceptions from IoTWireless service.</p>
 *
 */
export class ListMulticastGroupsByFuotaTaskCommand extends $Command<
  ListMulticastGroupsByFuotaTaskCommandInput,
  ListMulticastGroupsByFuotaTaskCommandOutput,
  IoTWirelessClientResolvedConfig
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
  constructor(readonly input: ListMulticastGroupsByFuotaTaskCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTWirelessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListMulticastGroupsByFuotaTaskCommandInput, ListMulticastGroupsByFuotaTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListMulticastGroupsByFuotaTaskCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTWirelessClient";
    const commandName = "ListMulticastGroupsByFuotaTaskCommand";
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
    input: ListMulticastGroupsByFuotaTaskCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListMulticastGroupsByFuotaTaskCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListMulticastGroupsByFuotaTaskCommandOutput> {
    return de_ListMulticastGroupsByFuotaTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
