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

import { GreengrassV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassV2Client";
import {
  BatchAssociateClientDeviceWithCoreDeviceRequest,
  BatchAssociateClientDeviceWithCoreDeviceResponse,
} from "../models/models_0";
import {
  de_BatchAssociateClientDeviceWithCoreDeviceCommand,
  se_BatchAssociateClientDeviceWithCoreDeviceCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchAssociateClientDeviceWithCoreDeviceCommand}.
 */
export interface BatchAssociateClientDeviceWithCoreDeviceCommandInput
  extends BatchAssociateClientDeviceWithCoreDeviceRequest {}
/**
 * @public
 *
 * The output of {@link BatchAssociateClientDeviceWithCoreDeviceCommand}.
 */
export interface BatchAssociateClientDeviceWithCoreDeviceCommandOutput
  extends BatchAssociateClientDeviceWithCoreDeviceResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Associates a list of client devices with a core device. Use this API operation to specify
 *       which client devices can discover a core device through cloud discovery. With cloud discovery,
 *       client devices connect to IoT Greengrass to retrieve associated core devices' connectivity information
 *       and certificates. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/configure-cloud-discovery.html">Configure cloud
 *         discovery</a> in the <i>IoT Greengrass V2 Developer Guide</i>.</p>
 *          <note>
 *             <p>Client devices are local IoT devices that connect to and communicate with an IoT Greengrass core
 *         device over MQTT. You can connect client devices to a core device to sync MQTT messages and
 *         data to Amazon Web Services IoT Core and interact with client devices in Greengrass components. For more information,
 *         see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/interact-with-local-iot-devices.html">Interact with
 *           local IoT devices</a> in the <i>IoT Greengrass V2 Developer Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassV2Client, BatchAssociateClientDeviceWithCoreDeviceCommand } from "@aws-sdk/client-greengrassv2"; // ES Modules import
 * // const { GreengrassV2Client, BatchAssociateClientDeviceWithCoreDeviceCommand } = require("@aws-sdk/client-greengrassv2"); // CommonJS import
 * const client = new GreengrassV2Client(config);
 * const input = { // BatchAssociateClientDeviceWithCoreDeviceRequest
 *   entries: [ // AssociateClientDeviceWithCoreDeviceEntryList
 *     { // AssociateClientDeviceWithCoreDeviceEntry
 *       thingName: "STRING_VALUE", // required
 *     },
 *   ],
 *   coreDeviceThingName: "STRING_VALUE", // required
 * };
 * const command = new BatchAssociateClientDeviceWithCoreDeviceCommand(input);
 * const response = await client.send(command);
 * // { // BatchAssociateClientDeviceWithCoreDeviceResponse
 * //   errorEntries: [ // AssociateClientDeviceWithCoreDeviceErrorList
 * //     { // AssociateClientDeviceWithCoreDeviceErrorEntry
 * //       thingName: "STRING_VALUE",
 * //       code: "STRING_VALUE",
 * //       message: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchAssociateClientDeviceWithCoreDeviceCommandInput - {@link BatchAssociateClientDeviceWithCoreDeviceCommandInput}
 * @returns {@link BatchAssociateClientDeviceWithCoreDeviceCommandOutput}
 * @see {@link BatchAssociateClientDeviceWithCoreDeviceCommandInput} for command's `input` shape.
 * @see {@link BatchAssociateClientDeviceWithCoreDeviceCommandOutput} for command's `response` shape.
 * @see {@link GreengrassV2ClientResolvedConfig | config} for GreengrassV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>IoT Greengrass can't process your request right now. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a request rate quota. For example, you might have exceeded the
 *       amount of times that you can retrieve device or deployment status per second.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *       unsupported characters.</p>
 *
 * @throws {@link GreengrassV2ServiceException}
 * <p>Base exception class for all service exceptions from GreengrassV2 service.</p>
 *
 */
export class BatchAssociateClientDeviceWithCoreDeviceCommand extends $Command<
  BatchAssociateClientDeviceWithCoreDeviceCommandInput,
  BatchAssociateClientDeviceWithCoreDeviceCommandOutput,
  GreengrassV2ClientResolvedConfig
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
  constructor(readonly input: BatchAssociateClientDeviceWithCoreDeviceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GreengrassV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    BatchAssociateClientDeviceWithCoreDeviceCommandInput,
    BatchAssociateClientDeviceWithCoreDeviceCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        BatchAssociateClientDeviceWithCoreDeviceCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassV2Client";
    const commandName = "BatchAssociateClientDeviceWithCoreDeviceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "GreengrassV2",
        operation: "BatchAssociateClientDeviceWithCoreDevice",
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
  private serialize(
    input: BatchAssociateClientDeviceWithCoreDeviceCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_BatchAssociateClientDeviceWithCoreDeviceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchAssociateClientDeviceWithCoreDeviceCommandOutput> {
    return de_BatchAssociateClientDeviceWithCoreDeviceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
