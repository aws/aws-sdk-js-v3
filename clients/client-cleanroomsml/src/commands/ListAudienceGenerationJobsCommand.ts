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

import { CleanRoomsMLClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsMLClient";
import { ListAudienceGenerationJobsRequest, ListAudienceGenerationJobsResponse } from "../models/models_0";
import { de_ListAudienceGenerationJobsCommand, se_ListAudienceGenerationJobsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListAudienceGenerationJobsCommand}.
 */
export interface ListAudienceGenerationJobsCommandInput extends ListAudienceGenerationJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListAudienceGenerationJobsCommand}.
 */
export interface ListAudienceGenerationJobsCommandOutput extends ListAudienceGenerationJobsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of audience generation jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsMLClient, ListAudienceGenerationJobsCommand } from "@aws-sdk/client-cleanroomsml"; // ES Modules import
 * // const { CleanRoomsMLClient, ListAudienceGenerationJobsCommand } = require("@aws-sdk/client-cleanroomsml"); // CommonJS import
 * const client = new CleanRoomsMLClient(config);
 * const input = { // ListAudienceGenerationJobsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   configuredAudienceModelArn: "STRING_VALUE",
 *   collaborationId: "STRING_VALUE",
 * };
 * const command = new ListAudienceGenerationJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListAudienceGenerationJobsResponse
 * //   nextToken: "STRING_VALUE",
 * //   audienceGenerationJobs: [ // AudienceGenerationJobList // required
 * //     { // AudienceGenerationJobSummary
 * //       createTime: new Date("TIMESTAMP"), // required
 * //       updateTime: new Date("TIMESTAMP"), // required
 * //       audienceGenerationJobArn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       status: "CREATE_PENDING" || "CREATE_IN_PROGRESS" || "CREATE_FAILED" || "ACTIVE" || "DELETE_PENDING" || "DELETE_IN_PROGRESS" || "DELETE_FAILED", // required
 * //       configuredAudienceModelArn: "STRING_VALUE", // required
 * //       collaborationId: "STRING_VALUE",
 * //       startedBy: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListAudienceGenerationJobsCommandInput - {@link ListAudienceGenerationJobsCommandInput}
 * @returns {@link ListAudienceGenerationJobsCommandOutput}
 * @see {@link ListAudienceGenerationJobsCommandInput} for command's `input` shape.
 * @see {@link ListAudienceGenerationJobsCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsMLClientResolvedConfig | config} for CleanRoomsMLClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request parameters for this request are incorrect.</p>
 *
 * @throws {@link CleanRoomsMLServiceException}
 * <p>Base exception class for all service exceptions from CleanRoomsML service.</p>
 *
 */
export class ListAudienceGenerationJobsCommand extends $Command<
  ListAudienceGenerationJobsCommandInput,
  ListAudienceGenerationJobsCommandOutput,
  CleanRoomsMLClientResolvedConfig
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
  constructor(readonly input: ListAudienceGenerationJobsCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CleanRoomsMLClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAudienceGenerationJobsCommandInput, ListAudienceGenerationJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAudienceGenerationJobsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CleanRoomsMLClient";
    const commandName = "ListAudienceGenerationJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSStarkControlService",
        operation: "ListAudienceGenerationJobs",
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
  private serialize(input: ListAudienceGenerationJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListAudienceGenerationJobsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListAudienceGenerationJobsCommandOutput> {
    return de_ListAudienceGenerationJobsCommand(output, context);
  }
}
