import { SMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SMSClient";
import { LaunchAppRequest, LaunchAppResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type LaunchAppCommandInput = LaunchAppRequest;
export declare type LaunchAppCommandOutput = LaunchAppResponse & __MetadataBearer;
export declare class LaunchAppCommand extends $Command<LaunchAppCommandInput, LaunchAppCommandOutput, SMSClientResolvedConfig> {
    readonly input: LaunchAppCommandInput;
    constructor(input: LaunchAppCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<LaunchAppCommandInput, LaunchAppCommandOutput>;
    private serialize;
    private deserialize;
}
