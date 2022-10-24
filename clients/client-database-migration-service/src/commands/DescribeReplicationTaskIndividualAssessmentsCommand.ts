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
  DescribeReplicationTaskIndividualAssessmentsMessage,
  DescribeReplicationTaskIndividualAssessmentsMessageFilterSensitiveLog,
  DescribeReplicationTaskIndividualAssessmentsResponse,
  DescribeReplicationTaskIndividualAssessmentsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeReplicationTaskIndividualAssessmentsCommand,
  serializeAws_json1_1DescribeReplicationTaskIndividualAssessmentsCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeReplicationTaskIndividualAssessmentsCommandInput
  extends DescribeReplicationTaskIndividualAssessmentsMessage {}
export interface DescribeReplicationTaskIndividualAssessmentsCommandOutput
  extends DescribeReplicationTaskIndividualAssessmentsResponse,
    __MetadataBearer {}

/**
 * <p>Returns a paginated list of individual assessments based on filter settings.</p>
 *          <p>These filter settings can specify a combination of premigration assessment runs,
 *          migration tasks, and assessment status values.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeReplicationTaskIndividualAssessmentsCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeReplicationTaskIndividualAssessmentsCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new DescribeReplicationTaskIndividualAssessmentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeReplicationTaskIndividualAssessmentsCommandInput} for command's `input` shape.
 * @see {@link DescribeReplicationTaskIndividualAssessmentsCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 */
export class DescribeReplicationTaskIndividualAssessmentsCommand extends $Command<
  DescribeReplicationTaskIndividualAssessmentsCommandInput,
  DescribeReplicationTaskIndividualAssessmentsCommandOutput,
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

  constructor(readonly input: DescribeReplicationTaskIndividualAssessmentsCommandInput) {
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
  ): Handler<
    DescribeReplicationTaskIndividualAssessmentsCommandInput,
    DescribeReplicationTaskIndividualAssessmentsCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DescribeReplicationTaskIndividualAssessmentsCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "DescribeReplicationTaskIndividualAssessmentsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeReplicationTaskIndividualAssessmentsMessageFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeReplicationTaskIndividualAssessmentsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeReplicationTaskIndividualAssessmentsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeReplicationTaskIndividualAssessmentsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeReplicationTaskIndividualAssessmentsCommandOutput> {
    return deserializeAws_json1_1DescribeReplicationTaskIndividualAssessmentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
