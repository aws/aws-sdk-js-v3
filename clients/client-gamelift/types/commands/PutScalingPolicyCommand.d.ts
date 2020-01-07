import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { PutScalingPolicyInput, PutScalingPolicyOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutScalingPolicyCommandInput = PutScalingPolicyInput;
export declare type PutScalingPolicyCommandOutput = PutScalingPolicyOutput & __MetadataBearer;
export declare class PutScalingPolicyCommand extends $Command<PutScalingPolicyCommandInput, PutScalingPolicyCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: PutScalingPolicyCommandInput;
    constructor(input: PutScalingPolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutScalingPolicyCommandInput, PutScalingPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
