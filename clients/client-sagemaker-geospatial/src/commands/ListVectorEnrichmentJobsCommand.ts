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

import {
  ListVectorEnrichmentJobInput,
  ListVectorEnrichmentJobInputFilterSensitiveLog,
  ListVectorEnrichmentJobOutput,
  ListVectorEnrichmentJobOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_ListVectorEnrichmentJobsCommand, se_ListVectorEnrichmentJobsCommand } from "../protocols/Aws_restJson1";
import {
  SageMakerGeospatialClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../SageMakerGeospatialClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListVectorEnrichmentJobsCommand}.
 */
export interface ListVectorEnrichmentJobsCommandInput extends ListVectorEnrichmentJobInput {}
/**
 * @public
 *
 * The output of {@link ListVectorEnrichmentJobsCommand}.
 */
export interface ListVectorEnrichmentJobsCommandOutput extends ListVectorEnrichmentJobOutput, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves a list of vector enrichment jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerGeospatialClient, ListVectorEnrichmentJobsCommand } from "@aws-sdk/client-sagemaker-geospatial"; // ES Modules import
 * // const { SageMakerGeospatialClient, ListVectorEnrichmentJobsCommand } = require("@aws-sdk/client-sagemaker-geospatial"); // CommonJS import
 * const client = new SageMakerGeospatialClient(config);
 * const input = { // ListVectorEnrichmentJobInput
 *   StatusEquals: "STRING_VALUE",
 *   SortOrder: "STRING_VALUE",
 *   SortBy: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListVectorEnrichmentJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListVectorEnrichmentJobOutput
 * //   VectorEnrichmentJobSummaries: [ // VectorEnrichmentJobList // required
 * //     { // ListVectorEnrichmentJobOutputConfig
 * //       Arn: "STRING_VALUE", // required
 * //       Name: "STRING_VALUE", // required
 * //       Type: "STRING_VALUE", // required
 * //       CreationTime: new Date("TIMESTAMP"), // required
 * //       DurationInSeconds: Number("int"), // required
 * //       Status: "STRING_VALUE", // required
 * //       Tags: { // Tags
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListVectorEnrichmentJobsCommandInput - {@link ListVectorEnrichmentJobsCommandInput}
 * @returns {@link ListVectorEnrichmentJobsCommandOutput}
 * @see {@link ListVectorEnrichmentJobsCommandInput} for command's `input` shape.
 * @see {@link ListVectorEnrichmentJobsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerGeospatialClientResolvedConfig | config} for SageMakerGeospatialClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource which does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link SageMakerGeospatialServiceException}
 * <p>Base exception class for all service exceptions from SageMakerGeospatial service.</p>
 *
 */
export class ListVectorEnrichmentJobsCommand extends $Command<
  ListVectorEnrichmentJobsCommandInput,
  ListVectorEnrichmentJobsCommandOutput,
  SageMakerGeospatialClientResolvedConfig
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
  constructor(readonly input: ListVectorEnrichmentJobsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerGeospatialClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListVectorEnrichmentJobsCommandInput, ListVectorEnrichmentJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListVectorEnrichmentJobsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerGeospatialClient";
    const commandName = "ListVectorEnrichmentJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListVectorEnrichmentJobInputFilterSensitiveLog,
      outputFilterSensitiveLog: ListVectorEnrichmentJobOutputFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "SageMakerGeospatial",
        operation: "ListVectorEnrichmentJobs",
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
  private serialize(input: ListVectorEnrichmentJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListVectorEnrichmentJobsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListVectorEnrichmentJobsCommandOutput> {
    return de_ListVectorEnrichmentJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
