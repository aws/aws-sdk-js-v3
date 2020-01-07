import { CloudHSMV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudHSMV2Client";
import { CreateClusterRequest, CreateClusterResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateClusterCommandInput = CreateClusterRequest;
export declare type CreateClusterCommandOutput = CreateClusterResponse & __MetadataBearer;
export declare class CreateClusterCommand extends $Command<CreateClusterCommandInput, CreateClusterCommandOutput, CloudHSMV2ClientResolvedConfig> {
    readonly input: CreateClusterCommandInput;
    constructor(input: CreateClusterCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudHSMV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateClusterCommandInput, CreateClusterCommandOutput>;
    private serialize;
    private deserialize;
}
