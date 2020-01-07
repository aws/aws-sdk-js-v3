import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { DetachGroupPolicyRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DetachGroupPolicyCommandInput = DetachGroupPolicyRequest;
export declare type DetachGroupPolicyCommandOutput = __MetadataBearer;
export declare class DetachGroupPolicyCommand extends $Command<DetachGroupPolicyCommandInput, DetachGroupPolicyCommandOutput, IAMClientResolvedConfig> {
    readonly input: DetachGroupPolicyCommandInput;
    constructor(input: DetachGroupPolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DetachGroupPolicyCommandInput, DetachGroupPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
