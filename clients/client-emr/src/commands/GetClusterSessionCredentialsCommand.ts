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

import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import {
  GetClusterSessionCredentialsInput,
  GetClusterSessionCredentialsOutput,
  GetClusterSessionCredentialsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  de_GetClusterSessionCredentialsCommand,
  se_GetClusterSessionCredentialsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link GetClusterSessionCredentialsCommand}.
 */
export interface GetClusterSessionCredentialsCommandInput extends GetClusterSessionCredentialsInput {}
/**
 * @public
 *
 * The output of {@link GetClusterSessionCredentialsCommand}.
 */
export interface GetClusterSessionCredentialsCommandOutput
  extends GetClusterSessionCredentialsOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Provides temporary, HTTP basic credentials that are associated with a given runtime IAM role
 *          and used by a cluster with fine-grained access control activated. You can use these credentials to connect to cluster endpoints that support username and password authentication.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, GetClusterSessionCredentialsCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, GetClusterSessionCredentialsCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const input = { // GetClusterSessionCredentialsInput
 *   ClusterId: "STRING_VALUE", // required
 *   ExecutionRoleArn: "STRING_VALUE", // required
 * };
 * const command = new GetClusterSessionCredentialsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param GetClusterSessionCredentialsCommandInput - {@link GetClusterSessionCredentialsCommandInput}
 * @returns {@link GetClusterSessionCredentialsCommandOutput}
 * @see {@link GetClusterSessionCredentialsCommandInput} for command's `input` shape.
 * @see {@link GetClusterSessionCredentialsCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Indicates that an error occurred while processing the request and that the request was
 *          not completed.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception occurs when there is something wrong with user input.</p>
 *
 *
 */
export class GetClusterSessionCredentialsCommand extends $Command<
  GetClusterSessionCredentialsCommandInput,
  GetClusterSessionCredentialsCommandOutput,
  EMRClientResolvedConfig
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
  constructor(readonly input: GetClusterSessionCredentialsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EMRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetClusterSessionCredentialsCommandInput, GetClusterSessionCredentialsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetClusterSessionCredentialsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRClient";
    const commandName = "GetClusterSessionCredentialsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetClusterSessionCredentialsOutputFilterSensitiveLog,
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
  private serialize(input: GetClusterSessionCredentialsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetClusterSessionCredentialsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetClusterSessionCredentialsCommandOutput> {
    return de_GetClusterSessionCredentialsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
