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

import { CloudHSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudHSMClient";
import { GetConfigRequest, GetConfigResponse } from "../models/models_0";
import { de_GetConfigCommand, se_GetConfigCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetConfigCommand}.
 */
export interface GetConfigCommandInput extends GetConfigRequest {}
/**
 * @public
 *
 * The output of {@link GetConfigCommand}.
 */
export interface GetConfigCommandOutput extends GetConfigResponse, __MetadataBearer {}

/**
 * @public
 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For
 *       more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM
 *       Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS
 *       CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p>
 *          <p>
 *             <b>For information about the current version of AWS
 *       CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the
 *       <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>,
 *       and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API
 *       Reference</a>.</p>
 *          <p>Gets the configuration files necessary to connect to all high availability partition
 *       groups the client is associated with.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudHSMClient, GetConfigCommand } from "@aws-sdk/client-cloudhsm"; // ES Modules import
 * // const { CloudHSMClient, GetConfigCommand } = require("@aws-sdk/client-cloudhsm"); // CommonJS import
 * const client = new CloudHSMClient(config);
 * const input = { // GetConfigRequest
 *   ClientArn: "STRING_VALUE", // required
 *   ClientVersion: "STRING_VALUE", // required
 *   HapgList: [ // HapgList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new GetConfigCommand(input);
 * const response = await client.send(command);
 * // { // GetConfigResponse
 * //   ConfigType: "STRING_VALUE",
 * //   ConfigFile: "STRING_VALUE",
 * //   ConfigCred: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetConfigCommandInput - {@link GetConfigCommandInput}
 * @returns {@link GetConfigCommandOutput}
 * @see {@link GetConfigCommandInput} for command's `input` shape.
 * @see {@link GetConfigCommandOutput} for command's `response` shape.
 * @see {@link CloudHSMClientResolvedConfig | config} for CloudHSMClient's `config` shape.
 *
 * @throws {@link CloudHsmInternalException} (server fault)
 *  <p>Indicates that an internal error occurred.</p>
 *
 * @throws {@link CloudHsmServiceException} (client fault)
 *  <p>Indicates that an exception occurred in the AWS CloudHSM service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that one or more of the request parameters are not valid.</p>
 *
 * @throws {@link CloudHSMServiceException}
 * <p>Base exception class for all service exceptions from CloudHSM service.</p>
 *
 */
export class GetConfigCommand extends $Command<
  GetConfigCommandInput,
  GetConfigCommandOutput,
  CloudHSMClientResolvedConfig
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
  constructor(readonly input: GetConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudHSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetConfigCommandInput, GetConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetConfigCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudHSMClient";
    const commandName = "GetConfigCommand";
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
  private serialize(input: GetConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetConfigCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetConfigCommandOutput> {
    return de_GetConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
