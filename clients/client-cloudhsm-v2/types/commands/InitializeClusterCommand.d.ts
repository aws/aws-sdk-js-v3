import { CloudHSMV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudHSMV2Client";
import { InitializeClusterRequest, InitializeClusterResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type InitializeClusterCommandInput = InitializeClusterRequest;
export declare type InitializeClusterCommandOutput = InitializeClusterResponse & __MetadataBearer;
export declare class InitializeClusterCommand extends $Command<InitializeClusterCommandInput, InitializeClusterCommandOutput, CloudHSMV2ClientResolvedConfig> {
    readonly input: InitializeClusterCommandInput;
    constructor(input: InitializeClusterCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudHSMV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<InitializeClusterCommandInput, InitializeClusterCommandOutput>;
    private serialize;
    private deserialize;
}
