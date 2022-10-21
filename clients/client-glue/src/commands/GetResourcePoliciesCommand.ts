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

import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import {
  GetResourcePoliciesRequest,
  GetResourcePoliciesRequestFilterSensitiveLog,
  GetResourcePoliciesResponse,
  GetResourcePoliciesResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1GetResourcePoliciesCommand,
  serializeAws_json1_1GetResourcePoliciesCommand,
} from "../protocols/Aws_json1_1";

export interface GetResourcePoliciesCommandInput extends GetResourcePoliciesRequest {}
export interface GetResourcePoliciesCommandOutput extends GetResourcePoliciesResponse, __MetadataBearer {}

/**
 * <p>Retrieves the resource policies set on individual resources by Resource Access Manager
 *       during cross-account permission grants. Also retrieves the Data Catalog resource
 *       policy.</p>
 *          <p>If you enabled metadata encryption in Data Catalog settings, and you do not have
 *       permission on the KMS key, the operation can't return the Data Catalog resource
 *       policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetResourcePoliciesCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetResourcePoliciesCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetResourcePoliciesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetResourcePoliciesCommandInput} for command's `input` shape.
 * @see {@link GetResourcePoliciesCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 */
export class GetResourcePoliciesCommand extends $Command<
  GetResourcePoliciesCommandInput,
  GetResourcePoliciesCommandOutput,
  GlueClientResolvedConfig
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

  constructor(readonly input: GetResourcePoliciesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetResourcePoliciesCommandInput, GetResourcePoliciesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetResourcePoliciesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "GetResourcePoliciesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetResourcePoliciesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetResourcePoliciesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetResourcePoliciesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetResourcePoliciesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetResourcePoliciesCommandOutput> {
    return deserializeAws_json1_1GetResourcePoliciesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
