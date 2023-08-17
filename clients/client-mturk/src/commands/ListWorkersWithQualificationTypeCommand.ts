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

import { ListWorkersWithQualificationTypeRequest, ListWorkersWithQualificationTypeResponse } from "../models/models_0";
import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import {
  de_ListWorkersWithQualificationTypeCommand,
  se_ListWorkersWithQualificationTypeCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListWorkersWithQualificationTypeCommand}.
 */
export interface ListWorkersWithQualificationTypeCommandInput extends ListWorkersWithQualificationTypeRequest {}
/**
 * @public
 *
 * The output of {@link ListWorkersWithQualificationTypeCommand}.
 */
export interface ListWorkersWithQualificationTypeCommandOutput
  extends ListWorkersWithQualificationTypeResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>
 *             The <code>ListWorkersWithQualificationType</code> operation returns all of the Workers
 *             that have been associated with a given Qualification type.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, ListWorkersWithQualificationTypeCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, ListWorkersWithQualificationTypeCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const input = { // ListWorkersWithQualificationTypeRequest
 *   QualificationTypeId: "STRING_VALUE", // required
 *   Status: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListWorkersWithQualificationTypeCommand(input);
 * const response = await client.send(command);
 * // { // ListWorkersWithQualificationTypeResponse
 * //   NextToken: "STRING_VALUE",
 * //   NumResults: Number("int"),
 * //   Qualifications: [ // QualificationList
 * //     { // Qualification
 * //       QualificationTypeId: "STRING_VALUE",
 * //       WorkerId: "STRING_VALUE",
 * //       GrantTime: new Date("TIMESTAMP"),
 * //       IntegerValue: Number("int"),
 * //       LocaleValue: { // Locale
 * //         Country: "STRING_VALUE", // required
 * //         Subdivision: "STRING_VALUE",
 * //       },
 * //       Status: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListWorkersWithQualificationTypeCommandInput - {@link ListWorkersWithQualificationTypeCommandInput}
 * @returns {@link ListWorkersWithQualificationTypeCommandOutput}
 * @see {@link ListWorkersWithQualificationTypeCommandInput} for command's `input` shape.
 * @see {@link ListWorkersWithQualificationTypeCommandOutput} for command's `response` shape.
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
export class ListWorkersWithQualificationTypeCommand extends $Command<
  ListWorkersWithQualificationTypeCommandInput,
  ListWorkersWithQualificationTypeCommandOutput,
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
  constructor(readonly input: ListWorkersWithQualificationTypeCommandInput) {
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
  ): Handler<ListWorkersWithQualificationTypeCommandInput, ListWorkersWithQualificationTypeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListWorkersWithQualificationTypeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MTurkClient";
    const commandName = "ListWorkersWithQualificationTypeCommand";
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
  private serialize(
    input: ListWorkersWithQualificationTypeCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListWorkersWithQualificationTypeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListWorkersWithQualificationTypeCommandOutput> {
    return de_ListWorkersWithQualificationTypeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
