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

import { ConnectCasesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectCasesClient";
import { PutCaseEventConfigurationRequest, PutCaseEventConfigurationResponse } from "../models/models_0";
import { de_PutCaseEventConfigurationCommand, se_PutCaseEventConfigurationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutCaseEventConfigurationCommand}.
 */
export interface PutCaseEventConfigurationCommandInput extends PutCaseEventConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link PutCaseEventConfigurationCommand}.
 */
export interface PutCaseEventConfigurationCommandOutput extends PutCaseEventConfigurationResponse, __MetadataBearer {}

/**
 * @public
 * <p>API for adding case event publishing configuration</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCasesClient, PutCaseEventConfigurationCommand } from "@aws-sdk/client-connectcases"; // ES Modules import
 * // const { ConnectCasesClient, PutCaseEventConfigurationCommand } = require("@aws-sdk/client-connectcases"); // CommonJS import
 * const client = new ConnectCasesClient(config);
 * const input = { // PutCaseEventConfigurationRequest
 *   domainId: "STRING_VALUE", // required
 *   eventBridge: { // EventBridgeConfiguration
 *     enabled: true || false, // required
 *     includedData: { // EventIncludedData
 *       caseData: { // CaseEventIncludedData
 *         fields: [ // FieldIdentifierList // required
 *           { // FieldIdentifier
 *             id: "STRING_VALUE", // required
 *           },
 *         ],
 *       },
 *       relatedItemData: { // RelatedItemEventIncludedData
 *         includeContent: true || false, // required
 *       },
 *     },
 *   },
 * };
 * const command = new PutCaseEventConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutCaseEventConfigurationCommandInput - {@link PutCaseEventConfigurationCommandInput}
 * @returns {@link PutCaseEventConfigurationCommandOutput}
 * @see {@link PutCaseEventConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutCaseEventConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ConnectCasesClientResolvedConfig | config} for ConnectCasesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>We couldn't process your request because of an issue with the server. Try again
 *       later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>We couldn't find the requested resource. Check that your resources exists and were created
 *       in the same Amazon Web Services Region as your request, and try your request again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate has been exceeded for this API. Please try again after a few minutes.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. Check the syntax and try again.</p>
 *
 * @throws {@link ConnectCasesServiceException}
 * <p>Base exception class for all service exceptions from ConnectCases service.</p>
 *
 */
export class PutCaseEventConfigurationCommand extends $Command<
  PutCaseEventConfigurationCommandInput,
  PutCaseEventConfigurationCommandOutput,
  ConnectCasesClientResolvedConfig
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
  constructor(readonly input: PutCaseEventConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectCasesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutCaseEventConfigurationCommandInput, PutCaseEventConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutCaseEventConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectCasesClient";
    const commandName = "PutCaseEventConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonConnectCases",
        operation: "PutCaseEventConfiguration",
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
  private serialize(input: PutCaseEventConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutCaseEventConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutCaseEventConfigurationCommandOutput> {
    return de_PutCaseEventConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
