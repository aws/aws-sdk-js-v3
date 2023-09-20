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

import { IoTFleetWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTFleetWiseClient";
import { CreateDecoderManifestRequest, CreateDecoderManifestResponse } from "../models/models_0";
import { de_CreateDecoderManifestCommand, se_CreateDecoderManifestCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateDecoderManifestCommand}.
 */
export interface CreateDecoderManifestCommandInput extends CreateDecoderManifestRequest {}
/**
 * @public
 *
 * The output of {@link CreateDecoderManifestCommand}.
 */
export interface CreateDecoderManifestCommandOutput extends CreateDecoderManifestResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates the decoder manifest associated with a model manifest. To create a decoder
 *             manifest, the following must be true:</p>
 *         <ul>
 *             <li>
 *                 <p>Every signal decoder has a unique name.</p>
 *             </li>
 *             <li>
 *                 <p>Each signal decoder is associated with a network interface.</p>
 *             </li>
 *             <li>
 *                 <p>Each network interface has a unique ID.</p>
 *             </li>
 *             <li>
 *                 <p>The signal decoders are specified in the model manifest.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, CreateDecoderManifestCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, CreateDecoderManifestCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * const client = new IoTFleetWiseClient(config);
 * const input = { // CreateDecoderManifestRequest
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   modelManifestArn: "STRING_VALUE", // required
 *   signalDecoders: [ // SignalDecoders
 *     { // SignalDecoder
 *       fullyQualifiedName: "STRING_VALUE", // required
 *       type: "STRING_VALUE", // required
 *       interfaceId: "STRING_VALUE", // required
 *       canSignal: { // CanSignal
 *         messageId: Number("int"), // required
 *         isBigEndian: true || false, // required
 *         isSigned: true || false, // required
 *         startBit: Number("int"), // required
 *         offset: Number("double"), // required
 *         factor: Number("double"), // required
 *         length: Number("int"), // required
 *         name: "STRING_VALUE",
 *       },
 *       obdSignal: { // ObdSignal
 *         pidResponseLength: Number("int"), // required
 *         serviceMode: Number("int"), // required
 *         pid: Number("int"), // required
 *         scaling: Number("double"), // required
 *         offset: Number("double"), // required
 *         startByte: Number("int"), // required
 *         byteLength: Number("int"), // required
 *         bitRightShift: Number("int"),
 *         bitMaskLength: Number("int"),
 *       },
 *     },
 *   ],
 *   networkInterfaces: [ // NetworkInterfaces
 *     { // NetworkInterface
 *       interfaceId: "STRING_VALUE", // required
 *       type: "STRING_VALUE", // required
 *       canInterface: { // CanInterface
 *         name: "STRING_VALUE", // required
 *         protocolName: "STRING_VALUE",
 *         protocolVersion: "STRING_VALUE",
 *       },
 *       obdInterface: { // ObdInterface
 *         name: "STRING_VALUE", // required
 *         requestMessageId: Number("int"), // required
 *         obdStandard: "STRING_VALUE",
 *         pidRequestIntervalSeconds: Number("int"),
 *         dtcRequestIntervalSeconds: Number("int"),
 *         useExtendedIds: true || false,
 *         hasTransmissionEcu: true || false,
 *       },
 *     },
 *   ],
 *   tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateDecoderManifestCommand(input);
 * const response = await client.send(command);
 * // { // CreateDecoderManifestResponse
 * //   name: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateDecoderManifestCommandInput - {@link CreateDecoderManifestCommandInput}
 * @returns {@link CreateDecoderManifestCommandOutput}
 * @see {@link CreateDecoderManifestCommandInput} for command's `input` shape.
 * @see {@link CreateDecoderManifestCommandOutput} for command's `response` shape.
 * @see {@link IoTFleetWiseClientResolvedConfig | config} for IoTFleetWiseClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permission to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request has conflicting operations. This can occur if you're trying to perform
 *             more than one operation on the same resource at the same time.</p>
 *
 * @throws {@link DecoderManifestValidationException} (client fault)
 *  <p>The request couldn't be completed because it contains signal decoders with one or more validation errors.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A service quota was exceeded. </p>
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
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request couldn't be completed because the server temporarily failed.</p>
 *
 * @throws {@link IoTFleetWiseServiceException}
 * <p>Base exception class for all service exceptions from IoTFleetWise service.</p>
 *
 */
export class CreateDecoderManifestCommand extends $Command<
  CreateDecoderManifestCommandInput,
  CreateDecoderManifestCommandOutput,
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
  constructor(readonly input: CreateDecoderManifestCommandInput) {
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
  ): Handler<CreateDecoderManifestCommandInput, CreateDecoderManifestCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateDecoderManifestCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTFleetWiseClient";
    const commandName = "CreateDecoderManifestCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "IoTAutobahnControlPlane",
        operation: "CreateDecoderManifest",
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
  private serialize(input: CreateDecoderManifestCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateDecoderManifestCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDecoderManifestCommandOutput> {
    return de_CreateDecoderManifestCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
