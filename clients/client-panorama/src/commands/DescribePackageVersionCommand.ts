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

import { DescribePackageVersionRequest, DescribePackageVersionResponse } from "../models/models_0";
import { PanoramaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PanoramaClient";
import { de_DescribePackageVersionCommand, se_DescribePackageVersionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribePackageVersionCommand}.
 */
export interface DescribePackageVersionCommandInput extends DescribePackageVersionRequest {}
/**
 * @public
 *
 * The output of {@link DescribePackageVersionCommand}.
 */
export interface DescribePackageVersionCommandOutput extends DescribePackageVersionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about a package version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PanoramaClient, DescribePackageVersionCommand } from "@aws-sdk/client-panorama"; // ES Modules import
 * // const { PanoramaClient, DescribePackageVersionCommand } = require("@aws-sdk/client-panorama"); // CommonJS import
 * const client = new PanoramaClient(config);
 * const input = { // DescribePackageVersionRequest
 *   OwnerAccount: "STRING_VALUE",
 *   PackageId: "STRING_VALUE", // required
 *   PackageVersion: "STRING_VALUE", // required
 *   PatchVersion: "STRING_VALUE",
 * };
 * const command = new DescribePackageVersionCommand(input);
 * const response = await client.send(command);
 * // { // DescribePackageVersionResponse
 * //   OwnerAccount: "STRING_VALUE",
 * //   PackageId: "STRING_VALUE", // required
 * //   PackageArn: "STRING_VALUE",
 * //   PackageName: "STRING_VALUE", // required
 * //   PackageVersion: "STRING_VALUE", // required
 * //   PatchVersion: "STRING_VALUE", // required
 * //   IsLatestPatch: true || false, // required
 * //   Status: "STRING_VALUE", // required
 * //   StatusDescription: "STRING_VALUE",
 * //   RegisteredTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribePackageVersionCommandInput - {@link DescribePackageVersionCommandInput}
 * @returns {@link DescribePackageVersionCommandOutput}
 * @see {@link DescribePackageVersionCommandInput} for command's `input` shape.
 * @see {@link DescribePackageVersionCommandOutput} for command's `response` shape.
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
export class DescribePackageVersionCommand extends $Command<
  DescribePackageVersionCommandInput,
  DescribePackageVersionCommandOutput,
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
  constructor(readonly input: DescribePackageVersionCommandInput) {
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
  ): Handler<DescribePackageVersionCommandInput, DescribePackageVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribePackageVersionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PanoramaClient";
    const commandName = "DescribePackageVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "OmniCloudServiceLambda",
        operation: "DescribePackageVersion",
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
  private serialize(input: DescribePackageVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribePackageVersionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribePackageVersionCommandOutput> {
    return de_DescribePackageVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
