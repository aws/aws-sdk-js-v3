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

import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import {
  CreateCalculatedAttributeDefinitionRequest,
  CreateCalculatedAttributeDefinitionResponse,
} from "../models/models_0";
import {
  de_CreateCalculatedAttributeDefinitionCommand,
  se_CreateCalculatedAttributeDefinitionCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateCalculatedAttributeDefinitionCommand}.
 */
export interface CreateCalculatedAttributeDefinitionCommandInput extends CreateCalculatedAttributeDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link CreateCalculatedAttributeDefinitionCommand}.
 */
export interface CreateCalculatedAttributeDefinitionCommandOutput
  extends CreateCalculatedAttributeDefinitionResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Creates a new calculated attribute definition. After creation, new object data ingested
 *          into Customer Profiles will be included in the calculated attribute, which can be retrieved
 *          for a profile using the <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetCalculatedAttributeForProfile.html">GetCalculatedAttributeForProfile</a> API.
 *          Defining a calculated attribute makes it available for all profiles within a domain. Each
 *          calculated attribute can only reference one <code>ObjectType</code> and at most, two fields
 *          from that <code>ObjectType</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, CreateCalculatedAttributeDefinitionCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, CreateCalculatedAttributeDefinitionCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * const client = new CustomerProfilesClient(config);
 * const input = { // CreateCalculatedAttributeDefinitionRequest
 *   DomainName: "STRING_VALUE", // required
 *   CalculatedAttributeName: "STRING_VALUE", // required
 *   DisplayName: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   AttributeDetails: { // AttributeDetails
 *     Attributes: [ // AttributeList // required
 *       { // AttributeItem
 *         Name: "STRING_VALUE", // required
 *       },
 *     ],
 *     Expression: "STRING_VALUE", // required
 *   },
 *   Conditions: { // Conditions
 *     Range: { // Range
 *       Value: Number("int"), // required
 *       Unit: "DAYS", // required
 *     },
 *     ObjectCount: Number("int"),
 *     Threshold: { // Threshold
 *       Value: "STRING_VALUE", // required
 *       Operator: "EQUAL_TO" || "GREATER_THAN" || "LESS_THAN" || "NOT_EQUAL_TO", // required
 *     },
 *   },
 *   Statistic: "FIRST_OCCURRENCE" || "LAST_OCCURRENCE" || "COUNT" || "SUM" || "MINIMUM" || "MAXIMUM" || "AVERAGE" || "MAX_OCCURRENCE", // required
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateCalculatedAttributeDefinitionCommand(input);
 * const response = await client.send(command);
 * // { // CreateCalculatedAttributeDefinitionResponse
 * //   CalculatedAttributeName: "STRING_VALUE",
 * //   DisplayName: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   AttributeDetails: { // AttributeDetails
 * //     Attributes: [ // AttributeList // required
 * //       { // AttributeItem
 * //         Name: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     Expression: "STRING_VALUE", // required
 * //   },
 * //   Conditions: { // Conditions
 * //     Range: { // Range
 * //       Value: Number("int"), // required
 * //       Unit: "DAYS", // required
 * //     },
 * //     ObjectCount: Number("int"),
 * //     Threshold: { // Threshold
 * //       Value: "STRING_VALUE", // required
 * //       Operator: "EQUAL_TO" || "GREATER_THAN" || "LESS_THAN" || "NOT_EQUAL_TO", // required
 * //     },
 * //   },
 * //   Statistic: "FIRST_OCCURRENCE" || "LAST_OCCURRENCE" || "COUNT" || "SUM" || "MINIMUM" || "MAXIMUM" || "AVERAGE" || "MAX_OCCURRENCE",
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   LastUpdatedAt: new Date("TIMESTAMP"),
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateCalculatedAttributeDefinitionCommandInput - {@link CreateCalculatedAttributeDefinitionCommandInput}
 * @returns {@link CreateCalculatedAttributeDefinitionCommandOutput}
 * @see {@link CreateCalculatedAttributeDefinitionCommandInput} for command's `input` shape.
 * @see {@link CreateCalculatedAttributeDefinitionCommandOutput} for command's `response` shape.
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
export class CreateCalculatedAttributeDefinitionCommand extends $Command<
  CreateCalculatedAttributeDefinitionCommandInput,
  CreateCalculatedAttributeDefinitionCommandOutput,
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
  constructor(readonly input: CreateCalculatedAttributeDefinitionCommandInput) {
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
  ): Handler<CreateCalculatedAttributeDefinitionCommandInput, CreateCalculatedAttributeDefinitionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateCalculatedAttributeDefinitionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CustomerProfilesClient";
    const commandName = "CreateCalculatedAttributeDefinitionCommand";
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
    input: CreateCalculatedAttributeDefinitionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_CreateCalculatedAttributeDefinitionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateCalculatedAttributeDefinitionCommandOutput> {
    return de_CreateCalculatedAttributeDefinitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
