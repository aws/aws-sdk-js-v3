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

import { GlacierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlacierClient";
import {
  GetDataRetrievalPolicyInput,
  GetDataRetrievalPolicyInputFilterSensitiveLog,
  GetDataRetrievalPolicyOutput,
  GetDataRetrievalPolicyOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetDataRetrievalPolicyCommand,
  serializeAws_restJson1GetDataRetrievalPolicyCommand,
} from "../protocols/Aws_restJson1";

export interface GetDataRetrievalPolicyCommandInput extends GetDataRetrievalPolicyInput {}
export interface GetDataRetrievalPolicyCommandOutput extends GetDataRetrievalPolicyOutput, __MetadataBearer {}

/**
 * <p>This operation returns the current data retrieval policy for the account and region
 *          specified in the GET request. For more information about data retrieval policies, see
 *             <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/data-retrieval-policy.html">Amazon Glacier Data Retrieval Policies</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, GetDataRetrievalPolicyCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, GetDataRetrievalPolicyCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * const client = new GlacierClient(config);
 * const command = new GetDataRetrievalPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDataRetrievalPolicyCommandInput} for command's `input` shape.
 * @see {@link GetDataRetrievalPolicyCommandOutput} for command's `response` shape.
 * @see {@link GlacierClientResolvedConfig | config} for GlacierClient's `config` shape.
 *
 */
export class GetDataRetrievalPolicyCommand extends $Command<
  GetDataRetrievalPolicyCommandInput,
  GetDataRetrievalPolicyCommandOutput,
  GlacierClientResolvedConfig
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

  constructor(readonly input: GetDataRetrievalPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlacierClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDataRetrievalPolicyCommandInput, GetDataRetrievalPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetDataRetrievalPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlacierClient";
    const commandName = "GetDataRetrievalPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetDataRetrievalPolicyInputFilterSensitiveLog,
      outputFilterSensitiveLog: GetDataRetrievalPolicyOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetDataRetrievalPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetDataRetrievalPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDataRetrievalPolicyCommandOutput> {
    return deserializeAws_restJson1GetDataRetrievalPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
