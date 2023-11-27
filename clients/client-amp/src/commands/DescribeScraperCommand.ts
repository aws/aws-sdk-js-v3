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
import { DescribeScraperRequest, DescribeScraperResponse } from "../models/models_0";
import { de_DescribeScraperCommand, se_DescribeScraperCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeScraperCommand}.
 */
export interface DescribeScraperCommandInput extends DescribeScraperRequest {}
/**
 * @public
 *
 * The output of {@link DescribeScraperCommand}.
 */
export interface DescribeScraperCommandOutput extends DescribeScraperResponse, __MetadataBearer {}

/**
 * @public
 * Describe an existing scraper.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmpClient, DescribeScraperCommand } from "@aws-sdk/client-amp"; // ES Modules import
 * // const { AmpClient, DescribeScraperCommand } = require("@aws-sdk/client-amp"); // CommonJS import
 * const client = new AmpClient(config);
 * const input = { // DescribeScraperRequest
 *   scraperId: "STRING_VALUE", // required
 * };
 * const command = new DescribeScraperCommand(input);
 * const response = await client.send(command);
 * // { // DescribeScraperResponse
 * //   scraper: { // ScraperDescription
 * //     alias: "STRING_VALUE",
 * //     scraperId: "STRING_VALUE", // required
 * //     arn: "STRING_VALUE", // required
 * //     roleArn: "STRING_VALUE", // required
 * //     status: { // ScraperStatus
 * //       statusCode: "STRING_VALUE", // required
 * //     },
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     lastModifiedAt: new Date("TIMESTAMP"), // required
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     statusReason: "STRING_VALUE",
 * //     scrapeConfiguration: { // ScrapeConfiguration Union: only one key present
 * //       configurationBlob: "BLOB_VALUE",
 * //     },
 * //     source: { // Source Union: only one key present
 * //       eksConfiguration: { // EksConfiguration
 * //         clusterArn: "STRING_VALUE", // required
 * //         securityGroupIds: [ // SecurityGroupIds
 * //           "STRING_VALUE",
 * //         ],
 * //         subnetIds: [ // SubnetIds // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //     destination: { // Destination Union: only one key present
 * //       ampConfiguration: { // AmpConfiguration
 * //         workspaceArn: "STRING_VALUE", // required
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeScraperCommandInput - {@link DescribeScraperCommandInput}
 * @returns {@link DescribeScraperCommandOutput}
 * @see {@link DescribeScraperCommandInput} for command's `input` shape.
 * @see {@link DescribeScraperCommandOutput} for command's `response` shape.
 * @see {@link AmpClientResolvedConfig | config} for AmpClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  User does not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *  Unexpected error during processing of request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  Request references a resource which does not exist.
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
export class DescribeScraperCommand extends $Command<
  DescribeScraperCommandInput,
  DescribeScraperCommandOutput,
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
  constructor(readonly input: DescribeScraperCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AmpClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeScraperCommandInput, DescribeScraperCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeScraperCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AmpClient";
    const commandName = "DescribeScraperCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonPrometheusService",
        operation: "DescribeScraper",
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
  private serialize(input: DescribeScraperCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeScraperCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeScraperCommandOutput> {
    return de_DescribeScraperCommand(output, context);
  }
}
