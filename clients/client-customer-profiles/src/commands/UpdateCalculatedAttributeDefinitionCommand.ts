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
  UpdateCalculatedAttributeDefinitionRequest,
  UpdateCalculatedAttributeDefinitionResponse,
} from "../models/models_0";
import {
  de_UpdateCalculatedAttributeDefinitionCommand,
  se_UpdateCalculatedAttributeDefinitionCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateCalculatedAttributeDefinitionCommand}.
 */
export interface UpdateCalculatedAttributeDefinitionCommandInput extends UpdateCalculatedAttributeDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateCalculatedAttributeDefinitionCommand}.
 */
export interface UpdateCalculatedAttributeDefinitionCommandOutput
  extends UpdateCalculatedAttributeDefinitionResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Updates an existing calculated attribute definition. When updating the Conditions, note that increasing
 *          the date range of a calculated attribute will not trigger inclusion of historical data greater than the
 *          current date range.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, UpdateCalculatedAttributeDefinitionCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, UpdateCalculatedAttributeDefinitionCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * const client = new CustomerProfilesClient(config);
 * const input = { // UpdateCalculatedAttributeDefinitionRequest
 *   DomainName: "STRING_VALUE", // required
 *   CalculatedAttributeName: "STRING_VALUE", // required
 *   DisplayName: "STRING_VALUE",
 *   Description: "STRING_VALUE",
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
 * };
 * const command = new UpdateCalculatedAttributeDefinitionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateCalculatedAttributeDefinitionResponse
 * //   CalculatedAttributeName: "STRING_VALUE",
 * //   DisplayName: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   LastUpdatedAt: new Date("TIMESTAMP"),
 * //   Statistic: "FIRST_OCCURRENCE" || "LAST_OCCURRENCE" || "COUNT" || "SUM" || "MINIMUM" || "MAXIMUM" || "AVERAGE" || "MAX_OCCURRENCE",
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
 * //   AttributeDetails: { // AttributeDetails
 * //     Attributes: [ // AttributeList // required
 * //       { // AttributeItem
 * //         Name: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     Expression: "STRING_VALUE", // required
 * //   },
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateCalculatedAttributeDefinitionCommandInput - {@link UpdateCalculatedAttributeDefinitionCommandInput}
 * @returns {@link UpdateCalculatedAttributeDefinitionCommandOutput}
 * @see {@link UpdateCalculatedAttributeDefinitionCommandInput} for command's `input` shape.
 * @see {@link UpdateCalculatedAttributeDefinitionCommandOutput} for command's `response` shape.
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
export class UpdateCalculatedAttributeDefinitionCommand extends $Command<
  UpdateCalculatedAttributeDefinitionCommandInput,
  UpdateCalculatedAttributeDefinitionCommandOutput,
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
  constructor(readonly input: UpdateCalculatedAttributeDefinitionCommandInput) {
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
  ): Handler<UpdateCalculatedAttributeDefinitionCommandInput, UpdateCalculatedAttributeDefinitionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateCalculatedAttributeDefinitionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CustomerProfilesClient";
    const commandName = "UpdateCalculatedAttributeDefinitionCommand";
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
    input: UpdateCalculatedAttributeDefinitionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_UpdateCalculatedAttributeDefinitionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateCalculatedAttributeDefinitionCommandOutput> {
    return de_UpdateCalculatedAttributeDefinitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
