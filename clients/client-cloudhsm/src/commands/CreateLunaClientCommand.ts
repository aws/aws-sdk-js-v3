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
import { CreateLunaClientRequest, CreateLunaClientResponse } from "../models/models_0";
import { de_CreateLunaClientCommand, se_CreateLunaClientCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateLunaClientCommand}.
 */
export interface CreateLunaClientCommandInput extends CreateLunaClientRequest {}
/**
 * @public
 *
 * The output of {@link CreateLunaClientCommand}.
 */
export interface CreateLunaClientCommandOutput extends CreateLunaClientResponse, __MetadataBearer {}

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
 *          <p>Creates an HSM client.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudHSMClient, CreateLunaClientCommand } from "@aws-sdk/client-cloudhsm"; // ES Modules import
 * // const { CloudHSMClient, CreateLunaClientCommand } = require("@aws-sdk/client-cloudhsm"); // CommonJS import
 * const client = new CloudHSMClient(config);
 * const input = { // CreateLunaClientRequest
 *   Label: "STRING_VALUE",
 *   Certificate: "STRING_VALUE", // required
 * };
 * const command = new CreateLunaClientCommand(input);
 * const response = await client.send(command);
 * // { // CreateLunaClientResponse
 * //   ClientArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateLunaClientCommandInput - {@link CreateLunaClientCommandInput}
 * @returns {@link CreateLunaClientCommandOutput}
 * @see {@link CreateLunaClientCommandInput} for command's `input` shape.
 * @see {@link CreateLunaClientCommandOutput} for command's `response` shape.
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
export class CreateLunaClientCommand extends $Command<
  CreateLunaClientCommandInput,
  CreateLunaClientCommandOutput,
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
  constructor(readonly input: CreateLunaClientCommandInput) {
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
  ): Handler<CreateLunaClientCommandInput, CreateLunaClientCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateLunaClientCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudHSMClient";
    const commandName = "CreateLunaClientCommand";
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
  private serialize(input: CreateLunaClientCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateLunaClientCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateLunaClientCommandOutput> {
    return de_CreateLunaClientCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
