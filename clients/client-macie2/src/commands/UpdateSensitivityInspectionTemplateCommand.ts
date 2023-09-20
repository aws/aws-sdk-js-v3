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

import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import {
  UpdateSensitivityInspectionTemplateRequest,
  UpdateSensitivityInspectionTemplateResponse,
} from "../models/models_1";
import {
  de_UpdateSensitivityInspectionTemplateCommand,
  se_UpdateSensitivityInspectionTemplateCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateSensitivityInspectionTemplateCommand}.
 */
export interface UpdateSensitivityInspectionTemplateCommandInput extends UpdateSensitivityInspectionTemplateRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSensitivityInspectionTemplateCommand}.
 */
export interface UpdateSensitivityInspectionTemplateCommandOutput
  extends UpdateSensitivityInspectionTemplateResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Updates the settings for the sensitivity inspection template for an account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, UpdateSensitivityInspectionTemplateCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, UpdateSensitivityInspectionTemplateCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const input = { // UpdateSensitivityInspectionTemplateRequest
 *   description: "STRING_VALUE",
 *   excludes: { // SensitivityInspectionTemplateExcludes
 *     managedDataIdentifierIds: [ // __listOf__string
 *       "STRING_VALUE",
 *     ],
 *   },
 *   id: "STRING_VALUE", // required
 *   includes: { // SensitivityInspectionTemplateIncludes
 *     allowListIds: [
 *       "STRING_VALUE",
 *     ],
 *     customDataIdentifierIds: [
 *       "STRING_VALUE",
 *     ],
 *     managedDataIdentifierIds: [
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new UpdateSensitivityInspectionTemplateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateSensitivityInspectionTemplateCommandInput - {@link UpdateSensitivityInspectionTemplateCommandInput}
 * @returns {@link UpdateSensitivityInspectionTemplateCommandOutput}
 * @see {@link UpdateSensitivityInspectionTemplateCommandInput} for command's `input` shape.
 * @see {@link UpdateSensitivityInspectionTemplateCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for Macie2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Provides information about an error that occurred due to insufficient access to a specified resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Provides information about an error that occurred due to an unknown internal server error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Provides information about an error that occurred because a specified resource wasn't found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Provides information about an error that occurred because too many requests were sent during a certain amount of time.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Provides information about an error that occurred due to a syntax error in a request.</p>
 *
 * @throws {@link Macie2ServiceException}
 * <p>Base exception class for all service exceptions from Macie2 service.</p>
 *
 */
export class UpdateSensitivityInspectionTemplateCommand extends $Command<
  UpdateSensitivityInspectionTemplateCommandInput,
  UpdateSensitivityInspectionTemplateCommandOutput,
  Macie2ClientResolvedConfig
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
  constructor(readonly input: UpdateSensitivityInspectionTemplateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Macie2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateSensitivityInspectionTemplateCommandInput, UpdateSensitivityInspectionTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateSensitivityInspectionTemplateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Macie2Client";
    const commandName = "UpdateSensitivityInspectionTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Macie2",
        operation: "UpdateSensitivityInspectionTemplate",
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
  private serialize(
    input: UpdateSensitivityInspectionTemplateCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_UpdateSensitivityInspectionTemplateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateSensitivityInspectionTemplateCommandOutput> {
    return de_UpdateSensitivityInspectionTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
