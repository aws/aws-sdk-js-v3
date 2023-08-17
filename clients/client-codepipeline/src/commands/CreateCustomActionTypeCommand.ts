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

import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { CreateCustomActionTypeInput, CreateCustomActionTypeOutput } from "../models/models_0";
import { de_CreateCustomActionTypeCommand, se_CreateCustomActionTypeCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateCustomActionTypeCommand}.
 */
export interface CreateCustomActionTypeCommandInput extends CreateCustomActionTypeInput {}
/**
 * @public
 *
 * The output of {@link CreateCustomActionTypeCommand}.
 */
export interface CreateCustomActionTypeCommandOutput extends CreateCustomActionTypeOutput, __MetadataBearer {}

/**
 * @public
 * <p>Creates a new custom action that can be used in all pipelines associated with the
 *                 Amazon Web Services account. Only used for custom actions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, CreateCustomActionTypeCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, CreateCustomActionTypeCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const input = { // CreateCustomActionTypeInput
 *   category: "Source" || "Build" || "Deploy" || "Test" || "Invoke" || "Approval", // required
 *   provider: "STRING_VALUE", // required
 *   version: "STRING_VALUE", // required
 *   settings: { // ActionTypeSettings
 *     thirdPartyConfigurationUrl: "STRING_VALUE",
 *     entityUrlTemplate: "STRING_VALUE",
 *     executionUrlTemplate: "STRING_VALUE",
 *     revisionUrlTemplate: "STRING_VALUE",
 *   },
 *   configurationProperties: [ // ActionConfigurationPropertyList
 *     { // ActionConfigurationProperty
 *       name: "STRING_VALUE", // required
 *       required: true || false, // required
 *       key: true || false, // required
 *       secret: true || false, // required
 *       queryable: true || false,
 *       description: "STRING_VALUE",
 *       type: "String" || "Number" || "Boolean",
 *     },
 *   ],
 *   inputArtifactDetails: { // ArtifactDetails
 *     minimumCount: Number("int"), // required
 *     maximumCount: Number("int"), // required
 *   },
 *   outputArtifactDetails: {
 *     minimumCount: Number("int"), // required
 *     maximumCount: Number("int"), // required
 *   },
 *   tags: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateCustomActionTypeCommand(input);
 * const response = await client.send(command);
 * // { // CreateCustomActionTypeOutput
 * //   actionType: { // ActionType
 * //     id: { // ActionTypeId
 * //       category: "Source" || "Build" || "Deploy" || "Test" || "Invoke" || "Approval", // required
 * //       owner: "AWS" || "ThirdParty" || "Custom", // required
 * //       provider: "STRING_VALUE", // required
 * //       version: "STRING_VALUE", // required
 * //     },
 * //     settings: { // ActionTypeSettings
 * //       thirdPartyConfigurationUrl: "STRING_VALUE",
 * //       entityUrlTemplate: "STRING_VALUE",
 * //       executionUrlTemplate: "STRING_VALUE",
 * //       revisionUrlTemplate: "STRING_VALUE",
 * //     },
 * //     actionConfigurationProperties: [ // ActionConfigurationPropertyList
 * //       { // ActionConfigurationProperty
 * //         name: "STRING_VALUE", // required
 * //         required: true || false, // required
 * //         key: true || false, // required
 * //         secret: true || false, // required
 * //         queryable: true || false,
 * //         description: "STRING_VALUE",
 * //         type: "String" || "Number" || "Boolean",
 * //       },
 * //     ],
 * //     inputArtifactDetails: { // ArtifactDetails
 * //       minimumCount: Number("int"), // required
 * //       maximumCount: Number("int"), // required
 * //     },
 * //     outputArtifactDetails: {
 * //       minimumCount: Number("int"), // required
 * //       maximumCount: Number("int"), // required
 * //     },
 * //   },
 * //   tags: [ // TagList
 * //     { // Tag
 * //       key: "STRING_VALUE", // required
 * //       value: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param CreateCustomActionTypeCommandInput - {@link CreateCustomActionTypeCommandInput}
 * @returns {@link CreateCustomActionTypeCommandOutput}
 * @see {@link CreateCustomActionTypeCommandInput} for command's `input` shape.
 * @see {@link CreateCustomActionTypeCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for CodePipelineClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Unable to modify the tag due to a simultaneous update request.</p>
 *
 * @throws {@link InvalidTagsException} (client fault)
 *  <p>The specified resource tags are invalid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The number of pipelines associated with the Amazon Web Services account has exceeded
 *             the limit allowed for the account.</p>
 *
 * @throws {@link TooManyTagsException} (client fault)
 *  <p>The tags limit for a resource has been exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The validation was specified in an invalid format.</p>
 *
 * @throws {@link CodePipelineServiceException}
 * <p>Base exception class for all service exceptions from CodePipeline service.</p>
 *
 */
export class CreateCustomActionTypeCommand extends $Command<
  CreateCustomActionTypeCommandInput,
  CreateCustomActionTypeCommandOutput,
  CodePipelineClientResolvedConfig
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
  constructor(readonly input: CreateCustomActionTypeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodePipelineClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateCustomActionTypeCommandInput, CreateCustomActionTypeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateCustomActionTypeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodePipelineClient";
    const commandName = "CreateCustomActionTypeCommand";
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
  private serialize(input: CreateCustomActionTypeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateCustomActionTypeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateCustomActionTypeCommandOutput> {
    return de_CreateCustomActionTypeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
