import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { RemoveAutoScalingPolicyInput, RemoveAutoScalingPolicyOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RemoveAutoScalingPolicyCommandInput = RemoveAutoScalingPolicyInput;
export declare type RemoveAutoScalingPolicyCommandOutput = RemoveAutoScalingPolicyOutput & __MetadataBearer;
export declare class RemoveAutoScalingPolicyCommand extends $Command<RemoveAutoScalingPolicyCommandInput, RemoveAutoScalingPolicyCommandOutput, EMRClientResolvedConfig> {
    readonly input: RemoveAutoScalingPolicyCommandInput;
    constructor(input: RemoveAutoScalingPolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EMRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RemoveAutoScalingPolicyCommandInput, RemoveAutoScalingPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
