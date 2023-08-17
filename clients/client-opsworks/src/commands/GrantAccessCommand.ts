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

import { GrantAccessRequest, GrantAccessResult } from "../models/models_0";
import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { de_GrantAccessCommand, se_GrantAccessCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GrantAccessCommand}.
 */
export interface GrantAccessCommandInput extends GrantAccessRequest {}
/**
 * @public
 *
 * The output of {@link GrantAccessCommand}.
 */
export interface GrantAccessCommandOutput extends GrantAccessResult, __MetadataBearer {}

/**
 * @public
 * <note>
 *             <p>This action can be used only with Windows stacks.</p>
 *          </note>
 *          <p>Grants RDP access to a Windows instance for a specified time period.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, GrantAccessCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, GrantAccessCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const input = { // GrantAccessRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ValidForInMinutes: Number("int"),
 * };
 * const command = new GrantAccessCommand(input);
 * const response = await client.send(command);
 * // { // GrantAccessResult
 * //   TemporaryCredential: { // TemporaryCredential
 * //     Username: "STRING_VALUE",
 * //     Password: "STRING_VALUE",
 * //     ValidForInMinutes: Number("int"),
 * //     InstanceId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GrantAccessCommandInput - {@link GrantAccessCommandInput}
 * @returns {@link GrantAccessCommandOutput}
 * @see {@link GrantAccessCommandInput} for command's `input` shape.
 * @see {@link GrantAccessCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for OpsWorksClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Indicates that a resource was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Indicates that a request was not valid.</p>
 *
 * @throws {@link OpsWorksServiceException}
 * <p>Base exception class for all service exceptions from OpsWorks service.</p>
 *
 */
export class GrantAccessCommand extends $Command<
  GrantAccessCommandInput,
  GrantAccessCommandOutput,
  OpsWorksClientResolvedConfig
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
  constructor(readonly input: GrantAccessCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OpsWorksClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GrantAccessCommandInput, GrantAccessCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GrantAccessCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpsWorksClient";
    const commandName = "GrantAccessCommand";
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
  private serialize(input: GrantAccessCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GrantAccessCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GrantAccessCommandOutput> {
    return de_GrantAccessCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
