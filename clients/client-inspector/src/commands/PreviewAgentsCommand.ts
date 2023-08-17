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

import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { PreviewAgentsRequest, PreviewAgentsResponse } from "../models/models_0";
import { de_PreviewAgentsCommand, se_PreviewAgentsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PreviewAgentsCommand}.
 */
export interface PreviewAgentsCommandInput extends PreviewAgentsRequest {}
/**
 * @public
 *
 * The output of {@link PreviewAgentsCommand}.
 */
export interface PreviewAgentsCommandOutput extends PreviewAgentsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Previews the agents installed on the EC2 instances that are part of the specified
 *          assessment target.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, PreviewAgentsCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, PreviewAgentsCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const input = { // PreviewAgentsRequest
 *   previewAgentsArn: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new PreviewAgentsCommand(input);
 * const response = await client.send(command);
 * // { // PreviewAgentsResponse
 * //   agentPreviews: [ // AgentPreviewList // required
 * //     { // AgentPreview
 * //       hostname: "STRING_VALUE",
 * //       agentId: "STRING_VALUE", // required
 * //       autoScalingGroup: "STRING_VALUE",
 * //       agentHealth: "STRING_VALUE",
 * //       agentVersion: "STRING_VALUE",
 * //       operatingSystem: "STRING_VALUE",
 * //       kernelVersion: "STRING_VALUE",
 * //       ipv4Address: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PreviewAgentsCommandInput - {@link PreviewAgentsCommandInput}
 * @returns {@link PreviewAgentsCommandOutput}
 * @see {@link PreviewAgentsCommandInput} for command's `input` shape.
 * @see {@link PreviewAgentsCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for InspectorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have required permissions to access the requested resource.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InvalidCrossAccountRoleException} (client fault)
 *  <p>Amazon Inspector cannot assume the cross-account role that it needs to list your EC2
 *          instances during the assessment run.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *          input parameter.</p>
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced an entity that does not exist. The
 *          error code describes the entity.</p>
 *
 * @throws {@link InspectorServiceException}
 * <p>Base exception class for all service exceptions from Inspector service.</p>
 *
 * @example Preview agents
 * ```javascript
 * // Previews the agents installed on the EC2 instances that are part of the specified assessment target.
 * const input = {
 *   "maxResults": 123,
 *   "previewAgentsArn": "arn:aws:inspector:us-west-2:123456789012:target/0-0kFIPusq"
 * };
 * const command = new PreviewAgentsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "agentPreviews": [
 *     {
 *       "agentId": "i-49113b93"
 *     }
 *   ],
 *   "nextToken": "1"
 * }
 * *\/
 * // example id: preview-agents-1481067101888
 * ```
 *
 */
export class PreviewAgentsCommand extends $Command<
  PreviewAgentsCommandInput,
  PreviewAgentsCommandOutput,
  InspectorClientResolvedConfig
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
  constructor(readonly input: PreviewAgentsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: InspectorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PreviewAgentsCommandInput, PreviewAgentsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, PreviewAgentsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "InspectorClient";
    const commandName = "PreviewAgentsCommand";
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
  private serialize(input: PreviewAgentsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PreviewAgentsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PreviewAgentsCommandOutput> {
    return de_PreviewAgentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
