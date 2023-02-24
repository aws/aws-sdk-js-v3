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
  DescribeApplicableIndividualAssessmentsMessage,
  DescribeApplicableIndividualAssessmentsMessageFilterSensitiveLog,
  DescribeApplicableIndividualAssessmentsResponse,
  DescribeApplicableIndividualAssessmentsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeApplicableIndividualAssessmentsCommand,
  serializeAws_json1_1DescribeApplicableIndividualAssessmentsCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeApplicableIndividualAssessmentsCommandInput
  extends DescribeApplicableIndividualAssessmentsMessage {}
export interface DescribeApplicableIndividualAssessmentsCommandOutput
  extends DescribeApplicableIndividualAssessmentsResponse,
    __MetadataBearer {}

/**
 * <p>Provides a list of individual assessments that you can specify for a new premigration
 *          assessment run, given one or more parameters.</p>
 *          <p>If you specify an existing migration task, this operation provides the default individual
 *          assessments you can specify for that task. Otherwise, the specified parameters model elements
 *          of a possible migration task on which to base a premigration assessment run.</p>
 *          <p>To use these migration task modeling parameters, you must specify an existing replication instance,
 *          a source database engine, a target database engine, and a migration type. This combination of
 *          parameters potentially limits the default individual assessments available for an assessment run
 *          created for a corresponding migration task.</p>
 *          <p>If you specify no parameters, this operation provides a list of all possible individual assessments
 *          that you can specify for an assessment run. If you specify any one of the task modeling parameters, you must
 *          specify all of them or the operation cannot provide a list of individual assessments.
 *          The only parameter that you can specify alone is for an existing migration task. The specified task
 *          definition then determines the default list of individual assessments that you can specify in an
 *          assessment run for the task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeApplicableIndividualAssessmentsCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeApplicableIndividualAssessmentsCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new DescribeApplicableIndividualAssessmentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeApplicableIndividualAssessmentsCommandInput} for command's `input` shape.
 * @see {@link DescribeApplicableIndividualAssessmentsCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 */
export class DescribeApplicableIndividualAssessmentsCommand extends $Command<
  DescribeApplicableIndividualAssessmentsCommandInput,
  DescribeApplicableIndividualAssessmentsCommandOutput,
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

  constructor(readonly input: DescribeApplicableIndividualAssessmentsCommandInput) {
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
    DescribeApplicableIndividualAssessmentsCommandInput,
    DescribeApplicableIndividualAssessmentsCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DescribeApplicableIndividualAssessmentsCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "DescribeApplicableIndividualAssessmentsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeApplicableIndividualAssessmentsMessageFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeApplicableIndividualAssessmentsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeApplicableIndividualAssessmentsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeApplicableIndividualAssessmentsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeApplicableIndividualAssessmentsCommandOutput> {
    return deserializeAws_json1_1DescribeApplicableIndividualAssessmentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
