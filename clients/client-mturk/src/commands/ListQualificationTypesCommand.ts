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

import { ListQualificationTypesRequest, ListQualificationTypesResponse } from "../models/models_0";
import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { de_ListQualificationTypesCommand, se_ListQualificationTypesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListQualificationTypesCommand}.
 */
export interface ListQualificationTypesCommandInput extends ListQualificationTypesRequest {}
/**
 * @public
 *
 * The output of {@link ListQualificationTypesCommand}.
 */
export interface ListQualificationTypesCommandOutput extends ListQualificationTypesResponse, __MetadataBearer {}

/**
 * @public
 * <p>
 *             The
 *             <code>ListQualificationTypes</code>
 *             operation returns a list of Qualification types, filtered by
 *             an optional search term.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, ListQualificationTypesCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, ListQualificationTypesCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const input = { // ListQualificationTypesRequest
 *   Query: "STRING_VALUE",
 *   MustBeRequestable: true || false, // required
 *   MustBeOwnedByCaller: true || false,
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListQualificationTypesCommand(input);
 * const response = await client.send(command);
 * // { // ListQualificationTypesResponse
 * //   NumResults: Number("int"),
 * //   NextToken: "STRING_VALUE",
 * //   QualificationTypes: [ // QualificationTypeList
 * //     { // QualificationType
 * //       QualificationTypeId: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Keywords: "STRING_VALUE",
 * //       QualificationTypeStatus: "STRING_VALUE",
 * //       Test: "STRING_VALUE",
 * //       TestDurationInSeconds: Number("long"),
 * //       AnswerKey: "STRING_VALUE",
 * //       RetryDelayInSeconds: Number("long"),
 * //       IsRequestable: true || false,
 * //       AutoGranted: true || false,
 * //       AutoGrantedValue: Number("int"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListQualificationTypesCommandInput - {@link ListQualificationTypesCommandInput}
 * @returns {@link ListQualificationTypesCommandOutput}
 * @see {@link ListQualificationTypesCommandInput} for command's `input` shape.
 * @see {@link ListQualificationTypesCommandOutput} for command's `response` shape.
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
export class ListQualificationTypesCommand extends $Command<
  ListQualificationTypesCommandInput,
  ListQualificationTypesCommandOutput,
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
  constructor(readonly input: ListQualificationTypesCommandInput) {
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
  ): Handler<ListQualificationTypesCommandInput, ListQualificationTypesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListQualificationTypesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MTurkClient";
    const commandName = "ListQualificationTypesCommand";
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
  private serialize(input: ListQualificationTypesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListQualificationTypesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListQualificationTypesCommandOutput> {
    return de_ListQualificationTypesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
