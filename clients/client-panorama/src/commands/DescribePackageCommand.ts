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

import { DescribePackageRequest, DescribePackageResponse } from "../models/models_0";
import { PanoramaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PanoramaClient";
import { de_DescribePackageCommand, se_DescribePackageCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribePackageCommand}.
 */
export interface DescribePackageCommandInput extends DescribePackageRequest {}
/**
 * @public
 *
 * The output of {@link DescribePackageCommand}.
 */
export interface DescribePackageCommandOutput extends DescribePackageResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about a package.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PanoramaClient, DescribePackageCommand } from "@aws-sdk/client-panorama"; // ES Modules import
 * // const { PanoramaClient, DescribePackageCommand } = require("@aws-sdk/client-panorama"); // CommonJS import
 * const client = new PanoramaClient(config);
 * const input = { // DescribePackageRequest
 *   PackageId: "STRING_VALUE", // required
 * };
 * const command = new DescribePackageCommand(input);
 * const response = await client.send(command);
 * // { // DescribePackageResponse
 * //   PackageId: "STRING_VALUE", // required
 * //   PackageName: "STRING_VALUE", // required
 * //   Arn: "STRING_VALUE", // required
 * //   StorageLocation: { // StorageLocation
 * //     Bucket: "STRING_VALUE", // required
 * //     RepoPrefixLocation: "STRING_VALUE", // required
 * //     GeneratedPrefixLocation: "STRING_VALUE", // required
 * //     BinaryPrefixLocation: "STRING_VALUE", // required
 * //     ManifestPrefixLocation: "STRING_VALUE", // required
 * //   },
 * //   ReadAccessPrincipalArns: [ // PrincipalArnsList
 * //     "STRING_VALUE",
 * //   ],
 * //   WriteAccessPrincipalArns: [
 * //     "STRING_VALUE",
 * //   ],
 * //   CreatedTime: new Date("TIMESTAMP"), // required
 * //   Tags: { // TagMap // required
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribePackageCommandInput - {@link DescribePackageCommandInput}
 * @returns {@link DescribePackageCommandOutput}
 * @see {@link DescribePackageCommandInput} for command's `input` shape.
 * @see {@link DescribePackageCommandOutput} for command's `response` shape.
 * @see {@link PanoramaClientResolvedConfig | config} for PanoramaClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The requestor does not have permission to access the target action or resource.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The target resource is in use.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The target resource was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request contains an invalid parameter value.</p>
 *
 * @throws {@link PanoramaServiceException}
 * <p>Base exception class for all service exceptions from Panorama service.</p>
 *
 */
export class DescribePackageCommand extends $Command<
  DescribePackageCommandInput,
  DescribePackageCommandOutput,
  PanoramaClientResolvedConfig
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
  constructor(readonly input: DescribePackageCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PanoramaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribePackageCommandInput, DescribePackageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribePackageCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PanoramaClient";
    const commandName = "DescribePackageCommand";
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
  private serialize(input: DescribePackageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribePackageCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribePackageCommandOutput> {
    return de_DescribePackageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
