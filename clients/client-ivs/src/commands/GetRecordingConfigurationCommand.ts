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

import { IvsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IvsClient";
import { GetRecordingConfigurationRequest, GetRecordingConfigurationResponse } from "../models/models_0";
import { de_GetRecordingConfigurationCommand, se_GetRecordingConfigurationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetRecordingConfigurationCommand}.
 */
export interface GetRecordingConfigurationCommandInput extends GetRecordingConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetRecordingConfigurationCommand}.
 */
export interface GetRecordingConfigurationCommandOutput extends GetRecordingConfigurationResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets the recording configuration for the specified ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvsClient, GetRecordingConfigurationCommand } from "@aws-sdk/client-ivs"; // ES Modules import
 * // const { IvsClient, GetRecordingConfigurationCommand } = require("@aws-sdk/client-ivs"); // CommonJS import
 * const client = new IvsClient(config);
 * const input = { // GetRecordingConfigurationRequest
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new GetRecordingConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetRecordingConfigurationResponse
 * //   recordingConfiguration: { // RecordingConfiguration
 * //     arn: "STRING_VALUE", // required
 * //     name: "STRING_VALUE",
 * //     destinationConfiguration: { // DestinationConfiguration
 * //       s3: { // S3DestinationConfiguration
 * //         bucketName: "STRING_VALUE", // required
 * //       },
 * //     },
 * //     state: "STRING_VALUE", // required
 * //     tags: { // Tags
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     thumbnailConfiguration: { // ThumbnailConfiguration
 * //       recordingMode: "STRING_VALUE",
 * //       targetIntervalSeconds: Number("long"),
 * //       resolution: "STRING_VALUE",
 * //       storage: [ // ThumbnailConfigurationStorageList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     recordingReconnectWindowSeconds: Number("int"),
 * //     renditionConfiguration: { // RenditionConfiguration
 * //       renditionSelection: "STRING_VALUE",
 * //       renditions: [ // RenditionConfigurationRenditionList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetRecordingConfigurationCommandInput - {@link GetRecordingConfigurationCommandInput}
 * @returns {@link GetRecordingConfigurationCommandOutput}
 * @see {@link GetRecordingConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetRecordingConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IvsClientResolvedConfig | config} for IvsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p/>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p/>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p/>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p/>
 *
 * @throws {@link IvsServiceException}
 * <p>Base exception class for all service exceptions from Ivs service.</p>
 *
 */
export class GetRecordingConfigurationCommand extends $Command<
  GetRecordingConfigurationCommandInput,
  GetRecordingConfigurationCommandOutput,
  IvsClientResolvedConfig
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
  constructor(readonly input: GetRecordingConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IvsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetRecordingConfigurationCommandInput, GetRecordingConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetRecordingConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IvsClient";
    const commandName = "GetRecordingConfigurationCommand";
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
  private serialize(input: GetRecordingConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetRecordingConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetRecordingConfigurationCommandOutput> {
    return de_GetRecordingConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
