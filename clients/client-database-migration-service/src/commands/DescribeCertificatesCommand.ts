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
import { DescribeCertificatesMessage, DescribeCertificatesResponse } from "../models/models_0";
import { de_DescribeCertificatesCommand, se_DescribeCertificatesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeCertificatesCommand}.
 */
export interface DescribeCertificatesCommandInput extends DescribeCertificatesMessage {}
/**
 * @public
 *
 * The output of {@link DescribeCertificatesCommand}.
 */
export interface DescribeCertificatesCommandOutput extends DescribeCertificatesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Provides a description of the certificate.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeCertificatesCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeCertificatesCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // DescribeCertificatesMessage
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeCertificatesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCertificatesResponse
 * //   Marker: "STRING_VALUE",
 * //   Certificates: [ // CertificateList
 * //     { // Certificate
 * //       CertificateIdentifier: "STRING_VALUE",
 * //       CertificateCreationDate: new Date("TIMESTAMP"),
 * //       CertificatePem: "STRING_VALUE",
 * //       CertificateWallet: "BLOB_VALUE",
 * //       CertificateArn: "STRING_VALUE",
 * //       CertificateOwner: "STRING_VALUE",
 * //       ValidFromDate: new Date("TIMESTAMP"),
 * //       ValidToDate: new Date("TIMESTAMP"),
 * //       SigningAlgorithm: "STRING_VALUE",
 * //       KeyLength: Number("int"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeCertificatesCommandInput - {@link DescribeCertificatesCommandInput}
 * @returns {@link DescribeCertificatesCommandOutput}
 * @see {@link DescribeCertificatesCommandInput} for command's `input` shape.
 * @see {@link DescribeCertificatesCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 * @example Describe certificates
 * ```javascript
 * // Provides a description of the certificate.
 * const input = {
 *   "Filters": [
 *     {
 *       "Name": "string",
 *       "Values": [
 *         "string",
 *         "string"
 *       ]
 *     }
 *   ],
 *   "Marker": "",
 *   "MaxRecords": 123
 * };
 * const command = new DescribeCertificatesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Certificates": [],
 *   "Marker": ""
 * }
 * *\/
 * // example id: describe-certificates-1481753186244
 * ```
 *
 */
export class DescribeCertificatesCommand extends $Command<
  DescribeCertificatesCommandInput,
  DescribeCertificatesCommandOutput,
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
  constructor(readonly input: DescribeCertificatesCommandInput) {
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
  ): Handler<DescribeCertificatesCommandInput, DescribeCertificatesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeCertificatesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "DescribeCertificatesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonDMSv20160101",
        operation: "DescribeCertificates",
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
  private serialize(input: DescribeCertificatesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeCertificatesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeCertificatesCommandOutput> {
    return de_DescribeCertificatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
