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
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DatabaseMigrationServiceClient";
import {
  CancelReplicationTaskAssessmentRunMessage,
  CancelReplicationTaskAssessmentRunResponse,
} from "../models/models_0";
import {
  de_CancelReplicationTaskAssessmentRunCommand,
  se_CancelReplicationTaskAssessmentRunCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CancelReplicationTaskAssessmentRunCommand}.
 */
export interface CancelReplicationTaskAssessmentRunCommandInput extends CancelReplicationTaskAssessmentRunMessage {}
/**
 * @public
 *
 * The output of {@link CancelReplicationTaskAssessmentRunCommand}.
 */
export interface CancelReplicationTaskAssessmentRunCommandOutput
  extends CancelReplicationTaskAssessmentRunResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Cancels a single premigration assessment run.</p>
 *          <p>This operation prevents any individual assessments from running if they haven't started
 *          running. It also attempts to cancel any individual assessments that are currently
 *          running.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, CancelReplicationTaskAssessmentRunCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, CancelReplicationTaskAssessmentRunCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // CancelReplicationTaskAssessmentRunMessage
 *   ReplicationTaskAssessmentRunArn: "STRING_VALUE", // required
 * };
 * const command = new CancelReplicationTaskAssessmentRunCommand(input);
 * const response = await client.send(command);
 * // { // CancelReplicationTaskAssessmentRunResponse
 * //   ReplicationTaskAssessmentRun: { // ReplicationTaskAssessmentRun
 * //     ReplicationTaskAssessmentRunArn: "STRING_VALUE",
 * //     ReplicationTaskArn: "STRING_VALUE",
 * //     Status: "STRING_VALUE",
 * //     ReplicationTaskAssessmentRunCreationDate: new Date("TIMESTAMP"),
 * //     AssessmentProgress: { // ReplicationTaskAssessmentRunProgress
 * //       IndividualAssessmentCount: Number("int"),
 * //       IndividualAssessmentCompletedCount: Number("int"),
 * //     },
 * //     LastFailureMessage: "STRING_VALUE",
 * //     ServiceAccessRoleArn: "STRING_VALUE",
 * //     ResultLocationBucket: "STRING_VALUE",
 * //     ResultLocationFolder: "STRING_VALUE",
 * //     ResultEncryptionMode: "STRING_VALUE",
 * //     ResultKmsKeyArn: "STRING_VALUE",
 * //     AssessmentRunName: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CancelReplicationTaskAssessmentRunCommandInput - {@link CancelReplicationTaskAssessmentRunCommandInput}
 * @returns {@link CancelReplicationTaskAssessmentRunCommandOutput}
 * @see {@link CancelReplicationTaskAssessmentRunCommandInput} for command's `input` shape.
 * @see {@link CancelReplicationTaskAssessmentRunCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link AccessDeniedFault} (client fault)
 *  <p>DMS was denied access to the endpoint. Check that the
 *             role is correctly configured.</p>
 *
 * @throws {@link InvalidResourceStateFault} (client fault)
 *  <p>The resource is in a state that prevents it from being used for database migration.</p>
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 */
export class CancelReplicationTaskAssessmentRunCommand extends $Command<
  CancelReplicationTaskAssessmentRunCommandInput,
  CancelReplicationTaskAssessmentRunCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: CancelReplicationTaskAssessmentRunCommandInput) {
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
  ): Handler<CancelReplicationTaskAssessmentRunCommandInput, CancelReplicationTaskAssessmentRunCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CancelReplicationTaskAssessmentRunCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "CancelReplicationTaskAssessmentRunCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonDMSv20160101",
        operation: "CancelReplicationTaskAssessmentRun",
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
    input: CancelReplicationTaskAssessmentRunCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_CancelReplicationTaskAssessmentRunCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CancelReplicationTaskAssessmentRunCommandOutput> {
    return de_CancelReplicationTaskAssessmentRunCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
