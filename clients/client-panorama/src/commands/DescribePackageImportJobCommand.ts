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

import { DescribePackageImportJobRequest, DescribePackageImportJobResponse } from "../models/models_0";
import { PanoramaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PanoramaClient";
import { de_DescribePackageImportJobCommand, se_DescribePackageImportJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribePackageImportJobCommand}.
 */
export interface DescribePackageImportJobCommandInput extends DescribePackageImportJobRequest {}
/**
 * @public
 *
 * The output of {@link DescribePackageImportJobCommand}.
 */
export interface DescribePackageImportJobCommandOutput extends DescribePackageImportJobResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about a package import job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PanoramaClient, DescribePackageImportJobCommand } from "@aws-sdk/client-panorama"; // ES Modules import
 * // const { PanoramaClient, DescribePackageImportJobCommand } = require("@aws-sdk/client-panorama"); // CommonJS import
 * const client = new PanoramaClient(config);
 * const input = { // DescribePackageImportJobRequest
 *   JobId: "STRING_VALUE", // required
 * };
 * const command = new DescribePackageImportJobCommand(input);
 * const response = await client.send(command);
 * // { // DescribePackageImportJobResponse
 * //   JobId: "STRING_VALUE", // required
 * //   ClientToken: "STRING_VALUE",
 * //   JobType: "STRING_VALUE", // required
 * //   InputConfig: { // PackageImportJobInputConfig
 * //     PackageVersionInputConfig: { // PackageVersionInputConfig
 * //       S3Location: { // S3Location
 * //         Region: "STRING_VALUE",
 * //         BucketName: "STRING_VALUE", // required
 * //         ObjectKey: "STRING_VALUE", // required
 * //       },
 * //     },
 * //   },
 * //   OutputConfig: { // PackageImportJobOutputConfig
 * //     PackageVersionOutputConfig: { // PackageVersionOutputConfig
 * //       PackageName: "STRING_VALUE", // required
 * //       PackageVersion: "STRING_VALUE", // required
 * //       MarkLatest: true || false,
 * //     },
 * //   },
 * //   Output: { // PackageImportJobOutput
 * //     PackageId: "STRING_VALUE", // required
 * //     PackageVersion: "STRING_VALUE", // required
 * //     PatchVersion: "STRING_VALUE", // required
 * //     OutputS3Location: { // OutPutS3Location
 * //       BucketName: "STRING_VALUE", // required
 * //       ObjectKey: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   CreatedTime: new Date("TIMESTAMP"), // required
 * //   LastUpdatedTime: new Date("TIMESTAMP"), // required
 * //   Status: "STRING_VALUE", // required
 * //   StatusMessage: "STRING_VALUE", // required
 * //   JobTags: [ // JobTagsList
 * //     { // JobResourceTags
 * //       ResourceType: "STRING_VALUE", // required
 * //       Tags: { // TagMap // required
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribePackageImportJobCommandInput - {@link DescribePackageImportJobCommandInput}
 * @returns {@link DescribePackageImportJobCommandOutput}
 * @see {@link DescribePackageImportJobCommandInput} for command's `input` shape.
 * @see {@link DescribePackageImportJobCommandOutput} for command's `response` shape.
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
 * @throws {@link ValidationException} (client fault)
 *  <p>The request contains an invalid parameter value.</p>
 *
 * @throws {@link PanoramaServiceException}
 * <p>Base exception class for all service exceptions from Panorama service.</p>
 *
 */
export class DescribePackageImportJobCommand extends $Command<
  DescribePackageImportJobCommandInput,
  DescribePackageImportJobCommandOutput,
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
  constructor(readonly input: DescribePackageImportJobCommandInput) {
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
  ): Handler<DescribePackageImportJobCommandInput, DescribePackageImportJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribePackageImportJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PanoramaClient";
    const commandName = "DescribePackageImportJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "OmniCloudServiceLambda",
        operation: "DescribePackageImportJob",
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
  private serialize(input: DescribePackageImportJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribePackageImportJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribePackageImportJobCommandOutput> {
    return de_DescribePackageImportJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
