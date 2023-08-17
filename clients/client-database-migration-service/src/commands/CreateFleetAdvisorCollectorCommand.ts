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
} from "@smithy/types";

import {
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DatabaseMigrationServiceClient";
import { CreateFleetAdvisorCollectorRequest, CreateFleetAdvisorCollectorResponse } from "../models/models_0";
import { de_CreateFleetAdvisorCollectorCommand, se_CreateFleetAdvisorCollectorCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateFleetAdvisorCollectorCommand}.
 */
export interface CreateFleetAdvisorCollectorCommandInput extends CreateFleetAdvisorCollectorRequest {}
/**
 * @public
 *
 * The output of {@link CreateFleetAdvisorCollectorCommand}.
 */
export interface CreateFleetAdvisorCollectorCommandOutput
  extends CreateFleetAdvisorCollectorResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Creates a Fleet Advisor collector using the specified parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, CreateFleetAdvisorCollectorCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, CreateFleetAdvisorCollectorCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // CreateFleetAdvisorCollectorRequest
 *   CollectorName: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   ServiceAccessRoleArn: "STRING_VALUE", // required
 *   S3BucketName: "STRING_VALUE", // required
 * };
 * const command = new CreateFleetAdvisorCollectorCommand(input);
 * const response = await client.send(command);
 * // { // CreateFleetAdvisorCollectorResponse
 * //   CollectorReferencedId: "STRING_VALUE",
 * //   CollectorName: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   ServiceAccessRoleArn: "STRING_VALUE",
 * //   S3BucketName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateFleetAdvisorCollectorCommandInput - {@link CreateFleetAdvisorCollectorCommandInput}
 * @returns {@link CreateFleetAdvisorCollectorCommandOutput}
 * @see {@link CreateFleetAdvisorCollectorCommandInput} for command's `input` shape.
 * @see {@link CreateFleetAdvisorCollectorCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link AccessDeniedFault} (client fault)
 *  <p>DMS was denied access to the endpoint. Check that the
 *             role is correctly configured.</p>
 *
 * @throws {@link InvalidResourceStateFault} (client fault)
 *  <p>The resource is in a state that prevents it from being used for database migration.</p>
 *
 * @throws {@link ResourceQuotaExceededFault} (client fault)
 *  <p>The quota for this resource quota has been exceeded.</p>
 *
 * @throws {@link S3AccessDeniedFault} (client fault)
 *  <p>Insufficient privileges are preventing access to an Amazon S3 object.</p>
 *
 * @throws {@link S3ResourceNotFoundFault} (client fault)
 *  <p>A specified Amazon S3 bucket, bucket folder, or other object can't be
 *             found.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 */
export class CreateFleetAdvisorCollectorCommand extends $Command<
  CreateFleetAdvisorCollectorCommandInput,
  CreateFleetAdvisorCollectorCommandOutput,
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
  constructor(readonly input: CreateFleetAdvisorCollectorCommandInput) {
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
  ): Handler<CreateFleetAdvisorCollectorCommandInput, CreateFleetAdvisorCollectorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateFleetAdvisorCollectorCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "CreateFleetAdvisorCollectorCommand";
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
  private serialize(input: CreateFleetAdvisorCollectorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateFleetAdvisorCollectorCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateFleetAdvisorCollectorCommandOutput> {
    return de_CreateFleetAdvisorCollectorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
