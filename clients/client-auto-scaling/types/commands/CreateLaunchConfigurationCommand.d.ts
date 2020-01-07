import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { CreateLaunchConfigurationType } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateLaunchConfigurationCommandInput = CreateLaunchConfigurationType;
export declare type CreateLaunchConfigurationCommandOutput = __MetadataBearer;
export declare class CreateLaunchConfigurationCommand extends $Command<CreateLaunchConfigurationCommandInput, CreateLaunchConfigurationCommandOutput, AutoScalingClientResolvedConfig> {
    readonly input: CreateLaunchConfigurationCommandInput;
    constructor(input: CreateLaunchConfigurationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AutoScalingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateLaunchConfigurationCommandInput, CreateLaunchConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
