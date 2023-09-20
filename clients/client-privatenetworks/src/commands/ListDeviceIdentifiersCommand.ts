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
  ListDeviceIdentifiersRequest,
  ListDeviceIdentifiersResponse,
  ListDeviceIdentifiersResponseFilterSensitiveLog,
} from "../models/models_0";
import { PrivateNetworksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PrivateNetworksClient";
import { de_ListDeviceIdentifiersCommand, se_ListDeviceIdentifiersCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListDeviceIdentifiersCommand}.
 */
export interface ListDeviceIdentifiersCommandInput extends ListDeviceIdentifiersRequest {}
/**
 * @public
 *
 * The output of {@link ListDeviceIdentifiersCommand}.
 */
export interface ListDeviceIdentifiersCommandOutput extends ListDeviceIdentifiersResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists device identifiers. Add filters to your request to return a more specific list
 *             of results. Use filters to match the Amazon Resource Name (ARN) of an order, the status
 *             of device identifiers, or the ARN of the traffic group.</p>
 *          <p>If you specify multiple filters, filters are joined with an OR, and the request
 * returns results that match all of the specified filters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PrivateNetworksClient, ListDeviceIdentifiersCommand } from "@aws-sdk/client-privatenetworks"; // ES Modules import
 * // const { PrivateNetworksClient, ListDeviceIdentifiersCommand } = require("@aws-sdk/client-privatenetworks"); // CommonJS import
 * const client = new PrivateNetworksClient(config);
 * const input = { // ListDeviceIdentifiersRequest
 *   filters: { // DeviceIdentifierFilters
 *     "<keys>": [ // DeviceIdentifierFilterValues
 *       "STRING_VALUE",
 *     ],
 *   },
 *   networkArn: "STRING_VALUE", // required
 *   startToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListDeviceIdentifiersCommand(input);
 * const response = await client.send(command);
 * // { // ListDeviceIdentifiersResponse
 * //   deviceIdentifiers: [ // DeviceIdentifierList
 * //     { // DeviceIdentifier
 * //       deviceIdentifierArn: "STRING_VALUE",
 * //       trafficGroupArn: "STRING_VALUE",
 * //       networkArn: "STRING_VALUE",
 * //       imsi: "STRING_VALUE",
 * //       iccid: "STRING_VALUE",
 * //       vendor: "STRING_VALUE",
 * //       status: "STRING_VALUE",
 * //       orderArn: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDeviceIdentifiersCommandInput - {@link ListDeviceIdentifiersCommandInput}
 * @returns {@link ListDeviceIdentifiersCommandOutput}
 * @see {@link ListDeviceIdentifiersCommandInput} for command's `input` shape.
 * @see {@link ListDeviceIdentifiersCommandOutput} for command's `response` shape.
 * @see {@link PrivateNetworksClientResolvedConfig | config} for PrivateNetworksClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Information about an internal error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed validation.</p>
 *
 * @throws {@link PrivateNetworksServiceException}
 * <p>Base exception class for all service exceptions from PrivateNetworks service.</p>
 *
 */
export class ListDeviceIdentifiersCommand extends $Command<
  ListDeviceIdentifiersCommandInput,
  ListDeviceIdentifiersCommandOutput,
  PrivateNetworksClientResolvedConfig
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
  constructor(readonly input: ListDeviceIdentifiersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PrivateNetworksClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDeviceIdentifiersCommandInput, ListDeviceIdentifiersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListDeviceIdentifiersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PrivateNetworksClient";
    const commandName = "ListDeviceIdentifiersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: ListDeviceIdentifiersResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "E5GNetworkControllerLambda",
        operation: "ListDeviceIdentifiers",
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
  private serialize(input: ListDeviceIdentifiersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListDeviceIdentifiersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListDeviceIdentifiersCommandOutput> {
    return de_ListDeviceIdentifiersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
