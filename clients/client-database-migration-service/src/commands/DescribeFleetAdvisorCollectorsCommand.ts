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
  DescribeFleetAdvisorCollectorsRequest,
  DescribeFleetAdvisorCollectorsRequestFilterSensitiveLog,
  DescribeFleetAdvisorCollectorsResponse,
  DescribeFleetAdvisorCollectorsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeFleetAdvisorCollectorsCommand,
  serializeAws_json1_1DescribeFleetAdvisorCollectorsCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeFleetAdvisorCollectorsCommandInput extends DescribeFleetAdvisorCollectorsRequest {}
export interface DescribeFleetAdvisorCollectorsCommandOutput
  extends DescribeFleetAdvisorCollectorsResponse,
    __MetadataBearer {}

/**
 * <p>Returns a list of the Fleet Advisor collectors in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeFleetAdvisorCollectorsCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeFleetAdvisorCollectorsCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new DescribeFleetAdvisorCollectorsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFleetAdvisorCollectorsCommandInput} for command's `input` shape.
 * @see {@link DescribeFleetAdvisorCollectorsCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 */
export class DescribeFleetAdvisorCollectorsCommand extends $Command<
  DescribeFleetAdvisorCollectorsCommandInput,
  DescribeFleetAdvisorCollectorsCommandOutput,
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

  constructor(readonly input: DescribeFleetAdvisorCollectorsCommandInput) {
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
  ): Handler<DescribeFleetAdvisorCollectorsCommandInput, DescribeFleetAdvisorCollectorsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeFleetAdvisorCollectorsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "DescribeFleetAdvisorCollectorsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeFleetAdvisorCollectorsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeFleetAdvisorCollectorsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeFleetAdvisorCollectorsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeFleetAdvisorCollectorsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeFleetAdvisorCollectorsCommandOutput> {
    return deserializeAws_json1_1DescribeFleetAdvisorCollectorsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
