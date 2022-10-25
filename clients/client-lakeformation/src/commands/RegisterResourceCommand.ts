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

import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import {
  RegisterResourceRequest,
  RegisterResourceRequestFilterSensitiveLog,
  RegisterResourceResponse,
  RegisterResourceResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1RegisterResourceCommand,
  serializeAws_restJson1RegisterResourceCommand,
} from "../protocols/Aws_restJson1";

export interface RegisterResourceCommandInput extends RegisterResourceRequest {}
export interface RegisterResourceCommandOutput extends RegisterResourceResponse, __MetadataBearer {}

/**
 * <p>Registers the resource as managed by the Data Catalog.</p>
 *
 *          <p>To add or update data, Lake Formation needs read/write access to the chosen Amazon S3 path. Choose a role that you know has permission to do this, or choose the AWSServiceRoleForLakeFormationDataAccess service-linked role. When you register the first Amazon S3 path, the service-linked role and a new inline policy are created on your behalf. Lake Formation adds the first path to the inline policy and attaches it to the service-linked role. When you register subsequent paths, Lake Formation adds the path to the existing policy.</p>
 *
 *          <p>The following request registers a new location and gives Lake Formation permission to use the service-linked role to access that location.</p>
 *
 *          <p>
 *             <code>ResourceArn = arn:aws:s3:::my-bucket
 * UseServiceLinkedRole = true</code>
 *          </p>
 *
 * 	        <p>If <code>UseServiceLinkedRole</code> is not set to true, you must provide or set the <code>RoleArn</code>:</p>
 *
 *          <p>
 *             <code>arn:aws:iam::12345:role/my-data-access-role</code>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, RegisterResourceCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, RegisterResourceCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const command = new RegisterResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterResourceCommandInput} for command's `input` shape.
 * @see {@link RegisterResourceCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
 *
 */
export class RegisterResourceCommand extends $Command<
  RegisterResourceCommandInput,
  RegisterResourceCommandOutput,
  LakeFormationClientResolvedConfig
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

  constructor(readonly input: RegisterResourceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LakeFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RegisterResourceCommandInput, RegisterResourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RegisterResourceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LakeFormationClient";
    const commandName = "RegisterResourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RegisterResourceRequestFilterSensitiveLog,
      outputFilterSensitiveLog: RegisterResourceResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RegisterResourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1RegisterResourceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RegisterResourceCommandOutput> {
    return deserializeAws_restJson1RegisterResourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
