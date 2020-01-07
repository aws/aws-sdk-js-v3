import { ApplicationAutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApplicationAutoScalingClient";
import { DeregisterScalableTargetRequest, DeregisterScalableTargetResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeregisterScalableTargetCommandInput = DeregisterScalableTargetRequest;
export declare type DeregisterScalableTargetCommandOutput = DeregisterScalableTargetResponse & __MetadataBearer;
export declare class DeregisterScalableTargetCommand extends $Command<DeregisterScalableTargetCommandInput, DeregisterScalableTargetCommandOutput, ApplicationAutoScalingClientResolvedConfig> {
    readonly input: DeregisterScalableTargetCommandInput;
    constructor(input: DeregisterScalableTargetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ApplicationAutoScalingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeregisterScalableTargetCommandInput, DeregisterScalableTargetCommandOutput>;
    private serialize;
    private deserialize;
}
