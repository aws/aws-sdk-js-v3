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

import { BatchUpdateRecommendationStatusRequest, BatchUpdateRecommendationStatusResponse } from "../models/models_0";
import {
  de_BatchUpdateRecommendationStatusCommand,
  se_BatchUpdateRecommendationStatusCommand,
} from "../protocols/Aws_restJson1";
import { ResiliencehubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResiliencehubClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchUpdateRecommendationStatusCommand}.
 */
export interface BatchUpdateRecommendationStatusCommandInput extends BatchUpdateRecommendationStatusRequest {}
/**
 * @public
 *
 * The output of {@link BatchUpdateRecommendationStatusCommand}.
 */
export interface BatchUpdateRecommendationStatusCommandOutput
  extends BatchUpdateRecommendationStatusResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Enables you to include or exclude one or more operational recommendations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResiliencehubClient, BatchUpdateRecommendationStatusCommand } from "@aws-sdk/client-resiliencehub"; // ES Modules import
 * // const { ResiliencehubClient, BatchUpdateRecommendationStatusCommand } = require("@aws-sdk/client-resiliencehub"); // CommonJS import
 * const client = new ResiliencehubClient(config);
 * const input = { // BatchUpdateRecommendationStatusRequest
 *   appArn: "STRING_VALUE", // required
 *   requestEntries: [ // UpdateRecommendationStatusRequestEntries // required
 *     { // UpdateRecommendationStatusRequestEntry
 *       entryId: "STRING_VALUE", // required
 *       referenceId: "STRING_VALUE", // required
 *       item: { // UpdateRecommendationStatusItem
 *         resourceId: "STRING_VALUE",
 *         targetAccountId: "STRING_VALUE",
 *         targetRegion: "STRING_VALUE",
 *       },
 *       excluded: true || false, // required
 *       excludeReason: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new BatchUpdateRecommendationStatusCommand(input);
 * const response = await client.send(command);
 * // { // BatchUpdateRecommendationStatusResponse
 * //   appArn: "STRING_VALUE", // required
 * //   successfulEntries: [ // BatchUpdateRecommendationStatusSuccessfulEntries // required
 * //     { // BatchUpdateRecommendationStatusSuccessfulEntry
 * //       entryId: "STRING_VALUE", // required
 * //       referenceId: "STRING_VALUE", // required
 * //       item: { // UpdateRecommendationStatusItem
 * //         resourceId: "STRING_VALUE",
 * //         targetAccountId: "STRING_VALUE",
 * //         targetRegion: "STRING_VALUE",
 * //       },
 * //       excluded: true || false, // required
 * //       excludeReason: "STRING_VALUE",
 * //     },
 * //   ],
 * //   failedEntries: [ // BatchUpdateRecommendationStatusFailedEntries // required
 * //     { // BatchUpdateRecommendationStatusFailedEntry
 * //       entryId: "STRING_VALUE", // required
 * //       errorMessage: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchUpdateRecommendationStatusCommandInput - {@link BatchUpdateRecommendationStatusCommandInput}
 * @returns {@link BatchUpdateRecommendationStatusCommandOutput}
 * @see {@link BatchUpdateRecommendationStatusCommandInput} for command's `input` shape.
 * @see {@link BatchUpdateRecommendationStatusCommandOutput} for command's `response` shape.
 * @see {@link ResiliencehubClientResolvedConfig | config} for ResiliencehubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permissions to perform the requested operation. The user or role that is
 *       making the request must have at least one IAM permissions policy attached that grants the
 *       required permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Resilience Hub
 *       service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception occurs when the specified resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>This exception occurs when you have exceeded the limit on the number of requests per second.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>This exception occurs when a request is not valid.</p>
 *
 * @throws {@link ResiliencehubServiceException}
 * <p>Base exception class for all service exceptions from Resiliencehub service.</p>
 *
 */
export class BatchUpdateRecommendationStatusCommand extends $Command<
  BatchUpdateRecommendationStatusCommandInput,
  BatchUpdateRecommendationStatusCommandOutput,
  ResiliencehubClientResolvedConfig
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
  constructor(readonly input: BatchUpdateRecommendationStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ResiliencehubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchUpdateRecommendationStatusCommandInput, BatchUpdateRecommendationStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchUpdateRecommendationStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ResiliencehubClient";
    const commandName = "BatchUpdateRecommendationStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AwsResilienceHub",
        operation: "BatchUpdateRecommendationStatus",
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
    input: BatchUpdateRecommendationStatusCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_BatchUpdateRecommendationStatusCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchUpdateRecommendationStatusCommandOutput> {
    return de_BatchUpdateRecommendationStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
