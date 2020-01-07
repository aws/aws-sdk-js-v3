import { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient";
import { CreateMeshInput, CreateMeshOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateMeshCommandInput = CreateMeshInput;
export declare type CreateMeshCommandOutput = CreateMeshOutput & __MetadataBearer;
export declare class CreateMeshCommand extends $Command<CreateMeshCommandInput, CreateMeshCommandOutput, AppMeshClientResolvedConfig> {
    readonly input: CreateMeshCommandInput;
    constructor(input: CreateMeshCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AppMeshClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateMeshCommandInput, CreateMeshCommandOutput>;
    private serialize;
    private deserialize;
}
