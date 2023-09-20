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
  MigrationHubStrategyClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MigrationHubStrategyClient";
import { GetRecommendationReportDetailsRequest, GetRecommendationReportDetailsResponse } from "../models/models_0";
import {
  de_GetRecommendationReportDetailsCommand,
  se_GetRecommendationReportDetailsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetRecommendationReportDetailsCommand}.
 */
export interface GetRecommendationReportDetailsCommandInput extends GetRecommendationReportDetailsRequest {}
/**
 * @public
 *
 * The output of {@link GetRecommendationReportDetailsCommand}.
 */
export interface GetRecommendationReportDetailsCommandOutput
  extends GetRecommendationReportDetailsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p> Retrieves detailed information about the specified recommendation report. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubStrategyClient, GetRecommendationReportDetailsCommand } from "@aws-sdk/client-migrationhubstrategy"; // ES Modules import
 * // const { MigrationHubStrategyClient, GetRecommendationReportDetailsCommand } = require("@aws-sdk/client-migrationhubstrategy"); // CommonJS import
 * const client = new MigrationHubStrategyClient(config);
 * const input = { // GetRecommendationReportDetailsRequest
 *   id: "STRING_VALUE", // required
 * };
 * const command = new GetRecommendationReportDetailsCommand(input);
 * const response = await client.send(command);
 * // { // GetRecommendationReportDetailsResponse
 * //   id: "STRING_VALUE",
 * //   recommendationReportDetails: { // RecommendationReportDetails
 * //     status: "STRING_VALUE",
 * //     statusMessage: "STRING_VALUE",
 * //     startTime: new Date("TIMESTAMP"),
 * //     completionTime: new Date("TIMESTAMP"),
 * //     s3Bucket: "STRING_VALUE",
 * //     s3Keys: [ // S3Keys
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetRecommendationReportDetailsCommandInput - {@link GetRecommendationReportDetailsCommandInput}
 * @returns {@link GetRecommendationReportDetailsCommandOutput}
 * @see {@link GetRecommendationReportDetailsCommandInput} for command's `input` shape.
 * @see {@link GetRecommendationReportDetailsCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubStrategyClientResolvedConfig | config} for MigrationHubStrategyClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> The user does not have permission to perform the action. Check the
 *       AWS Identity and Access Management (IAM) policy associated with this user.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> The server experienced an internal error. Try again. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The specified ID in the request is not found. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p> The request was denied due to request throttling. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> The request body isn't valid. </p>
 *
 * @throws {@link MigrationHubStrategyServiceException}
 * <p>Base exception class for all service exceptions from MigrationHubStrategy service.</p>
 *
 */
export class GetRecommendationReportDetailsCommand extends $Command<
  GetRecommendationReportDetailsCommandInput,
  GetRecommendationReportDetailsCommandOutput,
  MigrationHubStrategyClientResolvedConfig
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
  constructor(readonly input: GetRecommendationReportDetailsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MigrationHubStrategyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetRecommendationReportDetailsCommandInput, GetRecommendationReportDetailsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetRecommendationReportDetailsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MigrationHubStrategyClient";
    const commandName = "GetRecommendationReportDetailsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSMigrationHubStrategyRecommendation",
        operation: "GetRecommendationReportDetails",
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
    input: GetRecommendationReportDetailsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetRecommendationReportDetailsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetRecommendationReportDetailsCommandOutput> {
    return de_GetRecommendationReportDetailsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
