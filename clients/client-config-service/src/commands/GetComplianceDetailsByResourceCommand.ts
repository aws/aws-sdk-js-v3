// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { GetComplianceDetailsByResourceRequest, GetComplianceDetailsByResourceResponse } from "../models/models_0";
import {
  de_GetComplianceDetailsByResourceCommand,
  se_GetComplianceDetailsByResourceCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link GetComplianceDetailsByResourceCommand}.
 */
export interface GetComplianceDetailsByResourceCommandInput extends GetComplianceDetailsByResourceRequest {}
/**
 * @public
 *
 * The output of {@link GetComplianceDetailsByResourceCommand}.
 */
export interface GetComplianceDetailsByResourceCommandOutput
  extends GetComplianceDetailsByResourceResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns the evaluation results for the specified Amazon Web Services resource.
 * 			The results indicate which Config rules were used to evaluate
 * 			the resource, when each rule was last invoked, and whether the resource
 * 			complies with each rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, GetComplianceDetailsByResourceCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, GetComplianceDetailsByResourceCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const input = { // GetComplianceDetailsByResourceRequest
 *   ResourceType: "STRING_VALUE",
 *   ResourceId: "STRING_VALUE",
 *   ComplianceTypes: [ // ComplianceTypes
 *     "COMPLIANT" || "NON_COMPLIANT" || "NOT_APPLICABLE" || "INSUFFICIENT_DATA",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   ResourceEvaluationId: "STRING_VALUE",
 * };
 * const command = new GetComplianceDetailsByResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param GetComplianceDetailsByResourceCommandInput - {@link GetComplianceDetailsByResourceCommandInput}
 * @returns {@link GetComplianceDetailsByResourceCommandOutput}
 * @see {@link GetComplianceDetailsByResourceCommandInput} for command's `input` shape.
 * @see {@link GetComplianceDetailsByResourceCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more of the specified parameters are not valid. Verify
 * 			that your parameters are valid and try again.</p>
 *
 *
 */
export class GetComplianceDetailsByResourceCommand extends $Command<
  GetComplianceDetailsByResourceCommandInput,
  GetComplianceDetailsByResourceCommandOutput,
  ConfigServiceClientResolvedConfig
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
  constructor(readonly input: GetComplianceDetailsByResourceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConfigServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetComplianceDetailsByResourceCommandInput, GetComplianceDetailsByResourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetComplianceDetailsByResourceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "GetComplianceDetailsByResourceCommand";
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
    input: GetComplianceDetailsByResourceCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetComplianceDetailsByResourceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetComplianceDetailsByResourceCommandOutput> {
    return de_GetComplianceDetailsByResourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
