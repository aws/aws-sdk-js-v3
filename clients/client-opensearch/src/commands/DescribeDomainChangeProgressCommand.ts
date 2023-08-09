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

import { DescribeDomainChangeProgressRequest, DescribeDomainChangeProgressResponse } from "../models/models_0";
import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import {
  de_DescribeDomainChangeProgressCommand,
  se_DescribeDomainChangeProgressCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeDomainChangeProgressCommand}.
 */
export interface DescribeDomainChangeProgressCommandInput extends DescribeDomainChangeProgressRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDomainChangeProgressCommand}.
 */
export interface DescribeDomainChangeProgressCommandOutput
  extends DescribeDomainChangeProgressResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns information about the current blue/green deployment happening on an Amazon
 *    OpenSearch Service domain. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/managedomains-configuration-changes.html">Making configuration changes in Amazon OpenSearch Service</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, DescribeDomainChangeProgressCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, DescribeDomainChangeProgressCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * const client = new OpenSearchClient(config);
 * const input = { // DescribeDomainChangeProgressRequest
 *   DomainName: "STRING_VALUE", // required
 *   ChangeId: "STRING_VALUE",
 * };
 * const command = new DescribeDomainChangeProgressCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDomainChangeProgressResponse
 * //   ChangeProgressStatus: { // ChangeProgressStatusDetails
 * //     ChangeId: "STRING_VALUE",
 * //     StartTime: new Date("TIMESTAMP"),
 * //     Status: "PENDING" || "PROCESSING" || "COMPLETED" || "FAILED",
 * //     PendingProperties: [ // StringList
 * //       "STRING_VALUE",
 * //     ],
 * //     CompletedProperties: [
 * //       "STRING_VALUE",
 * //     ],
 * //     TotalNumberOfStages: Number("int"),
 * //     ChangeProgressStages: [ // ChangeProgressStageList
 * //       { // ChangeProgressStage
 * //         Name: "STRING_VALUE",
 * //         Status: "STRING_VALUE",
 * //         Description: "STRING_VALUE",
 * //         LastUpdated: new Date("TIMESTAMP"),
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeDomainChangeProgressCommandInput - {@link DescribeDomainChangeProgressCommandInput}
 * @returns {@link DescribeDomainChangeProgressCommandOutput}
 * @see {@link DescribeDomainChangeProgressCommandInput} for command's `input` shape.
 * @see {@link DescribeDomainChangeProgressCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for OpenSearchClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *  <p>An error occurred while processing the request.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Request processing failed because of an unknown error, exception, or internal failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 *
 * @throws {@link OpenSearchServiceException}
 * <p>Base exception class for all service exceptions from OpenSearch service.</p>
 *
 */
export class DescribeDomainChangeProgressCommand extends $Command<
  DescribeDomainChangeProgressCommandInput,
  DescribeDomainChangeProgressCommandOutput,
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
  constructor(readonly input: DescribeDomainChangeProgressCommandInput) {
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
  ): Handler<DescribeDomainChangeProgressCommandInput, DescribeDomainChangeProgressCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeDomainChangeProgressCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpenSearchClient";
    const commandName = "DescribeDomainChangeProgressCommand";
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
  private serialize(input: DescribeDomainChangeProgressCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeDomainChangeProgressCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeDomainChangeProgressCommandOutput> {
    return de_DescribeDomainChangeProgressCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
