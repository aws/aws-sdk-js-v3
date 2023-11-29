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

import { CleanRoomsMLClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsMLClient";
import { UpdateConfiguredAudienceModelRequest, UpdateConfiguredAudienceModelResponse } from "../models/models_0";
import {
  de_UpdateConfiguredAudienceModelCommand,
  se_UpdateConfiguredAudienceModelCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateConfiguredAudienceModelCommand}.
 */
export interface UpdateConfiguredAudienceModelCommandInput extends UpdateConfiguredAudienceModelRequest {}
/**
 * @public
 *
 * The output of {@link UpdateConfiguredAudienceModelCommand}.
 */
export interface UpdateConfiguredAudienceModelCommandOutput
  extends UpdateConfiguredAudienceModelResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Provides the information necessary to update a configured audience model. Updates that impact audience generation jobs take effect when a new job starts, but do not impact currently running jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsMLClient, UpdateConfiguredAudienceModelCommand } from "@aws-sdk/client-cleanroomsml"; // ES Modules import
 * // const { CleanRoomsMLClient, UpdateConfiguredAudienceModelCommand } = require("@aws-sdk/client-cleanroomsml"); // CommonJS import
 * const client = new CleanRoomsMLClient(config);
 * const input = { // UpdateConfiguredAudienceModelRequest
 *   configuredAudienceModelArn: "STRING_VALUE", // required
 *   outputConfig: { // ConfiguredAudienceModelOutputConfig
 *     destination: { // AudienceDestination
 *       s3Destination: { // S3ConfigMap
 *         s3Uri: "STRING_VALUE", // required
 *       },
 *     },
 *     roleArn: "STRING_VALUE", // required
 *   },
 *   audienceModelArn: "STRING_VALUE",
 *   sharedAudienceMetrics: [ // MetricsList
 *     "ALL" || "NONE",
 *   ],
 *   minMatchingSeedSize: Number("int"),
 *   audienceSizeConfig: { // AudienceSizeConfig
 *     audienceSizeType: "ABSOLUTE" || "PERCENTAGE", // required
 *     audienceSizeBins: [ // AudienceSizeBins // required
 *       Number("int"),
 *     ],
 *   },
 *   description: "STRING_VALUE",
 * };
 * const command = new UpdateConfiguredAudienceModelCommand(input);
 * const response = await client.send(command);
 * // { // UpdateConfiguredAudienceModelResponse
 * //   configuredAudienceModelArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateConfiguredAudienceModelCommandInput - {@link UpdateConfiguredAudienceModelCommandInput}
 * @returns {@link UpdateConfiguredAudienceModelCommandOutput}
 * @see {@link UpdateConfiguredAudienceModelCommandInput} for command's `input` shape.
 * @see {@link UpdateConfiguredAudienceModelCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsMLClientResolvedConfig | config} for CleanRoomsMLClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A resource with that name already exists in this region.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource you are requesting does not exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request parameters for this request are incorrect.</p>
 *
 * @throws {@link CleanRoomsMLServiceException}
 * <p>Base exception class for all service exceptions from CleanRoomsML service.</p>
 *
 */
export class UpdateConfiguredAudienceModelCommand extends $Command<
  UpdateConfiguredAudienceModelCommandInput,
  UpdateConfiguredAudienceModelCommandOutput,
  CleanRoomsMLClientResolvedConfig
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
  constructor(readonly input: UpdateConfiguredAudienceModelCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CleanRoomsMLClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateConfiguredAudienceModelCommandInput, UpdateConfiguredAudienceModelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateConfiguredAudienceModelCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CleanRoomsMLClient";
    const commandName = "UpdateConfiguredAudienceModelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSStarkControlService",
        operation: "UpdateConfiguredAudienceModel",
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
  private serialize(input: UpdateConfiguredAudienceModelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateConfiguredAudienceModelCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateConfiguredAudienceModelCommandOutput> {
    return de_UpdateConfiguredAudienceModelCommand(output, context);
  }
}
