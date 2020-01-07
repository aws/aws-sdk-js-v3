import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { DetachUserPolicyRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DetachUserPolicyCommandInput = DetachUserPolicyRequest;
export declare type DetachUserPolicyCommandOutput = __MetadataBearer;
export declare class DetachUserPolicyCommand extends $Command<DetachUserPolicyCommandInput, DetachUserPolicyCommandOutput, IAMClientResolvedConfig> {
    readonly input: DetachUserPolicyCommandInput;
    constructor(input: DetachUserPolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DetachUserPolicyCommandInput, DetachUserPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
