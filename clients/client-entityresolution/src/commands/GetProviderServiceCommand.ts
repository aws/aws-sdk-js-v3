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

import { EntityResolutionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EntityResolutionClient";
import { GetProviderServiceInput, GetProviderServiceOutput } from "../models/models_0";
import { de_GetProviderServiceCommand, se_GetProviderServiceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetProviderServiceCommand}.
 */
export interface GetProviderServiceCommandInput extends GetProviderServiceInput {}
/**
 * @public
 *
 * The output of {@link GetProviderServiceCommand}.
 */
export interface GetProviderServiceCommandOutput extends GetProviderServiceOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns the <code>ProviderService</code> of a given name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EntityResolutionClient, GetProviderServiceCommand } from "@aws-sdk/client-entityresolution"; // ES Modules import
 * // const { EntityResolutionClient, GetProviderServiceCommand } = require("@aws-sdk/client-entityresolution"); // CommonJS import
 * const client = new EntityResolutionClient(config);
 * const input = { // GetProviderServiceInput
 *   providerName: "STRING_VALUE", // required
 *   providerServiceName: "STRING_VALUE", // required
 * };
 * const command = new GetProviderServiceCommand(input);
 * const response = await client.send(command);
 * // { // GetProviderServiceOutput
 * //   providerName: "STRING_VALUE", // required
 * //   providerServiceName: "STRING_VALUE", // required
 * //   providerServiceDisplayName: "STRING_VALUE", // required
 * //   providerServiceType: "ASSIGNMENT" || "ID_MAPPING", // required
 * //   providerServiceArn: "STRING_VALUE", // required
 * //   providerConfigurationDefinition: "DOCUMENT_VALUE",
 * //   providerEndpointConfiguration: { // ProviderEndpointConfiguration Union: only one key present
 * //     marketplaceConfiguration: { // ProviderMarketplaceConfiguration
 * //       dataSetId: "STRING_VALUE", // required
 * //       revisionId: "STRING_VALUE", // required
 * //       assetId: "STRING_VALUE", // required
 * //       listingId: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   anonymizedOutput: true || false, // required
 * //   providerEntityOutputDefinition: "DOCUMENT_VALUE", // required
 * //   providerIntermediateDataAccessConfiguration: { // ProviderIntermediateDataAccessConfiguration
 * //     awsAccountIds: [ // AwsAccountIdList
 * //       "STRING_VALUE",
 * //     ],
 * //     requiredBucketActions: [ // RequiredBucketActionsList
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetProviderServiceCommandInput - {@link GetProviderServiceCommandInput}
 * @returns {@link GetProviderServiceCommandOutput}
 * @see {@link GetProviderServiceCommandInput} for command's `input` shape.
 * @see {@link GetProviderServiceCommandOutput} for command's `response` shape.
 * @see {@link EntityResolutionClientResolvedConfig | config} for EntityResolutionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action. <code>HTTP Status Code:
 *             403</code>
 *          </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Entity Resolution
 *          service. <code>HTTP Status Code: 500</code>
 *          </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found. <code>HTTP Status Code: 404</code>
 *          </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. <code>HTTP Status Code:
 *          429</code>
 *          </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by Entity Resolution. <code>HTTP
 *             Status Code: 400</code>
 *          </p>
 *
 * @throws {@link EntityResolutionServiceException}
 * <p>Base exception class for all service exceptions from EntityResolution service.</p>
 *
 */
export class GetProviderServiceCommand extends $Command<
  GetProviderServiceCommandInput,
  GetProviderServiceCommandOutput,
  EntityResolutionClientResolvedConfig
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
  constructor(readonly input: GetProviderServiceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EntityResolutionClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetProviderServiceCommandInput, GetProviderServiceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetProviderServiceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EntityResolutionClient";
    const commandName = "GetProviderServiceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSVeniceService",
        operation: "GetProviderService",
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
  private serialize(input: GetProviderServiceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetProviderServiceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetProviderServiceCommandOutput> {
    return de_GetProviderServiceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
