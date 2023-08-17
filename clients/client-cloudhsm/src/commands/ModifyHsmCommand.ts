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
import { ModifyHsmRequest, ModifyHsmResponse } from "../models/models_0";
import { de_ModifyHsmCommand, se_ModifyHsmCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ModifyHsmCommand}.
 */
export interface ModifyHsmCommandInput extends ModifyHsmRequest {}
/**
 * @public
 *
 * The output of {@link ModifyHsmCommand}.
 */
export interface ModifyHsmCommandOutput extends ModifyHsmResponse, __MetadataBearer {}

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
 *          <p>Modifies an HSM.</p>
 *          <important>
 *             <p>This operation can result in the HSM being offline for up to 15 minutes while the AWS
 *         CloudHSM service is reconfigured. If you are modifying a production HSM, you should ensure
 *         that your AWS CloudHSM service is configured for high availability, and consider executing this
 *         operation during a maintenance window.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudHSMClient, ModifyHsmCommand } from "@aws-sdk/client-cloudhsm"; // ES Modules import
 * // const { CloudHSMClient, ModifyHsmCommand } = require("@aws-sdk/client-cloudhsm"); // CommonJS import
 * const client = new CloudHSMClient(config);
 * const input = { // ModifyHsmRequest
 *   HsmArn: "STRING_VALUE", // required
 *   SubnetId: "STRING_VALUE",
 *   EniIp: "STRING_VALUE",
 *   IamRoleArn: "STRING_VALUE",
 *   ExternalId: "STRING_VALUE",
 *   SyslogIp: "STRING_VALUE",
 * };
 * const command = new ModifyHsmCommand(input);
 * const response = await client.send(command);
 * // { // ModifyHsmResponse
 * //   HsmArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ModifyHsmCommandInput - {@link ModifyHsmCommandInput}
 * @returns {@link ModifyHsmCommandOutput}
 * @see {@link ModifyHsmCommandInput} for command's `input` shape.
 * @see {@link ModifyHsmCommandOutput} for command's `response` shape.
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
export class ModifyHsmCommand extends $Command<
  ModifyHsmCommandInput,
  ModifyHsmCommandOutput,
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
  constructor(readonly input: ModifyHsmCommandInput) {
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
  ): Handler<ModifyHsmCommandInput, ModifyHsmCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ModifyHsmCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudHSMClient";
    const commandName = "ModifyHsmCommand";
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
  private serialize(input: ModifyHsmCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ModifyHsmCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyHsmCommandOutput> {
    return de_ModifyHsmCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
