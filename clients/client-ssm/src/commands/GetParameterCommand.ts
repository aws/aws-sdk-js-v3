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

import { GetParameterRequest, GetParameterResult, GetParameterResultFilterSensitiveLog } from "../models/models_1";
import { de_GetParameterCommand, se_GetParameterCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetParameterCommand}.
 */
export interface GetParameterCommandInput extends GetParameterRequest {}
/**
 * @public
 *
 * The output of {@link GetParameterCommand}.
 */
export interface GetParameterCommandOutput extends GetParameterResult, __MetadataBearer {}

/**
 * @public
 * <p>Get information about a single parameter by specifying the parameter name.</p>
 *          <note>
 *             <p>To get information about more than one parameter at a time, use the <a>GetParameters</a> operation.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetParameterCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetParameterCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // GetParameterRequest
 *   Name: "STRING_VALUE", // required
 *   WithDecryption: true || false,
 * };
 * const command = new GetParameterCommand(input);
 * const response = await client.send(command);
 * // { // GetParameterResult
 * //   Parameter: { // Parameter
 * //     Name: "STRING_VALUE",
 * //     Type: "String" || "StringList" || "SecureString",
 * //     Value: "STRING_VALUE",
 * //     Version: Number("long"),
 * //     Selector: "STRING_VALUE",
 * //     SourceResult: "STRING_VALUE",
 * //     LastModifiedDate: new Date("TIMESTAMP"),
 * //     ARN: "STRING_VALUE",
 * //     DataType: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetParameterCommandInput - {@link GetParameterCommandInput}
 * @returns {@link GetParameterCommandOutput}
 * @see {@link GetParameterCommandInput} for command's `input` shape.
 * @see {@link GetParameterCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidKeyId} (client fault)
 *  <p>The query key ID isn't valid.</p>
 *
 * @throws {@link ParameterNotFound} (client fault)
 *  <p>The parameter couldn't be found. Verify the name and try again.</p>
 *
 * @throws {@link ParameterVersionNotFound} (client fault)
 *  <p>The specified parameter version wasn't found. Verify the parameter name and version, and try
 *    again.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 */
export class GetParameterCommand extends $Command<
  GetParameterCommandInput,
  GetParameterCommandOutput,
  SSMClientResolvedConfig
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
  constructor(readonly input: GetParameterCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetParameterCommandInput, GetParameterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetParameterCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "GetParameterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetParameterResultFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonSSM",
        operation: "GetParameter",
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
  private serialize(input: GetParameterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetParameterCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetParameterCommandOutput> {
    return de_GetParameterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
