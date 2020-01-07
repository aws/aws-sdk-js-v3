import { ApplicationAutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApplicationAutoScalingClient";
import { PutScalingPolicyRequest, PutScalingPolicyResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutScalingPolicyCommandInput = PutScalingPolicyRequest;
export declare type PutScalingPolicyCommandOutput = PutScalingPolicyResponse & __MetadataBearer;
export declare class PutScalingPolicyCommand extends $Command<PutScalingPolicyCommandInput, PutScalingPolicyCommandOutput, ApplicationAutoScalingClientResolvedConfig> {
    readonly input: PutScalingPolicyCommandInput;
    constructor(input: PutScalingPolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ApplicationAutoScalingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutScalingPolicyCommandInput, PutScalingPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
