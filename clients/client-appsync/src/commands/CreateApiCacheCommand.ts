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

import { AppSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppSyncClient";
import { CreateApiCacheRequest, CreateApiCacheResponse } from "../models/models_0";
import { de_CreateApiCacheCommand, se_CreateApiCacheCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateApiCacheCommand}.
 */
export interface CreateApiCacheCommandInput extends CreateApiCacheRequest {}
/**
 * @public
 *
 * The output of {@link CreateApiCacheCommand}.
 */
export interface CreateApiCacheCommandOutput extends CreateApiCacheResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a cache for the GraphQL API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, CreateApiCacheCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, CreateApiCacheCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const input = { // CreateApiCacheRequest
 *   apiId: "STRING_VALUE", // required
 *   ttl: Number("long"), // required
 *   transitEncryptionEnabled: true || false,
 *   atRestEncryptionEnabled: true || false,
 *   apiCachingBehavior: "FULL_REQUEST_CACHING" || "PER_RESOLVER_CACHING", // required
 *   type: "T2_SMALL" || "T2_MEDIUM" || "R4_LARGE" || "R4_XLARGE" || "R4_2XLARGE" || "R4_4XLARGE" || "R4_8XLARGE" || "SMALL" || "MEDIUM" || "LARGE" || "XLARGE" || "LARGE_2X" || "LARGE_4X" || "LARGE_8X" || "LARGE_12X", // required
 * };
 * const command = new CreateApiCacheCommand(input);
 * const response = await client.send(command);
 * // { // CreateApiCacheResponse
 * //   apiCache: { // ApiCache
 * //     ttl: Number("long"),
 * //     apiCachingBehavior: "FULL_REQUEST_CACHING" || "PER_RESOLVER_CACHING",
 * //     transitEncryptionEnabled: true || false,
 * //     atRestEncryptionEnabled: true || false,
 * //     type: "T2_SMALL" || "T2_MEDIUM" || "R4_LARGE" || "R4_XLARGE" || "R4_2XLARGE" || "R4_4XLARGE" || "R4_8XLARGE" || "SMALL" || "MEDIUM" || "LARGE" || "XLARGE" || "LARGE_2X" || "LARGE_4X" || "LARGE_8X" || "LARGE_12X",
 * //     status: "AVAILABLE" || "CREATING" || "DELETING" || "MODIFYING" || "FAILED",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateApiCacheCommandInput - {@link CreateApiCacheCommandInput}
 * @returns {@link CreateApiCacheCommandOutput}
 * @see {@link CreateApiCacheCommandInput} for command's `input` shape.
 * @see {@link CreateApiCacheCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for AppSyncClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is not well formed. For example, a value is invalid or a required field is
 *          missing. Check the field values, and then try again.</p>
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Another modification is in progress at this time and it must complete before you can
 *          make your change.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal AppSync error occurred. Try your request again.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource specified in the request was not found. Check the resource, and then try
 *          again.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You aren't authorized to perform this operation.</p>
 *
 * @throws {@link AppSyncServiceException}
 * <p>Base exception class for all service exceptions from AppSync service.</p>
 *
 */
export class CreateApiCacheCommand extends $Command<
  CreateApiCacheCommandInput,
  CreateApiCacheCommandOutput,
  AppSyncClientResolvedConfig
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
  constructor(readonly input: CreateApiCacheCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateApiCacheCommandInput, CreateApiCacheCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateApiCacheCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppSyncClient";
    const commandName = "CreateApiCacheCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSDeepdishControlPlaneService",
        operation: "CreateApiCache",
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
  private serialize(input: CreateApiCacheCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateApiCacheCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateApiCacheCommandOutput> {
    return de_CreateApiCacheCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
