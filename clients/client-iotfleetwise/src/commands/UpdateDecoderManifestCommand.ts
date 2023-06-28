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
import { UpdateDecoderManifestRequest, UpdateDecoderManifestResponse } from "../models/models_0";
import { de_UpdateDecoderManifestCommand, se_UpdateDecoderManifestCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateDecoderManifestCommand}.
 */
export interface UpdateDecoderManifestCommandInput extends UpdateDecoderManifestRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDecoderManifestCommand}.
 */
export interface UpdateDecoderManifestCommandOutput extends UpdateDecoderManifestResponse, __MetadataBearer {}

/**
 * @public
 * <p> Updates a decoder manifest.</p>
 *         <p>A decoder manifest can only be updated when the status is <code>DRAFT</code>. Only
 *                 <code>ACTIVE</code> decoder manifests can be associated with vehicles.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, UpdateDecoderManifestCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, UpdateDecoderManifestCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * const client = new IoTFleetWiseClient(config);
 * const input = { // UpdateDecoderManifestRequest
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   signalDecodersToAdd: [ // SignalDecoders
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
 *   signalDecodersToUpdate: [
 *     {
 *       fullyQualifiedName: "STRING_VALUE", // required
 *       type: "STRING_VALUE", // required
 *       interfaceId: "STRING_VALUE", // required
 *       canSignal: {
 *         messageId: Number("int"), // required
 *         isBigEndian: true || false, // required
 *         isSigned: true || false, // required
 *         startBit: Number("int"), // required
 *         offset: Number("double"), // required
 *         factor: Number("double"), // required
 *         length: Number("int"), // required
 *         name: "STRING_VALUE",
 *       },
 *       obdSignal: {
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
 *   signalDecodersToRemove: [ // Fqns
 *     "STRING_VALUE",
 *   ],
 *   networkInterfacesToAdd: [ // NetworkInterfaces
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
 *   networkInterfacesToUpdate: [
 *     {
 *       interfaceId: "STRING_VALUE", // required
 *       type: "STRING_VALUE", // required
 *       canInterface: {
 *         name: "STRING_VALUE", // required
 *         protocolName: "STRING_VALUE",
 *         protocolVersion: "STRING_VALUE",
 *       },
 *       obdInterface: {
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
 *   networkInterfacesToRemove: [ // InterfaceIds
 *     "STRING_VALUE",
 *   ],
 *   status: "STRING_VALUE",
 * };
 * const command = new UpdateDecoderManifestCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDecoderManifestResponse
 * //   name: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateDecoderManifestCommandInput - {@link UpdateDecoderManifestCommandInput}
 * @returns {@link UpdateDecoderManifestCommandOutput}
 * @see {@link UpdateDecoderManifestCommandInput} for command's `input` shape.
 * @see {@link UpdateDecoderManifestCommandOutput} for command's `response` shape.
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
export class UpdateDecoderManifestCommand extends $Command<
  UpdateDecoderManifestCommandInput,
  UpdateDecoderManifestCommandOutput,
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
  constructor(readonly input: UpdateDecoderManifestCommandInput) {
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
  ): Handler<UpdateDecoderManifestCommandInput, UpdateDecoderManifestCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateDecoderManifestCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTFleetWiseClient";
    const commandName = "UpdateDecoderManifestCommand";
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
  private serialize(input: UpdateDecoderManifestCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateDecoderManifestCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateDecoderManifestCommandOutput> {
    return de_UpdateDecoderManifestCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
