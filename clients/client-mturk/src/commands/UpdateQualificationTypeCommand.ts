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

import { UpdateQualificationTypeRequest, UpdateQualificationTypeResponse } from "../models/models_0";
import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { de_UpdateQualificationTypeCommand, se_UpdateQualificationTypeCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateQualificationTypeCommand}.
 */
export interface UpdateQualificationTypeCommandInput extends UpdateQualificationTypeRequest {}
/**
 * @public
 *
 * The output of {@link UpdateQualificationTypeCommand}.
 */
export interface UpdateQualificationTypeCommandOutput extends UpdateQualificationTypeResponse, __MetadataBearer {}

/**
 * @public
 * <p>
 *             The
 *             <code>UpdateQualificationType</code>
 *             operation modifies the attributes of an existing Qualification type,
 *             which is represented by a QualificationType data structure. Only the
 *             owner of a Qualification type can modify its attributes.
 *         </p>
 *         <p> Most attributes of a Qualification type can be changed after
 *             the type has been created. However, the Name and Keywords fields
 *             cannot be modified. The RetryDelayInSeconds parameter can be modified
 *             or added to change the delay or to enable retries, but
 *             RetryDelayInSeconds cannot be used to disable retries. </p>
 *         <p> You can use this operation to update the test for a
 *             Qualification type. The test is updated based on the values specified
 *             for the Test, TestDurationInSeconds and AnswerKey parameters. All
 *             three parameters specify the updated test. If you are updating the
 *             test for a type, you must specify the Test and TestDurationInSeconds
 *             parameters. The AnswerKey parameter is optional; omitting it specifies
 *             that the updated test does not have an answer key. </p>
 *         <p> If you omit the Test parameter, the test for the
 *             Qualification type is unchanged. There is no way to remove a test from
 *             a Qualification type that has one. If the type already has a test, you
 *             cannot update it to be AutoGranted. If the Qualification type does not
 *             have a test and one is provided by an update, the type will henceforth
 *             have a test. </p>
 *         <p> If you want to update the test duration or answer key for an
 *             existing test without changing the questions, you must specify a Test
 *             parameter with the original questions, along with the updated values. </p>
 *         <p> If you provide an updated Test but no AnswerKey, the new test
 *             will not have an answer key. Requests for such Qualifications must be
 *             granted manually. </p>
 *         <p> You can also update the AutoGranted and AutoGrantedValue
 *             attributes of the Qualification type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, UpdateQualificationTypeCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, UpdateQualificationTypeCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const input = { // UpdateQualificationTypeRequest
 *   QualificationTypeId: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   QualificationTypeStatus: "Active" || "Inactive",
 *   Test: "STRING_VALUE",
 *   AnswerKey: "STRING_VALUE",
 *   TestDurationInSeconds: Number("long"),
 *   RetryDelayInSeconds: Number("long"),
 *   AutoGranted: true || false,
 *   AutoGrantedValue: Number("int"),
 * };
 * const command = new UpdateQualificationTypeCommand(input);
 * const response = await client.send(command);
 * // { // UpdateQualificationTypeResponse
 * //   QualificationType: { // QualificationType
 * //     QualificationTypeId: "STRING_VALUE",
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     Name: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     Keywords: "STRING_VALUE",
 * //     QualificationTypeStatus: "Active" || "Inactive",
 * //     Test: "STRING_VALUE",
 * //     TestDurationInSeconds: Number("long"),
 * //     AnswerKey: "STRING_VALUE",
 * //     RetryDelayInSeconds: Number("long"),
 * //     IsRequestable: true || false,
 * //     AutoGranted: true || false,
 * //     AutoGrantedValue: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateQualificationTypeCommandInput - {@link UpdateQualificationTypeCommandInput}
 * @returns {@link UpdateQualificationTypeCommandOutput}
 * @see {@link UpdateQualificationTypeCommandInput} for command's `input` shape.
 * @see {@link UpdateQualificationTypeCommandOutput} for command's `response` shape.
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
export class UpdateQualificationTypeCommand extends $Command<
  UpdateQualificationTypeCommandInput,
  UpdateQualificationTypeCommandOutput,
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
  constructor(readonly input: UpdateQualificationTypeCommandInput) {
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
  ): Handler<UpdateQualificationTypeCommandInput, UpdateQualificationTypeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateQualificationTypeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MTurkClient";
    const commandName = "UpdateQualificationTypeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "MTurkRequesterServiceV20170117",
        operation: "UpdateQualificationType",
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
  private serialize(input: UpdateQualificationTypeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateQualificationTypeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateQualificationTypeCommandOutput> {
    return de_UpdateQualificationTypeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
