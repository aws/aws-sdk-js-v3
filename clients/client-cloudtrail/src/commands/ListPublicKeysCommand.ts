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

import { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import { ListPublicKeysRequest, ListPublicKeysResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListPublicKeysCommand,
  serializeAws_json1_1ListPublicKeysCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link ListPublicKeysCommand}.
 */
export interface ListPublicKeysCommandInput extends ListPublicKeysRequest {}
/**
 * @public
 *
 * The output of {@link ListPublicKeysCommand}.
 */
export interface ListPublicKeysCommandOutput extends ListPublicKeysResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns all public keys whose private keys were used to sign the digest files within the
 *          specified time range. The public key is needed to validate digest files that were signed
 *          with its corresponding private key.</p>
 *          <note>
 *             <p>CloudTrail uses different private and public key pairs per region. Each digest
 *             file is signed with a private key unique to its region. When you validate a digest file
 *             from a specific region, you must look in the same region for its corresponding public
 *             key.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, ListPublicKeysCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, ListPublicKeysCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * const client = new CloudTrailClient(config);
 * const command = new ListPublicKeysCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ListPublicKeysCommandInput - {@link ListPublicKeysCommandInput}
 * @returns {@link ListPublicKeysCommandOutput}
 * @see {@link ListPublicKeysCommandInput} for command's `input` shape.
 * @see {@link ListPublicKeysCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for CloudTrailClient's `config` shape.
 *
 * @throws {@link InvalidTimeRangeException} (client fault)
 *  <p>Occurs if the timestamp values are not valid. Either the start time occurs after the end
 *          time, or the time range is outside the range of possible values.</p>
 *
 * @throws {@link InvalidTokenException} (client fault)
 *  <p>Reserved for future use.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>This exception is thrown when the requested operation is not permitted.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>This exception is thrown when the requested operation is not supported.</p>
 *
 *
 */
export class ListPublicKeysCommand extends $Command<
  ListPublicKeysCommandInput,
  ListPublicKeysCommandOutput,
  CloudTrailClientResolvedConfig
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
  constructor(readonly input: ListPublicKeysCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudTrailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListPublicKeysCommandInput, ListPublicKeysCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListPublicKeysCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudTrailClient";
    const commandName = "ListPublicKeysCommand";
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
  private serialize(input: ListPublicKeysCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListPublicKeysCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListPublicKeysCommandOutput> {
    return deserializeAws_json1_1ListPublicKeysCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
