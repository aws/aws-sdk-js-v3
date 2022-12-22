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

import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import {
  GetAutoMergingPreviewRequest,
  GetAutoMergingPreviewRequestFilterSensitiveLog,
  GetAutoMergingPreviewResponse,
  GetAutoMergingPreviewResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetAutoMergingPreviewCommand,
  serializeAws_restJson1GetAutoMergingPreviewCommand,
} from "../protocols/Aws_restJson1";

export interface GetAutoMergingPreviewCommandInput extends GetAutoMergingPreviewRequest {}
export interface GetAutoMergingPreviewCommandOutput extends GetAutoMergingPreviewResponse, __MetadataBearer {}

/**
 * <p>Tests the auto-merging settings of your Identity Resolution Job without merging your data. It randomly
 *          selects a sample of matching groups from the existing matching results, and applies the
 *          automerging settings that you provided. You can then view the number of profiles in the
 *          sample, the number of matches, and the number of profiles identified to be merged. This
 *          enables you to evaluate the accuracy of the attributes in your matching list. </p>
 *          <p>You can't view which profiles are matched and would be merged.</p>
 *          <important>
 *             <p>We strongly recommend you use this API to do a dry run of the automerging process
 *             before running the Identity Resolution Job. Include <b>at least</b> two matching
 *             attributes. If your matching list includes too few attributes (such as only
 *                <code>FirstName</code> or only <code>LastName</code>), there may be a large number of
 *             matches. This increases the chances of erroneous merges.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, GetAutoMergingPreviewCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, GetAutoMergingPreviewCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * const client = new CustomerProfilesClient(config);
 * const command = new GetAutoMergingPreviewCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAutoMergingPreviewCommandInput} for command's `input` shape.
 * @see {@link GetAutoMergingPreviewCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for CustomerProfilesClient's `config` shape.
 *
 */
export class GetAutoMergingPreviewCommand extends $Command<
  GetAutoMergingPreviewCommandInput,
  GetAutoMergingPreviewCommandOutput,
  CustomerProfilesClientResolvedConfig
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

  constructor(readonly input: GetAutoMergingPreviewCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CustomerProfilesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetAutoMergingPreviewCommandInput, GetAutoMergingPreviewCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetAutoMergingPreviewCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CustomerProfilesClient";
    const commandName = "GetAutoMergingPreviewCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetAutoMergingPreviewRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetAutoMergingPreviewResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetAutoMergingPreviewCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetAutoMergingPreviewCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetAutoMergingPreviewCommandOutput> {
    return deserializeAws_restJson1GetAutoMergingPreviewCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
