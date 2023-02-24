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
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DatabaseMigrationServiceClient";
import {
  DescribeFleetAdvisorLsaAnalysisRequest,
  DescribeFleetAdvisorLsaAnalysisRequestFilterSensitiveLog,
  DescribeFleetAdvisorLsaAnalysisResponse,
  DescribeFleetAdvisorLsaAnalysisResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeFleetAdvisorLsaAnalysisCommand,
  serializeAws_json1_1DescribeFleetAdvisorLsaAnalysisCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeFleetAdvisorLsaAnalysisCommandInput extends DescribeFleetAdvisorLsaAnalysisRequest {}
export interface DescribeFleetAdvisorLsaAnalysisCommandOutput
  extends DescribeFleetAdvisorLsaAnalysisResponse,
    __MetadataBearer {}

/**
 * <p>Provides descriptions of large-scale assessment (LSA) analyses produced by your
 *             Fleet Advisor collectors.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeFleetAdvisorLsaAnalysisCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeFleetAdvisorLsaAnalysisCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new DescribeFleetAdvisorLsaAnalysisCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFleetAdvisorLsaAnalysisCommandInput} for command's `input` shape.
 * @see {@link DescribeFleetAdvisorLsaAnalysisCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 */
export class DescribeFleetAdvisorLsaAnalysisCommand extends $Command<
  DescribeFleetAdvisorLsaAnalysisCommandInput,
  DescribeFleetAdvisorLsaAnalysisCommandOutput,
  DatabaseMigrationServiceClientResolvedConfig
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

  constructor(readonly input: DescribeFleetAdvisorLsaAnalysisCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DatabaseMigrationServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeFleetAdvisorLsaAnalysisCommandInput, DescribeFleetAdvisorLsaAnalysisCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeFleetAdvisorLsaAnalysisCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "DescribeFleetAdvisorLsaAnalysisCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeFleetAdvisorLsaAnalysisRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeFleetAdvisorLsaAnalysisResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeFleetAdvisorLsaAnalysisCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeFleetAdvisorLsaAnalysisCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeFleetAdvisorLsaAnalysisCommandOutput> {
    return deserializeAws_json1_1DescribeFleetAdvisorLsaAnalysisCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
