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

import { CreateHITTypeRequest, CreateHITTypeResponse } from "../models/models_0";
import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { de_CreateHITTypeCommand, se_CreateHITTypeCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateHITTypeCommand}.
 */
export interface CreateHITTypeCommandInput extends CreateHITTypeRequest {}
/**
 * @public
 *
 * The output of {@link CreateHITTypeCommand}.
 */
export interface CreateHITTypeCommandOutput extends CreateHITTypeResponse, __MetadataBearer {}

/**
 * @public
 * <p>
 *             The <code>CreateHITType</code> operation creates a new HIT type. This operation
 *             allows you to define a standard set of HIT properties to use when creating HITs.
 *             If you register a HIT type with values that match an existing HIT type, the HIT type
 *             ID of the existing type will be returned.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, CreateHITTypeCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, CreateHITTypeCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const input = { // CreateHITTypeRequest
 *   AutoApprovalDelayInSeconds: Number("long"),
 *   AssignmentDurationInSeconds: Number("long"), // required
 *   Reward: "STRING_VALUE", // required
 *   Title: "STRING_VALUE", // required
 *   Keywords: "STRING_VALUE",
 *   Description: "STRING_VALUE", // required
 *   QualificationRequirements: [ // QualificationRequirementList
 *     { // QualificationRequirement
 *       QualificationTypeId: "STRING_VALUE", // required
 *       Comparator: "LessThan" || "LessThanOrEqualTo" || "GreaterThan" || "GreaterThanOrEqualTo" || "EqualTo" || "NotEqualTo" || "Exists" || "DoesNotExist" || "In" || "NotIn", // required
 *       IntegerValues: [ // IntegerList
 *         Number("int"),
 *       ],
 *       LocaleValues: [ // LocaleList
 *         { // Locale
 *           Country: "STRING_VALUE", // required
 *           Subdivision: "STRING_VALUE",
 *         },
 *       ],
 *       RequiredToPreview: true || false,
 *       ActionsGuarded: "Accept" || "PreviewAndAccept" || "DiscoverPreviewAndAccept",
 *     },
 *   ],
 * };
 * const command = new CreateHITTypeCommand(input);
 * const response = await client.send(command);
 * // { // CreateHITTypeResponse
 * //   HITTypeId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateHITTypeCommandInput - {@link CreateHITTypeCommandInput}
 * @returns {@link CreateHITTypeCommandOutput}
 * @see {@link CreateHITTypeCommandInput} for command's `input` shape.
 * @see {@link CreateHITTypeCommandOutput} for command's `response` shape.
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
export class CreateHITTypeCommand extends $Command<
  CreateHITTypeCommandInput,
  CreateHITTypeCommandOutput,
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
  constructor(readonly input: CreateHITTypeCommandInput) {
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
  ): Handler<CreateHITTypeCommandInput, CreateHITTypeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateHITTypeCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MTurkClient";
    const commandName = "CreateHITTypeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "MTurkRequesterServiceV20170117",
        operation: "CreateHITType",
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
  private serialize(input: CreateHITTypeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateHITTypeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateHITTypeCommandOutput> {
    return de_CreateHITTypeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
