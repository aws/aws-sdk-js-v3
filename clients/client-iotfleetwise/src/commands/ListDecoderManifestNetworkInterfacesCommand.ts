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

import { IoTFleetWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTFleetWiseClient";
import {
  ListDecoderManifestNetworkInterfacesRequest,
  ListDecoderManifestNetworkInterfacesResponse,
} from "../models/models_0";
import {
  de_ListDecoderManifestNetworkInterfacesCommand,
  se_ListDecoderManifestNetworkInterfacesCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListDecoderManifestNetworkInterfacesCommand}.
 */
export interface ListDecoderManifestNetworkInterfacesCommandInput extends ListDecoderManifestNetworkInterfacesRequest {}
/**
 * @public
 *
 * The output of {@link ListDecoderManifestNetworkInterfacesCommand}.
 */
export interface ListDecoderManifestNetworkInterfacesCommandOutput
  extends ListDecoderManifestNetworkInterfacesResponse,
    __MetadataBearer {}

/**
 * @public
 * <p> Lists the network interfaces specified in a decoder manifest. </p>
 *         <note>
 *             <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the request to return more results.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, ListDecoderManifestNetworkInterfacesCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, ListDecoderManifestNetworkInterfacesCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * const client = new IoTFleetWiseClient(config);
 * const input = { // ListDecoderManifestNetworkInterfacesRequest
 *   name: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListDecoderManifestNetworkInterfacesCommand(input);
 * const response = await client.send(command);
 * // { // ListDecoderManifestNetworkInterfacesResponse
 * //   networkInterfaces: [ // NetworkInterfaces
 * //     { // NetworkInterface
 * //       interfaceId: "STRING_VALUE", // required
 * //       type: "STRING_VALUE", // required
 * //       canInterface: { // CanInterface
 * //         name: "STRING_VALUE", // required
 * //         protocolName: "STRING_VALUE",
 * //         protocolVersion: "STRING_VALUE",
 * //       },
 * //       obdInterface: { // ObdInterface
 * //         name: "STRING_VALUE", // required
 * //         requestMessageId: Number("int"), // required
 * //         obdStandard: "STRING_VALUE",
 * //         pidRequestIntervalSeconds: Number("int"),
 * //         dtcRequestIntervalSeconds: Number("int"),
 * //         useExtendedIds: true || false,
 * //         hasTransmissionEcu: true || false,
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDecoderManifestNetworkInterfacesCommandInput - {@link ListDecoderManifestNetworkInterfacesCommandInput}
 * @returns {@link ListDecoderManifestNetworkInterfacesCommandOutput}
 * @see {@link ListDecoderManifestNetworkInterfacesCommandInput} for command's `input` shape.
 * @see {@link ListDecoderManifestNetworkInterfacesCommandOutput} for command's `response` shape.
 * @see {@link IoTFleetWiseClientResolvedConfig | config} for IoTFleetWiseClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permission to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request couldn't be completed because the server temporarily failed.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource wasn't found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request couldn't be completed due to throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link IoTFleetWiseServiceException}
 * <p>Base exception class for all service exceptions from IoTFleetWise service.</p>
 *
 */
export class ListDecoderManifestNetworkInterfacesCommand extends $Command<
  ListDecoderManifestNetworkInterfacesCommandInput,
  ListDecoderManifestNetworkInterfacesCommandOutput,
  IoTFleetWiseClientResolvedConfig
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
  constructor(readonly input: ListDecoderManifestNetworkInterfacesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTFleetWiseClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDecoderManifestNetworkInterfacesCommandInput, ListDecoderManifestNetworkInterfacesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListDecoderManifestNetworkInterfacesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTFleetWiseClient";
    const commandName = "ListDecoderManifestNetworkInterfacesCommand";
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
    input: ListDecoderManifestNetworkInterfacesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListDecoderManifestNetworkInterfacesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListDecoderManifestNetworkInterfacesCommandOutput> {
    return de_ListDecoderManifestNetworkInterfacesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
