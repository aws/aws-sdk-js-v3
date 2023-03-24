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

import { DataExchangeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataExchangeClient";
import { CreateJobRequest, CreateJobResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateJobCommand,
  serializeAws_restJson1CreateJobCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link CreateJobCommand}.
 */
export interface CreateJobCommandInput extends CreateJobRequest {}
/**
 * @public
 *
 * The output of {@link CreateJobCommand}.
 */
export interface CreateJobCommandOutput extends CreateJobResponse, __MetadataBearer {}

/**
 * @public
 * <p>This operation creates a job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataExchangeClient, CreateJobCommand } from "@aws-sdk/client-dataexchange"; // ES Modules import
 * // const { DataExchangeClient, CreateJobCommand } = require("@aws-sdk/client-dataexchange"); // CommonJS import
 * const client = new DataExchangeClient(config);
 * const input = {
 *   Details: {
 *     ExportAssetToSignedUrl: {
 *       AssetId: "STRING_VALUE", // required
 *       DataSetId: "STRING_VALUE", // required
 *       RevisionId: "STRING_VALUE", // required
 *     },
 *     ExportAssetsToS3: {
 *       AssetDestinations: [ // required
 *         {
 *           AssetId: "STRING_VALUE", // required
 *           Bucket: "STRING_VALUE", // required
 *           Key: "STRING_VALUE",
 *         },
 *       ],
 *       DataSetId: "STRING_VALUE", // required
 *       Encryption: {
 *         KmsKeyArn: "STRING_VALUE",
 *         Type: "STRING_VALUE", // required
 *       },
 *       RevisionId: "STRING_VALUE", // required
 *     },
 *     ExportRevisionsToS3: {
 *       DataSetId: "STRING_VALUE", // required
 *       Encryption: {
 *         KmsKeyArn: "STRING_VALUE",
 *         Type: "STRING_VALUE", // required
 *       },
 *       RevisionDestinations: [ // required
 *         {
 *           Bucket: "STRING_VALUE", // required
 *           KeyPattern: "STRING_VALUE",
 *           RevisionId: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *     ImportAssetFromSignedUrl: {
 *       AssetName: "STRING_VALUE", // required
 *       DataSetId: "STRING_VALUE", // required
 *       Md5Hash: "STRING_VALUE", // required
 *       RevisionId: "STRING_VALUE", // required
 *     },
 *     ImportAssetsFromS3: {
 *       AssetSources: [ // required
 *         {
 *           Bucket: "STRING_VALUE", // required
 *           Key: "STRING_VALUE", // required
 *         },
 *       ],
 *       DataSetId: "STRING_VALUE", // required
 *       RevisionId: "STRING_VALUE", // required
 *     },
 *     ImportAssetsFromRedshiftDataShares: {
 *       AssetSources: [ // required
 *         {
 *           DataShareArn: "STRING_VALUE", // required
 *         },
 *       ],
 *       DataSetId: "STRING_VALUE", // required
 *       RevisionId: "STRING_VALUE", // required
 *     },
 *     ImportAssetFromApiGatewayApi: {
 *       ApiDescription: "STRING_VALUE",
 *       ApiId: "STRING_VALUE", // required
 *       ApiKey: "STRING_VALUE",
 *       ApiName: "STRING_VALUE", // required
 *       ApiSpecificationMd5Hash: "STRING_VALUE", // required
 *       DataSetId: "STRING_VALUE", // required
 *       ProtocolType: "STRING_VALUE", // required
 *       RevisionId: "STRING_VALUE", // required
 *       Stage: "STRING_VALUE", // required
 *     },
 *     CreateS3DataAccessFromS3Bucket: {
 *       AssetSource: {
 *         Bucket: "STRING_VALUE", // required
 *         KeyPrefixes: [
 *           "STRING_VALUE",
 *         ],
 *         Keys: [
 *           "STRING_VALUE",
 *         ],
 *         KmsKeysToGrant: [
 *           {
 *             KmsKeyArn: "STRING_VALUE", // required
 *           },
 *         ],
 *       },
 *       DataSetId: "STRING_VALUE", // required
 *       RevisionId: "STRING_VALUE", // required
 *     },
 *     ImportAssetsFromLakeFormationTagPolicy: {
 *       CatalogId: "STRING_VALUE", // required
 *       Database: {
 *         Expression: [ // required
 *           {
 *             TagKey: "STRING_VALUE", // required
 *             TagValues: [ // required
 *               "STRING_VALUE",
 *             ],
 *           },
 *         ],
 *         Permissions: [ // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *       Table: {
 *         Expression: [ // required
 *           {
 *             TagKey: "STRING_VALUE", // required
 *             TagValues: [ // required
 *               "STRING_VALUE",
 *             ],
 *           },
 *         ],
 *         Permissions: [ // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *       RoleArn: "STRING_VALUE", // required
 *       DataSetId: "STRING_VALUE", // required
 *       RevisionId: "STRING_VALUE", // required
 *     },
 *   },
 *   Type: "STRING_VALUE", // required
 * };
 * const command = new CreateJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateJobCommandInput - {@link CreateJobCommandInput}
 * @returns {@link CreateJobCommandOutput}
 * @see {@link CreateJobCommandInput} for command's `input` shape.
 * @see {@link CreateJobCommandOutput} for command's `response` shape.
 * @see {@link DataExchangeClientResolvedConfig | config} for DataExchangeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to the resource is denied.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request couldn't be completed because it conflicted with the current state of the resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An exception occurred with the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource couldn't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request was invalid.</p>
 *
 *
 */
export class CreateJobCommand extends $Command<
  CreateJobCommandInput,
  CreateJobCommandOutput,
  DataExchangeClientResolvedConfig
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
  constructor(readonly input: CreateJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataExchangeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateJobCommandInput, CreateJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateJobCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataExchangeClient";
    const commandName = "CreateJobCommand";
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
  private serialize(input: CreateJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateJobCommandOutput> {
    return deserializeAws_restJson1CreateJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
