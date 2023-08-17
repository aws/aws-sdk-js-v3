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
  ElasticsearchServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticsearchServiceClient";
import { DissociatePackageRequest, DissociatePackageResponse } from "../models/models_0";
import { de_DissociatePackageCommand, se_DissociatePackageCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DissociatePackageCommand}.
 */
export interface DissociatePackageCommandInput extends DissociatePackageRequest {}
/**
 * @public
 *
 * The output of {@link DissociatePackageCommand}.
 */
export interface DissociatePackageCommandOutput extends DissociatePackageResponse, __MetadataBearer {}

/**
 * @public
 * <p>Dissociates a package from the Amazon ES domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, DissociatePackageCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, DissociatePackageCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const input = { // DissociatePackageRequest
 *   PackageID: "STRING_VALUE", // required
 *   DomainName: "STRING_VALUE", // required
 * };
 * const command = new DissociatePackageCommand(input);
 * const response = await client.send(command);
 * // { // DissociatePackageResponse
 * //   DomainPackageDetails: { // DomainPackageDetails
 * //     PackageID: "STRING_VALUE",
 * //     PackageName: "STRING_VALUE",
 * //     PackageType: "TXT-DICTIONARY",
 * //     LastUpdated: new Date("TIMESTAMP"),
 * //     DomainName: "STRING_VALUE",
 * //     DomainPackageStatus: "ASSOCIATING" || "ASSOCIATION_FAILED" || "ACTIVE" || "DISSOCIATING" || "DISSOCIATION_FAILED",
 * //     PackageVersion: "STRING_VALUE",
 * //     ReferencePath: "STRING_VALUE",
 * //     ErrorDetails: { // ErrorDetails
 * //       ErrorType: "STRING_VALUE",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DissociatePackageCommandInput - {@link DissociatePackageCommandInput}
 * @returns {@link DissociatePackageCommandOutput}
 * @see {@link DissociatePackageCommandInput} for command's `input` shape.
 * @see {@link DissociatePackageCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for ElasticsearchServiceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>An error occurred because user does not have permissions to access the resource. Returns HTTP status code 403.</p>
 *
 * @throws {@link BaseException} (client fault)
 *  <p>An error occurred while processing the request.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>An error occurred because the client attempts to remove a resource that is currently in use. Returns HTTP status code 409.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure (the failure is internal to the service) . Gives http status code of 500.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An exception for accessing or deleting a resource that does not exist. Gives http status code of 400.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception for missing / invalid input fields. Gives http status code of 400.</p>
 *
 * @throws {@link ElasticsearchServiceServiceException}
 * <p>Base exception class for all service exceptions from ElasticsearchService service.</p>
 *
 */
export class DissociatePackageCommand extends $Command<
  DissociatePackageCommandInput,
  DissociatePackageCommandOutput,
  ElasticsearchServiceClientResolvedConfig
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
  constructor(readonly input: DissociatePackageCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticsearchServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DissociatePackageCommandInput, DissociatePackageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DissociatePackageCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticsearchServiceClient";
    const commandName = "DissociatePackageCommand";
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
  private serialize(input: DissociatePackageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DissociatePackageCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DissociatePackageCommandOutput> {
    return de_DissociatePackageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
