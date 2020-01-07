import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { CompleteLifecycleActionAnswer, CompleteLifecycleActionType } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CompleteLifecycleActionCommandInput = CompleteLifecycleActionType;
export declare type CompleteLifecycleActionCommandOutput = CompleteLifecycleActionAnswer & __MetadataBearer;
export declare class CompleteLifecycleActionCommand extends $Command<CompleteLifecycleActionCommandInput, CompleteLifecycleActionCommandOutput, AutoScalingClientResolvedConfig> {
    readonly input: CompleteLifecycleActionCommandInput;
    constructor(input: CompleteLifecycleActionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AutoScalingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CompleteLifecycleActionCommandInput, CompleteLifecycleActionCommandOutput>;
    private serialize;
    private deserialize;
}
