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
import {
  ListWirelessGatewayTaskDefinitionsRequest,
  ListWirelessGatewayTaskDefinitionsResponse,
} from "../models/models_1";
import {
  de_ListWirelessGatewayTaskDefinitionsCommand,
  se_ListWirelessGatewayTaskDefinitionsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListWirelessGatewayTaskDefinitionsCommand}.
 */
export interface ListWirelessGatewayTaskDefinitionsCommandInput extends ListWirelessGatewayTaskDefinitionsRequest {}
/**
 * @public
 *
 * The output of {@link ListWirelessGatewayTaskDefinitionsCommand}.
 */
export interface ListWirelessGatewayTaskDefinitionsCommandOutput
  extends ListWirelessGatewayTaskDefinitionsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>List the wireless gateway tasks definitions registered to your AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, ListWirelessGatewayTaskDefinitionsCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, ListWirelessGatewayTaskDefinitionsCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const input = { // ListWirelessGatewayTaskDefinitionsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   TaskDefinitionType: "UPDATE",
 * };
 * const command = new ListWirelessGatewayTaskDefinitionsCommand(input);
 * const response = await client.send(command);
 * // { // ListWirelessGatewayTaskDefinitionsResponse
 * //   NextToken: "STRING_VALUE",
 * //   TaskDefinitions: [ // WirelessGatewayTaskDefinitionList
 * //     { // UpdateWirelessGatewayTaskEntry
 * //       Id: "STRING_VALUE",
 * //       LoRaWAN: { // LoRaWANUpdateGatewayTaskEntry
 * //         CurrentVersion: { // LoRaWANGatewayVersion
 * //           PackageVersion: "STRING_VALUE",
 * //           Model: "STRING_VALUE",
 * //           Station: "STRING_VALUE",
 * //         },
 * //         UpdateVersion: {
 * //           PackageVersion: "STRING_VALUE",
 * //           Model: "STRING_VALUE",
 * //           Station: "STRING_VALUE",
 * //         },
 * //       },
 * //       Arn: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListWirelessGatewayTaskDefinitionsCommandInput - {@link ListWirelessGatewayTaskDefinitionsCommandInput}
 * @returns {@link ListWirelessGatewayTaskDefinitionsCommandOutput}
 * @see {@link ListWirelessGatewayTaskDefinitionsCommandInput} for command's `input` shape.
 * @see {@link ListWirelessGatewayTaskDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for IoTWirelessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have permission to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing a request.</p>
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
export class ListWirelessGatewayTaskDefinitionsCommand extends $Command<
  ListWirelessGatewayTaskDefinitionsCommandInput,
  ListWirelessGatewayTaskDefinitionsCommandOutput,
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
  constructor(readonly input: ListWirelessGatewayTaskDefinitionsCommandInput) {
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
  ): Handler<ListWirelessGatewayTaskDefinitionsCommandInput, ListWirelessGatewayTaskDefinitionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListWirelessGatewayTaskDefinitionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTWirelessClient";
    const commandName = "ListWirelessGatewayTaskDefinitionsCommand";
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
    input: ListWirelessGatewayTaskDefinitionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListWirelessGatewayTaskDefinitionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListWirelessGatewayTaskDefinitionsCommandOutput> {
    return de_ListWirelessGatewayTaskDefinitionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
