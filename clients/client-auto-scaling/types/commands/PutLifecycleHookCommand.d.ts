import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { PutLifecycleHookAnswer, PutLifecycleHookType } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutLifecycleHookCommandInput = PutLifecycleHookType;
export declare type PutLifecycleHookCommandOutput = PutLifecycleHookAnswer & __MetadataBearer;
export declare class PutLifecycleHookCommand extends $Command<PutLifecycleHookCommandInput, PutLifecycleHookCommandOutput, AutoScalingClientResolvedConfig> {
    readonly input: PutLifecycleHookCommandInput;
    constructor(input: PutLifecycleHookCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AutoScalingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutLifecycleHookCommandInput, PutLifecycleHookCommandOutput>;
    private serialize;
    private deserialize;
}
