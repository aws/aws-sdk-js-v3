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

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { ListContinuousDeploymentPoliciesRequest, ListContinuousDeploymentPoliciesResult } from "../models/models_1";
import {
  deserializeAws_restXmlListContinuousDeploymentPoliciesCommand,
  serializeAws_restXmlListContinuousDeploymentPoliciesCommand,
} from "../protocols/Aws_restXml";

/**
 * @public
 *
 * The input for {@link ListContinuousDeploymentPoliciesCommand}.
 */
export interface ListContinuousDeploymentPoliciesCommandInput extends ListContinuousDeploymentPoliciesRequest {}
/**
 * @public
 *
 * The output of {@link ListContinuousDeploymentPoliciesCommand}.
 */
export interface ListContinuousDeploymentPoliciesCommandOutput
  extends ListContinuousDeploymentPoliciesResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Gets a list of the continuous deployment policies in your Amazon Web Services account.</p>
 *          <p>You can optionally specify the maximum number of items to receive in the response. If
 * 			the total number of items in the list exceeds the maximum that you specify, or the
 * 			default maximum, the response is paginated. To get the next page of items, send a
 * 			subsequent request that specifies the <code>NextMarker</code> value from the current
 * 			response as the <code>Marker</code> value in the subsequent request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, ListContinuousDeploymentPoliciesCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, ListContinuousDeploymentPoliciesCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new ListContinuousDeploymentPoliciesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ListContinuousDeploymentPoliciesCommandInput - {@link ListContinuousDeploymentPoliciesCommandInput}
 * @returns {@link ListContinuousDeploymentPoliciesCommandOutput}
 * @see {@link ListContinuousDeploymentPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListContinuousDeploymentPoliciesCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
 *
 * @throws {@link NoSuchContinuousDeploymentPolicy} (client fault)
 *  <p>The continuous deployment policy doesn't exist.</p>
 *
 *
 */
export class ListContinuousDeploymentPoliciesCommand extends $Command<
  ListContinuousDeploymentPoliciesCommandInput,
  ListContinuousDeploymentPoliciesCommandOutput,
  CloudFrontClientResolvedConfig
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
  constructor(readonly input: ListContinuousDeploymentPoliciesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListContinuousDeploymentPoliciesCommandInput, ListContinuousDeploymentPoliciesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListContinuousDeploymentPoliciesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "ListContinuousDeploymentPoliciesCommand";
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
  private serialize(
    input: ListContinuousDeploymentPoliciesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restXmlListContinuousDeploymentPoliciesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListContinuousDeploymentPoliciesCommandOutput> {
    return deserializeAws_restXmlListContinuousDeploymentPoliciesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
