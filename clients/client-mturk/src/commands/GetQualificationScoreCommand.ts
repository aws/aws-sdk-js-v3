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

import { GetQualificationScoreRequest, GetQualificationScoreResponse } from "../models/models_0";
import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { de_GetQualificationScoreCommand, se_GetQualificationScoreCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetQualificationScoreCommand}.
 */
export interface GetQualificationScoreCommandInput extends GetQualificationScoreRequest {}
/**
 * @public
 *
 * The output of {@link GetQualificationScoreCommand}.
 */
export interface GetQualificationScoreCommandOutput extends GetQualificationScoreResponse, __MetadataBearer {}

/**
 * @public
 * <p>
 *             The
 *             <code>GetQualificationScore</code>
 *             operation returns the value of a Worker's Qualification for a given
 *             Qualification type.
 *         </p>
 *         <p>
 *             To get a Worker's Qualification, you must know the Worker's ID. The
 *             Worker's ID is included in the assignment data returned by the
 *             <code>ListAssignmentsForHIT</code>
 *             operation.
 *         </p>
 *         <p>Only the owner of a Qualification type can query the value of
 *             a Worker's Qualification of that type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, GetQualificationScoreCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, GetQualificationScoreCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const input = { // GetQualificationScoreRequest
 *   QualificationTypeId: "STRING_VALUE", // required
 *   WorkerId: "STRING_VALUE", // required
 * };
 * const command = new GetQualificationScoreCommand(input);
 * const response = await client.send(command);
 * // { // GetQualificationScoreResponse
 * //   Qualification: { // Qualification
 * //     QualificationTypeId: "STRING_VALUE",
 * //     WorkerId: "STRING_VALUE",
 * //     GrantTime: new Date("TIMESTAMP"),
 * //     IntegerValue: Number("int"),
 * //     LocaleValue: { // Locale
 * //       Country: "STRING_VALUE", // required
 * //       Subdivision: "STRING_VALUE",
 * //     },
 * //     Status: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetQualificationScoreCommandInput - {@link GetQualificationScoreCommandInput}
 * @returns {@link GetQualificationScoreCommandOutput}
 * @see {@link GetQualificationScoreCommandInput} for command's `input` shape.
 * @see {@link GetQualificationScoreCommandOutput} for command's `response` shape.
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
export class GetQualificationScoreCommand extends $Command<
  GetQualificationScoreCommandInput,
  GetQualificationScoreCommandOutput,
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
  constructor(readonly input: GetQualificationScoreCommandInput) {
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
  ): Handler<GetQualificationScoreCommandInput, GetQualificationScoreCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetQualificationScoreCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MTurkClient";
    const commandName = "GetQualificationScoreCommand";
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
  private serialize(input: GetQualificationScoreCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetQualificationScoreCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetQualificationScoreCommandOutput> {
    return de_GetQualificationScoreCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
