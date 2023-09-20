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

import { DLMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DLMClient";
import { GetLifecyclePoliciesRequest, GetLifecyclePoliciesResponse } from "../models/models_0";
import { de_GetLifecyclePoliciesCommand, se_GetLifecyclePoliciesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetLifecyclePoliciesCommand}.
 */
export interface GetLifecyclePoliciesCommandInput extends GetLifecyclePoliciesRequest {}
/**
 * @public
 *
 * The output of {@link GetLifecyclePoliciesCommand}.
 */
export interface GetLifecyclePoliciesCommandOutput extends GetLifecyclePoliciesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets summary information about all or the specified data lifecycle policies.</p>
 *          <p>To get complete information about a policy, use <a>GetLifecyclePolicy</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DLMClient, GetLifecyclePoliciesCommand } from "@aws-sdk/client-dlm"; // ES Modules import
 * // const { DLMClient, GetLifecyclePoliciesCommand } = require("@aws-sdk/client-dlm"); // CommonJS import
 * const client = new DLMClient(config);
 * const input = { // GetLifecyclePoliciesRequest
 *   PolicyIds: [ // PolicyIdList
 *     "STRING_VALUE",
 *   ],
 *   State: "ENABLED" || "DISABLED" || "ERROR",
 *   ResourceTypes: [ // ResourceTypeValuesList
 *     "VOLUME" || "INSTANCE",
 *   ],
 *   TargetTags: [ // TargetTagsFilterList
 *     "STRING_VALUE",
 *   ],
 *   TagsToAdd: [ // TagsToAddFilterList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new GetLifecyclePoliciesCommand(input);
 * const response = await client.send(command);
 * // { // GetLifecyclePoliciesResponse
 * //   Policies: [ // LifecyclePolicySummaryList
 * //     { // LifecyclePolicySummary
 * //       PolicyId: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       State: "ENABLED" || "DISABLED" || "ERROR",
 * //       Tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       PolicyType: "EBS_SNAPSHOT_MANAGEMENT" || "IMAGE_MANAGEMENT" || "EVENT_BASED_POLICY",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetLifecyclePoliciesCommandInput - {@link GetLifecyclePoliciesCommandInput}
 * @returns {@link GetLifecyclePoliciesCommandOutput}
 * @see {@link GetLifecyclePoliciesCommandInput} for command's `input` shape.
 * @see {@link GetLifecyclePoliciesCommandOutput} for command's `response` shape.
 * @see {@link DLMClientResolvedConfig | config} for DLMClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service failed in an unexpected way.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Bad request. The request is missing required parameters or has invalid
 * 			parameters.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request failed because a limit was exceeded.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A requested resource was not found.</p>
 *
 * @throws {@link DLMServiceException}
 * <p>Base exception class for all service exceptions from DLM service.</p>
 *
 */
export class GetLifecyclePoliciesCommand extends $Command<
  GetLifecyclePoliciesCommandInput,
  GetLifecyclePoliciesCommandOutput,
  DLMClientResolvedConfig
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
  constructor(readonly input: GetLifecyclePoliciesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DLMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetLifecyclePoliciesCommandInput, GetLifecyclePoliciesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetLifecyclePoliciesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DLMClient";
    const commandName = "GetLifecyclePoliciesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "dlm_20180112",
        operation: "GetLifecyclePolicies",
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
  private serialize(input: GetLifecyclePoliciesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetLifecyclePoliciesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetLifecyclePoliciesCommandOutput> {
    return de_GetLifecyclePoliciesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
