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
import { DeleteCertificateMessage, DeleteCertificateResponse } from "../models/models_0";
import { de_DeleteCertificateCommand, se_DeleteCertificateCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteCertificateCommand}.
 */
export interface DeleteCertificateCommandInput extends DeleteCertificateMessage {}
/**
 * @public
 *
 * The output of {@link DeleteCertificateCommand}.
 */
export interface DeleteCertificateCommandOutput extends DeleteCertificateResponse, __MetadataBearer {}

/**
 * @public
 * <p>Deletes the specified certificate. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DeleteCertificateCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DeleteCertificateCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // DeleteCertificateMessage
 *   CertificateArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteCertificateCommand(input);
 * const response = await client.send(command);
 * // { // DeleteCertificateResponse
 * //   Certificate: { // Certificate
 * //     CertificateIdentifier: "STRING_VALUE",
 * //     CertificateCreationDate: new Date("TIMESTAMP"),
 * //     CertificatePem: "STRING_VALUE",
 * //     CertificateWallet: "BLOB_VALUE",
 * //     CertificateArn: "STRING_VALUE",
 * //     CertificateOwner: "STRING_VALUE",
 * //     ValidFromDate: new Date("TIMESTAMP"),
 * //     ValidToDate: new Date("TIMESTAMP"),
 * //     SigningAlgorithm: "STRING_VALUE",
 * //     KeyLength: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteCertificateCommandInput - {@link DeleteCertificateCommandInput}
 * @returns {@link DeleteCertificateCommandOutput}
 * @see {@link DeleteCertificateCommandInput} for command's `input` shape.
 * @see {@link DeleteCertificateCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
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
 * @example Delete Certificate
 * ```javascript
 * // Deletes the specified certificate.
 * const input = {
 *   "CertificateArn": "arn:aws:dms:us-east-1:123456789012:rep:6UTDJGBOUSM457DE6XFJCJQ"
 * };
 * const command = new DeleteCertificateCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Certificate": {}
 * }
 * *\/
 * // example id: delete-certificate-1481751957981
 * ```
 *
 */
export class DeleteCertificateCommand extends $Command<
  DeleteCertificateCommandInput,
  DeleteCertificateCommandOutput,
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
  constructor(readonly input: DeleteCertificateCommandInput) {
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
  ): Handler<DeleteCertificateCommandInput, DeleteCertificateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteCertificateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "DeleteCertificateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonDMSv20160101",
        operation: "DeleteCertificate",
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
  private serialize(input: DeleteCertificateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteCertificateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteCertificateCommandOutput> {
    return de_DeleteCertificateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
