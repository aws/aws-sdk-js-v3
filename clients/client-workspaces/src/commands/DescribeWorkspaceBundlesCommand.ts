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

import { DescribeWorkspaceBundlesRequest, DescribeWorkspaceBundlesResult } from "../models/models_0";
import { de_DescribeWorkspaceBundlesCommand, se_DescribeWorkspaceBundlesCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeWorkspaceBundlesCommand}.
 */
export interface DescribeWorkspaceBundlesCommandInput extends DescribeWorkspaceBundlesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeWorkspaceBundlesCommand}.
 */
export interface DescribeWorkspaceBundlesCommandOutput extends DescribeWorkspaceBundlesResult, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves a list that describes the available WorkSpace bundles.</p>
 *          <p>You can filter the results using either bundle ID or owner, but not both.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, DescribeWorkspaceBundlesCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, DescribeWorkspaceBundlesCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const input = { // DescribeWorkspaceBundlesRequest
 *   BundleIds: [ // BundleIdList
 *     "STRING_VALUE",
 *   ],
 *   Owner: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeWorkspaceBundlesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeWorkspaceBundlesResult
 * //   Bundles: [ // BundleList
 * //     { // WorkspaceBundle
 * //       BundleId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Owner: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       ImageId: "STRING_VALUE",
 * //       RootStorage: { // RootStorage
 * //         Capacity: "STRING_VALUE",
 * //       },
 * //       UserStorage: { // UserStorage
 * //         Capacity: "STRING_VALUE",
 * //       },
 * //       ComputeType: { // ComputeType
 * //         Name: "VALUE" || "STANDARD" || "PERFORMANCE" || "POWER" || "GRAPHICS" || "POWERPRO" || "GRAPHICSPRO" || "GRAPHICS_G4DN" || "GRAPHICSPRO_G4DN",
 * //       },
 * //       LastUpdatedTime: new Date("TIMESTAMP"),
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       State: "AVAILABLE" || "PENDING" || "ERROR",
 * //       BundleType: "REGULAR" || "STANDBY",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeWorkspaceBundlesCommandInput - {@link DescribeWorkspaceBundlesCommandInput}
 * @returns {@link DescribeWorkspaceBundlesCommandOutput}
 * @see {@link DescribeWorkspaceBundlesCommandInput} for command's `input` shape.
 * @see {@link DescribeWorkspaceBundlesCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 * @throws {@link InvalidParameterValuesException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link WorkSpacesServiceException}
 * <p>Base exception class for all service exceptions from WorkSpaces service.</p>
 *
 */
export class DescribeWorkspaceBundlesCommand extends $Command<
  DescribeWorkspaceBundlesCommandInput,
  DescribeWorkspaceBundlesCommandOutput,
  WorkSpacesClientResolvedConfig
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
  constructor(readonly input: DescribeWorkspaceBundlesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkSpacesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeWorkspaceBundlesCommandInput, DescribeWorkspaceBundlesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeWorkspaceBundlesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesClient";
    const commandName = "DescribeWorkspaceBundlesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "WorkspacesService",
        operation: "DescribeWorkspaceBundles",
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
  private serialize(input: DescribeWorkspaceBundlesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeWorkspaceBundlesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeWorkspaceBundlesCommandOutput> {
    return de_DescribeWorkspaceBundlesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
