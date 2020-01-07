import { SMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SMSClient";
import { GetAppLaunchConfigurationRequest, GetAppLaunchConfigurationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetAppLaunchConfigurationCommandInput = GetAppLaunchConfigurationRequest;
export declare type GetAppLaunchConfigurationCommandOutput = GetAppLaunchConfigurationResponse & __MetadataBearer;
export declare class GetAppLaunchConfigurationCommand extends $Command<GetAppLaunchConfigurationCommandInput, GetAppLaunchConfigurationCommandOutput, SMSClientResolvedConfig> {
    readonly input: GetAppLaunchConfigurationCommandInput;
    constructor(input: GetAppLaunchConfigurationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetAppLaunchConfigurationCommandInput, GetAppLaunchConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
