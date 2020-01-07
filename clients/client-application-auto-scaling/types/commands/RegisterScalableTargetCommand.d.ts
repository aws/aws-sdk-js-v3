import { ApplicationAutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApplicationAutoScalingClient";
import { RegisterScalableTargetRequest, RegisterScalableTargetResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RegisterScalableTargetCommandInput = RegisterScalableTargetRequest;
export declare type RegisterScalableTargetCommandOutput = RegisterScalableTargetResponse & __MetadataBearer;
export declare class RegisterScalableTargetCommand extends $Command<RegisterScalableTargetCommandInput, RegisterScalableTargetCommandOutput, ApplicationAutoScalingClientResolvedConfig> {
    readonly input: RegisterScalableTargetCommandInput;
    constructor(input: RegisterScalableTargetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ApplicationAutoScalingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RegisterScalableTargetCommandInput, RegisterScalableTargetCommandOutput>;
    private serialize;
    private deserialize;
}
