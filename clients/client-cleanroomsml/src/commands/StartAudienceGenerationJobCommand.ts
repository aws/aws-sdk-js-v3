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
import { StartAudienceGenerationJobRequest, StartAudienceGenerationJobResponse } from "../models/models_0";
import { de_StartAudienceGenerationJobCommand, se_StartAudienceGenerationJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartAudienceGenerationJobCommand}.
 */
export interface StartAudienceGenerationJobCommandInput extends StartAudienceGenerationJobRequest {}
/**
 * @public
 *
 * The output of {@link StartAudienceGenerationJobCommand}.
 */
export interface StartAudienceGenerationJobCommandOutput extends StartAudienceGenerationJobResponse, __MetadataBearer {}

/**
 * @public
 * <p>Information necessary to start the audience generation job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsMLClient, StartAudienceGenerationJobCommand } from "@aws-sdk/client-cleanroomsml"; // ES Modules import
 * // const { CleanRoomsMLClient, StartAudienceGenerationJobCommand } = require("@aws-sdk/client-cleanroomsml"); // CommonJS import
 * const client = new CleanRoomsMLClient(config);
 * const input = { // StartAudienceGenerationJobRequest
 *   name: "STRING_VALUE", // required
 *   configuredAudienceModelArn: "STRING_VALUE", // required
 *   seedAudience: { // AudienceGenerationJobDataSource
 *     dataSource: { // S3ConfigMap
 *       s3Uri: "STRING_VALUE", // required
 *     },
 *     roleArn: "STRING_VALUE", // required
 *   },
 *   includeSeedInOutput: true || false,
 *   collaborationId: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new StartAudienceGenerationJobCommand(input);
 * const response = await client.send(command);
 * // { // StartAudienceGenerationJobResponse
 * //   audienceGenerationJobArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param StartAudienceGenerationJobCommandInput - {@link StartAudienceGenerationJobCommandInput}
 * @returns {@link StartAudienceGenerationJobCommandOutput}
 * @see {@link StartAudienceGenerationJobCommandInput} for command's `input` shape.
 * @see {@link StartAudienceGenerationJobCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have exceeded your service quota.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request parameters for this request are incorrect.</p>
 *
 * @throws {@link CleanRoomsMLServiceException}
 * <p>Base exception class for all service exceptions from CleanRoomsML service.</p>
 *
 */
export class StartAudienceGenerationJobCommand extends $Command<
  StartAudienceGenerationJobCommandInput,
  StartAudienceGenerationJobCommandOutput,
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
  constructor(readonly input: StartAudienceGenerationJobCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CleanRoomsMLClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartAudienceGenerationJobCommandInput, StartAudienceGenerationJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartAudienceGenerationJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CleanRoomsMLClient";
    const commandName = "StartAudienceGenerationJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSStarkControlService",
        operation: "StartAudienceGenerationJob",
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
  private serialize(input: StartAudienceGenerationJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartAudienceGenerationJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartAudienceGenerationJobCommandOutput> {
    return de_StartAudienceGenerationJobCommand(output, context);
  }
}
