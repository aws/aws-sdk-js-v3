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

import { GetDevicesRequest, GetDevicesResponse, GetDevicesResponseFilterSensitiveLog } from "../models/models_0";
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import { de_GetDevicesCommand, se_GetDevicesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetDevicesCommand}.
 */
export interface GetDevicesCommandInput extends GetDevicesRequest {}
/**
 * @public
 *
 * The output of {@link GetDevicesCommand}.
 */
export interface GetDevicesCommandOutput extends GetDevicesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets information about one or more of your devices in a global network.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, GetDevicesCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, GetDevicesCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const input = { // GetDevicesRequest
 *   GlobalNetworkId: "STRING_VALUE", // required
 *   DeviceIds: [ // DeviceIdList
 *     "STRING_VALUE",
 *   ],
 *   SiteId: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetDevicesCommand(input);
 * const response = await client.send(command);
 * // { // GetDevicesResponse
 * //   Devices: [ // DeviceList
 * //     { // Device
 * //       DeviceId: "STRING_VALUE",
 * //       DeviceArn: "STRING_VALUE",
 * //       GlobalNetworkId: "STRING_VALUE",
 * //       AWSLocation: { // AWSLocation
 * //         Zone: "STRING_VALUE",
 * //         SubnetArn: "STRING_VALUE",
 * //       },
 * //       Description: "STRING_VALUE",
 * //       Type: "STRING_VALUE",
 * //       Vendor: "STRING_VALUE",
 * //       Model: "STRING_VALUE",
 * //       SerialNumber: "STRING_VALUE",
 * //       Location: { // Location
 * //         Address: "STRING_VALUE",
 * //         Latitude: "STRING_VALUE",
 * //         Longitude: "STRING_VALUE",
 * //       },
 * //       SiteId: "STRING_VALUE",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       State: "PENDING" || "AVAILABLE" || "DELETING" || "UPDATING",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetDevicesCommandInput - {@link GetDevicesCommandInput}
 * @returns {@link GetDevicesCommandOutput}
 * @see {@link GetDevicesCommandInput} for command's `input` shape.
 * @see {@link GetDevicesCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for NetworkManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints.</p>
 *
 * @throws {@link NetworkManagerServiceException}
 * <p>Base exception class for all service exceptions from NetworkManager service.</p>
 *
 */
export class GetDevicesCommand extends $Command<
  GetDevicesCommandInput,
  GetDevicesCommandOutput,
  NetworkManagerClientResolvedConfig
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
  constructor(readonly input: GetDevicesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NetworkManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDevicesCommandInput, GetDevicesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetDevicesCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkManagerClient";
    const commandName = "GetDevicesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetDevicesResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "NetworkManager",
        operation: "GetDevices",
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
  private serialize(input: GetDevicesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetDevicesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDevicesCommandOutput> {
    return de_GetDevicesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
