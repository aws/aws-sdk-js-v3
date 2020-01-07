import { SMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SMSClient";
import { PutAppLaunchConfigurationRequest, PutAppLaunchConfigurationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutAppLaunchConfigurationCommandInput = PutAppLaunchConfigurationRequest;
export declare type PutAppLaunchConfigurationCommandOutput = PutAppLaunchConfigurationResponse & __MetadataBearer;
export declare class PutAppLaunchConfigurationCommand extends $Command<PutAppLaunchConfigurationCommandInput, PutAppLaunchConfigurationCommandOutput, SMSClientResolvedConfig> {
    readonly input: PutAppLaunchConfigurationCommandInput;
    constructor(input: PutAppLaunchConfigurationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutAppLaunchConfigurationCommandInput, PutAppLaunchConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
