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

import { AmpClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmpClient";
import { CreateScraperRequest, CreateScraperResponse } from "../models/models_0";
import { de_CreateScraperCommand, se_CreateScraperCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateScraperCommand}.
 */
export interface CreateScraperCommandInput extends CreateScraperRequest {}
/**
 * @public
 *
 * The output of {@link CreateScraperCommand}.
 */
export interface CreateScraperCommandOutput extends CreateScraperResponse, __MetadataBearer {}

/**
 * @public
 * Create a scraper.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmpClient, CreateScraperCommand } from "@aws-sdk/client-amp"; // ES Modules import
 * // const { AmpClient, CreateScraperCommand } = require("@aws-sdk/client-amp"); // CommonJS import
 * const client = new AmpClient(config);
 * const input = { // CreateScraperRequest
 *   alias: "STRING_VALUE",
 *   scrapeConfiguration: { // ScrapeConfiguration Union: only one key present
 *     configurationBlob: "BLOB_VALUE",
 *   },
 *   source: { // Source Union: only one key present
 *     eksConfiguration: { // EksConfiguration
 *       clusterArn: "STRING_VALUE", // required
 *       securityGroupIds: [ // SecurityGroupIds
 *         "STRING_VALUE",
 *       ],
 *       subnetIds: [ // SubnetIds // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 *   destination: { // Destination Union: only one key present
 *     ampConfiguration: { // AmpConfiguration
 *       workspaceArn: "STRING_VALUE", // required
 *     },
 *   },
 *   clientToken: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateScraperCommand(input);
 * const response = await client.send(command);
 * // { // CreateScraperResponse
 * //   scraperId: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   status: { // ScraperStatus
 * //     statusCode: "STRING_VALUE", // required
 * //   },
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateScraperCommandInput - {@link CreateScraperCommandInput}
 * @returns {@link CreateScraperCommandOutput}
 * @see {@link CreateScraperCommandInput} for command's `input` shape.
 * @see {@link CreateScraperCommandOutput} for command's `response` shape.
 * @see {@link AmpClientResolvedConfig | config} for AmpClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  User does not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *  Updating or deleting a resource can cause an inconsistent state.
 *
 * @throws {@link InternalServerException} (server fault)
 *  Unexpected error during processing of request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  Request references a resource which does not exist.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  Request would cause a service quota to be exceeded.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  Request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *  The input fails to satisfy the constraints specified by an AWS service.
 *
 * @throws {@link AmpServiceException}
 * <p>Base exception class for all service exceptions from Amp service.</p>
 *
 */
export class CreateScraperCommand extends $Command<
  CreateScraperCommandInput,
  CreateScraperCommandOutput,
  AmpClientResolvedConfig
> {
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
  constructor(readonly input: CreateScraperCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AmpClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateScraperCommandInput, CreateScraperCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateScraperCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AmpClient";
    const commandName = "CreateScraperCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonPrometheusService",
        operation: "CreateScraper",
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
  private serialize(input: CreateScraperCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateScraperCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateScraperCommandOutput> {
    return de_CreateScraperCommand(output, context);
  }
}
