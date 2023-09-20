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

import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { ListInputDeviceTransfersRequest, ListInputDeviceTransfersResponse } from "../models/models_1";
import { de_ListInputDeviceTransfersCommand, se_ListInputDeviceTransfersCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListInputDeviceTransfersCommand}.
 */
export interface ListInputDeviceTransfersCommandInput extends ListInputDeviceTransfersRequest {}
/**
 * @public
 *
 * The output of {@link ListInputDeviceTransfersCommand}.
 */
export interface ListInputDeviceTransfersCommandOutput extends ListInputDeviceTransfersResponse, __MetadataBearer {}

/**
 * @public
 * List input devices that are currently being transferred. List input devices that you are transferring from your AWS account or input devices that another AWS account is transferring to you.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, ListInputDeviceTransfersCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, ListInputDeviceTransfersCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const input = { // ListInputDeviceTransfersRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   TransferType: "STRING_VALUE", // required
 * };
 * const command = new ListInputDeviceTransfersCommand(input);
 * const response = await client.send(command);
 * // { // ListInputDeviceTransfersResponse
 * //   InputDeviceTransfers: [ // __listOfTransferringInputDeviceSummary
 * //     { // TransferringInputDeviceSummary
 * //       Id: "STRING_VALUE",
 * //       Message: "STRING_VALUE",
 * //       TargetCustomerId: "STRING_VALUE",
 * //       TransferType: "OUTGOING" || "INCOMING",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListInputDeviceTransfersCommandInput - {@link ListInputDeviceTransfersCommandInput}
 * @returns {@link ListInputDeviceTransfersCommandOutput}
 * @see {@link ListInputDeviceTransfersCommandInput} for command's `input` shape.
 * @see {@link ListInputDeviceTransfersCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for MediaLiveClient's `config` shape.
 *
 * @throws {@link BadGatewayException} (server fault)
 *  Placeholder documentation for BadGatewayException
 *
 * @throws {@link BadRequestException} (client fault)
 *  Placeholder documentation for BadRequestException
 *
 * @throws {@link ForbiddenException} (client fault)
 *  Placeholder documentation for ForbiddenException
 *
 * @throws {@link GatewayTimeoutException} (server fault)
 *  Placeholder documentation for GatewayTimeoutException
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  Placeholder documentation for InternalServerErrorException
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  Placeholder documentation for TooManyRequestsException
 *
 * @throws {@link UnprocessableEntityException} (client fault)
 *  Placeholder documentation for UnprocessableEntityException
 *
 * @throws {@link MediaLiveServiceException}
 * <p>Base exception class for all service exceptions from MediaLive service.</p>
 *
 */
export class ListInputDeviceTransfersCommand extends $Command<
  ListInputDeviceTransfersCommandInput,
  ListInputDeviceTransfersCommandOutput,
  MediaLiveClientResolvedConfig
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
  constructor(readonly input: ListInputDeviceTransfersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaLiveClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListInputDeviceTransfersCommandInput, ListInputDeviceTransfersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListInputDeviceTransfersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaLiveClient";
    const commandName = "ListInputDeviceTransfersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "MediaLive",
        operation: "ListInputDeviceTransfers",
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
  private serialize(input: ListInputDeviceTransfersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListInputDeviceTransfersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListInputDeviceTransfersCommandOutput> {
    return de_ListInputDeviceTransfersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
