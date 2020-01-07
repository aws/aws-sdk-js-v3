import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { PutAutoScalingPolicyInput, PutAutoScalingPolicyOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutAutoScalingPolicyCommandInput = PutAutoScalingPolicyInput;
export declare type PutAutoScalingPolicyCommandOutput = PutAutoScalingPolicyOutput & __MetadataBearer;
export declare class PutAutoScalingPolicyCommand extends $Command<PutAutoScalingPolicyCommandInput, PutAutoScalingPolicyCommandOutput, EMRClientResolvedConfig> {
    readonly input: PutAutoScalingPolicyCommandInput;
    constructor(input: PutAutoScalingPolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EMRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutAutoScalingPolicyCommandInput, PutAutoScalingPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
