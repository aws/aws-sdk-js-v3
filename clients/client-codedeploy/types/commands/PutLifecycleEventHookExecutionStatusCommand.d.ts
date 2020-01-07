import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { PutLifecycleEventHookExecutionStatusInput, PutLifecycleEventHookExecutionStatusOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutLifecycleEventHookExecutionStatusCommandInput = PutLifecycleEventHookExecutionStatusInput;
export declare type PutLifecycleEventHookExecutionStatusCommandOutput = PutLifecycleEventHookExecutionStatusOutput & __MetadataBearer;
export declare class PutLifecycleEventHookExecutionStatusCommand extends $Command<PutLifecycleEventHookExecutionStatusCommandInput, PutLifecycleEventHookExecutionStatusCommandOutput, CodeDeployClientResolvedConfig> {
    readonly input: PutLifecycleEventHookExecutionStatusCommandInput;
    constructor(input: PutLifecycleEventHookExecutionStatusCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeDeployClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutLifecycleEventHookExecutionStatusCommandInput, PutLifecycleEventHookExecutionStatusCommandOutput>;
    private serialize;
    private deserialize;
}
