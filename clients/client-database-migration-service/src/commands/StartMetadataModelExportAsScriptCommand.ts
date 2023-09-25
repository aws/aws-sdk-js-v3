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
import { StartMetadataModelExportAsScriptMessage, StartMetadataModelExportAsScriptResponse } from "../models/models_1";
import {
  de_StartMetadataModelExportAsScriptCommand,
  se_StartMetadataModelExportAsScriptCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartMetadataModelExportAsScriptCommand}.
 */
export interface StartMetadataModelExportAsScriptCommandInput extends StartMetadataModelExportAsScriptMessage {}
/**
 * @public
 *
 * The output of {@link StartMetadataModelExportAsScriptCommand}.
 */
export interface StartMetadataModelExportAsScriptCommandOutput
  extends StartMetadataModelExportAsScriptResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Saves your converted code to a file as a SQL script, and stores this file on your Amazon S3 bucket.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, StartMetadataModelExportAsScriptCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, StartMetadataModelExportAsScriptCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // StartMetadataModelExportAsScriptMessage
 *   MigrationProjectIdentifier: "STRING_VALUE", // required
 *   SelectionRules: "STRING_VALUE", // required
 *   Origin: "SOURCE" || "TARGET", // required
 *   FileName: "STRING_VALUE",
 * };
 * const command = new StartMetadataModelExportAsScriptCommand(input);
 * const response = await client.send(command);
 * // { // StartMetadataModelExportAsScriptResponse
 * //   RequestIdentifier: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartMetadataModelExportAsScriptCommandInput - {@link StartMetadataModelExportAsScriptCommandInput}
 * @returns {@link StartMetadataModelExportAsScriptCommandOutput}
 * @see {@link StartMetadataModelExportAsScriptCommandInput} for command's `input` shape.
 * @see {@link StartMetadataModelExportAsScriptCommandOutput} for command's `response` shape.
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
 * @example Start Metadata Model Export As Script
 * ```javascript
 * // Saves your converted code to a file as a SQL script, and stores this file on your S3 bucket.
 * const input = {
 *   "FileName": "FILE",
 *   "MigrationProjectIdentifier": "arn:aws:dms:us-east-1:012345678901:migration-project:0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ012",
 *   "Origin": "SOURCE",
 *   "SelectionRules": "{\"rules\": [{\"rule-type\": \"selection\",\"rule-id\": \"1\",\"rule-name\": \"1\",\"object-locator\": {\"server-name\": \"aurora-pg.cluster-0a1b2c3d4e5f.us-east-1.rds.amazonaws.com\", \"schema-name\": \"schema1\", \"table-name\": \"Cities\"},\"rule-action\": \"explicit\"} ]}"
 * };
 * const command = new StartMetadataModelExportAsScriptCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "RequestIdentifier": "01234567-89ab-cdef-0123-456789abcdef"
 * }
 * *\/
 * // example id: start-metadata-model-export-as-script-1689722681469
 * ```
 *
 */
export class StartMetadataModelExportAsScriptCommand extends $Command<
  StartMetadataModelExportAsScriptCommandInput,
  StartMetadataModelExportAsScriptCommandOutput,
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
  constructor(readonly input: StartMetadataModelExportAsScriptCommandInput) {
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
  ): Handler<StartMetadataModelExportAsScriptCommandInput, StartMetadataModelExportAsScriptCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartMetadataModelExportAsScriptCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "StartMetadataModelExportAsScriptCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonDMSv20160101",
        operation: "StartMetadataModelExportAsScript",
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
    input: StartMetadataModelExportAsScriptCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_StartMetadataModelExportAsScriptCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartMetadataModelExportAsScriptCommandOutput> {
    return de_StartMetadataModelExportAsScriptCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
