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
  SdkStreamSerdeContext as __SdkStreamSerdeContext,
  SerdeContext as __SerdeContext,
  StreamingBlobPayloadOutputTypes,
} from "@smithy/types";

import { MedicalImagingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MedicalImagingClient";
import {
  GetImageFrameRequest,
  GetImageFrameResponse,
  GetImageFrameResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GetImageFrameCommand, se_GetImageFrameCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetImageFrameCommand}.
 */
export interface GetImageFrameCommandInput extends GetImageFrameRequest {}
/**
 * @public
 *
 * The output of {@link GetImageFrameCommand}.
 */
export interface GetImageFrameCommandOutput extends Omit<GetImageFrameResponse, "imageFrameBlob">, __MetadataBearer {
  imageFrameBlob: StreamingBlobPayloadOutputTypes;
}

/**
 * @public
 * <p>Get an image frame (pixel data) for an image set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MedicalImagingClient, GetImageFrameCommand } from "@aws-sdk/client-medical-imaging"; // ES Modules import
 * // const { MedicalImagingClient, GetImageFrameCommand } = require("@aws-sdk/client-medical-imaging"); // CommonJS import
 * const client = new MedicalImagingClient(config);
 * const input = { // GetImageFrameRequest
 *   datastoreId: "STRING_VALUE", // required
 *   imageSetId: "STRING_VALUE", // required
 *   imageFrameInformation: { // ImageFrameInformation
 *     imageFrameId: "STRING_VALUE", // required
 *   },
 * };
 * const command = new GetImageFrameCommand(input);
 * const response = await client.send(command);
 * // { // GetImageFrameResponse
 * //   imageFrameBlob: "STREAMING_BLOB_VALUE", // required
 * //   contentType: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetImageFrameCommandInput - {@link GetImageFrameCommandInput}
 * @returns {@link GetImageFrameCommandOutput}
 * @see {@link GetImageFrameCommandInput} for command's `input` shape.
 * @see {@link GetImageFrameCommandOutput} for command's `response` shape.
 * @see {@link MedicalImagingClientResolvedConfig | config} for MedicalImagingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during processing of the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource which does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link MedicalImagingServiceException}
 * <p>Base exception class for all service exceptions from MedicalImaging service.</p>
 *
 */
export class GetImageFrameCommand extends $Command<
  GetImageFrameCommandInput,
  GetImageFrameCommandOutput,
  MedicalImagingClientResolvedConfig
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
  constructor(readonly input: GetImageFrameCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MedicalImagingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetImageFrameCommandInput, GetImageFrameCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetImageFrameCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MedicalImagingClient";
    const commandName = "GetImageFrameCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetImageFrameResponseFilterSensitiveLog,
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
  private serialize(input: GetImageFrameCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetImageFrameCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext & __SdkStreamSerdeContext
  ): Promise<GetImageFrameCommandOutput> {
    return de_GetImageFrameCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
