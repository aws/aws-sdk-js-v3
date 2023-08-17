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

import { GlacierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlacierClient";
import { InitiateJobInput, InitiateJobOutput } from "../models/models_0";
import { de_InitiateJobCommand, se_InitiateJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link InitiateJobCommand}.
 */
export interface InitiateJobCommandInput extends InitiateJobInput {}
/**
 * @public
 *
 * The output of {@link InitiateJobCommand}.
 */
export interface InitiateJobCommandOutput extends InitiateJobOutput, __MetadataBearer {}

/**
 * @public
 * <p>This operation initiates a job of the specified type, which can be a select, an archival retrieval,
 *          or a vault retrieval. For more information about using this operation,
 *          see the documentation for the underlying REST API <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-initiate-job-post.html">Initiate
 *             a Job</a>.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, InitiateJobCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, InitiateJobCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * const client = new GlacierClient(config);
 * const input = { // InitiateJobInput
 *   accountId: "STRING_VALUE", // required
 *   vaultName: "STRING_VALUE", // required
 *   jobParameters: { // JobParameters
 *     Format: "STRING_VALUE",
 *     Type: "STRING_VALUE",
 *     ArchiveId: "STRING_VALUE",
 *     Description: "STRING_VALUE",
 *     SNSTopic: "STRING_VALUE",
 *     RetrievalByteRange: "STRING_VALUE",
 *     Tier: "STRING_VALUE",
 *     InventoryRetrievalParameters: { // InventoryRetrievalJobInput
 *       StartDate: "STRING_VALUE",
 *       EndDate: "STRING_VALUE",
 *       Limit: "STRING_VALUE",
 *       Marker: "STRING_VALUE",
 *     },
 *     SelectParameters: { // SelectParameters
 *       InputSerialization: { // InputSerialization
 *         csv: { // CSVInput
 *           FileHeaderInfo: "USE" || "IGNORE" || "NONE",
 *           Comments: "STRING_VALUE",
 *           QuoteEscapeCharacter: "STRING_VALUE",
 *           RecordDelimiter: "STRING_VALUE",
 *           FieldDelimiter: "STRING_VALUE",
 *           QuoteCharacter: "STRING_VALUE",
 *         },
 *       },
 *       ExpressionType: "SQL",
 *       Expression: "STRING_VALUE",
 *       OutputSerialization: { // OutputSerialization
 *         csv: { // CSVOutput
 *           QuoteFields: "ALWAYS" || "ASNEEDED",
 *           QuoteEscapeCharacter: "STRING_VALUE",
 *           RecordDelimiter: "STRING_VALUE",
 *           FieldDelimiter: "STRING_VALUE",
 *           QuoteCharacter: "STRING_VALUE",
 *         },
 *       },
 *     },
 *     OutputLocation: { // OutputLocation
 *       S3: { // S3Location
 *         BucketName: "STRING_VALUE",
 *         Prefix: "STRING_VALUE",
 *         Encryption: { // Encryption
 *           EncryptionType: "aws:kms" || "AES256",
 *           KMSKeyId: "STRING_VALUE",
 *           KMSContext: "STRING_VALUE",
 *         },
 *         CannedACL: "private" || "public-read" || "public-read-write" || "aws-exec-read" || "authenticated-read" || "bucket-owner-read" || "bucket-owner-full-control",
 *         AccessControlList: [ // AccessControlPolicyList
 *           { // Grant
 *             Grantee: { // Grantee
 *               Type: "AmazonCustomerByEmail" || "CanonicalUser" || "Group", // required
 *               DisplayName: "STRING_VALUE",
 *               URI: "STRING_VALUE",
 *               ID: "STRING_VALUE",
 *               EmailAddress: "STRING_VALUE",
 *             },
 *             Permission: "FULL_CONTROL" || "WRITE" || "WRITE_ACP" || "READ" || "READ_ACP",
 *           },
 *         ],
 *         Tagging: { // hashmap
 *           "<keys>": "STRING_VALUE",
 *         },
 *         UserMetadata: {
 *           "<keys>": "STRING_VALUE",
 *         },
 *         StorageClass: "STANDARD" || "REDUCED_REDUNDANCY" || "STANDARD_IA",
 *       },
 *     },
 *   },
 * };
 * const command = new InitiateJobCommand(input);
 * const response = await client.send(command);
 * // { // InitiateJobOutput
 * //   location: "STRING_VALUE",
 * //   jobId: "STRING_VALUE",
 * //   jobOutputPath: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param InitiateJobCommandInput - {@link InitiateJobCommandInput}
 * @returns {@link InitiateJobCommandOutput}
 * @see {@link InitiateJobCommandInput} for command's `input` shape.
 * @see {@link InitiateJobCommandOutput} for command's `response` shape.
 * @see {@link GlacierClientResolvedConfig | config} for GlacierClient's `config` shape.
 *
 * @throws {@link InsufficientCapacityException} (client fault)
 *  <p>Returned if there is insufficient capacity to process this expedited request. This
 *          error only applies to expedited retrievals and not to standard or bulk
 *          retrievals.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>Returned if a parameter of the request is incorrectly specified.</p>
 *
 * @throws {@link MissingParameterValueException} (client fault)
 *  <p>Returned if a required header or parameter is missing from the request.</p>
 *
 * @throws {@link PolicyEnforcedException} (client fault)
 *  <p>Returned if a retrieval job would exceed the current data policy's retrieval rate
 *          limit. For more information about data retrieval policies,</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Returned if the specified resource (such as a vault, upload ID, or job ID) doesn't
 *          exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>Returned if the service cannot complete the request.</p>
 *
 * @throws {@link GlacierServiceException}
 * <p>Base exception class for all service exceptions from Glacier service.</p>
 *
 * @example To initiate an inventory-retrieval job
 * ```javascript
 * // The example initiates an inventory-retrieval job for the vault named examplevault.
 * const input = {
 *   "accountId": "-",
 *   "jobParameters": {
 *     "Description": "My inventory job",
 *     "Format": "CSV",
 *     "SNSTopic": "arn:aws:sns:us-west-2:111111111111:Glacier-InventoryRetrieval-topic-Example",
 *     "Type": "inventory-retrieval"
 *   },
 *   "vaultName": "examplevault"
 * };
 * const command = new InitiateJobCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "jobId": " HkF9p6o7yjhFx-K3CGl6fuSm6VzW9T7esGQfco8nUXVYwS0jlb5gq1JZ55yHgt5vP54ZShjoQzQVVh7vEXAMPLEjobID",
 *   "location": "/111122223333/vaults/examplevault/jobs/HkF9p6o7yjhFx-K3CGl6fuSm6VzW9T7esGQfco8nUXVYwS0jlb5gq1JZ55yHgt5vP54ZShjoQzQVVh7vEXAMPLEjobID"
 * }
 * *\/
 * // example id: to-initiate-an-inventory-retrieval-job-1482186883826
 * ```
 *
 */
export class InitiateJobCommand extends $Command<
  InitiateJobCommandInput,
  InitiateJobCommandOutput,
  GlacierClientResolvedConfig
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
  constructor(readonly input: InitiateJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlacierClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<InitiateJobCommandInput, InitiateJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, InitiateJobCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlacierClient";
    const commandName = "InitiateJobCommand";
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
  private serialize(input: InitiateJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_InitiateJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<InitiateJobCommandOutput> {
    return de_InitiateJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
