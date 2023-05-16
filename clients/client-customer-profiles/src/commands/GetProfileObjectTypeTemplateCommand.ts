// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@aws-sdk/types";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { SerdeContext as __SerdeContext } from "@smithy/types";

import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { GetProfileObjectTypeTemplateRequest, GetProfileObjectTypeTemplateResponse } from "../models/models_0";
import {
  de_GetProfileObjectTypeTemplateCommand,
  se_GetProfileObjectTypeTemplateCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link GetProfileObjectTypeTemplateCommand}.
 */
export interface GetProfileObjectTypeTemplateCommandInput extends GetProfileObjectTypeTemplateRequest {}
/**
 * @public
 *
 * The output of {@link GetProfileObjectTypeTemplateCommand}.
 */
export interface GetProfileObjectTypeTemplateCommandOutput
  extends GetProfileObjectTypeTemplateResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns the template information for a specific object type.</p>
 *          <p>A template is a predefined ProfileObjectType, such as “Salesforce-Account” or
 *          “Salesforce-Contact.” When a user sends a ProfileObject, using the PutProfileObject API,
 *          with an ObjectTypeName that matches one of the TemplateIds, it uses the mappings from the
 *          template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, GetProfileObjectTypeTemplateCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, GetProfileObjectTypeTemplateCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * const client = new CustomerProfilesClient(config);
 * const input = { // GetProfileObjectTypeTemplateRequest
 *   TemplateId: "STRING_VALUE", // required
 * };
 * const command = new GetProfileObjectTypeTemplateCommand(input);
 * const response = await client.send(command);
 * // { // GetProfileObjectTypeTemplateResponse
 * //   TemplateId: "STRING_VALUE",
 * //   SourceName: "STRING_VALUE",
 * //   SourceObject: "STRING_VALUE",
 * //   AllowProfileCreation: true || false,
 * //   SourceLastUpdatedTimestampFormat: "STRING_VALUE",
 * //   Fields: { // FieldMap
 * //     "<keys>": { // ObjectTypeField
 * //       Source: "STRING_VALUE",
 * //       Target: "STRING_VALUE",
 * //       ContentType: "STRING" || "NUMBER" || "PHONE_NUMBER" || "EMAIL_ADDRESS" || "NAME",
 * //     },
 * //   },
 * //   Keys: { // KeyMap
 * //     "<keys>": [ // ObjectTypeKeyList
 * //       { // ObjectTypeKey
 * //         StandardIdentifiers: [ // StandardIdentifierList
 * //           "PROFILE" || "ASSET" || "CASE" || "UNIQUE" || "SECONDARY" || "LOOKUP_ONLY" || "NEW_ONLY" || "ORDER",
 * //         ],
 * //         FieldNames: [ // FieldNameList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetProfileObjectTypeTemplateCommandInput - {@link GetProfileObjectTypeTemplateCommandInput}
 * @returns {@link GetProfileObjectTypeTemplateCommandOutput}
 * @see {@link GetProfileObjectTypeTemplateCommandInput} for command's `input` shape.
 * @see {@link GetProfileObjectTypeTemplateCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for CustomerProfilesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource does not exist, or access was denied.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>You exceeded the maximum number of requests.</p>
 *
 * @throws {@link CustomerProfilesServiceException}
 * <p>Base exception class for all service exceptions from CustomerProfiles service.</p>
 *
 */
export class GetProfileObjectTypeTemplateCommand extends $Command<
  GetProfileObjectTypeTemplateCommandInput,
  GetProfileObjectTypeTemplateCommandOutput,
  CustomerProfilesClientResolvedConfig
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
  constructor(readonly input: GetProfileObjectTypeTemplateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CustomerProfilesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetProfileObjectTypeTemplateCommandInput, GetProfileObjectTypeTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetProfileObjectTypeTemplateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CustomerProfilesClient";
    const commandName = "GetProfileObjectTypeTemplateCommand";
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
  private serialize(input: GetProfileObjectTypeTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetProfileObjectTypeTemplateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetProfileObjectTypeTemplateCommandOutput> {
    return de_GetProfileObjectTypeTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
