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

import { MediaPackageClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaPackageClient";
import { DescribeHarvestJobRequest, DescribeHarvestJobResponse } from "../models/models_0";
import { de_DescribeHarvestJobCommand, se_DescribeHarvestJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeHarvestJobCommand}.
 */
export interface DescribeHarvestJobCommandInput extends DescribeHarvestJobRequest {}
/**
 * @public
 *
 * The output of {@link DescribeHarvestJobCommand}.
 */
export interface DescribeHarvestJobCommandOutput extends DescribeHarvestJobResponse, __MetadataBearer {}

/**
 * @public
 * Gets details about an existing HarvestJob.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageClient, DescribeHarvestJobCommand } from "@aws-sdk/client-mediapackage"; // ES Modules import
 * // const { MediaPackageClient, DescribeHarvestJobCommand } = require("@aws-sdk/client-mediapackage"); // CommonJS import
 * const client = new MediaPackageClient(config);
 * const input = { // DescribeHarvestJobRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new DescribeHarvestJobCommand(input);
 * const response = await client.send(command);
 * // { // DescribeHarvestJobResponse
 * //   Arn: "STRING_VALUE",
 * //   ChannelId: "STRING_VALUE",
 * //   CreatedAt: "STRING_VALUE",
 * //   EndTime: "STRING_VALUE",
 * //   Id: "STRING_VALUE",
 * //   OriginEndpointId: "STRING_VALUE",
 * //   S3Destination: { // S3Destination
 * //     BucketName: "STRING_VALUE", // required
 * //     ManifestKey: "STRING_VALUE", // required
 * //     RoleArn: "STRING_VALUE", // required
 * //   },
 * //   StartTime: "STRING_VALUE",
 * //   Status: "IN_PROGRESS" || "SUCCEEDED" || "FAILED",
 * // };
 *
 * ```
 *
 * @param DescribeHarvestJobCommandInput - {@link DescribeHarvestJobCommandInput}
 * @returns {@link DescribeHarvestJobCommandOutput}
 * @see {@link DescribeHarvestJobCommandInput} for command's `input` shape.
 * @see {@link DescribeHarvestJobCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageClientResolvedConfig | config} for MediaPackageClient's `config` shape.
 *
 * @throws {@link ForbiddenException} (client fault)
 *  The client is not authorized to access the requested resource.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  An unexpected error occurred.
 *
 * @throws {@link NotFoundException} (client fault)
 *  The requested resource does not exist.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  An unexpected error occurred.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  The client has exceeded their resource or throttling limits.
 *
 * @throws {@link UnprocessableEntityException} (client fault)
 *  The parameters sent in the request are not valid.
 *
 * @throws {@link MediaPackageServiceException}
 * <p>Base exception class for all service exceptions from MediaPackage service.</p>
 *
 */
export class DescribeHarvestJobCommand extends $Command<
  DescribeHarvestJobCommandInput,
  DescribeHarvestJobCommandOutput,
  MediaPackageClientResolvedConfig
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
  constructor(readonly input: DescribeHarvestJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaPackageClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeHarvestJobCommandInput, DescribeHarvestJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeHarvestJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaPackageClient";
    const commandName = "DescribeHarvestJobCommand";
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
  private serialize(input: DescribeHarvestJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeHarvestJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeHarvestJobCommandOutput> {
    return de_DescribeHarvestJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
