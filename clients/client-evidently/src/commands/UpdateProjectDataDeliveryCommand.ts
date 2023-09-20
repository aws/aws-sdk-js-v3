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

import { EvidentlyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EvidentlyClient";
import { UpdateProjectDataDeliveryRequest, UpdateProjectDataDeliveryResponse } from "../models/models_0";
import { de_UpdateProjectDataDeliveryCommand, se_UpdateProjectDataDeliveryCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateProjectDataDeliveryCommand}.
 */
export interface UpdateProjectDataDeliveryCommandInput extends UpdateProjectDataDeliveryRequest {}
/**
 * @public
 *
 * The output of {@link UpdateProjectDataDeliveryCommand}.
 */
export interface UpdateProjectDataDeliveryCommandOutput extends UpdateProjectDataDeliveryResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates the data storage options for this project. If you store evaluation events, you an
 *       keep them and analyze them on your own. If you choose not to store evaluation events,
 *       Evidently deletes them after using them to produce metrics and other experiment results that
 *       you can view.</p>
 *          <p>You can't specify both <code>cloudWatchLogs</code> and <code>s3Destination</code> in the same operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EvidentlyClient, UpdateProjectDataDeliveryCommand } from "@aws-sdk/client-evidently"; // ES Modules import
 * // const { EvidentlyClient, UpdateProjectDataDeliveryCommand } = require("@aws-sdk/client-evidently"); // CommonJS import
 * const client = new EvidentlyClient(config);
 * const input = { // UpdateProjectDataDeliveryRequest
 *   project: "STRING_VALUE", // required
 *   s3Destination: { // S3DestinationConfig
 *     bucket: "STRING_VALUE",
 *     prefix: "STRING_VALUE",
 *   },
 *   cloudWatchLogs: { // CloudWatchLogsDestinationConfig
 *     logGroup: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateProjectDataDeliveryCommand(input);
 * const response = await client.send(command);
 * // { // UpdateProjectDataDeliveryResponse
 * //   project: { // Project
 * //     arn: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     status: "STRING_VALUE", // required
 * //     description: "STRING_VALUE",
 * //     createdTime: new Date("TIMESTAMP"), // required
 * //     lastUpdatedTime: new Date("TIMESTAMP"), // required
 * //     featureCount: Number("long"),
 * //     launchCount: Number("long"),
 * //     activeLaunchCount: Number("long"),
 * //     experimentCount: Number("long"),
 * //     activeExperimentCount: Number("long"),
 * //     dataDelivery: { // ProjectDataDelivery
 * //       s3Destination: { // S3Destination
 * //         bucket: "STRING_VALUE",
 * //         prefix: "STRING_VALUE",
 * //       },
 * //       cloudWatchLogs: { // CloudWatchLogsDestination
 * //         logGroup: "STRING_VALUE",
 * //       },
 * //     },
 * //     appConfigResource: { // ProjectAppConfigResource
 * //       applicationId: "STRING_VALUE", // required
 * //       environmentId: "STRING_VALUE", // required
 * //       configurationProfileId: "STRING_VALUE", // required
 * //     },
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateProjectDataDeliveryCommandInput - {@link UpdateProjectDataDeliveryCommandInput}
 * @returns {@link UpdateProjectDataDeliveryCommandOutput}
 * @see {@link UpdateProjectDataDeliveryCommandInput} for command's `input` shape.
 * @see {@link UpdateProjectDataDeliveryCommandOutput} for command's `response` shape.
 * @see {@link EvidentlyClientResolvedConfig | config} for EvidentlyClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A resource was in an inconsistent state during an update or a deletion.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that does not exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would cause a service quota to be exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The value of a parameter in the request caused an error.</p>
 *
 * @throws {@link EvidentlyServiceException}
 * <p>Base exception class for all service exceptions from Evidently service.</p>
 *
 */
export class UpdateProjectDataDeliveryCommand extends $Command<
  UpdateProjectDataDeliveryCommandInput,
  UpdateProjectDataDeliveryCommandOutput,
  EvidentlyClientResolvedConfig
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
  constructor(readonly input: UpdateProjectDataDeliveryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EvidentlyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateProjectDataDeliveryCommandInput, UpdateProjectDataDeliveryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateProjectDataDeliveryCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EvidentlyClient";
    const commandName = "UpdateProjectDataDeliveryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Evidently",
        operation: "UpdateProjectDataDelivery",
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
  private serialize(input: UpdateProjectDataDeliveryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateProjectDataDeliveryCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateProjectDataDeliveryCommandOutput> {
    return de_UpdateProjectDataDeliveryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
