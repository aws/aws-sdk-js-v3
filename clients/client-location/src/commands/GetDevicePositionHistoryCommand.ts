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

import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import {
  GetDevicePositionHistoryRequest,
  GetDevicePositionHistoryResponse,
  GetDevicePositionHistoryResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GetDevicePositionHistoryCommand, se_GetDevicePositionHistoryCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetDevicePositionHistoryCommand}.
 */
export interface GetDevicePositionHistoryCommandInput extends GetDevicePositionHistoryRequest {}
/**
 * @public
 *
 * The output of {@link GetDevicePositionHistoryCommand}.
 */
export interface GetDevicePositionHistoryCommandOutput extends GetDevicePositionHistoryResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the device position history from a tracker resource within a specified range
 *             of time.</p>
 *          <note>
 *             <p>Device positions are deleted after 30 days.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, GetDevicePositionHistoryCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, GetDevicePositionHistoryCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const input = { // GetDevicePositionHistoryRequest
 *   TrackerName: "STRING_VALUE", // required
 *   DeviceId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   StartTimeInclusive: new Date("TIMESTAMP"),
 *   EndTimeExclusive: new Date("TIMESTAMP"),
 *   MaxResults: Number("int"),
 * };
 * const command = new GetDevicePositionHistoryCommand(input);
 * const response = await client.send(command);
 * // { // GetDevicePositionHistoryResponse
 * //   DevicePositions: [ // DevicePositionList // required
 * //     { // DevicePosition
 * //       DeviceId: "STRING_VALUE",
 * //       SampleTime: new Date("TIMESTAMP"), // required
 * //       ReceivedTime: new Date("TIMESTAMP"), // required
 * //       Position: [ // Position // required
 * //         Number("double"),
 * //       ],
 * //       Accuracy: { // PositionalAccuracy
 * //         Horizontal: Number("double"), // required
 * //       },
 * //       PositionProperties: { // PropertyMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetDevicePositionHistoryCommandInput - {@link GetDevicePositionHistoryCommandInput}
 * @returns {@link GetDevicePositionHistoryCommandOutput}
 * @see {@link GetDevicePositionHistoryCommandInput} for command's `input` shape.
 * @see {@link GetDevicePositionHistoryCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because of insufficient access or permissions. Check with an
 *       administrator to verify your permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed to process because of an unknown server error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource that you've entered was not found in your AWS account.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because of request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to meet the constraints specified by the AWS service. </p>
 *
 * @throws {@link LocationServiceException}
 * <p>Base exception class for all service exceptions from Location service.</p>
 *
 */
export class GetDevicePositionHistoryCommand extends $Command<
  GetDevicePositionHistoryCommandInput,
  GetDevicePositionHistoryCommandOutput,
  LocationClientResolvedConfig
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
  constructor(readonly input: GetDevicePositionHistoryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LocationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDevicePositionHistoryCommandInput, GetDevicePositionHistoryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetDevicePositionHistoryCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LocationClient";
    const commandName = "GetDevicePositionHistoryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetDevicePositionHistoryResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "LocationService",
        operation: "GetDevicePositionHistory",
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
  private serialize(input: GetDevicePositionHistoryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetDevicePositionHistoryCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDevicePositionHistoryCommandOutput> {
    return de_GetDevicePositionHistoryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
