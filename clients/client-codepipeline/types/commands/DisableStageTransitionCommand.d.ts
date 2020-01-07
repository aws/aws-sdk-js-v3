import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { DisableStageTransitionInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DisableStageTransitionCommandInput = DisableStageTransitionInput;
export declare type DisableStageTransitionCommandOutput = __MetadataBearer;
export declare class DisableStageTransitionCommand extends $Command<DisableStageTransitionCommandInput, DisableStageTransitionCommandOutput, CodePipelineClientResolvedConfig> {
    readonly input: DisableStageTransitionCommandInput;
    constructor(input: DisableStageTransitionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodePipelineClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisableStageTransitionCommandInput, DisableStageTransitionCommandOutput>;
    private serialize;
    private deserialize;
}
