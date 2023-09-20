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

import { MediaPackageClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaPackageClient";
import { CreateHarvestJobRequest, CreateHarvestJobResponse } from "../models/models_0";
import { de_CreateHarvestJobCommand, se_CreateHarvestJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateHarvestJobCommand}.
 */
export interface CreateHarvestJobCommandInput extends CreateHarvestJobRequest {}
/**
 * @public
 *
 * The output of {@link CreateHarvestJobCommand}.
 */
export interface CreateHarvestJobCommandOutput extends CreateHarvestJobResponse, __MetadataBearer {}

/**
 * @public
 * Creates a new HarvestJob record.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageClient, CreateHarvestJobCommand } from "@aws-sdk/client-mediapackage"; // ES Modules import
 * // const { MediaPackageClient, CreateHarvestJobCommand } = require("@aws-sdk/client-mediapackage"); // CommonJS import
 * const client = new MediaPackageClient(config);
 * const input = { // CreateHarvestJobRequest
 *   EndTime: "STRING_VALUE", // required
 *   Id: "STRING_VALUE", // required
 *   OriginEndpointId: "STRING_VALUE", // required
 *   S3Destination: { // S3Destination
 *     BucketName: "STRING_VALUE", // required
 *     ManifestKey: "STRING_VALUE", // required
 *     RoleArn: "STRING_VALUE", // required
 *   },
 *   StartTime: "STRING_VALUE", // required
 * };
 * const command = new CreateHarvestJobCommand(input);
 * const response = await client.send(command);
 * // { // CreateHarvestJobResponse
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
 * @param CreateHarvestJobCommandInput - {@link CreateHarvestJobCommandInput}
 * @returns {@link CreateHarvestJobCommandOutput}
 * @see {@link CreateHarvestJobCommandInput} for command's `input` shape.
 * @see {@link CreateHarvestJobCommandOutput} for command's `response` shape.
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
export class CreateHarvestJobCommand extends $Command<
  CreateHarvestJobCommandInput,
  CreateHarvestJobCommandOutput,
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
  constructor(readonly input: CreateHarvestJobCommandInput) {
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
  ): Handler<CreateHarvestJobCommandInput, CreateHarvestJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateHarvestJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaPackageClient";
    const commandName = "CreateHarvestJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "MediaPackage",
        operation: "CreateHarvestJob",
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
  private serialize(input: CreateHarvestJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateHarvestJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateHarvestJobCommandOutput> {
    return de_CreateHarvestJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
