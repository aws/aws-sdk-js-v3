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

import {
  DescribeRegistrationFieldDefinitionsRequest,
  DescribeRegistrationFieldDefinitionsResult,
} from "../models/models_0";
import {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import {
  de_DescribeRegistrationFieldDefinitionsCommand,
  se_DescribeRegistrationFieldDefinitionsCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeRegistrationFieldDefinitionsCommand}.
 */
export interface DescribeRegistrationFieldDefinitionsCommandInput extends DescribeRegistrationFieldDefinitionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeRegistrationFieldDefinitionsCommand}.
 */
export interface DescribeRegistrationFieldDefinitionsCommandOutput
  extends DescribeRegistrationFieldDefinitionsResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the specified registration type field definitions. You can use DescribeRegistrationFieldDefinitions to view the requirements for creating, filling out, and submitting each registration type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, DescribeRegistrationFieldDefinitionsCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, DescribeRegistrationFieldDefinitionsCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // DescribeRegistrationFieldDefinitionsRequest
 *   RegistrationType: "STRING_VALUE", // required
 *   SectionPath: "STRING_VALUE",
 *   FieldPaths: [ // FieldPathList
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeRegistrationFieldDefinitionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRegistrationFieldDefinitionsResult
 * //   RegistrationType: "STRING_VALUE", // required
 * //   RegistrationFieldDefinitions: [ // RegistrationFieldDefinitionList // required
 * //     { // RegistrationFieldDefinition
 * //       SectionPath: "STRING_VALUE", // required
 * //       FieldPath: "STRING_VALUE", // required
 * //       FieldType: "STRING_VALUE", // required
 * //       FieldRequirement: "STRING_VALUE", // required
 * //       SelectValidation: { // SelectValidation
 * //         MinChoices: Number("int"), // required
 * //         MaxChoices: Number("int"), // required
 * //         Options: [ // StringList // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       TextValidation: { // TextValidation
 * //         MinLength: Number("int"), // required
 * //         MaxLength: Number("int"), // required
 * //         Pattern: "STRING_VALUE", // required
 * //       },
 * //       DisplayHints: { // RegistrationFieldDisplayHints
 * //         Title: "STRING_VALUE", // required
 * //         ShortDescription: "STRING_VALUE", // required
 * //         LongDescription: "STRING_VALUE",
 * //         DocumentationTitle: "STRING_VALUE",
 * //         DocumentationLink: "STRING_VALUE",
 * //         SelectOptionDescriptions: [ // SelectOptionDescriptionsList
 * //           { // SelectOptionDescription
 * //             Option: "STRING_VALUE", // required
 * //             Title: "STRING_VALUE",
 * //             Description: "STRING_VALUE",
 * //           },
 * //         ],
 * //         TextValidationDescription: "STRING_VALUE",
 * //         ExampleTextValue: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeRegistrationFieldDefinitionsCommandInput - {@link DescribeRegistrationFieldDefinitionsCommandInput}
 * @returns {@link DescribeRegistrationFieldDefinitionsCommandOutput}
 * @see {@link DescribeRegistrationFieldDefinitionsCommandInput} for command's `input` shape.
 * @see {@link DescribeRegistrationFieldDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link PinpointSMSVoiceV2ClientResolvedConfig | config} for PinpointSMSVoiceV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because you don't have sufficient permissions to access the
 *             resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The API encountered an unexpected error and couldn't complete the request. You might
 *             be able to successfully issue the request again in the future.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>An error that occurred because too many requests were sent during a certain amount of
 *             time.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A validation exception for a field.</p>
 *
 * @throws {@link PinpointSMSVoiceV2ServiceException}
 * <p>Base exception class for all service exceptions from PinpointSMSVoiceV2 service.</p>
 *
 */
export class DescribeRegistrationFieldDefinitionsCommand extends $Command<
  DescribeRegistrationFieldDefinitionsCommandInput,
  DescribeRegistrationFieldDefinitionsCommandOutput,
  PinpointSMSVoiceV2ClientResolvedConfig
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
  constructor(readonly input: DescribeRegistrationFieldDefinitionsCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointSMSVoiceV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeRegistrationFieldDefinitionsCommandInput, DescribeRegistrationFieldDefinitionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeRegistrationFieldDefinitionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointSMSVoiceV2Client";
    const commandName = "DescribeRegistrationFieldDefinitionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "PinpointSMSVoiceV2",
        operation: "DescribeRegistrationFieldDefinitions",
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
    input: DescribeRegistrationFieldDefinitionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeRegistrationFieldDefinitionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeRegistrationFieldDefinitionsCommandOutput> {
    return de_DescribeRegistrationFieldDefinitionsCommand(output, context);
  }
}
