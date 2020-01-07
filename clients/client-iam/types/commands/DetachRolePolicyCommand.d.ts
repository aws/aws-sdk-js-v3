import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { DetachRolePolicyRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DetachRolePolicyCommandInput = DetachRolePolicyRequest;
export declare type DetachRolePolicyCommandOutput = __MetadataBearer;
export declare class DetachRolePolicyCommand extends $Command<DetachRolePolicyCommandInput, DetachRolePolicyCommandOutput, IAMClientResolvedConfig> {
    readonly input: DetachRolePolicyCommandInput;
    constructor(input: DetachRolePolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DetachRolePolicyCommandInput, DetachRolePolicyCommandOutput>;
    private serialize;
    private deserialize;
}
