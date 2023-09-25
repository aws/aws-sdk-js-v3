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

import {
  ChimeSDKMediaPipelinesClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ChimeSDKMediaPipelinesClient";
import {
  CreateMediaPipelineKinesisVideoStreamPoolRequest,
  CreateMediaPipelineKinesisVideoStreamPoolRequestFilterSensitiveLog,
  CreateMediaPipelineKinesisVideoStreamPoolResponse,
  CreateMediaPipelineKinesisVideoStreamPoolResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  de_CreateMediaPipelineKinesisVideoStreamPoolCommand,
  se_CreateMediaPipelineKinesisVideoStreamPoolCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateMediaPipelineKinesisVideoStreamPoolCommand}.
 */
export interface CreateMediaPipelineKinesisVideoStreamPoolCommandInput
  extends CreateMediaPipelineKinesisVideoStreamPoolRequest {}
/**
 * @public
 *
 * The output of {@link CreateMediaPipelineKinesisVideoStreamPoolCommand}.
 */
export interface CreateMediaPipelineKinesisVideoStreamPoolCommandOutput
  extends CreateMediaPipelineKinesisVideoStreamPoolResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Creates an Kinesis video stream pool for the media pipeline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMediaPipelinesClient, CreateMediaPipelineKinesisVideoStreamPoolCommand } from "@aws-sdk/client-chime-sdk-media-pipelines"; // ES Modules import
 * // const { ChimeSDKMediaPipelinesClient, CreateMediaPipelineKinesisVideoStreamPoolCommand } = require("@aws-sdk/client-chime-sdk-media-pipelines"); // CommonJS import
 * const client = new ChimeSDKMediaPipelinesClient(config);
 * const input = { // CreateMediaPipelineKinesisVideoStreamPoolRequest
 *   StreamConfiguration: { // KinesisVideoStreamConfiguration
 *     Region: "STRING_VALUE", // required
 *     DataRetentionInHours: Number("int"),
 *   },
 *   PoolName: "STRING_VALUE", // required
 *   ClientRequestToken: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateMediaPipelineKinesisVideoStreamPoolCommand(input);
 * const response = await client.send(command);
 * // { // CreateMediaPipelineKinesisVideoStreamPoolResponse
 * //   KinesisVideoStreamPoolConfiguration: { // KinesisVideoStreamPoolConfiguration
 * //     PoolArn: "STRING_VALUE",
 * //     PoolName: "STRING_VALUE",
 * //     PoolId: "STRING_VALUE",
 * //     PoolStatus: "CREATING" || "ACTIVE" || "UPDATING" || "DELETING" || "FAILED",
 * //     PoolSize: Number("int"),
 * //     StreamConfiguration: { // KinesisVideoStreamConfiguration
 * //       Region: "STRING_VALUE", // required
 * //       DataRetentionInHours: Number("int"),
 * //     },
 * //     CreatedTimestamp: new Date("TIMESTAMP"),
 * //     UpdatedTimestamp: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateMediaPipelineKinesisVideoStreamPoolCommandInput - {@link CreateMediaPipelineKinesisVideoStreamPoolCommandInput}
 * @returns {@link CreateMediaPipelineKinesisVideoStreamPoolCommandOutput}
 * @see {@link CreateMediaPipelineKinesisVideoStreamPoolCommandInput} for command's `input` shape.
 * @see {@link CreateMediaPipelineKinesisVideoStreamPoolCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKMediaPipelinesClientResolvedConfig | config} for ChimeSDKMediaPipelinesClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be processed because of conflict in the current state of the
 *          resource.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>The request exceeds the resource limit.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottledClientException} (client fault)
 *  <p>The client exceeded its request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client is not currently authorized to make the request.</p>
 *
 * @throws {@link ChimeSDKMediaPipelinesServiceException}
 * <p>Base exception class for all service exceptions from ChimeSDKMediaPipelines service.</p>
 *
 */
export class CreateMediaPipelineKinesisVideoStreamPoolCommand extends $Command<
  CreateMediaPipelineKinesisVideoStreamPoolCommandInput,
  CreateMediaPipelineKinesisVideoStreamPoolCommandOutput,
  ChimeSDKMediaPipelinesClientResolvedConfig
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
  constructor(readonly input: CreateMediaPipelineKinesisVideoStreamPoolCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeSDKMediaPipelinesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    CreateMediaPipelineKinesisVideoStreamPoolCommandInput,
    CreateMediaPipelineKinesisVideoStreamPoolCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        CreateMediaPipelineKinesisVideoStreamPoolCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeSDKMediaPipelinesClient";
    const commandName = "CreateMediaPipelineKinesisVideoStreamPoolCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateMediaPipelineKinesisVideoStreamPoolRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateMediaPipelineKinesisVideoStreamPoolResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "ChimeSDKMediaPipelinesService",
        operation: "CreateMediaPipelineKinesisVideoStreamPool",
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
    input: CreateMediaPipelineKinesisVideoStreamPoolCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_CreateMediaPipelineKinesisVideoStreamPoolCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateMediaPipelineKinesisVideoStreamPoolCommandOutput> {
    return de_CreateMediaPipelineKinesisVideoStreamPoolCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
