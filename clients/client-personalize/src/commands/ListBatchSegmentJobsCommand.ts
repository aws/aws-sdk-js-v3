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

import { ListBatchSegmentJobsRequest, ListBatchSegmentJobsResponse } from "../models/models_0";
import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { de_ListBatchSegmentJobsCommand, se_ListBatchSegmentJobsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListBatchSegmentJobsCommand}.
 */
export interface ListBatchSegmentJobsCommandInput extends ListBatchSegmentJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListBatchSegmentJobsCommand}.
 */
export interface ListBatchSegmentJobsCommandOutput extends ListBatchSegmentJobsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets a list of the batch segment jobs that have been performed off of a solution
 *       version that you specify.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, ListBatchSegmentJobsCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, ListBatchSegmentJobsCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const input = { // ListBatchSegmentJobsRequest
 *   solutionVersionArn: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListBatchSegmentJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListBatchSegmentJobsResponse
 * //   batchSegmentJobs: [ // BatchSegmentJobs
 * //     { // BatchSegmentJobSummary
 * //       batchSegmentJobArn: "STRING_VALUE",
 * //       jobName: "STRING_VALUE",
 * //       status: "STRING_VALUE",
 * //       creationDateTime: new Date("TIMESTAMP"),
 * //       lastUpdatedDateTime: new Date("TIMESTAMP"),
 * //       failureReason: "STRING_VALUE",
 * //       solutionVersionArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListBatchSegmentJobsCommandInput - {@link ListBatchSegmentJobsCommandInput}
 * @returns {@link ListBatchSegmentJobsCommandOutput}
 * @see {@link ListBatchSegmentJobsCommandInput} for command's `input` shape.
 * @see {@link ListBatchSegmentJobsCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for PersonalizeClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Provide a valid value for the field or parameter.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The token is not valid.</p>
 *
 * @throws {@link PersonalizeServiceException}
 * <p>Base exception class for all service exceptions from Personalize service.</p>
 *
 */
export class ListBatchSegmentJobsCommand extends $Command<
  ListBatchSegmentJobsCommandInput,
  ListBatchSegmentJobsCommandOutput,
  PersonalizeClientResolvedConfig
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
  constructor(readonly input: ListBatchSegmentJobsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PersonalizeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListBatchSegmentJobsCommandInput, ListBatchSegmentJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListBatchSegmentJobsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PersonalizeClient";
    const commandName = "ListBatchSegmentJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonPersonalize",
        operation: "ListBatchSegmentJobs",
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
  private serialize(input: ListBatchSegmentJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListBatchSegmentJobsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListBatchSegmentJobsCommandOutput> {
    return de_ListBatchSegmentJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
