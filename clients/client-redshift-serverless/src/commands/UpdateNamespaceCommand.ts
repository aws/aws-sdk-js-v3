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

import {
  UpdateNamespaceRequest,
  UpdateNamespaceRequestFilterSensitiveLog,
  UpdateNamespaceResponse,
  UpdateNamespaceResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1UpdateNamespaceCommand,
  serializeAws_json1_1UpdateNamespaceCommand,
} from "../protocols/Aws_json1_1";
import {
  RedshiftServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RedshiftServerlessClient";

/**
 * @public
 *
 * The input for {@link UpdateNamespaceCommand}.
 */
export interface UpdateNamespaceCommandInput extends UpdateNamespaceRequest {}
/**
 * @public
 *
 * The output of {@link UpdateNamespaceCommand}.
 */
export interface UpdateNamespaceCommandOutput extends UpdateNamespaceResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates a namespace with the specified settings. Unless required, you can't update multiple parameters in one request. For example,
 *       you must specify both <code>adminUsername</code> and <code>adminUserPassword</code> to update either field, but you can't update both <code>kmsKeyId</code>
 *       and <code>logExports</code> in a single request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftServerlessClient, UpdateNamespaceCommand } from "@aws-sdk/client-redshift-serverless"; // ES Modules import
 * // const { RedshiftServerlessClient, UpdateNamespaceCommand } = require("@aws-sdk/client-redshift-serverless"); // CommonJS import
 * const client = new RedshiftServerlessClient(config);
 * const input = {
 *   namespaceName: "STRING_VALUE", // required
 *   adminUserPassword: "STRING_VALUE",
 *   adminUsername: "STRING_VALUE",
 *   kmsKeyId: "STRING_VALUE",
 *   defaultIamRoleArn: "STRING_VALUE",
 *   iamRoles: [
 *     "STRING_VALUE",
 *   ],
 *   logExports: [
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateNamespaceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param UpdateNamespaceCommandInput - {@link UpdateNamespaceCommandInput}
 * @returns {@link UpdateNamespaceCommandOutput}
 * @see {@link UpdateNamespaceCommandInput} for command's `input` shape.
 * @see {@link UpdateNamespaceCommandOutput} for command's `response` shape.
 * @see {@link RedshiftServerlessClientResolvedConfig | config} for RedshiftServerlessClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The submitted action has conflicts.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to satisfy the constraints specified by an AWS service.</p>
 *
 *
 */
export class UpdateNamespaceCommand extends $Command<
  UpdateNamespaceCommandInput,
  UpdateNamespaceCommandOutput,
  RedshiftServerlessClientResolvedConfig
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
  constructor(readonly input: UpdateNamespaceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftServerlessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateNamespaceCommandInput, UpdateNamespaceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateNamespaceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftServerlessClient";
    const commandName = "UpdateNamespaceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateNamespaceRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateNamespaceResponseFilterSensitiveLog,
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
  private serialize(input: UpdateNamespaceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateNamespaceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateNamespaceCommandOutput> {
    return deserializeAws_json1_1UpdateNamespaceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
