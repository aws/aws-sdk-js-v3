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

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { ListTypesInput, ListTypesOutput } from "../models/models_0";
import { de_ListTypesCommand, se_ListTypesCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListTypesCommand}.
 */
export interface ListTypesCommandInput extends ListTypesInput {}
/**
 * @public
 *
 * The output of {@link ListTypesCommand}.
 */
export interface ListTypesCommandOutput extends ListTypesOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns summary information about extension that have been registered with CloudFormation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, ListTypesCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, ListTypesCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const input = { // ListTypesInput
 *   Visibility: "PUBLIC" || "PRIVATE",
 *   ProvisioningType: "NON_PROVISIONABLE" || "IMMUTABLE" || "FULLY_MUTABLE",
 *   DeprecatedStatus: "LIVE" || "DEPRECATED",
 *   Type: "RESOURCE" || "MODULE" || "HOOK",
 *   Filters: { // TypeFilters
 *     Category: "REGISTERED" || "ACTIVATED" || "THIRD_PARTY" || "AWS_TYPES",
 *     PublisherId: "STRING_VALUE",
 *     TypeNamePrefix: "STRING_VALUE",
 *   },
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListTypesCommand(input);
 * const response = await client.send(command);
 * // { // ListTypesOutput
 * //   TypeSummaries: [ // TypeSummaries
 * //     { // TypeSummary
 * //       Type: "RESOURCE" || "MODULE" || "HOOK",
 * //       TypeName: "STRING_VALUE",
 * //       DefaultVersionId: "STRING_VALUE",
 * //       TypeArn: "STRING_VALUE",
 * //       LastUpdated: new Date("TIMESTAMP"),
 * //       Description: "STRING_VALUE",
 * //       PublisherId: "STRING_VALUE",
 * //       OriginalTypeName: "STRING_VALUE",
 * //       PublicVersionNumber: "STRING_VALUE",
 * //       LatestPublicVersion: "STRING_VALUE",
 * //       PublisherIdentity: "AWS_Marketplace" || "GitHub" || "Bitbucket",
 * //       PublisherName: "STRING_VALUE",
 * //       IsActivated: true || false,
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTypesCommandInput - {@link ListTypesCommandInput}
 * @returns {@link ListTypesCommandOutput}
 * @see {@link ListTypesCommandInput} for command's `input` shape.
 * @see {@link ListTypesCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link CFNRegistryException} (client fault)
 *  <p>An error occurred during a CloudFormation registry operation.</p>
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 */
export class ListTypesCommand extends $Command<
  ListTypesCommandInput,
  ListTypesCommandOutput,
  CloudFormationClientResolvedConfig
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
  constructor(readonly input: ListTypesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListTypesCommandInput, ListTypesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListTypesCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "ListTypesCommand";
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
  private serialize(input: ListTypesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListTypesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListTypesCommandOutput> {
    return de_ListTypesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
