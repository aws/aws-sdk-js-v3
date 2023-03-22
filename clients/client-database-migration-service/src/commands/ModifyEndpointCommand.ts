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
  ModifyEndpointMessage,
  ModifyEndpointMessageFilterSensitiveLog,
  ModifyEndpointResponse,
  ModifyEndpointResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ModifyEndpointCommand,
  serializeAws_json1_1ModifyEndpointCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link ModifyEndpointCommand}.
 */
export interface ModifyEndpointCommandInput extends ModifyEndpointMessage {}
/**
 * @public
 *
 * The output of {@link ModifyEndpointCommand}.
 */
export interface ModifyEndpointCommandOutput extends ModifyEndpointResponse, __MetadataBearer {}

/**
 * @public
 * <p>Modifies the specified endpoint.</p>
 *          <note>
 *             <p>For a MySQL source or target endpoint, don't explicitly specify the database using
 *          the <code>DatabaseName</code> request parameter on the <code>ModifyEndpoint</code> API call.
 *          Specifying <code>DatabaseName</code> when you modify a MySQL endpoint replicates all the
 *          task tables to this single database. For MySQL endpoints, you specify the database only when
 *          you specify the schema in the table-mapping rules of the DMS task.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, ModifyEndpointCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, ModifyEndpointCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new ModifyEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ModifyEndpointCommandInput - {@link ModifyEndpointCommandInput}
 * @returns {@link ModifyEndpointCommandOutput}
 * @see {@link ModifyEndpointCommandInput} for command's `input` shape.
 * @see {@link ModifyEndpointCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link AccessDeniedFault} (client fault)
 *  <p>DMS was denied access to the endpoint. Check that the
 *             role is correctly configured.</p>
 *
 * @throws {@link InvalidResourceStateFault} (client fault)
 *  <p>The resource is in a state that prevents it from being used for database migration.</p>
 *
 * @throws {@link KMSKeyNotAccessibleFault} (client fault)
 *  <p>DMS cannot access the KMS key.</p>
 *
 * @throws {@link ResourceAlreadyExistsFault} (client fault)
 *  <p>The resource you are attempting to create already exists.</p>
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The resource could not be found.</p>
 *
 *
 * @example Modify endpoint
 * ```javascript
 * // Modifies the specified endpoint.
 * const input = {
 *   "CertificateArn": "",
 *   "DatabaseName": "",
 *   "EndpointArn": "",
 *   "EndpointIdentifier": "",
 *   "EndpointType": "source",
 *   "EngineName": "",
 *   "ExtraConnectionAttributes": "",
 *   "Password": "",
 *   "Port": 123,
 *   "ServerName": "",
 *   "SslMode": "require",
 *   "Username": ""
 * };
 * const command = new ModifyEndpointCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Endpoint": {}
 * }
 * *\/
 * // example id: modify-endpoint-1481761649937
 * ```
 *
 */
export class ModifyEndpointCommand extends $Command<
  ModifyEndpointCommandInput,
  ModifyEndpointCommandOutput,
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
  constructor(readonly input: ModifyEndpointCommandInput) {
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
  ): Handler<ModifyEndpointCommandInput, ModifyEndpointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyEndpointCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "ModifyEndpointCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyEndpointMessageFilterSensitiveLog,
      outputFilterSensitiveLog: ModifyEndpointResponseFilterSensitiveLog,
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
  private serialize(input: ModifyEndpointCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ModifyEndpointCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyEndpointCommandOutput> {
    return deserializeAws_json1_1ModifyEndpointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
