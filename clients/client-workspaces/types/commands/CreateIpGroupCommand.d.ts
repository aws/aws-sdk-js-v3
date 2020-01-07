import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { CreateIpGroupRequest, CreateIpGroupResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateIpGroupCommandInput = CreateIpGroupRequest;
export declare type CreateIpGroupCommandOutput = CreateIpGroupResult & __MetadataBearer;
export declare class CreateIpGroupCommand extends $Command<CreateIpGroupCommandInput, CreateIpGroupCommandOutput, WorkSpacesClientResolvedConfig> {
    readonly input: CreateIpGroupCommandInput;
    constructor(input: CreateIpGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkSpacesClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateIpGroupCommandInput, CreateIpGroupCommandOutput>;
    private serialize;
    private deserialize;
}
