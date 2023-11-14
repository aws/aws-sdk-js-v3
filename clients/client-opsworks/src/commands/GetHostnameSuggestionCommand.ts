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

import { GetHostnameSuggestionRequest, GetHostnameSuggestionResult } from "../models/models_0";
import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { de_GetHostnameSuggestionCommand, se_GetHostnameSuggestionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetHostnameSuggestionCommand}.
 */
export interface GetHostnameSuggestionCommandInput extends GetHostnameSuggestionRequest {}
/**
 * @public
 *
 * The output of {@link GetHostnameSuggestionCommand}.
 */
export interface GetHostnameSuggestionCommandOutput extends GetHostnameSuggestionResult, __MetadataBearer {}

/**
 * @public
 * <p>Gets a generated host name for the specified layer, based on the current host name theme.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
 *       level for the stack, or an attached policy that explicitly grants permissions. For more
 *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, GetHostnameSuggestionCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, GetHostnameSuggestionCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const input = { // GetHostnameSuggestionRequest
 *   LayerId: "STRING_VALUE", // required
 * };
 * const command = new GetHostnameSuggestionCommand(input);
 * const response = await client.send(command);
 * // { // GetHostnameSuggestionResult
 * //   LayerId: "STRING_VALUE",
 * //   Hostname: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetHostnameSuggestionCommandInput - {@link GetHostnameSuggestionCommandInput}
 * @returns {@link GetHostnameSuggestionCommandOutput}
 * @see {@link GetHostnameSuggestionCommandInput} for command's `input` shape.
 * @see {@link GetHostnameSuggestionCommandOutput} for command's `response` shape.
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
export class GetHostnameSuggestionCommand extends $Command<
  GetHostnameSuggestionCommandInput,
  GetHostnameSuggestionCommandOutput,
  OpsWorksClientResolvedConfig
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
  constructor(readonly input: GetHostnameSuggestionCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OpsWorksClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetHostnameSuggestionCommandInput, GetHostnameSuggestionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetHostnameSuggestionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpsWorksClient";
    const commandName = "GetHostnameSuggestionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "OpsWorks_20130218",
        operation: "GetHostnameSuggestion",
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
  private serialize(input: GetHostnameSuggestionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetHostnameSuggestionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetHostnameSuggestionCommandOutput> {
    return de_GetHostnameSuggestionCommand(output, context);
  }
}
