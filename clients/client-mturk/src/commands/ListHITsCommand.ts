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

import { ListHITsRequest, ListHITsResponse } from "../models/models_0";
import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { de_ListHITsCommand, se_ListHITsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListHITsCommand}.
 */
export interface ListHITsCommandInput extends ListHITsRequest {}
/**
 * @public
 *
 * The output of {@link ListHITsCommand}.
 */
export interface ListHITsCommandOutput extends ListHITsResponse, __MetadataBearer {}

/**
 * @public
 * <p>
 *             The
 *             <code>ListHITs</code>
 *             operation returns all of a Requester's HITs. The operation returns
 *             HITs of any status, except for HITs that have been deleted of with
 *             the DeleteHIT operation or that have been auto-deleted.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, ListHITsCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, ListHITsCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const input = { // ListHITsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListHITsCommand(input);
 * const response = await client.send(command);
 * // { // ListHITsResponse
 * //   NextToken: "STRING_VALUE",
 * //   NumResults: Number("int"),
 * //   HITs: [ // HITList
 * //     { // HIT
 * //       HITId: "STRING_VALUE",
 * //       HITTypeId: "STRING_VALUE",
 * //       HITGroupId: "STRING_VALUE",
 * //       HITLayoutId: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       Title: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Question: "STRING_VALUE",
 * //       Keywords: "STRING_VALUE",
 * //       HITStatus: "STRING_VALUE",
 * //       MaxAssignments: Number("int"),
 * //       Reward: "STRING_VALUE",
 * //       AutoApprovalDelayInSeconds: Number("long"),
 * //       Expiration: new Date("TIMESTAMP"),
 * //       AssignmentDurationInSeconds: Number("long"),
 * //       RequesterAnnotation: "STRING_VALUE",
 * //       QualificationRequirements: [ // QualificationRequirementList
 * //         { // QualificationRequirement
 * //           QualificationTypeId: "STRING_VALUE", // required
 * //           Comparator: "STRING_VALUE", // required
 * //           IntegerValues: [ // IntegerList
 * //             Number("int"),
 * //           ],
 * //           LocaleValues: [ // LocaleList
 * //             { // Locale
 * //               Country: "STRING_VALUE", // required
 * //               Subdivision: "STRING_VALUE",
 * //             },
 * //           ],
 * //           RequiredToPreview: true || false,
 * //           ActionsGuarded: "STRING_VALUE",
 * //         },
 * //       ],
 * //       HITReviewStatus: "STRING_VALUE",
 * //       NumberOfAssignmentsPending: Number("int"),
 * //       NumberOfAssignmentsAvailable: Number("int"),
 * //       NumberOfAssignmentsCompleted: Number("int"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListHITsCommandInput - {@link ListHITsCommandInput}
 * @returns {@link ListHITsCommandOutput}
 * @see {@link ListHITsCommandInput} for command's `input` shape.
 * @see {@link ListHITsCommandOutput} for command's `response` shape.
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
export class ListHITsCommand extends $Command<ListHITsCommandInput, ListHITsCommandOutput, MTurkClientResolvedConfig> {
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
  constructor(readonly input: ListHITsCommandInput) {
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
  ): Handler<ListHITsCommandInput, ListHITsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListHITsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MTurkClient";
    const commandName = "ListHITsCommand";
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
  private serialize(input: ListHITsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListHITsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListHITsCommandOutput> {
    return de_ListHITsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
