import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { PolicyARNType, PutScalingPolicyType } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutScalingPolicyCommandInput = PutScalingPolicyType;
export declare type PutScalingPolicyCommandOutput = PolicyARNType & __MetadataBearer;
export declare class PutScalingPolicyCommand extends $Command<PutScalingPolicyCommandInput, PutScalingPolicyCommandOutput, AutoScalingClientResolvedConfig> {
    readonly input: PutScalingPolicyCommandInput;
    constructor(input: PutScalingPolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AutoScalingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutScalingPolicyCommandInput, PutScalingPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
