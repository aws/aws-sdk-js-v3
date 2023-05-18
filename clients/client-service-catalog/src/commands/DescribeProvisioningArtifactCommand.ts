// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@aws-sdk/types";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { SerdeContext as __SerdeContext } from "@smithy/types";

import { DescribeProvisioningArtifactInput, DescribeProvisioningArtifactOutput } from "../models/models_0";
import {
  de_DescribeProvisioningArtifactCommand,
  se_DescribeProvisioningArtifactCommand,
} from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 *
 * The input for {@link DescribeProvisioningArtifactCommand}.
 */
export interface DescribeProvisioningArtifactCommandInput extends DescribeProvisioningArtifactInput {}
/**
 * @public
 *
 * The output of {@link DescribeProvisioningArtifactCommand}.
 */
export interface DescribeProvisioningArtifactCommandOutput
  extends DescribeProvisioningArtifactOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Gets information about the specified provisioning artifact (also known as a version) for the specified product.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DescribeProvisioningArtifactCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DescribeProvisioningArtifactCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const input = { // DescribeProvisioningArtifactInput
 *   AcceptLanguage: "STRING_VALUE",
 *   ProvisioningArtifactId: "STRING_VALUE",
 *   ProductId: "STRING_VALUE",
 *   ProvisioningArtifactName: "STRING_VALUE",
 *   ProductName: "STRING_VALUE",
 *   Verbose: true || false,
 * };
 * const command = new DescribeProvisioningArtifactCommand(input);
 * const response = await client.send(command);
 * // { // DescribeProvisioningArtifactOutput
 * //   ProvisioningArtifactDetail: { // ProvisioningArtifactDetail
 * //     Id: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     Type: "CLOUD_FORMATION_TEMPLATE" || "MARKETPLACE_AMI" || "MARKETPLACE_CAR" || "TERRAFORM_OPEN_SOURCE",
 * //     CreatedTime: new Date("TIMESTAMP"),
 * //     Active: true || false,
 * //     Guidance: "DEFAULT" || "DEPRECATED",
 * //     SourceRevision: "STRING_VALUE",
 * //   },
 * //   Info: { // ProvisioningArtifactInfo
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   Status: "AVAILABLE" || "CREATING" || "FAILED",
 * // };
 *
 * ```
 *
 * @param DescribeProvisioningArtifactInput - {@link DescribeProvisioningArtifactInput}
 * @returns {@link DescribeProvisioningArtifactOutput}
 * @see {@link DescribeProvisioningArtifactCommandInput} for command's `input` shape.
 * @see {@link DescribeProvisioningArtifactCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 * @throws {@link InvalidParametersException} (client fault)
 *  <p>One or more parameters provided to the operation are not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ServiceCatalogServiceException}
 * <p>Base exception class for all service exceptions from ServiceCatalog service.</p>
 *
 */
export class DescribeProvisioningArtifactCommand extends $Command<
  DescribeProvisioningArtifactCommandInput,
  DescribeProvisioningArtifactCommandOutput,
  ServiceCatalogClientResolvedConfig
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
  constructor(readonly input: DescribeProvisioningArtifactCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServiceCatalogClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeProvisioningArtifactCommandInput, DescribeProvisioningArtifactCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeProvisioningArtifactCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "DescribeProvisioningArtifactCommand";
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
  private serialize(input: DescribeProvisioningArtifactCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeProvisioningArtifactCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeProvisioningArtifactCommandOutput> {
    return de_DescribeProvisioningArtifactCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
