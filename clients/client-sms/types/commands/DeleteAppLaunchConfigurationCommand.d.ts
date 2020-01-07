import { SMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SMSClient";
import { DeleteAppLaunchConfigurationRequest, DeleteAppLaunchConfigurationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteAppLaunchConfigurationCommandInput = DeleteAppLaunchConfigurationRequest;
export declare type DeleteAppLaunchConfigurationCommandOutput = DeleteAppLaunchConfigurationResponse & __MetadataBearer;
export declare class DeleteAppLaunchConfigurationCommand extends $Command<DeleteAppLaunchConfigurationCommandInput, DeleteAppLaunchConfigurationCommandOutput, SMSClientResolvedConfig> {
    readonly input: DeleteAppLaunchConfigurationCommandInput;
    constructor(input: DeleteAppLaunchConfigurationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteAppLaunchConfigurationCommandInput, DeleteAppLaunchConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
