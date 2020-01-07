import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { DeleteLifecycleHookAnswer, DeleteLifecycleHookType } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteLifecycleHookCommandInput = DeleteLifecycleHookType;
export declare type DeleteLifecycleHookCommandOutput = DeleteLifecycleHookAnswer & __MetadataBearer;
export declare class DeleteLifecycleHookCommand extends $Command<DeleteLifecycleHookCommandInput, DeleteLifecycleHookCommandOutput, AutoScalingClientResolvedConfig> {
    readonly input: DeleteLifecycleHookCommandInput;
    constructor(input: DeleteLifecycleHookCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AutoScalingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteLifecycleHookCommandInput, DeleteLifecycleHookCommandOutput>;
    private serialize;
    private deserialize;
}
