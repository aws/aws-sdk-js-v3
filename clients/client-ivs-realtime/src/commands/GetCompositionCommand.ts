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

import { IVSRealTimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IVSRealTimeClient";
import { GetCompositionRequest, GetCompositionResponse } from "../models/models_0";
import { de_GetCompositionCommand, se_GetCompositionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetCompositionCommand}.
 */
export interface GetCompositionCommandInput extends GetCompositionRequest {}
/**
 * @public
 *
 * The output of {@link GetCompositionCommand}.
 */
export interface GetCompositionCommandOutput extends GetCompositionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Get information about the specified Composition resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IVSRealTimeClient, GetCompositionCommand } from "@aws-sdk/client-ivs-realtime"; // ES Modules import
 * // const { IVSRealTimeClient, GetCompositionCommand } = require("@aws-sdk/client-ivs-realtime"); // CommonJS import
 * const client = new IVSRealTimeClient(config);
 * const input = { // GetCompositionRequest
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new GetCompositionCommand(input);
 * const response = await client.send(command);
 * // { // GetCompositionResponse
 * //   composition: { // Composition
 * //     arn: "STRING_VALUE", // required
 * //     stageArn: "STRING_VALUE", // required
 * //     state: "STRING_VALUE", // required
 * //     layout: { // LayoutConfiguration
 * //       grid: { // GridConfiguration
 * //         featuredParticipantAttribute: "STRING_VALUE",
 * //       },
 * //     },
 * //     destinations: [ // DestinationList // required
 * //       { // Destination
 * //         id: "STRING_VALUE", // required
 * //         state: "STRING_VALUE", // required
 * //         startTime: new Date("TIMESTAMP"),
 * //         endTime: new Date("TIMESTAMP"),
 * //         configuration: { // DestinationConfiguration
 * //           name: "STRING_VALUE",
 * //           channel: { // ChannelDestinationConfiguration
 * //             channelArn: "STRING_VALUE", // required
 * //             encoderConfigurationArn: "STRING_VALUE",
 * //           },
 * //           s3: { // S3DestinationConfiguration
 * //             storageConfigurationArn: "STRING_VALUE", // required
 * //             encoderConfigurationArns: [ // EncoderConfigurationArnList // required
 * //               "STRING_VALUE",
 * //             ],
 * //             recordingConfiguration: { // RecordingConfiguration
 * //               format: "STRING_VALUE",
 * //             },
 * //           },
 * //         },
 * //         detail: { // DestinationDetail
 * //           s3: { // S3Detail
 * //             recordingPrefix: "STRING_VALUE", // required
 * //           },
 * //         },
 * //       },
 * //     ],
 * //     tags: { // Tags
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     startTime: new Date("TIMESTAMP"),
 * //     endTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetCompositionCommandInput - {@link GetCompositionCommandInput}
 * @returns {@link GetCompositionCommandOutput}
 * @see {@link GetCompositionCommandInput} for command's `input` shape.
 * @see {@link GetCompositionCommandOutput} for command's `response` shape.
 * @see {@link IVSRealTimeClientResolvedConfig | config} for IVSRealTimeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p/>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p/>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p/>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p/>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p/>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p/>
 *
 * @throws {@link IVSRealTimeServiceException}
 * <p>Base exception class for all service exceptions from IVSRealTime service.</p>
 *
 */
export class GetCompositionCommand extends $Command<
  GetCompositionCommandInput,
  GetCompositionCommandOutput,
  IVSRealTimeClientResolvedConfig
> {
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
  constructor(readonly input: GetCompositionCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IVSRealTimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetCompositionCommandInput, GetCompositionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetCompositionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IVSRealTimeClient";
    const commandName = "GetCompositionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonInteractiveVideoServiceRealTime",
        operation: "GetComposition",
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
  private serialize(input: GetCompositionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetCompositionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetCompositionCommandOutput> {
    return de_GetCompositionCommand(output, context);
  }
}
