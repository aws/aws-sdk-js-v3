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

import { ECRPUBLICClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRPUBLICClient";
import { PutRepositoryCatalogDataRequest, PutRepositoryCatalogDataResponse } from "../models/models_0";
import { de_PutRepositoryCatalogDataCommand, se_PutRepositoryCatalogDataCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutRepositoryCatalogDataCommand}.
 */
export interface PutRepositoryCatalogDataCommandInput extends PutRepositoryCatalogDataRequest {}
/**
 * @public
 *
 * The output of {@link PutRepositoryCatalogDataCommand}.
 */
export interface PutRepositoryCatalogDataCommandOutput extends PutRepositoryCatalogDataResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates or updates the catalog data for a repository in a public registry.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRPUBLICClient, PutRepositoryCatalogDataCommand } from "@aws-sdk/client-ecr-public"; // ES Modules import
 * // const { ECRPUBLICClient, PutRepositoryCatalogDataCommand } = require("@aws-sdk/client-ecr-public"); // CommonJS import
 * const client = new ECRPUBLICClient(config);
 * const input = { // PutRepositoryCatalogDataRequest
 *   registryId: "STRING_VALUE",
 *   repositoryName: "STRING_VALUE", // required
 *   catalogData: { // RepositoryCatalogDataInput
 *     description: "STRING_VALUE",
 *     architectures: [ // ArchitectureList
 *       "STRING_VALUE",
 *     ],
 *     operatingSystems: [ // OperatingSystemList
 *       "STRING_VALUE",
 *     ],
 *     logoImageBlob: "BLOB_VALUE",
 *     aboutText: "STRING_VALUE",
 *     usageText: "STRING_VALUE",
 *   },
 * };
 * const command = new PutRepositoryCatalogDataCommand(input);
 * const response = await client.send(command);
 * // { // PutRepositoryCatalogDataResponse
 * //   catalogData: { // RepositoryCatalogData
 * //     description: "STRING_VALUE",
 * //     architectures: [ // ArchitectureList
 * //       "STRING_VALUE",
 * //     ],
 * //     operatingSystems: [ // OperatingSystemList
 * //       "STRING_VALUE",
 * //     ],
 * //     logoUrl: "STRING_VALUE",
 * //     aboutText: "STRING_VALUE",
 * //     usageText: "STRING_VALUE",
 * //     marketplaceCertified: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param PutRepositoryCatalogDataCommandInput - {@link PutRepositoryCatalogDataCommandInput}
 * @returns {@link PutRepositoryCatalogDataCommandOutput}
 * @see {@link PutRepositoryCatalogDataCommandInput} for command's `input` shape.
 * @see {@link PutRepositoryCatalogDataCommandOutput} for command's `response` shape.
 * @see {@link ECRPUBLICClientResolvedConfig | config} for ECRPUBLICClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *          request.</p>
 *
 * @throws {@link RepositoryNotFoundException} (client fault)
 *  <p>The specified repository can't be found. Check the spelling of the specified repository
 *          and ensure that you're performing operations on the correct registry.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link UnsupportedCommandException} (client fault)
 *  <p>The action isn't supported in this Region.</p>
 *
 * @throws {@link ECRPUBLICServiceException}
 * <p>Base exception class for all service exceptions from ECRPUBLIC service.</p>
 *
 */
export class PutRepositoryCatalogDataCommand extends $Command<
  PutRepositoryCatalogDataCommandInput,
  PutRepositoryCatalogDataCommandOutput,
  ECRPUBLICClientResolvedConfig
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
  constructor(readonly input: PutRepositoryCatalogDataCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECRPUBLICClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutRepositoryCatalogDataCommandInput, PutRepositoryCatalogDataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutRepositoryCatalogDataCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECRPUBLICClient";
    const commandName = "PutRepositoryCatalogDataCommand";
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
  private serialize(input: PutRepositoryCatalogDataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutRepositoryCatalogDataCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutRepositoryCatalogDataCommandOutput> {
    return de_PutRepositoryCatalogDataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
