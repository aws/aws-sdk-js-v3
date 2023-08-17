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

import { GreengrassV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassV2Client";
import {
  BatchDisassociateClientDeviceFromCoreDeviceRequest,
  BatchDisassociateClientDeviceFromCoreDeviceResponse,
} from "../models/models_0";
import {
  de_BatchDisassociateClientDeviceFromCoreDeviceCommand,
  se_BatchDisassociateClientDeviceFromCoreDeviceCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchDisassociateClientDeviceFromCoreDeviceCommand}.
 */
export interface BatchDisassociateClientDeviceFromCoreDeviceCommandInput
  extends BatchDisassociateClientDeviceFromCoreDeviceRequest {}
/**
 * @public
 *
 * The output of {@link BatchDisassociateClientDeviceFromCoreDeviceCommand}.
 */
export interface BatchDisassociateClientDeviceFromCoreDeviceCommandOutput
  extends BatchDisassociateClientDeviceFromCoreDeviceResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Disassociates a list of client devices from a core device. After you disassociate a client
 *       device from a core device, the client device won't be able to use cloud discovery to retrieve
 *       the core device's connectivity information and certificates.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassV2Client, BatchDisassociateClientDeviceFromCoreDeviceCommand } from "@aws-sdk/client-greengrassv2"; // ES Modules import
 * // const { GreengrassV2Client, BatchDisassociateClientDeviceFromCoreDeviceCommand } = require("@aws-sdk/client-greengrassv2"); // CommonJS import
 * const client = new GreengrassV2Client(config);
 * const input = { // BatchDisassociateClientDeviceFromCoreDeviceRequest
 *   entries: [ // DisassociateClientDeviceFromCoreDeviceEntryList
 *     { // DisassociateClientDeviceFromCoreDeviceEntry
 *       thingName: "STRING_VALUE", // required
 *     },
 *   ],
 *   coreDeviceThingName: "STRING_VALUE", // required
 * };
 * const command = new BatchDisassociateClientDeviceFromCoreDeviceCommand(input);
 * const response = await client.send(command);
 * // { // BatchDisassociateClientDeviceFromCoreDeviceResponse
 * //   errorEntries: [ // DisassociateClientDeviceFromCoreDeviceErrorList
 * //     { // DisassociateClientDeviceFromCoreDeviceErrorEntry
 * //       thingName: "STRING_VALUE",
 * //       code: "STRING_VALUE",
 * //       message: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchDisassociateClientDeviceFromCoreDeviceCommandInput - {@link BatchDisassociateClientDeviceFromCoreDeviceCommandInput}
 * @returns {@link BatchDisassociateClientDeviceFromCoreDeviceCommandOutput}
 * @see {@link BatchDisassociateClientDeviceFromCoreDeviceCommandInput} for command's `input` shape.
 * @see {@link BatchDisassociateClientDeviceFromCoreDeviceCommandOutput} for command's `response` shape.
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
export class BatchDisassociateClientDeviceFromCoreDeviceCommand extends $Command<
  BatchDisassociateClientDeviceFromCoreDeviceCommandInput,
  BatchDisassociateClientDeviceFromCoreDeviceCommandOutput,
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
  constructor(readonly input: BatchDisassociateClientDeviceFromCoreDeviceCommandInput) {
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
    BatchDisassociateClientDeviceFromCoreDeviceCommandInput,
    BatchDisassociateClientDeviceFromCoreDeviceCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        BatchDisassociateClientDeviceFromCoreDeviceCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassV2Client";
    const commandName = "BatchDisassociateClientDeviceFromCoreDeviceCommand";
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
    input: BatchDisassociateClientDeviceFromCoreDeviceCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_BatchDisassociateClientDeviceFromCoreDeviceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchDisassociateClientDeviceFromCoreDeviceCommandOutput> {
    return de_BatchDisassociateClientDeviceFromCoreDeviceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
