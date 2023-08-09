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

import { ListHITsForQualificationTypeRequest, ListHITsForQualificationTypeResponse } from "../models/models_0";
import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import {
  de_ListHITsForQualificationTypeCommand,
  se_ListHITsForQualificationTypeCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListHITsForQualificationTypeCommand}.
 */
export interface ListHITsForQualificationTypeCommandInput extends ListHITsForQualificationTypeRequest {}
/**
 * @public
 *
 * The output of {@link ListHITsForQualificationTypeCommand}.
 */
export interface ListHITsForQualificationTypeCommandOutput
  extends ListHITsForQualificationTypeResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>
 *             The <code>ListHITsForQualificationType</code> operation returns the HITs that use
 *             the given Qualification type for a Qualification requirement.
 *             The operation returns HITs of any status, except for HITs that have been deleted
 *             with the <code>DeleteHIT</code> operation or that have been auto-deleted.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, ListHITsForQualificationTypeCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, ListHITsForQualificationTypeCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const input = { // ListHITsForQualificationTypeRequest
 *   QualificationTypeId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListHITsForQualificationTypeCommand(input);
 * const response = await client.send(command);
 * // { // ListHITsForQualificationTypeResponse
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
 * @param ListHITsForQualificationTypeCommandInput - {@link ListHITsForQualificationTypeCommandInput}
 * @returns {@link ListHITsForQualificationTypeCommandOutput}
 * @see {@link ListHITsForQualificationTypeCommandInput} for command's `input` shape.
 * @see {@link ListHITsForQualificationTypeCommandOutput} for command's `response` shape.
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
export class ListHITsForQualificationTypeCommand extends $Command<
  ListHITsForQualificationTypeCommandInput,
  ListHITsForQualificationTypeCommandOutput,
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
  constructor(readonly input: ListHITsForQualificationTypeCommandInput) {
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
  ): Handler<ListHITsForQualificationTypeCommandInput, ListHITsForQualificationTypeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListHITsForQualificationTypeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MTurkClient";
    const commandName = "ListHITsForQualificationTypeCommand";
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
  private serialize(input: ListHITsForQualificationTypeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListHITsForQualificationTypeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListHITsForQualificationTypeCommandOutput> {
    return de_ListHITsForQualificationTypeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
