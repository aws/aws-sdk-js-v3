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

import { CodeartifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeartifactClient";
import { DescribePackageVersionRequest, DescribePackageVersionResult } from "../models/models_0";
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
export interface DescribePackageVersionCommandOutput extends DescribePackageVersionResult, __MetadataBearer {}

/**
 * @public
 * <p>
 *        Returns a
 *        <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageVersionDescription.html">PackageVersionDescription</a>
 *        object that contains information about the requested package version.
 *      </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, DescribePackageVersionCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, DescribePackageVersionCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * const client = new CodeartifactClient(config);
 * const input = { // DescribePackageVersionRequest
 *   domain: "STRING_VALUE", // required
 *   domainOwner: "STRING_VALUE",
 *   repository: "STRING_VALUE", // required
 *   format: "npm" || "pypi" || "maven" || "nuget" || "generic", // required
 *   namespace: "STRING_VALUE",
 *   package: "STRING_VALUE", // required
 *   packageVersion: "STRING_VALUE", // required
 * };
 * const command = new DescribePackageVersionCommand(input);
 * const response = await client.send(command);
 * // { // DescribePackageVersionResult
 * //   packageVersion: { // PackageVersionDescription
 * //     format: "npm" || "pypi" || "maven" || "nuget" || "generic",
 * //     namespace: "STRING_VALUE",
 * //     packageName: "STRING_VALUE",
 * //     displayName: "STRING_VALUE",
 * //     version: "STRING_VALUE",
 * //     summary: "STRING_VALUE",
 * //     homePage: "STRING_VALUE",
 * //     sourceCodeRepository: "STRING_VALUE",
 * //     publishedTime: new Date("TIMESTAMP"),
 * //     licenses: [ // LicenseInfoList
 * //       { // LicenseInfo
 * //         name: "STRING_VALUE",
 * //         url: "STRING_VALUE",
 * //       },
 * //     ],
 * //     revision: "STRING_VALUE",
 * //     status: "Published" || "Unfinished" || "Unlisted" || "Archived" || "Disposed" || "Deleted",
 * //     origin: { // PackageVersionOrigin
 * //       domainEntryPoint: { // DomainEntryPoint
 * //         repositoryName: "STRING_VALUE",
 * //         externalConnectionName: "STRING_VALUE",
 * //       },
 * //       originType: "INTERNAL" || "EXTERNAL" || "UNKNOWN",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribePackageVersionCommandInput - {@link DescribePackageVersionCommandInput}
 * @returns {@link DescribePackageVersionCommandOutput}
 * @see {@link DescribePackageVersionCommandInput} for command's `input` shape.
 * @see {@link DescribePackageVersionCommandOutput} for command's `response` shape.
 * @see {@link CodeartifactClientResolvedConfig | config} for CodeartifactClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>
 *         The operation did not succeed because of an unauthorized access attempt.
 *       </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>
 *         The operation did not succeed because prerequisites are not met.
 *       </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> The operation did not succeed because of an error that occurred inside CodeArtifact. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>
 *       The operation did not succeed because the resource requested is not found in the service.
 *     </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>
 *       The operation did not succeed because too many requests are sent to the service.
 *     </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>
 *       The operation did not succeed because a parameter in the request was sent with an invalid value.
 *     </p>
 *
 * @throws {@link CodeartifactServiceException}
 * <p>Base exception class for all service exceptions from Codeartifact service.</p>
 *
 */
export class DescribePackageVersionCommand extends $Command<
  DescribePackageVersionCommandInput,
  DescribePackageVersionCommandOutput,
  CodeartifactClientResolvedConfig
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
    configuration: CodeartifactClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribePackageVersionCommandInput, DescribePackageVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribePackageVersionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeartifactClient";
    const commandName = "DescribePackageVersionCommand";
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
