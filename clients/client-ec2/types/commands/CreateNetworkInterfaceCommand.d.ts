import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateNetworkInterfaceRequest, CreateNetworkInterfaceResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateNetworkInterfaceCommandInput = CreateNetworkInterfaceRequest;
export declare type CreateNetworkInterfaceCommandOutput = CreateNetworkInterfaceResult & __MetadataBearer;
export declare class CreateNetworkInterfaceCommand extends $Command<CreateNetworkInterfaceCommandInput, CreateNetworkInterfaceCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateNetworkInterfaceCommandInput;
    constructor(input: CreateNetworkInterfaceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateNetworkInterfaceCommandInput, CreateNetworkInterfaceCommandOutput>;
    private serialize;
    private deserialize;
}
