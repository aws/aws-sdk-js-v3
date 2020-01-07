import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { LaunchConfigurationNameType } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteLaunchConfigurationCommandInput = LaunchConfigurationNameType;
export declare type DeleteLaunchConfigurationCommandOutput = __MetadataBearer;
export declare class DeleteLaunchConfigurationCommand extends $Command<DeleteLaunchConfigurationCommandInput, DeleteLaunchConfigurationCommandOutput, AutoScalingClientResolvedConfig> {
    readonly input: DeleteLaunchConfigurationCommandInput;
    constructor(input: DeleteLaunchConfigurationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AutoScalingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteLaunchConfigurationCommandInput, DeleteLaunchConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
