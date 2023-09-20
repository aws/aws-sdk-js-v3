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

import { ListQualificationRequestsRequest, ListQualificationRequestsResponse } from "../models/models_0";
import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { de_ListQualificationRequestsCommand, se_ListQualificationRequestsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListQualificationRequestsCommand}.
 */
export interface ListQualificationRequestsCommandInput extends ListQualificationRequestsRequest {}
/**
 * @public
 *
 * The output of {@link ListQualificationRequestsCommand}.
 */
export interface ListQualificationRequestsCommandOutput extends ListQualificationRequestsResponse, __MetadataBearer {}

/**
 * @public
 * <p>
 *             The
 *             <code>ListQualificationRequests</code>
 *             operation retrieves requests for Qualifications of a particular
 *             Qualification type. The owner of the Qualification type calls this
 *             operation to poll for pending requests, and accepts them using the
 *             AcceptQualification operation.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, ListQualificationRequestsCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, ListQualificationRequestsCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const input = { // ListQualificationRequestsRequest
 *   QualificationTypeId: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListQualificationRequestsCommand(input);
 * const response = await client.send(command);
 * // { // ListQualificationRequestsResponse
 * //   NumResults: Number("int"),
 * //   NextToken: "STRING_VALUE",
 * //   QualificationRequests: [ // QualificationRequestList
 * //     { // QualificationRequest
 * //       QualificationRequestId: "STRING_VALUE",
 * //       QualificationTypeId: "STRING_VALUE",
 * //       WorkerId: "STRING_VALUE",
 * //       Test: "STRING_VALUE",
 * //       Answer: "STRING_VALUE",
 * //       SubmitTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListQualificationRequestsCommandInput - {@link ListQualificationRequestsCommandInput}
 * @returns {@link ListQualificationRequestsCommandOutput}
 * @see {@link ListQualificationRequestsCommandInput} for command's `input` shape.
 * @see {@link ListQualificationRequestsCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for MTurkClient's `config` shape.
 *
 * @throws {@link RequestError} (client fault)
 *  <p>Your request is invalid.</p>
 *
 * @throws {@link ServiceFault} (server fault)
 *  <p>Amazon Mechanical Turk is temporarily unable to process your request. Try your call again.</p>
 *
 * @throws {@link MTurkServiceException}
 * <p>Base exception class for all service exceptions from MTurk service.</p>
 *
 */
export class ListQualificationRequestsCommand extends $Command<
  ListQualificationRequestsCommandInput,
  ListQualificationRequestsCommandOutput,
  MTurkClientResolvedConfig
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
  constructor(readonly input: ListQualificationRequestsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MTurkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListQualificationRequestsCommandInput, ListQualificationRequestsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListQualificationRequestsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MTurkClient";
    const commandName = "ListQualificationRequestsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "MTurkRequesterServiceV20170117",
        operation: "ListQualificationRequests",
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
  private serialize(input: ListQualificationRequestsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListQualificationRequestsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListQualificationRequestsCommandOutput> {
    return de_ListQualificationRequestsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
