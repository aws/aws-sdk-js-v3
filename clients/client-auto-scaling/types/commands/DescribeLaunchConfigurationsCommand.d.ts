import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { LaunchConfigurationNamesType, LaunchConfigurationsType } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeLaunchConfigurationsCommandInput = LaunchConfigurationNamesType;
export declare type DescribeLaunchConfigurationsCommandOutput = LaunchConfigurationsType & __MetadataBearer;
export declare class DescribeLaunchConfigurationsCommand extends $Command<DescribeLaunchConfigurationsCommandInput, DescribeLaunchConfigurationsCommandOutput, AutoScalingClientResolvedConfig> {
    readonly input: DescribeLaunchConfigurationsCommandInput;
    constructor(input: DescribeLaunchConfigurationsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AutoScalingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeLaunchConfigurationsCommandInput, DescribeLaunchConfigurationsCommandOutput>;
    private serialize;
    private deserialize;
}
