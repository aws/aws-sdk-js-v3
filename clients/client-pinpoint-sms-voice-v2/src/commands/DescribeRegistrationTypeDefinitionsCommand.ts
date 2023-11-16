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
  DescribeRegistrationTypeDefinitionsRequest,
  DescribeRegistrationTypeDefinitionsResult,
} from "../models/models_0";
import {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import {
  de_DescribeRegistrationTypeDefinitionsCommand,
  se_DescribeRegistrationTypeDefinitionsCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeRegistrationTypeDefinitionsCommand}.
 */
export interface DescribeRegistrationTypeDefinitionsCommandInput extends DescribeRegistrationTypeDefinitionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeRegistrationTypeDefinitionsCommand}.
 */
export interface DescribeRegistrationTypeDefinitionsCommandOutput
  extends DescribeRegistrationTypeDefinitionsResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the specified registration type definitions. You can use DescribeRegistrationTypeDefinitions to view the requirements for creating, filling out, and submitting each registration type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, DescribeRegistrationTypeDefinitionsCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, DescribeRegistrationTypeDefinitionsCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // DescribeRegistrationTypeDefinitionsRequest
 *   RegistrationTypes: [ // RegistrationTypeList
 *     "STRING_VALUE",
 *   ],
 *   Filters: [ // RegistrationTypeFilterList
 *     { // RegistrationTypeFilter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeRegistrationTypeDefinitionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRegistrationTypeDefinitionsResult
 * //   RegistrationTypeDefinitions: [ // RegistrationTypeDefinitionList // required
 * //     { // RegistrationTypeDefinition
 * //       RegistrationType: "STRING_VALUE", // required
 * //       SupportedAssociations: [ // SupportedAssociationList
 * //         { // SupportedAssociation
 * //           ResourceType: "STRING_VALUE", // required
 * //           IsoCountryCode: "STRING_VALUE",
 * //           AssociationBehavior: "STRING_VALUE", // required
 * //           DisassociationBehavior: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       DisplayHints: { // RegistrationTypeDisplayHints
 * //         Title: "STRING_VALUE", // required
 * //         ShortDescription: "STRING_VALUE",
 * //         LongDescription: "STRING_VALUE",
 * //         DocumentationTitle: "STRING_VALUE",
 * //         DocumentationLink: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeRegistrationTypeDefinitionsCommandInput - {@link DescribeRegistrationTypeDefinitionsCommandInput}
 * @returns {@link DescribeRegistrationTypeDefinitionsCommandOutput}
 * @see {@link DescribeRegistrationTypeDefinitionsCommandInput} for command's `input` shape.
 * @see {@link DescribeRegistrationTypeDefinitionsCommandOutput} for command's `response` shape.
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
export class DescribeRegistrationTypeDefinitionsCommand extends $Command<
  DescribeRegistrationTypeDefinitionsCommandInput,
  DescribeRegistrationTypeDefinitionsCommandOutput,
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
  constructor(readonly input: DescribeRegistrationTypeDefinitionsCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointSMSVoiceV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeRegistrationTypeDefinitionsCommandInput, DescribeRegistrationTypeDefinitionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeRegistrationTypeDefinitionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointSMSVoiceV2Client";
    const commandName = "DescribeRegistrationTypeDefinitionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "PinpointSMSVoiceV2",
        operation: "DescribeRegistrationTypeDefinitions",
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
    input: DescribeRegistrationTypeDefinitionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeRegistrationTypeDefinitionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeRegistrationTypeDefinitionsCommandOutput> {
    return de_DescribeRegistrationTypeDefinitionsCommand(output, context);
  }
}
