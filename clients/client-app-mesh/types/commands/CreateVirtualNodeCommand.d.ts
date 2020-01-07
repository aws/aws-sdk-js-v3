import { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient";
import { CreateVirtualNodeInput, CreateVirtualNodeOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateVirtualNodeCommandInput = CreateVirtualNodeInput;
export declare type CreateVirtualNodeCommandOutput = CreateVirtualNodeOutput & __MetadataBearer;
export declare class CreateVirtualNodeCommand extends $Command<CreateVirtualNodeCommandInput, CreateVirtualNodeCommandOutput, AppMeshClientResolvedConfig> {
    readonly input: CreateVirtualNodeCommandInput;
    constructor(input: CreateVirtualNodeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AppMeshClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateVirtualNodeCommandInput, CreateVirtualNodeCommandOutput>;
    private serialize;
    private deserialize;
}
