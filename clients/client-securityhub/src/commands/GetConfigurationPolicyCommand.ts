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

import { GetConfigurationPolicyRequest, GetConfigurationPolicyResponse } from "../models/models_2";
import { de_GetConfigurationPolicyCommand, se_GetConfigurationPolicyCommand } from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetConfigurationPolicyCommand}.
 */
export interface GetConfigurationPolicyCommandInput extends GetConfigurationPolicyRequest {}
/**
 * @public
 *
 * The output of {@link GetConfigurationPolicyCommand}.
 */
export interface GetConfigurationPolicyCommandOutput extends GetConfigurationPolicyResponse, __MetadataBearer {}

/**
 * @public
 * <p>
 *             Provides information about a configuration policy. Only the Security Hub delegated administrator can invoke
 *             this operation from the home Region.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, GetConfigurationPolicyCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, GetConfigurationPolicyCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const input = { // GetConfigurationPolicyRequest
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new GetConfigurationPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetConfigurationPolicyResponse
 * //   Arn: "STRING_VALUE",
 * //   Id: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   UpdatedAt: new Date("TIMESTAMP"),
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   ConfigurationPolicy: { // Policy Union: only one key present
 * //     SecurityHub: { // SecurityHubPolicy
 * //       ServiceEnabled: true || false,
 * //       EnabledStandardIdentifiers: [ // EnabledStandardIdentifierList
 * //         "STRING_VALUE",
 * //       ],
 * //       SecurityControlsConfiguration: { // SecurityControlsConfiguration
 * //         EnabledSecurityControlIdentifiers: [ // EnabledSecurityControlIdentifierList
 * //           "STRING_VALUE",
 * //         ],
 * //         DisabledSecurityControlIdentifiers: [ // DisabledSecurityControlIdentifierList
 * //           "STRING_VALUE",
 * //         ],
 * //         SecurityControlCustomParameters: [ // SecurityControlCustomParametersList
 * //           { // SecurityControlCustomParameter
 * //             SecurityControlId: "STRING_VALUE",
 * //             Parameters: { // Parameters
 * //               "<keys>": { // ParameterConfiguration
 * //                 ValueType: "DEFAULT" || "CUSTOM", // required
 * //                 Value: { // ParameterValue Union: only one key present
 * //                   Integer: Number("int"),
 * //                   IntegerList: [ // IntegerList
 * //                     Number("int"),
 * //                   ],
 * //                   Double: Number("double"),
 * //                   String: "STRING_VALUE",
 * //                   StringList: [ // StringList
 * //                     "STRING_VALUE",
 * //                   ],
 * //                   Boolean: true || false,
 * //                   Enum: "STRING_VALUE",
 * //                   EnumList: [
 * //                     "STRING_VALUE",
 * //                   ],
 * //                 },
 * //               },
 * //             },
 * //           },
 * //         ],
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetConfigurationPolicyCommandInput - {@link GetConfigurationPolicyCommandInput}
 * @returns {@link GetConfigurationPolicyCommandOutput}
 * @see {@link GetConfigurationPolicyCommandInput} for command's `input` shape.
 * @see {@link GetConfigurationPolicyCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action specified in the request.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InvalidAccessException} (client fault)
 *  <p>The account doesn't have permission to perform this action.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because you supplied an invalid or out-of-range value for an
 *          input parameter.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current Amazon Web Services
 *          account or throttling limits. The error code describes the limit exceeded.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was rejected because we can't find the specified resource.</p>
 *
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 */
export class GetConfigurationPolicyCommand extends $Command<
  GetConfigurationPolicyCommandInput,
  GetConfigurationPolicyCommandOutput,
  SecurityHubClientResolvedConfig
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
  constructor(readonly input: GetConfigurationPolicyCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecurityHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetConfigurationPolicyCommandInput, GetConfigurationPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetConfigurationPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityHubClient";
    const commandName = "GetConfigurationPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SecurityHubAPIService",
        operation: "GetConfigurationPolicy",
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
  private serialize(input: GetConfigurationPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetConfigurationPolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetConfigurationPolicyCommandOutput> {
    return de_GetConfigurationPolicyCommand(output, context);
  }
}
