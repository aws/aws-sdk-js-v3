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
import { StartCompositionRequest, StartCompositionResponse } from "../models/models_0";
import { de_StartCompositionCommand, se_StartCompositionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartCompositionCommand}.
 */
export interface StartCompositionCommandInput extends StartCompositionRequest {}
/**
 * @public
 *
 * The output of {@link StartCompositionCommand}.
 */
export interface StartCompositionCommandOutput extends StartCompositionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Starts a Composition from a stage based on the configuration provided in the
 *          request.</p>
 *          <p>A Composition is an ephemeral resource that exists after this endpoint returns
 *          successfully. Composition stops and the resource is deleted:</p>
 *          <ul>
 *             <li>
 *                <p>When <a>StopComposition</a> is called.</p>
 *             </li>
 *             <li>
 *                <p>After a 1-minute timeout, when all participants are disconnected from the
 *                stage.</p>
 *             </li>
 *             <li>
 *                <p>After a 1-minute timeout, if there are no participants in the stage when
 *                StartComposition is called.</p>
 *             </li>
 *             <li>
 *                <p>When broadcasting to the IVS channel fails and all retries are exhausted.</p>
 *             </li>
 *             <li>
 *                <p>When broadcasting is disconnected and all attempts to reconnect are
 *                exhausted.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IVSRealTimeClient, StartCompositionCommand } from "@aws-sdk/client-ivs-realtime"; // ES Modules import
 * // const { IVSRealTimeClient, StartCompositionCommand } = require("@aws-sdk/client-ivs-realtime"); // CommonJS import
 * const client = new IVSRealTimeClient(config);
 * const input = { // StartCompositionRequest
 *   stageArn: "STRING_VALUE", // required
 *   idempotencyToken: "STRING_VALUE",
 *   layout: { // LayoutConfiguration
 *     grid: { // GridConfiguration
 *       featuredParticipantAttribute: "STRING_VALUE",
 *     },
 *   },
 *   destinations: [ // DestinationConfigurationList // required
 *     { // DestinationConfiguration
 *       name: "STRING_VALUE",
 *       channel: { // ChannelDestinationConfiguration
 *         channelArn: "STRING_VALUE", // required
 *         encoderConfigurationArn: "STRING_VALUE",
 *       },
 *       s3: { // S3DestinationConfiguration
 *         storageConfigurationArn: "STRING_VALUE", // required
 *         encoderConfigurationArns: [ // EncoderConfigurationArnList // required
 *           "STRING_VALUE",
 *         ],
 *         recordingConfiguration: { // RecordingConfiguration
 *           format: "STRING_VALUE",
 *         },
 *       },
 *     },
 *   ],
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new StartCompositionCommand(input);
 * const response = await client.send(command);
 * // { // StartCompositionResponse
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
 * @param StartCompositionCommandInput - {@link StartCompositionCommandInput}
 * @returns {@link StartCompositionCommandOutput}
 * @see {@link StartCompositionCommandInput} for command's `input` shape.
 * @see {@link StartCompositionCommandOutput} for command's `response` shape.
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
 * @throws {@link PendingVerification} (client fault)
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
export class StartCompositionCommand extends $Command<
  StartCompositionCommandInput,
  StartCompositionCommandOutput,
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
  constructor(readonly input: StartCompositionCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IVSRealTimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartCompositionCommandInput, StartCompositionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartCompositionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IVSRealTimeClient";
    const commandName = "StartCompositionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonInteractiveVideoServiceRealTime",
        operation: "StartComposition",
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
  private serialize(input: StartCompositionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartCompositionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartCompositionCommandOutput> {
    return de_StartCompositionCommand(output, context);
  }
}
