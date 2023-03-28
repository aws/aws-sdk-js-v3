// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  MigrationHubStrategyClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MigrationHubStrategyClient";
import { StartAssessmentRequest, StartAssessmentResponse } from "../models/models_0";
import {
  deserializeAws_restJson1StartAssessmentCommand,
  serializeAws_restJson1StartAssessmentCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link StartAssessmentCommand}.
 */
export interface StartAssessmentCommandInput extends StartAssessmentRequest {}
/**
 * @public
 *
 * The output of {@link StartAssessmentCommand}.
 */
export interface StartAssessmentCommandOutput extends StartAssessmentResponse, __MetadataBearer {}

/**
 * @public
 * <p> Starts the assessment of an on-premises environment. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubStrategyClient, StartAssessmentCommand } from "@aws-sdk/client-migrationhubstrategy"; // ES Modules import
 * // const { MigrationHubStrategyClient, StartAssessmentCommand } = require("@aws-sdk/client-migrationhubstrategy"); // CommonJS import
 * const client = new MigrationHubStrategyClient(config);
 * const input = { // StartAssessmentRequest
 *   s3bucketForAnalysisData: "STRING_VALUE",
 *   s3bucketForReportData: "STRING_VALUE",
 *   assessmentTargets: [ // AssessmentTargets
 *     { // AssessmentTarget
 *       condition: "STRING_VALUE", // required
 *       name: "STRING_VALUE", // required
 *       values: [ // AssessmentTargetValues // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new StartAssessmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param StartAssessmentCommandInput - {@link StartAssessmentCommandInput}
 * @returns {@link StartAssessmentCommandOutput}
 * @see {@link StartAssessmentCommandInput} for command's `input` shape.
 * @see {@link StartAssessmentCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubStrategyClientResolvedConfig | config} for MigrationHubStrategyClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> The user does not have permission to perform the action. Check the
 *       AWS Identity and Access Management (IAM) policy associated with this user.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> The server experienced an internal error. Try again. </p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p> The AWS account has reached its quota of imports. Contact AWS Support to increase the
 *       quota for this account. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p> The request was denied due to request throttling. </p>
 *
 *
 */
export class StartAssessmentCommand extends $Command<
  StartAssessmentCommandInput,
  StartAssessmentCommandOutput,
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
  constructor(readonly input: StartAssessmentCommandInput) {
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
  ): Handler<StartAssessmentCommandInput, StartAssessmentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartAssessmentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MigrationHubStrategyClient";
    const commandName = "StartAssessmentCommand";
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
  private serialize(input: StartAssessmentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StartAssessmentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartAssessmentCommandOutput> {
    return deserializeAws_restJson1StartAssessmentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
