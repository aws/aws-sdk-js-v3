// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { UpdatePackageRequest, UpdatePackageResponse } from "../models/models_0";
import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import {
  deserializeAws_restJson1UpdatePackageCommand,
  serializeAws_restJson1UpdatePackageCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link UpdatePackageCommand}.
 */
export interface UpdatePackageCommandInput extends UpdatePackageRequest {}
/**
 * @public
 *
 * The output of {@link UpdatePackageCommand}.
 */
export interface UpdatePackageCommandOutput extends UpdatePackageResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates a package for use with Amazon OpenSearch Service domains. For more information, see
 *     <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/custom-packages.html">Custom packages for Amazon OpenSearch Service</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, UpdatePackageCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, UpdatePackageCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * const client = new OpenSearchClient(config);
 * const input = {
 *   PackageID: "STRING_VALUE", // required
 *   PackageSource: {
 *     S3BucketName: "STRING_VALUE",
 *     S3Key: "STRING_VALUE",
 *   },
 *   PackageDescription: "STRING_VALUE",
 *   CommitMessage: "STRING_VALUE",
 * };
 * const command = new UpdatePackageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param UpdatePackageCommandInput - {@link UpdatePackageCommandInput}
 * @returns {@link UpdatePackageCommandOutput}
 * @see {@link UpdatePackageCommandInput} for command's `input` shape.
 * @see {@link UpdatePackageCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for OpenSearchClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>An error occurred because you don't have permissions to access the resource.</p>
 *
 * @throws {@link BaseException} (client fault)
 *  <p>An error occurred while processing the request.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Request processing failed because of an unknown error, exception, or internal failure.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>An exception for trying to create more than the allowed number of resources or sub-resources.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An exception for accessing or deleting a resource that does not exist..</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 *
 *
 */
export class UpdatePackageCommand extends $Command<
  UpdatePackageCommandInput,
  UpdatePackageCommandOutput,
  OpenSearchClientResolvedConfig
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
  constructor(readonly input: UpdatePackageCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OpenSearchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdatePackageCommandInput, UpdatePackageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdatePackageCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpenSearchClient";
    const commandName = "UpdatePackageCommand";
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
  private serialize(input: UpdatePackageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdatePackageCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdatePackageCommandOutput> {
    return deserializeAws_restJson1UpdatePackageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
