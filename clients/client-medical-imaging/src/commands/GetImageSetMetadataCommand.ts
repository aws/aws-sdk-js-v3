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
  SMITHY_CONTEXT_KEY,
  StreamingBlobPayloadOutputTypes,
} from "@smithy/types";

import { MedicalImagingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MedicalImagingClient";
import {
  GetImageSetMetadataRequest,
  GetImageSetMetadataResponse,
  GetImageSetMetadataResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GetImageSetMetadataCommand, se_GetImageSetMetadataCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetImageSetMetadataCommand}.
 */
export interface GetImageSetMetadataCommandInput extends GetImageSetMetadataRequest {}
/**
 * @public
 *
 * The output of {@link GetImageSetMetadataCommand}.
 */
export interface GetImageSetMetadataCommandOutput
  extends Omit<GetImageSetMetadataResponse, "imageSetMetadataBlob">,
    __MetadataBearer {
  imageSetMetadataBlob: StreamingBlobPayloadOutputTypes;
}

/**
 * @public
 * <p>Get metadata attributes for an image set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MedicalImagingClient, GetImageSetMetadataCommand } from "@aws-sdk/client-medical-imaging"; // ES Modules import
 * // const { MedicalImagingClient, GetImageSetMetadataCommand } = require("@aws-sdk/client-medical-imaging"); // CommonJS import
 * const client = new MedicalImagingClient(config);
 * const input = { // GetImageSetMetadataRequest
 *   datastoreId: "STRING_VALUE", // required
 *   imageSetId: "STRING_VALUE", // required
 *   versionId: "STRING_VALUE",
 * };
 * const command = new GetImageSetMetadataCommand(input);
 * const response = await client.send(command);
 * // { // GetImageSetMetadataResponse
 * //   imageSetMetadataBlob: "STREAMING_BLOB_VALUE", // required
 * //   contentType: "STRING_VALUE",
 * //   contentEncoding: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetImageSetMetadataCommandInput - {@link GetImageSetMetadataCommandInput}
 * @returns {@link GetImageSetMetadataCommandOutput}
 * @see {@link GetImageSetMetadataCommandInput} for command's `input` shape.
 * @see {@link GetImageSetMetadataCommandOutput} for command's `response` shape.
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
export class GetImageSetMetadataCommand extends $Command<
  GetImageSetMetadataCommandInput,
  GetImageSetMetadataCommandOutput,
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
  constructor(readonly input: GetImageSetMetadataCommandInput) {
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
  ): Handler<GetImageSetMetadataCommandInput, GetImageSetMetadataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetImageSetMetadataCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MedicalImagingClient";
    const commandName = "GetImageSetMetadataCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetImageSetMetadataResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AHIGatewayService",
        operation: "GetImageSetMetadata",
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
  private serialize(input: GetImageSetMetadataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetImageSetMetadataCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext & __SdkStreamSerdeContext
  ): Promise<GetImageSetMetadataCommandOutput> {
    return de_GetImageSetMetadataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
